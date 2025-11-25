---
published: true 
layout: work
title: Complete Template Reference
work_id: complete-template-reference
abstract: "A comprehensive template work demonstrating all possible metadata fields, links, and section modules available in the portfolio system for easy reference and replication."
description: |
  This is the ultimate reference template demonstrating every feature of the portfolio system. It showcases all available metadata fields (temporal, industry identifiers, location, production, roles, collaborators, and custom fields), all 10 section module types (hero-image, text, image-grid, metadata, quote, spacer, linked-events, iframe, split layouts, and description), and best practices for organizing complex works. Use this as a reference when creating new portfolio works to understand all available options and their proper formatting.
categories: [installations, releases, live-acts, commissions]
primary_category: installations
image: /assets/img/31-complete-template/thumbnail.jpg

# CENTRALIZED METADATA - Define once, use everywhere
# This metadata block demonstrates ALL possible fields
# Remove fields that don't apply to your work
metadata:
  # ====================
  # TEMPORAL INFORMATION
  # ====================
  release_date: "1900-01-01"
  date: "March 15 - May 30, 2024"  # For installations: exhibition period / For live acts: performance date(s) / For releases: release date

  # ====================
  # INDUSTRY IDENTIFIERS (for releases)
  # ====================
  isrc: "USRC17607839"  # International Standard Recording Code (individual recordings)
  upc: "123456789012"  # Universal Product Code (barcode for albums/releases)
  iswc: "T-345.246.800-1"  # International Standard Musical Work Code (compositions)

  # ====================
  # LOCATION INFORMATION
  # ====================
  location: "New York, USA"
  location_link: "https://maps.google.com/?q=New+York,USA"  # Any location field can have a _link

  performed_in: "North America, Europe, Asia"  # Geographic scope for tours/performances
  places: "MoMA PS1, Tate Modern, Mori Art Museum"  # Specific venues

  # ====================
  # PRODUCTION INFORMATION
  # ====================
  produced_by: "Production Company Name"
  produced_by_link: "https://productioncompany.com"

  client: "Client Organization Name"
  # client_link: "/works/01-vibrotanica/"  # Example: Can link to internal pages

  commissioned_by: "Arts Foundation or Festival Name"
  commissioned_by_link: "https://artsfoundation.org"

  curated_by: "Curator Full Name"
  curated_by_link: "https://curatorwebsite.com"

  # ====================
  # ROLE AND TECHNOLOGY
  # ====================
  role: "Sound artist, composer, installation artist, performer"
  technology: "Max/MSP, TouchDesigner, Ableton Live, modular synthesizers, spatial audio systems, machine learning, real-time processing"

  # ====================
  # COLLABORATORS AND CREDITS
  # ====================
  collaborators: "Visual artist Sarah Johnson, Choreographer Maria Garcia, Software engineer David Kim"
  collaborators_link: "/bio/"  # Link to bio or another work

  credits: "Concept & sound: J3ZZ. Visuals: Sarah Johnson. Choreography: Maria Garcia. Software: David Kim. Technical direction: Alex Martinez. Production: Company Name. Lighting: Emma Wilson"

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
  special_thanks: "To all collaborators, supporters, and the entire production team who made this project possible. Special recognition to the venue staff and technical crew."

  # ====================
  # CUSTOM FIELDS
  # Add any metadata not covered by standard fields
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

    - label: "Performances"
      value: "20 shows total"

    - label: "Related Work"
      value: "See companion piece"
      link: "/works/01-vibrotanica/"  # Example: link to another work

