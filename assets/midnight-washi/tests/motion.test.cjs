const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const sourcePath = path.join(__dirname, '../motion.js');
const source = fs.existsSync(sourcePath) ? fs.readFileSync(sourcePath, 'utf8') : '';
const markup = `<main class="mw-theme" data-mw-background="local" data-mw-symbols="学語" data-mw-density="8"><button data-mw-motion-toggle hidden>Pause motion</button><h1 data-mw-reveal="left">Learn</h1><article data-mw-tilt>Card</article><button data-mw-flip><span class="mw-flip-inner"><span data-mw-face="front">学ぶ</span><span data-mw-face="back">まなぶ — to learn</span></span></button><button data-mw-word aria-pressed="false">経験<span class="mw-reading">けいけん</span></button><span data-mw-count="650">650</span></main><aside class="mw-theme" id="other">Another theme</aside>`;
function setup(reduced = false, html = markup) {
  const dom = new JSDOM(html, {runScripts:'outside-only', pretendToBeVisual:true});
  const w = dom.window;
  // jsdom lacks matchMedia. This models its change-event boundary; all
  // component DOM and pointer/click events exercise the actual script.
  const media = new Map();
  w.matchMedia = query => {
    if (!media.has(query)) { const m = new w.EventTarget(); m.matches = query.includes('reduced-motion') ? reduced : true; media.set(query,m); }
    return media.get(query);
  };
  w.eval(source); w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
  return {dom,w,d:w.document,media};
}
test('background is opt-in, decorative, configurable, and not duplicated by init', () => {
  const {dom,w,d} = setup();
  assert.equal(d.querySelectorAll('.mw-floater').length,8);
  assert.equal(d.querySelector('.mw-atmosphere').getAttribute('aria-hidden'),'true');
  assert.ok([...d.querySelectorAll('.mw-floater')].every(el=>['学','語'].includes(el.textContent)));
  w.MidnightWashiMotion.init(); w.eval(source);
  assert.equal(d.querySelectorAll('.mw-atmosphere').length,1);
  assert.equal(d.querySelector('#other .mw-atmosphere'),null);
  dom.window.close();
});
test('pointer movement changes only its own background and resets on exit', async () => {
  const {dom,w,d} = setup(); const root=d.querySelector('main');
  root.getBoundingClientRect=()=>({left:0,top:0,width:100,height:100});
  root.dispatchEvent(new w.MouseEvent('pointermove',{clientX:100,clientY:0,bubbles:true}));
  await new Promise(resolve=>w.setTimeout(resolve,40));
  assert.equal(root.style.getPropertyValue('--mw-pointer-x'),'1.000');
  assert.equal(root.style.getPropertyValue('--mw-pointer-y'),'-1.000');
  assert.equal(d.getElementById('other').style.getPropertyValue('--mw-pointer-x'),'');
  root.dispatchEvent(new w.Event('pointerleave'));
  assert.equal(root.style.getPropertyValue('--mw-pointer-x'),'0');
  dom.window.close();
});
test('pause control and operating-system reduced motion both stop ambient motion', () => {
  const {dom,w,d,media} = setup(); const root=d.querySelector('main'); const button=d.querySelector('[data-mw-motion-toggle]');
  assert.equal(button.hidden,false); assert.equal(root.dataset.mwMotionState,'running');
  button.click(); assert.equal(root.dataset.mwMotionState,'paused');
  button.click(); assert.equal(root.dataset.mwMotionState,'running');
  const preference=media.get('(prefers-reduced-motion: reduce)'); preference.matches=true; preference.dispatchEvent(new w.Event('change'));
  assert.equal(root.dataset.mwMotionState,'paused'); assert.equal(button.disabled,true);
  preference.matches=false; preference.dispatchEvent(new w.Event('change'));
  assert.equal(root.dataset.mwMotionState,'running'); assert.equal(button.disabled,false);
  dom.window.close();
});
test('reduced-motion users get final numbers, visible text, and no pointer displacement', async () => {
  const {dom,w,d} = setup(true); const root=d.querySelector('main');
  assert.equal(root.dataset.mwMotionState,'paused');
  root.dispatchEvent(new w.MouseEvent('pointermove',{clientX:500,clientY:300,bubbles:true}));
  await new Promise(resolve=>w.setTimeout(resolve,30));
  assert.equal(root.style.getPropertyValue('--mw-pointer-x'),'0');
  assert.equal(d.querySelector('[data-mw-count]').textContent,'650');
  assert.equal(d.querySelector('h1').hidden,false);
  dom.window.close();
});
test('card flipping exposes one accessible face and remains independent on repeated init', () => {
  const {dom,w,d} = setup(); const card=d.querySelector('[data-mw-flip]');
  assert.equal(card.getAttribute('aria-pressed'),'false');
  assert.equal(d.querySelector('[data-mw-face="back"]').getAttribute('aria-hidden'),'true');
  w.MidnightWashiMotion.init(); card.click();
  assert.equal(card.getAttribute('aria-pressed'),'true');
  assert.equal(d.querySelector('[data-mw-face="front"]').getAttribute('aria-hidden'),'true');
  assert.equal(d.querySelector('[data-mw-face="back"]').getAttribute('aria-hidden'),'false');
  card.click(); assert.equal(card.getAttribute('aria-pressed'),'false');
  dom.window.close();
});
test('reading chips pin and unpin their reading on click', () => {
  const {dom,d} = setup(); const word=d.querySelector('[data-mw-word]');
  assert.ok(word.classList.contains('mw-word-ready'));
  word.click(); assert.equal(word.getAttribute('aria-pressed'),'true');
  word.click(); assert.equal(word.getAttribute('aria-pressed'),'false');
  dom.window.close();
});
test('destroy restores readable cards, removes decoration and permits clean reinitialization', () => {
  const {dom,w,d} = setup(); const root=d.querySelector('main');
  assert.ok(w.MidnightWashiMotion, 'Motion API is available');
  w.MidnightWashiMotion.destroy(root);
  assert.equal(root.querySelector('.mw-atmosphere'),null);
  assert.equal(root.querySelector('[data-mw-face="back"]').hasAttribute('aria-hidden'),false);
  assert.equal(root.querySelector('[data-mw-motion-toggle]').hidden,true);
  w.MidnightWashiMotion.init(root);
  assert.equal(root.querySelectorAll('.mw-floater').length,8);
  root.querySelector('[data-mw-flip]').click();
  assert.equal(root.querySelector('[data-mw-flip]').getAttribute('aria-pressed'),'true');
  dom.window.close();
});
