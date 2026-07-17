---
layout: portfolio
title: "Contact & Booking"
permalink: /contact/
description: "Get in touch with J3ZZ for bookings, collaborations, teaching activities, and consulting. Contact information, social media, and newsletter signup."
image: /assets/bio/bio-photo.jpg
lang: en
lang_alternate: /fr/contact/
page_type: contact
---

<h1 class="visually-hidden">Contact &amp; Booking</h1>

<section class="contact-section">
  <div class="contact-content">

    <!-- Left Column: Availability + Emails -->
    <div class="contact-column contact-column--left">

      <!-- Available For Section -->
      <div class="contact-block">
        <p class="contact-description">J3ZZ is available for:</p>
        <ul class="contact-availability">
          <li>Commission of new media installations and interactive content — for festivals, cultural events, and institutions</li>
          <li>Soundtrack composition and production — for film, contemporary dance, and stage</li>
          <li>Live performance booking and artwork exhibition</li>
        </ul>
      </div>

      <!-- Email Section -->
      <div class="contact-block">
        <p class="contact-description" style="margin-bottom: 15px;"><strong>Get in touch</strong></p>
        <div class="contact-items">
          {% if site.booking_email %}
          <div class="contact-item">
            <span class="contact-label">booking & production:</span>
            <a href="mailto:{{ site.booking_email }}" class="contact-link">{{ site.booking_email }}</a>
          </div>
          {% endif %}
          {% if site.email %}
          <div class="contact-item">
            <span class="contact-label">teaching & consulting:</span>
            <a href="mailto:{{ site.email }}" class="contact-link">{{ site.email }}</a>
          </div>
          {% endif %}
        </div>
        <p class="contact-description" style="margin-top: 10px;">For licensing and reproduction requests, see the <a href="/licensing/">Licensing & Rights</a> page.</p>
      </div>

      <!-- Print-only newsletter invitation -->
      <div class="print-only-newsletter-message">
        <p class="contact-description" style="margin-bottom: 10px;"><strong>Newsletter Sign-Up</strong></p>
        <p class="contact-description">I invite you to sign up for occasional updates about shows, workshops, and releases. As a solo experimental artist, I rarely send messages—only when something meaningful happens. Your contact means support, and I handle all data personally with care. You can unsubscribe anytime.</p>
        <p class="contact-description" style="margin-top: 10px;"><strong>How to subscribe:</strong></p>
        <ul class="contact-availability">
          <li>Visit www.j3zz.com/contact/ and fill out the newsletter form on the right column</li>
          <li>Scan the QR code on this page with your phone to go directly to the sign-up form</li>
          <li>Provide your email, phone, name, and consent to receive occasional updates</li>
        </ul>
      </div>

      <!-- Social Media Icons Section (screen only) -->
      <div class="contact-block contact-block--screen-only">
        <!-- Screen version: icon grid -->
        <div class="contact-social-icons">
        {% include social-icons.html class="contact-social-icon" lang="en" %}
        </div>
      </div><!-- End screen-only social icons block -->

      <!-- Print-only: Social Links Section -->
      <div class="contact-block print-only-block">
      <p class="contact-description"><strong>Connect</strong></p>
      <!-- Print version: QR code + icon + name + URL layout -->
      <div class="contact-social-print-list">
        {% include social-print-list.html lang="en" %}
      </div>
      </div><!-- End print-only social block -->

    </div><!-- End left column -->

    <!-- Right Column: Newsletter -->

    <div class="contact-column contact-column--right">

    <div class="contact-block">
      <p class="contact-description"><strong>Stay updated</strong></p>
      <p class="contact-description">Occasional updates about shows, workshops, and releases. As a solo experimental artist, I rarely send messages—only when something meaningful happens.</p>

      <!-- Begin Mailchimp Signup Form -->
      {% if site.mailchimp_action_url %}
      <form class="contact-newsletter-form" action="{{ site.mailchimp_action_url }}" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
        <div class="form-row">
          <input type="email" name="EMAIL" placeholder="Email Address *" class="form-input" required>
          <span class="form-help-text">Format: user@domain.com</span>
        </div>
        <div class="form-row">
          <input type="tel" name="PHONE" placeholder="Mobile Number *" class="form-input" pattern="^\+[1-9]\d{1,14}$" title="Enter in international format: +[country code][number]" required>
          <span class="form-help-text">Format: +[country code][number] (e.g., +33612345678)</span>
        </div>
        <div class="form-row">
          <input type="text" name="FNAME" placeholder="First Name *" class="form-input" required>
          <span class="form-help-text">Letters only (2-50 characters) - Hyphens and apostrophes allowed</span>
        </div>
        <div class="form-row">
          <input type="text" name="LNAME" placeholder="Last Name *" class="form-input" required>
          <span class="form-help-text">Letters only (2-50 characters) - Hyphens and apostrophes allowed</span>
        </div>

        <!-- GDPR Consent Checkbox -->
        <div class="form-row">
          <label class="form-checkbox-label">
            <input type="checkbox" name="gdpr[{{ site.mailchimp_gdpr_field }}]" class="form-checkbox" value="Y" required>
            <span>* I consent to receive occasional updates about shows, workshops, and releases. As a solo experimental artist, I rarely send messages—only when something meaningful happens. Your contact means support, and I handle all data personally with care. You can unsubscribe anytime.</span>
          </label>
        </div>

        <!-- Real people should not fill this in and expect good things -->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="{{ site.mailchimp_bot_field }}" tabindex="-1" value="">
        </div>

        <button type="submit" name="subscribe" class="form-submit">Subscribe</button>
      </form>
      {% else %}
      <p class="contact-description" style="font-style: italic; color: #999;">Newsletter signup coming soon.</p>
      {% endif %}
      <!-- End Mailchimp Signup Form -->
    </div>

    </div><!-- End right column -->

  </div>
</section>

