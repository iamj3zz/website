/**
 * Utility Functions
 * Reusable JavaScript helper functions for performance optimization
 */

(function() {
  'use strict';

  /**
   * Debounce function
   * Delays execution until after a specified wait time has elapsed since the last call
   * Useful for: search input, window resize, auto-save
   *
   * @param {Function} func - The function to debounce
   * @param {number} wait - The number of milliseconds to delay
   * @returns {Function} - Debounced function
   *
   * @example
   * const debouncedSearch = debounce(function(query) {
   *   console.log('Searching for:', query);
   * }, 300);
   *
   * input.addEventListener('input', (e) => debouncedSearch(e.target.value));
   */
  window.debounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const context = this;
      const later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  /**
   * Throttle function
   * Ensures a function is only called once within a specified time period
   * Useful for: scroll events, mouse movement, button clicks
   *
   * @param {Function} func - The function to throttle
   * @param {number} limit - The minimum time between function calls in milliseconds
   * @returns {Function} - Throttled function
   *
   * @example
   * const throttledScroll = throttle(function() {
   *   console.log('Scroll position:', window.scrollY);
   * }, 100);
   *
   * window.addEventListener('scroll', throttledScroll);
   */
  window.throttle = function(func, limit) {
    let inThrottle;
    return function(...args) {
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function() {
          inThrottle = false;
        }, limit);
      }
    };
  };

})();
