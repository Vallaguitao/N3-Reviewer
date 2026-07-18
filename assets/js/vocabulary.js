(function (root, factory) {
  const api = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.Vocabulary = api;
  }
}(typeof window !== "undefined" ? window : null, function (root) {
  "use strict";

  const normalize = value => (
    String(value || "").normalize("NFKC").trim().toLowerCase()
  );

  function uniqueValues(values) {
    return [...new Set(values || [])];
  }

  function uniqueOccurrences(values) {
    const seen = new Set();
    return (values || []).filter(occurrence => {
      const key = `${occurrence?.href || ""}\u0000${occurrence?.label || ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function mergeActiveRecords(legacyRecords, generatedPart1Records) {
    const generated = new Map(
      (generatedPart1Records || []).map(record => [record.id, record]),
    );
    const active = new Map();

    for (const record of legacyRecords || []) {
      active.set(record.id, { ...record });
    }

    for (const record of generated.values()) {
      const legacy = active.get(record.id) || {};
      active.set(record.id, {
        ...legacy,
        ...record,
        lessonIds: uniqueValues([
          ...(legacy.lessonIds || []),
          ...(record.lessonIds || []),
        ]),
        grammarIds: uniqueValues([
          ...(legacy.grammarIds || []),
          ...(record.grammarIds || []),
        ]),
        occurrences: uniqueOccurrences([
          ...(legacy.occurrences || []),
          ...(record.occurrences || []),
        ]),
      });
    }

    return [...active.values()].sort((left, right) => (
      String(left.reading || "").localeCompare(String(right.reading || ""), "ja")
      || String(left.id || "").localeCompare(String(right.id || ""), "en")
    ));
  }

  function activeRecords() {
    return mergeActiveRecords(
      root?.N3VocabularyData || [],
      root?.N3Part1VocabularyData || [],
    );
  }

  function filter(records, query, filters) {
    const term = normalize(query);
    return records.filter(record => {
      const haystack = normalize([
        record.written,
        record.reading,
        ...(record.meanings || []),
      ].join(" "));
      const matchesTerm = !term || haystack.includes(term);
      const matchesLesson = (
        !filters.lessonId
        || (record.lessonIds || []).includes(filters.lessonId)
      );
      const matchesGrammar = (
        !filters.grammarId
        || (record.grammarIds || []).includes(filters.grammarId)
      );
      const matchesPart = (
        !filters.partOfSpeech
        || record.partOfSpeech === filters.partOfSpeech
      );
      return matchesTerm && matchesLesson && matchesGrammar && matchesPart;
    });
  }

  function getById(id) {
    return activeRecords().find(
      record => record.id === id,
    ) || null;
  }

  function vocabIdFromTarget(target) {
    return target?.closest?.("[data-vocab-id]")?.dataset.vocabId || "";
  }

  function setDetailsOpen(doc, open) {
    const main = doc.querySelector("main");
    const shell = doc.querySelector("[data-vocab-details]");
    if (!main || !shell) return;

    main.toggleAttribute("data-vocab-details-open", Boolean(open));
    shell.setAttribute("aria-hidden", String(!open));
  }

  function element(doc, tag, text, className) {
    const node = doc.createElement(tag);
    node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function resolveOccurrence(doc, href) {
    const prefix = doc.body.dataset.rootPrefix || ".";
    return `${prefix}/${href}`;
  }

  function renderDetails(container, record) {
    const doc = container.ownerDocument;
    container.replaceChildren();

    if (!record) {
      container.append(
        element(
          doc,
          "p",
          "Vocabulary details are unavailable for this word.",
        ),
      );
      return;
    }

    const heading = element(doc, "h3", record.written);
    heading.lang = "ja";
    container.append(heading);
    container.append(
      element(
        doc,
        "p",
        `${record.reading} · ${record.partOfSpeech}`,
        "vocab-reading",
      ),
    );
    container.append(
      element(doc, "p", record.meanings.join("; "), "vocab-meaning"),
    );

    if (record.kanji?.length) {
      const kanjiHeading = element(doc, "h4", "Kanji in this word");
      const kanjiList = doc.createElement("ul");
      for (const item of record.kanji) {
        kanjiList.append(
          element(
            doc,
            "li",
            `${item.character} · ${item.reading} · ${item.meaning}`,
          ),
        );
      }
      container.append(kanjiHeading, kanjiList);
    }

    if (record.occurrences?.length) {
      const occurrenceHeading = element(doc, "h4", "Seen in");
      const occurrenceList = doc.createElement("ul");
      for (const occurrence of record.occurrences) {
        const item = doc.createElement("li");
        const link = element(doc, "a", occurrence.label);
        link.href = resolveOccurrence(doc, occurrence.href);
        item.append(link);
        occurrenceList.append(item);
      }
      container.append(occurrenceHeading, occurrenceList);
    }
  }

  function renderResults(container, records) {
    const doc = container.ownerDocument;
    container.replaceChildren();

    for (const record of records) {
      const button = element(
        doc,
        "button",
        `${record.written} · ${record.reading} · ${record.meanings.join("; ")}`,
        "vocab-result",
      );
      button.type = "button";
      button.dataset.vocabId = record.id;
      button.lang = "ja";
      container.append(button);
    }
  }

  function populatePartOptions(select, records) {
    if (!select || select.options.length > 1) return;
    const doc = select.ownerDocument;
    const values = [...new Set(records.map(
      record => record.partOfSpeech,
    ))].sort((a, b) => a.localeCompare(b, "en"));
    for (const value of values) {
      const option = element(doc, "option", value);
      option.value = value;
      select.append(option);
    }
  }

  function bind(doc) {
    const records = activeRecords();
    const detailsShell = doc.querySelector("[data-vocab-details]");
    const details = doc.querySelector("[data-vocab-details-content]")
      || detailsShell;
    const search = doc.querySelector("[data-vocab-search]");
    const lesson = doc.querySelector("[data-vocab-lesson]");
    const grammar = doc.querySelector("[data-vocab-grammar]");
    const part = doc.querySelector("[data-vocab-part]");
    const sort = doc.querySelector("[data-vocab-sort]");
    const results = doc.querySelector("[data-vocab-results]");
    const status = doc.querySelector("[data-vocab-status]");
    const empty = doc.querySelector("[data-vocab-empty]");
    const mobileQuery = root?.matchMedia?.("(max-width: 48rem)") || null;
    let lastSelectedWord = null;
    let restoringFocus = false;

    populatePartOptions(part, records);

    function selectRecord(id) {
      if (!details) return;
      renderDetails(
        details,
        records.find(record => record.id === id) || null,
      );
    }

    function selectFromTarget(target) {
      if (restoringFocus) return;
      const id = vocabIdFromTarget(target);
      if (!id) return;

      lastSelectedWord = target.closest?.("[data-vocab-id]") || target;
      selectRecord(id);
      if (mobileQuery?.matches && detailsShell) {
        doc.dispatchEvent(new CustomEvent("study-overlay-open", {
          detail: { kind: "vocabulary" },
        }));
        setDetailsOpen(doc, true);
      }
    }

    function closeDetails(returnFocus) {
      if (!mobileQuery?.matches) return;
      setDetailsOpen(doc, false);
      if (returnFocus && lastSelectedWord?.focus) {
        restoringFocus = true;
        lastSelectedWord.focus({ preventScroll: true });
        restoringFocus = false;
      }
    }

    function syncViewport() {
      if (!detailsShell) return;
      if (mobileQuery?.matches) {
        setDetailsOpen(doc, false);
      } else {
        doc.querySelector("main")?.removeAttribute(
          "data-vocab-details-open",
        );
        detailsShell.removeAttribute("aria-hidden");
      }
    }

    function update() {
      if (!results) return;
      const filtered = filter(records, search?.value || "", {
        lessonId: lesson?.value === "all"
          ? ""
          : lesson?.value || "",
        grammarId: grammar?.value === "all"
          ? ""
          : grammar?.value || "",
        partOfSpeech: part?.value === "all"
          ? ""
          : part?.value || "",
      });
      const key = sort?.value === "english"
        ? record => record.meanings[0]
        : record => record.reading;
      filtered.sort((a, b) => key(a).localeCompare(
        key(b),
        sort?.value === "english" ? "en" : "ja",
      ));
      renderResults(results, filtered);
      if (status) {
        status.textContent = `${filtered.length} vocabulary entries`;
      }
      if (empty) {
        empty.hidden = filtered.length !== 0;
      }
    }

    doc.addEventListener("click", event => {
      selectFromTarget(event.target);

      if (event.target.closest("[data-close-vocab-details]")) {
        closeDetails(true);
        return;
      }

      if (event.target.closest("[data-clear-filters]")) {
        if (search) search.value = "";
        if (lesson) lesson.value = "all";
        if (grammar) grammar.value = "all";
        if (part) part.value = "all";
        if (sort) sort.value = "reading";
        update();
        search?.focus();
      }
    });

    doc.addEventListener("mouseover", event => {
      selectFromTarget(event.target);
    });

    doc.addEventListener("focusin", event => {
      selectFromTarget(event.target);
    });

    doc.addEventListener("keydown", event => {
      if (event.key === "Escape") closeDetails(false);
    });

    doc.addEventListener("study-overlay-open", event => {
      if (event.detail?.kind !== "vocabulary") closeDetails(false);
    });

    mobileQuery?.addEventListener?.("change", syncViewport);

    [search, lesson, grammar, part, sort].filter(Boolean).forEach(control => {
      control.addEventListener(
        control.tagName === "INPUT" ? "input" : "change",
        update,
      );
    });

    update();
    syncViewport();
  }

  return {
    normalize,
    mergeActiveRecords,
    activeRecords,
    filter,
    getById,
    vocabIdFromTarget,
    setDetailsOpen,
    renderDetails,
    renderResults,
    bind,
  };
}));

if (typeof document !== "undefined") {
  Vocabulary.bind(document);
}
