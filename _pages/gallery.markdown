---
layout: portfolio
title: "Gallery — Visual Art by J3ZZ"
permalink: /gallery/
description: "Original ink drawings and visual artworks by J3ZZ. The Cartography of Collapse series — 16 drawings tracing geological transformation from formation through dissolution."
image: /assets/artworks/2026-03-16-fading-lines/thumbnail.png
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
      <div class="gallery-item gallery-item--{{ artwork.status | default: 'available' }}" data-label="{{ artwork.title }}{% if artwork.medium %} · {{ artwork.medium | upcase }}{% endif %}">
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
        <button
          class="gallery-heart-btn"
          data-heart-btn
          data-artwork-slug="{{ artwork.url }}"
          data-artwork-title="{{ artwork.title }}"
          aria-label="Like {{ artwork.title }}"
          aria-pressed="false"
          type="button"
        >
          <svg class="gallery-heart-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span class="gallery-heart-count" aria-live="polite"></span>
        </button>
      </div>
    {% endfor %}
  </div>
</section>
