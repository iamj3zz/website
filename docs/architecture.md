# Architecture

## Site Structure

**Core Files:**
- `_config.yml` - Main Jekyll configuration file containing site metadata (title, description, URL, social links, logo path, SEO settings, Google Analytics ID) and collection settings
- `_site/` - Generated static site (git-ignored, auto-generated on build)
- `.jekyll-cache/` - Build cache (git-ignored)
- `CNAME` - Contains custom domain for GitHub Pages
- `robots.txt` - Search engine crawler configuration with sitemap declaration
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
- `_layouts/portfolio.html` - Main layout for pages with navigation and logo (used by `/bio/`, `/bio-gallery/`, `/works/`, `/gallery/`, `/events/`, `/contact/`)
- `_layouts/work.html` - Layout for individual portfolio work detail pages
- `_layouts/artwork.html` - Layout for individual fine art detail pages

**Collections:**
- `_portfolio/` - Portfolio items collection (real works + `1900-01-01-*` template/placeholder files)
  - Each item has: `title`, `work_id`, `abstract`, `description`, `category`/`categories`, `image`, `order`, `metadata`, and `sections` array
  - Required `work_id` field (alphanumeric with hyphens/underscores only) for linking to events and internal references
  - Required `abstract` field (1-2 sentences) displayed in grid hover and printable page
  - Required `description` field (comprehensive) displayed on work detail page
  - Required `metadata` field (centralized metadata structure) with category-specific fields
  - Optional `status` field: `major`, `minor`, `archived`, `draft` (editorial classification)
  - Optional `show_in_grid: false` to hide from portfolio grid while keeping detail page accessible
  - Optional `order` field (integer) to control grid display position (higher numbers appear first)
  - Optional `print_hero_image: true` for print-only hero image (auto-constructs path)
  - Categories: `installations`, `live-acts`, `films`, `performances`, `releases`, `workshops`, `residencies`
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
- `_sass/` - SCSS stylesheets compiled by Jekyll (including `_portfolio.scss`, `_work-detail.scss`, `_print.scss`, `_bio-gallery.scss`, `_events.scss`, etc.)
- `assets/js/` — JavaScript organized by page type with conditional loading (see **Script Loading** section below)
  - **Universal** (loaded on all pages): `cookie-consent.js`, `utils.js`, `back-to-top.js`, `lightbox.js`, `navigation.js`, `qrcode.min.js`, `print-header-qrcode.js`
  - **Works pages** (`/works/`, `/`): `portfolio.js`, `portfolio-scroll-overlay.js`, `portfolio-filter-nav.js`, `works-qrcode.js`
  - **Gallery pages** (`/gallery/`): `gallery-qrcode.js`, `gallery-hearts.js`, `artwork-inquiry.js`
  - **Bio pages** (`/bio/`, `/bio-gallery/`): `bio-links-qrcode.js`, `bio-section-nav.js` (bio only), `bio-gallery-qrcode.js` (bio-gallery only)
  - **Contact pages** (`/contact/`): `contact-social-qrcodes.js`, `newsletter-form.js`
  - **Events pages** (`/events/`): `events-tickets-qrcode.js`, `events-description.js`, `events-year-nav.js`
  - **Third-party**: `qrcode.min.js` (QR code generation library)
- `assets/img/` - Images including logo and portfolio work images
- `assets/img/bio-gallery/` - Press photos and artist images for bio gallery

**Image Performance:**
- All `<img>` tags include `loading="lazy"` attribute for deferred image loading
- Applied to: hero images, image grids, layout logos, artwork gallery images, bio gallery photos
- Improves page load performance by deferring off-screen image loads until they're needed by the viewport
- Supported in all modern browsers (Chrome 76+, Firefox 75+, Safari 15.1+, Edge 79+)

**Includes:**
- `_includes/seo.html` - SEO optimization with jekyll-seo-tag, structured data, Open Graph tags, and canonical URLs
- `_includes/analytics.html` - Privacy-compliant Google Analytics 4 integration with cookie consent
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

## Bilingual System (EN/FR)

The site supports English and French with **URL-based language detection** — separate pages and files per language, no query parameters.

### URL Structure

