// Mobile Navigation Toggle
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      // Toggle active class on both button and nav
      const isExpanded = menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');

      // Update aria-expanded for accessibility
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking on a navigation link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = menuToggle.contains(event.target) || mainNav.contains(event.target);

      if (!isClickInside && mainNav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    function getStoredTheme() {
      try { return localStorage.getItem('theme'); } catch (e) { return null; }
    }
    function storeTheme(value) {
      try { localStorage.setItem('theme', value); } catch (e) {}
    }
    function currentEffectiveTheme() {
      const stored = getStoredTheme();
      if (stored === 'dark' || stored === 'light') return stored;
      return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }
    function applyLabel(theme) {
      const toDark = themeToggle.getAttribute('data-label-to-dark');
      const toLight = themeToggle.getAttribute('data-label-to-light');
      themeToggle.setAttribute('aria-label', theme === 'dark' ? toLight : toDark);
      themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }

    applyLabel(currentEffectiveTheme());

    themeToggle.addEventListener('click', function() {
      const next = currentEffectiveTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      storeTheme(next);
      applyLabel(next);
    });
  }

  // Bottom nav: show only on pages taller than viewport
  function updateBottomNav() {
    const bottomNav = document.querySelector('.bottom-nav');
    if (!bottomNav) return;
    const isLong = document.documentElement.scrollHeight > window.innerHeight;
    bottomNav.classList.toggle('bottom-nav--visible', isLong);
  }

  updateBottomNav();
  window.addEventListener('resize', window.throttle ? window.throttle(updateBottomNav, 150) : updateBottomNav);
  });
})();
