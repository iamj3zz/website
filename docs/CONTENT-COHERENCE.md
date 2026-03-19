# Content Coherence Framework

This document explains how every piece of content on the J3ZZ website is categorized and how these categorizations relate to each other. Understanding this framework ensures consistency as new content is added.

## The Big Picture: Three Layers

All website content is organized in three interconnected layers:

### Layer 1: Portfolio Grid (Public Showcase)
**What it shows:** Final artwork in output format categories
**Where:** Homepage & `/works/` page
**Purpose:** Show commissioners and audiences what you've created
**User perspective:** "What can J3ZZ do? What are their completed works?"

### Layer 2: Bio/CV (Professional Identity)
**What it shows:** Your three professional identities through organized sections
**Where:** `/bio/` page
**Purpose:** Show potential commissioners which identity to hire you for
**User perspective:** "Who is J3ZZ as a professional? Which identity should I commission?"

### Layer 3: Events Calendar (Timeline & Context)
**What it shows:** When and where performances/exhibitions happened
**Where:** `/events/` page
**Purpose:** Show activity timeline and provide specific event documentation
**User perspective:** "Where has J3ZZ performed? What's the context for their work?"

---

## Layer 1: Portfolio Grid System

### Portfolio Categories (Output Format Based)

The portfolio grid displays works in 6 output-format categories:

| Category | Output Format | Definition | Grid Display | Bio Section |
|----------|---------------|-----------|--------------|-------------|
| **installations** | Physical/spatial work | Interactive or non-interactive spatial installations in specific locations | ✓ Yes | Installations & Exhibitions |
| **live-acts** | Performing arts event | Concerts, live shows, featured performances (ensemble or solo) | ✓ Yes | Performer & Collaborations |
| **films** | Cinema/video work | Documentaries, animations, dance films, short films, video art | ✓ Yes | Composer & Producer |
| **performances** | Live stage work | Dance/theater performances (choreographic or theatrical) | ✓ Yes | Performer & Collaborations |
| **releases** | Published audio work | Albums, EPs, singles, published music (digital or physical) | ✓ Yes | Composer & Producer |
| **workshops** | Educational event | Workshops, cultural mediation, educational sessions | ✓ Yes | Workshops |
| **residencies** | Artist process | Residency programs (hidden from grid via `show_in_grid: false`) | ✗ No | Residencies |

### Key Principle: Output Format, Not Role

**Categories describe WHAT the work IS, not WHAT YOUR ROLE IS.**

- Your role (composer, violinist, performer, etc.) is documented in `metadata.role`
- The category determines which grid section the work appears in
- The same work type (e.g., "film") always goes in the same category, regardless of your role

**Example:**
- Film where you composed the score → `category: films`, `metadata.role: "composer"`
- Film where you performed → `category: films`, `metadata.role: "performer"`
- Both appear in the same grid section: Films

### Residencies: Special Case

Residencies are **NOT a grid category**. Instead:

1. **Residency pages** are created with `show_in_grid: false` and live at `/works/YYYY-MM-DD-resi-name/`
2. **Residency pages** document the process and link to output work(s)
3. **Output work created during residency** uses its output category (installations, films, etc.)
4. **Bio residencies section** lists all residencies as links (no grid display)

**Example:**
- Citta Della Pieve residency (2025) created Vibrotanica installation
- Residency page: `/works/2025-01-01-resi-citta-della-pieve/` — documents process
- Output work: `/works/2025-01-01-inst-vibrotanica/` — appears in grid under "installations"
- Bio shows: Both linked in their respective sections (Residencies + Installations & Exhibitions)

### Commissioned Status

Every portfolio work has a `commissioned` field:

- `commissioned: true` = You were given specific requirements/brief by a client
- `commissioned: false` = You had full creative freedom (self-initiated, collaborative, artistic choice)

**Grid filter:** Users can toggle "Show commissioned only" to see your work-for-hire projects.

---

## Layer 2: Bio/CV Professional Identities

The bio page (`_pages/bio.markdown`) is organized into 8 sections that showcase your **three professional identities**:

### The Three Professional Identities

| Identity | What It Represents | What Gets Listed Here |
|----------|-------------------|----------------------|
| **New Media Artist** | Immersive, interactive spatial installations | Installations & Exhibitions |
| **Performer** | Violinist, electronic musician, laserist, video artist | Performer & Collaborations |
| **Composer & Producer** | Compositional/production work across ALL formats | Composer & Producer |

### Bio Section Organization

Sections 1-3 showcase the three identities (in prominence order):

