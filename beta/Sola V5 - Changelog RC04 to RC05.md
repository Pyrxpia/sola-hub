# Sola V5 — Changelog RC04 → RC05

**Status:** RC05 is RC04 with a trim pass over panels 02–05, 08–11 and the tracker preamble: duplicate rules deleted, sibling bullets merged, shared tracker rules stated once in the Drawer preamble, Prose Textures turned into a three-way pick (Off / Lean / Full, default Full), and a new optional **Soapbox 📣** mode for Chatterbox (default off). No output template, tag or field changed; the regex packs are unchanged. Engine: blocks 164 | enabled 164 | prompt variables 119 (`on_prose_textures` → `pick_textures`, same slot and id; `on_soapbox` added) | chars 279805 → 271799 (−8006, Soapbox's two branches included).

**Default prompt, measured on Lumiverse's own assembler** (full dry-run render, same test character, RC04 vs RC05 at defaults): 24,022 → 22,734 tokens (−1,288, −5.4%). That counter includes the surrounding scaffold, so it is not comparable to `tokens.py` (RC04 = 21,895 there); `tokens.py` has not been run on the final file, and the v1 draft measured −1,143 on it. Soapbox on: 22,952 (+218 over RC05 defaults); Soapbox off renders Chatterbox byte for byte as RC04 did.

## At a glance

- **Prose Textures is Off / Lean / Full** (`pick_textures`, default Full). Lean keeps panic, rage, dissociative, joy and dreamy and drops grief, tender and quiet: the three states that tested idle (3 generators, blind cross-family judge, N = 3 per cell, no local model). Lean renders 212 tokens lighter.
- **Shared tracker rules once.** The Drawer's `<tracking_consistency>` gains two sentences (read the latest ledger and carry every row forward, changing one only on an established event or elapsed time; fields stay on one line with no bars, quotes or angle brackets). The restating bullets are removed from Board, Roster, Infirmary, Marginalia, Master HUD, HUD Summary and others. Empty-container rules (`empty board`, `empty roster`, `empty`) stay per block.
- **Warm rewrites.** Authentic NPCs `shifting stance` and Anti-Softening `leverage` / `vulnerability` say what moves an NPC instead of what never does. **Not probed yet** (see below).
- **Heart Engine** loses its four faculty rules; the output fields already define them.
- **Duplicates removed or merged** across Core, Prose, World, Voice, Intimacy, Explicit, Story Rhythm, Beat Craft and the trackers. Every merge keeps both concepts; the full line-level list is in the combined draft's appendix.
- Anti-Orbiting and Dynamic World now say "the world moves while unwitnessed" once, in Dynamic World.
- **Soapbox 📣 (`on_soapbox`, default off, needs Chatterbox on; panel 12, right after `on_sola_chatterbox`).** It is an `{{if}}` / `{{else}}` inside the Chatterbox block: only the goal and the first rule bullets swap; the five-message thread, `(U: …)` handling, voice, containment and output format are written once. On, Sola posts only when something funny, amazing, shocking or odd catches her (a quiet turn appends no chatterbox), and when the story needs a fact, motive or fork she does not know she asks the user one short question that names the gap (at most one in three turns; the answer becomes direction). The questions are ordinary `<sola_text>` bubbles, so no tag or regex changed. The Drawer's chatterbox reminder reads "only when something catches me" when Soapbox and Chatterbox are both on. No new `sola_opt_*` variable, so the tracker list and zeroing line are untouched.

## Change list by panel

| panel | blocks edited | default-on tokens | all-on tokens |
|---|---:|---:|---:|
| 02 Core | 6 | 81 | 211 |
| 03 Prose | 5 | 178 | 191 |
| 04 World & Action | 7 | 111 | 301 |
| 05 Voice | 5 | 181 | 190 |
| 08 Intimacy | 6 | 49 | 133 |
| 09 Explicit & Kink | 7 | 0 | 205 |
| 10 Length & Rhythm | 2 | 49 | 49 |
| 11 Trackers | 12 | 507 | 782 |
| 12 HUD, Easel & Extras | 3 | 27 | 97 |
| Drawer preamble | 1 | -52 | -52 |
| **Total (trim)** | **54** | **1131** | **2107** |
| Soapbox (Chatterbox block, Drawer reminder) | 2 | +218 when on, 0 off | +218 |

Blocks with changed text vs RC04: 55 (the Drawer sits in both rows). Same 164 blocks, same ids, same order.

Per-block detail: the combined draft's appendix (kept in the drafts folder).

## Decisions

- **D0 — Lean is a pick, never a cut.** Sola is written for the weakest model it should serve; the probe supports a pick (Full default), not a deletion.
- **D1 — Prose Standards `emotion` stays** as the only always-on owner of "feeling shown by the body". Textures `show it` folded into its goal; Emotional Speech `body first` kept (co-creator review).
- **D2 — Story Grounding is unchanged.** `purposeful speech` and `human friction` are about register under tension; Prose Standards' lines are about word choice.
- **D3 — Idiolect `contrast` stays its own line;** the accent section still bans mixed regional stereotypes and comic eye dialect.
- **D4 — Empty-container rules stay per block.** The preamble's "none, unchanged, or unknown" is about fields, not an empty `<sola_board></sola_board>`.
- **D5 — Scene Facts `observable facts` and Notebook `director privacy` ("visible to the user") stay:** scope rules, not the preamble's unspoken rule.
- **D6 — Soapbox is a swap inside Chatterbox, not a second block** (an `{{if}}` / `{{else}}` swap). Whole-block duplication cost 1,001 raw tokens against 803 for the inline version, and the shared parts could drift apart. Default off because a small model may post on quiet turns or ask too often (untested).

## Not verified

- No model test of any merge or deletion except Prose Textures.
- **Soapbox test (108 samples, claude-sonnet-5.5, deepseek-v4-pro, deepseek-v4.1-flash, 3 per cell, pre-registered, single turn):** quiet turn: classic posted 9/9, Soapbox 0/9; funny, shocking and odd turns: Soapbox posted 9/9 each; gap scene ("the old place", no card names it): Soapbox asked 7/9, classic 1/9, each question naming the gap with options; `(U: …)` texts answered 9/9. **One pre-registered miss:** Sonnet asked in 2 of 3 odd scenes (limit 1), both forks, not facts; across funny, shocking and odd scenes Soapbox asked 4 of 27. Not tested: multi-turn spacing, an unanswered question, the full Sola prompt, a local model, the display regex.
- **Open question:** should `unsure` cover forks (closer to "directors DMs") or only facts and motives? Also check how an answer treated as established direction meets the Easel's "never assume the user's next action".
- **Probe before calling RC05 final:** Authentic NPCs `shifting stance` and Anti-Softening `leverage` / `vulnerability` (user pleads at an NPC who holds leverage; control must fail first; pass is the stance holding 3 of 3).
- `tokens.py`, `matrix.py pick_textures` (expect 0 / 5 / 8 state headings) and `matrix.py on_zero_trackers` were run on v1 by the co-creator, not on this file.
- The Lumiverse-PresetTools validator reports the same unclosed-`if` family on RC04 and RC05 (a false-positive pattern for gates inside `setvar`); RC05 adds three more of the same kind in Prose Textures (the Lean gates). The co-creator's engine reports 0 diagnostics for the same blocks.
- Sections 06, 07, Slowed Pace and the rest of 12 were not read.

## Build and checks

Built from the Lumi preset by the converter (`Conversion RC05/`, `Complete RC05/`): Lumi, ST and Tavo presets; Full and Lite regex packs for Lumi, ST and Tavo; Complete (preset + embedded regexes) and Complete Lite for each.

- Converter suite: 38 checks, 0 failed.
- Lumiverse's real import path: all three Lumi presets import; both Lumi regex packs import 472 / 468 scripts, 0 skipped, 0 errors.
- Lumi assembler dry-run, RC05 with Soapbox off / on / on with Chatterbox off: all render, no literal macros left; Soapbox off renders the Chatterbox block identical to RC04's; the Drawer reminder appears only with both switches on.
- Regex packs: the ST packs and the Tavo zips are byte-identical to RC03's (same file names and contents), because no tag or template changed.
- Converter change: Lumi's `on_soapbox` is an inline switch, which the generic converter would freeze to its default, so ST and Tavo would have lost the mod. The converter now ships the classic Chatterbox as is and adds a **disabled prompt `Sola Soapbox 📣`** right after it; enabling it replaces the Chatterbox rules and sets a flag (`sola_soapbox`) that the Drawer reminder reads. The Mind block zeroes the flag each turn. Checked structurally and with the converter's tests; not run in a real ST or Tavo.

## ST / Tavo

- Done: ST and Tavo presets, regex packs and Complete builds are in `Conversion RC05/` and `Complete RC05/`.
- No output template, tag or field changed, so the regex packs are RC03's, renamed, byte for byte.
- `pick_textures` has no ST equivalent: the builds bake it at Full (the Lean gates drop out); carry Lean as a second disabled prompt if wanted.
- Soapbox ships as one disabled prompt after Chatterbox: enable it (with Chatterbox on) to switch the mode.
- Two sentences added to the preamble inside the `sola_trackers_any` gate; the rest is deleted or merged bullets in plain text.
