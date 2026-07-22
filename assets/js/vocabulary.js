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

  const INITIAL_VISIBLE_RESULTS = 50;
  const RESULT_BATCH_SIZE = 50;
  const COUNT_FORMAT = new Intl.NumberFormat("en-US");

  const LEARNER_PART_ORDER = Object.freeze([
    "Noun",
    "Group 1 Verb",
    "Group 2 Verb",
    "Group 3 Verb",
    "I-Adjective",
    "Na-Adjective",
    "Special Na-Adjective Ending in I",
    "Adverb",
    "Expression",
    "Pronoun",
    "Conjunction",
    "Counter or Number",
    "Other",
  ]);
  const TOPIC_OPTIONS = Object.freeze([
    ["time-dates-schedules", "Time, Dates and Schedules"],
    ["people-family-relationships", "People, Family and Relationships"],
    ["body-health", "Body and Health"],
    ["feelings-personality", "Feelings and Personality"],
    ["food-cooking", "Food and Cooking"],
    ["home-daily-life", "Home and Daily Life"],
    ["school-study", "School and Study"],
    ["work-business", "Work and Business"],
    ["money-shopping", "Money and Shopping"],
    ["travel-transportation", "Travel and Transportation"],
    ["places-directions", "Places and Directions"],
    ["nature-weather", "Nature and Weather"],
    ["communication-media", "Communication and Media"],
    ["technology", "Technology"],
    ["society-public-services", "Society and Public Services"],
  ].map(option => Object.freeze(option)));

  function partOfSpeechValues(record) {
    const value = record?.partOfSpeech;
    return Array.isArray(value) ? [...value] : value ? [value] : [];
  }

  function partOfSpeechLabel(record) {
    return partOfSpeechValues(record).join(" / ");
  }

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
        || partOfSpeechValues(record).includes(filters.partOfSpeech)
      );
      const matchesTopic = (
        !filters.topicId
        || (record.topicIds || []).includes(filters.topicId)
      );
      return matchesTerm && matchesGrammar && matchesPart && matchesTopic;
    });
  }

  function sortByReading(records) {
    return [...records].sort((a, b) => (
      normalize(a.reading).localeCompare(normalize(b.reading), "ja")
    ));
  }

  function safeNonnegativeInteger(value) {
    const number = Number(value);
    if (!Number.isFinite(number) || number <= 0) return 0;
    return Math.min(Math.floor(number), Number.MAX_SAFE_INTEGER);
  }

  function visibleResultState(total, requestedLimit) {
    const safeTotal = safeNonnegativeInteger(total);
    const visible = Math.min(
      safeTotal,
      safeNonnegativeInteger(requestedLimit),
    );
    let status = "No vocabulary entries match these filters.";
    if (safeTotal > 0 && visible >= safeTotal) {
      const noun = safeTotal === 1 ? "entry" : "entries";
      status = `Showing all ${COUNT_FORMAT.format(safeTotal)} vocabulary ${noun}.`;
    } else if (safeTotal > 0) {
      status = (
        `Showing ${COUNT_FORMAT.format(visible)} of `
        + `${COUNT_FORMAT.format(safeTotal)} vocabulary entries.`
      );
    }
    return Object.freeze({
      total: safeTotal,
      visible,
      hasMore: visible < safeTotal,
      status,
    });
  }

  function resultWindow(records, requestedLimit, deepLinkedRecord) {
    const source = Array.isArray(records) ? records : [];
    if (
      deepLinkedRecord
      && typeof deepLinkedRecord === "object"
      && !Array.isArray(deepLinkedRecord)
    ) {
      return [deepLinkedRecord];
    }
    const state = visibleResultState(source.length, requestedLimit);
    return source.slice(0, state.visible);
  }

  function nextVisibleLimit(currentLimit, total) {
    const safeTotal = safeNonnegativeInteger(total);
    const safeCurrent = safeNonnegativeInteger(currentLimit);
    return Math.min(safeTotal, safeCurrent + RESULT_BATCH_SIZE);
  }

  function selectedFilterValue(control) {
    return control?.value && control.value !== "all" ? control.value : "";
  }

  function bankStateFromControls(controls = {}) {
    return {
      query: controls.search?.value || "",
      filters: {
        grammarId: selectedFilterValue(controls.grammar),
        partOfSpeech: selectedFilterValue(controls.part),
        topicId: selectedFilterValue(controls.topic),
      },
    };
  }

  function resetBankControls(controls = {}) {
    if (controls.search) controls.search.value = "";
    if (controls.grammar) controls.grammar.value = "all";
    if (controls.part) controls.part.value = "all";
    if (controls.topic) controls.topic.value = "all";
  }

  function getById(id) {
    return activeRecords().find(
      record => record.id === id,
    ) || null;
  }

  function vocabIdFromTarget(target) {
    return target?.closest?.("[data-vocab-id]")?.dataset.vocabId || "";
  }

  function isDetailsNavigationTarget(target) {
    return Boolean(target?.closest?.("[data-vocab-details] a[href]"));
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
      partOfSpeech: partOfSpeechLabel(record),
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
        "",
        "vocab-result",
      );
      button.type = "button";
      button.dataset.vocabId = record.id;
      button.id = `vocab-result-${record.id}`;
      const japanese = element(
        doc,
        "span",
        `${record.written} · ${record.reading}`,
        "vocab-result-japanese",
      );
      japanese.lang = "ja";
      const separator = element(
        doc,
        "span",
        " · ",
        "vocab-result-separator",
      );
      separator.setAttribute("aria-hidden", "true");
      const meanings = element(
        doc,
        "span",
        record.meanings.join("; "),
        "vocab-result-meanings",
      );
      meanings.lang = "en";
      button.append(japanese, separator, meanings);
      container.append(button);
    }
  }

  function focusResultAt(container, index) {
    if (!container || !Number.isInteger(index) || index < 0) return null;
    const results = container.querySelectorAll?.("[data-vocab-id]") || [];
    const result = results[index] || null;
    if (!result) return null;
    result.focus?.({ preventScroll: true });
    result.scrollIntoView?.({ block: "nearest" });
    return result;
  }

  function populatePartOptions(select, records) {
    if (!select || select.options.length > 1) return;
    const doc = select.ownerDocument;
    const values = [...new Set(records.flatMap(partOfSpeechValues))]
      .sort((a, b) => {
        const aIndex = LEARNER_PART_ORDER.indexOf(a);
        const bIndex = LEARNER_PART_ORDER.indexOf(b);
        if (aIndex !== -1 || bIndex !== -1) {
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;
          return aIndex - bIndex;
        }
        return a.localeCompare(b, "en");
      });
    for (const value of values) {
      const option = element(doc, "option", value);
      option.value = value;
      select.append(option);
    }
  }

  function populateTopicOptions(select) {
    if (!select || select.options.length > 1) return;
    const doc = select.ownerDocument;
    for (const [value, label] of TOPIC_OPTIONS) {
      const option = element(doc, "option", label);
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
    const topic = doc.querySelector("[data-vocab-topic]");
    const results = doc.querySelector("[data-vocab-results]");
    const showMore = doc.querySelector("[data-vocab-show-more]");
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
    let visibleLimit = INITIAL_VISIBLE_RESULTS;
    let lastSelectedWord = null;
    let restoringFocus = false;
    let hoverClose = null;

    populatePartOptions(part, records);
    populateTopicOptions(topic);

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
      const state = bankStateFromControls({ search, grammar, part, topic });
      const filtered = sortByReading(filter(records, state.query, state.filters));
      const linkedRecord = useDeepLink ? deepLinkedRecord : null;
      const displayed = resultWindow(filtered, visibleLimit, linkedRecord);
      const resultState = linkedRecord
        ? visibleResultState(1, 1)
        : visibleResultState(filtered.length, visibleLimit);
      renderResults(results, displayed);
      if (status) {
        status.textContent = resultState.status;
      }
      if (empty) {
        empty.hidden = filtered.length !== 0;
      }
      if (showMore) {
        showMore.hidden = Boolean(linkedRecord || !resultState.hasMore);
      }

      if (linkedRecord) {
        const result = [...results.querySelectorAll("[data-vocab-id]")]
          .find(node => node.dataset.vocabId === linkedRecord.id);
        if (result) {
          result.dataset.vocabDeepLinked = "";
          selectRecord(linkedRecord.id);
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

      const reveal = event.target.closest("[data-vocab-show-more]");
      if (reveal && results) {
        const firstNewIndex = results.querySelectorAll("[data-vocab-id]").length;
        visibleLimit = nextVisibleLimit(visibleLimit, records.length);
        update();
        focusResultAt(results, firstNewIndex);
        return;
      }

      if (event.target.closest("[data-clear-filters]")) {
        resetBankControls({ search, grammar, part, topic });
        visibleLimit = INITIAL_VISIBLE_RESULTS;
        deepLinkedRecord = null;
        update();
        search?.focus();
        return;
      }

      if (isDetailsNavigationTarget(event.target)) return;

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

    [search, grammar, part, topic].filter(Boolean).forEach(control => {
      control.addEventListener(
        control.tagName === "INPUT" ? "input" : "change",
        () => {
          visibleLimit = INITIAL_VISIBLE_RESULTS;
          deepLinkedRecord = null;
          update();
        },
      );
    });

    update(true);
    syncViewport();
  }

  return {
    INITIAL_VISIBLE_RESULTS,
    RESULT_BATCH_SIZE,
    normalize,
    partOfSpeechValues,
    partOfSpeechLabel,
    topicOptions: TOPIC_OPTIONS,
    activeRecords,
    filter,
    sortByReading,
    visibleResultState,
    resultWindow,
    nextVisibleLimit,
    bankStateFromControls,
    resetBankControls,
    getById,
    vocabIdFromTarget,
    isDetailsNavigationTarget,
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
    focusResultAt,
    bind,
  };
}));

if (typeof document !== "undefined") {
  Vocabulary.bind(document);
}
