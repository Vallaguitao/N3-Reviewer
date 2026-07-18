(function (root, factory) {
  const api = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.Quiz = api;
  }
}(typeof window !== "undefined" ? window : null, function (root) {
  "use strict";

  function scoreSelection(selected, correct) {
    return { correct: selected === correct };
  }

  function scoreTextAnswer(selected, correct) {
    const answer = String(selected || "").trim();
    const accepted = Array.isArray(correct) ? correct : [correct];
    return {
      correct: accepted.some(value => answer === String(value || "").trim()),
    };
  }

  function scoreMultiSelection(selected, correct) {
    const selectedValues = [...selected].sort();
    const correctValues = [...correct].sort();
    return {
      correct: (
        selectedValues.length === correctValues.length
        && selectedValues.every((value, index) => value === correctValues[index])
      ),
    };
  }

  function scoreOrder(selectedIds, correctIds) {
    const firstMismatch = correctIds.findIndex(
      (id, index) => selectedIds[index] !== id,
    );
    return {
      correct: (
        firstMismatch === -1
        && selectedIds.length === correctIds.length
      ),
      firstMismatch,
    };
  }

  function summarize(results) {
    const answered = results.filter(Boolean);
    return {
      answered: answered.length,
      correct: answered.filter(result => result.correct).length,
    };
  }

  function orderButtonLabel(direction, tokenText) {
    return `Move ${String(tokenText || "").trim()} ${direction}`;
  }

  function quizRecords(
    legacyRecords = root?.N3QuizData || [],
    generatedRecords = root?.N3Part1BookQuizData || [],
  ) {
    const records = [];
    const seen = new Set();
    for (const record of [...generatedRecords, ...legacyRecords]) {
      if (!record?.id || seen.has(record.id)) continue;
      seen.add(record.id);
      records.push(record);
    }
    return records;
  }

  function recordForId(
    id,
    legacyRecords = root?.N3QuizData || [],
    generatedRecords = root?.N3Part1BookQuizData || [],
  ) {
    return quizRecords(legacyRecords, generatedRecords).find(
      item => item.id === id,
    ) || null;
  }

  function recordFor(question) {
    return recordForId(question?.dataset?.quizId);
  }

  function ensureHint(question, record) {
    const hasHint = [...question.querySelectorAll("details > summary")]
      .some(summary => summary.textContent.trim() === "Hint");
    if (hasHint || !record?.hint) return null;

    const doc = question.ownerDocument;
    const details = doc.createElement("details");
    const summary = doc.createElement("summary");
    const copy = doc.createElement("p");
    details.className = "nuance-note quiz-hint";
    summary.textContent = "Hint";
    copy.textContent = record.hint;
    details.append(summary, copy);
    question.prepend(details);
    return details;
  }

  function ensureControls(question, record) {
    if (!record || question.querySelector('[role="status"]')) return;
    const doc = question.ownerDocument;
    const toolbar = doc.createElement("div");
    toolbar.className = "toolbar";
    const check = doc.createElement("button");
    check.type = "button";
    check.dataset.checkQuestion = "";
    check.textContent = "Check answer";
    const reset = doc.createElement("button");
    reset.type = "button";
    reset.className = "secondary";
    reset.dataset.resetQuestion = "";
    reset.textContent = "Try again";
    toolbar.append(check, reset);
    const status = doc.createElement("p");
    status.className = "feedback";
    status.setAttribute("role", "status");
    status.tabIndex = -1;
    const rationale = doc.createElement("p");
    rationale.dataset.rationale = Array.isArray(record.correct)
      ? record.correct.join(",")
      : record.correct;
    rationale.hidden = true;
    question.append(toolbar, status, rationale);
  }

  function announce(status, message, state) {
    status.textContent = message;
    if (state) {
      status.dataset.state = state;
    } else {
      delete status.dataset.state;
    }
    status.focus();
  }

  function currentOrder(question) {
    return [...question.querySelectorAll("[data-order-token]")]
      .map(token => token.dataset.orderToken);
  }

  function revealRationales(question, record) {
    question.querySelectorAll("[data-rationale]").forEach(node => {
      const value = node.dataset.rationale;
      node.textContent = record.rationales?.[value] || "";
      node.hidden = false;
      node.toggleAttribute(
        "data-correct-rationale",
        Array.isArray(record.correct)
          ? record.correct.includes(value)
          : value === record.correct,
      );
    });
  }

  function revealGeneratedExplanation(question, record) {
    const host = question.querySelector("[data-generated-explanation]");
    if (!host || !record?.translation) return;
    const rationales = Object.entries(record.rationales || {})
      .map(([value, rationale]) => `Choice ${value}: ${rationale}`)
      .join(" ");
    host.textContent = `English translation: ${record.translation} ${rationales}`;
    host.hidden = false;
  }

  function updateSummary(set) {
    if (!set) return;
    const questions = [...set.querySelectorAll("[data-quiz-id]")];
    const results = questions.map(question => {
      if (!question.dataset.result) return null;
      return { correct: question.dataset.result === "correct" };
    });
    const result = summarize(results);
    const status = set.querySelector("[data-score-summary]");
    if (status) {
      status.textContent = (
        `${result.correct} correct out of ${result.answered} answered`
      );
    }
  }

  function checkQuestion(question) {
    const record = recordFor(question);
    const status = question.querySelector('[role="status"]');
    if (!record || !status) return;

    let result;
    if (record.type === "ordering") {
      const selected = currentOrder(question);
      if (selected.length !== record.correct.length) {
        announce(
          status,
          "Complete the sentence order before checking.",
          "incorrect",
        );
        return;
      }
      result = scoreOrder(selected, record.correct);
    } else if (record.type === "multi-selection") {
      const selected = [...question.querySelectorAll("input:checked")]
        .map(input => input.value);
      if (!selected.length) {
        announce(status, "Select at least one answer first.", "incorrect");
        return;
      }
      result = scoreMultiSelection(selected, record.correct);
    } else if (record.type === "text") {
      const input = question.querySelector("[data-text-answer]");
      if (!input || !input.value.trim()) {
        announce(status, "Enter an answer first.", "incorrect");
        return;
      }
      result = scoreTextAnswer(input.value, record.correct);
    } else {
      const selected = question.querySelector("input:checked");
      if (!selected) {
        announce(status, "Select an answer first.", "incorrect");
        return;
      }
      result = scoreSelection(selected.value, record.correct);
    }

    question.dataset.result = result.correct ? "correct" : "incorrect";
    announce(
      status,
      result.correct
        ? "Correct. Review the explanation to reinforce the pattern."
        : "Not yet. Review why each option does or does not fit.",
      question.dataset.result,
    );
    revealRationales(question, record);
    revealGeneratedExplanation(question, record);
    updateSummary(question.closest("[data-quiz-set]"));
  }

  function resetQuestion(question) {
    question.querySelectorAll("input").forEach(input => {
      if (input.matches("[type='radio'], [type='checkbox']")) {
        input.checked = false;
      } else if (input.matches("[data-text-answer]")) {
        input.value = "";
      }
    });
    question.querySelectorAll("[data-rationale]").forEach(node => {
      node.hidden = true;
      node.textContent = "";
      node.removeAttribute("data-correct-rationale");
    });
    const generated = question.querySelector("[data-generated-explanation]");
    if (generated) {
      generated.hidden = true;
      generated.textContent = "";
    }
    const status = question.querySelector('[role="status"]');
    if (status) {
      status.textContent = "";
      delete status.dataset.state;
    }
    delete question.dataset.result;

    const list = question.querySelector("[data-order-list]");
    if (list?.dataset.originalOrder) {
      const byId = new Map(
        [...list.querySelectorAll("[data-order-token]")].map(
          token => [token.dataset.orderToken, token],
        ),
      );
      for (const id of list.dataset.originalOrder.split(",")) {
        if (byId.has(id)) list.append(byId.get(id));
      }
    }
    updateSummary(question.closest("[data-quiz-set]"));
  }

  function submitFullMock(set) {
    const questions = [...set.querySelectorAll("[data-quiz-id]")];
    const total = questions.length;
    const answeredQuestions = questions.filter(
      question => question.querySelector("input:checked"),
    );
    const answered = answeredQuestions.length;
    const summary = set.querySelector("[data-mock-summary]");

    if (answered !== total) {
      if (summary) {
        summary.textContent = `Answer all ${total} questions before submitting. ${answered} of ${total} answered.`;
      }
      return { submitted: false, answered, correct: 0, total };
    }

    if (set.dataset.submitted === "true") {
      const correct = questions.filter(
        question => question.dataset.result === "correct",
      ).length;
      return { submitted: true, answered, correct, total };
    }

    let correct = 0;
    for (const question of questions) {
      const record = recordFor(question);
      const selected = question.querySelector("input:checked");
      const result = scoreSelection(selected?.value, record?.correct);
      question.dataset.result = result.correct ? "correct" : "incorrect";
      if (result.correct) correct += 1;
      const status = question.querySelector('[role="status"]');
      if (status) {
        status.textContent = result.correct ? "Correct." : "Incorrect.";
        status.dataset.state = question.dataset.result;
      }
      revealGeneratedExplanation(question, record);
      question.querySelectorAll("input").forEach(input => {
        input.disabled = true;
      });
    }

    set.dataset.submitted = "true";
    set.toggleAttribute?.("data-locked", true);
    if (summary) {
      summary.textContent = `${correct} correct out of ${total}. Review the English feedback below each question.`;
    }
    const submit = set.querySelector("[data-submit-mock]");
    const reset = set.querySelector("[data-new-attempt]");
    if (submit) submit.disabled = true;
    if (reset) reset.hidden = false;
    return { submitted: true, answered, correct, total };
  }

  function resetFullMock(set) {
    const questions = [...set.querySelectorAll("[data-quiz-id]")];
    questions.forEach(question => {
      resetQuestion(question);
      question.querySelectorAll("input").forEach(input => {
        input.disabled = false;
      });
    });
    delete set.dataset.submitted;
    set.toggleAttribute?.("data-locked", false);
    const summary = set.querySelector("[data-mock-summary]");
    const submit = set.querySelector("[data-submit-mock]");
    const reset = set.querySelector("[data-new-attempt]");
    if (summary) summary.textContent = `Answer all ${questions.length} questions, then submit the mock.`;
    if (submit) submit.disabled = false;
    if (reset) reset.hidden = true;
  }

  function moveToken(button) {
    const token = button.closest("[data-order-token]");
    if (!token) return;
    if (button.dataset.moveOrder === "earlier" && token.previousElementSibling) {
      token.parentNode.insertBefore(token, token.previousElementSibling);
    }
    if (button.dataset.moveOrder === "later" && token.nextElementSibling) {
      token.parentNode.insertBefore(token.nextElementSibling, token);
    }
  }

  function bind(doc) {
    doc.querySelectorAll("[data-quiz-id]").forEach(question => {
      const record = recordFor(question);
      ensureHint(question, record);
      ensureControls(question, record);
    });

    doc.querySelectorAll("[data-order-list]").forEach(list => {
      list.dataset.originalOrder = [...list.querySelectorAll("[data-order-token]")]
        .map(token => token.dataset.orderToken)
        .join(",");

      list.querySelectorAll("[data-order-token]").forEach(token => {
        const tokenText = (
          token.querySelector("[lang='ja']")?.textContent
          || token.textContent
        );
        token.querySelectorAll("[data-move-order]").forEach(button => {
          button.setAttribute(
            "aria-label",
            orderButtonLabel(button.dataset.moveOrder, tokenText),
          );
        });
      });
    });

    doc.addEventListener("click", event => {
      const check = event.target.closest("[data-check-question]");
      if (check) {
        checkQuestion(check.closest("[data-quiz-id]"));
      }

      const reset = event.target.closest("[data-reset-question]");
      if (reset) {
        resetQuestion(reset.closest("[data-quiz-id]"));
      }

      const checkSet = event.target.closest("[data-check-set]");
      if (checkSet) {
        checkSet.closest("[data-quiz-set]")
          ?.querySelectorAll("[data-quiz-id]")
          .forEach(checkQuestion);
      }

      const resetSet = event.target.closest("[data-reset-set]");
      if (resetSet) {
        resetSet.closest("[data-quiz-set]")
          ?.querySelectorAll("[data-quiz-id]")
          .forEach(resetQuestion);
      }

      const move = event.target.closest("[data-move-order]");
      if (move) {
        moveToken(move);
      }

      const submitMock = event.target.closest("[data-submit-mock]");
      if (submitMock) {
        submitFullMock(submitMock.closest("[data-full-mock]"));
      }

      const newAttempt = event.target.closest("[data-new-attempt]");
      if (newAttempt) {
        resetFullMock(newAttempt.closest("[data-full-mock]"));
      }
    });
  }

  return {
    scoreSelection,
    scoreTextAnswer,
    scoreMultiSelection,
    scoreOrder,
    summarize,
    orderButtonLabel,
    quizRecords,
    recordForId,
    ensureHint,
    ensureControls,
    checkQuestion,
    resetQuestion,
    submitFullMock,
    resetFullMock,
    bind,
  };
}));

if (typeof document !== "undefined") {
  Quiz.bind(document);
}