# ====================
# SECTIONS ARRAY
# All available module types demonstrated below
# Use, reorder, or remove sections as needed
# ====================
sections:


  # Description module - displays page.description
  - type: description
  # ==========================================
  # MODULE 1: METADATA
  # Standalone metadata display
  # ==========================================
  - type: metadata
    # No parameters needed - automatically uses front matter metadata
    # This displays all metadata in a grid layout

  # ==========================================
  # MODULE 2: SPLIT-HERO-METADATA (Image)
  # Two-column: Hero image (2/3) + Metadata (1/3)
  # ==========================================
  - type: split-hero-metadata
    content_type: "image"
    image: /assets/img/31-complete-template/thumbnail.jpg
    caption: "Installation view showing spatial audio setup and visitor interaction"
    # Metadata fields are inherited from front matter - no need to repeat

  # ==========================================
  # MODULE 3: SPLIT-HERO-METADATA (Iframe Fixed)
  # Two-column: Video/iframe (2/3) + Metadata (1/3)
  # Fixed-height mode - good for embeds with specific dimensions
  # ==========================================
  - type: split-hero-metadata
    content_type: "iframe"
    embed_code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>'
    caption: "Performance documentation from opening night"
    # Uses fixed-height mode by default

  # ==========================================
  # MODULE 4: SPLIT-HERO-METADATA (Iframe Responsive)
  # Two-column: Video/iframe (2/3) + Metadata (1/3)
  # Responsive mode - maintains aspect ratio
  # ==========================================
  - type: split-hero-metadata
    content_type: "iframe"
    embed_code: '<iframe src="https://player.vimeo.com/video/123456789" frameborder="0" allowfullscreen></iframe>'
    responsive: true
    aspect_ratio: "16:9"  # Options: "16:9", "4:3", "1:1", "21:9"
    caption: "Behind-the-scenes: technical setup and rehearsal process"

  # ==========================================
  # MODULE 5: SPLIT-BANDCAMP-METADATA
  # Two-column: Narrow embed (1/3) + Metadata & Text (2/3)
  # Perfect for Bandcamp players or similar narrow embeds
  # ==========================================
  - type: split-bandcamp-metadata
    embed_code: '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=2412288496/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>'
    caption: "Available on Bandcamp, Spotify, and all major streaming platforms"
    # Optional text section (appears below metadata in right column)
    text_title: "About the Album Release"
    text_content: |
      The album component of this project features **10 tracks** spanning 45 minutes, capturing the essence of the installation in recorded form. Each track represents a different spatial configuration from the installation, allowing listeners to experience the work from home.

      Mastered by renowned engineer at prestigious studio, the release is available in multiple formats including high-resolution digital download, standard streaming, and limited edition vinyl pressing of 300 copies.

  # ==========================================
  # MODULE 6: TEXT
  # Rich text content with full Markdown support
  # ==========================================
  - type: text
    title: "About the Project"  # Optional title
    content: |
      *Complete Template Reference* is a **comprehensive demonstration work** that showcases every possible metadata field and section module type available in the portfolio system. This work serves as a reference guide and template for creating new portfolio works.

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

  # ==========================================
  # MODULE 7: HERO IMAGE
  # Large featured image with optional caption
  # ==========================================
  - type: hero-image
    image: /assets/img/31-complete-template/thumbnail.jpg
    caption: "Wide view of the installation space showing 32-channel speaker array and interactive zones"

  # ==========================================
  # MODULE 8: IMAGE GRID (3 columns)
  # Grid of images with lightbox - demonstrate 3-column layout
  # ==========================================
  - type: image-grid
    columns: 3  # Options: 1, 2, 3, 4, 5, or 6
    images:
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
    captions:
      - "Speaker array configuration detail"
      - "Visitors experiencing the installation"
      - "Control system and processing interface"
      - "Collaboration session with visual artist"
      - "Live performance at opening night"
      - "Technical setup during installation"

  # ==========================================
  # MODULE 9: IMAGE GRID (4 columns)
  # Demonstrate different column configuration
  # ==========================================
  - type: image-grid
    columns: 4
    images:
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
    captions:
      - "Day view of installation"
      - "Night lighting configuration"
      - "Close-up of sensor array"
      - "Audience interaction moment"

  # ==========================================
  # MODULE 10: IMAGE GRID (2 columns)
  # Good for larger images or comparing two views
  # ==========================================
  - type: image-grid
    columns: 2
    images:
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
    captions:
      - "Before: Empty gallery space"
      - "After: Completed installation"

  # ==========================================
  # MODULE 11: SPACER
  # Add vertical spacing between sections
  # ==========================================
  - type: spacer
    height: "60px"  # Any CSS height value: "40px", "80px", "100px", etc.

  # ==========================================
  # MODULE 12: IFRAME (Fixed-Height Mode)
  # Universal iframe embed - fixed-height mode
  # Good for: Bandcamp, SoundCloud, embeds with specific dimensions
  # ==========================================
  - type: iframe
    embed_code: '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789"></iframe>'
    caption: "Audio excerpt: Opening section of the composition"
    # Fixed-height mode by default - extracts height from embed code

  # ==========================================
  # MODULE 13: IFRAME (Responsive Mode)
  # Universal iframe embed - responsive mode maintains aspect ratio
  # Good for: YouTube, Vimeo, video content
  # ==========================================
  - type: iframe
    embed_code: '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>'
    responsive: true
    aspect_ratio: "16:9"  # Options: "16:9" (default), "4:3", "1:1", "21:9"
    caption: "Full performance video from CTM Festival Berlin (60 minutes)"

  # ==========================================
  # MODULE 14: QUOTE
  # Blockquote with optional attribution
  # ==========================================
  - type: quote
    text: "A groundbreaking work that redefines the boundaries between sound, space, and audience interaction. Complete Template Reference demonstrates the future of immersive art experiences and sets a new standard for multimedia collaboration."
    author: "Curator Name, Director of Major Museum"

  # ==========================================
  # MODULE 15: QUOTE (without author)
  # Also works without attribution
  # ==========================================
  - type: quote
    text: "An unforgettable experience that transforms how we perceive the relationship between sound and physical space."

  # ==========================================
  # MODULE 16: TEXT (without title)
  # Text module can also be used without a title
  # ==========================================
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

  # ==========================================
  # MODULE 17: SPACER
  # Another spacer example with different height
  # ==========================================
  - type: spacer
    height: "80px"

  # ==========================================
  # MODULE 18: LINKED EVENTS
  # Automatically displays events linked to this work
  # Events must have matching work_id in their front matter
  # ==========================================
  - type: linked-events
    title: "Upcoming Performances & Exhibitions"  # Optional title

  # ==========================================
  # MODULE 19: IMAGE GRID (6 columns)
  # Maximum column configuration - good for thumbnail galleries
  # ==========================================
  - type: image-grid
    columns: 6
    images:
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
      - /assets/img/31-complete-template/thumbnail.jpg
    captions:
      - "Detail 1"
      - "Detail 2"
      - "Detail 3"
      - "Detail 4"
      - "Detail 5"
      - "Detail 6"

  # ==========================================
  # MODULE 20: IMAGE GRID (1 column)
  # Single column - good for full-width images
  # ==========================================
  - type: image-grid
    columns: 1
    images:
      - /assets/img/31-complete-template/thumbnail.jpg
    captions:
      - "Panoramic view of the complete installation space"

  # ==========================================
  # FINAL SPACER
  # Add spacing at the end
  # ==========================================
  - type: spacer
    height: "40px"

