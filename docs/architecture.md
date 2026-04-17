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
- `_layouts/portfolio.html` - Main layout for pages with navigation and logo
- `_layouts/work.html` - Layout for individual portfolio work detail pages
- `_layouts/bio-gallery.html` - Layout for bio gallery page with lightbox support

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
- `assets/js/portfolio.js` - JavaScript for portfolio filtering with multi-category support
- `assets/js/portfolio-scroll-overlay.js` - Mobile scroll overlay for portfolio and gallery grids (IntersectionObserver-based, touch-device only)
- `assets/js/lightbox.js` - Lightbox functionality for image galleries
- `assets/js/cookie-consent.js` - GDPR-compliant cookie consent manager for analytics and embedded content
- `assets/js/utils.js` - Reusable utility functions (debounce, throttle) for performance optimization
- `assets/js/back-to-top.js` - Back-to-top button for page navigation
- `assets/js/events-year-nav.js` - Year navigation widget for events page with smooth scrolling and active year highlighting
- `assets/js/events-description.js` - Event description expand/collapse functionality
- `assets/js/print-header-qrcode.js` - Universal QR code generator for print header (all pages)
- `assets/js/works-qrcode.js` - QR codes for individual works in printable WORKS page
- `assets/js/bio-links-qrcode.js` - QR codes for bio page links in print version
- `assets/js/bio-gallery-qrcode.js` - QR codes for bio gallery images in print version
- `assets/js/contact-social-qrcodes.js` - QR codes for social media links in print version of contact page
- `assets/js/newsletter-form.js` - Newsletter form validation and submission handling
- `assets/js/navigation.js` - Mobile menu toggle and navigation functionality
- `assets/js/qrcode.min.js` - QR code generation library
- `assets/img/` - Images including logo and portfolio work images
- `assets/img/bio-gallery/` - Press photos and artist images for bio gallery

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
- HTML: `<nav class="bottom-nav">` in all 4 layouts, before `<footer>`
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
- Currently displays a "coming soon" message with press contact email (contact@j3zz.com)
- Gallery images not yet ready for publication
- When ready: will show press photos with download instructions, 4-column grid with lightbox on web, single-column print layout with QR codes
- Gallery images will be configured via `gallery_images` front matter array (each entry: `filename` + `caption`)
- Images go in `assets/bio/gallery/`

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

## SEO Architecture

The site includes comprehensive SEO optimization using the `jekyll-seo-tag` plugin with custom enhancements.

**Jekyll Plugins:**
- `jekyll-seo-tag` - Automatic generation of SEO meta tags
- `jekyll-sitemap` - Automatic sitemap generation at `/sitemap.xml`

**SEO Components:**

1. **`_includes/seo.html`** - Main SEO include with:
   - `{% seo %}` tag from jekyll-seo-tag plugin (handles canonical URLs)
   - `dns-prefetch` hint for Google Tag Manager (in all 4 layouts)
   - Custom meta tags for robots and googlebot
   - Enhanced Open Graph tags for portfolio works (article type)
   - Structured data (JSON-LD) for portfolio works as CreativeWork (with `sameAs` social links)
   - Structured data (JSON-LD) for portfolio work breadcrumbs as BreadcrumbList
   - Structured data (JSON-LD) for visual artworks as VisualArtwork (with `sameAs` social links)
   - Structured data (JSON-LD) for artwork breadcrumbs as BreadcrumbList

2. **Structured Data (Schema.org):**
   - **Portfolio works** get `CreativeWork` structured data
     - Includes: name, description, image, URL, author (with `sameAs` social links), datePublished, dateModified, genre
     - Uses `page.metadata.release_date` for publication date
     - Uses `page.last_modified_at` (from jekyll-last-modified-at plugin) for modification date
   - **Portfolio work breadcrumbs** get `BreadcrumbList` structured data
     - Provides hierarchical navigation path: Works → Category → Work Title
     - Improves search result snippet display with breadcrumb path
   - **Visual artworks** get `VisualArtwork` structured data
     - Includes: name, description, image, URL, creator (with `sameAs` social links), medium, dateCreated
   - **Artwork breadcrumbs** get `BreadcrumbList` structured data
     - Provides navigation path: Gallery → Artwork Title
     - Consistent with portfolio work breadcrumb pattern

3. **Open Graph Tags:**
   - Standard Open Graph tags for all pages (title, description, image, URL)
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
   - Applied to all 4 layouts (portfolio, work, artwork, bio-gallery)
   - Uses `logo-square.png` (2048×1446 PNG) for both favicon and apple-touch-icon
   - Provides visual branding in browser tabs and bookmarks

5. **robots.txt:**
   - Located at site root
   - Allows all crawlers: `User-agent: * / Allow: /`
   - Declares sitemap location: `Sitemap: https://www.j3zz.com/sitemap.xml`

**SEO Configuration in _config.yml:**
```yaml
author:
  name: J3ZZ
  email: hello@j3zz.com
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

**Description Override (Meta & OG Descriptions):**

Both portfolio work pages and artwork pages use the `abstract` field as their description for better SEO control:
- **Portfolio works** (`page.layout == "work"` with `page.abstract`):
  - `meta name="description"` and `og:description` both use the abstract
  - Provides concise, SEO-friendly description instead of raw markdown content
- **Artwork pages** (`page.layout == "artwork"` with `page.abstract`):
  - Same behavior: abstract used for both meta and OG descriptions
- Fallback: If abstract is missing, jekyll-seo-tag generates description from page content

**Image Alt Text Improvements:**

- **Image grid module** (`_includes/work-modules/image-grid.html`):
  - Per-image alt text uses the `caption` variable (from `include.captions` array)
  - Falls back to `include.alt`, then to `page.title` if no caption provided
  - Each image in a grid gets its own descriptive alt text rather than shared title
  - Improves accessibility and SEO for image-heavy work pages

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
