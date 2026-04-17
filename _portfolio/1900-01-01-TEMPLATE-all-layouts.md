---
published: false
sitemap: false
status: major
layout: work
title: Complete Portfolio Template — All Layouts & Categories
work_id: complete-portfolio-template
abstract: "The ultimate reference template demonstrating every metadata field, section module type, and category example (installations, live-acts, films, performances, releases, workshops, residencies, fine-arts) available in the portfolio system."
description: |
  This is the comprehensive master template for the J3ZZ portfolio system. It contains examples and documentation for all 8 portfolio categories, all 10+ section module types, all metadata fields, and best practices for organizing complex works. Use this as the single reference guide when creating new portfolio works. Copy relevant sections, adapt for your specific category, and customize content, images, and metadata.

  **Categories covered:** Installations | Live Acts | Films | Performances | Releases | Workshops | Residencies | Fine Arts

category: installations
image: /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
print_hero_image: false  # Uncomment to display hero.jpg on print layout (requires: assets/works/YYYY-MM-DD-slug/hero.jpg)

# CENTRALIZED METADATA - Define once, use everywhere
# This metadata block demonstrates ALL possible fields across all categories
# Remove fields that don't apply to your work
metadata:
  # ====================
  # TEMPORAL INFORMATION
  # ====================
  release_date: "1900-01-01"
  date: "March 15 - May 30, 2024"  # For installations: exhibition period | For live acts: performance date(s) | For releases: release date

  # ====================
  # INDUSTRY IDENTIFIERS (mainly for releases)
  # ====================
  isrc: "USRC17607839"  # International Standard Recording Code (individual recordings)
  upc: "123456789012"  # Universal Product Code (barcode for albums/releases)
  iswc: "T-345.246.800-1"  # International Standard Musical Work Code (compositions)

  # ====================
  # LOCATION INFORMATION
  # ====================
  location: "Paris, France"
  location_link: "https://maps.google.com/?q=Paris,France"  # Any location field can have a _link
  performed_in: "North America, Europe, Asia"  # Geographic scope for tours/performances
  places: "MoMA PS1, Tate Modern, Mori Art Museum"  # Specific venues

  # ====================
  # PRODUCTION INFORMATION
  # ====================
  produced_by: "Production Company Name"
  produced_by_link: "https://productioncompany.com"
  client: "Client Organization Name"
  commissioned_by: "Arts Foundation or Festival Name"
  commissioned_by_link: "https://artsfoundation.org"
  curated_by: "Curator Full Name"
  curated_by_link: "https://curatorwebsite.com"

  # ====================
  # ROLE AND TECHNOLOGY
  # ====================
  role: "Sound artist, composer, installation artist, performer"
  technology: "Max/MSP, TouchDesigner, Ableton Live, modular synthesizers, spatial audio systems, machine learning"

  # ====================
  # COLLABORATORS AND CREDITS
  # ====================
  collaborators: "Visual artist Sarah Johnson, Choreographer Maria Garcia, Software engineer David Kim"
  collaborators_link: "/bio/"
  credits: "Concept & sound: J3ZZ. Visuals: Sarah Johnson. Choreography: Maria Garcia. Software: David Kim. Technical direction: Alex Martinez. Production: Company Name."
  partners: "Partner Organization 1, Partner Organization 2, University Name"
  partners_link: "https://partnerorganization.org"
  supporters: "National Endowment for the Arts, Arts Council, Foundation Name"
  supporters_link: "https://arts.gov"

  # ====================
  # SPECIFIC ROLES (especially for releases)
  # ====================
  composer_performer_producer: "Artist Name or Collective Name"
  mastering_by: "Mastering Engineer Name at Studio Name"
  mastering_by_link: "https://masteringstudio.com"
  artwork_by: "Designer Name or Photographer Name"
  artwork_by_link: "https://designerportfolio.com"

  # ====================
  # ADDITIONAL RESOURCES
  # ====================
  interview: "Featured interview in The Wire Magazine and Resident Advisor"
  interview_link: "https://thewire.co.uk/interview/12345"
  press_kit: "Download electronic press kit and high-resolution images"
  press_kit_link: "https://artist.com/press/complete-template"
  socials: "@artist_name on Instagram, Bandcamp, Spotify, SoundCloud"
  socials_link: "https://bandcamp.com/artist-name"

  # ====================
  # ACKNOWLEDGEMENTS
  # ====================
  special_thanks: "To all collaborators, supporters, and the entire production team who made this project possible."

  # ====================
  # CUSTOM FIELDS (add any metadata not covered by standard fields)
  # ====================
  custom:
    - label: "Format"
      value: "Installation, Live Performance, Digital Release, Limited Vinyl"
      link: "https://store.example.com/vinyl"
    - label: "Duration"
      value: "45 minutes continuous / 60 minutes live performance / 10 tracks"
    - label: "System"
      value: "32-channel immersive audio installation with interactive sensors"
    - label: "Capacity"
      value: "25 visitors per session for installation / 500 capacity for live performances"
    - label: "Visitors"
      value: "Over 50,000 during exhibition run"
    - label: "Genre"
      value: "Experimental Electronic, Spatial Audio, Sound Art, Ambient"
    - label: "Label"
      value: "Label Name (Catalog: LAB456)"
      link: "https://recordlabel.com"
    - label: "Tour"
      value: "15 cities across 3 continents"
    - label: "Related Work"
      value: "See companion piece"
      link: "/works/2026-01-01-vibrotanica/"

