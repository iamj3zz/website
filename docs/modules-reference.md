# Modular Layout System

The modular layout system allows you to create custom work detail pages by combining different section types in any order. This provides complete control over the presentation of each work.

## Using Modular Layouts

Add a `sections` array to your front matter instead of content below it:

```yaml
---
layout: work
title: Project Title
work_id: project-title
categories: [installations, commissions]
primary_category: installations
image: /assets/img/preview.jpg
order: 28
sections:
  - type: metadata
    year: "2025"
    client: "Client Name"
    location: "City, Country"

  - type: hero-image
    image: /assets/img/main.jpg
    caption: "Optional caption"

  - type: text
    title: "Section Title"
    content: |
      Your content here with **bold**, *italic*, and [links](https://example.com).
---
```

## Centralized Metadata System

**NEW**: You can define metadata once in the front matter and have it automatically used across all modules (metadata, split-hero-metadata, split-bandcamp-metadata). This prevents duplication and makes maintenance easier.

### How It Works

Define a `metadata` field in your front matter with all your project metadata:

```yaml
---
layout: work
title: Album Title
work_id: album-title
category: releases
image: /assets/img/album-preview.jpg
order: 30

# Define metadata once here
metadata:
  year: "2024"
  location: "Paris, France"
  role: "Composer, producer"
  isrc: "USRC17607839"
  mastering_by: "Abbey Road Studios"
  mastering_by_link: "https://www.abbeyroad.com/"
  technology: "Ableton Live, Max/MSP"
  collaborators: "Visual Artist Name"
  custom:
    - label: "Format"
      value: "Digital, Vinyl"

sections:
  # This module automatically uses the front matter metadata
  - type: split-bandcamp-metadata
    embed_code: '<iframe src="..."></iframe>'
    caption: "Listen on Bandcamp"
    text_title: "About the Album"
    text_content: |
      Album description here.

  # This also uses the same front matter metadata
  - type: split-hero-metadata
    content_type: "image"
    image: /assets/img/live-photo.jpg
    caption: "Live performance"

  # Display metadata as a standalone section (optional)
  - type: metadata
---
```

### Priority System

All metadata-aware modules check for metadata in this order:
1. **Front matter `metadata` field** (highest priority) - defined once, used everywhere
2. **Section-level parameters** (fallback) - for one-off overrides

This means:
- If `page.metadata.year` exists, it's used automatically
- If not, the module falls back to `section.year` (for per-module overrides)
- You can still override specific fields in individual sections if needed

### Benefits

- **No duplication**: Define metadata once, use it in multiple modules
- **Easy maintenance**: Update metadata in one place
- **Flexible**: Can still override per-module if needed
- **Cleaner front matter**: Separate content structure from metadata
- **Backwards compatible**: Existing works with section-level metadata still work

### Example: Before vs After

**Before (duplicated metadata):**
```yaml
sections:
  - type: split-hero-metadata
    content_type: "image"
    image: /assets/img/photo.jpg
    year: "2024"
    location: "Paris"
    role: "Composer"

  - type: split-bandcamp-metadata
    embed_code: '<iframe...>'
    year: "2024"          # ❌ Duplicate!
    location: "Paris"     # ❌ Duplicate!
    role: "Composer"      # ❌ Duplicate!
```

**After (centralized metadata):**
```yaml
metadata:
  year: "2024"
  location: "Paris"
  role: "Composer"

sections:
  - type: split-hero-metadata
    content_type: "image"
    image: /assets/img/photo.jpg
    # ✅ Automatically uses metadata from above

  - type: split-bandcamp-metadata
    embed_code: '<iframe...>'
    # ✅ Automatically uses metadata from above
```

## Available Module Types

### 1. Hero Image Module

Large featured image with optional caption.

```yaml
- type: hero-image
  image: /assets/img/image.jpg
  caption: "Optional caption text"  # Optional
```

### 2. Text Module

Rich text content with full Markdown support.

