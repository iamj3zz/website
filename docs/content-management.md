# Content Management

## Front Matter Standards

All collection items must follow these front matter standards to ensure consistency across the site.

### Portfolio Items (_portfolio/)

**Required Fields:**
- `layout: work` - Must be "work" for all portfolio items
- `title` - The display title of the work (string)
- `work_id` - Unique identifier (alphanumeric, hyphens, underscores only: A-Z, a-z, 0-9, -, _). Used for linking to events and internal references. Should be lowercase and based on title (e.g., "My Project" → "my-project")
- `abstract` - Brief description (1-2 sentences, 150-200 characters) displayed in grid hover and printable page. Should focus on what the work IS with key descriptors.
- `description` - **NEW**: Comprehensive description of the work (3-5 sentences, 200-400 characters) displayed on the work detail page via the description module. Supports Markdown formatting. Provides context beyond the abstract. Use this for introducing the work's concept, goals, and key features.
- `image` - Path to preview image (e.g., `/assets/img/filename.jpg`)
- `order` - Numeric order for sorting (higher numbers appear first)
- `metadata` - Centralized metadata structure with category-specific fields (see [Metadata Reference](metadata-reference.md)). Common metadata fields include:
  - `release_date` - ISO format date (YYYY-MM-DD) for the work's release/opening/premiere
  - `year` - Display year (string)
  - `location` - City, Country
  - `role` - Your role in the work
  - Additional category-specific fields (see Metadata Reference)

**Category Fields (Required - choose one format):**
- **Single category:** `category: value` (where value is: installations, live-acts, films, performances, releases, workshops, or residencies)
- **Multiple categories:**
  ```yaml
  categories: [category1, category2]
  primary_category: category1
  ```
- **Commissioned status:** `commissioned: true` or `commissioned: false` (required for all works)
  - `true` = Work created with specific requirements/instructions from a client/commissioner
  - `false` = Work created with full creative freedom (self-initiated, collaborative partnerships)
  - Note: Workshops are always `commissioned: false`

**Optional Fields:**
- `published` - Set to `false` to hide from site (defaults to true if omitted)
- `show_in_grid` - Set to `false` to hide from portfolio grid while keeping page accessible (used for pure residency pages)
- `status` - Editorial classification (string): `major` = flagship work with high narrative weight; `minor` = real work, lower narrative weight; `archived` = complete work, intentionally hidden; `draft` = work in progress, not ready for public
- `hero_image` - Set to `true` to display a hero image on the work's print layout. Automatically constructs path `/assets/works/YYYY-MM-DD-{slug}/hero.jpg`. Hidden in web view by CSS. No path override possible.
- `order` - Numeric order for sorting in portfolio grid (higher numbers appear first; independent of filename date)
- `sections` - Array of modular layout sections (for modular layout mode)
- Content below front matter (for simple layout mode)

**Important: `hero_image: true` vs `type: hero-image` Module**

These are two different mechanisms:
- **`hero_image: true` (front matter flag)**: Print-only. Auto-constructs the image path as `/assets/works/YYYY-MM-DD-{slug}/hero.jpg`. Placed after the work header on the print page. No configuration needed beyond setting the flag.
- **`type: hero-image` (sections module)**: Web and print. Requires explicit path in `image:` parameter. Placed in the sections flow. Useful for custom positioning or non-standard image paths.

Use `hero_image: true` for standard print layouts. Use `type: hero-image` module when you need custom positioning or a non-standard image path.

**Special Case: Residency Pages**

Residencies are NOT shown in the portfolio grid but have dedicated pages accessible via the bio page. There are two types:

1. **Pure Residency Pages** - Process documentation only (no output work in portfolio)
   - Use `category: residencies`
   - **MUST** include `show_in_grid: false` to hide from portfolio grid
   - Include `Output Work` link in metadata custom fields
   - Link to the final output work in the description

2. **Residency-Output Works** - Works created during residencies
   - Use the OUTPUT category (`installations`, `live-acts`, `films`, `performances`, etc.)
   - Do NOT use `show_in_grid: false` (these appear in the portfolio grid)
   - Mention the residency in the description
   - These appear in portfolio grid under their output category

