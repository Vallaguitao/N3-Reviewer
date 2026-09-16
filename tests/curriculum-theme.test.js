const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");

test("curriculum.html has no inline style attributes (Strict CSP)", () => {
  const html = fs.readFileSync(path.join(ROOT, "curriculum.html"), "utf8");
  const inlineStyleMatches = html.match(/style\s*=\s*["'][^"']*["']/gi);
  assert.equal(
    inlineStyleMatches,
    null,
    `Found inline styles in curriculum.html: ${JSON.stringify(inlineStyleMatches)}`
  );
});

test("curriculum.html hero contains required elements in correct hierarchy", () => {
  const html = fs.readFileSync(path.join(ROOT, "curriculum.html"), "utf8");
  assert.ok(html.includes('class="guided-hero curriculum-journey-hero mw-scene"'), "Hero section exists");
  assert.ok(html.includes('<span class="mw-watermark" aria-hidden="true">道</span>'), "Watermark exists");
  assert.ok(html.includes('class="curriculum-principle mw-panel"'), "Curriculum principle aside exists");
  assert.ok(html.includes('id="theme-toggle"'), "Theme switcher button exists");
});

test("adapter.css and motion.css define fail-safes for decorative elements", () => {
  const adapterCss = fs.readFileSync(path.join(ROOT, "assets/midnight-washi/adapter.css"), "utf8");
  const motionCss = fs.readFileSync(path.join(ROOT, "assets/midnight-washi/motion.css"), "utf8");

  assert.ok(
    adapterCss.includes(".mw-watermark") && adapterCss.includes("display: none"),
    "adapter.css hides .mw-watermark by default"
  );
  assert.ok(
    adapterCss.includes(".mw-brush") && adapterCss.includes("display: none"),
    "adapter.css hides .mw-brush by default"
  );
  assert.ok(
    motionCss.includes(".mw-watermark") && motionCss.includes("display: none"),
    "motion.css hides .mw-watermark by default"
  );
  assert.ok(
    motionCss.includes(".mw-brush") && motionCss.includes("display: none"),
    "motion.css hides .mw-brush by default"
  );
  assert.ok(
    motionCss.includes(".mw-atmosphere") && motionCss.includes("display: none"),
    "motion.css hides .mw-atmosphere by default"
  );
});

test("adapter.css strictly scopes .study-menu-panel a styles to Midnight Washi", () => {
  const adapterCss = fs.readFileSync(path.join(ROOT, "assets/midnight-washi/adapter.css"), "utf8");
  const clean = adapterCss.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules = clean.split("}");
  
  for (const rule of rules) {
    const parts = rule.split("{");
    if (parts.length >= 2) {
      const selectors = parts[0].split(",");
      for (const sel of selectors) {
        const s = sel.trim();
        if (s.includes(".study-menu-panel a")) {
          const isScoped = s.includes(".mw-theme") || s.includes("midnight-washi");
          assert.ok(
            isScoped,
            `Found unscoped .study-menu-panel selector in adapter.css: "${s}". This breaks Matcha Desk!`
          );
        }
      }
    }
  }
});

test("curriculum card spacing is preserved in styles.css and adapter.css", () => {
  const stylesCss = fs.readFileSync(path.join(ROOT, "assets/css/styles.css"), "utf8");
  const adapterCss = fs.readFileSync(path.join(ROOT, "assets/midnight-washi/adapter.css"), "utf8");

  assert.ok(
    stylesCss.includes("clamp(3rem, 6vw, 4.5rem)"),
    "styles.css has overview card bottom spacing clamp(3rem, 6vw, 4.5rem)"
  );
  assert.ok(
    adapterCss.includes("clamp(3rem, 6vw, 4.5rem)"),
    "adapter.css has overview card bottom spacing clamp(3rem, 6vw, 4.5rem)"
  );

  assert.ok(
    stylesCss.includes("clamp(4rem, 8vw, 6.5rem)"),
    "styles.css has stage card bottom spacing clamp(4rem, 8vw, 6.5rem)"
  );
  assert.ok(
    adapterCss.includes("clamp(4rem, 8vw, 6.5rem)"),
    "adapter.css has stage card bottom spacing clamp(4rem, 8vw, 6.5rem)"
  );
});

test("midnight-washi/ copy is synced with assets/midnight-washi/", () => {
  const rootAdapter = fs.readFileSync(path.join(ROOT, "midnight-washi/adapter.css"), "utf8");
  const assetsAdapter = fs.readFileSync(path.join(ROOT, "assets/midnight-washi/adapter.css"), "utf8");
  assert.equal(rootAdapter, assetsAdapter, "midnight-washi/adapter.css is synced with assets/midnight-washi/adapter.css");

  const rootMotion = fs.readFileSync(path.join(ROOT, "midnight-washi/motion.css"), "utf8");
  const assetsMotion = fs.readFileSync(path.join(ROOT, "assets/midnight-washi/motion.css"), "utf8");
  assert.equal(rootMotion, assetsMotion, "midnight-washi/motion.css is synced with assets/midnight-washi/motion.css");
});

test("curriculum-final is outside curriculum-stages and has stacking context (no line overflow)", () => {
  const html = fs.readFileSync(path.join(ROOT, "curriculum.html"), "utf8");
  const stylesCss = fs.readFileSync(path.join(ROOT, "assets/css/styles.css"), "utf8");

  // In HTML, curriculum-stages must close before curriculum-final opens
  const stagesOpenIdx = html.indexOf('class="curriculum-stages');
  const part4Idx = html.indexOf('id="part-4"');
  const stagesCloseIdx = html.indexOf('</div>', part4Idx);
  const finalCardIdx = html.indexOf('class="curriculum-final');
  
  assert.ok(stagesOpenIdx !== -1 && part4Idx !== -1 && stagesCloseIdx !== -1 && finalCardIdx !== -1);
  assert.ok(
    stagesCloseIdx < finalCardIdx,
    "curriculum-stages must close before curriculum-final so the timeline pseudo-element line cannot overlap the final card"
  );

  // In styles.css, curriculum-stages::before must be bounded to the stages and curriculum-final must have positioning
  assert.ok(
    stylesCss.includes(".curriculum-stages::before") && stylesCss.includes("bottom: clamp(4rem, 8vw, 6.5rem)"),
    "curriculum-stages::before line stops at Part 4"
  );
  assert.ok(
    stylesCss.includes(".curriculum-final") && stylesCss.includes("z-index: 1"),
    "curriculum-final has explicit z-index stacking context in styles.css"
  );
});

