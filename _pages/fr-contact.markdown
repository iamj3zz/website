---
layout: portfolio
title: "Contact & Booking"
permalink: /fr/contact/
description: "Contactez J3ZZ pour des bookings, collaborations, activités d'enseignement et consulting. Informations de contact, réseaux sociaux et inscription à la newsletter."
image: /assets/bio/bio-photo.jpg
lang: fr
lang_alternate: /contact/
page_type: contact
---

<h1 class="visually-hidden">Contact &amp; Booking</h1>

<section class="contact-section">
  <div class="contact-content">

    <!-- Left Column: Availability + Emails -->
    <div class="contact-column contact-column--left">

      <!-- Available For Section -->
      <div class="contact-block">
        <p class="contact-description">J3ZZ est disponible pour :</p>
        <ul class="contact-availability">
          <li>Commande d'installations nouveaux médias et de contenus interactifs — pour festivals, événements culturels et institutions</li>
          <li>Composition et production de musique de scène — pour le cinéma, la danse contemporaine et le théâtre</li>
          <li>Booking de performances live et exposition d'œuvres</li>
        </ul>
      </div>

      <!-- Email Section -->
      <div class="contact-block">
        <p class="contact-description" style="margin-bottom: 15px;"><strong>Prendre contact</strong></p>
        <div class="contact-items">
          {% if site.booking_email %}
          <div class="contact-item">
            <span class="contact-label">booking & production :</span>
            <a href="mailto:{{ site.booking_email }}" class="contact-link">{{ site.booking_email }}</a>
          </div>
          {% endif %}
          {% if site.email %}
          <div class="contact-item">
            <span class="contact-label">enseignement & consulting :</span>
            <a href="mailto:{{ site.email }}" class="contact-link">{{ site.email }}</a>
          </div>
          {% endif %}
        </div>
      </div>

      <!-- Print-only newsletter invitation -->
      <div class="print-only-newsletter-message">
        <p class="contact-description" style="margin-bottom: 10px;"><strong>Inscription à la newsletter</strong></p>
        <p class="contact-description">Je vous invite à vous inscrire pour recevoir des nouvelles occasionnelles sur les concerts, ateliers et sorties. En tant qu'artiste expérimental indépendant, j'envoie rarement des messages — seulement quand quelque chose de significatif se passe. Votre contact est un soutien, et je gère toutes les données personnellement avec soin. Vous pouvez vous désinscrire à tout moment.</p>
        <p class="contact-description" style="margin-top: 10px;"><strong>Comment s'inscrire :</strong></p>
        <ul class="contact-availability">
          <li>Visitez www.j3zz.com/fr/contact/ et remplissez le formulaire d'inscription dans la colonne de droite</li>
          <li>Scannez le QR code sur cette page avec votre téléphone pour accéder directement au formulaire</li>
          <li>Renseignez votre email, téléphone, prénom, nom et votre consentement à recevoir des nouvelles occasionnelles</li>
        </ul>
      </div>

      <!-- Social Media Icons Section (screen only) -->
      <div class="contact-block contact-block--screen-only">
        <!-- Screen version: icon grid -->
        <div class="contact-social-icons">
        {% if site.bandcamp_username %}
        <a href="https://{{ site.bandcamp_username }}.bandcamp.com" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="Bandcamp - {{ site.bandcamp_username }}" title="Bandcamp - {{ site.bandcamp_username }}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8h8.5l4 8H4l-4-8z" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.soundcloud_username %}
        <a href="https://soundcloud.com/{{ site.soundcloud_username }}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="SoundCloud - {{ site.soundcloud_username }}" title="SoundCloud - {{ site.soundcloud_username }}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 13v4M6 11v6M9 10v7M12 9v8M15 8v9M18 7v10M21 6v11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a>
        {% endif %}
        {% if site.youtube_username %}
        <a href="https://youtube.com/@{{ site.youtube_username }}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="YouTube - {{ site.youtube_username }}" title="YouTube - {{ site.youtube_username }}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
            <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.vimeo_username %}
        <a href="https://vimeo.com/{{ site.vimeo_username }}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="Vimeo - {{ site.vimeo_username }}" title="Vimeo - {{ site.vimeo_username }}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
            <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.facebook_username %}
        <a href="https://facebook.com/{{ site.facebook_username }}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="Facebook - {{ site.facebook_username }}" title="Facebook - {{ site.facebook_username }}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8h3l-1 3h-2v8h-3v-8H9V8h2V6.5C11 4.5 12 3 15 3h2v3h-2c-.5 0-1 .5-1 1V8z" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.instagram_username %}
        <a href="https://instagram.com/{{ site.instagram_username }}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="Instagram - {{ site.instagram_username }}" title="Instagram - {{ site.instagram_username }}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.twitter_username %}
        <span class="contact-social-icon social-icon--disabled" aria-label="X (anciennement Twitter) — non lié" tabindex="0" role="img">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4l7 9.5M20 4l-7 9.5m0 0L4 20m9-6.5L20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          <span class="social-icon__tooltip">
            Je maintiens une présence sur X mais n'endosse pas la plateforme. Depuis le rachat par Elon Musk, X est devenu un vecteur de discours haineux, de désinformation et d'érosion de la modération de contenu. Je n'y fais pas de lien.
          </span>
        </span>
        {% endif %}
        {% if site.linkedin_username %}
        <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="LinkedIn - {{ site.linkedin_username }}" title="LinkedIn - {{ site.linkedin_username }}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9v10M6 6v.5M10 14v5m0-5c0-2 1-3 3-3s3 1 3 3v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a>
        {% endif %}
        {% if site.twitch_username %}
        <a href="https://twitch.tv/{{ site.twitch_username }}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="Twitch - {{ site.twitch_username }}" title="Twitch - {{ site.twitch_username }}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 3l-1 4v13h5v2h3l2-2h4l5-5V3H4zm14 10l-3 3h-4l-2 2v-2H6V5h12v8z" fill="currentColor"/>
            <rect x="13" y="8" width="1.5" height="4" fill="currentColor"/>
            <rect x="9" y="8" width="1.5" height="4" fill="currentColor"/>
          </svg>
        </a>
        {% endif %}
        {% if site.malt_username %}
        <a href="https://www.malt.fr/profile/{{ site.malt_username }}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="Malt - {{ site.malt_username }}" title="Malt - {{ site.malt_username }}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        {% endif %}
        </div>
      </div><!-- End screen-only social icons block -->

      <!-- Print-only: Social Links Section -->
      <div class="contact-block print-only-block">
      <p class="contact-description"><strong>Me retrouver</strong></p>
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
        <div class="social-print-item social-print-item--no-link">
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4l7 9.5M20 4l-7 9.5m0 0L4 20m9-6.5L20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="social-print-name">X (Twitter)</div>
          <div class="social-print-url social-print-url--note">Je maintiens une présence sur X mais n'endosse pas la plateforme. Depuis le rachat par Elon Musk, X est devenu un vecteur de discours haineux, de désinformation et d'érosion de la modération de contenu. Je n'y fais pas de lien.</div>
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
        {% if site.twitch_username %}
        <div class="social-print-item" data-url="https://twitch.tv/{{ site.twitch_username }}" data-name="Twitch">
          <div class="social-print-qr"></div>
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 3l-1 4v13h5v2h3l2-2h4l5-5V3H4zm14 10l-3 3h-4l-2 2v-2H6V5h12v8z" fill="currentColor"/>
              <rect x="13" y="8" width="1.5" height="4" fill="currentColor"/>
              <rect x="9" y="8" width="1.5" height="4" fill="currentColor"/>
            </svg>
          </div>
          <div class="social-print-name">Twitch</div>
          <div class="social-print-url">twitch.tv/{{ site.twitch_username }}</div>
        </div>
        {% endif %}
        {% if site.malt_username %}
        <div class="social-print-item" data-url="https://www.malt.fr/profile/{{ site.malt_username }}" data-name="Malt">
          <div class="social-print-qr"></div>
          <div class="social-print-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="social-print-name">Malt</div>
          <div class="social-print-url">malt.fr/profile/{{ site.malt_username }}</div>
        </div>
        {% endif %}
      </div>
      </div><!-- End print-only social block -->

    </div><!-- End left column -->

    <!-- Right Column: Newsletter -->
    <div class="contact-column contact-column--right">

    <div class="contact-block">
      <p class="contact-description"><strong>Rester informé</strong></p>
      <p class="contact-description">Nouvelles occasionnelles sur les concerts, ateliers et releases. En tant qu'artiste expérimental indépendant, j'envoie rarement des messages — seulement quand quelque chose de significatif se passe.</p>

      <!-- Begin Mailchimp Signup Form -->
      {% if site.mailchimp_action_url %}
      <form class="contact-newsletter-form" action="{{ site.mailchimp_action_url }}" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
        <div class="form-row">
          <input type="email" name="EMAIL" placeholder="Adresse email *" class="form-input" required>
          <span class="form-help-text">Format : utilisateur@domaine.com</span>
        </div>
        <div class="form-row">
          <input type="tel" name="PHONE" placeholder="Numéro de téléphone *" class="form-input" pattern="^\+[1-9]\d{1,14}$" title="Format international : +[indicatif pays][numéro]" required>
          <span class="form-help-text">Format : +[indicatif pays][numéro] (ex. : +33612345678)</span>
        </div>
        <div class="form-row">
          <input type="text" name="FNAME" placeholder="Prénom *" class="form-input" required>
          <span class="form-help-text">Lettres uniquement (2-50 caractères) — Tirets et apostrophes autorisés</span>
        </div>
        <div class="form-row">
          <input type="text" name="LNAME" placeholder="Nom *" class="form-input" required>
          <span class="form-help-text">Lettres uniquement (2-50 caractères) — Tirets et apostrophes autorisés</span>
        </div>

        <!-- GDPR Consent Checkbox -->
        <div class="form-row">
          <label class="form-checkbox-label">
            <input type="checkbox" name="gdpr[{{ site.mailchimp_gdpr_field }}]" class="form-checkbox" value="Y" required>
            <span>* Je consens à recevoir des nouvelles occasionnelles sur les concerts, ateliers et releases. En tant qu'artiste expérimental indépendant, j'envoie rarement des messages — seulement quand quelque chose de significatif se passe. Votre contact est un soutien, et je gère toutes les données personnellement avec soin. Vous pouvez vous désinscrire à tout moment.</span>
          </label>
        </div>

        <!-- Real people should not fill this in and expect good things -->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="{{ site.mailchimp_bot_field }}" tabindex="-1" value="">
        </div>

        <button type="submit" name="subscribe" class="form-submit">S'inscrire</button>
      </form>
      {% else %}
      <p class="contact-description" style="font-style: italic; color: #999;">Inscription à la newsletter bientôt disponible.</p>
      {% endif %}
      <!-- End Mailchimp Signup Form -->
    </div>

    </div><!-- End right column -->

  </div>
</section>

