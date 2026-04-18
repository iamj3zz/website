---
layout: bio-gallery
title: Bio Gallery
permalink: /bio-gallery/
lang: en
lang_alternate: /fr/bio-gallery/
gallery_images:
  - filename: photo-01.jpg
    hires: photo-01-hires.jpg
    caption: "J3ZZ by Krisztian Brego, at Lovasut theatre, Budapest - Hungary, 2020"
  - filename: photo-02.jpg
    hires: photo-02-hires.jpg
    caption: "J3ZZ by Krisztian Brego, Budapest - Hungary, 2020"
  - filename: photo-03.jpg
    hires: photo-03-hires.jpg
    caption: "J3ZZ by Zita Laura Szasz, Budapest - Hungary, 2019"
  - filename: photo-10.jpg
    hires: photo-10-hires.jpg
    caption: "J3ZZ, Budapest - Hungary, 2020"
  - filename: photo-14.jpg
    hires: photo-14-hires.jpg
    caption: "J3ZZ, Budapest - Hungary, 2020"
  - filename: photo-16.jpg
    hires: photo-16-hires.jpg
    caption: "J3ZZ by Zita Laura Szasz, Budapest - Hungary, 2019"
  - filename: photo-21.jpg
    hires: photo-21-hires.jpg
    caption: "J3ZZ by Olivier Padre, at Nuit des musiques experimentales festival, Saint-Paul - Réunion Island, 2023"
  - filename: photo-22.jpg
    hires: photo-22-hires.jpg
    caption: "J3ZZ by Olivier Padre, at Nuit des musiques experimentales festival, Saint-Paul - Réunion Island, 2023"
---

{% assign _lang = page.lang | default: 'en' %}
{% assign _trans = site.data.translations %}

<div class="bio-gallery-intro">
  <div class="download-instructions">
    <strong>{{ _trans.bio_gallery.press_title[_lang] }}</strong>
    <p>{{ _trans.bio_gallery.press_intro[_lang] }}</p>
    <ol>
      <li>{{ _trans.bio_gallery.instruction_open[_lang] }}</li>
      <li>{{ _trans.bio_gallery.instruction_download_pre[_lang] }} <strong>{{ _trans.bio_gallery.download_link[_lang] }}</strong> {{ _trans.bio_gallery.instruction_download_post[_lang] }}</li>
      <li><strong>{{ _trans.bio_gallery.instruction_credit[_lang] }}</strong></li>
    </ol>
  </div>
</div>

<div class="module-image-grid">
  <div class="image-grid grid-4">
    {% for photo in page.gallery_images %}
    <div class="grid-item">
      <div class="gallery-image-qr" id="gallery-qr-{{ forloop.index }}"></div>
      <span class="gallery-image-caption">{{ photo.caption }}</span>
      <img src="/assets/bio/gallery/{{ photo.filename }}"
           alt="{{ photo.caption }}"
           class="grid-image"
           data-lightbox="true"
           data-caption="{{ photo.caption }}">
      {% if photo.credit %}<span class="gallery-photo-credit">{{ photo.credit }}</span>{% endif %}
      {% if photo.hires %}
      <a href="/assets/bio/gallery/hires/{{ photo.hires }}"
         class="gallery-download-link"
         download>{{ _trans.bio_gallery.download_link[_lang] }}</a>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>

<div class="bio-gallery-note">
  <p>{{ _trans.bio_gallery.contact_note[_lang] }} <a href="mailto:contact@j3zz.com">contact@j3zz.com</a></p>
</div>
