# File Organization & Data Structures

This document explains the website's file organization, naming conventions, and data structures. Use this as a reference when creating new content or understanding how files map to URLs.

## Directory Structure

```
website/
├── _portfolio/              # Portfolio works (installations, live-acts, films, etc.)
├── _events/                 # Event entries (performances, exhibitions, workshops)
├── _pages/                  # Main site pages (bio, works, events, etc.)
├── _layouts/                # Jekyll layout templates
├── _includes/               # Jekyll include templates
├── _sass/                   # SCSS stylesheets
├── assets/                  # Static assets (images, JS, fonts)
├── docs/                    # Project documentation
├── scripts/                 # Build/utility scripts
├── _config.yml              # Jekyll configuration
├── CLAUDE.md                # Project instructions for Claude Code
└── lefthook.yml             # Git hooks configuration
```

---

## Portfolio Files (`_portfolio/`)

Portfolio files represent your artwork: installations, live performances, films, releases, etc.

### Filename Convention

```
YYYY-MM-DD-{PREFIX}-{slug}.md
```

Where:
- `YYYY-MM-DD` = Creation/release date (actual date, not 1900 for old works)
- `{PREFIX}` = 4-character category prefix (see table below)
- `{slug}` = URL-friendly slug (lowercase, hyphens)

### Category Prefixes (4 characters)

| Category | Prefix | Example Filename | URL Path |
|----------|--------|------------------|----------|
| installations | `inst-` | `2020-08-18-inst-iris.md` | `/works/2020-08-18-inst-iris/` |
| live-acts | `live-` | `2011-01-01-live-eutropia.md` | `/works/2011-01-01-live-eutropia/` |
| films | `film-` | `2012-01-01-film-to-be-told.md` | `/works/2012-01-01-film-to-be-told/` |
| performances | `perf-` | `2019-01-01-perf-suprema.md` | `/works/2019-01-01-perf-suprema/` |
| releases | `rels-` | `2020-01-01-rels-stereo-woods.md` | `/works/2020-01-01-rels-stereo-woods/` |
| workshops | `work-` | `2023-06-04-work-biosonification.md` | `/works/2023-06-04-work-biosonification/` |
| residencies | `resi-` | `2025-01-01-resi-citta-della-pieve.md` | `/works/2025-01-01-resi-citta-della-pieve/` |
| fine-arts | `fine-` | `1900-01-01-fine-fine-arts-sample.md` | `/works/1900-01-01-fine-fine-arts-sample/` |

### Portfolio File Front Matter

```yaml
---
published: true                    # Is this work published/visible? (required)
layout: work                        # Always "work" for portfolio items (required)
title: "Work Title"                 # Display title (required)
work_id: work-slug                  # Unique identifier for linking (required)
abstract: |                         # Short description for grid display (required)
  One sentence summary
description: |                      # Detailed description for detail page (optional)
  Full description with context
category: live-acts                 # Portfolio category (required)
commissioned: false                 # Was this work commissioned? (required)
image: /assets/works/.../thumb.jpg  # Grid thumbnail image (optional)

metadata:
  release_date: "2020-08-18"        # When was it released/created (YYYY-MM-DD)
  location: "Debrecen, Hungary"     # Where did it happen/live
  role: "composer, performer"       # Your role(s) in this work
  collaborators: "Name, Name"       # Other artists involved
  # Category-specific metadata fields (see content-management.md)
  custom:
    - label: "Field Name"
      value: "Field Value"
      link: "/link/if/needed/"      # Optional hyperlink

sections:
  - type: description               # Show the description field
  - type: text                       # Custom text content
    content: |
      Custom HTML/Markdown content
  - type: image-grid                # Image gallery
  - type: metadata                  # Show metadata fields
  - type: quote                      # Pull quote
  - type: linked-events             # Link to events (auto-populated)
  # ... more sections (see modules-reference.md)
---
```

### Key Front Matter Fields

