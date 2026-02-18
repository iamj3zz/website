#!/bin/bash

# Pre-Push Testing Script
# Run this before git add/commit/push to catch issues locally
#
# Usage:
#   ./test-before-push.sh           # Run all tests (fast - no Lighthouse)
#   ./test-before-push.sh --full    # Run all tests including Lighthouse
#   ./test-before-push.sh --quick   # Run only YAML lint (fastest)

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Emojis
CHECK="✓"
CROSS="✗"
ARROW="→"

# Track overall status
ALL_PASSED=true

# Print section header
print_header() {
    echo ""
    echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
    echo ""
}

# Print step
print_step() {
    echo -e "${YELLOW}${ARROW} $1${NC}"
}

# Print success
print_success() {
    echo -e "${GREEN}${CHECK} $1${NC}"
}

# Print error
print_error() {
    echo -e "${RED}${CROSS} $1${NC}"
}

# Parse arguments
RUN_LIGHTHOUSE=false
QUICK_MODE=false
SKIP_IMAGES=false

for arg in "$@"; do
    case $arg in
        --full)
            RUN_LIGHTHOUSE=true
            shift
            ;;
        --skip-images)
            SKIP_IMAGES=true
            shift
            ;;
        --quick)
            QUICK_MODE=true
            shift
            ;;
        --help|-h)
            echo "Pre-Push Testing Script"
            echo ""
            echo "Usage:"
            echo "  ./test-before-push.sh                Run all tests (fast - no Lighthouse)"
            echo "  ./test-before-push.sh --full         Run all tests including Lighthouse"
            echo "  ./test-before-push.sh --quick        Run only YAML lint (fastest)"
            echo "  ./test-before-push.sh --skip-images  Skip image asset validation"
            echo ""
            echo "Recommended workflow:"
            echo "  1. Run this script"
            echo "  2. Fix any errors it reports"
            echo "  3. Run again until all tests pass"
            echo "  4. Then: git add . && git commit -m 'message' && git push"
            exit 0
            ;;
    esac
done

print_header "Pre-Push Testing - Local Validation"

echo "⚠️  IMPORTANT: This is your ONLY test gate!"
echo ""
echo "GitHub Actions does NOT run tests - it only builds and deploys."
echo "All quality checks happen HERE, locally, before you push."
echo ""
echo "This script will validate:"
echo "  • Image assets (dimensions, naming convention)"
echo "  • YAML syntax and formatting"
echo "  • Jekyll build"
echo "  • HTML structure, links, and images"
echo "  • Print layouts and QR codes"
echo "  • Performance, accessibility, and SEO (optional)"
echo ""
echo "Fix any errors, then run again until all tests pass."
echo ""

# Check if we're in the right directory
if [ ! -f "_config.yml" ]; then
    print_error "Not in Jekyll root directory. Please run from website root."
    exit 1
fi

# ============================================================================
# STEP 0: Image Asset Validation
# ============================================================================

print_header "Step 0/5: Image Asset Validation"

if [ "$SKIP_IMAGES" = true ]; then
    echo "Image validation skipped (--skip-images flag set)."
elif ! command -v identify &>/dev/null || ! command -v convert &>/dev/null || ! command -v mogrify &>/dev/null; then
    echo -e "${YELLOW}⚠ ImageMagick not installed — image validation skipped.${NC}"
    echo "  Install with: sudo apt-get install imagemagick"
