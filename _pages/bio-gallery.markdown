---
layout: bio-gallery
title: Bio Gallery
permalink: /bio-gallery/
gallery_images:
  - filename: photo-01.jpg
    caption: J3ZZ performing at MUTEK Festival with modular synthesizers and live coding setup
  - filename: photo-02.jpg
    caption: J3ZZ in studio with acoustic violin and electronic processing equipment
  - filename: photo-03.jpg
    caption: Portrait of J3ZZ during a sound art installation featuring generative systems
  - filename: photo-04.jpg
    caption: J3ZZ at Atonal Festival Berlin with spatial audio and laser visual setup
  - filename: photo-05.jpg
    caption: Close-up of J3ZZ with Max/MSP generative art environment in background
  - filename: photo-06.jpg
    caption: J3ZZ performing immersive audiovisual set with living organisms as sound sources
---

<div class="bio-gallery-intro">
  <p>Press photos and artist images available for download.</p>
  <div class="download-instructions">
    <p><strong>How to download:</strong></p>
    <ol>
      <li>Click on any image to view full-size</li>
      <li>Right-click (or long-press on mobile) on the zoomed image</li>
      <li>Select "Save image as..." or "Download image"</li>
    </ol>
  </div>
</div>

<!-- Gallery images from front matter -->
<div class="module module-image-grid" data-columns="4">
  <div class="image-grid grid-4">
    {% for image in page.gallery_images %}
    <div class="grid-item">
      <img src="{{ '/assets/img/bio-gallery/' | append: image.filename | relative_url }}"
           alt="{{ image.caption }}"
           class="grid-image"
           data-lightbox="true"
           data-caption="{{ image.caption }}">
    </div>
    {% endfor %}
  </div>
</div>

<div class="bio-gallery-note">
  <p>For additional press materials, please contact <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
</div>
