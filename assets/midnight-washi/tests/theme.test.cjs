const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const sourcePath = path.join(__dirname, '../theme.js');
const source = fs.existsSync(sourcePath) ? fs.readFileSync(sourcePath, 'utf8') : '';
const markup = `<div class="mw-theme" id="one"><button type="button" data-mw-toggle="answer" hidden>Show answer</button><div id="answer">Answer</div></div><div class="mw-theme" id="two"><button type="button" data-mw-toggle="other" hidden>Show answer</button><div id="other">Other answer</div></div><p id="outside">Outside</p>`;
function setup(html = markup) {
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  dom.window.eval(source);
  dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
  return dom;
}
test('enhancement reveals the control and synchronizes answer visibility and aria state', () => {
  const dom = setup();
  const d = dom.window.document;
  const button = d.querySelector('button');
  assert.equal(button.hidden, false);
  assert.equal(d.getElementById('answer').hidden, true);
  assert.equal(button.getAttribute('aria-expanded'), 'false');
  button.click();
  assert.equal(d.getElementById('answer').hidden, false);
  assert.equal(button.getAttribute('aria-expanded'), 'true');
  assert.equal(button.textContent, 'Hide answer');
  button.click();
  assert.equal(d.getElementById('answer').hidden, true);
  assert.equal(button.textContent, 'Show answer');
  dom.window.close();
});
test('clicking one component does not toggle another theme or outside content', () => {
  const dom = setup(); const d = dom.window.document;
  assert.equal(d.getElementById('other').hidden, true);
  d.querySelector('button').click();
  assert.equal(d.getElementById('other').hidden, true);
  assert.equal(d.getElementById('outside').hidden, false);
  dom.window.close();
});
test('reinitialization and loading the script twice do not duplicate click handling', () => {
  const dom = setup(); const d = dom.window.document;
  assert.ok(dom.window.MidnightWashi, 'Public initialization API is available');
  dom.window.MidnightWashi.init(); dom.window.MidnightWashi.init(d.getElementById('one'));
  dom.window.eval(source);
  d.querySelector('button').click();
  assert.equal(d.getElementById('answer').hidden, false);
  assert.equal(d.querySelector('button').getAttribute('aria-expanded'), 'true');
  dom.window.close();
});
test('invalid targets stay unenhanced and cannot hide content outside their wrapper', () => {
  const dom = setup(`<div class="mw-theme"><button data-mw-toggle="outside" hidden>Show</button><button data-mw-toggle="missing" hidden>Show</button></div><p id="outside">Outside</p>`);
  const d = dom.window.document;
  assert.ok(dom.window.MidnightWashi, 'Script initializes even with invalid targets');
  for (const button of d.querySelectorAll('button')) { assert.equal(button.hidden, true); button.click(); }
  assert.equal(d.getElementById('outside').hidden, false);
  dom.window.close();
});
test('dynamically inserted components initialize with custom labels and initial expanded state', () => {
  const dom = setup(); const d = dom.window.document;
  assert.ok(dom.window.MidnightWashi, 'Public initialization API is available');
  d.getElementById('one').insertAdjacentHTML('beforeend', `<section id="added"><button type="button" data-mw-toggle="new-answer" data-mw-label-show="Reveal" data-mw-label-hide="Close" aria-expanded="true" hidden>Reveal</button><div id="new-answer">New answer</div></section>`);
  dom.window.MidnightWashi.init(d.getElementById('added'));
  const button = d.querySelector('#added button');
  assert.equal(button.hidden, false); assert.equal(button.textContent, 'Close');
  button.click(); assert.equal(d.getElementById('new-answer').hidden, true);
  assert.equal(button.textContent, 'Reveal');
  dom.window.close();
});
test('without JavaScript, answers remain available and inactive controls remain hidden', () => {
  const dom = new JSDOM(markup); const d = dom.window.document;
  assert.equal(d.getElementById('answer').hidden, false);
  assert.equal(d.querySelector('button').hidden, true);
  dom.window.close();
});
