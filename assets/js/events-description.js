(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.event-desc-toggle').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const col = btn.closest('.event-col-description');
        const shortEl = col.querySelector('.event-desc-short');
        const fullEl = col.querySelector('.event-desc-full');
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          shortEl.hidden = false;
          fullEl.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
          btn.setAttribute('aria-label', 'Show full description');
          btn.textContent = '+';
        } else {
          shortEl.hidden = true;
          fullEl.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
          btn.setAttribute('aria-label', 'Hide description');
          btn.textContent = '−';
        }
      });
    });
  });
})();