```yaml
- type: text
  title: "Section Title"  # Optional
  content: |
    Your content here supports:

    - **Bold text** with `**bold**`
    - *Italic text* with `*italic*`
    - External links: <a href="https://example.com" target="_blank" rel="noopener">Link text</a>
    - Bulleted and numbered lists
    - `Inline code`
    - ***Bold italic*** with `***text***`

    Multiple paragraphs are supported.
```

**Markdown Features:**
- Bold: `**text**` or `__text__`
- Italic: `*text*` or `_text_`
- Bold+Italic: `***text***`
- Lists: Use `-` or `*` for bullets, `1.` for numbers
- Links: `[text](url)` or use HTML for `target="_blank"`
- All text is automatically justified

### 3. Description Module

**NEW**: Displays the work's `description` from the front matter. This is a required field that provides a concise overview of the work, distinct from the `abstract` (which appears in the portfolio grid).

```yaml
# Front matter
description: |
  This is a comprehensive description of the work that will be displayed
  on the work detail page. It supports Markdown formatting including
  **bold text**, *italic text*, and can span multiple paragraphs.

sections:
  # Display the description - no parameters needed
  - type: description
```

**Key Differences from Text Module:**
- **Content Source**: Description module pulls from `page.description` in front matter; Text module uses inline `content` parameter
- **Purpose**: Description is for the main work overview (required); Text modules are for additional sections (optional)
- **Styling**: Description has slightly larger font (16px vs 15px) for emphasis
- **Flexibility**: Text modules can have custom titles; Description module does not

