# CLAUDE.md

**MY INSTRUCTIONS:**
- Never alter git commits, push, or run git commands yourself
- Never alter git yourself
- Ask me before removing any file
- Never build nor serve Jekyll yourself
- Never execute the test script yourself
- Never mention Claude in git comments nor files

---

## Project Editorial Guidelines

### Career Narrative
J3ZZ's career arc: violinist/musician (2008–2015) → film composer/performer (2013–2020) → new media artist (2016–present, accelerating). The website reflects this evolution — foregrounding the new media identity while honoring the musical foundation.

### Three Professional Identities (in priority order for new commissions)
1. **New Media Artist** — Installations, sensor-driven interactive works (IRIS, Vibrotanica, Unbalanced Forces, Park in Progress)
2. **Composer & Producer** — All compositional work: film scores, soundtracks, releases, installation soundscapes
3. **Performer** — Violinist, electronic musician, laserist (Racines & Résonances, Sur le fil, ensemble collaborations)

### Publishing & Status Fields
- `published: true` = appears on public site
- `published: false` = hidden from site, preserved in repository
- **Never delete files** — unpublish instead
- `status` field in front matter classifies work: `major` (flagship), `minor` (real work, lower weight), `archived` (complete, intentionally hidden), `draft` (in progress)

### Event Calendar Rules
- **Only publish events where J3ZZ is the author/leader/co-leader**
- Member-only appearances (Buddha Bar, Willany Léo, etc.) → `published: false`, `status: archived`

### Portfolio Grid Purpose
The grid answers: "What does J3ZZ make?" Start with installations (new media identity), then performances and significant films, then releases. Not a complete diary.

---

## Artwork Gallery Workflow

The website includes a dedicated fine art gallery (`_artworks/` Jekyll collection) with square thumbnails and high-resolution print images.

**Source Image Requirements:**
- Format: JPEG | Resolution: ~3000px longest side | File size: 3–7 MB | Aspect ratio: Any (will be letterboxed)

**Step-by-Step: Adding a New Artwork Series**

1. **Source files:** Place high-res JPEG in `docs/HIGHRES-IMAGES/` named `1200p_{KEY}.jpg`
2. **Update mapping:** Add key → slug entry to `MAPPING` table in `scripts/process-artworks.sh`
3. **Create markdown file:** `_artworks/YYYY-MM-DD-{slug}.md` with front matter and sections
4. **Create output directory:** `assets/artworks/{slug}/` (one per artwork)
5. **Run the script:** `./scripts/process-artworks.sh` (or `--dry-run`, `--force`)
6. **Verify output:** Check thumbnails and print images at correct sizes

**Documentation & Reference:**
- Full script docs: [Artwork Processing Script](scripts/ARTWORK-PROCESSING.md)
- Script: `scripts/process-artworks.sh`
- Gallery page: `/gallery/`

---

## Documentation Structure

This project's documentation is organized into topic-specific files for performance and maintainability. **Claude loads the full index below into context for every task.**

| Document | Purpose |
|----------|---------|
| **[Content Coherence Framework](docs/CONTENT-COHERENCE.md)** ⭐ | Three layers of organization (Portfolio Grid, Bio/CV, Events), category system, residency framework, decision trees, coherence rules |
| **[File Organization & Data](docs/FILE-ORGANIZATION-AND-DATA.md)** | Filenames, directory structure, data formats, work ID system, checklists |
| **[Development Workflow](docs/WORKFLOW.md)** ⭐ | Complete workflow with commands, Lefthook testing, manual workflows, setup, optional config |
| **[Architecture](docs/architecture.md)** | Site structure, pages, styling, print, SEO, analytics, cookie consent, deployment, configuration |
| **[Content Management](docs/content-management.md)** | Front matter standards, adding works and events, multi-category support |
| **[Modules Reference](docs/modules-reference.md)** | All 11 module types, configuration, examples |
| **[Metadata Reference](docs/metadata-reference.md)** | Category-specific templates (installations, live-acts, releases), industry identifiers |
| **[Best Practices](docs/best-practices.md)** | Workflow for creating works, metadata DO's/DON'Ts, templates |
| **[Testing](docs/testing.md)** | Automated testing (yamllint, html-proofer, Lighthouse, print tests), CI/CD, config |
| **[Testing & Deployment Tutorial](docs/TUTORIAL-testing-deployment.md)** ⭐ | Step-by-step testing and deployment guide, local vs GitHub, troubleshooting |
| **[Code Quality & Best Practices](docs/code-quality.md)** | JS standards, accessibility, security, performance, maintainability, quality score |

