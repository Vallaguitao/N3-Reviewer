const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');

test('practice.html has no inline style attributes (Strict CSP)', () => {
  const html = fs.readFileSync(path.join(ROOT, 'practice.html'), 'utf8');
  const inlineStyleMatches = html.match(/style\s*=\s*["'][^"']*["']/gi);
  assert.equal(inlineStyleMatches, null);
});

test('practice.html has color-scheme meta tag and Midnight Washi asset links', () => {
  const html = fs.readFileSync(path.join(ROOT, 'practice.html'), 'utf8');
  assert.ok(html.includes('<meta name="color-scheme" content="light dark">'));
  assert.ok(html.includes('assets/midnight-washi/fonts.css'));
  assert.ok(html.includes('assets/midnight-washi/theme.css'));
  assert.ok(html.includes('assets/midnight-washi/motion.css'));
  assert.ok(html.includes('assets/midnight-washi/brand.css'));
  assert.ok(html.includes('assets/midnight-washi/adapter.css'));
  assert.ok(html.includes('id="theme-toggle"'));
  assert.ok(html.includes('data-mw-motion-toggle'));
});

test('practice.html hero contains Midnight Washi watermark, brush, and title', () => {
  const html = fs.readFileSync(path.join(ROOT, 'practice.html'), 'utf8');
  assert.ok(html.includes('class="page-hero mw-scene"'));
  assert.ok(html.includes('class="mw-watermark"'));
  assert.ok(html.includes('class="mw-brush"'));
  assert.ok(html.includes('class="mw-title"'));
  assert.ok(html.includes('class="eyebrow mw-eyebrow"'));
  assert.ok(html.includes('class="lede mw-lead"'));
});

test('practice.html assessment rows use mw-paper, mw-hover-card, stamps, and tilt', () => {
  const html = fs.readFileSync(path.join(ROOT, 'practice.html'), 'utf8');
  assert.ok(html.includes('class="assessment-row mw-paper mw-hover-card'));
  assert.ok(html.includes('data-mw-tilt'));
  assert.ok(html.includes('class="assessment-row-number mw-stamp"'));
  assert.ok(html.includes('data-mw-reveal="stamp"'));
  assert.ok(html.includes('class="assessment-row mw-paper mw-hover-card assessment-row--featured'));
});

test('practice.html usage callout has mw-panel and quiet button CTA', () => {
  const html = fs.readFileSync(path.join(ROOT, 'practice.html'), 'utf8');
  assert.ok(html.includes('class="usage-callout mw-panel mw-scene"'));
  assert.ok(html.includes('class="button mw-button mw-button--quiet"'));
});

test('adapter.css styles unhovered assessment-row buttons with solid CTA background and contrast', () => {
  const adapterCss = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  assert.ok(adapterCss.includes('.assessment-row > a:not(.button)'));
  assert.ok(adapterCss.includes('background: var(--mw-accent-deep);'));
  assert.ok(adapterCss.includes('color: var(--mw-on-accent);'));
  // Ensure transparent unhovered backgrounds are not used for assessment row buttons
  assert.ok(!adapterCss.includes('.assessment-row.mw-paper > a:not(.button) {\n  border-color: rgba(33, 29, 23, 0.22);\n  color: var(--mw-accent-deep);\n  background: rgba(33, 29, 23, 0.05);\n}'));
});