| Page | English | French |
|------|---------|--------|
| Gallery index | `/gallery/` | `/fr/gallery/` |
| Artwork detail | `/gallery/2026-03-01-fractured-system/` | `/fr/gallery/2026-03-01-fractured-system/` |
| Bio | `/bio/` | `/fr/bio/` |
| Bio Gallery (press photos) | `/bio-gallery/` | `/fr/bio-gallery/` |
| Works | `/works/` | `/fr/works/` |
| Events | `/events/` | `/fr/events/` |
| Contact | `/contact/` | `/fr/contact/` |

Portfolio work pages (`/works/…`) and the homepage (`/`) are English-only — no French versions exist yet. The homepage has `lang: en` but no `lang_alternate`, so no hreflang alternate link is emitted for it.

### Translation Data (`_data/translations.yml`)

Single source of truth for all structural UI strings. Both languages visible side-by-side:

```yaml
artwork:
  status:
    available:
      en: "AVAILABLE"
      fr: "DISPONIBLE"
nav:
  gallery:
    en: "GALLERY"
    fr: "GALERIE"
```

**Access in templates:**
```liquid
{% assign _lang = page.lang | default: 'en' %}
{% assign _trans = site.data.translations %}
{{ _trans.artwork.status.available[_lang] }}
```

**Sections:** `nav`, `lang_switcher`, `months`, `artwork`, `metadata`, `inquiry_modal`, `inquiry_form`, `bio_gallery`

**Important:** `_data/translations.yml` must remain a single file. Do NOT create a `_data/translations/` directory alongside it — Jekyll would use the directory and ignore the file.

### Language Detection

Pages declare their language via `page.lang` front matter:
- English pages: no `lang:` field (defaults to `'en'`)
- French pages: `lang: fr`

Templates use `{% assign _lang = page.lang | default: 'en' %}` to branch.

### Language Switcher (`_includes/lang-switcher.html`)

Uses `page.lang_alternate` front matter to know the URL of the other-language version:

```yaml
# English page
lang_alternate: /fr/gallery/2026-03-01-fractured-system/

# French page
lang: fr
lang_alternate: /gallery/2026-03-01-fractured-system/
```

**Fallback behavior:** If a page has no `lang_alternate` (e.g. untranslated portfolio work pages), both EN and FR links point to `page.url` — clicking FR keeps the user on the current English page.

### French Page Files

French versions of pages use the `fr-` filename prefix (matching the `_pages/` convention):

| Collection | English file | French file |
|-----------|-------------|-------------|
| Pages | `_pages/bio.markdown` | `_pages/fr-bio.markdown` |
| Pages | `_pages/bio-gallery.markdown` | `_pages/fr-bio-gallery.markdown` |
| Pages | `_pages/gallery.markdown` | `_pages/fr-gallery.markdown` |
| Artworks | `_artworks/2026-03-01-fractured-system.md` | `_artworks/fr-2026-03-01-fractured-system.md` |

### Bio Gallery (Press Photos) Bilingual Setup

The bio gallery page displays press and media use photos with high-resolution downloads. It uses the `portfolio` layout (same as `/bio/`) to ensure consistent styling and share the bio submenu (CV, Press Kit, Pictures/Photos, IMDb).

**Files:**
- `_pages/bio-gallery.markdown` — English version at `/bio-gallery/`
- `_pages/fr-bio-gallery.markdown` — French version at `/fr/bio-gallery/`

**Front matter structure:**
```yaml
layout: portfolio
title: Bio Gallery (or "Galerie Bio" in French)
permalink: /bio-gallery/ (or /fr/bio-gallery/)
lang: en (or fr)
lang_alternate: /fr/bio-gallery/ (or /bio-gallery/)
links:
  - title: CV
    url: /assets/bio/cv.pdf
  - title: Press Kit
    url: /assets/bio/press-kit.pdf
  - title: Pictures (or "Photos" in French)
    url: /bio-gallery/ (or /fr/bio-gallery/)
  - title: IMDb
    url: https://www.imdb.com/name/nm6903099/
gallery_images:
  - filename: photo-01.jpg
    hires: photo-01-hires.jpg
    caption: "J3ZZ by Photographer Name, Location, Year"  # Not translated
```