| Field | Type | Required | Purpose | Notes |
|-------|------|----------|---------|-------|
| `published` | boolean | ✓ | Control visibility | `true` = visible, `false` = hidden |
| `layout` | string | ✓ | Template to use | Always `"work"` for portfolio |
| `title` | string | ✓ | Display name | Shows in bio, grid, detail page |
| `work_id` | string | ✓ | Unique identifier | Used for linking events, references |
| `abstract` | text | ✓ | Grid display text | Short (1-3 sentences) |
| `description` | text | ✓ | Detail page text | Full context and information |
| `category` | string | ✓ | Portfolio category | One of: installations, live-acts, films, performances, releases, workshops, residencies |
| `commissioned` | boolean | ✓ | Commission status | `true` = client requirements, `false` = creative freedom |
| `image` | path | ✗ | Thumbnail image | Used in grid display |
| `hero_image` | boolean | ✗ | Print hero image | Set to `true` to display hero image on print layout (file must exist at `assets/works/YYYY-MM-DD-slug/hero.jpg`) |
| `metadata.release_date` | date | ✓ | Creation date | Format: `"YYYY-MM-DD"` |
| `metadata.role` | string | ✓ | Your role(s) | Examples: composer, violinist, performer, sound designer |
| `sections` | array | ✓ | Content modules | Ordered list of content sections |

### Example Portfolio File

```yaml
---
published: true
layout: work
title: "IRIS (Reflectio)"
work_id: iris-reflectio
abstract: |
  Immersive spatial installation combining sound, light, and interactive sensor systems.
description: |
  IRIS (Reflectio) is an interactive installation created for Lighthouse Art 2020...
category: installations
commissioned: true
image: /assets/works/iris/thumbnail.jpg

metadata:
  release_date: "2020-08-18"
  location: "Csokonai Theatre, Debrecen, Hungary"
  role: "artist, composer, programmer"
  commissioned_by: "Lighthouse Art 2020"
  collaborators: "Technical team"
  custom:
    - label: "Exhibition"
      value: "Lighthouse Art 2020"
    - label: "Dates"
      value: "Aug 18–22, 2020"
    - label: "Location"
      value: "Debrecen, Hungary"

sections:
  - type: hero-image
  - type: description
  - type: text
    content: |
      Technical details...
  - type: image-grid
  - type: metadata
---
```

---

## Event Files (`_events/`)

Event files document specific performances, exhibitions, workshops, etc. with dates and locations.

### Filename Convention

```
YYYY-MM-DD-{event-slug}.md
```

Where:
- `YYYY-MM-DD` = Event date (actual date)
- `{event-slug}` = URL-friendly slug

**Note:** Unlike portfolio files, events do NOT use category prefixes. They're named by event date and slug.

### Example Filenames

```
2008-11-27-the-last-drops-cafe-montmartre.md
2019-09-25-j3zz-x-la-lasagneria-opening-party.md
2023-09-22-racines-et-resonances.md
```

### Event File Front Matter

```yaml
---
published: true                    # Is this event visible? (required)
title: "Event Name"                # Display title (required)
date: "2008-11-27"                 # Event date (YYYY-MM-DD) (required)
time: "20:00"                       # Start time (HH:MM, optional)
work_id: the-last-drops            # Link to portfolio work (optional)
country: Hungary                   # Country (optional)
city: Budapest                      # City (optional)
venue_name: "Café Montmartre"       # Venue name (optional)
venue_address: "Address here"       # Full venue address (optional)
venue_link: "https://..."           # Venue website/link (optional)
ticket_link: "https://..."          # Ticket purchase link (optional)
description: "Short event description"  # Brief description (optional)
---
```

### Key Front Matter Fields

| Field | Type | Required | Purpose | Notes |
|-------|------|----------|---------|-------|
| `published` | boolean | ✓ | Control visibility | `true` = visible, `false` = hidden |
| `title` | string | ✓ | Event name | Shows on events timeline |
| `date` | date | ✓ | Event date | Format: `"YYYY-MM-DD"` |
| `time` | time | ✗ | Start time | Format: `"HH:MM"` (24-hour) |
| `work_id` | string | ✗ | Portfolio link | Links to portfolio work (matches `work_id` field) |
| `country` | string | ✗ | Country | For location info |
| `city` | string | ✗ | City | For location info |
| `venue_name` | string | ✗ | Venue name | Display name of the venue |
| `venue_address` | string | ✗ | Venue address | Full address (street, postal code) |
| `venue_link` | string | ✗ | Venue URL | Website or social media link |
| `ticket_link` | string | ✗ | Ticket URL | Link to buy tickets |
| `description` | string | ✗ | Event description | Short text about the event |

### Example Event File

