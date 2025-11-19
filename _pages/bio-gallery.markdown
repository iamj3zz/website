---
layout: bio-gallery
title: Bio Gallery
permalink: /bio-gallery/
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

<!-- Use the same image-grid module design from work pages -->
<div class="module module-image-grid" data-columns="4">
  <div class="image-grid grid-4">
    {% assign gallery_images = "photo-01.jpg,photo-02.jpg,photo-03.jpg,photo-04.jpg,photo-05.jpg,photo-06.jpg" | split: "," %}
    {% assign gallery_captions = "Press Photo 1,Press Photo 2,Press Photo 3,Press Photo 4,Press Photo 5,Press Photo 6" | split: "," %}
    {% for image in gallery_images %}
    <div class="grid-item">
      <img src="{{ '/assets/img/bio-gallery/' | append: image | relative_url }}"
           alt="J3ZZ {{ gallery_captions[forloop.index0] }}"
           class="grid-image"
           data-lightbox="true"
           data-caption="{{ gallery_captions[forloop.index0] }}">
    </div>
    {% endfor %}
  </div>
</div>

<div class="bio-gallery-note">
  <p>For additional press materials, please contact <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
</div>
