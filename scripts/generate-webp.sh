#!/bin/bash

# generate-webp.sh — Generate WebP siblings for web-facing JPEG/PNG images
#
# Usage:
#   ./scripts/generate-webp.sh [--dry-run] [--force] [--quality N] [--stage] [path...]
#
# Options:
#   --dry-run     Preview what would be converted without writing files
#   --force       Regenerate even if a .webp sibling already exists
#   --quality N   cwebp quality, 0-100 (default: 82)
#   --stage       git add each newly generated .webp (used by the Lefthook
#                 pre-commit hook so new siblings ride along in the same
#                 commit as their source; not needed for manual runs)
#   path...       Directories/files to scan (default: assets/works assets/artworks)
#
# What it does:
#   - Finds *.jpg/*.jpeg/*.png under the given paths
#   - Skips anything under a hires/ directory and any file named print.png —
#     those are intentionally full-resolution download-only assets (press
#     photos, gallery prints) and must not be re-encoded or duplicated
#   - Writes a same-name .webp sibling next to each source (source untouched)
#   - Embeds the same AI-training opt-out / rights metadata as other
#     generated images, via embed-image-rights.sh (no-ops if exiftool
#     isn't installed)
#
# This does NOT edit any Jekyll templates — it only generates files.
# Existing <img> tags keep working unchanged until templates are updated
# to reference the .webp via <picture>/<source>.
#
# Exit codes:
#   0 — all images processed successfully (or nothing to do)
#   1 — cwebp not installed, or a conversion error occurred

set -uo pipefail

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

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

DRY_RUN=false
FORCE=false
QUALITY=82
STAGE=false
PATHS=()

while [[ $# -gt 0 ]]; do
    case "$1" in
        --dry-run) DRY_RUN=true; shift ;;
        --force)   FORCE=true; shift ;;
        --quality) QUALITY="$2"; shift 2 ;;
        --stage)   STAGE=true; shift ;;
        *)         PATHS+=("$1"); shift ;;
    esac
done

if [ "${#PATHS[@]}" -eq 0 ]; then
    PATHS=("$REPO_ROOT/assets/works" "$REPO_ROOT/assets/artworks")
fi

if ! command -v cwebp &>/dev/null; then
    echo -e "${RED}${CROSS} cwebp not installed. Install with: sudo apt-get install webp${NC}"
    exit 1
fi

HAS_EXIFTOOL=false
if command -v exiftool &>/dev/null; then
    HAS_EXIFTOOL=true
else
    echo -e "${YELLOW}${WARN} exiftool not installed — generated .webp files will not carry embedded rights/AI-training-opt-out metadata.${NC}"
    echo "  Install with: sudo apt-get install libimage-exiftool-perl"
    echo ""
fi

# cwebp's built-in JPEG decoder only handles standard 3-component (RGB/YCbCr)
# JPEGs. Some source files are 4-component (CMYK/YCCK) and fail with
# "Unsupported color conversion request" — if ImageMagick is available, fall
# back to normalizing a temp copy to sRGB before retrying.
HAS_IMAGEMAGICK=false
if command -v convert &>/dev/null; then
    HAS_IMAGEMAGICK=true
fi

embed_rights_metadata() {
    local file="$1"
    [ "$HAS_EXIFTOOL" = true ] || return 0
    "$SCRIPT_DIR/embed-image-rights.sh" "$file"
}

if [ "$DRY_RUN" = true ]; then
    echo -e "${BLUE}=== DRY RUN ===${NC}"
fi
echo "Scanning: ${PATHS[*]}"
echo "Quality: $QUALITY"
echo ""

PROCESSED=0
SKIPPED=0
ERRORS=0
TOTAL_BEFORE=0
TOTAL_AFTER=0

