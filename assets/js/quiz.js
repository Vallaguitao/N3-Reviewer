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

  function data() {
    return root?.N3QuizData || [];
  }

  function recordFor(question) {
    return data().find(item => item.id === question.dataset.quizId) || null;
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
      node.toggleAttribute("data-correct-rationale", value === record.correct);
    });
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
    updateSummary(question.closest("[data-quiz-set]"));
  }

  function resetQuestion(question) {
    question.querySelectorAll("input").forEach(input => {
      input.checked = false;
    });
    question.querySelectorAll("[data-rationale]").forEach(node => {
      node.hidden = true;
      node.textContent = "";
      node.removeAttribute("data-correct-rationale");
    });
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
      ensureHint(question, recordFor(question));
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

      const move = event.target.closest("[data-move-order]");
      if (move) {
        moveToken(move);
      }
    });
  }

  return {
    scoreSelection,
    scoreOrder,
    summarize,
    orderButtonLabel,
    ensureHint,
    checkQuestion,
    resetQuestion,
    bind,
  };
}));

if (typeof document !== "undefined") {
  Quiz.bind(document);
}
