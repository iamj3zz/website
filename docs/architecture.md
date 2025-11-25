# Architecture

## Site Structure

**Core Files:**
- `_config.yml` - Main Jekyll configuration file containing site metadata (title, description, URL, social links, logo path) and collection settings
- `_site/` - Generated static site (git-ignored, auto-generated on build)
- `.jekyll-cache/` - Build cache (git-ignored)
- `CNAME` - Contains custom domain for GitHub Pages
- `404.html` - Custom 404 error page

**Pages:**
All page files are located in the `_pages/` directory:
- `_pages/index.markdown` - Homepage displaying portfolio grid (uses `portfolio` layout)
- `_pages/bio.markdown` - About/bio page at `/bio/`
- `_pages/bio-gallery.markdown` - Bio gallery page at `/bio-gallery/`
- `_pages/works.markdown` - Portfolio works page at `/works/` with filterable grid
- `_pages/events.markdown` - Events page at `/events/`
- `_pages/contact.markdown` - Contact page at `/contact/`
- `_pages/privacy.markdown` - Privacy policy page at `/privacy/`

The `_pages/` directory is configured as a Jekyll collection in `_config.yml` to organize all site pages in one location.

**Layouts:**
- `_layouts/portfolio.html` - Main layout for pages with navigation and logo
- `_layouts/work.html` - Layout for individual portfolio work detail pages

**Collections:**
- `_portfolio/` - Portfolio items collection (31 items numbered 01-31)
  - Each item has: `title`, `work_id`, `abstract`, `category`/`categories`, `image`, `order`, `metadata`, and `sections` array
  - Required `work_id` field (alphanumeric with hyphens/underscores only) for linking to events and internal references
  - Required `abstract` field (1-2 sentences) displayed in grid hover and printable page
  - Required `metadata` field (centralized metadata structure) with category-specific fields
  - Categories: `installations`, `live-acts`, `releases`, `commissions`
  - Items generate individual pages at `/works/:name/`
  - Supports both single category and multi-category assignments
  - All works use centralized metadata + modular sections structure
