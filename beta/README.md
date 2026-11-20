# Sola V5 Flame: RC03 beta

Release candidate 03 of Sola V5 Flame, plus Kindling V3. This is a beta: it has been checked against the host's own prompt assembler (Lumiverse) and upstream SillyTavern, but it has not been run against a live model, and Tavo has only been checked in a simulator, not on a device.

## What's new since RC02

- **Living Psyche, off by default.** A new block holds Sola's inner life, and it is switched on by `on_living_psyche`. Off, the preset behaves as RC02 did.
- **Length is no longer hard-coded in the Oath.** The ~400-500 word default is gone; the chosen style block sets the target, and the Easel and post-history lines only apply it when one is set. Two new style blocks ship with this: Bookey-quo (400-500 words) and Adaptive (No Target).
- **Colour tags are display only.** Both colour blocks now say the palette tags the speech line and never the character's looks, metaphors or moods, and the NPC Roster tracks a returning NPC's dialogue colour so the tag stays consistent.
- **The Monitor's thoughts are private.** The inner voice is mine and the reader's; the scene carries on as if it went unheard.
- **The Secret Drawer is tighter.** Journal entries are consented and drawn only from the table, and Sola's asides are capped at fifteen words.
- Mind Palace is rebuilt as a CoT block, replacing the old one.

**Updating from RC02.** Import the RC03 preset and the RC03 regex pack with it (or use a Complete file). Remove the RC02 regex pack first; only one pack (Full or Lite) should be imported at a time.

## Which file do I want?

**Easiest: a "Complete" file.** The preset and the full regex pack in one file.
- Lumiverse: `RC03 Sola V5 Flame Lumi - Complete` (or `Complete Lite` for the lighter regex pack).
- SillyTavern: `RC03 Sola V5 Flame ST - Complete` (or `Complete Lite`). SillyTavern will ask once whether to allow the embedded regex; say yes.
- Tavo: `RC03 Sola V5 Tavo - Complete.zip` (or `Complete Lite`). It holds the preset and its regex zip; import the two separately.

**Or the pieces:** the base preset (`RC03 Sola V5 Flame Lumi`, `- ST` or `- Tavo`) plus one regex pack from the list below.

## Regex packs

| | Lumi | SillyTavern | Tavo |
|---|---|---|---|
| Full | `RC03 Sola V5 Full - Regex Pack - Lumi (Manual Folders).json` | `RC03 Sola V5 Full - Regex Pack - ST.json` | `RC03 Sola V5 Full - Regex Pack - Tavo.zip` |
| Lite | `RC03 Sola V5 Lite - Regex Pack - Lumi (Manual Folders).json` | `RC03 Sola V5 Lite - Regex Pack - ST.json` | `RC03 Sola V5 Lite - Regex Pack - Tavo.zip` |

Full and Lite differ in how much display work the regex does. Import one, never both.

## Checks run

Lumiverse assembly and rendering, upstream SillyTavern for the ST builds (line for line against Lumi's assembler across the switch cases), and Tavo through a simulator. Nothing here has been run against a live model, and nothing on a real Tavo device.

The full list of changes, and what is still open, is in `Sola V5 WIP - Master Changelog.txt`.
