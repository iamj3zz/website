# Image Naming Convention for Portfolio Works

## Overview

All portfolio work images follow a strict naming convention enforced by the `scripts/process-images.sh` script. This ensures consistent, automated image processing across the entire project.

## File Naming Rules

### Required Files (Every Work)

1. **thumbnail.jpg**
   - Dimensions: 700×700 px (square, artistic crop required)
   - Quality: JPEG
   - Purpose: Portfolio grid display, work list thumbnails
   - Notes: Requires manual artistic cropping. Script will warn if dimensions are incorrect but will NOT auto-modify.

2. **hero.jpg**
   - Dimensions: Any (will be auto-resized to 1440×810)
   - Quality: JPEG
   - Purpose: Work detail page header image
   - Processing: Auto-resized with center crop to 1440×810, quality 85
   - Notes: Script automatically processes this file

### Optional Files (Gallery Images)

**Gallery images** follow the format:
```
{slug}-gallery{NN}_{width}w.jpg
```

**Components:**
- `{slug}` — Work slug (extracted from directory name or detected from existing gallery files)
- `{NN}` — Sequential 2-digit gallery number (01, 02, 03, etc.)
- `{width}` — Image width in pixels (e.g., 1440w, 2550w)
- `.jpg` — File extension (lowercase)

**Examples:**
```
iris-gallery01_1440w.jpg
iris-gallery02_2550w.jpg
park-in-progress-gallery01_1440w.jpg
unbalanced-forces-gallery01_1440w.jpg
```

**Processing:**
- Script auto-resizes all gallery images to 1440px wide, quality 85
- Source widths can be anything (800w, 1200w, 2550w, etc.)
- Script detects slug automatically from existing gallery files
- Sequential numbering (01, 02, 03...) required

### What Gets Auto-Processed

The `process-images.sh` script automatically:
- ✅ Resizes `hero.jpg` to 1440×810 with center crop
- ✅ Resizes all `{slug}-gallery##_Nw.jpg` files to 1440px wide
- ⚠️ Warns if `thumbnail.jpg` dimensions are incorrect (but does NOT auto-modify)
- ⚠️ Rejects unknown filenames and exits with error code 1

### Slug Detection

The script detects the work slug automatically:

1. **From existing gallery files** — Reads the slug from any conforming `*-gallery##_1440w.jpg` file
2. **From directory name** — Falls back to the directory basename with date prefix stripped
   - Example: `2020-08-18-inst-iris/` → slug is `inst-iris`
3. **Applied to new files** — All gallery files must use the detected/default slug

### Supporting Files (Optional)

Files without image naming conventions are silently skipped:
- PDFs, videos, audio files, text documents
- These can be stored in work asset directories without affecting image processing

## Complete Work Directory Example

```
assets/works/2020-08-18-inst-iris/
├── thumbnail.jpg                    # Required: 700×700 artistic crop
├── hero.jpg                         # Required: any size (auto-processed to 1440×810)
├── iris-gallery01_1440w.jpg        # Gallery image, auto-resized to 1440px wide
├── iris-gallery02_1440w.jpg
├── iris-gallery03_1440w.jpg
├── ... more gallery images ...
├── iris-gallery16_3000w.jpg
├── iris-bio.pdf                    # Optional supporting files (not processed)
├── iris-press-release.pdf
└── iris-installation-map.pdf
```

## Processing Workflow

### Step 1: Prepare Images

1. Create work asset directory: `assets/works/YYYY-MM-DD-{slug}/`
2. Add `thumbnail.jpg` (700×700 artistic crop)
3. Add `hero.jpg` (any dimensions, ideally landscape)
4. Add gallery images (if any): `{slug}-gallery01_Nw.jpg`, `{slug}-gallery02_Nw.jpg`, etc.
5. Add optional supporting files (PDFs, etc.)

### Step 2: Run Image Processing