while IFS= read -r -d '' src; do
    # Skip full-resolution download-only assets
    case "$src" in
        */hires/*) continue ;;
    esac
    [ "$(basename "$src")" = "print.png" ] && continue

    out="${src%.*}.webp"

    if [ "$FORCE" = false ] && [ -f "$out" ]; then
        echo -e "${GREEN}${CHECK} ${out#"$REPO_ROOT"/} — already exists${NC}"
        SKIPPED=$((SKIPPED + 1))
        continue
    fi

    if [ "$DRY_RUN" = true ]; then
        echo -e "${YELLOW}${ARROW} [DRY RUN] ${out#"$REPO_ROOT"/}${NC}"
        echo "  cwebp -q $QUALITY '$src' -o '$out'"
        continue
    fi

    CONVERTED_OK=false
    if cwebp -quiet -q "$QUALITY" "$src" -o "$out" 2>/tmp/cwebp_err_$$.txt; then
        CONVERTED_OK=true
    elif [ "$HAS_IMAGEMAGICK" = true ] && grep -q "color conversion\|Unsupported" /tmp/cwebp_err_$$.txt; then
        # Likely a CMYK/YCCK source — normalize to sRGB in a temp file and retry
        TMP_RGB="$(mktemp --suffix=.png 2>/dev/null)"
        [ -z "$TMP_RGB" ] && TMP_RGB="$(mktemp).png"
        if convert "$src" -colorspace sRGB "$TMP_RGB" 2>/dev/null && \
           cwebp -quiet -q "$QUALITY" "$TMP_RGB" -o "$out" 2>/dev/null; then
            CONVERTED_OK=true
            echo -e "${YELLOW}${WARN} ${src#"$REPO_ROOT"/} is CMYK — converted via ImageMagick sRGB fallback${NC}"
        fi
        rm -f "$TMP_RGB"
    fi
    rm -f /tmp/cwebp_err_$$.txt

    if [ "$CONVERTED_OK" = true ]; then
        embed_rights_metadata "$out"
        [ "$STAGE" = true ] && git -C "$REPO_ROOT" add "$out" 2>/dev/null
        BEFORE=$(stat -c%s "$src" 2>/dev/null || stat -f%z "$src")
        AFTER=$(stat -c%s "$out" 2>/dev/null || stat -f%z "$out")
        TOTAL_BEFORE=$((TOTAL_BEFORE + BEFORE))
        TOTAL_AFTER=$((TOTAL_AFTER + AFTER))
        PCT=$(( (BEFORE - AFTER) * 100 / BEFORE ))
        echo -e "${GREEN}${CHECK} ${out#"$REPO_ROOT"/} — $((BEFORE / 1024))KB → $((AFTER / 1024))KB (-${PCT}%)${NC}"
        PROCESSED=$((PROCESSED + 1))
    else
        echo -e "${RED}${CROSS} Failed: ${src#"$REPO_ROOT"/}${NC}"
        if [ "$HAS_IMAGEMAGICK" = false ]; then
            echo "  This looks like a CMYK JPEG (cwebp can't decode 4-component JPEGs directly)."
            echo "  Install ImageMagick for an automatic sRGB fallback: sudo apt-get install imagemagick"
        fi
        ERRORS=$((ERRORS + 1))
    fi
done < <(find "${PATHS[@]}" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0 | sort -z)

echo ""
echo "──────────────────────────────────────────"
echo "  Processed : ${PROCESSED}"
echo "  Skipped   : ${SKIPPED}"
if [ "$ERRORS" -gt 0 ]; then
    echo -e "  ${RED}Errors    : ${ERRORS}${NC}"
fi
if [ "$TOTAL_BEFORE" -gt 0 ]; then
    SAVED_PCT=$(( (TOTAL_BEFORE - TOTAL_AFTER) * 100 / TOTAL_BEFORE ))
    echo "  Total     : $((TOTAL_BEFORE / 1024))KB → $((TOTAL_AFTER / 1024))KB (-${SAVED_PCT}%)"
fi
echo "──────────────────────────────────────────"

if [ "$DRY_RUN" = true ]; then
    echo ""
    echo -e "${BLUE}=== END DRY RUN ===${NC}"
    echo "To execute, run: ./scripts/generate-webp.sh"
    exit 0
fi

if [ "$ERRORS" -gt 0 ]; then
    echo -e "${RED}${CROSS} $ERRORS error(s) encountered. Please check the output above.${NC}"
    exit 1
fi

echo -e "${GREEN}${CHECK} Done.${NC}"
exit 0