#### 1. **Installations & Exhibitions** → New Media Artist
- Your most ambitious immersive/interactive work
- First section to establish your new media artist identity
- Examples: IRIS, Unbalanced Forces, Vibrotanica

#### 2. **Composer & Producer** → Composer/Producer (Unified Section)
**UNIFIED across all formats** — all compositional/production work lives here:

- **Film & Audiovisual works:** Composer, sound designer roles
- **Releases:** Albums, singles, published compositions
- **Theatre compositions:** Sound design, original scores for dance/theatre
- **Installation soundscapes:** Interactive audio for spatial works

**Why unified?** Makes your composer identity visually coherent and prominent, showing breadth across media types.

Example entries:
- Films: "To be told — documentary (composer, sound designer)"
- Releases: "A Drop in the Ocean — album"
- Theatre: "SUPREMA — dance performance (composer, performer)"

#### 3. **Performer & Collaborations** → Performer
Shows all performance contexts:

- **Ensemble memberships:** Long-term collaborations (The Last Drops, Willany Léo, Azalai, Iparkutya, etc.)
- **Live performances:** Featured appearances, festivals, solo work
- **Solo projects:** Racines & Résonances, Buddha Bar residency, etc.

Your roles here: Violinist, electronic musician, laserist, video artist, performer

#### Sections 4-8: Supporting Context

4. **Residencies** — Artist-in-residence programs
5. **Workshops** — Educational/cultural mediation
6. **Teaching & Coaching** — Improvisation coaching
7. **Cultural Management & Governance** — Leadership roles
8. **Education & Certificates** — Training and credentials

### Decision Tree: Where Does New Bio Content Go?

```
Is it a composition or production work?
├─ YES → Composer & Producer (films, releases, theatre, installation sound)
└─ NO ↓

Is it a performance context (ensemble, festival, featured appearance)?
├─ YES → Performer & Collaborations
└─ NO ↓

Is it an immersive spatial installation/exhibition?
├─ YES → Installations & Exhibitions
└─ NO ↓

Is it an artist residency?
├─ YES → Residencies
└─ NO ↓

Is it an educational workshop?
├─ YES → Workshops
└─ NO ↓

Is it teaching/improvisation coaching?
├─ YES → Teaching & Coaching
└─ NO ↓

Is it a leadership/governance role?
├─ YES → Cultural Management & Governance
└─ NO ↓

Is it education/training/certificate?
├─ YES → Education & Certificates
```

---

## Layer 3: Events Calendar

The `/events/` page documents **when and where** you performed or exhibited.

### Event Categories

Events are organized by date/year and can optionally link to portfolio works:

| Event Type | Linked To | Example |
|-----------|-----------|---------|
| **Live performance** | `live-acts` or `performances` portfolio work | Racines & Résonances performances (multiple dates) |
| **Festival appearance** | May or may not have portfolio page | Sziget Festival, Volt Festival |
| **Residency event** | `residencies` portfolio work | Cité des arts residency opening |
| **Workshop/Teaching** | `workshops` portfolio work | Biosonification workshop |
| **Exhibition opening** | `installations` portfolio work | IRIS installation opening |
| **One-off appearance** | Usually no portfolio work | Collaboration or guest appearance |

### Event to Portfolio Linking

Events can link to portfolio works via `work_id` field:

```yaml
---
title: "Racines & Résonances"
work_id: racines-et-resonances  # Links to /works/2019-09-01-live-racines-et-resonances/
date: "2019-09-25"
---
```

**When to link:**
- The event is documented as a portfolio work
- The event is significant enough to warrant a detail page
- The event showcases a major piece or residency

**When NOT to link:**
- One-off festival appearance with no detail page
- Small ensemble performance
- Casual collaboration

---

## How It All Connects: Content Flow

```
CREATION MOMENT
    ↓
NEW WORK CREATED (installation, performance, composition, residency)
    ↓
┌─────────────────────────────────────────┐
│ Create portfolio work file               │
│ _portfolio/YYYY-MM-DD-{prefix}-name.md  │
│ (with category, commissioned status)    │
└─────────────────────────────────────────┘
    ↓
    ├→ Portfolio Grid Updated
    │  (appears in grid under output category)
    │
    ├→ Bio/CV Updated
    │  (add to relevant bio section based on role/type)
    │
    └→ Events Created (Optional)
       (if it's a public event with a date)
       _events/YYYY-MM-DD-event-name.md
       (optionally links back to portfolio work)
```

### Example: Residency Output Work

