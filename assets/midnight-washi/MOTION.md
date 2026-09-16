# Using the animated theme

Version 1.1 adds the atmosphere and interactions missing from the first package. They are enabled in `index.html` and `examples/starter.html`.

When upgrading from version 1.0, replace the entire theme folder with this version and refresh the preview page. In an existing installable app, update that app's own cache version as needed so it serves the new CSS and JavaScript.

## What is included

| Effect | How to enable it |
| --- | --- |
| Drifting background kanji, paper grain and warm glow | `data-mw-background="fixed"` on the full-page body, or `"local"` on an embedded theme wrapper |
| Background follows your pointer | Included with the animated background on fine-pointer devices |
| Large outlined kanji watermark | An `mw-watermark` span inside an `mw-scene` |
| Staggered text and card entrances | `data-mw-reveal="up"`, `"left"`, `"right"`, or `"scale"` |
| Brush draws across the page | `data-mw-reveal="brush"` |
| Stamp lands with a small bounce | `data-mw-reveal="stamp"` |
| Text is revealed like a writing demonstration | `data-mw-reveal="write"` |
| Cards lift and brighten on hover | `mw-hover-card` |
| Slightly angled paper straightens on hover | Add `mw-card--tilted` |
| Cards follow pointer angle | Add `data-mw-tilt` to an `mw-hover-card` |
| Text shifts and changes color on hover | `mw-hover-text` |
| Readings unblur on hover/focus and stay visible when tapped | `mw-word` plus `data-mw-word` |
| 3D flashcard flip | `mw-flip-card` plus `data-mw-flip`, with front/back face markup below |
| Numbers count up when scrolled into view | `data-mw-count="12"` |
| Pause/resume background and decorative motion | A button with `data-mw-motion-toggle` |

## 1. Load the files

```html
<link rel="stylesheet" href="assets/midnight-washi/fonts.css">
<link rel="stylesheet" href="assets/midnight-washi/theme.css">
<link rel="stylesheet" href="assets/midnight-washi/motion.css">
<link rel="stylesheet" href="assets/midnight-washi/brand.css">
<script src="assets/midnight-washi/theme.js" defer></script>
<script src="assets/midnight-washi/motion.js" defer></script>
```

The motion files are independent of `theme.js`; keep `theme.js` when you also use the existing answer-reveal buttons. Fonts remain optional online assets. Keep the folder structure intact so theme.css can import tokens.css.

## 2. Add the atmosphere

For a full-page theme:

```html
<body class="mw-theme" data-mw-background="fixed"
      data-mw-symbols="漢字学語道" data-mw-density="22">
  <header class="mw-header">
    <button type="button" class="mw-button mw-button--quiet"
            data-mw-motion-toggle hidden>Pause motion</button>
  </header>
  <!-- Your page content -->
</body>
```

For a theme embedded within another page, use `data-mw-background="local"` on its `.mw-theme` wrapper. Its backdrop stays inside that section. Use `fixed` for a full-page body so the background follows the viewport while content scrolls.

`data-mw-symbols` controls the characters; they are inserted as plain text. Omit it for the original study-character pool. `data-mw-density` defaults to 22 and is capped at 40. Set the count before initialization. Decorative characters are hidden from assistive technology and cannot intercept clicks.

Change motion strength in `brand.css`:

```css
.mw-theme {
  --mw-background-opacity: 1;
  --mw-parallax-distance: 16px;
  --mw-card-lift: -6px;
  --mw-reveal-duration: 700ms;
}
```

## 3. Animate headings, brush strokes and stamps

```html
<section class="mw-scene mw-stack">
  <span class="mw-watermark" aria-hidden="true">学</span>
  <h1 class="mw-title" data-mw-reveal="left">Your lesson title</h1>
  <div class="mw-brush" aria-hidden="true" data-mw-reveal="brush"
       style="--mw-delay:200ms"></div>
  <p class="mw-lead" data-mw-reveal="up" style="--mw-delay:300ms">
    Your introduction.
  </p>
  <span class="mw-stamp" data-mw-reveal="stamp"
        style="--mw-delay:450ms" aria-label="Lesson 1">01</span>
  <button type="button" class="mw-button mw-button--quiet"
          data-mw-replay hidden>Replay entrance effects</button>
</section>
```

Entrances run once when each element enters the viewport. The replay button replays visible effects in its nearest `.mw-scene` (or the theme wrapper). `--mw-delay` provides the stagger. Content is visible by default, including when JavaScript or the observer API is unavailable. The writing effect is a left-to-right visual reveal; it is not a Japanese stroke-order demonstration.

## 4. Add card and text reactions

```html
<article class="mw-paper mw-stack mw-hover-card" data-mw-tilt>
  <h2 class="mw-subheading mw-hover-text">Your topic</h2>
  <p>Your explanation.</p>
</article>
```

The card lifts on hover. `data-mw-tilt` adds a subtle pointer-responsive angle. It does not turn the whole card into a link; put real links/buttons inside the card for actions. Use `mw-card--tilted` for the slightly rotated paper-card variant.

## 5. Reveal a reading on hover or tap

```html
<button type="button" class="mw-word" data-mw-word lang="ja">
  経験<span class="mw-reading">けいけん</span>
</button>
```

Hover or keyboard focus clears the blur. Click, tap, Enter, or Space toggles whether the reading stays revealed. The reading remains available to assistive technology and is visible without JavaScript.

## 6. Make a flip card

```html
<button type="button" class="mw-flip-card" data-mw-flip>
  <span class="mw-flip-inner">
    <span class="mw-paper mw-stack" data-mw-face="front">
      <span class="mw-eyebrow">THE WORD</span>
      <span class="mw-kanji" lang="ja">学ぶ</span>
      <span class="mw-label">TAP TO TURN</span>
    </span>
    <span class="mw-paper mw-stack" data-mw-face="back">
      <span class="mw-heading" lang="ja">まなぶ</span>
      <span>To learn</span>
      <span class="mw-label">TAP TO TURN BACK</span>
    </span>
  </span>
</button>
```

Click, tap, Enter, or Space flips the card. Only the current face is exposed to assistive technology. Both faces contribute to its height, so the longer face is not cropped. Do not put other interactive controls inside this button. Without JavaScript, both faces remain readable in a vertical stack.

## 7. Animate a number

```html
<span data-mw-count="12">12</span> review cards
<span data-mw-count="1200" data-mw-comma>1,200</span> examples
```

Always write the final number in the source HTML. The effect runs once on entering the viewport and finishes at the supplied number. With reduced motion, a paused page, or no observer API, the final value is shown immediately. Your app supplies the number; the theme does not track learning progress.

## Pausing and reduced motion

Include a `data-mw-motion-toggle` button whenever you enable the drifting background. It pauses drift and stops decorative movement; functional reveals and flips remain usable with immediate state changes. Device reduced-motion preferences are respected automatically, including preference changes while the page is open. The pause button then shows “Reduced motion.” Background motion is also suspended while the document is hidden. Touch devices keep tap interactions; pointer parallax and hover tilt require a fine pointer.

## Dynamic pages

After inserting new theme content:

```js
window.MidnightWashiMotion.init(containerElement);
// Also call this if you inserted data-mw-toggle answer controls:
window.MidnightWashi.init(containerElement);
```

Initialization is safe to repeat. Before removing an entire animated theme wrapper in a single-page app, call `MidnightWashiMotion.destroy(themeWrapper)`. This disconnects its observers/listeners, cancels its animation frames, removes generated decoration, and restores readable card faces. You can then reinitialize the same wrapper.

The visual effects are reusable; full-screen slide navigation and lesson-specific chart behavior remain part of your application.
