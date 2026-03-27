// Scroll overlay for touch/mobile devices
// Activates overlays on the most visible item while scrolling (portfolio grid & gallery)
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Only activate on touch devices
    if (!('ontouchstart' in window) && !navigator.maxTouchPoints) return;

    let activeItem = null;
    let observer = null;

    function setActive(item) {
      if (activeItem === item) return;
      if (activeItem) activeItem.classList.remove('overlay-active');
      activeItem = item;
      if (activeItem) activeItem.classList.add('overlay-active');
    }

    function initObserver(selector) {
      if (observer) observer.disconnect();

      observer = new IntersectionObserver(function(entries) {
        // Find the entry with the highest intersection ratio
        let best = null;
        let bestRatio = 0;

        entries.forEach(function(entry) {
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            best = entry.target;
          }
        });

        // Only activate if meaningfully visible (>50%)
        if (best && bestRatio > 0.5) {
          setActive(best);
        }
      }, {
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
        rootMargin: '0px'
      });

      const items = document.querySelectorAll(selector);
      items.forEach(function(item) {
        observer.observe(item);
      });
    }

    // Handle portfolio grid
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
      initObserver('.portfolio-grid .portfolio-item:not(.hidden)');

      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          setActive(null);
          setTimeout(function() {
            initObserver('.portfolio-grid .portfolio-item:not(.hidden)');
          }, 350);
        });
      });
    }

    // Handle gallery grid
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
      initObserver('.gallery-grid .gallery-item');
    }
  });
})();
