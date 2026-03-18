#!/bin/bash

# process-artworks.sh — Generate thumbnail and print images for gallery artworks
#
# Usage:
#   ./scripts/process-artworks.sh [--dry-run] [--force]
#
# Options:
#   --dry-run    Preview the mapping and operations without writing files
#   --force      Overwrite existing outputs (default: skip if already exists)
#
# What it does:
#   - Reads source images from docs/HIGHRES-IMAGES/1200p_{B|W}[1-8].png
#   - Creates thumbnail.png (800×800, letterboxed with white padding)
#   - Creates print.png (max 1800px on longest side, aspect preserved)
#   - Places outputs in assets/artworks/{slug}/ directories
#
# Exit codes:
#   0 — all images processed successfully (or nothing to do)
#   1 — missing source file, ImageMagick not installed, or processing error

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

# ============================================================================
# Configuration
# ============================================================================

# Auto-detect repo root (script location → scripts/ → repo root)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

SOURCE_DIR="$REPO_ROOT/docs/HIGHRES-IMAGES"
ARTWORKS_DIR="$REPO_ROOT/assets/artworks"

DRY_RUN=false
FORCE=false

# Parse flags
while [[ $# -gt 0 ]]; do
    case "$1" in
        --dry-run) DRY_RUN=true; shift ;;
        --force)   FORCE=true; shift ;;
        *)         echo "Unknown option: $1"; exit 1 ;;
    esac
done

# ============================================================================
# Artwork Mapping: source file key → slug
# ============================================================================

declare -A MAPPING=(
    [B1]="2026-03-01-fractured-system"
    [B2]="2026-03-02-void-emergence"
    [B3]="2026-03-03-debris-field"
    [B4]="2026-03-04-layered-collapse"
    [B5]="2026-03-05-scattered-archipelago"
    [B6]="2026-03-06-saturated-network"
    [B7]="2026-03-07-fossilized-echo"
    [B8]="2026-03-08-compressed-time"
    [W1]="2026-03-09-last-coordinate"
    [W2]="2026-03-10-grid-zero"
    [W3]="2026-03-11-horizon-dissolution"
    [W4]="2026-03-12-inverted-territory"
    [W5]="2026-03-13-organic-terrain"
    [W6]="2026-03-14-primal-chaos"
    [W7]="2026-03-15-containment-lines"
    [W8]="2026-03-16-fading-lines"
)

# ============================================================================
# Validation
# ============================================================================

if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}${CROSS} Source directory not found: $SOURCE_DIR${NC}"
    exit 1
fi

if [ ! -d "$ARTWORKS_DIR" ]; then
    echo -e "${RED}${CROSS} Artworks directory not found: $ARTWORKS_DIR${NC}"
    exit 1
fi

# Check ImageMagick availability
if ! command -v identify &>/dev/null || ! command -v convert &>/dev/null; then
    echo -e "${RED}${CROSS} ImageMagick not installed. Install with: sudo apt-get install imagemagick${NC}"
    exit 1
fi

# For large images, ImageMagick policy may need adjustment
# The policy.xml file enforces hard resource limits that cannot be overridden via CLI
# If you get "cache resources exhausted" errors, increase the limits in:
#   /etc/ImageMagick-6/policy.xml
# Example fix (requires sudo):
#   sudo sed -i 's/name="memory" value="[^"]*"/name="memory" value="4GiB"/' /etc/ImageMagick-6/policy.xml
#   sudo sed -i 's/name="disk" value="[^"]*"/name="disk" value="4GiB"/' /etc/ImageMagick-6/policy.xml
#   sudo sed -i 's/name="area" value="[^"]*"/name="area" value="4GP"/' /etc/ImageMagick-6/policy.xml

# ============================================================================
# Execution
# ============================================================================

if [ "$DRY_RUN" = true ]; then
    echo -e "${BLUE}=== DRY RUN ===${NC}"
    echo "Source dir: $SOURCE_DIR"
    echo "Output dir: $ARTWORKS_DIR"
    echo ""
fi

PROCESSED=0
SKIPPED=0
ERRORS=0

