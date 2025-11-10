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
  - Each item has: `title`, `category`/`categories`, `image`, `order`, and optional content
  - Categories: `installations`, `live-acts`, `releases`, `collabs`
  - Items generate individual pages at `/works/:name/`
  - Supports both single category and multi-category assignments
- `_events/` - Events collection
  - Each event has: `title`, `date`, `time`, `country`, `city`, `venue_name`, `venue_link`, `ticket_link`, `description`
  - Optional `work_id` field to link event to a specific work
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
  - `video.html` - Video embed (YouTube, Vimeo, or direct upload)
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

#### 4. Video Module

Embed videos from YouTube, Vimeo, or direct upload.

```yaml
- type: video
  platform: "youtube"  # Options: youtube, vimeo, direct
  video_id: "dQw4w9WgXcQ"  # For YouTube/Vimeo
  # url: "/assets/video/file.mp4"  # For direct uploads
  caption: "Optional video caption"  # Optional
```

#### 5. Metadata Module

Display project metadata in a clean grid layout.

```yaml
- type: metadata
  year: "2025"
  client: "Client Name"
  location: "Paris, France"
  credits: "Artist 1, Artist 2"
  # Add any custom fields:
  custom:
    - label: "Duration"
      value: "45 minutes"
    - label: "Materials"
      value: "Mixed media"
```

#### 6. Quote Module

Blockquote with optional attribution.

```yaml
- type: quote
  text: "The quote text goes here."
  author: "Author Name"  # Optional
```

#### 7. Spacer Module

Add vertical spacing between sections.

```yaml
- type: spacer
  height: "60px"  # Any CSS height value
```

#### 8. Linked Events Module

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
Add `work_id` field to event files in `_events/`:

```yaml
---
title: Event Name
date: 2025-03-15
# ... other event fields ...
work_id: Work Title  # Must match the work's title exactly
---
```

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