**Image structure:**
- Web images: `assets/bio/gallery/` — 1440px wide, proportional height
- High-res images: `assets/bio/gallery/hires/` — Original high-resolution files (3000px+) for press/print use
- Print version: Displays full-size images (not square-cropped) with QR codes for each photo

**Submenu (bio-links):**
The `links` front matter array generates a centered submenu at the top of the page (matching the bio page layout). The current page link is marked with `.active` class and shows an underline. Lightbox clicks on gallery images are properly intercepted to prevent opening when clicking download links.

**Translations:** All UI strings (`press_title`, `press_intro`, `instruction_*`, `download_link`, `contact_note`) are in `_data/translations.yml` under `bio_gallery` section. Captions are proper nouns (photographer names, locations) and are not translated.

### Artwork Gallery Bilingual Setup

The gallery has full bilingual support — 16 English artworks + 16 French artworks.

**English artwork files** (`_artworks/YYYY-MM-DD-{slug}.md`):
- No `lang:` field (defaults to `'en'`)
- Must have `lang_alternate: /fr/gallery/YYYY-MM-DD-{slug}/`

**French artwork files** (`_artworks/fr-YYYY-MM-DD-{slug}.md`):
- `lang: fr`
- `lang_alternate: /gallery/YYYY-MM-DD-{slug}/`
- `permalink: /fr/gallery/YYYY-MM-DD-{slug}/`
- Translated `title`, `abstract`, `description`, and French metadata values

**Gallery page filtering:** Each gallery page filters artworks by language to avoid cross-language links:
```liquid
# English gallery (gallery.markdown)
{% assign sorted_artworks = site.artworks | where_exp: "a", "a.lang != 'fr'" | sort: 'year' | reverse %}

# French gallery (fr-gallery.markdown)
{% assign sorted_artworks = site.artworks | where: "lang", "fr" | sort: 'year' | reverse %}
```

**Artwork prev/next navigation** also filters by language so arrows stay within the same language space.

### Adding a New Translated Page

1. Create English page `_pages/{slug}.markdown` with `lang_alternate: /fr/{slug}/`
2. Create French page `_pages/fr-{slug}.markdown` with `lang: fr`, `permalink: /fr/{slug}/`, `lang_alternate: /{slug}/`
3. Add nav links to all 4 layouts (artwork.html, work.html, portfolio.html) following the existing `{% if _lang == 'fr' %}/fr/{slug}/{% else %}/{slug}/{% endif %}` pattern

### Adding a New Translated Artwork

1. Add `lang_alternate: /fr/gallery/YYYY-MM-DD-{slug}/` to the English artwork file
2. Create `_artworks/fr-YYYY-MM-DD-{slug}.md` with `lang: fr`, `lang_alternate: /gallery/YYYY-MM-DD-{slug}/`, `permalink: /fr/gallery/YYYY-MM-DD-{slug}/`, and translated content

---

## Navigation

**Main Navigation (appears on all pages):**
- Logo (clickable, links to homepage) - configured via `site.logo` in `_config.yml`
- BIO | WORKS | GALLERY | EVENTS | CONTACT & BOOK
- Active page is underlined
- Navigation state uses `class="active"` based on page URL
- Bio Gallery page (`/bio-gallery/`) accessible via bio page links
- **CONTACT & BOOK** uses `.nav-cta` class: black background, white text pill — visually distinct CTA across all nav locations

**Mobile Header (≤600px):**
- Logo left, **BOOK** pill center-right, hamburger far right — always visible regardless of menu state
- BOOK button: `.header-cta.nav-cta` class, same black pill styling as nav CTA
- Hamburger button: black background, white lines — matches BOOK pill visually
- BOOK label used instead of "CONTACT & BOOK" for brevity at small sizes
- Expanded menu: full nav links shown vertically below header row

**Bottom Navigation (all screen sizes, long pages only):**
- Horizontal nav bar above the footer: BIO | WORKS | GALLERY | EVENTS | CONTACT & BOOK
- Shown only when `document.documentElement.scrollHeight > window.innerHeight` (page is scrollable)
- Toggled via `.bottom-nav--visible` class added by JS in `navigation.js`
- Active page link underlined
- Hidden in print view
- HTML: `<nav class="bottom-nav">` in all layouts, before `<footer>`
- CSS: `_sass/_layout.scss` (`.bottom-nav`, `.bottom-nav--visible`)

