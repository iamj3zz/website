---
published: true 
layout: work
title: Centralized Metadata Example
work_id: centralized-metadata-example
abstract: "Demonstrates the new centralized metadata system where metadata is defined once in front matter and automatically used across all modules."
description: |
  This template demonstrates the centralized metadata architecture where all metadata fields (year, location, role, technology, collaborators, etc.) are defined once in the front matter and automatically available to all modules. This eliminates duplication and ensures consistency across multiple metadata displays. Any module that uses metadata will automatically pull from the centralized definition.
category: releases
image: /assets/img/30-centralized-metadata-example/thumbnail.jpg
order: 30

# Define metadata once here - it will be used by all modules below
metadata:
  year: "2024"
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


  # Text explaining the new system
  - type: text
    title: "New: Centralized Metadata System"
    content: |
      This example demonstrates the **new centralized metadata system**. Notice how the metadata is defined once in the front matter (at the top of this file) and automatically used by all modules below.

      **Benefits:**
      - ✅ **No duplication** - Define metadata once, use everywhere
      - ✅ **Easy maintenance** - Update in one place
      - ✅ **Cleaner code** - Modules only specify content, not data
      - ✅ **Backwards compatible** - Old works still function

  # Split Bandcamp-Metadata: automatically uses front matter metadata
  - type: split-bandcamp-metadata
    embed_code: '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=2412288496/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://morzsarecords.bandcamp.com/album/polish-graffiti">polish graffiti by morzsa records</a></iframe>'
    caption: "Available on Bandcamp"
    text_title: "About the Album"
    text_content: |
      This album showcases the power of the **centralized metadata system**. Notice how this module doesn't repeat any metadata fields - it automatically uses the metadata defined at the top of the file.

      The split-bandcamp-metadata module displays:
      - The Bandcamp player on the left (1/3 width)
      - Metadata from front matter on the right (2/3 width)
      - This descriptive text below the metadata

      All metadata values (year, location, role, ISRC, etc.) come from the front matter `metadata` field.

  # Spacer for breathing room
  - type: spacer
    height: "40px"

  # Split Hero-Metadata: also uses front matter metadata automatically
  - type: split-hero-metadata
    content_type: "image"
    image: /assets/img/30-centralized-metadata-example/thumbnail.jpg
    caption: "Live performance at Paris Electronic Music Festival"
    # No metadata fields needed - automatically uses front matter metadata!

  # Text section
  - type: text
    title: "How It Works"
    content: |
      The split-hero-metadata module above displays:
      - The hero image on the left (2/3 width)
      - Metadata on the right (1/3 width)

      Again, **no metadata fields were specified** in that module. It automatically pulled all values from the front matter `metadata` field.

      You can still override specific fields per-module if needed, but for most use cases, defining metadata once is much cleaner.

  # Spacer
  - type: spacer
    height: "40px"


  # Text section
  - type: text
    title: "Standalone Metadata Display"
    content: |
      The metadata module above is even simpler. It's just:

      ```yaml
      - type: metadata
      ```

      That's it! No need to repeat all the fields. It automatically displays the front matter metadata in a clean grid layout.

  # Image grid example
  - type: image-grid
    columns: 3
    images:
      - /assets/img/30-centralized-metadata-example/thumbnail.jpg
      - /assets/img/30-centralized-metadata-example/thumbnail.jpg
      - /assets/img/30-centralized-metadata-example/thumbnail.jpg
    captions:
      - "Studio session"
      - "Mixing process"
      - "Album artwork design"

  # Video with split layout
  - type: split-hero-metadata
    content_type: "iframe"
    embed_code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>'
    responsive: true
    aspect_ratio: "16:9"
    caption: "Behind the scenes documentation"
    # You can override specific metadata fields if needed:
    # year: "2023"  # This would override the front matter year for this module only

  # Final text section
  - type: text
    title: "Migration Guide"
    content: |
      **To convert existing works to use centralized metadata:**

      1. Copy all metadata fields from your sections into a `metadata:` field in the front matter
      2. Remove the metadata fields from individual sections
      3. Keep only the content-specific parameters (image, embed_code, caption, etc.)

      **Example transformation:**

      **Before:**
      ```yaml
      sections:
        - type: split-hero-metadata
          image: /assets/img/photo.jpg
          year: "2024"
          location: "Paris"
          role: "Composer"
      ```

      **After:**
      ```yaml
      metadata:
        year: "2024"
        location: "Paris"
        role: "Composer"

      sections:
        - type: split-hero-metadata
          image: /assets/img/photo.jpg
      ```

      Much cleaner! 🎉

  # Quote
  - type: quote
    text: "The centralized metadata system makes maintaining complex work pages so much easier. Define once, use everywhere!"
    author: "Portfolio Developer"
---