```bash
./scripts/process-images.sh assets/works/YYYY-MM-DD-{slug}
```

**Output:**
- hero.jpg resized to 1440×810 (in-place)
- Gallery images resized to 1440px wide (in-place)
- thumbnail.jpg checked for correct dimensions
- Script exits with code 0 if successful, 1 if unknown filenames found

### Step 3: Test

```bash
bundle exec jekyll serve
# Visit http://localhost:4000/works/YYYY-MM-DD-{slug}/
```

## Common Issues & Solutions

### Issue: "Unknown filename: some-gallery01_1440w.jpg"

**Problem:** Gallery filename doesn't match the detected/expected slug.

**Solution:**
- Check what slug the script detected: `Detected gallery slug from existing files: {actual-slug}`
- Rename your file to match: `{actual-slug}-gallery01_1440w.jpg`
- Repeat for all gallery files
- Re-run: `./scripts/process-images.sh assets/works/YYYY-MM-DD-{slug}`

**Example:**
```bash
# If directory is "2020-08-18-inst-iris"
# And script detected slug as "inst-iris"
# Rename: willany-leo-gallery01_1440w.jpg → inst-iris-gallery01_1440w.jpg
```

### Issue: "thumbnail.jpg is 800x800 (expected 700×700)"

**Problem:** Thumbnail has wrong dimensions.

**Solution:** Script will not auto-modify thumbnails (they require artistic cropping decisions). Manually resize:
```bash
convert -resize 700x700^ -gravity center -extent 700x700 -quality 85 thumbnail.jpg thumbnail.jpg
```

The `^` flag resizes while maintaining aspect ratio, then `-extent` crops to exact size with center gravity.

### Issue: Gallery images not resizing

**Problem:** Gallery filename doesn't match expected pattern.

**Solution:** Ensure filename matches exactly:
- Pattern: `{slug}-gallery{NN}_{width}w.jpg`
- Examples of correct: `iris-gallery01_800w.jpg`, `iris-gallery02_2550w.jpg`
- Examples of incorrect: `iris_gallery_01.jpg`, `gallery-iris-01.jpg`, `iris-gallery-01-1440w.jpg`

## Automatic vs. Manual Processing

| File | Auto-Processed | Notes |
|------|---|---|
| thumbnail.jpg | ❌ No | Requires artistic crop decision. Script warns if wrong size. |
| hero.jpg | ✅ Yes | Auto-resized to 1440×810 with center crop, quality 85 |
| {slug}-gallery##_Nw.jpg | ✅ Yes | Auto-resized to 1440px wide, quality 85 |
| Other files (PDFs, etc.) | ➖ N/A | Silently skipped, not processed |

## Integration with Jekyll

The markdown file for the work (`_portfolio/YYYY-MM-DD-{slug}.md`) references images like this:

```yaml
image: /assets/works/YYYY-MM-DD-{slug}/thumbnail.jpg  # Grid display

sections:
  - type: split-hero-metadata
    image: /assets/works/YYYY-MM-DD-{slug}/hero.jpg  # Work detail page header

  - type: image-grid
    images:
      - /assets/works/YYYY-MM-DD-{slug}/{slug}-gallery01_1440w.jpg
      - /assets/works/YYYY-MM-DD-{slug}/{slug}-gallery02_1440w.jpg
      # ... more galleries ...
```

## When to Use This Workflow

- Adding a new portfolio work with images
- Updating gallery images for an existing work
- Resizing or optimizing existing images

## Related Scripts

- **`scripts/process-images.sh`** — Resizes and quality-corrects portfolio work images
- **`scripts/process-artworks.sh`** — Processes fine art gallery images (separate workflow)
- **`test-before-push.sh`** — Validates image files before commits

## See Also

- [Content Management](docs/content-management.md) — Adding portfolio works
- [Best Practices](docs/best-practices.md) — Work creation workflow
- [Modules Reference](docs/modules-reference.md) — Image modules for markdown
