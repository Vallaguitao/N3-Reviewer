(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.ReadingLens = api;
  }
}(typeof window !== "undefined" ? window : null, function () {
  "use strict";

  function setWord(button, visible) {
    button.toggleAttribute("data-reading-visible", Boolean(visible));
    button.setAttribute("aria-pressed", String(Boolean(visible)));
  }

  function setAll(root, visible) {
    const scope = (
      typeof root.matches === "function" && root.matches("main")
    )
      ? root
      : root.querySelector("main") || root.documentElement;

    scope.toggleAttribute("data-all-readings", Boolean(visible));
    if (!visible) {
      scope.querySelectorAll(".reading-word").forEach(button => {
        setWord(button, false);
      });
    }
    scope.querySelectorAll("[data-show-readings]").forEach(button => {
      button.setAttribute("aria-pressed", String(Boolean(visible)));
      button.textContent = visible
        ? "Hide all readings"
        : "Show all readings";
    });
  }

  function setSettingsOpen(doc, open) {
    const main = doc.querySelector("main");
    const trigger = doc.querySelector("[data-reading-settings-trigger]");
    const panel = doc.querySelector("[data-reading-settings-panel]");
    if (!main || !trigger || !panel) return;

    main.toggleAttribute("data-reading-settings-open", Boolean(open));
    trigger.setAttribute("aria-expanded", String(Boolean(open)));
    panel.hidden = !open;
  }

  function bind(root) {
    root.documentElement?.classList.add("lesson-tools-ready");
    setSettingsOpen(root, false);

    root.addEventListener("click", event => {
      const word = event.target.closest(".reading-word");
      if (word) {
        setWord(word, !word.hasAttribute("data-reading-visible"));
      }

      const all = event.target.closest("[data-show-readings]");
      if (all) {
        setAll(root, all.getAttribute("aria-pressed") !== "true");
      }

      const trigger = event.target.closest("[data-reading-settings-trigger]");
      if (trigger) {
        const opening = trigger.getAttribute("aria-expanded") !== "true";
        if (opening) {
          root.dispatchEvent(new CustomEvent("study-overlay-open", {
            detail: { kind: "reading" },
          }));
        }
        setSettingsOpen(root, opening);
        return;
      }

      if (event.target.closest("[data-close-reading-settings]")) {
        setSettingsOpen(root, false);
        root.querySelector("[data-reading-settings-trigger]")?.focus();
        return;
      }

      const main = root.querySelector("main");
      if (
        main?.hasAttribute("data-reading-settings-open")
        && !event.target.closest("[data-reading-settings-panel]")
      ) {
        setSettingsOpen(root, false);
      }
    });

    root.addEventListener("keydown", event => {
      if (event.key === "Escape") setSettingsOpen(root, false);
    });

    root.addEventListener("study-overlay-open", event => {
      if (event.detail?.kind !== "reading") {
        setSettingsOpen(root, false);
      }
    });
  }

  return { setWord, setAll, setSettingsOpen, bind };
}));

if (typeof document !== "undefined") {
  ReadingLens.bind(document);
}
