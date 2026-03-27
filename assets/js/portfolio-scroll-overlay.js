// Scroll overlay for touch/mobile devices
// Activates overlay on the item closest to viewport center while scrolling
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Only activate on touch devices
    if (!('ontouchstart' in window) && !navigator.maxTouchPoints) return;

    let activeItem = null;

    function setActive(item) {
      if (activeItem === item) return;
      if (activeItem) activeItem.classList.remove('overlay-active');
      activeItem = item;
      if (activeItem) activeItem.classList.add('overlay-active');
    }

    function updateOverlay(selector) {
      const items = document.querySelectorAll(selector);
      const viewportCenter = window.innerHeight / 2;
      let best = null;
      let bestDistance = Infinity;

      items.forEach(function(item) {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < bestDistance) {
          bestDistance = distance;
          best = item;
        }
      });

      setActive(best);
    }

    function setupScroll(selector) {
      // Throttle scroll updates for performance
      let scrollTimeout;
      window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
          updateOverlay(selector);
        }, 50);
      }, { passive: true });

      // Initial update
      updateOverlay(selector);
    }

    // Handle portfolio grid
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
      setupScroll('.portfolio-grid .portfolio-item:not(.hidden)');

      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          setActive(null);
          setTimeout(function() {
            updateOverlay('.portfolio-grid .portfolio-item:not(.hidden)');
          }, 350);
        });
      });
    }

    // Handle gallery grid
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
      setupScroll('.gallery-grid .gallery-item');
    }
  });
})();
