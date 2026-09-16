const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');

const LESSON_FILES = [
  { file: 'lessons/lesson-01-toki.html', pageNum: 1 },
  { file: 'lessons/lesson-02-kankei.html', pageNum: 2 },
  { file: 'lessons/lesson-03-degree.html', pageNum: 3 },
  { file: 'lessons/lesson-04-contrast.html', pageNum: 4 },
  { file: 'lessons/lesson-05-reasons.html', pageNum: 5 },
  { file: 'lessons/lesson-06-conditions.html', pageNum: 6 },
  { file: 'lessons/lesson-07-hearsay.html', pageNum: 7 },
  { file: 'lessons/lesson-08-negation.html', pageNum: 8 },
  { file: 'lessons/lesson-09-wishes.html', pageNum: 9 },
  { file: 'lessons/lesson-10-advice.html', pageNum: 10 },
  { file: 'lessons/lesson-11-intentions.html', pageNum: 11 },
  { file: 'lessons/lesson-12-keigo.html', pageNum: 12 },
  { file: 'lessons/full-mock-01-12.html', pageNum: 13, isMock: true },
];

test('all lessons 1-12 and full mock have no inline styles (Strict CSP)', () => {
  for (const item of LESSON_FILES) {
    const html = fs.readFileSync(path.join(ROOT, item.file), 'utf8');
    const inlineStyleMatches = html.match(/style\s*=\s*["'][^"']*["']/gi);
    assert.equal(inlineStyleMatches, null, `Found inline style attributes in ${item.file}: ${JSON.stringify(inlineStyleMatches)}`);
  }
});

test('all lessons 1-12 and full mock contain a guide rail with Part 1 lesson map', () => {
  for (const item of LESSON_FILES) {
    const html = fs.readFileSync(path.join(ROOT, item.file), 'utf8');
    assert.ok(html.includes('class="lesson-rail"'), `${item.file} must have .lesson-rail`);
    assert.ok(html.includes('class="part1-lesson-map"'), `${item.file} must have .part1-lesson-map`);
    assert.ok(html.includes('class="part1-lesson-links"'), `${item.file} must have .part1-lesson-links`);
    assert.ok(html.includes('full-mock-01-12.html'), `${item.file} must link to full-mock-01-12.html`);
  }
});

test('each lesson 1-12 and full mock marks its active page in the Part 1 map', () => {
  for (const item of LESSON_FILES) {
    const html = fs.readFileSync(path.join(ROOT, item.file), 'utf8');
    if (item.isMock) {
      assert.ok(
        html.includes('full-mock-01-12.html" data-part1-lesson-link aria-current="page"') ||
        html.includes('full-mock-01-12.html" class="part1-full-mock-link" aria-current="page"'),
        `full-mock-01-12.html must have aria-current="page" on its full mock tile in the map`
      );
    } else {
      const expectedHref = path.basename(item.file);
      const regex = new RegExp(`href=["']${expectedHref}["'][^>]*aria-current=["']page["']`);
      assert.ok(regex.test(html), `${item.file} must have aria-current="page" on its corresponding lesson link`);
    }
  }
});

test('styles.css defines complete interactive states for lesson-rail, part1 links, guide jumps, and option list', () => {
  const css = fs.readFileSync(path.join(ROOT, 'assets/css/styles.css'), 'utf8');
  assert.ok(css.includes('.lesson-rail {'), 'styles.css must style .lesson-rail');
  assert.ok(css.includes('.lesson-rail a {'), 'styles.css must style .lesson-rail a');
  assert.ok(css.includes('.lesson-rail a:hover'), 'styles.css must style .lesson-rail a:hover');
  assert.ok(css.includes('.lesson-rail a:active'), 'styles.css must style .lesson-rail a:active');
  assert.ok(css.includes('.lesson-rail a:focus-visible'), 'styles.css must style .lesson-rail a:focus-visible');
  assert.ok(css.includes('.lesson-rail a[aria-current="location"]'), 'styles.css must style active location in lesson rail');
  assert.ok(css.includes('.lesson-rail .part1-lesson-links a:hover'), 'styles.css must style .part1-lesson-links a:hover');
  assert.ok(css.includes('.lesson-rail .part1-lesson-links a:active'), 'styles.css must style .part1-lesson-links a:active');
  assert.ok(css.includes('.lesson-rail .part1-lesson-links a[aria-current="page"]'), 'styles.css must style current page in lesson map');
  assert.ok(css.includes('.guide-jumps'), 'styles.css must style .guide-jumps');
  assert.ok(css.includes('body[data-page] .guide-jumps a'), 'styles.css must style .guide-jumps a across lessons');
  assert.ok(css.includes('.option-list label:active'), 'styles.css must style .option-list label:active');
  assert.ok(css.includes('.question {'), 'styles.css must define .question');
  assert.ok(css.includes('scroll-margin-top: 1.5rem;'), 'styles.css must define scroll-margin-top on .question');
});

