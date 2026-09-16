const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');

test('styles.css defines complete interactive states for .reading-word (unhovered, hover, active, pressed, focus-visible)', () => {
  const css = fs.readFileSync(path.join(ROOT, 'assets/css/styles.css'), 'utf8');

  // Unhovered
  assert.ok(css.includes('.reading-word {'), 'styles.css must define .reading-word');
  assert.ok(css.includes('cursor: pointer;'), 'styles.css must set cursor: pointer on .reading-word');
  assert.ok(css.includes('border-radius: 3px;'), 'styles.css must set rounded corners on .reading-word');

  // Hover
  assert.ok(css.includes('.reading-word:hover {'), 'styles.css must define .reading-word:hover');
  assert.ok(css.includes('rgba(163, 79, 63, 0.08)'), 'styles.css must style hover background tint');

  // Active (tactile click)
  assert.ok(css.includes('.reading-word:active {'), 'styles.css must define .reading-word:active');
  assert.ok(css.includes('scale(0.98) translateY(1px)'), 'styles.css must define tactile press on .reading-word:active');

  // Focus-visible
  assert.ok(css.includes('.reading-word:focus-visible {'), 'styles.css must define .reading-word:focus-visible');
  assert.ok(css.includes('outline: 2.5px solid var(--matcha-deep)'), 'styles.css must set visible outline on .reading-word:focus-visible');

  // Pinned / pressed state
  assert.ok(css.includes('.reading-word:is([aria-pressed="true"], [data-reading-visible])'), 'styles.css must style pinned/pressed .reading-word');

  // Ruby & rt
  assert.ok(css.includes('ruby {'), 'styles.css must define ruby position');
  assert.ok(css.includes('ruby-position: over;'), 'styles.css must set ruby-position: over');
  assert.ok(css.includes('user-select: none;'), 'styles.css must set user-select: none on rt');
  assert.ok(css.includes('.reading-word[aria-pressed="true"] rt'), 'styles.css must reveal rt when aria-pressed="true"');
});

test('adapter.css defines Midnight Washi interactive states for .reading-word on dark surfaces', () => {
  const adapterCss = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');

  // Unhovered
  assert.ok(adapterCss.includes('.reading-word {'), 'adapter.css must define .reading-word');
  assert.ok(adapterCss.includes('color: var(--mw-gold-bright) !important;'), 'adapter.css must style unhovered text with gold-bright');
  assert.ok(adapterCss.includes('border-bottom: 1.5px solid var(--mw-gold) !important;'), 'adapter.css must set 1.5px gold underline');

  // Hover
  assert.ok(adapterCss.includes('.reading-word:hover {'), 'adapter.css must define .reading-word:hover');
  assert.ok(adapterCss.includes('rgba(211, 171, 98, 0.2) !important;'), 'adapter.css must define hover background tint');

  // Active (clicking)
  assert.ok(adapterCss.includes('.reading-word:active {'), 'adapter.css must define .reading-word:active');
  assert.ok(adapterCss.includes('translateY(1px) scale(0.985)'), 'adapter.css must define tactile click on .reading-word:active');

  // Focus-visible
  assert.ok(adapterCss.includes('.reading-word:focus-visible {'), 'adapter.css must define .reading-word:focus-visible');
  assert.ok(adapterCss.includes('outline: 2.5px solid var(--mw-focus) !important;'), 'adapter.css must define high-contrast focus indicator');

  // Pinned / pressed
  assert.ok(adapterCss.includes('.reading-word:is([aria-pressed="true"], [data-reading-visible]) {'), 'adapter.css must style pinned/pressed .reading-word');

  // Furigana rt contrast
  assert.ok(adapterCss.includes('color: var(--mw-gold-bright) !important;'), 'adapter.css must style ruby rt in bright gold');
  assert.ok(adapterCss.includes('font-weight: 700;'), 'adapter.css must style ruby rt with bold font weight');
});

test('adapter.css styles paper card (.card.mw-paper) reading words with high contrast and prevents white-text bug', () => {
  const adapterCss = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');

  // Paper card unhovered
  assert.ok(adapterCss.includes('.card.mw-paper .reading-word {'), 'adapter.css must style .reading-word on paper cards');
  assert.ok(adapterCss.includes('color: var(--mw-accent-deep) !important;'), 'adapter.css must set deep accent color on paper cards');

  // Paper card hover: must NOT contain white text
  const paperHoverMatch = adapterCss.match(/\.card\.mw-paper\s+\.reading-word:hover\s*\{([^}]+)\}/);
  assert.ok(paperHoverMatch, 'adapter.css must define .card.mw-paper .reading-word:hover');
  assert.ok(!paperHoverMatch[1].includes('#ffffff'), 'Paper card hover must NOT use white text (invisible text bug)');
  assert.ok(paperHoverMatch[1].includes('#7d1c08'), 'Paper card hover must use high-contrast sumi-vermilion (#7d1c08)');

  // Paper card active
  assert.ok(adapterCss.includes('.card.mw-paper .reading-word:active {'), 'adapter.css must define .card.mw-paper .reading-word:active');

  // Paper card focus-visible
  assert.ok(adapterCss.includes('.card.mw-paper .reading-word:focus-visible {'), 'adapter.css must define .card.mw-paper .reading-word:focus-visible');
  assert.ok(adapterCss.includes('outline: 2.5px solid var(--mw-accent-deep) !important;'), 'adapter.css must set high-contrast focus ring on paper cards');

  // Paper card pinned / pressed
  assert.ok(adapterCss.includes('.card.mw-paper .reading-word:is([aria-pressed="true"], [data-reading-visible]) {'), 'adapter.css must define pinned state on paper cards');

  // Paper card furigana rt contrast
  assert.ok(adapterCss.includes('.card.mw-paper ruby rt {'), 'adapter.css must define .card.mw-paper ruby rt');
  const paperRtMatch = adapterCss.match(/\.card\.mw-paper\s+ruby\s+rt\s*\{([^}]+)\}/);
  assert.ok(paperRtMatch, 'adapter.css must have rule for .card.mw-paper ruby rt');
  assert.ok(paperRtMatch[1].includes('var(--mw-accent-deep) !important'), 'Paper card rt must use high-contrast accent deep (#b23a1f)');
});

test('midnight-washi/adapter.css is synced with assets/midnight-washi/adapter.css', () => {
  const rootAdapter = fs.readFileSync(path.join(ROOT, 'midnight-washi/adapter.css'), 'utf8');
  const assetsAdapter = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  assert.equal(rootAdapter, assetsAdapter, 'midnight-washi/adapter.css must match assets/midnight-washi/adapter.css');
});