**Citta Della Pieve Residency (2025)**

1. **Create residency documentation page:**
   - File: `_portfolio/2025-01-01-resi-citta-della-pieve.md`
   - Category: `residencies`
   - `show_in_grid: false` (hidden from grid)
   - Documents the residency process & artistic investigation

2. **Create output work page:**
   - File: `_portfolio/2025-01-01-inst-vibrotanica.md`
   - Category: `installations` (output format)
   - Description mentions the residency
   - Appears in grid under "Installations"

3. **Update bio/CV:**
   - Add to "Installations & Exhibitions" section
   - Add to "Residencies" section
   - Link between them

4. **Create events (optional):**
   - Opening event: `_events/2025-01-15-vibrotanica-opening.md`
   - Links to portfolio work: `work_id: vibrotanica`
   - Shows on `/events/` timeline

---

## Coherence Rules

Follow these principles to maintain content coherence:

### Rule 1: Output Format Category Is Immutable
Once you choose a category (installations, films, releases, etc.), it doesn't change based on context or role. The category describes what the OUTPUT is, not what you did.

### Rule 2: One Primary Role Per Portfolio Work
In `metadata.role`, list your primary role(s) for that work. This is separate from the category and clarifies your contribution.

### Rule 3: Unified Composer/Producer Identity
All compositional and production work goes in the bio's "Composer & Producer" section, regardless of output format (film, release, theatre, installation).

### Rule 4: Bio Sections Are Hierarchical
- Sections 1-3 (Installations, Composer, Performer) are primary professional identities
- Sections 4-8 are supporting context
- Residencies appear in both a dedicated section AND in the output work's bio section

### Rule 5: Commissioned Status Is Independent
The `commissioned` field is independent of category or bio placement. A commissioned installation and a self-initiated film can both be present in the grid and bio simultaneously.

### Rule 6: Events Are Supplementary
Events provide timeline context but don't override portfolio categorization. One portfolio work can have multiple events linked to it (e.g., multiple performance dates for Racines & Résonances).

---

## Adding New Content Checklist

When adding new work to the portfolio:

- [ ] **Identify output format** — What is the final work? (installation, film, release, performance, etc.)
- [ ] **Choose category** — Which portfolio category matches this output?
- [ ] **Set commissioned status** — Were you given specific requirements or full creative freedom?
- [ ] **Document in portfolio** — Create `_portfolio/YYYY-MM-DD-{prefix}-name.md`
- [ ] **Identify your role(s)** — What did you do? (composer, performer, sound designer, etc.)
- [ ] **Update bio/CV** — Which section(s) should this appear in?
  - Composer & Producer? → Add to that section
  - Performer context? → Add to Performer & Collaborations
  - Installation? → Add to Installations & Exhibitions
- [ ] **Create events (optional)** — Is there a public event date? Create `_events/` file
- [ ] **Link events to portfolio** — If events exist, link with `work_id`

---

## FAQ: Coherence Decisions

**Q: Can one work appear in multiple bio sections?**
A: Yes, if it genuinely represents multiple identities. Example: A dance performance you composed AND performed in appears in both "Composer & Producer" and "Performer & Collaborations" (mentioned as "performer" role in Composer section, or separate listing in Performer section).

**Q: Why is "Composer & Producer" unified across formats?**
A: To make your composer identity visually prominent and coherent. It shows breadth (film, release, theatre, installation) and makes it obvious to commissioners that you compose across all media types.

**Q: Can a residency produce multiple output works?**
A: Yes. Document the residency as one page with `show_in_grid: false`, then each output work gets its own portfolio page with its output category. Example: A 3-month residency could produce an installation, a performance, and a release — three separate portfolio entries.

**Q: Should one-off festival appearances have portfolio pages?**
A: Only if they're significant enough to warrant detailed documentation. Otherwise, just list in the bio "Performer & Collaborations" section. Create a portfolio page if it's a solo project, a major collaboration, or something you want to showcase with detail.

**Q: How do I link a performance to multiple years in the bio?**
A: Use date ranges in the bio item: `<span class="bio-year">2013–2017</span> Buddha Bar Budapest`. The portfolio work can have one primary date.

---

## See Also

- [Portfolio Categories & Classification](CLAUDE.md#portfolio-categories--classification) in CLAUDE.md
- [CV Structure & Professional Identities](CLAUDE.md#biocv-structure--professional-identities) in CLAUDE.md
- [Content Management](content-management.md) for front matter standards
- [Best Practices](best-practices.md) for workflow recommendations
