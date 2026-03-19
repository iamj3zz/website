---
layout: portfolio
title: "Gallery — Visual Art by J3ZZ"
permalink: /gallery/
description: "Original drawings, paintings, and visual artworks by J3ZZ."
---

{% include artwork-inquiry-modal.html %}

<div class="gallery-list-print">
  <div class="gallery-print-header">GALLERY — Visual Art by J3ZZ</div>
  {% assign sorted_artworks = site.artworks | sort: 'year' | reverse %}
  {% for artwork in sorted_artworks %}
    {% if artwork.published == false %}{% continue %}{% endif %}
    <div class="gallery-list-row" data-artwork-url="{{ artwork.url | absolute_url }}">
      <div class="gallery-col-image">
        <img src="{{ artwork.image | relative_url }}" alt="{{ artwork.title }}">
      </div>
      <div class="gallery-col-content">
        <div class="gallery-col-title">{{ artwork.title }}</div>
        <div class="gallery-col-meta">
          {% if artwork.medium %}{{ artwork.medium }}{% endif %}
          {% if artwork.dimensions %} · {{ artwork.dimensions }}{% endif %}
          {% if artwork.year %} · {{ artwork.year }}{% endif %}
        </div>
        {% if artwork.abstract %}<div class="gallery-col-abstract">{{ artwork.abstract }}</div>{% endif %}
      </div>
      <div class="gallery-col-qr">
        <div class="gallery-qr-code"></div>
      </div>
    </div>
  {% endfor %}
</div>

<section class="gallery-section">
  <h1 class="visually-hidden">Gallery</h1>
  <div class="gallery-grid">
    {% assign sorted_artworks = site.artworks | sort: 'year' | reverse %}
    {% for artwork in sorted_artworks %}
      {% if artwork.published == false %}{% continue %}{% endif %}
      <div class="gallery-item gallery-item--{{ artwork.status | default: 'available' }}">
        <a href="{{ artwork.url | relative_url }}" class="gallery-link">
          <img src="{{ artwork.image | relative_url }}" alt="{{ artwork.title }}">
        </a>
        <div class="gallery-overlay">
          <h2>{{ artwork.title }}</h2>
          {% if artwork.medium %}<p class="gallery-overlay-medium">{{ artwork.medium }}</p>{% endif %}
          {% if artwork.dimensions %}<p class="gallery-overlay-dimensions">{{ artwork.dimensions }}</p>{% endif %}
          {% if artwork.year %}<p class="gallery-overlay-year">{{ artwork.year }}</p>{% endif %}
          {% if artwork.status == "available" or artwork.status == nil %}
            <span class="gallery-status-badge gallery-status-badge--available">AVAILABLE</span>
            <button class="gallery-inquiry-btn" data-inquiry-trigger
                    data-title="{{ artwork.title }}"
                    data-medium="{{ artwork.medium }}"
                    data-dimensions="{{ artwork.dimensions }}"
                    data-year="{{ artwork.year }}"
                    data-url="{{ artwork.url | absolute_url }}">
                        INQUIRE ABOUT THIS WORK
            </button>
          {% endif %}
          {% if artwork.status == "sold" %}<span class="gallery-status-badge gallery-status-badge--sold">SOLD</span>{% endif %}
          {% if artwork.status == "reserved" %}<span class="gallery-status-badge gallery-status-badge--reserved">RESERVED</span>{% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
</section>