- `_events/` - Events collection
  - Each event has: `title`, `date`, `time`, `country`, `city`, `venue_name`, `venue_link`, `ticket_link`, `description`
  - Optional `work_id` field to link event to a specific work (must match work's `work_id`)
  - Events do not generate individual pages (`output: false`)
  - Displayed on main Events page and can be linked to works via linked-events module

**File Naming Conventions:**

Portfolio works use a **dual naming system** for flexible organization:

1. **Filename Date** (`YYYY-MM-DD-work-slug.md`):
   - Use the actual **release/creation date** of the work
   - Examples: `2026-01-01-vibrotanica.md`, `2023-09-22-racines-et-resonances.md`
   - Provides chronological organization in the file system
   - Template/placeholder works use `1900-01-01-` prefix

2. **Order Field** (in front matter):
   - Controls the **display position** in the portfolio grid
   - Higher numbers appear first (e.g., `order: 31` appears before `order: 30`)
   - Independent of filename date - allows custom sorting

This dual system allows you to:
- Keep files organized chronologically by actual release date
- Display works in any order you want on the site (newest first, by importance, etc.)
- Easily identify when works were released without opening files

**Example:**
```yaml
# File: _portfolio/2023-04-20-biosonification.md
---
title: "Biosonification"
order: 29  # Displayed after works with order 30+, before works with order 28-
# ... rest of front matter
---
```

**Assets:**
- `_sass/` - SCSS stylesheets compiled by Jekyll (including `_portfolio.scss`, `_work-detail.scss`, `_print.scss`, etc.)
- `assets/js/portfolio.js` - JavaScript for portfolio filtering with multi-category support
- `assets/js/lightbox.js` - Lightbox functionality for image galleries
- `assets/js/print-header-qrcode.js` - Universal QR code generator for print header (all pages)
- `assets/js/works-qrcode.js` - QR codes for individual works in printable WORKS page
- `assets/js/bio-links-qrcode.js` - QR codes for bio page links in print version
- `assets/js/contact-social-qrcodes.js` - QR codes for social media links in print version of contact page
- `assets/js/newsletter-form.js` - Newsletter form validation and submission handling
- `assets/js/qrcode.min.js` - QR code generation library
- `assets/img/` - Images including logo and portfolio work images

**Includes:**
- `_includes/work-modules/` - Modular components for work detail pages (11 modules total):
  - `hero-image.html` - Large featured image with optional caption
  - `text.html` - Rich text content with Markdown support
  - `description.html` - Displays page.description field for work overview
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
- Filter buttons: All | Installations | Live Acts | Releases | Commissions
- Active filter is underlined
- JavaScript-powered filtering with multi-category support (portfolio.js)
- Clicking category tags on portfolio items filters the grid

## Print Functionality

All pages (BIO, WORKS, EVENTS, CONTACT) are optimized for A4 print with professional layouts and automatic QR code generation. Print PDFs are maintained in the `docs/` folder.

**Universal Print Features (All Pages):**
- **Print Header Layout** - Two-column header design:
  - **Left**: Page-specific QR code (50x50px) + current page URL
  - **Right**: Site logo (50px height) + www.j3zz.com
  - JavaScript: `print-header-qrcode.js` generates QR codes dynamically
- **A4 Optimization** - `@page` settings in CSS (lines 1658+)
- **Hidden Elements** - Navigation, footer, and interactive elements removed in print
- **Professional Typography** - Optimized font sizes and spacing for print readability

**WORKS Page Print Layout:**
- Full printable version accessible via `works.markdown` (lines 50-127)
- Clean 3-column layout: `# | Image | Content`
- Displays comprehensive work information optimized for A4 (8-10 works per page):
  - **Work number** (45-50px column, bold, gray)
  - **Preview image** (110-120px square thumbnail with object-fit cover)
  - **Content column** with clear hierarchy:
    - **Title**: 12-14px, bold, clickable link to detail page
    - **Categories**: 8-9px, UPPERCASE, semi-bold, gray (separate from metadata)
    - **Abstract**: 10-12px, justified paragraph text
    - **Metadata**: 9-10px, italic, gray with explicit labels
- Metadata automatically collected from front matter `metadata` field with labels:
  - Format: `Year: 2024 • Location: Paris • Role: Composer • Technology: Max/MSP • Collaborators: Artist Name • Client: Company • Commissioned by: Festival • ISRC: XXX • UPC: XXX • ISWC: XXX`
- Individual QR codes for each work generated by `works-qrcode.js`
- Categories displayed separately from technical metadata for better visual hierarchy
- No manual configuration needed - works automatically with centralized metadata system

**BIO Page Print Layout:**
- Professional CV-style layout optimized for A4
- Bio links section with individual QR codes below each link (40x40px)
  - JavaScript: `bio-links-qrcode.js` generates QR codes for CV, Press Kit, Pictures links
  - Converts relative URLs to absolute for QR code generation
- Bio text and image section in two-column layout
- Categorized lists (Live Performances, Installations, Releases, Teaching, Workshops, Lectures, Books)
- Clean typography with year-based organization
- Print-specific styles in `portfolio.css` (lines 1762-2148)

**EVENTS Page Print Layout:**
- Chronological event listing optimized for print
- Each event displays: date, time, location, venue, description
- Linked work references included where applicable
- Clean table-based layout for easy scanning
- Print-specific styles in `portfolio.css`

**CONTACT Page Print Layout:**
- Professional contact information layout optimized for A4 single-page printing
- **Social Media Section** with space-efficient two-column grid:
  - Replaces icon grid with compact two-column layout (`grid-template-columns: 1fr 1fr`)
  - Each social platform displays: QR code (35x35px) + platform name + full URL
  - JavaScript: `contact-social-qrcodes.js` generates individual QR codes for each social link
  - Two-column grid structure saves ~60% vertical space compared to single-column layout
  - Grid layout per item: QR code (left, spanning 2 rows) | Platform Name + URL (right, stacked)
  - Column gap: 20mm for optimal A4 spacing; Row gap: 8px for compact layout
  - Font sizes: Platform name 9px, URL 8px (compact but readable)
  - `page-break-inside: avoid` ensures items stay together
  - QR codes enable direct mobile access to social profiles
- **Newsletter Section** with print-specific content:
  - Hides interactive signup form in print version
  - Displays personalized newsletter invitation message explaining:
    - Newsletter purpose and frequency (rare, meaningful updates only)
    - Personal data handling approach
    - How to subscribe (directs to online contact page)
  - References header QR code for easy access to signup form
- Email and booking contact details
- Professional formatting ensuring all content fits on one A4 page

**Print CSS Architecture:**
- Main print media queries: `portfolio.css` lines 1658-2148
- A4 page setup with proper margins
- Color management (converted to print-friendly grayscale where appropriate)
- Page break controls to prevent content splitting
- Responsive print adjustments for content fitting

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
  - Commissions: Orange `rgba(245, 176, 66, 0.68)`
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

All page files are located in the `_pages/` directory:

- **Bio**: Edit `_pages/bio.markdown`
- **Bio Gallery**: Edit `_pages/bio-gallery.markdown`
- **Events**: Edit `_pages/events.markdown`
- **Contact**: Edit `_pages/contact.markdown`
- **Privacy**: Edit `_pages/privacy.markdown`
- **Homepage/Works Grid**: Edit `_pages/index.markdown` or managed by portfolio collection in `_portfolio/`

## Updating Logo

Change the `logo` path in `_config.yml`:
```yaml
logo: /assets/img/your-logo.png
```
Restart Jekyll server after config changes.