**Example - Recommended Structure with Centralized Metadata:**
```yaml
---
layout: work
title: Project Title
work_id: project-title
abstract: "Brief description of what this work is, including medium and key themes."
description: |
  A comprehensive introduction to the work that provides context, goals, and key
  features. This description appears on the work detail page and can include
  **Markdown formatting** for emphasis. Explain the concept, approach, and impact
  of the work in 3-5 sentences.
category: installations
image: /assets/img/project.jpg
order: 15

# Centralized metadata
metadata:
  release_date: "2024-01-01"  # ISO format date (YYYY-MM-DD) for releases, installations, etc.
  year: "2024"
  location: "City, Country"
  role: "Sound artist, composer"
  technology: "Technologies used"
  commissioned_by: "Organization Name"
  # ... additional category-specific fields

sections:
  - type: description  # Displays the description from front matter

  - type: metadata

  - type: text
    title: "About the Work"
    content: |
      Additional detailed project information here.

  - type: image-grid
    columns: 3
    images: [...]
    captions: [...]
---
```

**Example - Multiple Categories:**
```yaml
---
layout: work
title: Project Title
work_id: project-title
abstract: "Multi-format work combining installation and performance elements."
description: |
  This collaborative work explores the intersection of installation art and live
  performance, bringing together multiple artists to create an immersive experience.
  The project was commissioned for a major festival and combines **visual art**,
  **sound design**, and **interactive elements**.
categories: [installations, live-acts, performances]
primary_category: installations
image: /assets/img/project.jpg
order: 15

metadata:
  release_date: "2024-03-15"  # ISO format date (YYYY-MM-DD)
  year: "2024"
  location: "Paris, France"
  places: "Venue Name"
  role: "Co-creator, performer"
  collaborators: "Artist 1, Artist 2"
  commissioned_by: "Festival Name"
  # Include fields from all relevant categories

sections:
  - type: description  # Displays the description from front matter

  - type: split-hero-metadata
    content_type: "image"
    image: /assets/img/hero.jpg

  - type: text
    title: "About the Collaboration"
    content: |
      Additional details about the collaboration process...
---
```

### Events (_events/)

**File Naming Convention:**
Event files should use date-based naming: `YYYY-MM-DD-event-name.md`
- Use the actual event date from the `date` field
- Example: `2025-06-15-sonar-festival.md`
- Provides chronological organization in the file system
- Matches the pattern used for portfolio works

**Required Fields:**
- `title` - Event name (string)
- `date` - Event date in YYYY-MM-DD format (e.g., 2025-03-15)
- `time` - Event start time in 24-hour format with quotes (e.g., "20:00")
- `country` - Country name (string)
- `city` - City name (string)
- `venue_name` - Venue name (string)
- `venue_link` - Full URL to venue website (must be valid URL)
- `ticket_link` - Full URL to ticket purchase page (must be valid URL)
- `description` - Event description (string, can be multiple sentences)

