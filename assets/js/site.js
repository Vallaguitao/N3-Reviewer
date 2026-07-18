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

  function setStudyMenu(menu, open) {
    if (!menu) return;
    menu.toggleAttribute("open", Boolean(open));
    const trigger = menu.querySelector("[data-study-menu-trigger]");
    if (trigger) {
      trigger.setAttribute("aria-expanded", String(Boolean(open)));
    }
  }

  function closeStudyMenus(doc, except = null) {
    doc.querySelectorAll("[data-study-menu][open]").forEach((menu) => {
      if (menu !== except) setStudyMenu(menu, false);
    });
  }

  function createStudyHoverHandlers(doc, menu, view) {
    let leaveTimer = null;
    return {
      enter() {
        if (leaveTimer !== null) {
          view.clearTimeout(leaveTimer);
          leaveTimer = null;
        }
        closeStudyMenus(doc, menu);
        setStudyMenu(menu, true);
      },
      leave() {
        if (leaveTimer !== null) view.clearTimeout(leaveTimer);
        leaveTimer = view.setTimeout(function () {
          leaveTimer = null;
          setStudyMenu(menu, false);
        }, 180);
      },
    };
  }

  function handleStudyTriggerKeydown(doc, menu, event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    const nextOpen = !menu.open;
    if (nextOpen) closeStudyMenus(doc, menu);
    setStudyMenu(menu, nextOpen);
  }

  function bind(doc) {
    const studyMenus = Array.from(doc.querySelectorAll("[data-study-menu]"));
    studyMenus.forEach((menu) => {
      setStudyMenu(menu, menu.open);
      menu.addEventListener("toggle", function () {
        setStudyMenu(menu, menu.open);
        if (menu.open) closeStudyMenus(doc, menu);
      });
      const trigger = menu.querySelector("[data-study-menu-trigger]");
      if (trigger) {
        trigger.addEventListener("keydown", function (event) {
          handleStudyTriggerKeydown(doc, menu, event);
        });
      }
    });

    const view = doc.defaultView;
    const hoverEnabled = Boolean(
      view
      && typeof view.matchMedia === "function"
      && view.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
    if (hoverEnabled) {
      studyMenus.forEach((menu) => {
        const hover = createStudyHoverHandlers(doc, menu, view);
        menu.addEventListener("pointerenter", hover.enter);
        menu.addEventListener("pointerleave", hover.leave);
      });
    }

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
      if (!event.target.closest("[data-study-menu]")) {
        closeStudyMenus(doc);
      }

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

    doc.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      const menu = doc.querySelector("[data-study-menu][open]");
      if (!menu) return;
      const trigger = menu.querySelector("[data-study-menu-trigger]");
      setStudyMenu(menu, false);
      if (trigger) trigger.focus();
    });
  }

  return {
    setDisclosure,
    setEnglishHidden,
    setStudyMenu,
    closeStudyMenus,
    createStudyHoverHandlers,
    handleStudyTriggerKeydown,
    bind,
  };
}));

if (typeof document !== "undefined") {
  SiteControls.bind(document);
}
