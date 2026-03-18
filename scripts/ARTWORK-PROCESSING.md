# Artwork Image Processing Script

## Overview

The `process-artworks.sh` script generates optimized images for the artwork gallery from high-resolution source images.

**Source files:** `docs/HIGHRES-IMAGES/1200p_{B1-B8,W1-W8}.{jpg,png}`
**Output files:** `assets/artworks/{slug}/{thumbnail.png,print.png}`

## Usage

```bash
# Preview the mapping and operations (no files created)
./scripts/process-artworks.sh --dry-run

# Process all artwork images
./scripts/process-artworks.sh

# Reprocess existing outputs (overwrite)
./scripts/process-artworks.sh --force
```

## Output Specifications

### thumbnail.png (Gallery Grid)
- **Dimensions:** 800×800 px (square)
- **Format:** PNG with white letterbox padding
- **Process:** Full artwork visible, centered with white padding on shorter dimension
- **ImageMagick:** `-resize 800x800 -gravity center -background white -extent 800x800`

### print.png (Detail Page)
- **Dimensions:** Max 1800px on longest side (aspect ratio preserved)
- **Format:** PNG (no cropping, no padding)
- **Process:** Original aspect ratio maintained, only downscaled if larger
- **ImageMagick:** `-resize 1800x1800>`

## Artwork Mapping

All 16 artworks are mapped in the script:

**IGNEOUS Series (B1-B8):**
- B1 → `2026-03-01-fractured-system`
- B2 → `2026-03-02-void-emergence`
- B3 → `2026-03-03-debris-field`
- B4 → `2026-03-04-layered-collapse`
- B5 → `2026-03-05-scattered-archipelago`
- B6 → `2026-03-06-saturated-network`
- B7 → `2026-03-07-fossilized-echo`
- B8 → `2026-03-08-compressed-time`

**EROSION Series (W1-W8):**
- W1 → `2026-03-09-last-coordinate`
- W2 → `2026-03-10-grid-zero`
- W3 → `2026-03-11-horizon-dissolution`
- W4 → `2026-03-12-inverted-territory`
- W5 → `2026-03-13-organic-terrain`
- W6 → `2026-03-14-primal-chaos`
- W7 → `2026-03-15-containment-lines`
- W8 → `2026-03-16-fading-lines`

## System Requirements

- ImageMagick 6 or later (`convert`, `identify` commands)
- Sufficient disk space: ~200 MB for generated images
- ImageMagick policy configured with sufficient resource limits

## ImageMagick Configuration

**⚠️ Important:** ImageMagick has hardcoded resource limits in its policy file that cannot be overridden via command-line flags. Large images may fail with "cache resources exhausted" error.

### Check Current Limits

```bash
convert -list resource
```

Look for:
- `Memory:` (should be ≥ 2GB)
- `Map:` (should be ≥ 2GB)
- `Disk:` (should be ≥ 2GB)
- `Area:` (should be ≥ 4GB megapixels)

### Fix Resource Limits

If you get "cache resources exhausted" errors, increase the limits in the ImageMagick policy file:

```bash
sudo nano /etc/ImageMagick-6/policy.xml
```

Find these lines and update them:

```xml
<policy domain="resource" name="memory" value="4GiB"/>
<policy domain="resource" name="map" value="4GiB"/>
<policy domain="resource" name="disk" value="4GiB"/>
<policy domain="resource" name="area" value="4GP"/>
```

Or use sed to update automatically:

```bash
sudo sed -i 's/name="memory" value="[^"]*"/name="memory" value="4GiB"/' /etc/ImageMagick-6/policy.xml
sudo sed -i 's/name="map" value="[^"]*"/name="map" value="4GiB"/' /etc/ImageMagick-6/policy.xml
sudo sed -i 's/name="disk" value="[^"]*"/name="disk" value="4GiB"/' /etc/ImageMagick-6/policy.xml
sudo sed -i 's/name="area" value="[^"]*"/name="area" value="4GP"/' /etc/ImageMagick-6/policy.xml
```

Then try the script again:

```bash
./scripts/process-artworks.sh
```

## Verification

After processing:

```bash
# Check that all thumbnails exist and are 800x800
identify -format "%f: %wx%h\n" assets/artworks/*/thumbnail.png

# Check that all print images exist and are correctly sized
identify -format "%f: %wx%h\n" assets/artworks/*/print.png

# Verify in browser
bundle exec jekyll serve
# Visit http://localhost:4000/gallery/ to see the gallery grid
```

## Script Options

- `--dry-run`: Preview the mapping and commands without creating files
- `--force`: Reprocess and overwrite existing output files (default: skip if exists)

Exit codes:
- `0`: All images processed successfully (or already exist)
- `1`: Error encountered (missing source, ImageMagick issue, or processing failure)

## Files

- **Script:** `scripts/process-artworks.sh`
- **Source images:** `docs/HIGHRES-IMAGES/1200p_*.{jpg,png}`
- **Output directory:** `assets/artworks/{slug}/` (16 directories, one per artwork)

## Notes

- The script auto-detects whether source files are .jpg or .png
- Thumbnails are PNG (lossless, white padding preserves quality)
- Print images are PNG (preserves full quality for detail pages)
- Skipped files are not reported unless using `--dry-run`
- All output files are created with read permissions for Jekyll
