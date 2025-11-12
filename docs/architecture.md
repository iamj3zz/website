# Architecture

## Site Structure

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
- `_portfolio/` - Portfolio items collection (30 items numbered 01-30)
  - Each item has: `title`, `work_id`, `abstract`, `category`/`categories`, `image`, `order`, `metadata`, and `sections` array
  - Required `work_id` field (alphanumeric with hyphens/underscores only) for linking to events and internal references
  - Required `abstract` field (1-2 sentences) displayed in grid hover and printable page
  - Required `metadata` field (centralized metadata structure) with category-specific fields
  - Categories: `installations`, `live-acts`, `releases`, `collabs`
  - Items generate individual pages at `/works/:name/`
  - Supports both single category and multi-category assignments
  - All works use centralized metadata + modular sections structure
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
  - `split-hero-metadata.html` - Two-column layout with hero content (2/3) and metadata (1/3)
  - `split-bandcamp-metadata.html` - Two-column layout with iframe (1/3) and metadata/text (2/3)

## Navigation

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

**Printable WORKS Page:**
- Full printable version accessible via `works.markdown` (lines 50-117)
- Displays comprehensive work information optimized for print:
  - Work number (order)
  - Preview image
  - **Clickable work title** linking to detail page
  - Category badge
  - Year and location
  - Complete metadata (automatically collected from front matter `metadata` field)
  - Abstract text (if defined)
- Print-specific styling in `portfolio.css` (lines 1848-1936)
- Work titles are clickable both on screen and in print with subtle underline styling
- Metadata is automatically displayed if `metadata` field exists in work's front matter
- No manual configuration needed - works automatically with centralized metadata system

## Portfolio System

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

## Styling Features

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
  2. **Modular layout**: Flexible sections system (see [Modules Reference](modules-reference.md))
- Work title and category/categories display
- Navigation: Previous work (← left) | Back to Works (center) | Next work (→ right)
- Lightbox system for image viewing with captions and keyboard navigation

**Active Navigation States:**
- Main nav: 2px solid underline on active page
- Filter buttons: 2px solid underline on active filter
- Both use `border-bottom-color: #333`

## Color Scheme

- Primary text: `#333`
- Secondary text: `#666`
- Light text: `#999`
- Background light: `#f9f9f9`
- Border color: `#e0e0e0`

## Configuration Variables (_config.yml)

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

## Deployment

Site deploys to GitHub Pages automatically when pushed to the `main` branch. The custom domain www.j3zz.com is configured via the `CNAME` file and GitHub Pages settings.

**Note**: This site uses the `github-pages` gem instead of a specific Jekyll version to ensure compatibility with GitHub Pages infrastructure.

## Modifying Page Content

- **Bio**: Edit `bio.markdown`
- **Events**: Edit `events.markdown`
- **Contact**: Edit `contact.markdown`
- **Homepage/Works Grid**: Managed by portfolio collection, edit individual items in `_portfolio/`

## Updating Logo

Change the `logo` path in `_config.yml`:
```yaml
logo: /assets/img/your-logo.png
```
Restart Jekyll server after config changes.