---

## Portfolio Categories & Classification

**Output Format-Based Categories:**
- `installations` — Physical/spatial works in specific locations
- `live-acts` — Performing arts (concerts, live shows)
- `films` — Cinema/video works
- `performances` — Dance/theater stage works
- `releases` — Published works (albums, books)
- `workshops` — Educational workshops

**Residencies** are NOT a portfolio category. They're hidden from grid (`show_in_grid: false`) but linked from bio. Each residency connects to an output work.

**Commission Status:**
- `commissioned: true` = Specific requirements from client/commissioner
- `commissioned: false` = Full creative freedom (self-initiated, collaborative, artistic)

**Decision Flowchart:** See [Content Coherence Framework](docs/CONTENT-COHERENCE.md) for complete decision trees and 9 residency→output work examples.

---

## Common Tasks

### Adding a New Portfolio Work
1. Create file: `_portfolio/YYYY-MM-DD-{category-prefix}-{slug}.md`
2. Choose category (see Portfolio Categories above)
3. Set `commissioned: true/false`
4. Use category-specific metadata template from [Metadata Reference](docs/metadata-reference.md)
5. Combine modules from [Modules Reference](docs/modules-reference.md)
6. Test locally: `bundle exec jekyll serve` (see [Development Workflow](docs/WORKFLOW.md) for full details)

**Reference:** [Best Practices](docs/best-practices.md)

### Adding a New Event
1. Create file: `_events/YYYY-MM-DD-{event-slug}.md`
2. Follow event front matter standards from [Content Management](docs/content-management.md)
3. Optionally link to a work using `work_id` field
4. Test and verify on `/events/`

**Reference:** [Content Management](docs/content-management.md#events)

### Modifying Site Pages
- **Bio:** `_pages/bio.markdown` — See [Content Coherence Framework](docs/CONTENT-COHERENCE.md) for CV section structure
- **Events:** `_pages/events.markdown` — Includes year navigation widget
- **Contact:** `_pages/contact.markdown`
- **Homepage:** `_pages/index.markdown` or manage via `_portfolio/` collection

**Reference:** [Architecture > Modifying Page Content](docs/architecture.md)

### Configuring the Site
- SEO, Google Analytics 4, cookie consent, Mailchimp, social media → See [Architecture > Configuration Variables](docs/architecture.md)
- Updating `_config.yml` requires Jekyll server restart

---

## Workflow Quick Reference

**Standard workflow:** Make changes → Preview locally → Commit → Push → Auto-deploy

**Local testing:** `./test-before-push.sh` (runs automatically before commits via Lefthook)

**Full details:** See [Development Workflow](docs/WORKFLOW.md) and [Testing & Deployment Tutorial](docs/TUTORIAL-testing-deployment.md)

---

## Need Help?

- **Understanding categorization, residencies, professional identities:** [Content Coherence Framework](docs/CONTENT-COHERENCE.md)
- **File naming, structure, front matter reference:** [File Organization & Data](docs/FILE-ORGANIZATION-AND-DATA.md)
- **Step-by-step workflow, testing, deployment:** [Development Workflow](docs/WORKFLOW.md)
- **Modules, layouts, configuration:** [Architecture](docs/architecture.md)
- **Creating portfolio works, events:** [Best Practices](docs/best-practices.md) and [Content Management](docs/content-management.md)
- **Metadata templates, industry identifiers:** [Metadata Reference](docs/metadata-reference.md)
- **Code quality standards:** [Code Quality & Best Practices](docs/code-quality.md)
- **Testing troubleshooting:** [Testing](docs/testing.md) and [Testing & Deployment Tutorial](docs/TUTORIAL-testing-deployment.md)
