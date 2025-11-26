/**
 * Cookie Consent Manager
 * GDPR-compliant cookie consent system
 */

(function() {
  'use strict';

  // Get DOM elements
  const banner = document.getElementById('cookie-consent-banner');
  const settingsButton = document.getElementById('cookie-settings-button');
  const acceptAllBtn = document.getElementById('cookie-accept-all');
  const acceptSelectedBtn = document.getElementById('cookie-accept-selected');
  const rejectAllBtn = document.getElementById('cookie-reject-all');
  const analyticsCheckbox = document.getElementById('cookie-analytics');
  const embeddedCheckbox = document.getElementById('cookie-embedded');

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

  // Save consent preferences
  function saveConsent(analytics, embedded) {
    const consent = {
      analytics: analytics,
      embedded: embedded,
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

  // Load saved preferences into checkboxes
  function loadPreferences() {
    const consent = getConsent();
    if (consent) {
      if (analyticsCheckbox) {
        analyticsCheckbox.checked = consent.analytics || false;
      }
      if (embeddedCheckbox) {
        embeddedCheckbox.checked = consent.embedded || false;
      }
    }
  }

  // Accept all cookies
  function acceptAll() {
    if (analyticsCheckbox) analyticsCheckbox.checked = true;
    if (embeddedCheckbox) embeddedCheckbox.checked = true;

    saveConsent(true, true);
    hideBanner();
  }

  // Save selected preferences
  function acceptSelected() {
    const analytics = analyticsCheckbox ? analyticsCheckbox.checked : false;
    const embedded = embeddedCheckbox ? embeddedCheckbox.checked : false;

    saveConsent(analytics, embedded);
    hideBanner();
  }

  // Reject optional cookies (only essential)
  function rejectAll() {
    if (analyticsCheckbox) analyticsCheckbox.checked = false;
    if (embeddedCheckbox) embeddedCheckbox.checked = false;

    saveConsent(false, false);
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
      loadPreferences();
      hideBanner();
    }

    // Button event listeners
    if (acceptAllBtn) {
      acceptAllBtn.addEventListener('click', acceptAll);
    }

    if (acceptSelectedBtn) {
      acceptSelectedBtn.addEventListener('click', acceptSelected);
    }

    if (rejectAllBtn) {
      rejectAllBtn.addEventListener('click', rejectAll);
    }

    // Settings button to reopen banner
    if (settingsButton) {
      settingsButton.addEventListener('click', function() {
        loadPreferences();
        showBanner();
      });
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
