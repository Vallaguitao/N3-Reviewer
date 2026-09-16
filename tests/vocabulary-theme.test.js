const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');

test('vocabulary.html has no inline style attributes (Strict CSP)', () => {
  const html = fs.readFileSync(path.join(ROOT, 'vocabulary.html'), 'utf8');
  const inlineStyleMatches = html.match(/style\s*=\s*["'][^"']*["']/gi);
  assert.equal(inlineStyleMatches, null, `Found inline style attributes in vocabulary.html: ${JSON.stringify(inlineStyleMatches)}`);
});

test('vocabulary.html has color-scheme meta tag and Midnight Washi asset links', () => {
  const html = fs.readFileSync(path.join(ROOT, 'vocabulary.html'), 'utf8');
  assert.ok(html.includes('<meta name="color-scheme" content="light dark">'), 'Missing color-scheme meta tag');
  assert.ok(html.includes('assets/midnight-washi/fonts.css'), 'Missing fonts.css link');
  assert.ok(html.includes('assets/midnight-washi/theme.css'), 'Missing theme.css link');
  assert.ok(html.includes('assets/midnight-washi/motion.css'), 'Missing motion.css link');
  assert.ok(html.includes('assets/midnight-washi/brand.css'), 'Missing brand.css link');
  assert.ok(html.includes('assets/midnight-washi/adapter.css'), 'Missing adapter.css link');
  assert.ok(html.includes('id="theme-toggle"'), 'Missing theme switcher button');
  assert.ok(html.includes('data-mw-motion-toggle'), 'Missing motion toggle button');
});

test('vocabulary.html hero contains Midnight Washi watermark, brush, title, eyebrow, and lead', () => {
  const html = fs.readFileSync(path.join(ROOT, 'vocabulary.html'), 'utf8');
  assert.ok(html.includes('class="page-hero mw-scene"'), 'Hero must have mw-scene class');
  assert.ok(html.includes('<span class="mw-watermark" aria-hidden="true">語</span>'), 'Hero must contain 語 watermark');
  assert.ok(html.includes('class="mw-brush"'), 'Hero must contain mw-brush element');
  assert.ok(html.includes('class="mw-title"'), 'Hero must have mw-title heading');
  assert.ok(html.includes('class="eyebrow mw-eyebrow"'), 'Hero must have mw-eyebrow class');
  assert.ok(html.includes('class="lede mw-lead"'), 'Hero must have mw-lead class');
});

test('adapter.css styles unhovered, hovering, active, focus, and selected states for vocab-result', () => {
  const adapterCss = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  // Unhovered
  assert.ok(adapterCss.includes('.vocab-result {'), 'adapter.css must define .vocab-result');
  assert.ok(adapterCss.includes('.vocab-result-japanese {'), 'adapter.css must define .vocab-result-japanese');
  assert.ok(adapterCss.includes('.vocab-result-meanings {'), 'adapter.css must define .vocab-result-meanings');
  // Hover
  assert.ok(adapterCss.includes('.vocab-result:hover {'), 'adapter.css must define .vocab-result:hover');
  assert.ok(adapterCss.includes('.vocab-result:hover .vocab-result-japanese'), 'adapter.css must highlight japanese text on hover');
  // Active / clicking
  assert.ok(adapterCss.includes('.vocab-result:active {'), 'adapter.css must define .vocab-result:active');
  // Focus visible
  assert.ok(adapterCss.includes('.vocab-result:focus-visible {'), 'adapter.css must define .vocab-result:focus-visible');
  // Selected / deep-linked
  assert.ok(adapterCss.includes('.vocab-result:is([aria-pressed="true"], [data-selected], [data-vocab-deep-linked])'), 'adapter.css must define selected/deep-linked state');
  // Excluded from generic solid button
  assert.ok(adapterCss.includes(':not(.vocab-result)'), 'adapter.css must exclude .vocab-result from solid red button rules');
});

test('adapter.css styles form controls with accessible high-contrast colors', () => {
  const adapterCss = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  assert.ok(adapterCss.includes(':is(#vocab-search, #vocab-part, #vocab-topic, #vocab-grammar)'));
  assert.ok(adapterCss.includes('.filters select option'));
  assert.ok(adapterCss.includes('.filters select optgroup'));
  assert.ok(adapterCss.includes('[data-vocab-status]'));
});

test('adapter.css styles vocab-detail side rail and occurrences', () => {
  const adapterCss = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  assert.ok(adapterCss.includes('.vocab-detail {'));
  assert.ok(adapterCss.includes('.vocab-detail h3'));
  assert.ok(adapterCss.includes('.vocab-detail h4'));
  assert.ok(adapterCss.includes('.vocab-detail :is(.vocab-reading, .vocab-whole-word)'));
  assert.ok(adapterCss.includes('.vocab-detail .vocab-contextual'));
  assert.ok(adapterCss.includes('.vocab-detail :is(.vocab-compounds, .vocab-kanji-list)'));
});

test('midnight-washi/adapter.css is synced with assets/midnight-washi/adapter.css', () => {
  const rootAdapter = fs.readFileSync(path.join(ROOT, 'midnight-washi/adapter.css'), 'utf8');
  const assetsAdapter = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  assert.equal(rootAdapter, assetsAdapter, 'midnight-washi/adapter.css must match assets/midnight-washi/adapter.css');
});
