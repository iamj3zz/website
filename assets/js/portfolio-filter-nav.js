/**
 * Portfolio Filter Navigation Widget
 * Provides a floating filter shortcut for the portfolio page (mirrors events year nav)
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Guard: only run on portfolio page
    if (!document.querySelector('.portfolio-grid')) return;

    const categories = [
      { label: 'All',           value: 'all' },
      { label: 'Installations', value: 'installations' },
      { label: 'Live Acts',     value: 'live-acts' },
      { label: 'Films',         value: 'films' },
      { label: 'Performances',  value: 'performances' },
      { label: 'Releases',      value: 'releases' },
      { label: 'Workshops',     value: 'workshops' }
    ];

    // Create toggle button
    const toggle = document.createElement('button');
    toggle.className = 'filter-nav-toggle';
    toggle.setAttribute('aria-label', 'Filter works');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'filter-nav-panel');
    toggle.textContent = 'FILTER';

    // Create navigation panel
    const panel = document.createElement('nav');
    panel.className = 'filter-nav-panel';
    panel.id = 'filter-nav-panel';
    panel.setAttribute('aria-label', 'Filter by category');

    const list = document.createElement('ul');
    list.className = 'filter-nav-list';

    // Category filter items
    categories.forEach(cat => {
      const item = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'filter-nav-btn';
      btn.setAttribute('data-filter', cat.value);
      btn.textContent = cat.label;

      btn.addEventListener('click', function() {
        // Simulate click on matching .filter-btn in the existing filter bar
        const existing = document.querySelector(`.filter-btn[data-filter="${cat.value}"]`);
        if (existing) existing.click();
        // Update active state in widget
        updateActiveState();
        // Close panel
        toggle.setAttribute('aria-expanded', 'false');
        panel.classList.remove('is-open');
      });

      item.appendChild(btn);
      list.appendChild(item);
    });

    // Commissioned separator
    const sep = document.createElement('li');
    sep.className = 'filter-nav-separator';
    list.appendChild(sep);

    // Commissioned toggle item
    const commItem = document.createElement('li');
    const commBtn = document.createElement('button');
    commBtn.className = 'filter-nav-btn filter-nav-commissioned';
    commBtn.textContent = 'Commissioned only';
    commBtn.addEventListener('click', function() {
      const checkbox = document.getElementById('commissioned-filter');
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
      }
      updateActiveState();
      // Keep panel open so user can see the toggle state
    });
    commItem.appendChild(commBtn);
    list.appendChild(commItem);

    panel.appendChild(list);

    // Reflect active state from existing filter bar into widget
    function updateActiveState() {
      const activeBtn = document.querySelector('.filter-btn.active');
      const activeFilter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
      list.querySelectorAll('.filter-nav-btn[data-filter]').forEach(btn => {
        btn.classList.toggle('is-active', btn.getAttribute('data-filter') === activeFilter);
      });
      const checkbox = document.getElementById('commissioned-filter');
      commBtn.classList.toggle('is-active', checkbox ? checkbox.checked : false);
    }

    // Toggle panel open/close
    toggle.addEventListener('click', function() {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (!isOpen) updateActiveState(); // Sync state when opening
      toggle.setAttribute('aria-expanded', String(!isOpen));
      panel.classList.toggle('is-open');
    });

    // Close panel on outside click
    document.addEventListener('click', function(e) {
      if (!toggle.contains(e.target) && !panel.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        panel.classList.remove('is-open');
      }
    });

    // Close panel on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        panel.classList.remove('is-open');
      }
    });

    // Show/hide toggle based on scroll position (400px threshold)
    const toggleVisibility = window.throttle(function() {
      const isScrolled = window.scrollY > 400;
      toggle.classList.toggle('is-visible', isScrolled);
    }, 100);

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check on load

    // Add elements to DOM
    document.body.appendChild(toggle);
    document.body.appendChild(panel);
  });

})();
