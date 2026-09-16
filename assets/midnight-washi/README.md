# Midnight Washi — reusable theme kit, version 1.1

A portable HTML/CSS theme based on the visual direction of your supplied Kanji Road study deck: midnight indigo, paper surfaces, Japanese display typography, vermilion seals, and gold details.

## Start here

1. Extract the ZIP, keeping this folder together.
2. Open `index.html` to see the theme specimen.
3. Copy `examples/starter.html` to start a page, adjusting the stylesheet paths if you move it.
4. Change the sample brand name and initials in your HTML.
5. Edit `brand.css` to set your colors and other brand choices.

You do not need Node, npm, React, a build step, or a server to use these static files. A local web server can be useful if your browser restricts local files. The optional web fonts need internet access; system fonts are the fallback.

## What you need

| File | Purpose | Needed? |
| --- | --- | --- |
| `theme.css` | Reusable layout, typography, paper cards, dark panels, stamps, buttons, badges, hints, progress styling | Yes |
| `tokens.css` | Shared colors, spacing, fonts, widths, corners, and motion settings; automatically imported by theme.css | Yes; keep beside theme.css |
| `brand.css` | Your editable overrides; load after theme.css | Recommended |
| `fonts.css` | Loads the original three font families through Fontsource/jsDelivr, pinned to 5.3.0 | Optional; online fonts |
| `theme.js` | Accessible answer-reveal buttons | Optional |
| `motion.css` + `motion.js` | Floating backgrounds, parallax, text/stamp/brush entrances, interactive cards and reading chips | Include both for the animated theme |
| `MOTION.md` | Copy-and-paste instructions for every motion effect | Helpful |
| Your HTML | Your name, logo/initials, navigation, content, and component markup | Yes |
| `index.html`, `examples/` | Reference pages to view or copy | Helpful |
| `tests/`, `package.json` | Developer checks for changing the optional script | Not required on your website |

No image assets are required: the paper texture, stamp frame, and brush accent are built into CSS. Supply your own logo if you want one. The MW and YB marks are sample initials, not a finished brand identity.

## Add the theme to another project

Copy the entire theme folder to `assets/midnight-washi/` in that project. Inside the page's `<head>`, add:

```html
<!-- Optional: load the chosen web fonts. -->
<link rel="stylesheet" href="assets/midnight-washi/fonts.css">
<link rel="stylesheet" href="assets/midnight-washi/theme.css">
<link rel="stylesheet" href="assets/midnight-washi/motion.css">
<link rel="stylesheet" href="assets/midnight-washi/brand.css">
<!-- Optional: only needed for data-mw-toggle answer buttons. -->
<script src="assets/midnight-washi/theme.js" defer></script>
<script src="assets/midnight-washi/motion.js" defer></script>
```

Wrap the content you want themed:

```html
<main class="mw-theme" data-mw-background="local">
  <div class="mw-container mw-section mw-stack">
    <p class="mw-eyebrow">YOUR BRAND / LESSON 01</p>
    <button class="mw-button mw-button--quiet" data-mw-motion-toggle hidden>Pause motion</button>
    <h1 class="mw-title" data-mw-reveal="up">Your lesson title</h1>
    <article class="mw-paper mw-stack mw-hover-card" data-mw-tilt>
      <h2 class="mw-subheading">Your topic</h2>
      <p>Your content goes here.</p>
    </article>
  </div>
</main>
```

For a full-page theme, put `class="mw-theme"` on `<body>` and remove the browser's body margin in your own page stylesheet. For embedding, place the class only on the section being themed. Use a separate `.mw-container` inside the wrapper; the wrapper owns the background and the container owns the content width.

The theme uses a `.mw-theme` scope and `mw-` class prefixes. It does not freeze body scrolling or depend on the original deck's `#s1`–`#s12` IDs. Existing website CSS can still compete inside the wrapper; inspect the page after integration and resolve deliberate overrides in your website stylesheet or `brand.css`.

## Make it yours

Treat `theme.css` and `tokens.css` as the shared theme. Make routine changes in `brand.css`:

```css
.mw-theme {
  --mw-accent: #d8492a;
  --mw-accent-deep: #b23a1f;
  --mw-accent-text: #f0937a;
  --mw-gold: #d3ab62;
  --mw-gold-bright: #eccb85;
  --mw-radius: 10px;
  --mw-content-width: 1120px;
  --mw-grain-opacity: .045;
}
```

Accent roles are intentionally separate: vermilion for decorative strokes, deeper red for white-label buttons and text on paper, and a lighter coral for text on midnight backgrounds. Recheck text contrast if you change them. Brand name, tagline, logo, page title, favicon, and the `theme-color` meta tag live in HTML rather than CSS. Keep those consistent too.

For multiple brands, use a distinct brand override file in each project, loaded after the same shared theme. For one brand across multiple projects, reuse the same override file. Version the folder or its shared release so updates are intentional.

## Component reference

