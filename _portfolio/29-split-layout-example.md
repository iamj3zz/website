---
layout: work
title: Split Layout Example
work_id: split-layout-example
category: installations
image: /assets/img/dumbpic.jpg
order: 29
sections:
  # Two-column split layout: Hero image (2/3 left) + Metadata (1/3 right)
  - type: split-hero-metadata
    content_type: "image"
    image: /assets/img/dumbpic.jpg
    caption: "Main installation view with dramatic lighting"
    # Metadata fields
    year: "2025"
    date: "April 10-15, 2025"
    location: "Berlin, Germany"
    location_link: "https://maps.google.com/?q=Berlin,Germany"
    client: "Museum of Contemporary Art"
    commissioned_by: "Berlin Art Week"
    role: "Sound artist, installation designer"
    technology: "Spatial audio system, custom sensors"
    collaborators: "Visual artist Maria Schmidt"
    credits: "Technical support: TechLab Berlin"
    custom:
      - label: "Duration"
        value: "Continuous installation"
      - label: "Capacity"
        value: "15 visitors per session"

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
      - /assets/img/dumbpic.jpg
      - /assets/img/dumbpic.jpg
      - /assets/img/dumbpic.jpg
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

  # Quote from curator
  - type: quote
    text: "The split layout perfectly balances visual impact with essential project information."
    author: "Art Curator, Museum of Contemporary Art"
---