```yaml
---
published: true
title: "The Last Drops at Café Montmartre"
date: "2008-11-27"
time: "20:00"
work_id: the-last-drops
country: Hungary
city: Budapest
venue_name: "Café Montmartre"
venue_address: "Zrínyi utca 18, 1051 Budapest"
description: "International Americana band mixing bluegrass covers and originals."
---
```

---

## Page Files (`_pages/`)

Main site pages that aren't portfolio works.

### Page Files

| File | URL | Purpose |
|------|-----|---------|
| `index.markdown` | `/` | Homepage with portfolio grid |
| `bio.markdown` | `/bio/` | Bio/CV with 8 professional sections |
| `bio-gallery.markdown` | `/bio-gallery/` | Press photos gallery |
| `works.markdown` | `/works/` | Works list (grid + print view) |
| `events.markdown` | `/events/` | Events calendar with year navigation |
| `contact.markdown` | `/contact/` | Contact form & newsletter |
| `privacy.markdown` | `/privacy/` | Privacy policy |

### Bio/CV Page Structure (`bio.markdown`)

The bio page contains 8 sections in this order:

```html
<!-- Bio intro text + image -->
<div class="bio-intro">
  <div class="bio-text">...</div>
  <div class="bio-image">...</div>
</div>

<!-- 8 categorized sections -->
<div class="bio-lists">
  <div class="bio-category">
    <h2>Installations & Exhibitions</h2>
    <div class="bio-items">
      <div class="bio-item">
        <span class="bio-year">YYYY–YYYY</span>
        Work Name — role description
      </div>
    </div>
  </div>

  <div class="bio-category">
    <h2>Composer & Producer</h2>
    <!-- All compositional work: films, releases, theatre, installations -->
  </div>

  <div class="bio-category">
    <h2>Performer & Collaborations</h2>
    <!-- All performance contexts: ensembles, live performances, featured appearances -->
  </div>

  <div class="bio-category">
    <h2>Residencies</h2>
  </div>

  <div class="bio-category">
    <h2>Workshops</h2>
  </div>

  <div class="bio-category">
    <h2>Teaching & Coaching</h2>
  </div>

  <div class="bio-category">
    <h2>Cultural Management & Governance</h2>
  </div>

  <div class="bio-category">
    <h2>Education & Certificates</h2>
  </div>
</div>
```

### Bio Item Format

```html
<div class="bio-item">
  <span class="bio-year">2008–2010</span>
  The Last Drops — violinist, mandolinist
</div>
```

Or with link:

```html
<div class="bio-item">
  <span class="bio-year">2019</span>
  <a href="/works/2019-09-01-live-racines-et-resonances/">
    Racines &amp; Résonances
  </a> — La Lasagneria, Budapest (Sep 25)
</div>
```

---

## Data Relationships

### How Files Connect

```
Portfolio Work File (_portfolio/*.md)
├── Created: YYYY-MM-DD-{prefix}-{slug}.md
├── Contains: category, title, work_id, abstract, description, metadata, sections
│
├─→ Portfolio Grid Display
│   └── Shows: abstract, image, category filter
│
├─→ Detail Page
│   └── URL: /works/YYYY-MM-DD-{prefix}-{slug}/
│   └── Shows: full description, sections, metadata
│
├─→ Bio/CV Entry
│   └── Added manually to bio.markdown in appropriate section
│   └── May link to detail page with `<a href="/works/.../">`
│
└─→ Events Link (optional)
    └── Events link back with `work_id: {work_id}` field
    └── Portfolio work shows linked events via `type: linked-events` section
```

### Work ID System

Every portfolio work has a unique `work_id` used for linking:

```yaml
# _portfolio/2008-11-27-live-the-last-drops.md
work_id: the-last-drops
```

Events link to portfolio works using this same ID:

```yaml
# _events/2008-11-27-the-last-drops-cafe-montmartre.md
work_id: the-last-drops  # ← Links to portfolio work above
```

And the portfolio work can display linked events:

```yaml
# Inside portfolio work sections:
sections:
  - type: linked-events    # ← Shows all events with matching work_id
    title: "Live Events"
```

### URL Generation

Portfolio URLs are generated automatically from filenames:

```
Filename: 2008-11-27-live-the-last-drops.md
URL:      /works/2008-11-27-live-the-last-drops/
```

