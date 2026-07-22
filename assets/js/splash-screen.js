(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('splash-screen');
    if (!overlay) return;

    const shouldShow = document.documentElement.getAttribute('data-splash') === 'show';
    if (!shouldShow) {
      overlay.remove();
      return;
    }

    const iframe = document.getElementById('splash-video-iframe');
    const closeBtn = overlay.querySelector('.splash-close');
    const skipBtn = overlay.querySelector('.splash-skip');
    const backdrop = overlay.querySelector('.splash-overlay-backdrop');

    function markVisited() {
      try { localStorage.setItem('hasVisitedSplash', '1'); } catch (e) {}
    }

    function closeSplash() {
      document.documentElement.removeAttribute('data-splash');
      document.body.style.overflow = '';
      markVisited();
      if (iframe) iframe.src = '';
      overlay.hidden = true;
    }

    if (iframe && iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
    }

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();

    if (closeBtn) closeBtn.addEventListener('click', closeSplash);
    if (skipBtn) skipBtn.addEventListener('click', closeSplash);
    if (backdrop) backdrop.addEventListener('click', closeSplash);

    document.addEventListener('keydown', function (e) {
      if (overlay.hidden) return;

      if (e.key === 'Escape') {
        closeSplash();
        return;
      }

      // Trap Tab focus inside the dialog so it can't reach page content
      // (e.g. the cookie notice) hidden behind the splash backdrop.
      if (e.key === 'Tab') {
        const focusable = overlay.querySelectorAll('button, iframe, [href], [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  });
})();
