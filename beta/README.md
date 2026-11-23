# Sola V5 Flame: RC06 beta

Release candidate 06 of Sola V5 Flame. This is a beta: every build here comes from the same Lumi preset, the converter and regex suites pass, all seven files import cleanly through Lumiverse's own importer, and the ST and Tavo builds were checked against upstream SillyTavern and Tavo's simulator. It has not been run against a live model, and Tavo has not been run on a device.

**This folder holds the presets and the regex packs only.** The Complete files (preset and pack in one) are not here yet.

## What's new since RC05

- **Model Patches 🩹, new and off by default** (`pick_patch`, in section 16). Six short habit blocks written for one model family each, adapted from ARIA 1.0 and put in Sola's voice: Gemini, GLM, Kimi/Qwen, MiMo, DeepSeek, and a flash-tier block for the small models. **Auto** reads the model name and picks one; nothing renders when no branch matches. In ST and Tavo they arrive as six disabled prompts named `Model Patch: <family>`; enable the one that matches your model.
- **HTML Font Tags** joins the dialogue color pick: the same named palette written as plain `<font color="#hex">` tags, for clients that strip CSS. Four modes now: named colors, gradient, font tags, none.
- **The reasoning stack was reworked.** Story Review, Lightning Story Review and Stop Thinking So Hard now tag every line `[canon]`, `[craft]` or `[spark]`, ask one creative question per section, and check a fact before the anchors lock. Each Mind gains a spoken `BEAT:` example. Post-History gains a `carry`: two things from the sheet that must show in the reply.
- **List of 20 📋** joins the names pick (`pick_names`): off, standard, randomized, or a 20-name draw in the thinking step for a name that will recur.
- **Optional JB 🔓 was rewritten** as an adult-manuscript frame with a three-way pick (off, voice, voice and permission).
- **Every block's comment was rewritten** and eight blocks were regrouped by what they do. None of this changes what the model receives: the default prompt is byte-identical to RC05's render at every switch state we compared.
- **Two display fixes.** `06.36 Easel: Strip Dialogue-Color Tags` stops dialogue color `<font>` wrappers from landing inside Sola's own Easel markup and blinding its chip rules, and `10.00 Header: Strip Dialogue Colors Font Tags` does the same inside scene headers. Both are in every pack.
- **US spelling throughout** prompt text and comments, and in the rule and folder names.

## Two things testers should know

- **The Easel audit check rules are capped at 20,000 characters.** `06.32` and `06.32a` read a `Check:` line inside an Easel card. The backward scan to the card's opening tag is now bounded, which took a 52 KB reply from about 60 ms to about 25 ms in desktop V8; uncapped, a stray `Check:` line with no card above it cost 50 ms at 52 KB and 174 ms at 104 KB. The trade: a `Check:` line more than 20,000 characters past its opening tag stays plain text. No real reply comes close, but it is a change, so it is written down.
- **Performance numbers are desktop only.** Measured in desktop JavaScriptCore, not on a phone. If you run Tavo, please report how long a reply takes to render and whether it stutters on long or multi-card replies, especially with dialogue colors on.

## Which file do I want

**The pieces:** the base preset for your app, plus exactly one regex pack.

| | Lumiverse | SillyTavern | Tavo |
|---|---|---|---|
| Preset | `☀️ 🧡 RC06 Sola V5 Flame Lumi 🧡 ☀️.json` | `☀️ 🧡 RC06 Sola V5 Flame ST 🧡 ☀️.json` | `☀️ 🧡 RC06 Sola V5 Flame Tavo 🧡 ☀️.json` |

| | Lumi | SillyTavern | Tavo |
|---|---|---|---|
| Full | `RC06 Sola V5 Full - Regex Pack - Lumi (Manual Folders).json` | `RC06 Sola V5 Full - Regex Pack - ST.json` | `RC06 Sola V5 Full - Regex Pack - Tavo.zip` |
| Lite | `RC06 Sola V5 Lite - Regex Pack - Lumi (Manual Folders).json` | `RC06 Sola V5 Lite - Regex Pack - ST.json` | `RC06 Sola V5 Lite - Regex Pack - Tavo.zip` |

