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
        <p class="contact-description" style="margin-top: 10px;">Pour les demandes de licence et de reproduction, consultez la page <a href="/fr/licensing/">Licence &amp; Droits</a>.</p>
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
        {% include social-icons.html class="contact-social-icon" lang="fr" %}
        </div>
      </div><!-- End screen-only social icons block -->

      <!-- Print-only: Social Links Section -->
      <div class="contact-block print-only-block">
      <p class="contact-description"><strong>Me retrouver</strong></p>
      <!-- Print version: QR code + icon + name + URL layout -->
      <div class="contact-social-print-list">
        {% include social-print-list.html lang="fr" %}
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