# ====================
# SECTIONS ARRAY - All available module types
# Use, reorder, or remove sections as needed
# ====================
sections:

  # Description module - displays page.description from front matter
  - type: description

  # METADATA MODULE
  # Displays centralized metadata in grid layout
  - type: metadata

  # SPLIT-HERO-METADATA: Image variant (2/3 image + 1/3 metadata)
  - type: split-hero-metadata
    content_type: "image"
    image: /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
    caption: "Installation view showing spatial audio setup and visitor interaction"

  # SPLIT-HERO-METADATA: Iframe variant with fixed height
  - type: split-hero-metadata
    content_type: "iframe"
    embed_code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>'
    caption: "Performance documentation from opening night"

  # SPLIT-HERO-METADATA: Iframe with responsive aspect ratio
  - type: split-hero-metadata
    content_type: "iframe"
    embed_code: '<iframe src="https://player.vimeo.com/video/123456789" frameborder="0" allowfullscreen></iframe>'
    responsive: true
    aspect_ratio: "16:9"
    caption: "Behind-the-scenes: technical setup and rehearsal process"

  # SPLIT-BANDCAMP-METADATA: Narrow embed (1/3) + Metadata & Text (2/3)
  # Perfect for releases with audio players
  - type: split-bandcamp-metadata
    embed_code: '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=2412288496/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>'
    caption: "Available on Bandcamp, Spotify, and all major streaming platforms"
    text_title: "About the Album Release"
    text_content: |
      The album component of this project features **10 tracks** spanning 45 minutes. Each track represents a different spatial configuration, allowing listeners to experience the work from home.

      Mastered by renowned engineer at prestigious studio, the release is available in multiple formats including high-resolution digital download, standard streaming, and limited edition vinyl pressing of 300 copies.

  # TEXT MODULE - Rich Markdown content with full formatting
  - type: text
    title: "About the Project"
    content: |
      *Complete Portfolio Template* is a **comprehensive demonstration work** that showcases every possible metadata field and section module type available in the portfolio system. This work serves as a reference guide and template for creating new portfolio works.

      The project combines multiple formats:
      - **Installation**: Immersive spatial audio environment with interactive elements
      - **Live Performance**: Improvised audiovisual performances at major venues
      - **Release**: Album capturing the essence of the installation
      - **Collaboration**: Multi-artist project with international contributors

      ## Technical Approach

      The work utilizes cutting-edge technology including real-time audio synthesis, machine learning-driven visual generation, and spatial audio processing across 32 channels. The system responds to visitor movement and environmental factors, creating a unique experience for each session.

      ## Creative Process

      Development occurred over 18 months through residencies at three institutions across two continents. The collaborative nature brought together expertise in sound art, visual design, choreography, and software engineering.

      External resources: Visit the [project website](https://example.com) for more information. See also <a href="https://example.com/documentation" target="_blank" rel="noopener">full technical documentation</a>.

  # HERO-IMAGE MODULE - Large featured image with optional caption
  - type: hero-image
    image: /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
    caption: "Wide view of the installation space showing 32-channel speaker array and interactive zones"

  # IMAGE-GRID: 3 columns
  - type: image-grid
    columns: 3
    images:
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
    captions:
      - "Speaker array configuration detail"
      - "Visitors experiencing the installation"
      - "Control system and processing interface"
      - "Collaboration session with visual artist"
      - "Live performance at opening night"
      - "Technical setup during installation"

  # IMAGE-GRID: 4 columns
  - type: image-grid
    columns: 4
    images:
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
    captions:
      - "Day view of installation"
      - "Night lighting configuration"
      - "Close-up of sensor array"
      - "Audience interaction moment"

  # IMAGE-GRID: 2 columns
  - type: image-grid
    columns: 2
    images:
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
    captions:
      - "Before: Empty gallery space"
      - "After: Completed installation"

  # IMAGE-GRID: 1 column (full-width)
  - type: image-grid
    columns: 1
    images:
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
    captions:
      - "Panoramic view of the complete installation space"

  # IMAGE-GRID: 6 columns (thumbnail gallery)
  - type: image-grid
    columns: 6
    images:
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
      - /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
    captions:
      - "Detail 1"
      - "Detail 2"
      - "Detail 3"
      - "Detail 4"
      - "Detail 5"
      - "Detail 6"

  # SPACER MODULE - Add vertical spacing between sections
  - type: spacer
    height: "60px"

  # IFRAME MODULE: Fixed-height mode (good for Bandcamp, SoundCloud)
  - type: iframe
    embed_code: '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789"></iframe>'
    caption: "Audio excerpt: Opening section of the composition"

  # IFRAME MODULE: Responsive mode (good for YouTube, Vimeo)
  - type: iframe
    embed_code: '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>'
    responsive: true
    aspect_ratio: "16:9"
    caption: "Full performance video from CTM Festival Berlin (60 minutes)"

  # QUOTE MODULE - Blockquote with attribution
  - type: quote
    text: "A groundbreaking work that redefines the boundaries between sound, space, and audience interaction. Complete Portfolio Template demonstrates the future of immersive art experiences."
    author: "Curator Name, Director of Major Museum"

  # QUOTE MODULE - Without author
  - type: quote
    text: "An unforgettable experience that transforms how we perceive the relationship between sound and physical space."

  # TEXT MODULE: Without title
  - type: text
    content: |
      ### Critical Reception

      The work received widespread critical acclaim, with features in major publications including *The Wire*, *Artforum*, *Frieze*, and *Electronic Beats*. Critics highlighted the innovative use of spatial audio technology and the successful integration of multiple artistic disciplines.

      ### Awards and Recognition

      - **Best Sound Installation** - Ars Electronica 2024
      - **Innovation Award** - CTM Festival 2024
      - **Excellence in Collaborative Art** - National Arts Council

      ### Tour Dates

      Following the initial exhibition, the work toured to 15 venues across North America, Europe, and Asia, reaching an audience of over 100,000 visitors total.

  # SPACER MODULE: Example with different height
  - type: spacer
    height: "80px"

  # LINKED-EVENTS MODULE - Automatically displays events linked to this work
  # Events must have matching work_id in their front matter
  - type: linked-events
    title: "Upcoming Performances & Exhibitions"

---

<!--
===============================================
TEMPLATE USAGE GUIDE
===============================================

This single master template covers ALL portfolio categories and module types.

QUICK START:
1. Copy this entire file to: YYYY-MM-DD-{PREFIX}-{slug}.md
   (Use actual release date and correct prefix)
2. Update basic front matter: title, work_id, abstract, category, image
3. Set release_date in metadata (YYYY-MM-DD format)
4. REMOVE: Metadata fields that don't apply to your category
5. KEEP: Only section modules you need (delete unused ones)
6. Replace: All placeholder content, images, captions with your work
7. Test: bundle exec jekyll serve

===============================================
FILENAME PREFIXES (4 characters each)
===============================================

- live-acts      → live-  (e.g., 2011-01-01-live-eutropia.md)
- installations  → inst-  (e.g., 2020-08-18-inst-iris.md)
- films          → film-  (e.g., 2012-01-01-film-to-be-told.md)
- performances   → perf-  (e.g., 2019-01-01-perf-suprema.md)
- releases       → rels-  (e.g., 2020-01-01-rels-stereo-woods.md)
- workshops      → work-  (e.g., 2023-06-04-work-biosonification-workshops.md)
- residencies    → resi-  (e.g., 2025-01-01-resi-citta-della-pieve-residency.md)
- fine-arts      → fine-  (e.g., 1900-01-01-fine-fine-arts-sample.md)

===============================================
CATEGORY-SPECIFIC METADATA GUIDELINES
===============================================

INSTALLATIONS:
✓ Keep: release_date, date, location, places, role, technology, collaborators, commissioned_by, curated_by, credits, partners, supporters
✗ Remove: isrc, upc, iswc, performed_in, composer_performer_producer, mastering_by, artwork_by

LIVE ACTS:
✓ Keep: release_date, date, location, performed_in, places, role, technology, collaborators, commissioned_by, curated_by, credits, partners
✗ Remove: isrc, upc, iswc, client, composer_performer_producer, mastering_by, artwork_by

FILMS:
✓ Keep: release_date, location, role, technology, collaborators, credits, produced_by, curator_by
✗ Remove: isrc, upc, iswc, date, performed_in, composer_performer_producer, mastering_by

PERFORMANCES:
✓ Keep: release_date, date, location, places, role, technology, collaborators, commissioned_by, curated_by, credits
✗ Remove: isrc, upc, iswc, produced_by, mastering_by, artwork_by

RELEASES:
✓ Keep: release_date, location, role, technology, isrc, upc, iswc, composer_performer_producer, mastering_by, artwork_by, credits, produced_by, interview, press_kit, socials
✗ Remove: date, performed_in, places, commissioned_by, client, curated_by, partners, supporters

WORKSHOPS:
✓ Keep: release_date, date, location, places, role, technology, collaborators, credits, partners
✗ Remove: isrc, upc, iswc, performed_in, composer_performer_producer, mastering_by, artwork_by

RESIDENCIES:
✓ Keep: release_date, date, location, places, role, technology, collaborators, commissioned_by, credits, partners, supporters
✗ Remove: isrc, upc, iswc, performed_in, client, composer_performer_producer, mastering_by, artwork_by

FINE ARTS:
✓ Keep: release_date, date, location, role, technology, collaborators, credits
✗ Remove: isrc, upc, iswc, performed_in, produced_by, composer_performer_producer, mastering_by

===============================================
RECOMMENDED SECTION MODULES BY CATEGORY
===============================================

INSTALLATIONS:
- Start with: split-hero-metadata (image) or metadata
- Include: text, image-grid, quote
- Optional: iframe (video docs), spacer, linked-events

LIVE ACTS:
- Start with: split-hero-metadata (iframe - responsive video) or metadata
- Include: text, image-grid, quote, linked-events
- Optional: multiple iframes for different performances

FILMS:
- Start with: split-hero-metadata (iframe - responsive video)
- Include: text, image-grid, quote, linked-events
- Optional: split-bandcamp-metadata for soundtrack

PERFORMANCES:
- Start with: split-hero-metadata (image or iframe)
- Include: text, image-grid, quote, linked-events
- Optional: iframe for video, spacer

RELEASES:
- Start with: split-bandcamp-metadata (with audio player)
- Include: text, quote, image-grid (album art, studio photos)
- Optional: iframe (music videos), linked-events (release shows)

WORKSHOPS:
- Start with: metadata or split-hero-metadata (image)
- Include: text, image-grid, quote
- Optional: iframe (documentation), linked-events

RESIDENCIES:
- Start with: metadata or split-hero-metadata (image)
- Include: text, image-grid, quote
- Optional: linked-events (shows/exhibitions during residency)

FINE ARTS:
- Start with: split-hero-metadata (image)
- Include: text, image-grid (detail views)
- Optional: quote (exhibition review)

===============================================
IMPORTANT REMINDERS
===============================================

✓ All works MUST include 'abstract' field (used in grid view & print)
✓ Use 'published: false' to hide from public site (unpublish instead of delete)
✓ Set 'status' field: major (flagship), minor (real work), archived (complete, intentionally hidden), draft (in progress)
✓ Test locally BEFORE pushing: bundle exec jekyll serve
✓ Images should be placed in: assets/works/YYYY-MM-DD-slug/
✓ Use relative image paths: /assets/works/YYYY-MM-DD-slug/image.jpg
✓ Metadata is inherited by all modules — define once, use everywhere
✓ All external links should include: target="_blank" rel="noopener"

===============================================
-->
