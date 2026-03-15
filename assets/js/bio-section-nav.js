/**
 * Bio Section Navigation Widget
 * Provides a floating section jump shortcut for the bio page
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Guard: exit if not on bio page or no section found
    const bioCategories = document.querySelectorAll('.bio-category[id]');
    if (bioCategories.length === 0) {
      return;
    }

    // Extract section labels from h2 text inside each .bio-category
    const sections = Array.from(bioCategories)
      .map(category => ({
        id: category.id,
        label: category.querySelector('h2')?.textContent.trim() || ''
      }))
      .filter(section => section.label); // Filter out empty labels

    if (sections.length === 0) {
      return;
    }

    // Create toggle button
    const toggle = document.createElement('button');
    toggle.className = 'bio-nav-toggle';
    toggle.setAttribute('aria-label', 'Navigate to section');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'bio-nav-panel');
    toggle.textContent = 'SECTIONS';

    // Create navigation panel
    const panel = document.createElement('nav');
    panel.className = 'bio-nav-panel';
    panel.id = 'bio-nav-panel';
    panel.setAttribute('aria-label', 'Jump to section');

    const list = document.createElement('ul');
    list.className = 'bio-nav-list';

    sections.forEach(section => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.className = 'bio-nav-link';
      link.href = `#${section.id}`;
      link.textContent = section.label;

      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById(section.id);
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

    // Highlight active section using IntersectionObserver
    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const links = list.querySelectorAll('.bio-nav-link');
            links.forEach(link => {
              link.classList.remove('is-active');
              if (link.href.endsWith(`#${sectionId}`)) {
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

    bioCategories.forEach(category => observer.observe(category));

    // Add elements to DOM
    document.body.appendChild(toggle);
    document.body.appendChild(panel);
  });

})();