**Works Page Sub-Navigation:**
- Filter buttons: All | Installations | Live Acts | Films | Performances | Releases | Workshops
- Active filter is underlined
- JavaScript-powered filtering with multi-category support (portfolio.js)
- Category tags on portfolio overlays are not clickable on mobile (≤600px) — `pointer-events: none`

**Events Page Navigation:**
- Floating year navigation widget (bottom-left corner) for quick year jumping
- Appears after scrolling 300px down the page
- Features:
  - **YEARS button**: 40px pill button with smooth fade-in/out
  - **Year dropdown**: Opens upward listing all events years (newest to oldest)
  - **Smooth scrolling**: Clicking a year smoothly scrolls to that year section
  - **Active year highlighting**: IntersectionObserver highlights the current visible year
  - **Keyboard accessible**: Press Escape to close dropdown, Tab to navigate links
  - **Click outside to close**: Dropdown auto-closes when clicking outside the widget
- JavaScript: `assets/js/events-year-nav.js`
- Styling: `_sass/_events.scss` (year navigation styles appended)
- Hidden in print view for clean print layouts

## Print Functionality

All pages (BIO, BIO GALLERY, WORKS, EVENTS, CONTACT) are optimized for A4 print with professional layouts and automatic QR code generation. Print PDFs are maintained in the `docs/` folder.

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

**BIO GALLERY Page:**
- Press photos for editorial and media use, 4-column grid with lightbox on web, single-column print layout with QR codes
- Each photo has a **web version** (1440px wide, displayed in grid and lightbox) and a **high-res version** (original camera resolution, for press download)
- Images go in:
  - `assets/bio/gallery/` — web versions (`photo-01.jpg`, `photo-02.jpg`, …)
  - `assets/bio/gallery/hires/` — high-res versions (`photo-01-hires.jpg`, `photo-02-hires.jpg`, …)
- Gallery images configured via `gallery_images` front matter array in `_pages/bio-gallery.markdown`:
  ```yaml
  gallery_images:
    - filename: photo-01.jpg        # web version (1440px wide, ~200–500 KB)
      hires: photo-01-hires.jpg     # full-res version (original, ~5–20 MB)
      caption: "J3ZZ — Press photo"
  ```
- Download link per photo triggers browser download of the high-res file directly
- Download links hidden in print view (irrelevant on paper)

**EVENTS Page Print Layout:**
- Chronological event listing optimized for print
- Each event displays: date, time, location, venue, description
- Linked work references included where applicable
- Clean table-based layout for easy scanning
- Print-specific styles in `portfolio.css`
- Year navigation widget hidden in print view for clean output

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
  - Navigation follows portfolio grid order (sorted by `metadata.release_date`, newest first)
  - Only navigates between published works visible in the grid (`show_in_grid != false`)
  - Each nav link shows work title + category below (subtitle style)
- Lightbox system for image viewing with captions and keyboard navigation

**Active Navigation States:**
- Main nav: 2px solid underline on active page
- Filter buttons: 2px solid underline on active filter
- Both use `border-bottom-color: #333`

## Mobile Scroll Overlay

The portfolio and gallery grids provide adaptive touch interaction based on grid layout:

**Implementation:**
- **File:** `assets/js/portfolio-scroll-overlay.js`
- **Trigger:** Touch device detection using `'ontouchstart' in window` and `navigator.maxTouchPoints`
- **Column Detection:** Compares `offsetLeft` of first two grid items; if equal → 1 column; otherwise → multi-column

**1-Column Mode (narrow phones):**
- Scroll-focused overlay: finds the item closest to viewport center
- Mechanism: Scroll event listener with throttled updates (50ms debounce)
- Applies `.overlay-active` class to the centered item only
- Shows full overlay (title, categories, abstract) for the focused item

**Multi-Column Mode (tablets, wider phones):**
- Persistent title + category bar at bottom of each item
- Uses `data-label` attribute (e.g. "IRIS · INSTALLATION")
- CSS `::after` pseudo-element renders the label
- All items show their label, no scroll detection
- Cleaner than full overlay, avoids clutter

