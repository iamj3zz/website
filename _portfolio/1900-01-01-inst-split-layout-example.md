---
published: true 
layout: work
title: Split Layout Example
work_id: split-layout-example
abstract: "An example work demonstrating split-column layout patterns, combining hero content with metadata in responsive two-column designs."
description: |
  This template showcases split-column layouts using the split-hero-metadata and split-bandcamp-metadata modules. These specialized modules display content and metadata side-by-side in a responsive two-column layout, perfect for releases and installations that need a more compact, magazine-style presentation. The layout automatically adapts to single-column on mobile devices.
category: installations
image: /assets/works/1900-01-01-split-layout-example/thumbnail.jpg

# Define metadata once here - it will be used by all modules below
metadata:
  release_date: "1900-01-01"
  location: "Paris, France"
  location_link: "https://maps.google.com/?q=Paris,France"
  role: "Composer, producer, sound designer"
  technology: "Ableton Live, Max/MSP, modular synthesizers"
  isrc: "USRC17607839"
  upc: "123456789012"
  mastering_by: "Abbey Road Studios"
  mastering_by_link: "https://www.abbeyroad.com/"
  collaborators: "Visual artist Sarah Johnson"
  collaborators_link: "/bio/"
  commissioned_by: "Paris Electronic Music Festival"
  custom:
    - label: "Format"
      value: "Digital, Vinyl, CD"
    - label: "Duration"
      value: "52 minutes, 10 tracks"
    - label: "Genre"
      value: "Experimental Electronic, Ambient"

sections:


  # Description module - displays page.description
  - type: description
  # Standalone metadata module - also uses front matter metadata
  - type: metadata
    # No fields specified - automatically uses front matter metadata


  # Two-column split layout: Hero image (2/3 left) + Metadata (1/3 right)
  - type: split-hero-metadata
    content_type: "image"
    image: /assets/works/1900-01-01-split-layout-example/thumbnail.jpg
    caption: "Main installation view with dramatic lighting"
  
  

  # Full-width text module
  - type: text
    title: "About the Installation"
    content: |
      This example demonstrates the new **split layout pattern** where the hero content appears alongside metadata in a two-column layout.

      The layout is fully responsive:
      - **Desktop (>900px)**: Two columns with 2:1 ratio (hero content takes 2/3, metadata takes 1/3)
      - **Mobile (≤900px)**: Stacks to single column for optimal viewing

      After the split section, you can continue with full-width modules as usual. This gives you complete flexibility in how you present your work.

  # Full-width image grid
  - type: image-grid
    columns: 3
    images:
      - /assets/works/1900-01-01-split-layout-example/thumbnail.jpg
      - /assets/works/1900-01-01-split-layout-example/thumbnail.jpg
      - /assets/works/1900-01-01-split-layout-example/thumbnail.jpg
    captions:
      - "Detail view of the sound installation"
      - "Interactive elements in close-up"
      - "Visitor interaction with the piece"

  # Spacer for breathing room
  - type: spacer
    height: "40px"

  # Full-width iframe example
  - type: iframe
    embed_code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    responsive: true
    aspect_ratio: "16:9"
    caption: "Documentation video of the installation"

  # Alternative: Split layout with iframe instead of image
  # Uncomment to see iframe in split layout:
  - type: split-hero-metadata
    content_type: "iframe"
    embed_code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    responsive: true
    aspect_ratio: "16:9"
    caption: "Process documentation"
    # Metadata fields for second split section
    year: "2025"
    location: "Studio, Berlin"
    role: "Composer, sound designer"

  # Split Bandcamp-Metadata layout: Iframe (1/3) + Metadata & Text (2/3)
  # Perfect for releases with Bandcamp players alongside detailed info
  - type: split-bandcamp-metadata
    embed_code: '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=2412288496/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://morzsarecords.bandcamp.com/album/polish-graffiti">polish graffiti by morzsa records</a></iframe>'
    caption: "Album available on Bandcamp"
    # Metadata fields for the release
    year: "2024"
    location: "Budapest, Hungary"
    role: "Producer, composer"
    isrc: "USRC17607839"
    mastering_by: "Studio Name"
    custom:
      - label: "Format"
        value: "Digital, Vinyl"
      - label: "Tracks"
        value: "12 tracks, 45 minutes"
    # Text content below metadata
    text_title: "About the Album"
    text_content: |
      This album represents a unique exploration of **electronic soundscapes** and *organic textures*, blending field recordings with synthesized elements.

      The composition process involved extensive experimentation with spatial audio techniques and granular synthesis. Each track was carefully crafted to create an immersive listening experience that evolves over time.

      Stream or purchase this album on Bandcamp to support independent electronic music.




    

  # Quote from curator
  - type: quote
    text: "The split layout perfectly balances visual impact with essential project information."
    author: "Art Curator, Museum of Contemporary Art"
---
