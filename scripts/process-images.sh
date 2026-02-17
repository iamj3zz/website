#!/bin/bash

# process-images.sh — Resize and quality-correct work folder images
#
# Usage:
#   ./scripts/process-images.sh <path-to-work-folder>
#   e.g. ./scripts/process-images.sh assets/works/2020-01-01-iris
#
# What it does:
#   - hero.jpg            → resize+crop to 1440×810, quality 85 (in-place)
#   - {slug}-gallery##_1440w.jpg → resize to 1440px wide, quality 85 (in-place)
#   - thumbnail.jpg       → warns if wrong size, never auto-modified
#   - Unknown filenames   → warns and exits non-zero (human must rename)
#   - PDFs, videos, etc.  → silently skipped
#
# Exit codes:
#   0 — all images processed successfully (or nothing to do)
#   1 — unknown filenames found that require human renaming

set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

CHECK="✓"
CROSS="✗"
WARN="⚠"
ARROW="→"

WORK_DIR="${1:-}"

if [ -z "$WORK_DIR" ]; then
    echo -e "${RED}${CROSS} Usage: $0 <path-to-work-folder>${NC}"
    echo "  e.g. $0 assets/works/2020-01-01-iris"
    exit 1
fi

if [ ! -d "$WORK_DIR" ]; then
    echo -e "${RED}${CROSS} Directory not found: $WORK_DIR${NC}"
    exit 1
fi

# Check ImageMagick availability
if ! command -v identify &>/dev/null || ! command -v convert &>/dev/null || ! command -v mogrify &>/dev/null; then
    echo -e "${RED}${CROSS} ImageMagick not installed. Install with: sudo apt-get install imagemagick${NC}"
    exit 1
fi

# Derive folder basename and the default slug (strip YYYY-MM-DD- prefix)
FOLDER_BASENAME="$(basename "$WORK_DIR")"
DEFAULT_SLUG="$(echo "$FOLDER_BASENAME" | sed 's/^[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}-//')"

echo -e "${BLUE}Processing images in: $WORK_DIR${NC}"
echo -e "${BLUE}Default slug: $DEFAULT_SLUG${NC}"

