---
published: true 
layout: work
title: Modular Layout Example
work_id: modular-layout-example
abstract: "A comprehensive demonstration of the modular layout system, showcasing flexible content sections and customizable presentation options."
description: |
  This template demonstrates the standard modular layout system with all basic module types: hero-image, text, image-grid, metadata, quote, spacer, linked-events, iframe, and description. Each module can be freely positioned in any order to create custom layouts. Use this as a reference for understanding how to combine different modules to tell your work's story effectively.
categories: [installations, commissions]
primary_category: installations
image: /assets/img/28-modular-example/thumbnail.jpg
order: 28

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

  - type: hero-image
    image: /assets/img/28-modular-example/thumbnail.jpg
    caption: "Main installation view"


  - type: iframe
    embed_code: '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=2412288496/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://morzsarecords.bandcamp.com/album/polish-graffiti">polish graffiti by morzsa records</a></iframe>'
  #  responsive: true
  #  aspect_ratio: "16:9"
  #  caption: "Universal iframe module with responsive 16:9 aspect ratio"

  - type: metadata
    year: "2025"
    date: "March 15-20, 2025"
    date_link: "https://parisdigitalartfestival.com/schedule"
    isrc: "USRC17607839"
    isrc_link: "https://isrc.ifpi.org/"
    upc: "123456789012"
    iswc: "T-345.246.800-1"
    location: "Paris, France"
    location_link: "https://maps.google.com/?q=Paris,France"
    performed_in: "Europe"
    places: "Théâtre du Châtelet, La Gaîté Lyrique"
    places_link: "https://www.chatelet.com/"
    produced_by: "Studio Productions"
    produced_by_link: "https://studioproductions.example.com"
    client: "Example Client"
    client_link: "/works/01-vibrotanica/"  # Example: link to another work
    commissioned_by: "Paris Digital Art Festival"
    commissioned_by_link: "https://parisdigitalartfestival.com"
    curated_by: "Marie Dubois"
    curated_by_link: "https://mariedubois.example.com"
    role: "Sound designer, performer"
    technology: "Max/MSP, TouchDesigner, Ableton Live"
    technology_link: "https://cycling74.com/"
    collaborators: "Visual artist Sarah Chen, Dancer Alex Rivera"
    collaborators_link: "https://sarahchen.example.com"
    credits: "John Doe (lighting), Jane Smith (stage design)"
    partners: "Institut Français, Goethe-Institut"
    partners_link: "https://www.institutfrancais.com/"
    supporters: "European Cultural Foundation"
    supporters_link: "https://culturalfoundation.eu/"
    composer_performer_producer: "J3ZZ"
    composer_performer_producer_link: "/bio/"
    mastering_by: "Abbey Road Studios"
    mastering_by_link: "https://www.abbeyroad.com/"
    artwork_by: "Design Studio XYZ"
    artwork_by_link: "https://designstudioxyz.example.com"
    interview: "Listen on SoundCloud"
    interview_link: "https://soundcloud.com/j3zz/interview"
    press_kit: "Download PDF"
    # press_kit_link: "/assets/press/press-kit.pdf"  # Example: Commented out - file doesn't exist
    socials: "@j3zz on Instagram"
    socials_link: "https://instagram.com/j3zz"
    special_thanks: "To the amazing team and all supporters"
    custom:
      - label: "Duration"
        value: "45 minutes"
      - label: "Streaming"
        value: "Available on Spotify"
        link: "https://spotify.com/artist/j3zz"
      - label: "Related Work"
        value: "See Vibrotanica project"
        link: "/works/01-vibrotanica/"  # Example: link to another work

  - type: text
    title: "About the Project"
    content: |
      This is an example of the **modular layout system**. You can mix and match different section types to create *unique layouts* for each work.

      The system is flexible and allows you to control the order and presentation of content through simple YAML configuration in the front matter. You can use:

      - **Bold text** for emphasis
      - *Italic text* for subtle emphasis
      - External links like <a href="https://example.com" target="_blank" rel="noopener">this example site</a>
      - Numbered and bulleted lists

      Key features:

      1. Fully customizable module order
      2. Support for multiple image grid layouts (1-6 columns)
      3. Square thumbnail cropping with lightbox full-size viewing
      4. ***Rich text formatting*** with Markdown support

  - type: spacer
    height: "60px"


  - type: text
    title: "About the blablabla"
    content: |
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu ullamcorper lacus. Donec vehicula arcu lectus, interdum placerat metus fringilla eu. Nulla efficitur tincidunt lectus, eu sagittis justo rutrum ut. Quisque elit nisi, egestas et molestie ac, suscipit id lacus. Proin vel dui quis massa sodales lacinia. Cras tempor, risus ac efficitur porta, nisl odio hendrerit felis, vitae tincidunt nulla sapien vel eros. Ut odio urna, bibendum in tempor a, suscipit eget nisl. Morbi accumsan nulla maximus urna laoreet, in venenatis dui vulputate. Maecenas hendrerit tempor elit. Nunc mi ligula, placerat a eros nec, ornare maximus augue. Sed sapien quam, vulputate eu maximus at, rhoncus in erat. Aliquam ac lacus sed enim convallis gravida vel eu arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut finibus neque ullamcorper erat consequat, id blandit nisi accumsan. Suspendisse vestibulum faucibus magna non tempus. 
      
      Nullam volutpat viverra pellentesque. Etiam efficitur, arcu eget congue tristique, purus nulla porttitor purus, ac laoreet ligula velit non ante. Nullam pellentesque fermentum tortor, et convallis odio blandit quis. Fusce consectetur, massa iaculis sollicitudin pharetra, magna velit faucibus ante, id porttitor tortor est sit amet eros. Integer quis odio eu massa mattis accumsan id at eros. Nulla posuere sapien nec leo malesuada, sit amet cursus felis fermentum. Quisque nec dui sapien. Donec posuere purus non justo egestas lacinia. Etiam sit amet ullamcorper sem, eget varius augue. Nam fermentum, mi ac maximus accumsan, augue ligula feugiat sem, id aliquet leo velit a lorem. Vestibulum tempor erat sit amet vestibulum tempor. Pellentesque ut laoreet massa, ac convallis risus. Pellentesque consectetur convallis erat, eu dapibus augue. Cras euismod ligula sed bibendum malesuada.
      
      Phasellus nec finibus elit, quis vestibulum orci. Curabitur quis dui id ante laoreet facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec id eros ex. In maximus sem vel libero viverra, in commodo risus sollicitudin. Duis nisl mauris, tristique ac facilisis et, lobortis mattis purus. Sed nec odio leo. Sed risus quam, commodo vitae molestie sit amet, rhoncus maximus nulla. Maecenas at urna mauris. Fusce sed dui enim. Curabitur varius, diam sed tempus tempus, lorem ex molestie elit, eu pharetra metus justo vel nunc. Cras porta bibendum nisi. Nam porta libero in scelerisque laoreet. Curabitur imperdiet velit a dignissim tristique. Aenean non sapien enim. Ut molestie magna vel aliquet eleifend.
      
      Ut ultricies rhoncus feugiat. Cras rhoncus magna sed tellus mattis euismod. Vivamus vehicula mi arcu, sit amet hendrerit tellus facilisis at. Mauris ut ligula sed justo varius facilisis sed et purus. Proin porta maximus turpis sit amet dictum. Integer maximus risus sit amet tortor varius efficitur. Donec nunc mi, accumsan id libero eu, convallis malesuada tellus. Vestibulum magna felis, finibus at justo in, facilisis dapibus tortor. Nulla facilisi. Suspendisse pretium orci et arcu tincidunt finibus. Fusce nec tellus non tortor viverra convallis. Aenean bibendum ultrices purus, nec placerat ligula pulvinar quis. 
      
      Ut efficitur ultrices ante a rutrum. Nam cursus nunc eget orci luctus, a tempor nibh iaculis. Mauris et cursus libero. Nunc ac luctus dolor. Proin in volutpat felis. Aenean nisi est, iaculis et dolor eget, vulputate faucibus diam. Nullam rutrum eu nisi a tempus. Cras luctus aliquet tortor a finibus. Mauris dignissim nisl vestibulum, eleifend orci ac, eleifend neque.
     
     


  - type: image-grid
    columns: 5
    images:
      - /assets/img/28-modular-example/thumbnail.jpg
      - /assets/img/28-modular-example/thumbnail.jpg
      - /assets/img/28-modular-example/thumbnail.jpg
      - /assets/img/J3ZZ-logo-black-300px.png
      - /assets/img/28-modular-example/thumbnail.jpg
      - /assets/img/28-modular-example/thumbnail.jpg
    captions:
      - "Installation detail from the main exhibition space"
      - "Close-up view of the interactive sound module"
      - "Audience experiencing the immersive environment"
      - "Installation detail from the main exhibition space"
      - "Close-up view of the interactive sound module"
      - "Audience experiencing the immersive environment"

  - type: quote
    text: "This modular system gives me complete control over how my work is presented."
    author: "Artist Name"

  - type: iframe
    embed_code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    responsive: true
    aspect_ratio: "16:9"
    caption: "Universal iframe module with responsive 16:9 aspect ratio"

  - type: iframe
    embed_code: '<iframe src="https://player.vimeo.com/video/1133337157?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="MAT Workshop 25-26: Ilze [Kavi] Briede, Kyle Duffield, and Mark-David Hosale | Biophysical Movement and Emotion Computational"></iframe>'
    responsive: true
    aspect_ratio: "16:9"
    caption: "Universal iframe module with responsive 16:9 aspect ratio"

  - type: iframe
    embed_code: '<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;"><iframe src="https://geo.dailymotion.com/player.html?video=x9tknai"style="width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden; border:none;"allowfullscreentitle="Dailymotion Video Player"allow="web-share"></iframe></div>'
    responsive: true
    aspect_ratio: "16:9"
    caption: "Universal iframe module with responsive 16:9 aspect ratio"





  - type: linked-events
    title: "Upcoming Events & Performances"
---


