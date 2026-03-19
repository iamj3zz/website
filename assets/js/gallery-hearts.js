/**
 * Gallery Heart/Like Button
 * - localStorage tracks per-browser liked state
 * - Supabase REST API fetches and updates aggregated counts
 * - Graceful degradation if Supabase is unreachable
 */
(function () {
  'use strict';

  // ── localStorage (per-browser liked state) ──────────────────────────────
  var STORAGE_KEY = 'j3zz_gallery_likes';

  function getLikes() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function saveLikes(likes) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(likes));
    } catch (e) { /* private browsing / quota */ }
  }

  function isLiked(slug) { return getLikes()[slug] === true; }

  function toggleLocalLike(slug) {
    var likes = getLikes();
    if (likes[slug]) { delete likes[slug]; } else { likes[slug] = true; }
    saveLikes(likes);
    return likes[slug] === true;
  }

  // ── Supabase REST API ───────────────────────────────────────────────────
  var cfg = window.J3ZZ_CONFIG || {};
  var SUPABASE_URL = cfg.supabaseUrl || '';
  var SUPABASE_KEY = cfg.supabaseAnonKey || '';
  var supabaseEnabled = !!(SUPABASE_URL && SUPABASE_KEY);

  function supabaseHeaders() {
    return {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Content-Type': 'application/json'
    };
  }

  // Fetch all like counts in one GET. Returns Promise<{slug->count}>.
  function fetchAllCounts() {
    if (!supabaseEnabled) return Promise.resolve({});
    return fetch(SUPABASE_URL + '/rest/v1/artwork_likes?select=slug,count',
      { method: 'GET', headers: supabaseHeaders() })
      .then(function (res) { return res.ok ? res.json() : []; })
      .then(function (rows) {
        if (!Array.isArray(rows)) return {};
        var map = {};
        rows.forEach(function (row) {
          if (row.slug && typeof row.count === 'number') map[row.slug] = row.count;
        });
        return map;
      })
      .catch(function () { return {}; });
  }

  // Call increment_like or decrement_like RPC. Returns Promise<number|null>.
  function callRpc(procName, slug) {
    if (!supabaseEnabled) return Promise.resolve(null);
    return fetch(SUPABASE_URL + '/rest/v1/rpc/' + procName, {
      method: 'POST',
      headers: supabaseHeaders(),
      body: JSON.stringify({ p_slug: slug })
    })
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (val) { return typeof val === 'number' ? val : null; })
    .catch(function () { return null; });
  }

  // ── DOM updates ─────────────────────────────────────────────────────────
  function updateButton(btn, liked, count) {
    var title = btn.dataset.artworkTitle || 'this artwork';
    btn.setAttribute('aria-pressed', liked ? 'true' : 'false');
    btn.setAttribute('aria-label', (liked ? 'Unlike ' : 'Like ') + title);
    var countEl = btn.querySelector('.gallery-heart-count');
    if (countEl) {
      countEl.textContent = (count !== null && count !== undefined && count > 0) ? count : '';
    }
  }

  function playBounce(btn) {
    btn.classList.remove('is-beating');
    void btn.offsetWidth;
    btn.classList.add('is-beating');
    var icon = btn.querySelector('.gallery-heart-icon');
    if (icon) {
      icon.addEventListener('animationend', function handler() {
        btn.classList.remove('is-beating');
        icon.removeEventListener('animationend', handler);
      });
    }
  }

  // ── Main ────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('[data-heart-btn]');
    if (!buttons.length) return;

    // Phase 1: instant localStorage state (no network wait)
    buttons.forEach(function (btn) {
      var slug = btn.dataset.artworkSlug;
      if (slug) updateButton(btn, isLiked(slug), null);
    });

    // Phase 2: fetch all Supabase counts, fill in numbers
    fetchAllCounts().then(function (countsMap) {
      buttons.forEach(function (btn) {
        var slug = btn.dataset.artworkSlug;
        if (!slug) return;
        var count = countsMap.hasOwnProperty(slug) ? countsMap[slug] : 0;
        updateButton(btn, isLiked(slug), count);
      });
    });

    // Phase 3: click handlers
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var slug = btn.dataset.artworkSlug;
        if (!slug) return;

        var nowLiked = toggleLocalLike(slug);
        var procName = nowLiked ? 'increment_like' : 'decrement_like';

        // Optimistic update
        var countEl = btn.querySelector('.gallery-heart-count');
        var cur = countEl ? parseInt(countEl.textContent, 10) : 0;
        var optimistic = nowLiked
          ? (isNaN(cur) ? 1 : cur + 1)
          : Math.max(isNaN(cur) ? 0 : cur - 1, 0);
        updateButton(btn, nowLiked, optimistic);
        playBounce(btn);

        // Confirm with server, correct any drift
        callRpc(procName, slug).then(function (serverCount) {
          if (serverCount !== null) updateButton(btn, isLiked(slug), serverCount);
        });
      });
    });
  });
})();
