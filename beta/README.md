# Sola V5 Flame: RC06 beta

Release candidate 06 of Sola V5 Flame. Every build here comes from the same Lumi preset.

This folder holds the presets and the regex packs. The Complete files are not here.

## What's new since RC05

- **Model Patches 🩹** (`pick_patch`, section 16), off by default. Six short habit blocks, one per model family: Gemini, GLM, Kimi/Qwen, MiMo, DeepSeek, and a flash-tier block for small models. **Auto** reads the model name and picks a branch; nothing renders when no branch matches. In ST and Tavo they are six disabled prompts named `Model Patch: <family>`.
- **HTML Font Tags** joins the dialogue color pick, so the named palette can be written as plain `<font color="#hex">` tags for clients that strip CSS. Four modes: named colors, gradient, font tags, none.
- **The reasoning stack was reworked.** Story Review, Lightning Story Review and Stop Thinking So Hard tag every line `[canon]`, `[craft]` or `[spark]`, ask one creative question per section, and check a fact before the anchors lock. Each Mind gains a spoken `BEAT:` example. Post-History gains a `carry`: two things from the sheet that must show in the reply.
- **List of 20 📋** joins the names pick (`pick_names`): off, standard, randomized, or a 20-name draw in the thinking step for a name that will recur.
- **Optional JB 🔓 was rewritten** as an adult-manuscript frame with a three-way pick: off, voice, voice and permission.
- **Every block's comment was rewritten** and eight blocks were regrouped by what they do. None of it changes what the model receives.
- **Two display fixes.** `06.36 Easel: Strip Dialogue-Color Tags` stops dialogue color `<font>` wrappers from landing inside Sola's own Easel markup; `10.00 Header: Strip Dialogue Colors Font Tags` does the same inside scene headers.
- **Tavo packs cap the Easel audit scan.** `06.32` and `06.32a` look back from a `Check:` line to its opening card; in the Tavo packs that scan stops at 20,000 characters, which takes a long reply from roughly 60 ms to 25 ms on desktop. Lumi and ST keep the uncapped scan. A Check line more than 20,000 characters past its opening tag stays plain text in Tavo.
- **US spelling** throughout prompt text, comments, rule names and folder names.

## Which file do I want

**Easiest: a Complete file.** The preset and the Full or Lite regex pack in one file.

| | Lumiverse | SillyTavern | Tavo |
|---|---|---|---|
| Complete (Full) | `☀️ 🧡 RC06 Sola V5 Flame Lumi - Complete 🧡 ☀️.json` | `☀️ 🧡 RC06 Sola V5 Flame ST - Complete 🧡 ☀️.json` | `RC06 Sola V5 Tavo - Complete.zip` |
| Complete Lite | `☀️ 🧡 RC06 Sola V5 Flame Lumi - Complete Lite 🧡 ☀️.json` | `☀️ 🧡 RC06 Sola V5 Flame ST - Complete Lite 🧡 ☀️.json` | `RC06 Sola V5 Tavo - Complete Lite.zip` |

SillyTavern asks once whether to allow the embedded regex; say yes. The Tavo Complete zips hold the preset and its regex zip, which import separately.

**Or the pieces:** the base preset plus one regex pack. Full and Lite differ in how much display work the regex does; import one, never both.

| | Lumiverse | SillyTavern | Tavo |
|---|---|---|---|
| Preset | `☀️ 🧡 RC06 Sola V5 Flame Lumi 🧡 ☀️.json` | `☀️ 🧡 RC06 Sola V5 Flame ST 🧡 ☀️.json` | `☀️ 🧡 RC06 Sola V5 Flame Tavo 🧡 ☀️.json` |
| Full pack | `RC06 Sola V5 Full - Regex Pack - Lumi (Manual Folders).json` | `RC06 Sola V5 Full - Regex Pack - ST.json` | `RC06 Sola V5 Full - Regex Pack - Tavo.zip` |
| Lite pack | `RC06 Sola V5 Lite - Regex Pack - Lumi (Manual Folders).json` | `RC06 Sola V5 Lite - Regex Pack - ST.json` | `RC06 Sola V5 Lite - Regex Pack - Tavo.zip` |