else
    print_step "Checking work folder images for naming and dimension conventions..."
    IMAGE_CHECK_PASSED=true

    for WORK_DIR in assets/works/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-*/; do
        [ -d "$WORK_DIR" ] || continue

        FOLDER_BASENAME="$(basename "$WORK_DIR")"
        DEFAULT_SLUG="$(echo "$FOLDER_BASENAME" | sed 's/^[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}-//')"

        # Detect gallery slug from existing conforming gallery files
        GALLERY_SLUG=""
        for gf in "$WORK_DIR"*-gallery[0-9][0-9]_1440w.jpg; do
            [ -f "$gf" ] || continue
            gf_basename="$(basename "$gf")"
            detected="$(echo "$gf_basename" | sed 's/-gallery[0-9][0-9]_1440w\.jpg$//')"
            [ -n "$detected" ] && GALLERY_SLUG="$detected" && break
        done
        [ -z "$GALLERY_SLUG" ] && GALLERY_SLUG="$DEFAULT_SLUG"

        FOLDER_NEEDS_PROCESSING=false

        # Check each image in this work folder (tracked or staged in git only)
        while IFS= read -r -d '' IMG; do
            FILENAME="$(basename "$IMG")"
            EXT_LOWER="${FILENAME##*.}"
            EXT_LOWER="${EXT_LOWER,,}"
            case "$EXT_LOWER" in jpg|jpeg|png) ;; *) continue ;; esac

            # thumbnail.jpg — check dimensions and file size, warn only
            if [ "$FILENAME" = "thumbnail.jpg" ]; then
                DIMS="$(identify -format "%wx%h" "$IMG" 2>/dev/null || echo "unknown")"
                SIZE_KB="$(du -k "$IMG" | cut -f1)"
                if [ "$DIMS" != "700x700" ]; then
                    echo -e "${YELLOW}⚠ $WORK_DIR$FILENAME is ${DIMS}, ${SIZE_KB}KB (expected 700×700 — manual crop required)${NC}"
                else
                    echo -e "${GREEN}${CHECK} $WORK_DIR$FILENAME is ${DIMS}, ${SIZE_KB}KB${NC}"
                fi
                continue
            fi

            # hero.jpg — must be 1440×810
            if [ "$FILENAME" = "hero.jpg" ]; then
                DIMS="$(identify -format "%wx%h" "$IMG" 2>/dev/null || echo "unknown")"
                if [ "$DIMS" != "1440x810" ]; then
                    echo -e "${YELLOW}→ $WORK_DIR$FILENAME is ${DIMS} (needs resize to 1440×810)${NC}"
                    FOLDER_NEEDS_PROCESSING=true
                fi
                continue
            fi

            # gallery files — must match slug pattern and be 1440px wide
            if echo "$FILENAME" | grep -qE "^${GALLERY_SLUG}-gallery[0-9]{2}_1440w\.(jpg|jpeg|png)$"; then
                WIDTH="$(identify -format "%w" "$IMG" 2>/dev/null || echo "0")"
                if [ "$WIDTH" != "1440" ]; then
                    echo -e "${YELLOW}→ $WORK_DIR$FILENAME is ${WIDTH}px wide (needs resize to 1440px)${NC}"
                    FOLDER_NEEDS_PROCESSING=true
                fi
                continue
            fi

            # unknown filename
            echo -e "${RED}✗ Unknown image filename: $WORK_DIR$FILENAME${NC}"
            echo "  Expected: thumbnail.jpg | hero.jpg | ${GALLERY_SLUG}-gallery##_1440w.jpg"
            FOLDER_NEEDS_PROCESSING=true

        done < <(git ls-files --cached --others --exclude-standard "$WORK_DIR" | grep -iE '\.(jpg|jpeg|png)$' | sort | tr '\n' '\0')

        # Auto-process if violations found
        if [ "$FOLDER_NEEDS_PROCESSING" = true ]; then
            print_step "Running: ./scripts/process-images.sh $WORK_DIR"
            if ./scripts/process-images.sh "$WORK_DIR"; then
                print_success "Images in $WORK_DIR processed successfully."
            else
                print_error "Image processing failed for $WORK_DIR"
                echo "  Rename any unknown files manually, then re-run this script."
                IMAGE_CHECK_PASSED=false
            fi
        fi
    done

    if [ "$IMAGE_CHECK_PASSED" = true ]; then
        print_success "Image asset validation passed!"
    else
        print_error "Image asset validation failed — fix the errors above and re-run."
        ALL_PASSED=false
    fi
fi

# Exit early if image validation failed
if [ "$ALL_PASSED" = false ]; then
    print_header "Tests Failed"
    print_error "Please fix the errors above before proceeding."
    exit 1
fi

# ============================================================================
# STEP 1: YAML Linting
# ============================================================================

print_header "Step 1/5: YAML Linting"
print_step "Checking YAML syntax in all .yml files and front matter..."

if command -v yamllint &> /dev/null; then
    if yamllint . ; then
        print_success "YAML linting passed!"
    else
        print_error "YAML linting failed!"
        echo ""
        echo "Fix the YAML errors listed above, then run this script again."
        ALL_PASSED=false
    fi
else
    print_error "yamllint not installed. Install with: pip install yamllint"
    ALL_PASSED=false
fi

# Exit early if YAML fails or in quick mode
if [ "$ALL_PASSED" = false ] || [ "$QUICK_MODE" = true ]; then
    if [ "$QUICK_MODE" = true ] && [ "$ALL_PASSED" = true ]; then
        print_header "Quick Mode Complete"
        print_success "YAML validation passed! Ready for full tests."
        exit 0
    fi

    print_header "Tests Failed"
    print_error "Please fix the errors above before proceeding."
    exit 1
fi

# ============================================================================
# STEP 2: Build Jekyll Site
# ============================================================================

print_header "Step 2/5: Building Jekyll Site"
print_step "Running: bundle exec jekyll build"

if bundle exec jekyll build ; then
    print_success "Jekyll build completed successfully!"
