/**
 * Artwork Share Button + Sticky Bar
 * - Mobile: native Web Share API (OS share sheet)
 * - Desktop fallback: inline popover with copy/email/Twitter/Facebook
 * - Sticky bar: appears on scroll, mirrors inline heart state
 */
(function () {
  'use strict';

  // ── Shared share logic ──────────────────────────────────────────────────
  function initShareBtn(btn, popoverSelector) {
    if (!btn) return;

    var url     = btn.dataset.shareUrl   || window.location.href;
    var title   = btn.dataset.shareTitle || document.title;
    var text    = btn.dataset.shareText  || '';
    var popover = btn.parentElement.querySelector(popoverSelector);

    if (navigator.share) {
      btn.addEventListener('click', function () {
        navigator.share({ title: title, text: text, url: url }).catch(function () {});
      });
      return;
    }

    if (!popover) return;

    var copyEl     = popover.querySelector('[data-share-copy], [data-share-copy-sticky]');
    var emailEl    = popover.querySelector('[data-share-email], [data-share-email-sticky]');
    var twitterEl  = popover.querySelector('[data-share-twitter], [data-share-twitter-sticky]');
    var facebookEl = popover.querySelector('[data-share-facebook], [data-share-facebook-sticky]');

    if (emailEl)    emailEl.href    = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(text + '\n\n' + url);
    if (twitterEl)  twitterEl.href  = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url);
    if (facebookEl) facebookEl.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isHidden = popover.hidden;
      popover.hidden = !isHidden;
      btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
    });

    if (copyEl) {
      copyEl.addEventListener('click', function (e) {
        e.preventDefault();
        navigator.clipboard.writeText(url).then(function () {
          copyEl.textContent = 'Copied!';
          setTimeout(function () { copyEl.textContent = 'Copy link'; }, 2000);
        }).catch(function () {
          // Fallback for older browsers
          var ta = document.createElement('textarea');
          ta.value = url;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          copyEl.textContent = 'Copied!';
          setTimeout(function () { copyEl.textContent = 'Copy link'; }, 2000);
        });
        popover.hidden = true;
      });
    }

    document.addEventListener('click', function () {
      if (!popover.hidden) {
        popover.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !popover.hidden) {
        popover.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // ── Inline share button ─────────────────────────────────────────────────
    initShareBtn(document.querySelector('[data-share-btn]'), '.artwork-share-popover:not(.artwork-share-popover--sticky)');

    // ── Sticky bar ──────────────────────────────────────────────────────────
    var stickyBar      = document.querySelector('.artwork-engagement-bar--sticky');
    var inlineBar      = document.querySelector('.artwork-engagement-bar--inline');
    var stickyHeart    = document.querySelector('[data-heart-btn-sticky]');
    var inlineHeart    = document.querySelector('[data-heart-btn]');

    // Initialize sticky share button
    initShareBtn(document.querySelector('[data-share-btn-sticky]'), '.artwork-share-popover--sticky');

    // Show sticky bar after inline bar scrolls out of view
    if (stickyBar && inlineBar) {
      var observer = new IntersectionObserver(function (entries) {
        var inlineVisible = entries[0].isIntersecting;
        stickyBar.hidden = inlineVisible;
      }, { threshold: 0 });
      observer.observe(inlineBar);
    }

    // Sync sticky heart state from inline heart
    if (stickyHeart && inlineHeart) {
      function syncStickyHeart() {
        var pressed = inlineHeart.getAttribute('aria-pressed');
        stickyHeart.setAttribute('aria-pressed', pressed);
        var inlineCount = inlineHeart.querySelector('.gallery-heart-count');
        var stickyCount = stickyHeart.querySelector('.gallery-heart-count');
        if (inlineCount && stickyCount) stickyCount.textContent = inlineCount.textContent;
      }

      // Mirror click on sticky heart to inline heart
      stickyHeart.addEventListener('click', function (e) {
        e.stopPropagation();
        inlineHeart.click();
        // Sync after gallery-hearts.js has updated the inline button
        setTimeout(syncStickyHeart, 50);
      });

      // Watch inline heart for state changes (aria-pressed and count)
      var mo = new MutationObserver(syncStickyHeart);
      mo.observe(inlineHeart, { attributes: true, attributeFilter: ['aria-pressed'] });

      // Also watch count text changes
      var countEl = inlineHeart.querySelector('.gallery-heart-count');
      if (countEl) mo.observe(countEl, { characterData: true, childList: true, subtree: true });
    }
  });
})();
