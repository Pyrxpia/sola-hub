# Sola V5 Flame: RC01 beta

Release candidate 01 of Sola V5 Flame, plus Kindling V3. This is a beta: it has been checked against the host's own prompt assembler (Lumiverse) and upstream SillyTavern, but it has not been run against a live model, and Tavo has only been checked in a simulator, not on a device.

## Which file do I want?

**Easiest: a "Complete" file.** The preset and the full regex pack in one file.
- Lumiverse: `RC01 Sola V5 Flame Lumi - Complete` (or `Complete Lite` for the lighter regex pack).
- SillyTavern: `RC01 Sola V5 Flame ST - Complete` (or `Complete Lite`). SillyTavern will ask once whether to allow the embedded regex; say yes.
- Tavo: `RC01 Sola V5 Tavo - Complete.zip` (or `Complete Lite`). It holds the preset and its regex zip; import the two separately.

**Separate files.** The preset on its own (`RC01 Sola V5 Flame Lumi / ST / Tavo`) and the regex packs (`RC01 Sola V5 Full` or `Lite - Regex Pack`, one per platform). Full is the whole pack; Lite is the smaller one (a few rules fewer, and it leaves out the Island Emphasis rules).

**Kindling V3.** A smaller sibling preset, one file per platform, regex already inside.

`Sola V5 WIP - Master Changelog.txt` is the full history of what changed.

## Notes
- ST and Tavo builds cut the features that only exist in Lumiverse (Council, Memory, Now Playing, Pocket, Crossroads and a few others).
- The Adult Fiction Note is a new small module and is off by default; switch it on in the preset if you want it.
- Tavo: some regex rules use patterns that hung Tavo on Android before. The Island Emphasis rules (Full pack only) are the riskiest and are untested there; if the app stalls, use the Lite pack and tell me.

Found a problem? Say which file, which platform, and what you did.
