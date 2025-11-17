---
layout: work
title: Bio Gallery
permalink: /bio-gallery/
image: /assets/img/bio-photo.jpg
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

<style>
/* Hide work layout elements that don't apply to bio-gallery */
.work-image {
  display: none;
}

.bio-gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.bio-gallery-header {
  text-align: center;
  margin-bottom: 20px;
}

.bio-gallery-header h1 {
  font-size: 32px;
  font-weight: normal;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
}

.bio-gallery-intro {
  text-align: center;
  margin-bottom: 40px;
}

.bio-gallery-intro > p {
  font-size: 15px;
  color: #666;
  margin: 0 0 20px 0;
}

.download-instructions {
  background: #f9f9f9;
  border-left: 3px solid #333;
  padding: 20px;
  margin: 20px auto 0;
  max-width: 600px;
  text-align: left;
}

.download-instructions p {
  font-size: 14px;
  color: #333;
  margin: 0 0 10px 0;
}

.download-instructions strong {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 12px;
}

.download-instructions ol {
  margin: 0;
  padding-left: 20px;
}

.download-instructions li {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  line-height: 1.6;
}

.download-instructions li:last-child {
  margin-bottom: 0;
}

.bio-gallery-note {
  text-align: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #ddd;
  font-size: 14px;
  color: #666;
}

.bio-gallery-note a {
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
}

.bio-gallery-note a:hover {
  border-bottom-color: #333;
}

@media print {
  .bio-gallery-container {
    page-break-inside: avoid;
  }
}
</style>
