# JavaScript architecture

The browser uses five shared runtime files and generated data bundles. Runtime code controls behavior; canonical JSON controls Japanese text, contextual vocabulary, translations, answers, and explanations.

## Shared browser runtimes

| File | Purpose |
|---|---|
| `site.js` | Shared navigation, disclosures, and English-translation visibility. |
| `lesson-topics.js` | Topic selection, hash navigation, and previous/next topic controls. |
| `readings.js` | Per-word and whole-page furigana reveal controls. It never guesses readings. |
| `vocabulary.js` | Vocabulary hover/focus/tap details, search, filters, compounds, kanji breakdowns, occurrence links, and the mobile drawer. |
| `quiz.js` | Assessment scoring, reset/submit modes, and post-answer English translations, explanations, and rationales. |

These runtimes are intentionally shared by Parts 1–4 so behavior cannot drift between Parts.

## Generated browser data

| Browser input | Owner |
|---|---|
| `data/part1-vocabulary-data.js` and `data/part1-quiz-data.js` | `content/part-1.json` plus the shared vocabulary bank |
| `data/part2-vocabulary-data.js` and `data/part2-quiz-data.js` | `content/part-2.json` plus the shared vocabulary bank |
| `data/part3-vocabulary-data.js` and `data/part3-quiz-data.js` | `content/part-3.json` plus the shared vocabulary bank |
| `data/part4-vocabulary-data.js` and `data/part4-quiz-data.js` | `content/part-4.json` plus the shared vocabulary bank |
| `data/all-vocabulary-data.js` | Validated union of vocabulary referenced by all four Parts |

Every lesson page loads exactly one complete vocabulary bundle and one complete quiz bundle for its Part. `vocabulary.html` and general whole-site vocabulary surfaces load only `data/all-vocabulary-data.js`.

The old base-and-overlay files were removed. The historical files were `vocabulary-data.js`, `quiz-data.js`, `part1-vocabulary-data.js`, `part1-book-quiz-data.js`, `learning-support-data.js`, and `learning-support-quiz-data.js`.

## Browser load order

Part N pages load data before the consuming runtime:

```text
site.js
lesson-topics.js
readings.js
data/partN-vocabulary-data.js
vocabulary.js
data/partN-quiz-data.js
quiz.js
```

The shared build-time dictionary, `content/shared-vocabulary.json`, is never fetched by a lesson page. Canonical Part JSON selects the exact word, inflected reading, contextual meaning, translation, and assessment feedback for each occurrence.

## Edit and rebuild policy

Do not edit files under `assets/js/data/` directly. They start with a generated-file warning and will be overwritten.

After editing canonical JSON, rebuild and check with:

```powershell
python qa/build_part1_lessons.py --write
python qa/build_part2_groups.py --write
python qa/build_part3_sentences.py --write
python qa/build_part4_passages.py --write
python qa/build_part_data.py --part all --write

python qa/build_part1_lessons.py --check
python qa/build_part2_groups.py --check
python qa/build_part3_sentences.py --check
python qa/build_part4_passages.py --check
python qa/build_part_data.py --part all --check
```

## Accuracy and assessment rules

- Resolve the longest complete contextual word or valid inflected form first.
- Keep visible okurigana outside ruby, such as `<ruby>書<rt>か</rt></ruby>いて`.
- Treat compounds such as `学生` as one vocabulary word before showing the secondary kanji breakdown.
- Reject `/`, `varies by word`, `see word reading`, empty, alternative, or surface-mismatched learner readings.
- Keep multiple readings only in the secondary kanji breakdown.
- Give complete non-assessment Japanese instructional sentences natural English translations and word-level support.
- Give every assessment, including Expanded Practice, no pre-answer ruby, vocabulary hover, or English translation.
- Reveal the answer, English translation, decisive explanation, and useful choice rationales only after checking or submitting.

## Where to diagnose a problem

| Symptom | Investigate |
|---|---|
| Wrong contextual reading, okurigana, or compound split | Part occurrence, shared vocabulary record, then `qa/learning_support/resolver.py` |
| Wrong hover meaning or kanji details | Canonical occurrence/record, not `vocabulary.js` |
| Missing instructional translation | Relevant block in `content/part-N.json` |
| Weak or wrong answer explanation | Question `correctExplanation` and `rationales` in `content/part-N.json` |
| Wrong answer scoring | Canonical `correct` value, then `quiz.js` only if the data is right |
| Hover/drawer failure | `vocabulary.js`, generated markup, and script order |
| Furigana-control failure | `readings.js` and generated ruby markup |

Browser-side code must not guess Japanese readings, meanings, translations, or answers.
