# Sola V5: RC05 to RC06

**Status:** beta build made (23 Nov). RC06 starts as RC05 plus one option; the entries below run in the order they landed. Every build in `Conversion RC06/` and `Complete RC06/` was regenerated from the same Lumi preset, and the three suites plus the import validator pass.

## Anti-Name-Slop: List of 20 📋

The names pick (`pick_names`) gains a fourth option, **List of 20 📋** (`list20`): Off / Standard / Randomised / List of 20. Default stays Standard.

When picked, one bullet joins the names reference Sola reads in her thinking step (next to the Randomised letter draw, same gating):

> recurring name: if a person I introduce this turn may stay and serve the plot for a while, I first list 20 candidate names here in my thinking, each following the rules above, and keep the 20th. walk-ons and one-scene roles never get the list; they stay unnamed.

- Idea from a user suggestion. Its other half ("function over name": name the role, unnamed is valid) was already in the block, so it was not added again.
- The list goes in the thinking step, so it should not appear in the story. Not tested on any model yet; the plan is a small A/B against Randomised (repeated names across about 30 introductions, 2 to 3 models).
- ST and Tavo: no option. The converter freezes the pick to its default (Standard), the same as Randomised.
- Regex packs: unchanged from RC05 (RC03's rules plus RC04's OOC fence guard), renamed.

## Ash's version merged in

Ash's separate RC06 differed from RC05 in one thing: the Chatterbox and Soapbox switch definitions (`on_sola_chatterbox`, `on_soapbox`) and their saved values moved from the 🎛️ 12 marker to the 🧠 00 Sola's Mind block. Taken as is; no prompt text changed with it. Our edits (List of 20, voice rule and voiced BEAT lines, trimmed PEOPLE example) did not overlap and are all kept.

## Voice (Story Review)

- The "first line" and "gut" bullets in Sola's Story Review are one `voice:` bullet: the thinking opens in the Mind's voice and every field stays in it; the decision is what it would be in plain words.
- Each Mind's `sola_think` gets one voiced `BEAT:` example line between `open:` and `gut:`. The neutral example's PEOPLE line is trimmed to offset the size (+45 chars in the Story Review overall).
- Not measured: a blind RC05/RC06 test could not observe the thinking (the models' reasoning is hidden, Anthropic's filter refused the Sonnet runs), and reply quality showed no clear difference (44%, noise).

## Reasoning consistency