# Detect gallery slug from existing conforming gallery files.
# A gallery file looks like: {some-slug}-gallery##_1440w.jpg
# We read the slug from the first matching file found.
GALLERY_SLUG=""
for f in "$WORK_DIR"/*-gallery[0-9][0-9]_1440w.jpg; do
    [ -f "$f" ] || continue
    basename_f="$(basename "$f")"
    # Extract the slug: everything before -gallery##_1440w.jpg
    detected="$(echo "$basename_f" | sed 's/-gallery[0-9][0-9]_1440w\.jpg$//')"
    if [ -n "$detected" ]; then
        GALLERY_SLUG="$detected"
        echo -e "${BLUE}Detected gallery slug from existing files: $GALLERY_SLUG${NC}"
        break
    fi
done

# Fall back to default slug if no existing gallery files found
if [ -z "$GALLERY_SLUG" ]; then
    GALLERY_SLUG="$DEFAULT_SLUG"
    echo -e "${BLUE}No existing gallery files found, using default slug: $GALLERY_SLUG${NC}"
fi

echo ""

PROCESSED=0
SKIPPED=0
WARNED=0
HAS_UNKNOWN=false

# Process each image file (jpg/jpeg/png) directly in the folder (not subdirs)
while IFS= read -r -d '' IMG; do
    FILENAME="$(basename "$IMG")"
    EXT="${FILENAME##*.}"
    EXT_LOWER="${EXT,,}"  # lowercase extension

    # Skip non-image files (pdfs, videos, etc.) — these are handled silently
    case "$EXT_LOWER" in
        jpg|jpeg|png) ;;
        *) continue ;;
    esac

    # -------------------------------------------------------------------------
    # thumbnail.jpg — warn if wrong size, never auto-modify
    # -------------------------------------------------------------------------
    if [ "$FILENAME" = "thumbnail.jpg" ]; then
        DIMS="$(identify -format "%wx%h" "$IMG" 2>/dev/null || echo "unknown")"
        if [ "$DIMS" != "700x700" ]; then
            echo -e "${YELLOW}${WARN} thumbnail.jpg is ${DIMS} (expected 700×700).${NC}"
            echo "  Thumbnails require an artistic crop — please resize manually:"
            echo "  convert -resize 700x700^ -gravity center -extent 700x700 -quality 85 \"$IMG\" \"$IMG\""
            WARNED=$((WARNED + 1))
        else
            echo -e "${GREEN}${CHECK} thumbnail.jpg — ${DIMS} OK${NC}"
            SKIPPED=$((SKIPPED + 1))
        fi
        continue
    fi

    # -------------------------------------------------------------------------
    # hero.jpg — resize+crop to 1440×810
    # -------------------------------------------------------------------------
    if [ "$FILENAME" = "hero.jpg" ]; then
        DIMS="$(identify -format "%wx%h" "$IMG" 2>/dev/null || echo "unknown")"
        if [ "$DIMS" = "1440x810" ]; then
            echo -e "${GREEN}${CHECK} hero.jpg — ${DIMS} already correct${NC}"
            SKIPPED=$((SKIPPED + 1))
        else
            echo -e "${YELLOW}${ARROW} hero.jpg — ${DIMS} → resizing to 1440×810 (quality 85)...${NC}"
            convert "$IMG" \
                -resize "1440x810^" \
                -gravity center \
                -extent "1440x810" \
                -quality 85 \
                "$IMG"
            NEW_DIMS="$(identify -format "%wx%h" "$IMG" 2>/dev/null || echo "unknown")"
            echo -e "${GREEN}${CHECK} hero.jpg — done (${NEW_DIMS})${NC}"
            PROCESSED=$((PROCESSED + 1))
        fi
        continue
    fi

    # -------------------------------------------------------------------------
    # {slug}-gallery##_1440w.jpg — resize to 1440px wide, quality 85
    # -------------------------------------------------------------------------
    if echo "$FILENAME" | grep -qE "^${GALLERY_SLUG}-gallery[0-9]{2}_1440w\.(jpg|jpeg|png)$"; then
        WIDTH="$(identify -format "%w" "$IMG" 2>/dev/null || echo "0")"
        if [ "$WIDTH" = "1440" ]; then
            echo -e "${GREEN}${CHECK} $FILENAME — 1440px wide, OK${NC}"
            SKIPPED=$((SKIPPED + 1))
        else
            echo -e "${YELLOW}${ARROW} $FILENAME — ${WIDTH}px wide → resizing to 1440px (quality 85)...${NC}"
            mogrify -resize "1440x" -quality 85 "$IMG"
            NEW_WIDTH="$(identify -format "%w" "$IMG" 2>/dev/null || echo "unknown")"
            echo -e "${GREEN}${CHECK} $FILENAME — done (${NEW_WIDTH}px wide)${NC}"
            PROCESSED=$((PROCESSED + 1))
        fi
        continue
    fi

    # -------------------------------------------------------------------------
    # Unknown filename — warn, do NOT rename (human decision)
    # -------------------------------------------------------------------------
    echo -e "${RED}${CROSS} Unknown filename: $FILENAME${NC}"
    echo "  This file does not match any known convention:"
    echo "    • thumbnail.jpg"
    echo "    • hero.jpg"
    echo "    • ${GALLERY_SLUG}-gallery##_1440w.jpg  (e.g. ${GALLERY_SLUG}-gallery01_1440w.jpg)"
    echo "  Please rename it manually, then re-run the test."
    HAS_UNKNOWN=true

done < <(find "$WORK_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 | sort -z)

echo ""
echo "──────────────────────────────────────────"
echo -e "  Processed : ${PROCESSED}"
echo -e "  Unchanged : ${SKIPPED}"
if [ "$WARNED" -gt 0 ]; then
    echo -e "  Warnings  : ${WARNED} (thumbnail — manual action required)"
fi
echo "──────────────────────────────────────────"

if [ "$HAS_UNKNOWN" = true ]; then
    echo ""
    echo -e "${RED}${CROSS} Unknown filenames found — please rename them and re-run.${NC}"
    exit 1
fi

echo -e "${GREEN}${CHECK} All images in $WORK_DIR are now conforming.${NC}"
exit 0
