# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll static site deployed to GitHub Pages at www.j3zz.com. The site is a portfolio website with a custom design inspired by julienbayle.net, featuring a grid-based portfolio system with filterable works.

## Development Commands

### Local Development
```bash
bundle exec jekyll serve
```
Starts local development server at http://localhost:4000 with auto-regeneration enabled. The server watches for file changes and rebuilds automatically.

**Important**: Changes to `_config.yml` require a server restart to take effect.

### Build Site
```bash
bundle exec jekyll build
```
Generates the static site in the `_site/` directory.

### Install/Update Dependencies
```bash
bundle install
```
Run after modifying `Gemfile` or when setting up the project for the first time.

```bash
bundle update github-pages
```
Updates GitHub Pages and all associated Jekyll dependencies.

## Architecture

### Site Structure

**Core Files:**
- `_config.yml` - Main Jekyll configuration file containing site metadata (title, description, URL, social links, logo path) and collection settings
- `_site/` - Generated static site (git-ignored, auto-generated on build)
- `.jekyll-cache/` - Build cache (git-ignored)
- `CNAME` - Contains custom domain for GitHub Pages
- `404.html` - Custom 404 error page

**Pages:**
- `index.markdown` - Homepage displaying portfolio grid (uses `portfolio` layout)
- `bio.markdown` - About/bio page at `/bio/`
- `works.markdown` - Portfolio works page at `/works/` with filterable grid
- `events.markdown` - Events page at `/events/`
- `contact.markdown` - Contact page at `/contact/`

**Layouts:**
- `_layouts/portfolio.html` - Main layout for pages with navigation and logo
- `_layouts/work.html` - Layout for individual portfolio work detail pages

**Collections:**
- `_portfolio/` - Portfolio items collection (28 items numbered 01-28)
  - Each item has: `title`, `work_id`, `category`/`categories`, `image`, `order`, and optional content
  - Required `work_id` field (alphanumeric with hyphens/underscores only) for linking to events and internal references
  - Categories: `installations`, `live-acts`, `releases`, `collabs`
  - Items generate individual pages at `/works/:name/`
  - Supports both single category and multi-category assignments
