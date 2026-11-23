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

The base preset for your app, plus one regex pack. Full and Lite differ in how much display work the regex does; import one, never both.

| | Lumiverse | SillyTavern | Tavo |
|---|---|---|---|
| Preset | `☀️ 🧡 RC06 Sola V5 Flame Lumi 🧡 ☀️.json` | `☀️ 🧡 RC06 Sola V5 Flame ST 🧡 ☀️.json` | `☀️ 🧡 RC06 Sola V5 Flame Tavo 🧡 ☀️.json` |
| Full pack | `RC06 Sola V5 Full - Regex Pack - Lumi (Manual Folders).json` | `RC06 Sola V5 Full - Regex Pack - ST.json` | `RC06 Sola V5 Full - Regex Pack - Tavo.zip` |
| Lite pack | `RC06 Sola V5 Lite - Regex Pack - Lumi (Manual Folders).json` | `RC06 Sola V5 Lite - Regex Pack - ST.json` | `RC06 Sola V5 Lite - Regex Pack - Tavo.zip` |

The SillyTavern and Tavo packs leave out the `16.00 Crossroads` choice card and the `17.00 Council` notes drawer, because those prompt blocks are cut in those builds.

The full list of changes is in `Sola V5 - Changelog RC05 to RC06.md`.

## Files

| file | bytes | sha256 |
|---|---|---|
| `☀️ 🧡 RC06 Sola V5 Flame Lumi 🧡 ☀️.json` | 433,478 | `8452f6a542db2fc68f6e0cdaf87e4cf827c204b49078ccd0bced9fa0500954e4` |
| `☀️ 🧡 RC06 Sola V5 Flame ST 🧡 ☀️.json` | 373,537 | `3070e7b6b2dea9ac0122360b6587d58e31eb0b84624b99f9954fe72b4b0960f4` |
| `☀️ 🧡 RC06 Sola V5 Flame Tavo 🧡 ☀️.json` | 375,501 | `522d5bcb3aeb6f4c2fcfd78d18e6083109d36a66a219118bb7f9ff091c08417f` |
| `RC06 Sola V5 Full - Regex Pack - Lumi (Manual Folders).json` | 1,302,066 | `4f376877edda2ddff012071e27824a48ad699870388eb07377a72066d7c2806a` |
| `RC06 Sola V5 Full - Regex Pack - ST.json` | 1,133,240 | `63a648753ef8cae4ab28bd97e8c64364f8c86b46f9f85ad5088ce17ea225026c` |
| `RC06 Sola V5 Full - Regex Pack - Tavo.zip` | 469,012 | `6e13477446f740b93576638c61088c3bb056edd1af6e4f9195fbde524369ee79` |
| `RC06 Sola V5 Lite - Regex Pack - Lumi (Manual Folders).json` | 1,165,743 | `5fe598a75e45a52c071be1c63ee0e5750083c266e710a3611e575a7563568a38` |
| `RC06 Sola V5 Lite - Regex Pack - ST.json` | 998,444 | `bef83da11d6c3d9ba9dd9587f75974bcd4dc5e5b1e54e3c7f078388510d62880` |
| `RC06 Sola V5 Lite - Regex Pack - Tavo.zip` | 443,111 | `44cd10f43ca89eaedac2a7a5149ffb157bc40580311c9ad88afa45cfc18843b5` |