**Optional Fields:**
- `venue_address` - Physical street address of the venue (string, e.g., "Kazinczy u. 14, 1075 Budapest, Hungary"). Displayed only in print layout below the venue name. Omit for online events or when address is unavailable.
- `work_id` - Links event to a specific work (must match a work's `work_id` exactly)
- `published` - Set to `false` to hide from site (defaults to true if omitted)

**Example - Basic Event:**
```yaml
---
title: Festival Performance
date: 2025-06-15
time: "20:30"
country: Spain
city: Barcelona
venue_name: Festival Venue
venue_link: https://www.venue.com
venue_address: "Carrer Example 42, 08001 Barcelona, Spain"
ticket_link: https://www.tickets.com/event
description: Live performance at the festival main stage.
---
```

**Example - Event Linked to Work:**
```yaml
---
title: Festival Performance
date: 2025-06-15
time: "20:30"
country: Spain
city: Barcelona
venue_name: Festival Venue
venue_link: https://www.venue.com
venue_address: "Carrer Example 42, 08001 Barcelona, Spain"
ticket_link: https://www.tickets.com/event
description: Live performance at the festival main stage.
work_id: my-project-title
---
```

**Important Notes:**
- No blank lines within YAML front matter (between the `---` markers)
- All URLs must be complete with protocol (https://)
- Time values must be quoted strings ("HH:MM")
- Date format must be YYYY-MM-DD
- Boolean values (published) should be lowercase: `true` or `false`
- Arrays use bracket notation: `[item1, item2, item3]`

## Multi-Category Support

Works can belong to multiple categories. Use either format:

**Single category:**
```yaml
category: installations
```

**Multiple categories:**
```yaml
categories: [installations, commissions]
primary_category: installations  # Used for primary overlay color
```

## Adding a New Portfolio Work

**IMPORTANT**: All new works should follow the standardized structure with centralized metadata and modular sections (see [Best Practices](best-practices.md)).

**⭐ RECOMMENDED**: Copy `_portfolio/1900-01-01-complete-template.md` as your starting point - it includes ALL metadata fields and module types with comprehensive examples and guidance.

### Recommended Approach - Modular Layout with Centralized Metadata

1. **Create the file**: `YYYY-MM-DD-work-name.md` in `_portfolio/` (e.g., `2026-01-01-new-work.md` using the actual release/creation date)
2. **Add front matter** with required fields:
```yaml
---
layout: work
title: New Work Title
work_id: new-work-title  # Required: unique ID (A-Z, a-z, 0-9, -, _)
abstract: "Brief description of what this work is, medium, and themes."
category: installations  # or live-acts, films, performances, residencies, releases, workshops
commissioned: false  # or true (workshops always false)
image: /assets/img/work-preview.jpg
order: 31  # Higher numbers appear first

# Centralized metadata - use category-specific template
metadata:
  release_date: "2024-01-01"  # ISO format date (YYYY-MM-DD)
  year: "2024"
  location: "City, Country"
  role: "Your role"
  technology: "Technologies used"
  # ... add category-specific fields (see Metadata Reference)
  custom:
    - label: "Custom Field"
      value: "Value"

sections:
  - type: metadata  # Display metadata

  - type: text
    title: "About the Work"
    content: |
      Full description with **markdown** support.

  - type: image-grid
    columns: 3
    images:
      - /assets/img/image1.jpg
      - /assets/img/image2.jpg
      - /assets/img/image3.jpg
    captions:
      - "Caption 1"
      - "Caption 2"
      - "Caption 3"

  # Add more modules as needed
---
```
3. **Place images** in `assets/img/`
4. **Test locally**: `bundle exec jekyll serve`
5. **Verify display**: Check both web view and printable WORKS page

**Category-Specific Templates:**
- **Installations**: See [Metadata Reference > Installations](metadata-reference.md#installations)
- **Live Acts**: See [Metadata Reference > Live Acts](metadata-reference.md#live-acts)
- **Releases**: See [Metadata Reference > Releases](metadata-reference.md#releases)
- **Collaborations**: See [Metadata Reference > Collaborations](metadata-reference.md#collaborations)

## Adding Residency Pages

**Important**: Residencies follow a special workflow since they are NOT shown in the portfolio grid but connect to output works.

### Types of Residency Documentation

**1. Pure Residency Pages** (process documentation only)
- Hidden from portfolio grid (`show_in_grid: false`)
- Accessible only via bio page links
- Must link to their output work
- Examples: Cité des arts → Racines & Résonances, Citta Della Pieve → Vibrotanica

**2. Residency-Output Works** (final works created during residencies)
- Shown in portfolio grid under output category
- Mention residency in description
- Examples: Park in Progress (installations), Music Maker #2 (performances)

### Creating a Pure Residency Page

**Template Structure:**
```yaml
---
published: true
show_in_grid: false  # CRITICAL: Hides from portfolio grid
layout: work
title: "Residency Name"
work_id: residency-slug
abstract: |
  Brief description mentioning the output work created.
description: |
  Comprehensive description of the residency, what was developed, and its
  connection to the final output work.
category: residencies
commissioned: false
image: /assets/works/path-to-image/thumbnail.jpg

metadata:
  release_date: "YYYY-MM-DD"
  location: "City, Country"
  role: "sound artist, composer"
  custom:
    - label: "Venue"
      value: "Venue Name"
    - label: "Output Work"
      value: "Work Name (output type)"
      link: "/works/YYYY-MM-DD-output-work/"
    - label: "Tags"
      value: "residency, creative development, relevant keywords"

sections:
  - type: description  # Shows the description field

  - type: text
    content: |
      Detailed explanation of:
      - What was developed during the residency
      - How the residency contributed to the output work
      - Technologies/techniques explored
      - Creative process and outcomes

      → [View the Output Work Name](/works/YYYY-MM-DD-output-work/)

  - type: metadata  # Shows all metadata fields
---
```

### Current Residency → Output Connections

| Residency | Output Work | Output Category | Link |
|-----------|-------------|-----------------|------|
| Cité des arts (2023) | Racines & Résonances | live-acts | `/works/2023-09-22-racines-et-resonances/` |
| Kerveguen (2023) | Racines & Résonances | live-acts | `/works/2023-09-22-racines-et-resonances/` |
| Citta Della Pieve (2025) | Vibrotanica | installations | `/works/2026-01-01-vibrotanica/` |
| Music Maker #2 (2018) | Music Maker #2 | performances | `/works/2018-01-01-music-maker-2/` |
| Park in Progress (2014) | Park in Progress | installations | `/works/2014-09-29-park-in-progress/` |
| Talking heArts (2012) | Talking heArts | live-acts | `/works/2011-01-01-talking-hearts/` |
| To be told (2012) | To be told | films | `/works/2012-01-01-to-be-told/` |
| Eutropia (2011) | Eutropia | live-acts | `/works/2011-01-01-eutropia/` |
| Reality in Disguise (2010) | Reality in Disguise | live-acts | `/works/2010-01-01-reality-in-disguise/` |

### Adding Residency to Bio Page

Update `_pages/bio.markdown` in the Residencies section:

```html
<div class="bio-item">
  <span class="bio-year">YYYY</span>
  <a href="/works/YYYY-MM-DD-residency-slug/">Residency Name — Location</a>
</div>
```

**Important**: Use the full date-based permalink (e.g., `/works/2023-01-01-cite-des-arts-residency/`), not just the slug.

### Legacy Simple Layout (Not Recommended)

The simple layout (single image + text content) is still supported for backward compatibility, but all new works should use the modular layout with centralized metadata.

If you must use simple layout:
```yaml
---
layout: work
title: Work Title
work_id: work-title
abstract: "Brief description"
category: installations
image: /assets/img/work.jpg
order: 25

metadata:
  year: "2024"
  location: "City, Country"
  # ... other fields
---
Optional markdown content here.
```

**Note**: This approach lacks the flexibility and consistency of the modular sections system.

## Artworks (_artworks/)

The artwork gallery is a dedicated collection for fine art works (drawings, paintings, prints, mixed media). Each artwork file generates a detail page at `/gallery/YYYY-MM-DD-{slug}/` with automatic image processing.

**File Naming Convention:**
Artwork files use date-based naming: `YYYY-MM-DD-{slug}.md`
- Use the creation/completion date in YYYY-MM-DD format
- Example: `2026-03-01-fractured-system.md`
- Provides chronological organization in the file system

**Required Front Matter Fields:**
- `published: true` (or `false` to hide)
- `title` - Display title of the artwork (string)
- `image` - Path to thumbnail image: `/assets/artworks/YYYY-MM-DD-slug/thumbnail.png` (auto-generated by `process-artworks.sh`)
- `abstract` - Brief description (1-2 sentences, 150-200 characters)
- `description` - Full description (3-5 sentences with Markdown support) displayed on detail page

**Recommended Fields:**
- `series` - Name of the artwork series (e.g., "Cartography of Collapse")
- `series_part` - Position in series (e.g., "I. Igneous" or "Part 1 of 8")
- `year` - Creation year (string, e.g., "2026")
- `medium` - Material/technique (e.g., "Ink on paper", "Mixed media")
- `dimensions` - Physical dimensions (e.g., "29.7 × 42 × 0.1 cm")
- `status` - Availability status (e.g., "Available", "Sold", "In collection")

**Sections Configuration:**

The recommended section structure displays the full description and high-resolution print image:

```yaml
sections:
  - type: description
    # Displays the 'description' field from front matter

  - type: split-hero-metadata
    content_type: "image"
    image: /assets/artworks/YYYY-MM-DD-slug/print.png  # Auto-generated by process-artworks.sh
    caption: "Optional caption for the image"
    custom:
      - label: "Series"
        value: "Series Name — Part Number"
      - label: "Medium"
        value: "Ink on paper"
      - label: "Dimensions"
        value: "29.7 × 42 × 0.1 cm"
      - label: "Year"
        value: "2026"
      - label: "Edition"
        value: "Unique, non-editioned original"
      - label: "Status"
        value: "Available"

  - type: text
    content: |
      Additional details about the artwork, process, series context, etc.
```

**Image Workflow:**

The artwork collection uses a two-step image workflow:

1. **Source images:** High-resolution JPEG files (3000px, 72-96 DPI, 3-7MB)
   - Placed in: `docs/HIGHRES-IMAGES/`
   - Named: `1200p_{KEY}.(jpg|png)` (e.g., `1200p_B1.jpg`)

2. **Generated outputs:** Automatically created by `scripts/process-artworks.sh`
   - **thumbnail.png:** 800×800 px square with white letterbox padding (used in grid and `image:` field)
   - **print.png:** Max 1800px longest side, aspect ratio preserved (used in `split-hero-metadata` module)
   - Location: `assets/artworks/{slug}/`

**Complete Example:**

```yaml
---
published: true
status: available
title: "Fractured System"
series: "Cartography of Collapse"
series_part: "I. IGNEOUS"
year: "2026"
medium: "Ink on paper"
dimensions: "29.7 × 42 × 0.1 cm"
image: /assets/artworks/2026-03-01-fractured-system/thumbnail.png
abstract: "An elegant curved arc emerges from absolute darkness — a single unified form defined by flowing topographic lines."
description: |
  An elegant curved arc emerges from absolute darkness — a single unified form defined by flowing topographic lines. The arc suggests movement suspended in time: water flowing, land folding, matter bending under immense pressure yet remaining graceful and coherent.

  The arc is complete and whole, yet carved entirely from the surrounding void. This paradox — solidity defined by emptiness, form emerging from pure negation — is the essence of geological presence itself.

  **Fractured System** captures the moment when primordial matter achieves its most elegant form: the instant where pressure and release create beauty, where geological forces compress into a single, memorable curve.

sections:
  - type: description

  - type: split-hero-metadata
    content_type: "image"
    image: /assets/artworks/2026-03-01-fractured-system/print.png
    caption: "Fractured System — Ink on paper, 29.7 × 42 cm, 2026"
    custom:
      - label: "Series"
        value: "Cartography of Collapse — I. Igneous"
      - label: "Medium"
        value: "Ink on paper"
      - label: "Dimensions"
        value: "29.7 × 42 × 0.1 cm"
      - label: "Year"
        value: "2026"
      - label: "Edition"
        value: "Unique, non-editioned original"
      - label: "Status"
        value: "Available"

  - type: text
    content: |
      ## About This Work

      *Fractured System* is part of **Cartography of Collapse**, a series of 16 original ink drawings...
---
```

**Adding a New Artwork Series:**

See [Adding a New Artwork Series](../scripts/ARTWORK-PROCESSING.md#adding-a-new-artwork-series) in the Script documentation for the complete step-by-step workflow, including:
1. Preparing source images
2. Updating the mapping in `scripts/process-artworks.sh`
3. Creating markdown files
4. Running the image processing script
5. Verifying results

**Complete Reference:**
- [Artwork Processing Script Documentation](../scripts/ARTWORK-PROCESSING.md)
- [CLAUDE.md — Artwork Gallery section](../CLAUDE.md#artwork-gallery)