The SillyTavern and Tavo packs leave out the `16.00 Crossroads` choice card and the `17.00 Council` notes drawer, because those prompt blocks are cut in those builds.

The full list of changes is in `Sola V5 - Changelog RC05 to RC06.md`.

## Thanks

Thanks to **Biotechie** for the Dialogue Colors compatibility patch: `06.36 Easel: Strip Dialogue-Color Tags` and `10.00 Header: Strip Dialogue Colors Font Tags (Scoped)`, which keep Dialogue Colors' `<font>` tags from breaking Sola's Easel and header markup. `10.00` ships as he wrote it; `06.36` ships as a forward-matching rewrite of the same idea.

## Files

| file | bytes | sha256 |
|---|---|---|
| `☀️ 🧡 RC06 Sola V5 Flame Lumi 🧡 ☀️.json` | 433,478 | `8452f6a542db2fc68f6e0cdaf87e4cf827c204b49078ccd0bced9fa0500954e4` |
| `☀️ 🧡 RC06 Sola V5 Flame ST 🧡 ☀️.json` | 373,537 | `3070e7b6b2dea9ac0122360b6587d58e31eb0b84624b99f9954fe72b4b0960f4` |
| `☀️ 🧡 RC06 Sola V5 Flame Tavo 🧡 ☀️.json` | 375,501 | `522d5bcb3aeb6f4c2fcfd78d18e6083109d36a66a219118bb7f9ff091c08417f` |
| `☀️ 🧡 RC06 Sola V5 Flame Lumi - Complete 🧡 ☀️.json` | 1,616,838 | `509b4b874620710f106203c4b6d6e5bdcad6cac8f42eb7b8508e4d0651fbbe0a` |
| `☀️ 🧡 RC06 Sola V5 Flame Lumi - Complete Lite 🧡 ☀️.json` | 1,481,213 | `ef54d5d06f055ae922a0d09eec50988283e9cfafd650e4d57ba95508fdf54caa` |
| `☀️ 🧡 RC06 Sola V5 Flame ST - Complete 🧡 ☀️.json` | 1,611,928 | `c94d8c626acf8d49a5d099fd4c302d438ca4c2644557208c7dbb9eeda19b6d22` |
| `☀️ 🧡 RC06 Sola V5 Flame ST - Complete Lite 🧡 ☀️.json` | 1,476,467 | `0f68f2e22bc45a55fd31c15aecbb83861f6e6dd1df03f9d974c770e127309867` |
| `RC06 Sola V5 Tavo - Complete.zip` | 511,941 | `2bdf88afb2156ac2fb62f677c082b0e97c474b5354d93976c7e0f51aea649dd4` |
| `RC06 Sola V5 Tavo - Complete Lite.zip` | 486,189 | `a7f9638ff7f60a31d51a7dc900b720d8bffd5df40ea8b19e69d43f425a8b84fc` |
| `RC06 Sola V5 Full - Regex Pack - Lumi (Manual Folders).json` | 1,302,216 | `e8e3452231390b5e2e469ef511ebf2287588bf70a2fed98a309b0b8af910edad` |
| `RC06 Sola V5 Full - Regex Pack - ST.json` | 1,133,392 | `6ae090180abcc3fd5beb22e0a6c77e887a5361a8a06302eebed6e87d6b78b335` |
| `RC06 Sola V5 Full - Regex Pack - Tavo.zip` | 469,093 | `0495447063543d97dda6aa2f573fb6c873b2250f041ad75bb8a8dd4456937f5d` |
| `RC06 Sola V5 Lite - Regex Pack - Lumi (Manual Folders).json` | 1,165,893 | `c395d875b2166f5174db05961aac963b0a1215a767e780072fe90b1bbd3528b2` |
| `RC06 Sola V5 Lite - Regex Pack - ST.json` | 998,596 | `e55f2aeac2654d8396d2171d7c3f13dbdce982c50bfe24bd6d3aaf795a141aa2` |
| `RC06 Sola V5 Lite - Regex Pack - Tavo.zip` | 443,192 | `d44640393cce4e0ebca80fd2b2847e072473a0895836e95247b36c8e9414efe5` |
