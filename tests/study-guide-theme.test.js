const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');

test('no HTML files in the project contain duplicate script tags', () => {
  function checkDir(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const f of files) {
      const fullPath = path.join(dir, f.name);
      if (f.isDirectory() && f.name !== '.git' && f.name !== 'node_modules') {
        checkDir(fullPath);
      } else if (f.isFile() && f.name.endsWith('.html')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const scripts = content.match(/<script[^>]+src=[^>]+>/g) || [];
        const seen = new Set();
        const dupes = [];
        for (const s of scripts) {
          if (seen.has(s)) dupes.push(s);
          else seen.add(s);
        }
        assert.equal(
          dupes.length,
          0,
          `Found duplicate script tags in ${fullPath}: ${JSON.stringify(dupes)}`
        );
      }
    }
  }
  checkDir(ROOT);
});

test('study-guide.html has no inline style attributes (Strict CSP)', () => {
  const html = fs.readFileSync(path.join(ROOT, 'study-guide.html'), 'utf8');
  const inlineStyleMatches = html.match(/style\s*=\s*["'][^"']*["']/gi);
  assert.equal(
    inlineStyleMatches,
    null,
    `Found inline styles in study-guide.html: ${JSON.stringify(inlineStyleMatches)}`
  );
});

test('study-guide.html contains theme switcher and assets', () => {
  const html = fs.readFileSync(path.join(ROOT, 'study-guide.html'), 'utf8');
  assert.ok(html.includes('id="theme-toggle"'), 'Theme toggle button exists');
  assert.ok(html.includes('assets/js/theme-switcher.js'), 'theme-switcher.js is included');
  assert.ok(html.includes('assets/js/theme-init.js'), 'theme-init.js is included');
  assert.ok(html.includes('class="theme-toggle-button"'), 'theme-toggle-button class exists');
  assert.ok(html.includes('assets/midnight-washi/adapter.css'), 'adapter.css is linked');
});

test('theme-switcher.js includes idempotency guard and single listener binding', () => {
  const code = fs.readFileSync(path.join(ROOT, 'assets/js/theme-switcher.js'), 'utf8');
  assert.ok(
    code.includes('__n3ThemeSwitcherInitialized'),
    'Includes script idempotency guard'
  );
  assert.ok(
    code.includes('__themeListenerBound'),
    'Includes single-listener protection on toggle button'
  );
});

test('theme-switcher.js displays destination theme clearly', () => {
  const code = fs.readFileSync(path.join(ROOT, 'assets/js/theme-switcher.js'), 'utf8');
  // When isMidnight is true, button provides action to switch to Matcha Desk
  assert.ok(
    code.includes('isMidnight') && code.includes('🍵') && code.includes('Matcha Desk'),
    'Offers Matcha Desk when Midnight Washi is active'
  );
});
