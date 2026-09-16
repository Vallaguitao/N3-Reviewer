const { test } = require("node:test");
const assert = require("node:assert/strict");
const Vocabulary = require("../assets/js/vocabulary.js");

function createMockElement({ tag = "button", text = "", dataset = {}, children = [] } = {}) {
  const element = {
    tagName: tag.toUpperCase(),
    dataset,
    children: [...children],
    get textContent() {
      if (this.children.length === 0) return text;
      return this.children.map(child => (typeof child === "string" ? child : child.textContent)).join("");
    },
    set textContent(val) {
      text = val;
      this.children = [];
    },
    querySelector(selector) {
      const selectors = selector.split(",").map(s => s.trim().toLowerCase());
      function match(node) {
        if (!node || typeof node === "string") return null;
        if (selectors.includes(node.tagName.toLowerCase())) return node;
        for (const child of node.children) {
          const found = match(child);
          if (found) return found;
        }
        return null;
      }
      for (const child of this.children) {
        const found = match(child);
        if (found) return found;
      }
      return null;
    },
    querySelectorAll(selector) {
      const selectors = selector.split(",").map(s => s.trim().toLowerCase());
      const results = [];
      function collect(node) {
        if (!node || typeof node === "string") return;
        if (selectors.includes(node.tagName.toLowerCase())) {
          results.push(node);
        }
        for (const child of node.children) {
          collect(child);
        }
      }
      for (const child of this.children) {
        collect(child);
      }
      return results;
    },
    cloneNode(deep = true) {
      const clonedChildren = deep
        ? this.children.map(c => (typeof c === "string" ? c : c.cloneNode(true)))
        : [];
      const clone = createMockElement({
        tag: this.tagName.toLowerCase(),
        text,
        dataset: { ...this.dataset },
        children: clonedChildren,
      });
      for (const child of clone.children) {
        if (typeof child !== "string") {
          child.parentNode = clone;
        }
      }
      return clone;
    },
    closest(selector) {
      if (selector.includes("data-vocab-id") && this.dataset.vocabId) {
        return this;
      }
      return null;
    },
    remove() {
      if (this.parentNode) {
        const idx = this.parentNode.children.indexOf(this);
        if (idx !== -1) {
          this.parentNode.children.splice(idx, 1);
        }
      }
    },
  };

  for (const child of element.children) {
    if (typeof child !== "string") {
      child.parentNode = element;
    }
  }

  return element;
}

test("extractWordSurface correctly removes rt furigana from 一度", () => {
  const rt = createMockElement({ tag: "rt", text: "いちど" });
  const ruby = createMockElement({ tag: "ruby", children: ["一度", rt] });
  const button = createMockElement({
    tag: "button",
    children: [ruby],
    dataset: { vocabId: "ichido", surfaceReading: "いちど", contextMeaning: "once" },
  });

  assert.equal(button.textContent, "一度いちど");
  assert.equal(Vocabulary.extractWordSurface(button), "一度");
});

test("extractWordSurface handles okurigana such as 登って", () => {
  const rt = createMockElement({ tag: "rt", text: "のぼ" });
  const ruby = createMockElement({ tag: "ruby", children: ["登", rt] });
  const button = createMockElement({
    tag: "button",
    children: [ruby, "って"],
    dataset: { vocabId: "noboru", surfaceReading: "のぼって", contextMeaning: "to climb" },
  });

  assert.equal(button.textContent, "登のぼって");
  assert.equal(Vocabulary.extractWordSurface(button), "登って");
});

test("extractWordSurface handles words with multiple ruby annotations like 取り上げる", () => {
  const rt1 = createMockElement({ tag: "rt", text: "と" });
  const ruby1 = createMockElement({ tag: "ruby", children: ["取", rt1] });
  const rt2 = createMockElement({ tag: "rt", text: "あ" });
  const ruby2 = createMockElement({ tag: "ruby", children: ["上", rt2] });
  const button = createMockElement({
    tag: "button",
    children: [ruby1, "り", ruby2, "げる"],
    dataset: { vocabId: "toriageru" },
  });

  assert.equal(button.textContent, "取とり上あげる");
  assert.equal(Vocabulary.extractWordSurface(button), "取り上げる");
});

test("extractWordSurface removes rp tags when present", () => {
  const rp1 = createMockElement({ tag: "rp", text: "(" });
  const rt = createMockElement({ tag: "rt", text: "いちど" });
  const rp2 = createMockElement({ tag: "rp", text: ")" });
  const ruby = createMockElement({ tag: "ruby", children: ["一度", rp1, rt, rp2] });
  const button = createMockElement({ tag: "button", children: [ruby] });

  assert.equal(button.textContent, "一度(いちど)");
  assert.equal(Vocabulary.extractWordSurface(button), "一度");
});

test("extractWordSurface preserves text without ruby tags", () => {
  const button = createMockElement({ tag: "button", text: "パソコン" });
  assert.equal(Vocabulary.extractWordSurface(button), "パソコン");
});

test("contextFromTarget extracts clean surface and context attributes", () => {
  const rt = createMockElement({ tag: "rt", text: "いちど" });
  const ruby = createMockElement({ tag: "ruby", children: ["一度", rt] });
  const button = createMockElement({
    tag: "button",
    children: [ruby],
    dataset: { vocabId: "ichido", surfaceReading: "いちど", contextMeaning: "once" },
  });

  const context = Vocabulary.contextFromTarget(button);
  assert.deepEqual(context, {
    surface: "一度",
    surfaceReading: "いちど",
    contextMeaning: "once",
  });
});

test("detailModel returns null contextual when surface matches dictionary form (一度)", () => {
  const record = {
    id: "ichido",
    written: "一度",
    reading: "いちど",
    meanings: ["once", "one time"],
    partOfSpeech: "Noun",
  };
  const context = {
    surface: "一度",
    surfaceReading: "いちど",
    contextMeaning: "once",
  };

  const model = Vocabulary.detailModel(record, context);
  assert.equal(model.contextual, null);
  assert.equal(model.dictionary.written, "一度");
});

test("detailModel preserves contextual surface for inflected words (登って)", () => {
  const record = {
    id: "noboru",
    written: "登る",
    reading: "のぼる",
    meanings: ["to climb", "to go up"],
    partOfSpeech: "Group 1 Verb",
  };
  const context = {
    surface: "登って",
    surfaceReading: "のぼって",
    contextMeaning: "to climb",
  };

  const model = Vocabulary.detailModel(record, context);
  assert.notEqual(model.contextual, null);
  assert.equal(model.contextual.surface, "登って");
  assert.equal(model.contextual.reading, "のぼって");
  assert.equal(model.dictionary.written, "登る");
});