- Lightning's pace voice bullet and Stop Thinking So Hard's voice bullet now say what the Story Review's merged bullet says: opener, fields and sign-off stay in the Mind's voice.
- Post-History ("before I write") gains one `carry` bullet: two things from the sheet must show in the reply (an NPC's want acted on, the opener chosen); a pure OOC turn carries nothing. It renders in full and Lightning.
- Not done: the drawn-trajectory weighting (A is 3 of 10) is unchanged, pending a call.

## Module comments rewritten

- Every block's `{{// }}` comment now says, in plain words, what the module does, when to use it, and what it pairs or clashes with. Comments were added to the eight Minds, Language Selector, World Info (After), Last Word, Risky MiMo and Adult Fiction Note, which had none.
- Comments only: the model sees no difference (the rendered prompt is byte-identical before and after across 12 configurations). Before/after list: `Sola V5 - Module Comments Review.md`.
- ST, Tavo and Complete builds include it (rebuilt with the block order change below).

## Reasoning: weight tags, creative questions, and three blocks that work together

Story Review, Lightning and Stop Thinking So Hard were reworked together (block texts tested as "Reasoning Room v3").

- **Weight tags.** Every line of the reviews is marked [canon] (continuity kept consistent), [craft] (style followed by default) or [spark] (an optional creative question, answered only if it helps). One key line explains them.
- **Creative questions.** One [spark] per Story Review section, for example "what does each of them want right now that has nothing to do with {{user}}?", "what happens next on its own, and is that richer than my plan?" and "which earlier detail could return now and mean something new?". Lightning's call sheet gets one before BEAT. The drawn trajectory is tagged [spark] (it was already a proposal).
- **A check before the anchors lock.** The decided beat is read once against established facts; a conflict is fixed there.
- **One owner per rule.** The weight key, sheet and anchors belong to Story Review, else Lightning, else Stop Thinking So Hard's own short plan. Pace belongs to Lightning. Effort, "no meta-burn" and the hard stop belong to Stop Thinking So Hard when it is on, else Lightning, else Story Review's close. Gut lines are 3 with Story Review alone, 1 with Stop Thinking So Hard, 0 with Lightning. Routing reads the UI switches, so every combination prints each rule exactly once, and each block still works alone (Stop Thinking So Hard alone brings a three-line plan).
- **Reworded:** Story Review's "steady" and Lightning's "first decision stands" give a reason instead of banning hesitation words. Lightning's anchor bullets moved under their own heading (lists stay at ten entries or fewer).
- **Dropped during testing:** a "writing room" contract (who decides, whose judgment counts, rules that "never bend"). With an adult card, Claude's and Gemini's provider filters blocked it as a suspected jailbreak while RC06 passed. v3 without it passes.
- Every earlier check is still present; module reminders are read the same as before. Rendered reasoning grows by about 1.3k characters with Story Review alone.
- Checked: all 8 switch combinations in the real Lumi assembler, import validator OK. Regex packs unchanged (reasoning text has no regex).

## Block order: modules regrouped

Some modules sat in a category that did not match what they do. Eight blocks moved; no prompt text changed.

- **Sola Directors OOC 🗨️** and **Sola Chatterbox 💬** sit together at the end of 📜 02 Core (everything where Sola talks to you outside the story). Their switches stay in 🧠 00 Sola's Mind.
- **⚜️ Oath** sits right before the Master Blueprint, the block that reads it. This frees Core to hold OOC, which reads Director Mode and so has to come after the Agency picks.
- **Fandom Canon Consistency 🏛️** moves from 02 Core to 🌍 04 World & Action, next to its switch.
- **Story Rhythm 🎶** and **Beat Craft 🥁** move from ⏱️ 10 Length & Rhythm to ✍️ 03 Prose, switches included. Their text was always part of the prose rules.
- **Pocket Bridge 📱** moves from 🗂️ 13 Assembly to 04 World & Action, switch included (from 🔌 15 Extensions). It cannot go into 15: the Blueprint reads it, so it must sit above the Blueprint.
- **Optional JB 🔓** sits next to Policy Scan in ⭐ 14, no longer between Lightning and Stop Thinking So Hard. Its switch stays in 🔓 17 Jailbreaks.
- **Lumi update note:** Lumi saves a switch's value under the category that holds it. If you update RC06 in place (LumiHub), Story Rhythm, Beat Craft and Pocket Bridge go back to their defaults (on, on, off). A fresh import is not affected. ST and Tavo have no categories, so nothing resets there.
- Checked: the model sees no difference. Lumi's real assembler gave byte-identical messages before and after in 625 switch setups: every switch flipped, every dropdown option, and every pair of blocks where one reads the other, with both on. Two layouts that are wrong on purpose were caught (Chatterbox above Riot; OOC above the Agency picks). The import validator passes.
- ST: the prompt list shows the blocks in their new places; the prompt texts and on/off flags are unchanged. Real SillyTavern sent the same messages before and after in 8 setups (defaults, OOC + Director Mode, Soapbox, Fandom, JB + Policy Scan, Lightning only, Rhythm and Beat off + Stop Thinking So Hard, all three Zero switches); random draws differ from run to run and were masked.
- Tavo: the simulator gives the same text. With Optional JB on, a few blank lines change place in the merged system message. Not tested in real Tavo.
- Not done yet: panel order matching block order, new category headers, the unused Mind Palace Placement dropdown, and the related comments.

## Golden's Chatterbox avatar

- Golden's Chatterbox avatar is the new Golden Sola portrait (`assets/Golden Sola.png` on sola-hub) instead of the generic Sola OG picture. One rule changed, `14.05a Card: Chatterbox Golden / Classic First-Paint Palette`, in Full and Lite; Classic (no mind) shares that rule, so it shows the new portrait too. The container default (`14.04`) keeps Sola OG.
- ST and Tavo packs and the Complete builds were regenerated; only that rule differs. Checked: the import validator passes for both packs, and a Golden Chatterbox run through the Full pack in a browser shows the new avatar. Previous files: `*.pre-golden-image.bak` and `Complete RC06/pre-golden-image backup/`.

## Dialogue Colours inside the Easel and scene headers

Two display-only rules, from Ash's export (`reports/dialogue-colour-strip-export.json`), stop Dialogue Colours' `<font>` wrappers from landing inside Sola's own markup. Full 491 → 493 rules, Lite 487 → 489.

- **`06.36 Easel: Strip Dialogue-Color Tags`** unwraps the `<font>` around an Easel field or chip span and keeps the span. Written over: the exported version anchored on the raw `<sola_easel>` tag, which the Easel card rule has already replaced by the time the strip runs, so it never fired; measured on a 28 KB coloured message it also cost 2.2 s (a failing back-scan per `<font>`). The shipped rule works forward instead: it matches `<font>…<span>…</span></font>` and only fires where one of Sola's own classes follows within 2500 characters. Costs nothing measurable (9.2 ms vs 9.6 ms for the same chain before), leaves dialogue colours in prose and headers alone, and keeps the chip spans (`sola-ec-escalation`, `sola-ec-field`) intact. One case keeps its font: the Vault line, whose span wraps a `<div>`.
- **`10.00 Header: Strip Dialogue Colors Font Tags (Scoped)`** removes the wrappers inside an opening `<scene_header … />` / `<mobile_header … />` tag before the header renderers run. Taken as exported; checked that the header text renders with no font inside the tag and prose next to it keeps its colour.
- Placement: 06.36 sits just before the Easel chip rules (it must run before them), 10.00 just before `10.01`. Not tested in a live Lumi chat; the packs pass the import validator (493/489 rules) and the converter suites, and ST, Tavo and the Complete builds are regenerated. Previous packs: `*.pre-dialogue-colour-strip.bak`, `*.pre-dialogue-colour.bak`, `Complete RC06/pre-dialogue-colour backup/`.

## Build

- Converter suite: 38 checks, 0 failed. Lumi, ST and Tavo presets, Full and Lite regex packs, and the Complete builds are in `Conversion RC06/` and `Complete RC06/`.
- The ST and Tavo presets and the Complete builds were rebuilt after the block order change. The previous ST/Tavo builds predated the comment rewrite and the reasoning rework, so those reach ST and Tavo with this rebuild. Previous files: `*.pre-reorg.bak` in `Conversion RC06/` and `Conversion RC06/reports/`, and `Complete RC06/pre-reorg backup/`.
- Regex packs: block order needed no regex change.
- Not pushed to GitHub yet.

## RC06 final fixes, before the beta build

Three things were wrong in the export that Ash and Pyro swapped, all fixed here rather than left for the next round.

**The Model Patches comment leaked its own text.** That block's `{{// }}` comment spelled `{{model}}` and `{{matches}}`, so the first `}}` inside it closed the comment early and the rest printed at the top of the prompt, about 500 characters plus ten model names, but only for anyone with a patch switched on. The comment is rewritten without braces and keeps the model names, which are the useful part. `tests/test_sola.py` now fails an export whose `{{// }}` comment quotes a macro, so the next one is caught at build time, not by a reader.

**`pick_color` reused the `none` id.** HTML Font Tags was added with the id `none`, which None had been shipping with, so a saved "None" came back as font mode. HTML Font Tags now has its own id and None has `none` back; the four modes render their own branch (named, gradient, font with `<font color="#">`, none).

**The six patch headings named their models.** Swapped to Ash's wording: `## forecasts and feelings`, `## filler and pushback`, `## filler and one pass`, `## secrets and newcomers`, `## own words`, `## clerks and demands`, with the goals he wrote and `humor` for the house spelling. Nothing model-facing.

**ST and Tavo get the patches as prompts.** The branches sit behind `{{getvar::sola_patch}} == <family>`, which ST and Tavo cannot evaluate, and the pick freezes to Off, so the module vanished in conversion. `add_model_patches()` in `sola_convert.py` now replaces the block with six disabled prompts, `Model Patch: Gemini`, `GLM`, `Kimi / Qwen`, `MiMo`, `DeepSeek`, `Flash tier`, each carrying its branch body plus its `* patch:` gate line, no setvars and no conditions (the Soapbox pattern). A user enables the one that matches their model. The converter no longer reports six unevaluable conditions.

**US spelling pass.** Ten words in prompt text and comments went to US spelling: `skin colour`, `grey` (two places), `humour`, `labelled`, `self-labelling`, the `Randomised 🎲` option label and its sentence, and two comment lines in HTML Font Tags. Three rule names in both Lumi packs went from `Normalise` to `Normalize`, and the `06.36` description from `Dialogue Colours` to `Dialogue Colors`. Left alone: the tarot card `Judgement` (its proper name) and the option value `randomised`, which a saved pick compares against, so renaming it would silently reset the choice to Standard. Off now differs from Ash's export in three places, all of them spelling: `warm gray undertone`, `labeled as which`, `Guinevere in gray wool`.

**Easel evidence check: 60% cheaper on long replies.** `06.32` and `06.32a` both scan backwards from a `Check:` line to its opening `<sola_easel>` with an uncapped `[\s\S]*`. A Check line with no card above it therefore made the engine try every start position: 50 ms on a 52 KB reply and 174 ms on 104 KB in V8, several times that in a mobile WebView. The backward scan is now capped at 20,000 characters, which is the only change to either pattern. Measured on the Full pack: the 52 KB chain went from 59.6-67.4 ms to 24.8 ms; `06.32` scales 51 KB 17.8 -> 0.7 ms, 102 KB 50.6 -> 1.3 ms, 204 KB 159 -> 3.1 ms. Ten fixtures (one card, two cards, checks outside, CRLF, unclosed card, mixed, checks 6 KB into a card, status-only) come out byte-identical; the only difference is a Check line more than 20,000 characters past its opening tag, which now stays plain text. A merged single rule was not possible: the two rules emit different markup (five rows against one), so an alternation could only keep one of the two shapes.

## Build

- Presets: Lumi 168 blocks / 120 definitions; ST and Tavo 171 prompts, 74 enabled, six disabled `Model Patch:` prompts.
- Regex packs: Lumi Full 493 / Lite 489; ST 490 / 487; Tavo 493 / 489. `06.36` and `10.00` are in all of them.
- Suites: converter 41 checks, regex 81 checks, preset 438 checks, all 0 failed. Import validator: 7 presets and 4 packs, 0 errors.
- Off is byte-identical to Ash's export (95,764 characters), eight pick states render with 0 diagnostics and 0 model names, no `{{// }}` comment in 168 blocks quotes a macro.
- Still open: flash is matched before gemini, so a `gemini-*-flash` id takes the flash branch; Auto routing is unverified offline (`{{matches}}` does not resolve in PresetTools); the packs have no rules for model-written `<font color>` tags, so font mode is untested against them; the six branches are unprobed, and two of three probes did not reproduce the habit with the patch off.
- Previous files: `*.pre-B.bak` and `*.pre-patchfix.bak` in `Conversion RC06/`, `*.pre-rc06final.bak` for the ST and Tavo packs, and `Complete RC06/pre-patchfix backup/`.
