const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');

test('styles.css defines global .feedback:empty { display: none; }', () => {
  const css = fs.readFileSync(path.join(ROOT, 'assets/css/styles.css'), 'utf8');
  const match = css.match(/\.feedback:empty\s*\{\s*display:\s*none;\s*\}/);
  assert.ok(match, 'styles.css must include .feedback:empty { display: none; }');
});

test('styles.css defines global .answer-explanation:empty and [hidden] { display: none; }', () => {
  const css = fs.readFileSync(path.join(ROOT, 'assets/css/styles.css'), 'utf8');
  assert.ok(
    css.includes('.answer-explanation:empty') && css.includes('.answer-explanation[hidden]'),
    'styles.css must include rule hiding .answer-explanation:empty and .answer-explanation[hidden]'
  );
});

test('assets/midnight-washi/adapter.css and midnight-washi/adapter.css define .feedback:empty { display: none; }', () => {
  const assetsAdapter = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  const rootAdapter = fs.readFileSync(path.join(ROOT, 'midnight-washi/adapter.css'), 'utf8');

  const pattern = /\.feedback:empty\s*\{\s*display:\s*none;\s*\}/;
  assert.ok(pattern.test(assetsAdapter), 'assets adapter.css must include .feedback:empty { display: none; }');
  assert.ok(pattern.test(rootAdapter), 'midnight-washi adapter.css must include .feedback:empty { display: none; }');
});

test('assets/midnight-washi/adapter.css and midnight-washi/adapter.css define .answer-explanation:empty and [hidden] { display: none; }', () => {
  const assetsAdapter = fs.readFileSync(path.join(ROOT, 'assets/midnight-washi/adapter.css'), 'utf8');
  const rootAdapter = fs.readFileSync(path.join(ROOT, 'midnight-washi/adapter.css'), 'utf8');

  assert.ok(
    assetsAdapter.includes('.answer-explanation:empty') && assetsAdapter.includes('.answer-explanation[hidden]'),
    'assets adapter.css must include rule hiding .answer-explanation:empty and .answer-explanation[hidden]'
  );
  assert.ok(
    rootAdapter.includes('.answer-explanation:empty') && rootAdapter.includes('.answer-explanation[hidden]'),
    'midnight-washi adapter.css must include rule hiding .answer-explanation:empty and .answer-explanation[hidden]'
  );
});

test('guide CSS files do not contain redundant page-specific .feedback:empty or .answer-explanation:empty rules', () => {
  const guideFiles = [
    'assets/css/full-mock-01-12-guide.css',
    'assets/css/group-b-guide.css',
    'assets/css/group-c-guide.css',
    'assets/css/group-d-guide.css',
    'assets/css/group-e-guide.css',
    'assets/css/group-f-guide.css',
    'assets/css/group-g-guide.css',
    'assets/css/group-h-guide.css',
    'assets/css/group-i-guide.css',
    'assets/css/group-j-guide.css',
    'assets/css/group-reviews-guide.css',
  ];

  for (const relPath of guideFiles) {
    const content = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
    assert.ok(
      !content.includes('.feedback:empty'),
      `${relPath} should rely on global styles.css and not have redundant .feedback:empty override`
    );
    assert.ok(
      !content.includes('.answer-explanation:empty'),
      `${relPath} should rely on global styles.css and not have redundant .answer-explanation:empty override`
    );
  }
});
