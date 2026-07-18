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

  function activeRecords() {
    return Object.freeze([...(root?.N3VocabularyData || [])]);
  }

  function filter(records, query, filters = {}) {
    const term = normalize(query);
    return records.filter(record => {
      const haystack = normalize([
        record.written,
        record.reading,
        ...(record.meanings || []),
      ].join(" "));
      const matchesTerm = !term || haystack.includes(term);
      const matchesGrammar = (
        !filters.grammarId
        || (record.grammarIds || []).includes(filters.grammarId)
      );
      const matchesPart = (
        !filters.partOfSpeech
        || record.partOfSpeech === filters.partOfSpeech
      );
      return matchesTerm && matchesGrammar && matchesPart;
    });
  }

  function sortByReading(records) {
    return [...records].sort((a, b) => (
      normalize(a.reading).localeCompare(normalize(b.reading), "ja")
    ));
  }

  function getById(id) {
    return activeRecords().find(
      record => record.id === id,
    ) || null;
  }

  function vocabIdFromTarget(target) {
    return target?.closest?.("[data-vocab-id]")?.dataset.vocabId || "";
  }

  function contextFromTarget(target) {
    const word = target?.closest?.("[data-vocab-id]") || null;
    if (!word) return { surface: "", surfaceReading: "", contextMeaning: "" };
    return {
      surface: String(word.textContent || "").trim(),
      surfaceReading: String(word.dataset?.surfaceReading || "").trim(),
      contextMeaning: String(word.dataset?.contextMeaning || "").trim(),
    };
  }

  function detailModel(record, context = {}) {
    if (!record) return null;
    const dictionary = {
      written: record.written,
      reading: record.reading,
      meanings: [...(record.meanings || [])],
      partOfSpeech: record.partOfSpeech,
    };
    const surface = String(context.surface || "").trim();
    const surfaceReading = String(context.surfaceReading || "").trim();
    const contextMeaning = String(context.contextMeaning || "").trim();
    const contextual = (
      (surface && surface !== record.written)
      || (surfaceReading && surfaceReading !== record.reading)
      || (contextMeaning && !(record.meanings || []).includes(contextMeaning))
    ) ? {
        surface: surface || record.written,
        reading: surfaceReading || record.reading,
        meaning: contextMeaning || (record.meanings || []).join("; "),
      } : null;
    return {
      contextual,
      dictionary,
      wholeWord: {
        written: record.written,
        reading: record.reading,
        meaning: (record.meanings || []).join("; "),
      },
      compounds: [...(record.compounds || [])],
      kanji: [...(record.kanji || [])],
      occurrences: [...(record.occurrences || [])],
    };
  }

  function vocabularyBankHref(prefix, id) {
    return (
      `${prefix || "."}/vocabulary.html?vocab=${encodeURIComponent(id)}`
    );
  }

  function requestedVocabularyId(search) {
    return new URLSearchParams(String(search || "")).get("vocab") || "";
  }

  function positionAnchoredCard(anchorRect, cardRect, viewport) {
    const margin = viewport.margin ?? 12;
    const gap = viewport.gap ?? 10;
    const maxLeft = Math.max(margin, viewport.width - margin - cardRect.width);
    const left = Math.min(Math.max(anchorRect.left, margin), maxLeft);
    const below = anchorRect.bottom + gap;
    const above = anchorRect.top - gap - cardRect.height;
    const placement = (
      below + cardRect.height <= viewport.height - margin
      || above < margin
    ) ? "bottom" : "top";
    const preferredTop = placement === "bottom" ? below : above;
    const maxTop = Math.max(margin, viewport.height - margin - cardRect.height);
    const top = Math.min(Math.max(preferredTop, margin), maxTop);
    return { left, top, placement };
  }

  function isVocabInteractionTarget(node, word, detailsShell) {
    if (!node) return false;
    return Boolean(
      word && (node === word || word.contains?.(node))
      || detailsShell && (
        node === detailsShell || detailsShell.contains?.(node)
      ),
    );
  }

  function resetDetailsScroll(detailsShell) {
    if (detailsShell) detailsShell.scrollTop = 0;
  }

  function createHoverCloseController({
    delay = 120,
    isInteractionActive,
    onClose,
    setTimer = setTimeout,
    clearTimer = clearTimeout,
  } = {}) {
    let closeTimer = null;

    function cancel() {
      if (closeTimer === null) return;
      clearTimer(closeTimer);
      closeTimer = null;
    }

    function schedule() {
      cancel();
      closeTimer = setTimer(() => {
        closeTimer = null;
        if (!isInteractionActive?.()) onClose?.();
      }, delay);
    }

    return { schedule, cancel };
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

  function renderDetails(
    container,
    record,
    { vocabularyHref = "", desktopHint = false, context = {} } = {},
  ) {
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

    const model = detailModel(record, context);
    const heading = element(
      doc,
      "h3",
      model.contextual?.surface || model.dictionary.written,
    );
    heading.lang = "ja";
    container.append(heading);
    if (model.contextual) {
      container.append(
        element(
          doc,
          "p",
          model.contextual.reading,
          "vocab-reading vocab-contextual",
        ),
        element(
          doc,
          "p",
          model.contextual.meaning,
          "vocab-meaning vocab-contextual",
        ),
        element(doc, "h4", "Dictionary form"),
      );
    }
    container.append(
      element(
        doc,
        "p",
        `${model.dictionary.written} · ${model.dictionary.reading} · ${model.dictionary.partOfSpeech}`,
        "vocab-reading vocab-dictionary",
      ),
    );
    container.append(
      element(
        doc,
        "p",
        model.dictionary.meanings.join("; "),
        "vocab-meaning vocab-dictionary",
      ),
    );

    const wholeHeading = element(doc, "h4", "Whole word");
    const wholeSurface = element(
      doc,
      "p",
      `${model.wholeWord.written} · ${model.wholeWord.reading}`,
      "vocab-whole-word",
    );
    wholeSurface.lang = "ja";
    container.append(
      wholeHeading,
      wholeSurface,
      element(doc, "p", model.wholeWord.meaning, "vocab-meaning"),
    );

    if (model.compounds.length) {
      const compoundHeading = element(doc, "h4", "Compound units");
      const compoundList = doc.createElement("ul");
      compoundList.className = "vocab-compounds";
      for (const item of model.compounds) {
        const compound = element(
          doc,
          "li",
          `${item.written} · ${item.reading} · ${item.meaning}`,
        );
        compound.lang = "ja";
        compoundList.append(compound);
      }
      container.append(compoundHeading, compoundList);
    }

    if (model.kanji.length) {
      const kanjiHeading = element(doc, "h4", "Kanji in this word");
      const kanjiList = doc.createElement("ul");
      kanjiList.className = "vocab-kanji-list";
      for (const item of model.kanji) {
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

    if (model.occurrences.length) {
      const occurrenceHeading = element(doc, "h4", "Seen in");
      const occurrenceList = doc.createElement("ul");
      for (const occurrence of model.occurrences) {
        const item = doc.createElement("li");
        const link = element(doc, "a", occurrence.label);
        link.href = resolveOccurrence(doc, occurrence.href);
        item.append(link);
        occurrenceList.append(item);
      }
      container.append(occurrenceHeading, occurrenceList);
    }

    if (vocabularyHref) {
      const link = element(
        doc,
        "a",
        "Go to this word in Vocabulary",
        "button vocab-bank-link",
      );
      link.href = vocabularyHref;
      link.dataset.vocabBankLink = "";
      container.append(link);
    } else if (desktopHint) {
      container.append(element(
        doc,
        "p",
        "Click the word to open it in Vocabulary.",
        "vocab-desktop-hint",
      ));
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
      button.id = `vocab-result-${record.id}`;
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
    const grammar = doc.querySelector("[data-vocab-grammar]");
    const part = doc.querySelector("[data-vocab-part]");
    const results = doc.querySelector("[data-vocab-results]");
    const status = doc.querySelector("[data-vocab-status]");
    const empty = doc.querySelector("[data-vocab-empty]");
    const mobileQuery = root?.matchMedia?.("(max-width: 48rem)") || null;
    const isVocabularyBank = Boolean(results);
    const prefix = doc.body.dataset.rootPrefix || ".";
    let deepLinkedRecord = isVocabularyBank
      ? records.find(record => (
        record.id === requestedVocabularyId(root?.location?.search)
      )) || null
      : null;
    let lastSelectedWord = null;
    let restoringFocus = false;
    let hoverClose = null;

    populatePartOptions(part, records);

    function selectRecord(id, options = {}) {
      if (!details) return;
      renderDetails(
        details,
        records.find(record => record.id === id) || null,
        options,
      );
    }

    function positionDetails() {
      if (
        isVocabularyBank
        || mobileQuery?.matches
        || !lastSelectedWord
        || !detailsShell
      ) return;
      const anchorRect = lastSelectedWord.getBoundingClientRect();
      const cardRect = detailsShell.getBoundingClientRect();
      const position = positionAnchoredCard(anchorRect, cardRect, {
        width: root.innerWidth,
        height: root.innerHeight,
        margin: 12,
        gap: 10,
      });
      detailsShell.style.setProperty(
        "--vocab-card-left",
        `${position.left}px`,
      );
      detailsShell.style.setProperty(
        "--vocab-card-top",
        `${position.top}px`,
      );
      detailsShell.dataset.vocabPlacement = position.placement;
    }

    function selectFromTarget(target) {
      if (restoringFocus) return;
      const id = vocabIdFromTarget(target);
      if (!id) return;

      hoverClose?.cancel();
      lastSelectedWord = target.closest?.("[data-vocab-id]") || target;
      if (isVocabularyBank) {
        selectRecord(id);
        return;
      }

      const href = vocabularyBankHref(prefix, id);
      const context = contextFromTarget(lastSelectedWord);
      selectRecord(id, mobileQuery?.matches
        ? { vocabularyHref: href, context }
        : { desktopHint: true, context });
      resetDetailsScroll(detailsShell);
      lastSelectedWord.setAttribute?.("aria-expanded", "true");
      if (mobileQuery?.matches && detailsShell) {
        doc.dispatchEvent(new CustomEvent("study-overlay-open", {
          detail: { kind: "vocabulary" },
        }));
        setDetailsOpen(doc, true);
      } else if (detailsShell) {
        setDetailsOpen(doc, true);
        positionDetails();
      }
    }

    function closeDetails(returnFocus) {
      if (isVocabularyBank) return;
      hoverClose?.cancel();
      const focusTarget = lastSelectedWord;
      lastSelectedWord?.setAttribute?.("aria-expanded", "false");
      setDetailsOpen(doc, false);
      if (returnFocus && focusTarget?.focus) {
        restoringFocus = true;
        focusTarget.focus({ preventScroll: true });
        restoringFocus = false;
      }
      lastSelectedWord = null;
    }

    hoverClose = createHoverCloseController({
      isInteractionActive: () => Boolean(
        isVocabInteractionTarget(
          doc.activeElement,
          lastSelectedWord,
          detailsShell,
        )
        || lastSelectedWord?.matches?.(":hover")
        || detailsShell?.matches?.(":hover"),
      ),
      onClose: () => closeDetails(false),
    });

    function syncViewport() {
      if (!detailsShell || isVocabularyBank) return;
      closeDetails(false);
    }

    function update(useDeepLink = false) {
      if (!results) return;
      const filtered = sortByReading(filter(records, search?.value || "", {
        grammarId: grammar?.value === "all"
          ? ""
          : grammar?.value || "",
        partOfSpeech: part?.value === "all"
          ? ""
          : part?.value || "",
      }));
      const displayed = useDeepLink && deepLinkedRecord
        ? [deepLinkedRecord]
        : filtered;
      renderResults(results, displayed);
      if (status) {
        status.textContent = `${displayed.length} vocabulary entries`;
      }
      if (empty) {
        empty.hidden = displayed.length !== 0;
      }

      if (useDeepLink && deepLinkedRecord) {
        const result = [...results.querySelectorAll("[data-vocab-id]")]
          .find(node => node.dataset.vocabId === deepLinkedRecord.id);
        if (result) {
          result.dataset.vocabDeepLinked = "";
          selectRecord(deepLinkedRecord.id);
          result.scrollIntoView?.({ block: "center" });
          result.focus?.({ preventScroll: true });
        }
      }
    }

    doc.addEventListener("click", event => {
      if (event.target.closest("[data-close-vocab-details]")) {
        closeDetails(true);
        return;
      }

      if (event.target.closest("[data-clear-filters]")) {
        if (search) search.value = "";
        if (grammar) grammar.value = "all";
        if (part) part.value = "all";
        deepLinkedRecord = null;
        update();
        search?.focus();
        return;
      }

      const id = vocabIdFromTarget(event.target);
      if (!id) return;
      if (isVocabularyBank || mobileQuery?.matches) {
        selectFromTarget(event.target);
      } else if (root?.location) {
        root.location.href = vocabularyBankHref(prefix, id);
      }
    });

    doc.addEventListener("mouseover", event => {
      if (!isVocabularyBank && !mobileQuery?.matches) {
        if (isVocabInteractionTarget(
          event.target,
          lastSelectedWord,
          detailsShell,
        )) {
          hoverClose.cancel();
        }
        selectFromTarget(event.target);
      }
    });

    doc.addEventListener("mouseout", event => {
      if (isVocabularyBank || mobileQuery?.matches) return;
      const word = event.target.closest?.("[data-vocab-id]");
      const leftWord = Boolean(word && word === lastSelectedWord);
      const leftPopup = Boolean(
        detailsShell && (
          event.target === detailsShell
          || detailsShell.contains?.(event.target)
        ),
      );
      if (!leftWord && !leftPopup) return;
      if (isVocabInteractionTarget(
        event.relatedTarget,
        lastSelectedWord,
        detailsShell,
      )) return;
      if (isVocabInteractionTarget(
        doc.activeElement,
        lastSelectedWord,
        detailsShell,
      )) return;
      hoverClose.schedule();
    });

    doc.addEventListener("focusin", event => {
      if (isVocabInteractionTarget(
        event.target,
        lastSelectedWord,
        detailsShell,
      )) {
        hoverClose.cancel();
        if (detailsShell?.contains?.(event.target)) return;
      }
      selectFromTarget(event.target);
    });

    doc.addEventListener("focusout", event => {
      if (isVocabularyBank || mobileQuery?.matches) return;
      const word = event.target.closest?.("[data-vocab-id]");
      const leftWord = Boolean(word && word === lastSelectedWord);
      const leftPopup = Boolean(
        detailsShell && (
          event.target === detailsShell
          || detailsShell.contains?.(event.target)
        ),
      );
      if (!leftWord && !leftPopup) return;
      if (isVocabInteractionTarget(
        event.relatedTarget,
        lastSelectedWord,
        detailsShell,
      )) return;
      hoverClose.schedule();
    });

    doc.addEventListener("keydown", event => {
      if (event.key === "Escape") closeDetails(false);
    });

    doc.addEventListener("study-overlay-open", event => {
      if (event.detail?.kind !== "vocabulary") closeDetails(false);
    });

    mobileQuery?.addEventListener?.("change", syncViewport);
    root?.addEventListener?.("resize", positionDetails);
    root?.addEventListener?.("scroll", positionDetails, { passive: true });

    [search, grammar, part].filter(Boolean).forEach(control => {
      control.addEventListener(
        control.tagName === "INPUT" ? "input" : "change",
        () => {
          deepLinkedRecord = null;
          update();
        },
      );
    });

    update(true);
    syncViewport();
  }

  return {
    normalize,
    activeRecords,
    filter,
    sortByReading,
    getById,
    vocabIdFromTarget,
    contextFromTarget,
    detailModel,
    vocabularyBankHref,
    requestedVocabularyId,
    positionAnchoredCard,
    isVocabInteractionTarget,
    resetDetailsScroll,
    createHoverCloseController,
    setDetailsOpen,
    renderDetails,
    renderResults,
    bind,
  };
}));

if (typeof document !== "undefined") {
  Vocabulary.bind(document);
}