**How It Works:**
1. Detects if device supports touch; exits immediately on desktop
2. Detects grid layout on load and on resize (debounced 150ms)
3. **1-column:** Applies `.overlay-active` to centered item; updates on scroll/filter
4. **Multi-column:** Adds `grid-multicolumn` class to grid; CSS shows persistent labels
5. Automatically switches modes on device rotation
6. Re-applies mode after filter changes (350ms delay for animation)

**Distance Calculation (1-column only):**
- For each visible item: `Math.abs(itemCenter - viewportCenter)`
- Item with smallest distance gets the overlay
- Only one overlay visible at a time

**CSS Integration:**
- `_portfolio.scss`:
  - `.portfolio-item.overlay-active .portfolio-overlay` — shows overlay for scroll-focused item
  - `.portfolio-grid.grid-multicolumn .portfolio-item::after` — persistent title+category bar
- `_gallery.scss`: Same pattern with gallery selectors
- Zoom animation: `transform: scale(1.02)` (portfolio) and `scale(1.05)` (gallery) on overlay or hover

**User Experience:**
- **1-column:** Natural scroll-focused interaction, one item dominates screen
- **Multi-column:** Labels always visible, clean grid, no interaction needed for titles
- **Desktop:** Hover overlays, unchanged

## Typography Notes

