(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.SiteControls = api;
  }
}(typeof window !== "undefined" ? window : null, function () {
  "use strict";

  function setDisclosure(button, target, open) {
    button.setAttribute("aria-expanded", String(Boolean(open)));
    target.hidden = !open;
  }

  function setEnglishHidden(main, button, hidden) {
    main.toggleAttribute("data-english-hidden", Boolean(hidden));
    button.setAttribute("aria-pressed", String(Boolean(hidden)));
    button.textContent = hidden ? "Show English" : "Hide English";
  }

  function bind(doc) {
    const lessonEightNavigation = doc.querySelector(
      'body[data-page="lesson-08"] [data-lesson-navigation]',
    );
    if (
      lessonEightNavigation
      && !lessonEightNavigation.querySelector('[href="lesson-09-wishes.html"]')
    ) {
      const nextLesson = doc.createElement("a");
      nextLesson.className = "button";
      nextLesson.href = "lesson-09-wishes.html";
      nextLesson.textContent = "Next lesson: Wishes and requests";
      lessonEightNavigation.append(nextLesson);
    }

    doc.addEventListener("click", function (event) {
      const toggle = event.target.closest("[data-disclosure-target]");
      if (toggle) {
        const target = doc.getElementById(toggle.dataset.disclosureTarget);
        if (target) {
          setDisclosure(
            toggle,
            target,
            toggle.getAttribute("aria-expanded") !== "true",
          );
        }
      }

      const english = event.target.closest("[data-hide-english]");
      if (english) {
        const main = doc.querySelector("main");
        if (main) {
          setEnglishHidden(
            main,
            english,
            english.getAttribute("aria-pressed") !== "true",
          );
        }
      }
    });
  }

  return { setDisclosure, setEnglishHidden, bind };
}));

if (typeof document !== "undefined") {
  SiteControls.bind(document);
}