- `_events/` - Events collection
  - Each event has: `title`, `date`, `time`, `country`, `city`, `venue_name`, `venue_link`, `ticket_link`, `description`
  - Optional `work_id` field to link event to a specific work (must match work's `work_id`)
  - Events do not generate individual pages (`output: false`)
  - Displayed on main Events page and can be linked to works via linked-events module

**Assets:**
- `assets/css/portfolio.css` - Custom CSS for entire site
- `assets/js/portfolio.js` - JavaScript for portfolio filtering with multi-category support
- `assets/js/lightbox.js` - Lightbox functionality for image galleries
- `assets/img/` - Images including logo and portfolio work images

**Includes:**
- `_includes/work-modules/` - Modular components for work detail pages:
  - `hero-image.html` - Large featured image with optional caption
  - `text.html` - Rich text content with Markdown support
  - `image-grid.html` - Grid of images (1-6 columns) with lightbox and captions
  - `iframe.html` - Universal iframe embed for any platform
  - `metadata.html` - Key-value metadata display
  - `quote.html` - Blockquote with attribution
  - `spacer.html` - Vertical spacing control
  - `linked-events.html` - Display events linked to the work

### Navigation

**Main Navigation (appears on all pages):**
- Logo (clickable, links to homepage) - configured via `site.logo` in `_config.yml`
- BIO | WORKS | EVENTS | CONTACT
- Active page is underlined
- Navigation state uses `class="active"` based on page URL

**Works Page Sub-Navigation:**
- Filter buttons: All | Installations | Live Acts | Releases | Collabs
- Active filter is underlined
- JavaScript-powered filtering with multi-category support (portfolio.js)
- Clicking category tags on portfolio items filters the grid

### Portfolio System

**Collection Configuration (_config.yml):**
```yaml
collections:
  portfolio:
    output: true
    permalink: /works/:name/
    sort_by: order
```

**Portfolio Item Structure:**
Each file in `_portfolio/` follows this format:
```yaml
---
layout: work
title: Work Title
category: installations|live-acts|releases
image: /assets/img/filename.jpg
order: 1
---
Optional work description content in markdown.
```

**Display Order:**
- Portfolio grid displays in reverse order (highest order number first)
- Uses Liquid: `{% assign sorted_portfolio = site.portfolio | sort: 'order' | reverse %}`

### Styling Features

**Portfolio Grid:**
- CSS Grid layout (4 columns desktop, responsive down to 1 column mobile)
- 7.5px gap between items
- Hover overlay with category-specific colors:
  - Installations: Blue `rgba(66, 135, 245, 0.68)`
  - Live Acts: Red `rgba(245, 66, 66, 0.68)`
  - Releases: Green `rgba(66, 245, 135, 0.68)`
  - Collabs: Orange `rgba(245, 176, 66, 0.68)`
- Displays work title and all categories as clickable tags on hover
- Supports multi-category works

**Individual Work Pages:**
- Supports two layout modes:
  1. **Simple layout** (backward compatible): Single image + text content
  2. **Modular layout**: Flexible sections system (see Modular Layout System below)
- Work title and category/categories display
- Navigation: Previous work (← left) | Back to Works (center) | Next work (→ right)
- Lightbox system for image viewing with captions and keyboard navigation

**Active Navigation States:**
- Main nav: 2px solid underline on active page
- Filter buttons: 2px solid underline on active filter
- Both use `border-bottom-color: #333`

### Color Scheme
- Primary text: `#333`
- Secondary text: `#666`
- Light text: `#999`
- Background light: `#f9f9f9`
- Border color: `#e0e0e0`

### Configuration Variables (_config.yml)

**Site Settings:**
- `title` - Site title
- `email` - Contact email
- `description` - Site description
- `url` - Base URL (https://www.j3zz.com)
- `logo` - Path to logo image

**Social Media:**
- `twitter_username`
- `github_username`
- `soundcloud_username`
- `vimeo_username`
- `facebook_username`

### Deployment

Site deploys to GitHub Pages automatically when pushed to the `main` branch. The custom domain www.j3zz.com is configured via the `CNAME` file and GitHub Pages settings.

**Note**: This site uses the `github-pages` gem instead of a specific Jekyll version to ensure compatibility with GitHub Pages infrastructure.

## Content Management

### Front Matter Standards

All collection items must follow these front matter standards to ensure consistency across the site.

#### Portfolio Items (_portfolio/)

**Required Fields:**
- `layout: work` - Must be "work" for all portfolio items
- `title` - The display title of the work (string)
- `work_id` - Unique identifier (alphanumeric, hyphens, underscores only: A-Z, a-z, 0-9, -, _). Used for linking to events and internal references. Should be lowercase and based on title (e.g., "My Project" → "my-project")
- `image` - Path to preview image (e.g., `/assets/img/filename.jpg`)
- `order` - Numeric order for sorting (higher numbers appear first)

**Category Fields (Required - choose one format):**
- **Single category:** `category: value` (where value is: installations, live-acts, releases, or collabs)
- **Multiple categories:**
  ```yaml
  categories: [category1, category2]
  primary_category: category1
  ```

**Optional Fields:**
- `published` - Set to `false` to hide from site (defaults to true if omitted)
- `sections` - Array of modular layout sections (for modular layout mode)
- Content below front matter (for simple layout mode)

**Example - Simple Single Category:**
```yaml
---
layout: work
title: Project Title
category: installations
image: /assets/img/project.jpg
order: 15
---
Optional content here.
```

**Example - Multiple Categories:**
```yaml
---
layout: work
title: Project Title
work_id: project-title
categories: [installations, collabs]
primary_category: installations
image: /assets/img/project.jpg
order: 15
published: true
---
```

**Example - Modular Layout:**
```yaml
---
layout: work
title: Project Title
work_id: project-title
categories: [installations, collabs]
primary_category: installations
image: /assets/img/project.jpg
order: 15
sections:
  - type: hero-image
    image: /assets/img/main.jpg
  - type: text
    content: |
      Project description here.
---
```

#### Events (_events/)

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

### Multi-Category Support

Works can belong to multiple categories. Use either format:

**Single category:**
```yaml
category: installations
```

**Multiple categories:**
```yaml
categories: [installations, collabs]
primary_category: installations  # Used for primary overlay color
```

### Adding a New Portfolio Work

#### Simple Layout (Backward Compatible)

1. Create a new file in `_portfolio/` with format: `##-work-name.md` (e.g., `25-new-work.md`)
2. Add front matter:
```yaml
---
layout: work
title: New Work Title
work_id: new-work-title  # Required: unique ID for linking events (A-Z, a-z, 0-9, -, _)
category: installations  # or live-acts, releases, collabs
# Or use multi-category:
# categories: [installations, collabs]
# primary_category: installations
image: /assets/img/work-image.jpg
order: 25  # Higher numbers appear first
---
```
3. Add description content below front matter (optional)
4. Place image in `assets/img/`
5. Restart Jekyll server if needed

**Adding Metadata to Simple Layout Works:**

Metadata fields can be added directly to the front matter and will automatically display above the work image. Any of the metadata fields documented in the Metadata Module section can be used:

```yaml
---
layout: work
title: New Work Title
work_id: new-work-title
category: installations
image: /assets/img/work-image.jpg
order: 25
# Metadata fields (all optional)
year: "2024"
location: "New York, USA"
role: "Sound installation"
technology: "Spatial audio, MaxMSP"
collaborators: "Visual artist Name"
credits: "Person 1, Person 2"
# ... any other metadata fields
---
```

**Features:**
- Metadata automatically displays if any metadata fields are present in front matter
- Uses the same metadata module design as modular layouts
- All metadata fields are optional - only add what's relevant
- See Metadata Module section below for complete list of available fields

#### Modular Layout

For more complex work pages, use the modular sections system (see Modular Layout System below).

## Modular Layout System

The modular layout system allows you to create custom work detail pages by combining different section types in any order. This provides complete control over the presentation of each work.

### Using Modular Layouts

Add a `sections` array to your front matter instead of content below it:

```yaml
---
layout: work
title: Project Title
work_id: project-title
categories: [installations, collabs]
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

### Available Module Types

#### 1. Hero Image Module

Large featured image with optional caption.

```yaml
- type: hero-image
  image: /assets/img/image.jpg
  caption: "Optional caption text"  # Optional
```

#### 2. Text Module

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

#### 3. Image Grid Module

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

#### 4. Metadata Module

Display project metadata in a clean grid layout. All fields are optional - include only what's relevant for your project.

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

#### 5. Quote Module

Blockquote with optional attribution.

```yaml
- type: quote
  text: "The quote text goes here."
  author: "Author Name"  # Optional
```

#### 6. Spacer Module

Add vertical spacing between sections.

```yaml
- type: spacer
  height: "60px"  # Any CSS height value
```

#### 7. Linked Events Module

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

#### 8. Universal Iframe Module

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

### Module Order and Layout

- Modules appear in the order defined in the `sections` array
- All modules have a max-width of 1200px and center automatically
- Default bottom margin: 60px between modules
- Use spacer modules for custom spacing control

### Example: Complete Modular Work

See `_portfolio/28-modular-example.md` for a complete working example using all module types.

### Modifying Page Content

- **Bio**: Edit `bio.markdown`
- **Events**: Edit `events.markdown`
- **Contact**: Edit `contact.markdown`
- **Homepage/Works Grid**: Managed by portfolio collection, edit individual items in `_portfolio/`

### Updating Logo

Change the `logo` path in `_config.yml`:
```yaml
logo: /assets/img/your-logo.png
```
Restart Jekyll server after config changes.
