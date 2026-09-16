/* Midnight Washi 1.0 — optional, dependency-free answer reveals.
   Use native <details> when a simple disclosure is enough. */
(() => {
  'use strict';
  if (window.MidnightWashi) return;
  const initialized = new WeakSet();

  function init(scope = document) {
    const buttons = [...scope.querySelectorAll('button[data-mw-toggle]')];
    if (scope.matches?.('button[data-mw-toggle]')) buttons.unshift(scope);
    for (const button of buttons) {
      if (initialized.has(button)) continue;
      const root = button.closest('.mw-theme');
      const target = button.ownerDocument.getElementById(button.dataset.mwToggle);
      if (!root || !target || target === root || target === button ||
          target.contains(button) || target.closest('.mw-theme') !== root) continue;
      const showLabel = button.dataset.mwLabelShow || button.textContent.trim() || 'Show answer';
      const hideLabel = button.dataset.mwLabelHide || 'Hide answer';
      const update = (expanded) => {
        target.hidden = !expanded;
        button.setAttribute('aria-expanded', String(expanded));
        button.textContent = expanded ? hideLabel : showLabel;
      };
      button.type = 'button';
      button.setAttribute('aria-controls', target.id);
      update(button.getAttribute('aria-expanded') === 'true');
      button.addEventListener('click', () => update(button.getAttribute('aria-expanded') !== 'true'));
      button.hidden = false;
      initialized.add(button);
    }
  }

  window.MidnightWashi = Object.freeze({ init });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init(), { once: true });
  } else {
    init();
  }
})();