test('adapter.css defines Midnight Washi interactive states for lesson-rail, part1 map, guide jumps, and options', () => {
  const adapterCss = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  assert.ok(adapterCss.includes('.lesson-rail a:hover'), 'adapter.css must define .lesson-rail a:hover');
  assert.ok(adapterCss.includes('.lesson-rail a:active'), 'adapter.css must define .lesson-rail a:active');
  assert.ok(adapterCss.includes('.lesson-rail a:focus-visible'), 'adapter.css must define .lesson-rail a:focus-visible');
  assert.ok(adapterCss.includes('[aria-current="location"]'), 'adapter.css must support [aria-current="location"] for active topic');
  assert.ok(adapterCss.includes('.lesson-rail .part1-lesson-links a'), 'adapter.css must style .part1-lesson-links a in Midnight Washi');
  assert.ok(adapterCss.includes('.lesson-rail .part1-lesson-links a:hover'), 'adapter.css must style .part1-lesson-links a:hover in Midnight Washi');
  assert.ok(adapterCss.includes('.lesson-rail .part1-lesson-links a:active'), 'adapter.css must style .part1-lesson-links a:active in Midnight Washi');
  assert.ok(adapterCss.includes('.lesson-rail .part1-lesson-links a[aria-current="page"]'), 'adapter.css must style active page tile in Midnight Washi');
  assert.ok(adapterCss.includes('.guide-jumps'), 'adapter.css must style .guide-jumps');
  assert.ok(adapterCss.includes('.option-list label'), 'adapter.css must style .option-list label');
  assert.ok(adapterCss.includes('.option-list label:hover'), 'adapter.css must style .option-list label:hover');
  assert.ok(adapterCss.includes('.option-list label:active'), 'adapter.css must style .option-list label:active');
});

test('adapter.css defines Midnight Washi interactive states for book exercise hints, clues, and answer reviews', () => {
  const adapterCss = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  assert.ok(adapterCss.includes('.study-hints details'), 'adapter.css must style .study-hints details');
  assert.ok(adapterCss.includes('.study-hints summary:hover'), 'adapter.css must style .study-hints summary:hover');
  assert.ok(adapterCss.includes('.study-hints summary:active'), 'adapter.css must style .study-hints summary:active');
  assert.ok(adapterCss.includes('data-study-hint="gentle"'), 'adapter.css must style gentle hint tier');
  assert.ok(adapterCss.includes('data-study-hint="stronger"'), 'adapter.css must style stronger clue tier');
  assert.ok(adapterCss.includes('.study-answer-review'), 'adapter.css must style .study-answer-review');
  assert.ok(adapterCss.includes('.study-key-clue'), 'adapter.css must style .study-key-clue');
  assert.ok(adapterCss.includes('.study-choice-reasons'), 'adapter.css must style .study-choice-reasons');
  assert.ok(adapterCss.includes('[data-correct-rationale]'), 'adapter.css must style [data-correct-rationale]');
  assert.ok(adapterCss.includes('.study-trap'), 'adapter.css must style .study-trap');
  assert.ok(adapterCss.includes('.study-review-link:hover'), 'adapter.css must style .study-review-link:hover');
  assert.ok(adapterCss.includes('.study-review-link:active'), 'adapter.css must style .study-review-link:active');
  assert.ok(adapterCss.includes('.full-mock-summary'), 'adapter.css must style .full-mock-summary in Midnight Washi');
  assert.ok(adapterCss.includes('.full-mock-summary:hover'), 'adapter.css must style .full-mock-summary:hover in Midnight Washi');
  assert.ok(adapterCss.includes('.source-spine'), 'adapter.css must style .source-spine in Midnight Washi');
  assert.ok(adapterCss.includes('.source-spine:hover'), 'adapter.css must style .source-spine:hover in Midnight Washi');
  assert.ok(adapterCss.includes('background: #eccb85 !important;'), 'adapter.css must set golden bookmark background for .source-spine');
  assert.ok(adapterCss.includes('color: #1c2f52 !important;'), 'adapter.css must set dark indigo text for .source-spine');
});

test('styles.css defines baseline interactive states for study hints and review links', () => {
  const css = fs.readFileSync(path.join(ROOT, 'assets/css/styles.css'), 'utf8');
  assert.ok(css.includes('.study-hints details'), 'styles.css must style .study-hints details');
  assert.ok(css.includes('.study-hints summary:hover'), 'styles.css must style .study-hints summary:hover');
  assert.ok(css.includes('.study-hints summary:active'), 'styles.css must style .study-hints summary:active');
  assert.ok(css.includes('.study-review-link'), 'styles.css must style .study-review-link');
  assert.ok(css.includes('.full-mock-summary'), 'styles.css must style .full-mock-summary');
  assert.ok(css.includes('.full-mock[data-submitted="true"] .full-mock-summary'), 'styles.css must style .full-mock-summary submitted state in styles.css');
  assert.ok(css.includes('.source-spine'), 'styles.css must style .source-spine');
  assert.ok(css.includes('.source-spine:hover'), 'styles.css must style .source-spine:hover in styles.css');
});

test('midnight-washi/adapter.css is synced with assets/midnight-washi/adapter.css', () => {
  const rootAdapter = fs.readFileSync(path.join(ROOT, 'midnight-washi/adapter.css'), 'utf8');
  const assetsAdapter = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  assert.equal(rootAdapter, assetsAdapter, 'midnight-washi/adapter.css must match assets/midnight-washi/adapter.css');
});