for key in "${!MAPPING[@]}"; do
    slug="${MAPPING[$key]}"
    # Try JPG first, then PNG for flexibility
    src_file=""
    for ext in jpg png; do
        if [ -f "$SOURCE_DIR/1200p_${key}.$ext" ]; then
            src_file="$SOURCE_DIR/1200p_${key}.$ext"
            break
        fi
    done

    thumb_out="$ARTWORKS_DIR/$slug/thumbnail.png"
    print_out="$ARTWORKS_DIR/$slug/print.png"

    # -----------------------------------------------------------------------
    # Check source exists
    # -----------------------------------------------------------------------

    if [ -z "$src_file" ]; then
        echo -e "${RED}${CROSS} Source missing: 1200p_${key}.(jpg|png)${NC}"
        ERRORS=$((ERRORS + 1))
        continue
    fi

    # -----------------------------------------------------------------------
    # Generate thumbnail.png (800×800 letterboxed)
    # -----------------------------------------------------------------------

    if [ "$FORCE" = true ] || [ ! -f "$thumb_out" ]; then
        if [ "$DRY_RUN" = true ]; then
            echo -e "${YELLOW}${ARROW} [DRY RUN] $slug/thumbnail.png${NC}"
            echo "  convert '$src_file' -resize 800x800 -gravity center -background white -extent 800x800 '$thumb_out'"
        else
            echo -e "${YELLOW}${ARROW} $slug/thumbnail.png${NC}"
            convert "$src_file" \
                -resize 800x800 \
                -gravity center \
                -background white \
                -extent 800x800 \
                "$thumb_out" 2>/tmp/convert_err_$$.txt
            CONVERT_EXIT=$?

            if [ $CONVERT_EXIT -ne 0 ] && grep -q "cache resources exhausted" /tmp/convert_err_$$.txt 2>/dev/null; then
                echo -e "${RED}${CROSS} ImageMagick cache resources exhausted${NC}"
                echo "  This is a policy.xml configuration issue. Run:"
                echo "  sudo sed -i 's/name=\"memory\" value=\"[^\"]*\"/name=\"memory\" value=\"4GiB\"/' /etc/ImageMagick-6/policy.xml"
                echo "  sudo sed -i 's/name=\"disk\" value=\"[^\"]*\"/name=\"disk\" value=\"4GiB\"/' /etc/ImageMagick-6/policy.xml"
                echo "  sudo sed -i 's/name=\"area\" value=\"[^\"]*\"/name=\"area\" value=\"4GP\"/' /etc/ImageMagick-6/policy.xml"
                ERRORS=$((ERRORS + 1))
                rm -f /tmp/convert_err_$$.txt
                continue
            elif [ -f "$thumb_out" ] && [ $CONVERT_EXIT -eq 0 ]; then
                DIMS="$(identify -format "%wx%h" "$thumb_out" 2>/dev/null || echo "unknown")"
                echo -e "${GREEN}${CHECK} thumbnail.png — ${DIMS}${NC}"
                PROCESSED=$((PROCESSED + 1))
            else
                echo -e "${RED}${CROSS} Failed to generate thumbnail.png${NC}"
                if [ -f /tmp/convert_err_$$.txt ] && [ -s /tmp/convert_err_$$.txt ]; then
                    head -1 /tmp/convert_err_$$.txt | sed 's/^/  Error: /'
                fi
                ERRORS=$((ERRORS + 1))
                rm -f /tmp/convert_err_$$.txt
                continue
            fi
            rm -f /tmp/convert_err_$$.txt
        fi
    else
        if [ "$DRY_RUN" = false ]; then
            echo -e "${GREEN}${CHECK} $slug/thumbnail.png — already exists${NC}"
            SKIPPED=$((SKIPPED + 1))
        fi
    fi

    # -----------------------------------------------------------------------
    # Generate print.png (aspect preserved, max 1800px)
    # -----------------------------------------------------------------------

    if [ "$FORCE" = true ] || [ ! -f "$print_out" ]; then
        if [ "$DRY_RUN" = true ]; then
            echo -e "${YELLOW}${ARROW} [DRY RUN] $slug/print.png${NC}"
            echo "  convert '$src_file' -resize 1800x1800> '$print_out'"
        else
            echo -e "${YELLOW}${ARROW} $slug/print.png${NC}"
            convert "$src_file" \
                -resize '1800x1800>' \
                "$print_out" 2>/tmp/convert_err_$$.txt
            CONVERT_EXIT=$?

            if [ $CONVERT_EXIT -ne 0 ] && grep -q "cache resources exhausted" /tmp/convert_err_$$.txt 2>/dev/null; then
                echo -e "${RED}${CROSS} ImageMagick cache resources exhausted${NC}"
                echo "  This is a policy.xml configuration issue. Run:"
                echo "  sudo sed -i 's/name=\"memory\" value=\"[^\"]*\"/name=\"memory\" value=\"4GiB\"/' /etc/ImageMagick-6/policy.xml"
                echo "  sudo sed -i 's/name=\"disk\" value=\"[^\"]*\"/name=\"disk\" value=\"4GiB\"/' /etc/ImageMagick-6/policy.xml"
                echo "  sudo sed -i 's/name=\"area\" value=\"[^\"]*\"/name=\"area\" value=\"4GP\"/' /etc/ImageMagick-6/policy.xml"
                ERRORS=$((ERRORS + 1))
                rm -f /tmp/convert_err_$$.txt
                continue
            elif [ -f "$print_out" ] && [ $CONVERT_EXIT -eq 0 ]; then
                DIMS="$(identify -format "%wx%h" "$print_out" 2>/dev/null || echo "unknown")"
                echo -e "${GREEN}${CHECK} print.png — ${DIMS}${NC}"
                PROCESSED=$((PROCESSED + 1))
            else
                echo -e "${RED}${CROSS} Failed to generate print.png${NC}"
                if [ -f /tmp/convert_err_$$.txt ] && [ -s /tmp/convert_err_$$.txt ]; then
                    head -1 /tmp/convert_err_$$.txt | sed 's/^/  Error: /'
                fi
                ERRORS=$((ERRORS + 1))
                rm -f /tmp/convert_err_$$.txt
                continue
            fi
            rm -f /tmp/convert_err_$$.txt
        fi
    else
        if [ "$DRY_RUN" = false ]; then
            echo -e "${GREEN}${CHECK} $slug/print.png — already exists${NC}"
            SKIPPED=$((SKIPPED + 1))
        fi
    fi

    echo ""
done

# ============================================================================
# Summary
# ============================================================================

if [ "$DRY_RUN" = false ]; then
    echo "──────────────────────────────────────────"
    echo "  Processed : ${PROCESSED}"
    echo "  Skipped   : ${SKIPPED}"
    if [ "$ERRORS" -gt 0 ]; then
        echo -e "  ${RED}Errors    : ${ERRORS}${NC}"
    fi
    echo "──────────────────────────────────────────"
    echo ""

    if [ "$ERRORS" -gt 0 ]; then
        echo -e "${RED}${CROSS} $ERRORS error(s) encountered. Please check the output above.${NC}"
        exit 1
    else
        echo -e "${GREEN}${CHECK} All artwork images processed successfully.${NC}"
        exit 0
    fi
else
    echo -e "${BLUE}=== END DRY RUN ===${NC}"
    echo "To execute, run: ./scripts/process-artworks.sh"
    exit 0
fi
