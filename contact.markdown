---
layout: portfolio
title: Contact
permalink: /contact/
---

<section class="contact-section">
  <div class="contact-content">
    <!-- Email Section -->
    <div class="contact-block">
      <div class="contact-items">
             {% if site.booking_email %}
        <div class="contact-item">
          <span class="contact-label">booking & production:</span>
          <a href="mailto:{{ site.booking_email }}" class="contact-link">{{ site.booking_email }}</a>
      </div>
        {% endif %}
        {% if site.email %}
        <div class="contact-item">
          <span class="contact-label">teaching & consulting activities:</span>
          <a href="mailto:{{ site.email }}" class="contact-link">{{ site.email }}</a>
          </div>
        {% endif %}
      </div>
    </div>

    <!-- Social Media Icons Section -->
    <div class="contact-block">
      <!-- Screen version: icon grid -->
      <div class="contact-social-icons">
        {% if site.bandcamp_username %}
        <a href="https://{{ site.bandcamp_username }}.bandcamp.com" target="_blank" rel="noopener" class="contact-social-icon" title="Bandcamp">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8h8.5l4 8H4l-4-8z" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.soundcloud_username %}
        <a href="https://soundcloud.com/{{ site.soundcloud_username }}" target="_blank" rel="noopener" class="contact-social-icon" title="SoundCloud">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 13v4M6 11v6M9 10v7M12 9v8M15 8v9M18 7v10M21 6v11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a>
        {% endif %}
        {% if site.youtube_username %}
        <a href="https://youtube.com/@{{ site.youtube_username }}" target="_blank" rel="noopener" class="contact-social-icon" title="YouTube">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
            <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.vimeo_username %}
        <a href="https://vimeo.com/{{ site.vimeo_username }}" target="_blank" rel="noopener" class="contact-social-icon" title="Vimeo">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
            <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.facebook_username %}
        <a href="https://facebook.com/{{ site.facebook_username }}" target="_blank" rel="noopener" class="contact-social-icon" title="Facebook">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8h3l-1 3h-2v8h-3v-8H9V8h2V6.5C11 4.5 12 3 15 3h2v3h-2c-.5 0-1 .5-1 1V8z" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.instagram_username %}
        <a href="https://instagram.com/{{ site.instagram_username }}" target="_blank" rel="noopener" class="contact-social-icon" title="Instagram">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.twitter_username %}
        <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener" class="contact-social-icon" title="X (Twitter)">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4l7 9.5M20 4l-7 9.5m0 0L4 20m9-6.5L20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </a>
        {% endif %}
        {% if site.linkedin_username %}
        <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener" class="contact-social-icon" title="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9v10M6 6v.5M10 14v5m0-5c0-2 1-3 3-3s3 1 3 3v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a>
        {% endif %}
      </div>

      <!-- Print version: QR code + icon + name + URL layout -->
      <div class="contact-social-print-list">
        {% if site.bandcamp_username %}
        <div class="social-print-item" data-url="https://{{ site.bandcamp_username }}.bandcamp.com" data-name="Bandcamp">
          <div class="social-print-qr"></div>
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8h8.5l4 8H4l-4-8z" fill="currentColor"/>
            </svg>
          </div>
          <div class="social-print-name">Bandcamp</div>
          <div class="social-print-url">{{ site.bandcamp_username }}.bandcamp.com</div>
        </div>
        {% endif %}
        {% if site.soundcloud_username %}
        <div class="social-print-item" data-url="https://soundcloud.com/{{ site.soundcloud_username }}" data-name="SoundCloud">
          <div class="social-print-qr"></div>
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13v4M6 11v6M9 10v7M12 9v8M15 8v9M18 7v10M21 6v11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="social-print-name">SoundCloud</div>
          <div class="social-print-url">soundcloud.com/{{ site.soundcloud_username }}</div>
        </div>
        {% endif %}
        {% if site.youtube_username %}
        <div class="social-print-item" data-url="https://youtube.com/@{{ site.youtube_username }}" data-name="YouTube">
          <div class="social-print-qr"></div>
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
              <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
            </svg>
          </div>
          <div class="social-print-name">YouTube</div>
          <div class="social-print-url">youtube.com/@{{ site.youtube_username }}</div>
        </div>
        {% endif %}
        {% if site.vimeo_username %}
        <div class="social-print-item" data-url="https://vimeo.com/{{ site.vimeo_username }}" data-name="Vimeo">
          <div class="social-print-qr"></div>
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
              <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
            </svg>
          </div>
          <div class="social-print-name">Vimeo</div>
          <div class="social-print-url">vimeo.com/{{ site.vimeo_username }}</div>
        </div>
        {% endif %}
        {% if site.facebook_username %}
        <div class="social-print-item" data-url="https://facebook.com/{{ site.facebook_username }}" data-name="Facebook">
          <div class="social-print-qr"></div>
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8h3l-1 3h-2v8h-3v-8H9V8h2V6.5C11 4.5 12 3 15 3h2v3h-2c-.5 0-1 .5-1 1V8z" fill="currentColor"/>
            </svg>
          </div>
          <div class="social-print-name">Facebook</div>
          <div class="social-print-url">facebook.com/{{ site.facebook_username }}</div>
        </div>
        {% endif %}
        {% if site.instagram_username %}
        <div class="social-print-item" data-url="https://instagram.com/{{ site.instagram_username }}" data-name="Instagram">
          <div class="social-print-qr"></div>
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </div>
          <div class="social-print-name">Instagram</div>
          <div class="social-print-url">instagram.com/{{ site.instagram_username }}</div>
        </div>
        {% endif %}
        {% if site.twitter_username %}
        <div class="social-print-item" data-url="https://twitter.com/{{ site.twitter_username }}" data-name="X (Twitter)">
          <div class="social-print-qr"></div>
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4l7 9.5M20 4l-7 9.5m0 0L4 20m9-6.5L20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="social-print-name">X (Twitter)</div>
          <div class="social-print-url">twitter.com/{{ site.twitter_username }}</div>
        </div>
        {% endif %}
        {% if site.linkedin_username %}
        <div class="social-print-item" data-url="https://linkedin.com/in/{{ site.linkedin_username }}" data-name="LinkedIn">
          <div class="social-print-qr"></div>
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9v10M6 6v.5M10 14v5m0-5c0-2 1-3 3-3s3 1 3 3v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="social-print-name">LinkedIn</div>
          <div class="social-print-url">linkedin.com/in/{{ site.linkedin_username }}</div>
        </div>
        {% endif %}
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="contact-block">
      <p class="contact-description">Stay updated with the latest news, releases, and events.</p>

      <!-- Print-only newsletter invitation -->
      <div class="print-only-newsletter-message">
        <p class="contact-description" style="margin-bottom: 10px;"><strong>Newsletter Sign-Up</strong></p>
        <p class="contact-description">I invite you to sign up for occasional updates about shows, workshops, and releases. As a solo experimental artist, I rarely send messages—only when something meaningful happens. Your contact means support, and I handle all data personally with care. You can unsubscribe anytime.</p>
        <p class="contact-description" style="margin-top: 10px;"><strong>Visit the online contact page to subscribe.</strong> The QR code displayed on this page links directly to the sign-up form.</p>
      </div>

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
  </div>
</section>

<!-- Newsletter Form Scripts -->
<script src="{{ '/assets/js/newsletter-form.js' | relative_url }}"></script>

<!-- Social Media QR Codes for Print -->
<script src="{{ '/assets/js/contact-social-qrcodes.js' | relative_url }}"></script>
