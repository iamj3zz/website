/**
 * Cookie Consent Manager
 * GDPR-compliant analytics consent (Google Analytics is the only
 * consent-gated feature; embeds and essential storage need no choice)
 */

(function() {
  'use strict';

  // Get DOM elements
  const banner = document.getElementById('cookie-consent-banner');
  const settingsButton = document.getElementById('cookie-settings-button');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');

  // Check if consent has been given
  function hasConsent() {
    try {
      return localStorage.getItem('cookieConsent') !== null;
    } catch (e) {
      // localStorage not available
      return false;
    }
  }

  // Get current consent preferences
  function getConsent() {
    try {
      const consent = localStorage.getItem('cookieConsent');
      if (consent) {
        try {
          return JSON.parse(consent);
        } catch (e) {
          // Invalid JSON, return null
          return null;
        }
      }
      return null;
    } catch (e) {
      // localStorage not available (Safari private browsing, etc.)
      return null;
    }
  }

  // Save consent preference
  function saveConsent(analytics) {
    const consent = {
      analytics: analytics,
      timestamp: new Date().toISOString()
    };

    try {
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
    } catch (e) {
      // localStorage not available or quota exceeded
      // Could be Safari private browsing, storage quota, or other issues
      console.warn('Failed to save cookie preferences:', e.message);
      // Continue anyway - dispatch event so the session still works
    }

    // Dispatch event for analytics and other scripts
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
      detail: consent
    }));

    return consent;
  }

  // Show the banner
  function showBanner() {
    if (banner) {
      banner.style.display = 'block';
    }
    if (settingsButton) {
      settingsButton.style.display = 'none';
    }
  }

  // Hide the banner
  function hideBanner() {
    if (banner) {
      banner.style.display = 'none';
    }
    if (settingsButton) {
      settingsButton.style.display = 'block';
    }
  }

  // Accept analytics
  function acceptAnalytics() {
    saveConsent(true);
    hideBanner();
  }

  // Decline analytics
  function declineAnalytics() {
    saveConsent(false);
    hideBanner();
  }

  // Initialize
  function init() {
    // Check if consent has been given
    if (!hasConsent()) {
      // No consent yet, show banner
      showBanner();
    } else {
      // Consent exists, show settings button
      hideBanner();
    }

    // Button event listeners
    if (acceptBtn) {
      acceptBtn.addEventListener('click', acceptAnalytics);
    }

    if (declineBtn) {
      declineBtn.addEventListener('click', declineAnalytics);
    }

    // Settings button to reopen banner
    if (settingsButton) {
      settingsButton.addEventListener('click', showBanner);
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