The URL includes the full filename prefix and slug.

---

## Data Structure Reference

### Portfolio Work Metadata Object

```yaml
metadata:
  release_date: "2020-08-18"         # When created/released (required)
  date: "2020–2021"                  # Display date range (optional)
  based_in: "Debrecen, Hungary"      # Location (optional)
  location: "Debrecen, Hungary"      # Alternative to based_in
  role: "composer, performer"        # Your role(s) (required)
  collaborators: "Name, Name"        # Other artists (optional)
  commissioned_by: "Client Name"     # Client if commissioned (if true)
  custom:                            # Custom fields (optional)
    - label: "Field Name"
      value: "Field Value"
      link: "/optional/link/"        # Optional hyperlink
```

### Event Data Object

```yaml
date: "2008-11-27"                  # Event date (YYYY-MM-DD)
time: "20:00"                        # Start time (HH:MM, optional)
country: Hungary                     # Country code or name (optional)
city: Budapest                       # City name (optional)
venue_name: "Café Montmartre"        # Venue display name (optional)
venue_address: "Street, Postal"      # Full address (optional)
```

---

## Special Files

### Template Works

Template files exist for reference (dated 1900-01-01):

```
_portfolio/1900-01-01-inst-complete-template.md
_portfolio/1900-01-01-inst-modular-example.md
_portfolio/1900-01-01-inst-split-layout-example.md
_portfolio/1900-01-01-fine-fine-arts-sample.md
```

These are visible on `/works/` because `published: true`, but serve as documentation/examples. Consider using `published: false` for actual template examples if they clutter the grid.

### Configuration Files

| File | Purpose |
|------|---------|
| `_config.yml` | Jekyll site configuration (URL, title, analytics, etc.) |
| `CLAUDE.md` | Project instructions for Claude Code |
| `lefthook.yml` | Git hook configuration (pre-commit, pre-push) |
| `.github/workflows/` | GitHub Actions CI/CD pipelines |

---

## Naming Conventions Summary

| Type | Convention | Example |
|------|-----------|---------|
| Portfolio files | `YYYY-MM-DD-{PREFIX}-{slug}.md` | `2020-08-18-inst-iris.md` |
| Event files | `YYYY-MM-DD-{event-slug}.md` | `2008-11-27-the-last-drops-cafe-montmartre.md` |
| Work IDs | `kebab-case` | `the-last-drops`, `racines-et-resonances` |
| URLs | `/works/YYYY-MM-DD-prefix-slug/` | `/works/2020-08-18-inst-iris/` |
| CSS classes | `kebab-case` | `.bio-item`, `.works-list-print` |
| Image paths | `/assets/works/{slug}/` | `/assets/works/iris/thumbnail.jpg` |
| Dates | `YYYY-MM-DD` (ISO 8601) | `2020-08-18` |
| Times | `HH:MM` (24-hour) | `20:00` |

---

## Creating New Content Checklist

### Creating a Portfolio Work

- [ ] Determine category (installations, live-acts, films, performances, releases, workshops, residencies)
- [ ] Choose 4-character prefix based on category
- [ ] Create filename: `YYYY-MM-DD-{PREFIX}-{slug}.md`
- [ ] Fill in required front matter: published, layout, title, work_id, category, commissioned, abstract, description, metadata.release_date, metadata.role
- [ ] Add optional front matter: image, metadata.location, metadata.collaborators, metadata.custom fields
- [ ] Add sections array with content modules
- [ ] Add to bio/CV in appropriate section (Installations, Composer, Performer, etc.)
- [ ] Test locally and verify URL structure

### Creating an Event

- [ ] Determine event date (YYYY-MM-DD)
- [ ] Check if it links to existing portfolio work
- [ ] Create filename: `YYYY-MM-DD-{event-slug}.md`
- [ ] Fill in: published, title, date
- [ ] Add optional: time, work_id (if linking to portfolio), location info, venue details
- [ ] Leave blank: venue_link, ticket_link if not available
- [ ] Test locally and verify timeline display

---

## See Also

- [Content Coherence Framework](CONTENT-COHERENCE.md) — How all content types relate
- [Content Management](content-management.md) — Front matter standards and examples
- [Architecture](architecture.md) — Site structure and configuration
- [Best Practices](best-practices.md) — Workflow recommendations
