# Sola V5 Flame: RC05 beta

Release candidate 05 of Sola V5 Flame, plus Kindling V3. This is a beta: it has been checked against the host's own prompt assembler (Lumiverse) and upstream SillyTavern, but it has not been run against a live model, and Tavo has only been checked in a simulator, not on a device.

## What's new since RC03 (RC04 and RC05)

- **Soapbox 📣, optional, off by default** (`on_soapbox`, next to Chatterbox, which it needs). Sola posts to the chatterbox only when something funny, amazing, shocking or odd catches her, and when the story needs a fact, a motive or a fork she doesn't know, she asks you one short question instead of guessing. Off, Chatterbox renders exactly as before. In ST and Tavo it is a disabled prompt right after Chatterbox; enable it to switch the mode on.
- **A lighter prompt.** RC05 trims duplicate and overlapping rules across Core, Prose, World, Voice, Intimacy, Explicit, Story Rhythm, Beat Craft and the trackers. Measured on Lumiverse's assembler, the default prompt is about 5% smaller than RC04 (24,022 to 22,734 tokens). Shared tracker rules are now stated once, in the Secret Drawer.
- **Prose Textures is Off / Lean / Full** (default Full). Lean keeps panic, rage, dissociative, joy and dreamy and drops grief, tender and quiet, which tested idle. In ST and Tavo it is baked at Full.
- **Anti-Name-Slop is Off / Standard / Randomised** (RC04). Randomised brings back a per-turn first-letter draw, read under the `Names:` row of the Story Review (it does nothing with both reviews off).
- **Five modules are now off by default** (RC04): Dirty Talk, Sola Directors OOC, Sola's Infirmary, NPC Roster and Sola's Marginalia. Switch on any you want.
- The Mind Palace placement pick is now `Mind Palace Placement (CoT)`. Heart Engine loses its four faculty rules (the output fields already define them).

**Updating from RC03 (or RC04).** Import the RC05 preset and the RC05 regex pack with it (or use a Complete file). Remove the old regex pack first; only one pack (Full or Lite) should be imported at a time. The regex packs are the same rules as RC03's, renamed, because no tag or template changed. Saved values for `on_anti_name_slop` and `on_prose_textures` do not carry over to the new picks; check them once.

**Not tested yet.** The trimmed wording has no model test except Prose Textures. Soapbox was tested on 108 single-turn samples across three models (quiet turns stayed silent, notable turns posted, gaps were asked about), but not over several turns, on a local model, or with the display regex. The two warm rewrites (Authentic NPCs `shifting stance`, Anti-Softening `leverage` / `vulnerability`) were not probed.

## Which file do I want?

**Easiest: a "Complete" file.** The preset and the full regex pack in one file.
- Lumiverse: `RC05 Sola V5 Flame Lumi - Complete` (or `Complete Lite` for the lighter regex pack).
- SillyTavern: `RC05 Sola V5 Flame ST - Complete` (or `Complete Lite`). SillyTavern will ask once whether to allow the embedded regex; say yes.
- Tavo: `RC05 Sola V5 Tavo - Complete.zip` (or `Complete Lite`). It holds the preset and its regex zip; import the two separately.

**Or the pieces:** the base preset (`RC05 Sola V5 Flame Lumi`, `- ST` or `- Tavo`) plus one regex pack from the list below.

## Regex packs

| | Lumi | SillyTavern | Tavo |
|---|---|---|---|
| Full | `RC05 Sola V5 Full - Regex Pack - Lumi (Manual Folders).json` | `RC05 Sola V5 Full - Regex Pack - ST.json` | `RC05 Sola V5 Full - Regex Pack - Tavo.zip` |
| Lite | `RC05 Sola V5 Lite - Regex Pack - Lumi (Manual Folders).json` | `RC05 Sola V5 Lite - Regex Pack - ST.json` | `RC05 Sola V5 Lite - Regex Pack - Tavo.zip` |

Full and Lite differ in how much display work the regex does. Import one, never both.

## Checks run

Lumiverse assembly and rendering, upstream SillyTavern for the ST builds (line for line against Lumi's assembler across the switch cases), and Tavo through a simulator. Nothing here has been run against a live model, and nothing on a real Tavo device.

The full list of changes, and what is still open, is in `Sola V5 WIP - Master Changelog.txt`. The block-level detail for this release is in `Sola V5 - Changelog RC04 to RC05.md`.