**Usage:**
- Typically placed first (before or after metadata) to introduce the work
- Can be positioned anywhere in the sections array
- Automatically rendered with Markdown formatting
- Does not display if `description` field is missing (though it's required)

**Example:**
```yaml
---
description: |
  An immersive installation exploring human-plant interaction through
  bioelectrical sensors. The work transforms **plant bio-signals** into
  real-time audiovisual responses, creating a unique sensory experience.

sections:
  - type: description  # Shows the description above
  - type: metadata
  - type: text
    content: |
      Additional detailed information...
---
```

### 4. Image Grid Module

Grid of images with 1-6 column layouts, square thumbnail cropping, lightbox viewing, and custom captions.

```yaml
- type: image-grid
  columns: 3  # Options: 1, 2, 3, 4, 5, or 6
  images:
    - /assets/img/image1.jpg
    - /assets/img/image2.jpg
    - /assets/img/image3.jpg
  captions:  # Optional, one per image
    - "Caption for first image"
    - "Caption for second image"
    - "Caption for third image"
```

**Features:**
- Square thumbnail cropping (maintains aspect ratio, no stretching)
- Click to view full-size in lightbox
- Lightbox navigation: Prev/Next buttons, arrow keys, Escape to close
- Image counter: "Image X of Y"
- Custom captions displayed in lightbox
- Responsive: Collapses to 1 column on mobile

### 5. Metadata Module

Display project metadata in a clean grid layout. All fields are optional - include only what's relevant for your project.

**IMPORTANT**: This module automatically uses metadata from the front matter `metadata` field (see Centralized Metadata System above). You can optionally include metadata fields directly in the module for overrides or if not using centralized metadata. If using centralized metadata, you can simply use `- type: metadata` without any fields.

```yaml
- type: metadata
  # Temporal Information
  year: "2025"
  date: "March 15-20, 2025"

  # Industry Identifiers
  isrc: "USRC17607839"
  upc: "123456789012"
  iswc: "T-345.246.800-1"

  # Location Information
  location: "Paris, France"
  performed_in: "Europe"
  places: "Venue 1, Venue 2"

  # Production Information
  produced_by: "Production Company"
  client: "Client Name"
  commissioned_by: "Festival Name"
  curated_by: "Curator Name"

  # Role and Technology
  role: "Sound designer, performer"
  technology: "Max/MSP, TouchDesigner, Ableton Live"

  # Collaborators and Credits
  collaborators: "Visual artist Name, Dancer Name"
  credits: "Person 1 (role), Person 2 (role)"
  partners: "Organization 1, Organization 2"
  supporters: "Foundation Name"

  # Specific Roles
  composer_performer_producer: "Artist Name"
  mastering_by: "Studio Name"
  artwork_by: "Designer Name"

  # Additional Resources
  interview: "Available on SoundCloud"
  press_kit: "Download PDF"
  socials: "@username on Instagram, Twitter"

  # Acknowledgements
  special_thanks: "To everyone who supported this project"

  # Custom fields for any additional metadata not covered above
  custom:
    - label: "Duration"
      value: "45 minutes"
    - label: "Materials"
      value: "Mixed media"
```

**Available Fields:**
- **Temporal:** `year`, `date`
- **Industry Identifiers:** `isrc`, `upc`, `iswc`
- **Location:** `location`, `performed_in`, `places`
- **Production:** `produced_by`, `client`, `commissioned_by`, `curated_by`
- **Role & Tech:** `role`, `technology`
- **Collaborators:** `collaborators`, `credits`, `partners`, `supporters`
- **Specific Roles:** `composer_performer_producer`, `mastering_by`, `artwork_by`
- **Resources:** `interview`, `press_kit`, `socials`
- **Acknowledgements:** `special_thanks`
- **Custom:** `custom` array for additional fields

**Industry Identifier Information:**
- **ISRC** (International Standard Recording Code): Unique identifier for sound recordings
- **UPC** (Universal Product Code): Barcode number for releases/products
- **ISWC** (International Standard Musical Work Code): Unique identifier for musical compositions

**Features:**
- Responsive grid layout (auto-fits to available space)
- Uppercase labels with lowercase values
- Light gray background with left border accent
- All fields are optional - only specified fields will display

**Adding Links to Metadata Fields:**

Any metadata field can be made clickable by adding a `_link` suffix to the field name. Links can point to external URLs or internal pages.

```yaml
- type: metadata
  # External links (use full URLs with https://)
  year: "2025"
  year_link: "https://festival-website.com/2025"

  location: "Paris, France"
  location_link: "https://maps.google.com/?q=Paris,France"

  mastering_by: "Abbey Road Studios"
  mastering_by_link: "https://www.abbeyroad.com/"

  # Internal links (use site-relative paths)
  client: "Previous Client"
  client_link: "/works/previous-project/"

  collaborators: "Artist Name"
  collaborators_link: "/bio/"

  # Custom fields with links
  custom:
    - label: "Streaming"
      value: "Available on Spotify"
      link: "https://spotify.com/artist/name"
    - label: "Related Work"
      value: "See other project"
      link: "/works/other-project/"
```

**Link Examples:**
- External URLs: `https://example.com`, `https://maps.google.com/?q=Location`
- Internal pages: `/bio/`, `/works/project-name/`, `/contact/`
- All external links open in new tab automatically
- Links have subtle underline styling that becomes more prominent on hover

### 6. Quote Module

Blockquote with optional attribution.

```yaml
- type: quote
  text: "The quote text goes here."
  author: "Author Name"  # Optional
```

### 7. Spacer Module

Add vertical spacing between sections.

```yaml
- type: spacer
  height: "60px"  # Any CSS height value
```

### 8. Linked Events Module

Display events linked to this work, using the same design as the main Events page.

```yaml
- type: linked-events
  title: "Upcoming Events & Performances"  # Optional, defaults to no title
```

**Features:**
- Automatically displays events linked to this work via `work_id` field in event files
- Groups events by year (most recent first)
- Same table design as main Events page
- Includes date, time, location, venue links, ticket links, and description
- Responsive layout (collapses to mobile-friendly view)

**Linking Events to Works:**

1. Add `work_id` to the work's front matter (alphanumeric, hyphens, underscores only):
```yaml
---
layout: work
title: My Project Title
work_id: my-project-title  # Unique identifier (A-Z, a-z, 0-9, -, _)
# ... other fields ...
---
```

2. Add matching `work_id` to event files in `_events/`:
```yaml
---
title: Event Name
date: 2025-03-15
# ... other event fields ...
work_id: my-project-title  # Must match the work's work_id exactly
---
```

### 9. Universal Iframe Module

Universal iframe embed module that accepts any embed code from any platform (YouTube, Vimeo, Bandcamp, SoundCloud, etc.). Supports both responsive (aspect ratio-based) and fixed-height modes.

**Fixed-Height Mode (Default):**
```yaml
- type: iframe
  embed_code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>'
  caption: "Optional caption text"  # Optional
```

**Responsive Mode (Maintains Aspect Ratio):**
```yaml
- type: iframe
  embed_code: '<iframe src="https://player.vimeo.com/video/VIDEO_ID" frameborder="0" allowfullscreen></iframe>'
  responsive: true
  aspect_ratio: "16:9"  # Options: "16:9", "4:3", "1:1", "21:9"
  caption: "Optional caption text"  # Optional
```

**Parameters:**
- `embed_code` (required): The full iframe embed code from any platform
- `caption` (optional): Caption text displayed below the iframe
- `responsive` (optional): `true` or `false` - if true, maintains aspect ratio (default: `false`, uses exact height)
- `aspect_ratio` (optional): `"16:9"`, `"4:3"`, `"1:1"`, or `"21:9"` - only used if `responsive: true` (default: `"16:9"`)

**How It Works:**

*Fixed-Height Mode:*
- Automatically extracts the height from the embed code
- Uses 100% width and the extracted height
- Falls back to 400px if no height is found
- Best for: Bandcamp players, SoundCloud embeds, or any content with specific height requirements

*Responsive Mode:*
- Ignores the embed code dimensions
- Uses CSS padding-bottom technique to maintain aspect ratio
- Iframe fills the container at 100% width and height
- Best for: Video embeds (YouTube, Vimeo) that should adapt to screen size

**Supported Height Formats:**
The module automatically detects height from these formats in embed codes:
- `height: 315px;` or `height:315px;`
- `height="315"` or `height="315px"`

**Features:**
- Works with any iframe embed code from any platform
- Automatically extracts source URL and dimensions
- Responsive 100% width on all screen sizes
- Clean styling with optional captions
- No manual configuration needed - just paste the embed code!
- Choose between fixed-height or aspect ratio-based responsive layout

**When to Use:**
- Use for videos (YouTube, Vimeo, etc.)
- Use for audio players (Bandcamp, SoundCloud, Spotify, etc.)
- Use for any iframe-based embed (interactive content, maps, widgets, etc.)
- Choose responsive mode for video embeds that should adapt to screen size
- Choose fixed-height mode for audio players and embeds with specific dimensions

### 10. Split Hero-Metadata Module

Two-column responsive layout with hero content (image or iframe) on the left (2/3 width) and metadata on the right (1/3 width). Perfect for showcasing visual or video content alongside project details.

**IMPORTANT**: This module automatically uses metadata from the front matter `metadata` field (see Centralized Metadata System above). You can optionally include metadata fields directly in the module for overrides or if not using centralized metadata.

**With Image:**
```yaml
- type: split-hero-metadata
  content_type: "image"
  image: /assets/img/main-image.jpg
  caption: "Optional image caption"  # Optional
  # Metadata fields (optional if using front matter metadata)
  year: "2025"
  location: "Paris, France"
  client: "Client Name"
  role: "Sound designer, performer"
  technology: "Max/MSP, Ableton Live"
  # ... any other metadata fields
```

**With Iframe (Fixed-Height):**
```yaml
- type: split-hero-metadata
  content_type: "iframe"
  embed_code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>'
  caption: "Optional video caption"  # Optional
  # Metadata fields
  year: "2025"
  location: "Berlin, Germany"
  commissioned_by: "Festival Name"
```

**With Iframe (Responsive):**
```yaml
- type: split-hero-metadata
  content_type: "iframe"
  embed_code: '<iframe src="https://player.vimeo.com/video/VIDEO_ID" frameborder="0" allowfullscreen></iframe>'
  responsive: true
  aspect_ratio: "16:9"  # Options: "16:9", "4:3", "1:1", "21:9"
  caption: "Optional caption"  # Optional
  # Metadata fields
  year: "2025"
  role: "Artist, composer"
```

**Parameters:**
- `content_type` (required): `"image"` or `"iframe"` - determines what appears in the left column
- `image` (required if content_type is "image"): Path to image file
- `embed_code` (required if content_type is "iframe"): Full iframe embed code
- `responsive` (optional): `true` or `false` - only for iframe mode
- `aspect_ratio` (optional): `"16:9"`, `"4:3"`, `"1:1"`, or `"21:9"` - only for responsive iframe mode
- `caption` (optional): Caption text for image or iframe
- All standard metadata fields (see Metadata Module section)

**Layout:**
- **Desktop (>900px):** Two columns with 2:1 ratio (hero takes 2/3 width, metadata takes 1/3 width)
- **Mobile (≤900px):** Stacks to single column for optimal viewing

**When to Use:**
- Showcase installation views with detailed project information
- Display video documentation alongside production credits
- Present visual work with technical specifications side-by-side
- Create a more compact, professional layout for works with substantial metadata

### 11. Split Bandcamp-Metadata Module

Two-column responsive layout with iframe on the left (1/3 width) and metadata plus optional text on the right (2/3 width). Designed specifically for music releases with Bandcamp players (or similar narrow embeds) alongside comprehensive release information.

**IMPORTANT**: This module automatically uses metadata from the front matter `metadata` field (see Centralized Metadata System above). You can optionally include metadata fields directly in the module for overrides or if not using centralized metadata.

```yaml
- type: split-bandcamp-metadata
  embed_code: '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=123456/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>'
  caption: "Available on Bandcamp"  # Optional
  # Metadata fields (optional if using front matter metadata)
  year: "2024"
  location: "Budapest, Hungary"
  role: "Producer, composer"
  isrc: "USRC17607839"
  mastering_by: "Studio Name"
  mastering_by_link: "https://studio.com"
  custom:
    - label: "Format"
      value: "Digital, Vinyl"
    - label: "Tracks"
      value: "12 tracks, 45 minutes"
  # Optional text content
  text_title: "About the Album"  # Optional
  text_content: |
    Album description with **markdown** support.

    Multiple paragraphs and formatting work here.
```

**Parameters:**
- `embed_code` (required): Full iframe embed code (typically from Bandcamp)
- `caption` (optional): Caption text displayed below the iframe
- All standard metadata fields (see Metadata Module section)
- `text_title` (optional): Heading for text section below metadata
- `text_content` (optional): Text content in markdown format, appears below metadata

**Layout:**
- **Desktop (>900px):** Two columns with 1:2 ratio (iframe takes 1/3 width, metadata/text takes 2/3 width)
- **Mobile (≤900px):** Stacks to single column for optimal viewing
- Text content (if provided) appears below metadata in the right column

**Features:**
- Automatically extracts iframe dimensions from embed code
- Supports all metadata fields with linking capability
- Optional text section with full Markdown support
- Perfect for narrow Bandcamp players and similar embeds
- Responsive design adapts to all screen sizes

**When to Use:**
- Music releases with Bandcamp or SoundCloud players
- Albums, EPs, or singles that need detailed release information
- Projects where you want the player visible but not dominating the layout
- Any work with a narrow embed that benefits from adjacent metadata

## Module Order and Layout

- Modules appear in the order defined in the `sections` array
- All modules have a max-width of 1200px and center automatically
- Default bottom margin: 60px between modules
- Use spacer modules for custom spacing control

## Example Works

See these portfolio works for complete working examples:

- **Work 31** (`_portfolio/31-complete-template.md`): **⭐ ULTIMATE TEMPLATE** - ALL metadata fields and ALL 11 module types with multiple configurations
- **Work 28** (`_portfolio/28-modular-example.md`): Complete example using all standard module types
- **Work 29** (`_portfolio/29-split-layout-example.md`): Split layout modules demonstration
- **Work 30** (`_portfolio/30-centralized-metadata-example.md`): Centralized metadata system example
