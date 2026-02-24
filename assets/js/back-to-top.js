'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.back-to-top');
    if (!btn) { return; }

    var THRESHOLD = 300;

    function updateVisibility() {
      if (window.scrollY > THRESHOLD) {
        btn.removeAttribute('hidden');
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
        setTimeout(function () {
          if (window.scrollY <= THRESHOLD) {
            btn.setAttribute('hidden', '');
          }
        }, 300);
      }
    }

    window.addEventListener('scroll', window.throttle(updateVisibility, 100), { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      btn.blur();
    });
  });
})();