Full and Lite differ in how much display work the regex does. Import one, never both. Import the pack after the preset, and if you are updating, remove the old pack first.

SillyTavern and Tavo packs leave out the `16.00 Crossroads` choice card and the `17.00 Council` notes drawer, because their prompt blocks are cut in those builds. That is intended, and it accounts for the three-rule gap between the Lumi pack and the others.

## What to test

- **Patches.** With the pick at Off nothing should change. With a branch on, the habit should be visible in prose, not described in the text. Auto is the part that needs eyes: tell us which branch fires for your model.
- **Dialogue colors.** All four modes, and especially the Easel: chip colors and field labels should survive with dialogue colors on. That was broken in RC05.
- **HTML Font Tags.** If your client strips CSS, this mode should render colors; if it strips `<font>`, it should not break anything.
- **The Easel.** Cards, audits and trackers should render as before, and a `Check:` line should still turn into a dropdown.

## Open, and not blocking

- Flash-tier is matched before Gemini, so a `gemini-*-flash` id takes the flash branch. Undecided, not a bug.
- Auto routing is unverified offline: the model-name macro does not resolve outside Lumiverse, so Auto needs a live check.
- The regex packs have no rules for model-written `<font color>` tags, so HTML Font Tags is untested against them.
- The six patch branches are unprobed as habits. Two of the three probes that were run did not reproduce the habit with the patch off, so a branch that does nothing is a real possibility.

## Checks run

- Converter suite 41 checks, regex suite 81, preset suite 438: all passing.
- Import validator, Lumiverse's real importer: seven presets and four packs, no errors.
- Off renders byte-identical to the RC06 export it was built from (95,763 characters); eight patch states render with no diagnostics and no model names in the prompt.
- Regex parity across eight switch states on both ST and Tavo, comparing what the model receives, not just the pack text.
- Display performance on three real replies: 3 KB 1.1 ms, 26 KB 12.5 ms, 52 KB 24.8 ms for the whole Full chain. Desktop JavaScriptCore.

The full list of changes is in `Sola V5 - Changelog RC05 to RC06.md`. RC05 files are still in this folder and are superseded.

## Files

| file | bytes | sha256 |
|---|---|---|
| `☀️ 🧡 RC06 Sola V5 Flame Lumi 🧡 ☀️.json` | 433,478 | `8452f6a542db2fc68f6e0cdaf87e4cf827c204b49078ccd0bced9fa0500954e4` |
| `☀️ 🧡 RC06 Sola V5 Flame ST 🧡 ☀️.json` | 373,537 | `3070e7b6b2dea9ac0122360b6587d58e31eb0b84624b99f9954fe72b4b0960f4` |
| `☀️ 🧡 RC06 Sola V5 Flame Tavo 🧡 ☀️.json` | 375,501 | `522d5bcb3aeb6f4c2fcfd78d18e6083109d36a66a219118bb7f9ff091c08417f` |
| `RC06 Sola V5 Full - Regex Pack - Lumi (Manual Folders).json` | 1,302,516 | `391c4c28ca24d2e22db724fe3636e0c1f600a7e801808687ba0995162b922ef1` |
| `RC06 Sola V5 Full - Regex Pack - ST.json` | 1,133,690 | `30ce80ccab15e4315b4aeef107d7ec8ff049f28e5fdf6835d085f53e38b30da3` |
| `RC06 Sola V5 Full - Regex Pack - Tavo.zip` | 469,076 | `ab4474fd73ab93797abad8d67770d7c8f9993d09abf4eebd1f3cff86e871f3b6` |
| `RC06 Sola V5 Lite - Regex Pack - Lumi (Manual Folders).json` | 1,166,193 | `fe27481dd5e10ab5f12177d8a1c1ba191879aab97403e34f5d61528911ad3bce` |
| `RC06 Sola V5 Lite - Regex Pack - ST.json` | 998,894 | `13ef96ee55b6653632cd1049d4042a9a94baa0c26d70ab222a15575f1b787e98` |
| `RC06 Sola V5 Lite - Regex Pack - Tavo.zip` | 443,179 | `1ea883b3e53ebe888d745496f8e98701a443154078a1a7dda869ef048c5397b8` |

Check one with `sha256sum <file>` or `Get-FileHash`.