else
    print_error "Jekyll build failed!"
    echo ""
    echo "Fix the build errors listed above, then run this script again."
    ALL_PASSED=false
    print_header "Tests Failed"
    exit 1
fi

# ============================================================================
# STEP 3: HTML Proofer (Links, Images, HTML)
# ============================================================================

print_header "Step 3/5: HTML Validation & Link Checking"
print_step "Running: bundle exec rake test"
print_step "Checking: Internal links, images, HTML structure..."

if bundle exec rake test ; then
    print_success "HTML validation passed!"
else
    print_error "HTML validation failed!"
    echo ""
    echo "Fix the errors listed above, then run this script again."
    ALL_PASSED=false
fi

# Exit if HTML tests failed
if [ "$ALL_PASSED" = false ]; then
    print_header "Tests Failed"
    print_error "Please fix the errors above before proceeding."
    exit 1
fi

# ============================================================================
# STEP 4: Print Testing
# ============================================================================

print_header "Step 4/5: Print Testing (QR codes, Print Layouts)"
print_step "Running: npm run test:print"
print_step "Generating PDFs and validating print displays..."

if [ ! -d "node_modules" ]; then
    print_error "Node modules not installed. Run: npm install"
    ALL_PASSED=false
else
    if npm run test:print 2>&1 | tee /tmp/print-test-output.txt ; then
        print_success "Print tests passed!"
        echo ""
        echo "PDFs generated in: ./print-test-results/"
    else
        # Check if failure is due to Chrome not being available
        if grep -q "Failed to launch\|libnspr4\|chrome" /tmp/print-test-output.txt; then
            echo ""
            echo -e "${YELLOW}⚠ Print tests skipped - Chrome not available in this environment${NC}"
            echo "This is expected in WSL/headless environments."
            echo "Install Chrome dependencies if you need to run print tests locally."
        else
            print_error "Print tests failed!"
            echo ""
            echo "Check the output above for details about print layout issues."
            ALL_PASSED=false
        fi
        rm -f /tmp/print-test-output.txt
    fi
fi

# Exit if print tests failed (but not if Chrome is unavailable)
if [ "$ALL_PASSED" = false ]; then
    print_header "Tests Failed"
    print_error "Please fix the errors above before proceeding."
    exit 1
fi

# ============================================================================
# STEP 5: Lighthouse CI (Optional)
# ============================================================================

if [ "$RUN_LIGHTHOUSE" = true ]; then
    print_header "Step 5/5: Lighthouse CI (Performance, Accessibility, SEO)"
    print_step "Running: npm run lighthouse"
    print_step "This may take 1-2 minutes..."

    if [ ! -d "node_modules" ]; then
        print_error "Node modules not installed. Run: npm install"
        ALL_PASSED=false
    else
        if npm run lighthouse ; then
            print_success "Lighthouse tests passed!"
            echo ""
            echo "View detailed reports in: .lighthouseci/"
        else
            print_error "Lighthouse tests failed!"
            echo ""
            echo "Download the HTML reports from .lighthouseci/ to see details."
            echo "Common issues: accessibility, performance, missing meta tags"
            ALL_PASSED=false
        fi
    fi
else
    print_header "Step 5/5: Lighthouse CI (Skipped)"
    echo "Lighthouse tests skipped. Run with --full to include them."
    echo ""
    echo -e "${YELLOW}Note: Lighthouse tests are optional but recommended before major releases.${NC}"
fi

# ============================================================================
# FINAL RESULT
# ============================================================================

echo ""
print_header "Test Results Summary"

if [ "$ALL_PASSED" = true ]; then
    print_success "All tests passed! ✨"
    echo ""
    echo "Your changes are ready to push:"
    echo ""
    echo "  git add ."
    echo "  git commit -m \"Your commit message\""
    echo "  git push origin main"
    echo ""
    echo -e "${YELLOW}⚠️  Remember: These tests are your ONLY safety net.${NC}"
    echo -e "${YELLOW}GitHub Actions will deploy immediately without testing.${NC}"
    if [ "$RUN_LIGHTHOUSE" = false ]; then
        echo ""
        echo -e "${YELLOW}Tip: Run with --full flag before major releases to include Lighthouse.${NC}"
    fi
    exit 0
else
    print_error "Some tests failed!"
    echo ""
    echo "Please fix the errors listed above, then run this script again."
    echo ""
    echo "Common fixes:"
    echo "  - YAML errors: Check indentation (2 spaces), no tabs"
    echo "  - Broken links: Verify file paths and permalinks"
    echo "  - Missing images: Add files to assets/ or fix paths"
    echo "  - Lighthouse: Check reports in .lighthouseci/"
    echo ""
    exit 1
fi