| Class | Use |
| --- | --- |
| `mw-container` | Centered, width-limited content |
| `mw-section`, `mw-stack`, `mw-row` | Section padding, vertical rhythm, wrapping horizontal groups |
| `mw-grid`, `mw-grid--three` | Two- or three-column layout; stacks on small screens |
| `mw-hero` | Large introduction beside a supporting card |
| `mw-title`, `mw-heading`, `mw-subheading` | Display type at three scales |
| `mw-eyebrow`, `mw-label`, `mw-lead`, `mw-muted` | Supporting text and labels |
| `mw-paper`, `mw-panel` | Light reading card or dark supporting panel |
| `mw-stamp`, `mw-stamp--large`, `mw-brush` | Recurring visual marks; provide accessible text when meaningful |
| `mw-button`, `mw-button--quiet` | Primary and secondary links/buttons; use the correct HTML element |
| `mw-badge`, `mw-note` | Short label and explanatory callout |
| `mw-details` | Styles native `<details>` and `<summary>` |
| `mw-progress` | Styles native `<progress>`; your app supplies value/max and label |
| `mw-entry` | Optional short entrance animation; honors reduced motion |

The theme supplies appearance, answer reveals, and the optional motion effects described in [MOTION.md](MOTION.md). Your application owns question data, grading, saved progress, slide navigation, sign-in, and spaced repetition. The specimen's completion and progress states are examples, not saved learner activity.

## Optional JavaScript

`theme.js` controls answer reveals. `motion.js` independently controls the optional atmosphere and animated interactions. Both have no external JavaScript dependencies, analytics, storage, or service-worker registration. Omit `motion.css` and `motion.js` together if you want the simpler static version.

```html
<button type="button" class="mw-button"
        data-mw-toggle="unique-answer-id" hidden>Show answer</button>
<div id="unique-answer-id" class="mw-note">The answer and explanation.</div>
```

Keep the answer visible and the button hidden in the source HTML. When JavaScript runs, it reveals the button and collapses the answer. Without JavaScript, the answer stays readable.

- Use one button per target. Give each target an ID unique across the whole document.
- Both button and target must be in the same nearest `.mw-theme` wrapper.
- The button must sit outside the target. Invalid targets remain unenhanced.
- `aria-expanded` and `aria-controls` are maintained by the script. Native buttons support keyboard activation.
- Set `aria-expanded="true"` on the button for an initially open explanation.
- Optional `data-mw-label-show="Reveal reading"` and `data-mw-label-hide="Hide reading"` customize the plain-text labels. Do not put icons/other markup inside these buttons; labels are replaced as text.
- For content inserted later, call `window.MidnightWashi.init(containerElement)` after insertion. Initialization is safe to repeat.

For simple hints, use native HTML and omit the script completely:

```html
<details class="mw-details">
  <summary>Show hint</summary>
  <p>Your hint.</p>
</details>
```

## Fonts and offline use

The optional stylesheet uses the same font families as the original reference, with fewer loaded weights:

- [Shippori Mincho B1](https://fontsource.org/fonts/shippori-mincho-b1/cdn), 700 — display headings.
- [Zen Kaku Gothic New](https://fontsource.org/fonts/zen-kaku-gothic-new/cdn), 400 and 700 — body and controls.
- [DotGothic16](https://fontsource.org/fonts/dotgothic16/cdn), 400 — short utility labels.

These font files are fetched from an external CDN when needed. They are not bundled for offline use. Remove the `fonts.css` link for no external requests; the theme uses the system fallback fonts in `tokens.css`, with some visual differences. To preserve the exact fonts offline, self-host the relevant font files and their licenses and replace the imports with local `@font-face` definitions. Copying the external CSS alone is not enough to make its font files local.

## What about manifest.json and sw.js?

They are application features, not requirements for a visual theme:

- `manifest.json` describes an installable app's name, icons, and launch behavior.
- `sw.js` controls offline caching and updates.

The original service worker and manifest are not included. When integrating into an existing app, keep and update that app's own manifest/cache strategy. Avoid registering a second service worker just to add this theme. Do not reuse the original Kanji Road app name or cache identifiers by accident.

## What changed from the reference

Preserved: palette, three font families, warm paper, dark panels, small corner radii, stamp/brush motifs, and bilingual editorial hierarchy.

Generalized: component names, reusable layouts, brand overrides, responsive spacing, answer reveals, floating kanji, pointer parallax, staggered entrances, stamps, brush draws, hover effects, reading chips, card flips, and count-up numbers. Optional pointer tilt is also available for cards. This is a theme library based on that design direction, not a pixel-identical copy of all twelve slides. Full-screen slide navigation and lesson-specific chart animations still belong to the application.

The supplied source files remain untouched. Third-party fonts retain their own licenses; no font binaries are redistributed here.

## Developer checks

Node.js and npm are only needed to run the included developer tests:

```sh
npm install --ignore-scripts
npm test
```

The tests exercise the actual interaction script in a DOM environment. See `VERIFICATION.md` for the delivery checks and their limits.
