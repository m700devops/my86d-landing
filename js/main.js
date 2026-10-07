/* ===========================================================
   86'd - my86d.com
   The page works fully without this file. Everything here is
   tracking and two pieces of polish.
   =========================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     THE App Store link lives here.
     Add campaign tracking later by filling in CAMPAIGN: every
     badge and button on the page is rewritten from this on load.
     e.g. CAMPAIGN.pt = '123456789'  ->  ...?pt=123456789&ct=hero
     The plain hrefs in index.html are the no-JS fallback.
     --------------------------------------------------------- */
  var APP_STORE_URL = 'https://apps.apple.com/us/app/86d-bar-inventory/id6798359825';
  var CAMPAIGN = { pt: '', mt: '8' };

  var links = document.querySelectorAll('[data-appstore]');

  function urlFor(placement) {
    if (!CAMPAIGN.pt) return APP_STORE_URL;
    var q = ['pt=' + encodeURIComponent(CAMPAIGN.pt), 'ct=' + encodeURIComponent(placement)];
    if (CAMPAIGN.mt) q.push('mt=' + encodeURIComponent(CAMPAIGN.mt));
    return APP_STORE_URL + '?' + q.join('&');
  }

  function track(name, params) {
    if (typeof gtag === 'function') gtag('event', name, params);
  }

  Array.prototype.forEach.call(links, function (link) {
    var placement = link.getAttribute('data-appstore');
    link.href = urlFor(placement);
    link.addEventListener('click', function () {
      track('app_store_click', { placement: placement });
    });
  });

  /* ---------- FAQ: one event per question opened ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.faq-list details'), function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      var q = item.querySelector('summary');
      track('faq_open', { question: q ? q.textContent.trim() : '' });
    });
  });

  /* ---------- scroll depth: 50% and 90%, once each ---------- */
  var marks = [50, 90];
  function onScroll() {
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    var pct = ((window.pageYOffset || doc.scrollTop) / scrollable) * 100;
    while (marks.length && pct >= marks[0]) {
      track('scroll_depth', { percent: marks.shift() });
    }
    if (!marks.length) window.removeEventListener('scroll', onScroll);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (!('IntersectionObserver' in window)) return;

  /* ---------- mobile sticky bar ----------
     Shown once the hero has scrolled away; hidden again while the
     pricing card or the final CTA is on screen. */
  var bar = document.getElementById('stickyBar');
  var hero = document.getElementById('top');
  var priceCard = document.getElementById('price-card');
  var finalCta = document.getElementById('final-cta');

  if (bar && hero) {
    var heroGone = false;
    var ctaOnScreen = 0;

    function paint() {
      var show = heroGone && ctaOnScreen === 0;
      if (show) bar.hidden = false;
      bar.classList.toggle('is-visible', show);
    }

    new IntersectionObserver(function (entries) {
      heroGone = !entries[0].isIntersecting;
      paint();
    }, { threshold: 0 }).observe(hero);

    var ctaWatcher = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { ctaOnScreen += e.isIntersecting ? 1 : -1; });
      if (ctaOnScreen < 0) ctaOnScreen = 0;
      paint();
    }, { threshold: 0 });
    [priceCard, finalCta].forEach(function (el) { if (el) ctaWatcher.observe(el); });
  }

  /* ---------- the logo stamps in, once ---------- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mark = document.querySelector('.price-mark');
  if (mark && priceCard && !reduced.matches) {
    var stamper = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      mark.classList.add('is-stamped');
      stamper.disconnect();
    }, { threshold: 0.4 });
    stamper.observe(priceCard);
  }
})();
