(function () {
  'use strict';

  if (window.__n3ThemeSwitcherInitialized) {
    return;
  }
  window.__n3ThemeSwitcherInitialized = true;

  var STORAGE_KEY = 'n3-theme';

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* Ignore in restricted storage */
    }
  }

  function getEffectiveTheme() {
    var saved = getSavedTheme();
    if (saved === 'midnight-washi' || saved === 'light') {
      return saved;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'midnight-washi';
    }
    return 'light';
  }

  function applyTheme(theme, isUserAction) {
    var isMidnight = (theme === 'midnight-washi');
    var html = document.documentElement;
    var body = document.body;

    // Destroy motion layers before removing theme classes/attributes so roots() finds them
    if (!isMidnight) {
      if (window.MidnightWashiMotion && typeof window.MidnightWashiMotion.destroy === 'function') {
        window.MidnightWashiMotion.destroy(body || document);
        window.MidnightWashiMotion.destroy(html);
      }
      var strays = document.querySelectorAll('.mw-atmosphere');
      for (var s = 0; s < strays.length; s++) {
        strays[s].remove();
      }
    }

    html.setAttribute('data-theme', theme);
    html.classList.toggle('mw-theme', isMidnight);

    if (body) {
      body.classList.toggle('mw-theme', isMidnight);
      if (isMidnight) {
        body.setAttribute('data-mw-background', 'fixed');
      } else {
        body.removeAttribute('data-mw-background');
      }
    }

    var toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-pressed', String(isMidnight));
      toggleBtn.innerHTML = isMidnight
        ? '<span class="theme-toggle-icon" aria-hidden="true">🍵</span><span>Matcha Desk</span>'
        : '<span class="theme-toggle-icon" aria-hidden="true">🌙</span><span>Midnight Washi</span>';
      toggleBtn.setAttribute(
        'title',
        isMidnight ? 'Switch to Light Matcha Desk' : 'Switch to Midnight Washi theme'
      );
      toggleBtn.setAttribute(
        'aria-label',
        isMidnight ? 'Switch to Matcha Desk theme' : 'Switch to Midnight Washi theme'
      );
    }

    var motionToggle = document.querySelector('button[data-mw-motion-toggle]');
    if (motionToggle) {
      motionToggle.hidden = !isMidnight;
    }

    // Motion management for Midnight Washi
    if (isMidnight && window.MidnightWashiMotion) {
      window.MidnightWashiMotion.init(body || document);
      if (isUserAction && typeof window.MidnightWashiMotion.replay === 'function') {
        window.MidnightWashiMotion.replay(body || document);
      }
    }

    // Answer reveals management
    if (isMidnight && window.MidnightWashi && typeof window.MidnightWashi.init === 'function') {
      window.MidnightWashi.init(body || document);
    }
  }

  function init() {
    var currentTheme = getEffectiveTheme();
    applyTheme(currentTheme, false);

    var toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn && !toggleBtn.__themeListenerBound) {
      toggleBtn.__themeListenerBound = true;
      toggleBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        var next = (current === 'midnight-washi') ? 'light' : 'midnight-washi';
        saveTheme(next);
        applyTheme(next, true);
      });
    }

    // Listen to OS dark-mode changes if user hasn't explicitly saved a preference
    if (window.matchMedia) {
      var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      var handler = function (e) {
        if (!getSavedTheme()) {
          applyTheme(e.matches ? 'midnight-washi' : 'light', false);
        }
      };
      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', handler);
      } else if (typeof mediaQuery.addListener === 'function') {
        mediaQuery.addListener(handler);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
