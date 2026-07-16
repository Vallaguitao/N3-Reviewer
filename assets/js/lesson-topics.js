(function (root, factory) {
  const api = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.LessonTopics = api;
  }
}(typeof window !== "undefined" ? window : null, function () {
  "use strict";

  function hashId(hash) {
    const value = String(hash || "").replace(/^#/, "");
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  }

  function resolveTopicId(topicIds, hash, ownerId) {
    const requested = hashId(hash);
    if (topicIds.includes(requested)) return requested;
    if (topicIds.includes(ownerId)) return ownerId;
    return topicIds[0] || "";
  }

  function neighbors(topicIds, activeId) {
    const index = Math.max(0, topicIds.indexOf(activeId));
    return {
      previous: topicIds[index - 1] || "",
      next: topicIds[index + 1] || "",
      index,
      total: topicIds.length,
    };
  }

  function activate(doc, hash) {
    const panels = [...doc.querySelectorAll("[data-topic-panel]")];
    if (!panels.length) return "";

    const topicIds = panels.map(panel => panel.id);
    const requested = doc.getElementById(hashId(hash));
    const ownerId = requested?.closest("[data-topic-panel]")?.id || "";
    const activeId = resolveTopicId(topicIds, hash, ownerId);

    panels.forEach(panel => {
      panel.hidden = panel.id !== activeId;
    });
    doc.querySelector("main")?.setAttribute("data-topic-reader-ready", "");
    doc.querySelectorAll("[data-topic-link]").forEach(link => {
      const active = link.getAttribute("href") === `#${activeId}`;
      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
    return activeId;
  }

  function bind(doc, view) {
    if (!doc.querySelector("[data-topic-panel]")) return;
    const update = () => activate(doc, view.location.hash);
    update();
    view.addEventListener("hashchange", update);
  }

  return {
    hashId,
    resolveTopicId,
    neighbors,
    activate,
    bind,
  };
}));

if (typeof document !== "undefined") {
  LessonTopics.bind(document, window);
}