- All prose text on screen uses `text-align: left` (not justify) — WCAG 1.4.8 compliance
- Print stylesheets (`_print.scss`) retain `text-align: justify` (correct for printed documents)
- Affected files: `_bio.scss`, `_work-modules.scss`, `_events.scss`, `_work-detail.scss`, `_contact.scss`, `_portfolio.scss`

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
- `booking_email` - Booking contact email
- `description` - Site description
- `url` - Base URL (https://www.j3zz.com)
- `repository` - GitHub repository (username/repo)
- `logo` - Path to logo image

**SEO Configuration:**
- `author.name` - Author name for SEO
- `author.email` - Author email for SEO
- `author.twitter` - Twitter username for SEO
- `social.name` - Social profile name
- `social.links[]` - Array of social profile URLs for structured data
- `tagline` - Site tagline for SEO
- `default_image` - Default image for social sharing
- `lang` - Site language (e.g., en_US)

**Analytics:**
- `google_analytics` - Google Analytics 4 measurement ID (format: G-XXXXXXXXXX)

**Social Media:**
- `bandcamp_username`
- `soundcloud_username`
- `youtube_username`
- `vimeo_username`
- `facebook_username`
- `instagram_username`
- `twitter_username`
- `linkedin_username`
- `github_username`

**Newsletter:**
- `mailchimp_action_url` - Mailchimp form action URL
- `mailchimp_bot_field` - Mailchimp bot field name for spam prevention

**Artwork Shipping & Purchasing Policy:**
Two parallel blocks — `artwork_shipping` (EN) and `artwork_shipping_fr` (FR). The layout picks `artwork_shipping_fr` when `page.lang == 'fr'`, falling back to `artwork_shipping`.
- `ships_from` - Origin location displayed on artwork pages (e.g. "Réunion Island" / "Île de la Réunion")
- `delivery_cost` - Shipping cost policy text
- `delivery_time_domestic` - Estimated domestic delivery time
- `delivery_time_international` - Estimated international delivery time
- `handling` - Packaging and handling description
- `customs` - Customs/import duties notice
- `satisfaction` - Satisfaction/damage policy
- `authenticity` - Certificate of authenticity notice

Note: `ships_from` is a plain string, not a translation key — update both `artwork_shipping.ships_from` and `artwork_shipping_fr.ships_from` independently.

## SEO Architecture

The site includes comprehensive SEO optimization using the `jekyll-seo-tag` plugin with custom enhancements.

**Jekyll Plugins:**
- `jekyll-seo-tag` - Automatic generation of SEO meta tags
- `jekyll-sitemap` - Automatic sitemap generation at `/sitemap.xml`

**SEO Components:**

1. **`_includes/seo.html`** - Main SEO include with:
   - `{% seo %}` tag from jekyll-seo-tag plugin (handles canonical URLs)
   - `dns-prefetch` hint for Google Tag Manager (in all 4 layouts)
   - **Hreflang tags** for bilingual EN/FR page pairs (conditional on `page.lang_alternate`)
   - **Robots meta tag** (conditional on `page.noindex` front matter):
     - `noindex, nofollow` for pages with `noindex: true` (404, privacy)
     - `index, follow` for all other pages (default)
   - Enhanced Open Graph tags for portfolio works (article type)
   - Structured data (JSON-LD) for portfolio works as CreativeWork (with `sameAs` social links)
   - Structured data (JSON-LD) for portfolio work breadcrumbs as BreadcrumbList
   - Structured data (JSON-LD) for visual artworks as VisualArtwork (with `sameAs` social links)
   - Structured data (JSON-LD) for artwork breadcrumbs as BreadcrumbList

2. **Structured Data (Schema.org):**
   - **Portfolio works** get `CreativeWork` structured data (via `seo.type: CreativeWork` in `_config.yml` defaults)
     - Overrides jekyll-seo-tag's default `BlogPosting` type
     - Includes: name, description, image, URL, author (with `sameAs` social links), datePublished, dateModified, genre
     - Uses `page.metadata.release_date` for publication date
     - Uses `page.last_modified_at` (from jekyll-last-modified-at plugin) for modification date
   - **Portfolio work breadcrumbs** get `BreadcrumbList` structured data
     - Provides hierarchical navigation path: Works → Category → Work Title
     - Improves search result snippet display with breadcrumb path
   - **Visual artworks** get `VisualArtwork` structured data (via `seo.type: VisualArtwork` in `_config.yml` defaults)
     - Overrides jekyll-seo-tag's default type
     - Includes: name, description, image, URL, creator (with `sameAs` social links), medium, dateCreated
   - **Artwork breadcrumbs** get `BreadcrumbList` structured data
     - Provides navigation path: Gallery → Artwork Title
     - Consistent with portfolio work breadcrumb pattern

3. **Open Graph Tags:**
   - Standard Open Graph tags for all pages (title, description, image, URL)
   - **Locale handling:** `og:locale` is set per-page based on language:
     - English pages: `og:locale: en_US`
     - French pages: `og:locale: fr_FR`
     - Implemented in `_includes/seo.html` after jekyll-seo-tag tag (last tag wins for social media crawlers)
   - Enhanced tags for portfolio works:
     - `og:type` set to "article"
     - `article:published_time` from release_date
     - `article:modified_time` from last_modified_at
     - `article:author` from site author
     - `article:section` from work category
     - `article:tag` for each category in multi-category works
   - **Page-specific OG images:**
     - `/works/` uses IRIS installation thumbnail (`/assets/works/2020-08-18-inst-iris/thumbnail.jpg`)
     - `/gallery/` uses representative artwork thumbnail
     - `/bio/` uses bio portrait photo (`/assets/bio/bio-photo.jpg`)
     - `/events/` uses bio portrait photo (`/assets/bio/bio-photo.jpg`)
     - `/contact/` uses bio portrait photo (`/assets/bio/bio-photo.jpg`)
     - Default fallback for other pages: `default_image` from config (`/assets/bio/bio-photo.jpg`)

4. **Favicon Configuration:**
   - Applied to all layouts (portfolio, work, artwork)
   - Uses `logo-square.png` (2048×1446 PNG) for both favicon and apple-touch-icon
   - Provides visual branding in browser tabs and bookmarks

5. **Robots & Indexing:**
   - **robots.txt:**
     - Located at site root
     - Allows all crawlers: `User-agent: * / Allow: /`
     - Declares sitemap location: `Sitemap: https://www.j3zz.com/sitemap.xml`
   - **Page-level noindex:**
     - Pages with `noindex: true` in front matter emit `<meta name="robots" content="noindex, nofollow">`
     - Currently applied to: `404.html` and `_pages/privacy.markdown`
     - Other pages default to `index, follow`

**SEO Configuration in _config.yml:**
```yaml
author:
  name: J3ZZ
  email: contact@j3zz.com
  twitter: j3zz

twitter:
  username: j3zz

social:
  name: J3ZZ
  links:
    - https://bandcamp.com/iamj3zz
    - https://soundcloud.com/j3zz
    # ... additional social profile URLs

tagline: "Experimental sound art merging music, generative systems, and immersive installations"
default_image: /assets/bio/bio-photo.jpg
lang: en_US
```

**Description (Meta & OG Descriptions):**

Portfolio works and artworks use the `abstract` field as their `description` in front matter. This ensures:
- A single, concise `<meta name="description">` (from `page.description` via jekyll-seo-tag)
- No duplicate meta description tags
- The short abstract (1–2 sentences) appears in search results, not the full multi-paragraph content

The `description` field in `_portfolio/*.md` and `_artworks/*.md` is set equal to the `abstract` value. The `abstract` field is kept separately for use in other contexts (portfolio grid hover, print layout, JSON-LD structured data).

**Image Alt Text Improvements:**

- **Image grid module** (`_includes/work-modules/image-grid.html`):
  - Per-image alt text uses the `caption` variable (from `include.captions` array)
  - Falls back to `include.alt`, then to `page.title` if no caption provided
  - Each image in a grid gets its own descriptive alt text rather than shared title
  - Improves accessibility and SEO for image-heavy work pages

6. **Heading Hierarchy (H1 Structure):**
   - All portfolio pages include a visually-hidden `<h1>` at the top of the main content area
   - Pages and their H1 text:
     - `/bio/` → "Bio & CV"
     - `/fr/bio/` → "Bio & CV"
     - `/contact/` → "Contact & Booking"
     - `/fr/contact/` → "Contact & Booking"
     - `/events/` → "Events & Performances"
     - `/fr/events/` → "Agenda"
   - **Implementation:** `<h1 class="visually-hidden">Page Title</h1>` placed after the markdown front matter closing `---`, before main section content
   - **Purpose:** Ensures proper semantic HTML heading hierarchy for accessibility and SEO without visual impact (CSS class hides it from display but keeps it for screen readers and search engines)
   - Note: `/works/` and `/gallery/` pages include their H1s in the layout or page-specific styling

**Page-Specific Front Matter for Enhanced SEO:**

Individual pages can override defaults:
- `/works/` has explicit description and thumbnail image
- `/gallery/` has explicit OG image (artwork thumbnail)
- `/bio/` has explicit image field (bio photo)
- Portfolio works inherit `CreativeWork` schema + `BreadcrumbList` automatically
- Artwork pages inherit `VisualArtwork` schema + `BreadcrumbList` automatically

**Benefits:**
- Improved search engine discoverability with rich snippets and breadcrumbs
- Rich social media sharing previews with relevant images
- Structured data for enhanced search results (Google Rich Results)
- Proper indexing with sitemap and robots.txt
- Work-specific metadata for better content categorization
- Per-image alt text improves accessibility and image search visibility
- Visual consistency in browser tabs and bookmarks via favicon

## Script Loading & Performance

`_layouts/portfolio.html` conditionally loads page-specific JavaScript based on a `page_type` front matter field. This reduces unnecessary script parsing and execution on irrelevant pages.

**Page Types and Scripts:**

Each page declares its type in front matter (`page_type: works`, `page_type: contact`, etc.):

| page_type | Scripts loaded | Pages |
|---|---|---|
| `works` | portfolio, portfolio-scroll-overlay, portfolio-filter-nav, works-qrcode | `/works/`, `/` (index) |
| `gallery` | gallery-qrcode, gallery-hearts, artwork-inquiry | `/gallery/` |
| `bio` | bio-links-qrcode, bio-section-nav | `/bio/` |
| `bio-gallery` | bio-links-qrcode, bio-gallery-qrcode | `/bio-gallery/` |
| `contact` | contact-social-qrcodes, newsletter-form | `/contact/` |
| `events` | events-tickets-qrcode, events-description, events-year-nav | `/events/` |
| *(none)* | *(universal only)* | `/privacy/` |

**Universal Scripts** (loaded on all pages):
`cookie-consent.js`, `utils.js`, `back-to-top.js`, `lightbox.js`, `navigation.js`, `qrcode.min.js`, `print-header-qrcode.js`

**Implementation in Layout:**
```liquid
{% if page.page_type == 'works' %}
  <script src="{{ '/assets/js/portfolio.js' | relative_url }}" defer></script>
  <!-- ... other works-specific scripts -->
{% endif %}
```

**Result:** `/privacy/` loads only 7 universal scripts; `/works/` loads 11 scripts. Each page loads only what it needs, improving page load performance.

## Analytics & Cookie Consent

The site implements privacy-compliant analytics with GDPR-compliant cookie consent management.

**Google Analytics 4 Integration:**

1. **`_includes/analytics.html`** - Privacy-compliant GA4 implementation:
   - Only loads after user consent via cookie consent system
   - Checks `localStorage.getItem('cookieConsent')` for user preferences
   - Loads GA4 script dynamically only if `consent.analytics === true`
   - IP anonymization enabled: `anonymize_ip: true`
   - Secure cookie flags: `SameSite=None;Secure`
   - Listens for `cookieConsentUpdated` events to reload analytics when consent changes
   - Prevents duplicate loading with `window.gaLoaded` flag

2. **Configuration:**
   - Set `google_analytics` in `_config.yml` with GA4 measurement ID
   - Format: `G-XXXXXXXXXX`
   - If not configured, no analytics code is loaded

**Cookie Consent System:**

1. **`assets/js/cookie-consent.js`** - GDPR-compliant cookie consent manager:
   - **Cookie Categories:**
     - Essential cookies (always enabled)
     - Analytics cookies (Google Analytics, requires consent)
     - Embedded content cookies (YouTube, Vimeo, Bandcamp, requires consent)

   - **User Interface:**
     - Cookie consent banner shown on first visit
     - Three options: "Accept All", "Accept Selected" (customize), "Reject All"
     - Cookie settings button (visible after initial consent) to modify preferences anytime

   - **Preference Storage:**
     - Stored in browser localStorage as JSON
     - Format: `{analytics: boolean, embedded: boolean, timestamp: ISO8601}`
     - Persists across sessions

   - **Event System:**
     - Dispatches `cookieConsentUpdated` custom event when preferences change
     - Analytics and other scripts listen for this event to load/reload appropriately

   - **Functions:**
     - `hasConsent()` - Check if consent has been given
     - `getConsent()` - Get current consent preferences
     - `saveConsent(analytics, embedded)` - Save preferences and dispatch event
     - `showBanner()` / `hideBanner()` - Control banner visibility
     - `loadPreferences()` - Load saved preferences into UI
     - `acceptAll()` / `acceptSelected()` / `rejectAll()` - Handle user choices

2. **UI Integration:**
   - Cookie consent banner integrated in default layout
   - Banner displays at bottom of viewport on first visit
   - Settings button (cookie icon) available after initial consent
   - Styled inline within `_includes/cookie-consent.html`

**Privacy Features:**
- No tracking without explicit user consent
- Granular control over cookie categories
- Easy consent revocation via settings button
- IP anonymization for analytics
- Secure cookie handling
- localStorage-based preference storage (no server-side tracking)

**Compliance:**
- GDPR-compliant (European Union General Data Protection Regulation)
- Respects user privacy preferences
- Transparent cookie usage information
- Easy opt-out mechanism

## Deployment

Site deploys to GitHub Pages automatically when pushed to the `main` branch. The custom domain www.j3zz.com is configured via the `CNAME` file and GitHub Pages settings.

**Note**: This site uses the `github-pages` gem instead of a specific Jekyll version to ensure compatibility with GitHub Pages infrastructure.

## Modifying Page Content

All page files are located in the `_pages/` directory:

- **Bio**: Edit `_pages/bio.markdown`
- **Bio Gallery**: Edit `_pages/bio-gallery.markdown` (press photos with front matter-based image management)
- **Events**: Edit `_pages/events.markdown`
- **Contact**: Edit `_pages/contact.markdown`
- **Privacy**: Edit `_pages/privacy.markdown`
- **Homepage/Works Grid**: Edit `_pages/index.markdown` or managed by portfolio collection in `_portfolio/`

**Bio Gallery:** Currently shows "coming soon" message. When ready to add press photos, populate the `gallery_images` array in `_pages/bio-gallery.markdown` and place images in `assets/bio/gallery/`.

## Updating Logo

Change the `logo` path in `_config.yml`:
```yaml
logo: /assets/img/your-logo.png
```
Restart Jekyll server after config changes.
