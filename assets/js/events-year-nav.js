/**
 * Events Year Navigation Widget
 * Provides a floating year jump shortcut for the events page
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Guard: exit if not on events page or no year sections found
    const yearSections = document.querySelectorAll('.events-year-section[id^="year-"]');
    if (yearSections.length === 0) {
      return;
    }

    // Extract years from section IDs
    const years = Array.from(yearSections)
      .map(section => section.id.replace('year-', ''))
      .reverse(); // Newest first (2025 → 2008)

    // Create toggle button
    const toggle = document.createElement('button');
    toggle.className = 'year-nav-toggle';
    toggle.setAttribute('aria-label', 'Navigate to year');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'year-nav-panel');
    toggle.textContent = 'YEARS';

    // Create navigation panel
    const panel = document.createElement('nav');
    panel.className = 'year-nav-panel';
    panel.id = 'year-nav-panel';
    panel.setAttribute('aria-label', 'Jump to year');

    const list = document.createElement('ul');
    list.className = 'year-nav-list';

    years.forEach(year => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.className = 'year-nav-link';
      link.href = `#year-${year}`;
      link.textContent = year;

      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById(`year-${year}`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          toggle.setAttribute('aria-expanded', 'false');
          panel.classList.remove('is-open');
        }
      });

      item.appendChild(link);
      list.appendChild(item);
    });

    panel.appendChild(list);

    // Toggle panel open/close
    toggle.addEventListener('click', function() {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isOpen);
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

    // Show/hide toggle based on scroll position (300px threshold)
    const toggleVisibility = window.throttle(function() {
      const isScrolled = window.scrollY > 300;
      toggle.classList.toggle('is-visible', isScrolled);
    }, 100);

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check on load

    // Highlight active year using IntersectionObserver
    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const year = entry.target.id.replace('year-', '');
            const links = list.querySelectorAll('.year-nav-link');
            links.forEach(link => {
              link.classList.remove('is-active');
              if (link.href.endsWith(`#year-${year}`)) {
                link.classList.add('is-active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-10% 0px -80% 0px'
      }
    );

    yearSections.forEach(section => observer.observe(section));

    // Add elements to DOM
    document.body.appendChild(toggle);
    document.body.appendChild(panel);
  });

})();
