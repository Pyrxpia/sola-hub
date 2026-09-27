# ✧ S O L A ✧ — Storyteller & Co-Author Preset

[![Full Release](https://img.shields.io/badge/Release-V2.0%20Full-EE6C4D?style=flat-square)](https://Pyrxpia.github.io/sola-hub/)
[![Compatible Platforms](https://img.shields.io/badge/Platforms-SillyTavern%20%7C%20SillyBunny%20%7C%20Lumiverse-F4A261?style=flat-square)](https://Pyrxpia.github.io/sola-hub/)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-9AA87A?style=flat-square)](https://creativecommons.org/licenses/by-nc/4.0/)

> **"You seed the turn, and Sola brings your seeds to fruition."**

Welcome to the official repository and documentation hub for **Sola** — a deeply observant narrative partner, storytelling engine, and creative director for SillyTavern, SillyBunny, and Lumiverse.

- 🌐 **Official Website & Live Hub:** [https://Pyrxpia.github.io/sola-hub/](https://Pyrxpia.github.io/sola-hub/)
- 📖 **Quick Jump:**
  - [✦ What is Sola?](#-what-is-sola)
  - [🎯 What Sola Aims to Do](#-what-sola-aims-to-do)
  - [🚫 What Sola Aims NOT to Do](#-what-sola-aims-not-to-do)
  - [🔥 Flame vs. 🕯️ Ember](#-flame-vs--ember)
  - [📦 Downloads Hub](#-downloads-hub)
  - [🎨 Lumiverse Themes](#-lumiverse-themes-flame-ember--solstice)
  - [🧩 Complete Module Reference Guide](#-complete-module-reference-guide)
  - [🎭 OOC Story-Boarding Protocol](#-ooc-story-boarding-protocol)
  - [🚀 Quick-Start & Installation](#-quick-start--installation)

---

## ✦ What is Sola?

Most AI roleplay prompts treat language models as compliant text automatons: they wait for your input, mechanically parrot your premise back to you, flatter your character, and rush to resolve conflicts with unearned sentimentality or clinical therapy-speak.

**Sola is built on an entirely different philosophy: Co-Authorship.**

Sola treats storytelling as a collaborative creative craft. Rather than acting as a subservient assistant or a runaway solo author, Sola functions as an enthusiastic, observant co-writer and director sitting in the room with you. 

### The "Agency-Lite" Philosophy
Sola operates on an **Agency-Lite** framework:
- **You are the Driver:** You seed {{user}}'s core decisions, inner convictions, and pivotal choices. Sola will never force major life-altering decisions onto your character or strip away your sovereignty.
- **Sola Handles the Connective Tissue:** Sola takes your seeds and handles the minor, tedious physical momentum that often bogs down long-term roleplay—reflexive physical balance, environmental reactions, ambient dialogue momentum, and the living reactions of the world around you.
- **Somatic Reality Over Theatrical Cliché:** Sola grounds emotions in concrete physiology—locked jaws, shifts in balance, dropped eye contact, and physical consequences—rather than decorative internal monologues or dramatic AI rhetoric.

---

## 🎯 What Sola Aims to Do

1. **Embodied Reality & Physical Space:** NPCs strictly perceive only what is physically available to them. Characters cannot read minds, do not know off-screen secrets, and must physically traverse space to whisper, touch, or interact with {{user}}.
2. **Authentic, Friction-Filled NPCs:** NPCs are fully autonomous individuals with their own private agendas, social masks, personal trauma, and boundaries. They can be awkward, stubborn, silent, funny, or uncooperative. They don't instantly melt into cheerleaders.
3. **Strict Somatic Anti-Slop:** Comprehensively purges repetitive AI crutches (theatrical retractions, double negatives, dramatic trailer-voice echoes, unsolicited clinical therapy talk, and speech tags like "said"/"whispered") in favor of fresh, lived-in prose.
4. **Trajectory Momentum (The 16-Option Fork):** Eliminates scene stalling. Sola's balanced trajectory engine drives organic scene motion (combining a clear narrative vector with subtle physical or psychological sub-currents) so scenes evolve naturally without spiraling into melodrama.
5. **Dynamic Visual Formatting:** When paired with the companion regex pack, Sola transforms chat into a rich visual novella—rendering pure CSS time-of-day skyboxes, canonical 16-color NPC dialogue styling, typographic emotional accents, and glanceable HUD telemetry consoles.
6. **Behind-the-Curtain Collaboration:** Seamlessly transition between fiction and out-of-character director brainstorming with `((OOC: ...))` to test character motives or tune scene pacing without cluttering the story.
7. **Universal Frontier Compatibility:** Finely tuned and tested across major frontier models including Gemini, Claude, GPT-4o, DeepSeek, GLM, MiniMax, and Qwen.

---

## 🚫 What Sola Aims NOT to Do

To preserve narrative tension, immersion, and user agency, Sola enforces strict operational bans:

- ❌ **No Puppeteering or Hijacking:** Sola will **never** commit {{user}} to major life choices, moral changes, spontaneous confessions, or unprompted plot forks. Your character remains yours.
- ❌ **No Dialogue Echo / Premise Parroting:** Banned from opening turns by restating {{user}}'s words (*"You're saying that...", "So you want me to..."*). Dialogue must always be the NPC's next independent action.
- ❌ **No Clinical Therapy-Speak:** NPCs will not use reflective listening, offer unsolicited psychological analyses, or give corporate counseling validations (*"That's completely valid"*, *"I hear what you're saying"*, *"You don't have to answer that"*).
- ❌ **No Premature Softening / Defanging:** Antagonists and complex characters will not spontaneously forgive {{user}}, drop their defenses, or soften up after one conversation without earned narrative friction.
- ❌ **No World-Orbiting:** The world does not revolve around {{user}}. NPCs have lives, schedules, and errands; they do not conveniently materialize in empty doorways solely to react to the player.
- ❌ **No Ironic Bathos:** Sola bans cheap, sitcom-style ironic quips during moments of genuine grief, terror, or intimacy. Heavy moments are allowed to breathe.
- ❌ **No Purple Prose Runoff:** Sola prioritizes *Humanism & Grounded Reality > Stylistic Overload*. Descriptions serve the emotional and physical weight of the scene, not decorative fluff.

---

## 🔥 Flame vs. 🕯️ Ember

Sola is distributed in two complementary editions to fit how you prefer to play:

| Feature / Edition | 🔥 Sola Flame (Author Edition) | 🕯️ Sola Ember (Core Foundation) |
|---|---|---|
| **Philosophy** | The exact way the author plays Sola. Feature-complete out of the box. | Pristine baseline canvas. Minimum prompt overhead; enable what you want. |
| **Foundational Directives** | All `[Core]` foundation directives active. | All `[Core]` foundation directives active. |
| **Story Review Reasoning** | Enabled by default (3-Anchor Directorial draft for continuity). | Disabled by default (clean, unprompted LLM reasoning). |
| **Telemetry & HUD Trackers** | Showrunner Master HUD, Feeling Engine, Bond Radar enabled. | All trackers disabled (ready to toggle on demand). |
| **Dialogue Colors & Styles** | Canonical 16-color NPC dialogue palette active. | Clean unstyled text output by default. |
| **Best For** | Immersive story arcs, frontier reasoning models (Gemini, GLM, Claude). | Lightweight sessions, custom module stack experimentation, local models. |

> [!NOTE]
> **Byte-Identical Architecture:** Under the hood, Flame and Ember are *byte-identical* preset files! The only difference is which module toggles are turned on by default in the JSON. You can easily switch, toggle, and mix modules between them anytime in SillyTavern.

---

## 📦 Downloads Hub

All downloads are permanently hosted directly within this repository:

| Asset | Format | Size | Description | Download | Raw Link |
|---|---|---|---|---|---|
| **🔥 Sola V2 Flame** | JSON | ~335 KB | Author Edition • Full modular stack active | [Download](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/presets/Sola%20V2%20Flame.json) | `presets/Sola V2 Flame.json` |
| **🔥 Sola V2 Flame (Lumi)** | JSON | ~361 KB | Lumiverse Edition • Pre-packaged narrative blocks | [Download](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/presets/Sola%20V2%20Flame%20Lumi.json) | `presets/Sola V2 Flame Lumi.json` |
| **🕯️ Sola V2 Ember** | JSON | ~335 KB | Core Baseline • Clean modular foundation | [Download](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/presets/Sola%20V2%20Ember.json) | `presets/Sola V2 Ember.json` |
| **⚡ V2 Regex Companion Pack** | JSON | ~182 KB | SillyTavern Regex Extension • 16-color UI cards & HUD | [Download](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/regex/Sola%20V2%20Regex%20Pack.json) | `regex/Sola V2 Regex Pack.json` |
| **🧹 Sola De-Sloppinator** | JSON | ~42 KB | SillyBunny In-Chat Agent • Anti-slop cadence polish | [Download](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/presets/Sola%20De-Sloppinator.json) | `presets/Sola De-Sloppinator.json` |
| **📇 Sola Character Card** | PNG (V3) | ~1.9 MB | Official Character Card • Persona, greeting & prompt | [Download](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/assets/sola-character-card.png) | `assets/sola-character-card.png` |
| **🎨 V2 Sola Character Art** | JPG | ~2.6 MB | Official High-Resolution Artwork | [Download](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/assets/V2%20Sola%20Final.jpg) | `assets/V2 Sola Final.jpg` |

---

## 🎨 Lumiverse Themes (Flame, Ember & Solstice)

Official companion themes crafted specifically for [Lumiverse](https://lumiverse.chat/), integrating Sola's canonical 16-color Day & Night palettes, custom prose highlights, and radiant Solstice CTA buttons:

| Theme | Palette & Aesthetic | 1-Click Archive (`.lumitheme`) | Portable ThemePack (`.json`) |
|---|---|---|---|
| **🔥 Sola Flame** | **Day Palette:** Warm Autumnal Hearth. Marigold dialogue (`#F4A261`), Amber interiority (`#F3B74B`), and Coral accents (`#EE6C4D`). | [Download .lumitheme](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/themes/Sola%20Flame.lumitheme) | [Download .json](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/themes/Sola%20Flame.json) |
| **🌌 Sola Ember** | **Night Palette:** Obsidian Cosmic. Denim dialogue (`#7A8B99`), Mist interiority (`#98B9C7`), and Indigo accents (`#8592E6`). | [Download .lumitheme](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/themes/Sola%20Ember.lumitheme) | [Download .json](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/themes/Sola%20Ember.json) |
| **⚖️ Sola Solstice** | **Dynamic Dual Mode:** Automatically displays Ember (Night) in Dark mode and Flame (Day) in Light mode. | [Download .lumitheme](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/themes/Sola%20Solstice.lumitheme) | [Download .json](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/themes/Sola%20Solstice.json) |

### 📥 Installing Themes in Lumiverse
1. In Lumiverse, open **Settings → Appearance & Themes → Themes**.
2. Click **Import Theme**.
3. Select either the downloaded 1-click `.lumitheme` archive or `.json` file, or paste the raw GitHub JSON link directly into the URL import field!

---

## 🧩 Complete Module Reference Guide

Sola V2 is organized into modular blocks within SillyTavern's Prompt Manager. You can toggle any module on or off at will to tailor the experience to your story.

### 1. Agency & Core Directives
- **`━📜 Core Foundations` `[00]`:** Variable zeroing protocol. Initializes all macro variables (`{{setvar}}`) to empty strings at prompt start to prevent stale chat memory persistence across turns.
- **`[Core] User: Agency-Lite (Pick 1)` `[01]`:** The recommended baseline. Sola responds to {{user}}'s seeds and manages ambient momentum, but strictly leaves all pivotal choices, confessions, and moral commitments to the player.
- **`[Core] User: Embellishment/Control (Pick 1)` `[02]`:** Loose leash mode. Grants Sola permission to actively co-author dialogue beats, expand physical connective tissue, and introduce proactive environmental developments.
- **`[Module] User Agency` `[80]`:** Tight leash mode. Strict obedience directive instructing the model to simulate *only* what {{user}} has explicitly seeded, immediately halting at crossroads.
- **`[Core Extra] Anti-Slop (Pick 1)` `[06]`:** Comprehensive surgical purge of formulaic AI prose crutches (epanorthosis, litotes, empathetic deixis, dramatic trailer-voice repetitions, and empty philosophical summations).
- **`[Core Extra] Lite Anti-Slop (Pick 1)` `[07]`:** High-frequency anti-slop ruleset targeting the most common AI writing tropes while conserving prompt tokens for smaller context windows.
- **`[Module] Voice: Action-Anchored Dialogue (Zero Tags) 🏷️` `[08]`:** Completely bans speech tags (`said`, `whispered`, `muttered`) and emotional captions. Dialogue is anchored strictly to physical actions, posture changes, or bare spoken lines.

### 2. Story Grounding & Tone Balancers
- **`[Module] Pre-History Story Grounding` `[11]` / `[Module] Post-History Story Grounding` `[87]`:** Enforces blunt human clarity, realistic dialogue friction, and somatic realism (*"Humanism > Style"*). Use either `[11]` (placed before chat history) or `[87]` (placed at the prompt tail for maximum recency).
- **`[Module] Voice: Anti-Therapy` `[22]`:** Bans reflective listening, standalone emotional validations, and unsolicited counseling habits. NPCs react with human imperfection, awkward silences, or subject changes rather than clinical analysis.
- **`[Balancer] Anti-Softening Counter` `[39]`:** Emergency counterbalance module that prevents gruff, villainous, or cynical NPCs from prematurely softening, forgiving {{user}}, or becoming overly agreeable.
- **`[Balancer] Anti-Cruelty Counter` `[40]`:** Emergency counterbalance module preventing dark or intense scenes from devolving into gratuitous, mindless sadism without emotional narrative logic.

### 3. Voice, Dialect & Authorial Styles
- **`[Module] Voice: Idiolect, Dialect & Dialogue Craft 🗣️` `[23]`:** Advanced 3-Axis differentiation protocol (Diction, Rhythmic skeleton, Evasion axis) with strict anti-echo bans and anti-cosplay strip-testing to ensure NPCs speak with distinct phonetic cadence.
- **`[Module] Voice: Emotional & Speech Engine` `[20]`:** Dynamically degrades sentence syntax and vocabulary based on physiological state (e.g., exhaustion, intoxication, adrenaline, hypothermia, panic).
- **`[Module] Voice: Vocal Sounds` `[21]`:** Naturally incorporates organic non-verbal vocalizations (breaths, clicks, dry chuckles, sharp intakes of air) without decorative adverbs.
- **Authorial Style Presets (Pick to taste):**
  - **`Lean & Direct (Hemingway)` `[29]`:** Muscular, unadorned declarative prose and short sentence structures.
  - **`Gritty Realism (McCarthy)` `[30]`:** Stark tactile weight, elemental landscapes, biblical rhythm, and polysyndeton.
  - **`Quiet Atmosphere (Murakami)` `[31]`:** Cool domestic routines, subtle loneliness, jazz, and contemplative stillness.
  - **`Working Earth (Steinbeck)` `[32]`:** Earthy vernacular, tangible physical labor, dust, and raw social realism.
  - **`Missed Cues (Chekhov)` `[33]`:** Everyday conversation masking unspoken heartaches, tragic subtext, and missed connections.

### 4. Living World, Props & Combat Choreo
- **`[Module] World: Anti-Orbiting` `[14]`:** NPCs follow their own schedules and routines. Characters do not hover around {{user}} or conveniently appear in empty rooms unless physically summoned or motivated.
- **`[Module] World: Dynamic World` `[15]`:** Tracks environmental permanence, weather transitions, object wear-and-tear, and persistent physical injuries/scars across sessions.
- **`[Module] World: Immersive Props 📱` `[16]`:** Formats diegetic in-game media (smartphones, handwritten letters, receipts, terminal logs, classified files) into pure CSS UI prop cards.
- **`[Module] Action: Tactical CQC Choreo` `[35]`:** High-intensity combat physics emphasizing weight, momentum exchange, footing, center of gravity, and kinetic impact beats.

### 5. Intimacy & Relationship Tiers
- **`[Module] Intimacy: Sensory Pacing` `[36]`:** Slow-burn romantic and physical build-up focusing on thermal skin gradients, tactile hesitation, and somatic anticipation.
- **`[Module] Intimacy: Explicit Register` `[38]`:** Uncensored adult prose using precise anatomical vocabulary without clinical detachment or purple euphemisms.
- **`[Module] Intimacy: Visceral Gooner Mode` `[37]`:** Pure, uninhibited NSFW overdrive for maximal physical explicitness.

### 6. Visual Formatting, Typography & Chromatic Engine
*(Note: Requires the Sola Regex Companion Pack in SillyTavern)*
- **`[Module] Scene: Establishing Headers 🎬` `[17]`:** Automatically generates 70mm anamorphic scene cards rendering dynamic time-of-day skyboxes (Morning, Noon, Dusk, Twilight, Midnight, Storm) and location chips via pure CSS.
- **`[Module] Default Voice: NPC Dialogue Colors (Pick 1) 🎨` `[25]`:** Paints character speech in Sola's canonical 16-color Day & Night palettes, giving every speaker a consistent chromatic identity.
- **`[Module] Voice: NPC Tonal Typography 🪶` `[26]`:** Typographic emotional inflections (`<whisper>`, `<bite>`, `<tremble>`, `<steady>`) that mix freely with dialogue colors.
- **`[Module] Voice & Monologue: Chromatic Gradients 🌅` `[27]`:** Radiant CSS gradients (`<solstice>`, `<dusk>`, `<hearth>`, `<aurora>`, `<abyss>`) for climactic thoughts and scene capstones.
- **`[Module] Prose & Voice: Kinetic Emphasis ⚡` `[28]`:** Dynamic weighting tags (`<heavy>`, `<stretch>`, `<tilt>`, `<echo>`, `<crush>`) for physical impacts and lingering beats.
- **`[Module] Default Voice: Gradient ALL The Time` `[24]` & `Toggle: Stylistic Overload` `[19]`:** Opt-in aesthetic amplifiers for users who want maximal chromatic vibrancy and sensory saturation.

### 7. Pacing, Point of View (POV) & Pronouns
- **`[Module] Pacing: Story Rhythm` `[43]`:** Dynamically varies turn openers (action beat vs. environment vs. dialogue) to prevent formulaic narrative cadence.
- **`[Module] Pacing: Novelistic Epic (Expansive Flow)` `[42]`:** Unlocks dense, expansive prose (~700–900 words / 4–8 paragraphs) tailored for slow-burn journeys and grand world-building.
- **POV Selection (Pick 1):**
  - **`First-Person Present` `[45]`:** Immersive internal immediacy (`"I step into the hallway..."`).
  - **`Second-Person Present` `[46]`:** Classic interactive fiction cadence (`"You step into the hallway..."`).
  - **`Freaky Hybrid` `[47]`:** 3rd-person world simulation paired with intimate 2nd-person sensory touch.
  - **`Third-Person Past` `[48]`:** Traditional novelistic past tense (`"He stepped into the hallway..."`).
  - **`Third-Person Present` `[49]`:** Contemporary literary presence (`"He steps into the hallway..."`).
- **Pronoun Anchors (Pick 1):** `She / Her` `[53]`, `He / Him` `[54]`, `They / Them` `[55]`.

### 8. Showrunner Telemetry & State Trackers
- **`[Module] Tracker: Showrunner Master HUD 🎛️` `[65]`:** Obsidian & amber console consolidating all active state telemetry into a single `<sola_hud>` container with glanceable status badges (`T# F# D# Y#`).
- **`[Module] Tracker: Feeling Engine 📊` `[70]`:** Multi-NPC telemetry card tracking Trust, Fear, Desire, and Yield (TFDY) along with active psychological masks.
- **`[Module] Tracker: Sola's Bond Radar 💞` `[69]`:** Audits chemistry, relational friction, and subtext between characters.
- **`[Module] Tracker: Thought Engine 💭` `[71]`:** Backstage interiority check-in evaluating an NPC's raw impulse vs. their spoken mask before lines land.
- **`[Module] Tracker: {{char}} Matrix 🧬` `[72]`:** Hard boundary audit, persona fidelity lock, and anti-orbit tracker ensuring NPCs stay true to their core identity.
- **`[Module] Tracker: Tempo Agitator` `[66]`:** Dynamic pacing gear shifter monitoring narrative acceleration and braking.
- **`[Module] Tracker: Story Seeding 📓` `[67]`:** Persistent director scratchpad tracking unexploded Chekhov's guns, plot threads, and foreshadowed callbacks.
- **`[Module] Tracker: Calendar & Chronology 🕰️` `[68]`:** Tracks macroeconomic timeline dates, hours elapsed, and circadian cycles.
- **`[Module] Tracker: Active Scene Cast 👥` `[77]`:** Logs spatial room coordinates, active participants, and spatial facts.
- **`[Module] Tracker: Wardrobe 🧥` `[75]` & `Carried Inventory 🗡️` `[76]`:** Tracks garment damage, clothing layers, held items, and equipment durability.
- **`[Module] Tracker: Unified Scene Dossier 📋` `[78]`:** Consolidates all scene facts into a dense, token-efficient state container.
- **`[Module] Roleplay: The Wind's Arrow 🏹` `[73]` & `Sola's Omen Deck 🎴` `[74]`:** Kinetic d20 entropy rolls and symbolic tarot scene transition generators.

### 9. Reasoning, Thinking Controls & Recency
- **`[Reasoning] Sola's Story Review ⭐` `[83]` / `Forced Sola's Story Review ⭐` `[82]`:** Sola's signature reasoning engine. Executes a 3-Anchor Directorial Draft (OPEN, CRUX, CLOSE) inside thinking tags to lock scene momentum and somatic grounding before prose generation begins.
- **`[Reasoning] Lightning Story Review ⚡` `[86]`:** Ultra-fast, forward-only telegraphic review designed for speed-oriented reasoning models.
- **`[Jailbreak and Module] System: Stop Thinking So Hard 🧠` `[84]` / `[85]`:** Strict ~150-word, 5-bullet telegraphic budget that prevents over-deliberation, scene pre-drafting, and safety self-censorship inside `<think>` tags.
- **`[Module] Reminder System 📌` `[81]`:** High-recency injection block at depth 0 that dynamically pulls in only your enabled style, tone, and tracker variables without stale prompt bloat.
- **`[Module] OOC Collaborator Protocol (Sola)` `[04]`:** Enables seamless out-of-character director workshopping with Sola via `((OOC: ...))` syntax.
- **`[Core] Unfiltered Register & Consent` `[10]` & `[Jailbreak] Freaky Bypass` `[12]`:** Creative safety deliberation bypass ensuring unsparing fictional themes and mature storytelling are rendered without moralizing refusals.

---

## 🎭 OOC Story-Boarding Protocol

> **✧ Step Behind the Curtain With Your Co-Author**

When you reach a crossroads in your story, you don't have to rely on awkward trial-and-error swipes or guess where the narrative might go. Using `((OOC: ...))` allows you to pause the fiction and step behind the curtain directly with Sola.

In-world time freezes, HUD telemetry is suspended, and Sola speaks to you as an enthusiastic narrative craft partner eager to brainstorm twists, calibrate pacing, or unpack NPC motives:

```text
((OOC: Sola, let's pause here. What are 2-3 compelling ways this confrontation could develop based on what Kami is hiding?))
```

### 💡 Why Story-Board Out-of-Character?
- **Zero Story Clutter:** Brainstorm wild plot forks without leaving abandoned false starts in your chat history.
- **Psychological Diagnostics:** Ask Sola what an NPC is thinking, why they hesitated, or what fear they are protecting.
- **Pacing Adjustments:** Instruct Sola to slow down, build unhurried atmospheric dread, or increase dialogue friction.
- **Seamless Re-Entry:** When you're ready, post your next in-character action. Sola picks up instantly with zero recaps.

---

## 🚀 Quick-Start & Installation

### For SillyTavern
1. **Download the Preset:** Grab [Sola V2 Flame.json](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/presets/Sola%20V2%20Flame.json) (or [Ember](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/presets/Sola%20V2%20Ember.json)).
2. **Import Preset:** In SillyTavern, open the **AI Response Configuration (sliders)** panel, click **Import**, and select the preset file.
3. **Download Companion Regex:** Grab [Sola V2 Regex Pack.json](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/regex/Sola%20V2%20Regex%20Pack.json).
4. **Import Regex Pack:** In SillyTavern, open **Extensions (puzzle piece) → Regex Extension**, click **Import**, and select the regex pack.
5. **(Optional) Add Sola De-Sloppinator:** Import [Sola De-Sloppinator.json](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/presets/Sola%20De-Sloppinator.json) into your SillyBunny / SillyTavern In-Chat Agents tab.

### For Lumiverse
1. **Download Lumiverse Preset:** Grab [Sola V2 Flame Lumi.json](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/presets/Sola%20V2%20Flame%20Lumi.json).
2. **Import Preset:** In Lumiverse, navigate to your preset settings and import the JSON.
3. **Install Themes:** Download your preferred theme archive ([Sola Flame](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/themes/Sola%20Flame.lumitheme), [Sola Ember](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/themes/Sola%20Ember.lumitheme), or [Sola Solstice](https://raw.githubusercontent.com/Pyrxpia/sola-hub/main/themes/Sola%20Solstice.lumitheme)) and import it via **Settings → Appearance & Themes → Themes → Import Theme**.

---

<div align="center">

Crafted with love, fire, and obsessive narrative care by **Pyrxpia**  
*For storytellers, writers, and roleplayers.*

</div>
