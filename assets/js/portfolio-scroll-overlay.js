// Scroll overlay for touch/mobile devices
// 1-column: scroll-focus overlay | multi-column: persistent title+category bar
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

    function isMultiColumn(items) {
      if (items.length < 2) return false;
      return items[0].offsetLeft !== items[1].offsetLeft;
    }

    function updateOverlay(selector) {
      const items = Array.from(document.querySelectorAll(selector));
      if (!items.length || isMultiColumn(items)) return;

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

    function applyMode(gridEl, selector) {
      const items = Array.from(document.querySelectorAll(selector));
      if (!items.length) return;

      if (isMultiColumn(items)) {
        setActive(null);
        gridEl.classList.add('grid-multicolumn');
      } else {
        gridEl.classList.remove('grid-multicolumn');
        updateOverlay(selector);
      }
    }

    function setupGrid(gridEl, selector) {
      let scrollTimeout;
      window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
          updateOverlay(selector);
        }, 50);
      }, { passive: true });

      let resizeTimeout;
      window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
          applyMode(gridEl, selector);
        }, 150);
      });

      applyMode(gridEl, selector);
    }

    // Handle portfolio grid
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
      setupGrid(portfolioGrid, '.portfolio-grid .portfolio-item:not(.hidden)');

      document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          setActive(null);
          setTimeout(function() {
            applyMode(portfolioGrid, '.portfolio-grid .portfolio-item:not(.hidden)');
          }, 350);
        });
      });
    }

    // Handle gallery grid
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
      setupGrid(galleryGrid, '.gallery-grid .gallery-item');
    }
  });
})();
