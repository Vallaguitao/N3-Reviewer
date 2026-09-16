(function () {
  'use strict';
  try {
    var stored = localStorage.getItem('n3-theme');
    var isDark = false;
    if (stored === 'midnight-washi') {
      isDark = true;
    } else if (stored === 'light') {
      isDark = false;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDark = true;
    }
    var root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'midnight-washi');
      root.classList.add('mw-theme');
    } else {
      root.setAttribute('data-theme', 'light');
      root.classList.remove('mw-theme');
    }
  } catch (e) {
    /* Ignore storage access errors in private browsing */
  }
})();