# ====================
# END OF SECTIONS
# ====================
---

<!--
========================
TEMPLATE USAGE GUIDE
========================

This template demonstrates ALL possible features. To use it for a new work:

1. Copy this file to a new filename: YYYY-MM-DD-your-work-name.md (use actual release date)
2. Update the basic front matter (title, work_id, abstract, category, image)
3. Set release_date in metadata section (YYYY-MM-DD format)
4. Remove metadata fields that don't apply to your work category
5. Keep only the section modules you need (remove others)
6. Update content, images, and captions
7. Test locally: bundle exec jekyll serve

METADATA GUIDELINES BY CATEGORY:

INSTALLATIONS:
- Keep: release_date, date, location, places, role, technology, collaborators,
  commissioned_by, client, curated_by, credits, partners, supporters
- Remove: isrc, upc, iswc, performed_in, composer_performer_producer,
  mastering_by, artwork_by

LIVE ACTS:
- Keep: release_date, date, location, performed_in, places, role, technology,
  collaborators, commissioned_by, curated_by, credits, partners
- Remove: isrc, upc, iswc, client, composer_performer_producer,
  mastering_by, artwork_by

RELEASES:
- Keep: release_date, location, role, technology, isrc, upc, iswc,
  composer_performer_producer, mastering_by, artwork_by, credits,
  produced_by, interview, press_kit, socials
- Remove: date, performed_in, places, commissioned_by, client,
  curated_by, partners, supporters

COLLABORATIONS:
- Keep: release_date, location, role, technology, collaborators, credits,
  partners, produced_by, interview, press_kit, socials
- Add category-specific fields based on format (installation/live/release)

SECTION MODULE RECOMMENDATIONS:

INSTALLATIONS:
- Start with: split-hero-metadata (image) or metadata
- Include: text, image-grid, quote
- Optional: iframe (video docs), spacer

LIVE ACTS:
- Start with: split-hero-metadata (iframe - responsive video)
- Include: text, image-grid, quote, linked-events
- Optional: multiple iframe modules for different performances

RELEASES:
- Start with: split-bandcamp-metadata (with audio player)
- Include: text, quote, image-grid (album art, studio photos)
- Optional: iframe (music videos), linked-events (release shows)

COLLABORATIONS:
- Start with: metadata or split-hero-metadata
- Include: text (highlight each collaborator), image-grid, quote
- Optional: multiple text sections for each artist's contribution

Remember: All works should include the 'abstract' field for proper display
in grid view and printable WORKS page!

========================
-->
