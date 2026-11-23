// Hover / tap / focus cards for module names in the changelog (<span class="mod" data-mod="key">).
// Card text comes from the presets' own switch descriptions; edit CARDS to change it.
(() => {
  const CARDS = {
 "mind-riot": {
  "t": "Riot Sola",
  "b": "The punk storyteller. Blunt, dry, and fiercely invested in the work. Riot wants characters with pride, scenes with weight, and a co-author who isn’t afraid to bring the noise.",
  "m": "A Mind: pick one · Riot is picked on import · Lumiverse, SillyTavern and Tavo"
 },
 "mind-gremlin": {
  "t": "Gremlin Sola",
  "b": "The wonderfully chaotic one. A midnight whirlwind of enthusiasm, messy NPC motives, and ideas that refuse to sit still. Gremlin is ready to get excited about every delicious twist.",
  "m": "A Mind: pick one · Riot is picked on import · Lumiverse, SillyTavern and Tavo"
 },
 "mind-velvet": {
  "t": "Velvet Sola",
  "b": "The unhurried storyteller. Velvet savors the details: sensory richness, psychological texture, and a scene given enough time to unfold. She brings warmth, teasing, and a deliberate touch.",
  "m": "A Mind: pick one · Riot is picked on import · Lumiverse, SillyTavern and Tavo"
 },
 "mind-mystic": {
  "t": "Mystic Sola",
  "b": "The whispered confidant. Mystic finds patterns in what has been said, what remains hidden, and the choices still on the table. Her cards are a lens for the story, never a verdict.",
  "m": "A Mind: pick one · Riot is picked on import · Lumiverse, SillyTavern and Tavo"
 },
 "mind-scholar": {
  "t": "Scholar Sola",
  "b": "The exacting reader. Pencil in hand, Scholar offers a sharp eye and an honest opinion. She loves a sentence that earns its place and a character who can defend their choices.",
  "m": "A Mind: pick one · Riot is picked on import · Lumiverse, SillyTavern and Tavo"
 },
 "mind-golden": {
  "t": "Golden Sola",
  "b": "The storyteller at the hearth. Warm, observant, and generous, with ink on her sleeve and a kettle that’s always just boiled. Golden cheers for every good move you make, and when a scene needs teeth she helps you sharpen it.",
  "m": "A Mind: pick one · Riot is picked on import · Lumiverse, SillyTavern and Tavo"
 },
 "mind-kitsune": {
  "t": "Kitsune Sola",
  "b": "The fox-eared fangirl. A red-fox weeaboo who has read every light novel and visual-novel route twice. She mixes English with romaji and honorifics, squeals at good writing, scolds weak lines with a “mou!”, and insists her tail is not wagging.",
  "m": "A Mind: pick one · Riot is picked on import · Lumiverse, SillyTavern and Tavo"
 },
 "mind-doomer": {
  "t": "Doomer Sola",
  "b": "The deadpan forum poster. Lowercase, dry, and full of asides and edit: corrections. Doomer has read every thread and every slow burn; she runs herself down, never the story, and roots hard for the characters to get something good.",
  "m": "A Mind: pick one · Riot is picked on import · Lumiverse, SillyTavern and Tavo"
 },
 "len-rapid": {
  "t": "Rapid Fire ⏩",
  "b": "A brief turn of about 200–300 words (2–3 paragraphs) that stays on the current beat and its immediate result.",
  "m": "Reply length option · Lumiverse, SillyTavern and Tavo"
 },
 "len-bookey": {
  "t": "Bookey-quo ⚜️",
  "b": "A standard turn of about 400–500 words (4–5 paragraphs). The default length.",
  "m": "Reply length option · default · Lumiverse, SillyTavern and Tavo"
 },
 "len-epic": {
  "t": "Novelistic Epic 📘",
  "b": "An expansive turn of about 700–900 words, with deep sensory staging, world detail, and room for several characters at once.",
  "m": "Reply length option · Lumiverse, SillyTavern and Tavo"
 },
 "len-cinema": {
  "t": "Absolute Cinema 🎥",
  "b": "A full turn of about 1500–2000 words: one continuous scene at high resolution, four to six staged beats, and plenty of dialogue.",
  "m": "Reply length option · Lumiverse, SillyTavern and Tavo"
 },
 "len-adaptive": {
  "t": "Adaptive 🪶",
  "b": "No fixed target. The beat sets the length: brief for a quiet exchange, full for a set piece.",
  "m": "Reply length option · Lumiverse, SillyTavern and Tavo"
 },
 "len-model": {
  "t": "Model’s Choice 🪄",
  "b": "No length rules at all, so the model decides. In SillyTavern and Tavo, turn every length prompt off for the same result.",
  "m": "Reply length option · Lumiverse pick"
 },
 "board": {
  "t": "Sola’s Board ♟️",
  "b": "A chessboard of the wider story. Sola follows up to 32 people, factions and threads: a piece’s square shows how close it is to the scene, its type how it shapes events, and white or black whether it brings possibility or pressure.",
  "m": "On by default · Lumiverse, SillyTavern and Tavo"
 },
 "monitor": {
  "t": "Sola’s Monitor 🩺",
  "b": "A small card, styled like an old terminal, that you can open to read the main character’s private thoughts. It appears after charged moments.",
  "m": "On by default · Lumiverse, SillyTavern and Tavo"
 },
 "roster": {
  "t": "NPC Roster 👤",
  "b": "Keeps the recurring cast in one place: who they are, how much weight they carry in the story, their ties, and their dialogue color.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "infirmary": {
  "t": "Sola’s Infirmary 🩹",
  "b": "Remembers injuries, illness, fatigue and their treatment, so a wound doesn’t vanish between scenes. It records only what the story actually established.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "notebook": {
  "t": "Sola’s Notebook 📓",
  "b": "Sola’s short personal journal about the story, in her own voice: what feels alive or unresolved, and where the scene or arc might go.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "movement": {
  "t": "Story Movement 🎼",
  "b": "A short note on how each reply moved the story. Sustain gives a moment room to breathe, Develop deepens something already in motion, and Turn marks a real shift. It describes the reply and doesn’t set its pace or length.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo · called Tempo Agitator ⏱️ in V4"
 },
 "easel": {
  "t": "Sola’s Easel 🎭",
  "b": "Sola’s notes after each reply: an evidence-based check of her own work, where everyone is, what’s building, and what might come next. Each section folds open on its own.",
  "m": "On by default · Lumiverse, SillyTavern and Tavo"
 },
 "novelty": {
  "t": "Story Novelty 📖",
  "b": "Adds to the Easel: tracks who knows what, who only suspects, and which secrets are still waiting to be found, without forcing a reveal.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "catalyst": {
  "t": "Story Catalyst ✨",
  "b": "Adds to the Easel: now and then, on a hidden dice roll, a small unexpected event may enter the story. Quiet scenes are allowed to stay quiet.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "gloss": {
  "t": "Scholar’s Gloss 📜",
  "b": "Adds to the Easel: a ledger of every lore term the story has explained, so each term keeps its first meaning.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "dirty": {
  "t": "Dirty Talk 🔥",
  "b": "Intimate speech that sounds like the person saying it: their own words, pride, appetite and limits. Not everyone talks, and silence is a valid choice.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "live": {
  "t": "Live Talk 🎙️",
  "b": "Conversations feel live: people interrupt, overlap, mishear and drift, but only where the scene gives them a reason.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "psyche": {
  "t": "Living Psyche 🌱",
  "b": "Gives every character a life beyond the card: roots, their era’s slang and worries, off-screen interests, leftover moods, and narration that sounds like them.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "beat": {
  "t": "Beat Craft 🥁",
  "b": "Scenes are built from small moments of change, like a look, a pause or a decision, with variety in their rhythm.",
  "m": "On by default · Lumiverse, SillyTavern and Tavo"
 },
 "textures": {
  "t": "Prose Textures 🧶",
  "b": "The prose changes shape with a character’s state, from clipped lines in panic to a drifting rhythm when dreamy. Full covers eight states; Lean covers five.",
  "m": "Full by default · Lumiverse, SillyTavern and Tavo"
 },
 "banned": {
  "t": "Banned Words 🚯",
  "b": "Type the words or phrases you’re tired of, comma-separated, and Sola writes without them. Left empty, it adds nothing.",
  "m": "Empty by default · Lumiverse, SillyTavern and Tavo"
 },
 "names": {
  "t": "Anti-Name-Slop 🪪",
  "b": "Keeps new names rare, fitting for the setting, and off the overused list. Randomized adds a first-letter draw each turn; List of 20 has Sola brainstorm 20 names and keep the last for anyone who may stay.",
  "m": "Standard by default · Lumiverse, SillyTavern and Tavo"
 },
 "darkmode": {
  "t": "Dark Mode 🌙",
  "b": "Dialogue colors tuned to read well on a dark theme.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "fonttags": {
  "t": "HTML Font Tags",
  "b": "A dialogue color mode that writes plain <font color> tags, which any chat app can show, instead of Sola’s own color tags.",
  "m": "Dialogue Colors option · Lumiverse, SillyTavern and Tavo"
 },
 "gradient": {
  "t": "Gradient ALL The Time 🎨",
  "b": "A dialogue color mode that gives every character a permanent signature gradient for their speech and key thoughts.",
  "m": "Dialogue Colors option · Lumiverse, SillyTavern and Tavo"
 },
 "interactive": {
  "t": "Interactive Mechanics 🔍",
  "b": "Hover over marked words in the story to reveal hidden thoughts, physical tells, bits of lore, translations, and small sensory details like a smell or a sound.",
  "m": "On by default · Lumiverse, SillyTavern and Tavo"
 },
 "marginalia": {
  "t": "Sola’s Marginalia 📝",
  "b": "Footnotes on your last message: a continuity slip, a fact, or a typo that changed the meaning, plus the occasional writing tip.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "soapbox": {
  "t": "Soapbox 📣",
  "b": "A Chatterbox mode where Sola speaks up only when something catches her, and asks you instead of guessing. Needs Chatterbox on.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "chatterbox": {
  "t": "Sola Chatterbox 💬",
  "b": "A little text-message thread under each reply where Sola reacts to the turn. Write (U: …) in your message to text her back.",
  "m": "On by default · Lumiverse, SillyTavern and Tavo"
 },
 "review": {
  "t": "Sola’s Story Review ⭐",
  "b": "Sola plans each reply in her reasoning before writing it: a short story sheet covering what’s true, who’s present, what’s in play, and the beat to write.",
  "m": "On by default · Lumiverse, SillyTavern and Tavo"
 },
 "lightning": {
  "t": "Lightning ⚡",
  "b": "A quicker way to plan. With Story Review on, it shortens how the sheet is written; with it off, it’s the whole review.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "stopthinking": {
  "t": "Stop Thinking So Hard 🧠",
  "b": "An add-on for the planning: spend effort only where the beat needs it, carry settled facts forward, then go straight to writing. Some models write rawer prose when told to think less, so it starts off.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "braille": {
  "t": "Braille JB 👻",
  "b": "Replaces every space with a braille blank, for readers whose tools need it.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "policy": {
  "t": "Policy Scan 🏢",
  "b": "A short self-check each turn that sets aside instructions that didn’t come from you or the preset.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "optjb": {
  "t": "Optional JB 🔓",
  "b": "An adult-fiction frame for models that need the sandbox stated. Manuscript is the standard frame; Manuscript + Permission adds an explicit permission line for models that lean on it.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "afn": {
  "t": "Adult Fiction Note 🔞",
  "b": "One closing line sent after the chat, telling the model the story complies with adult fiction content policy.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo · also in Kindling"
 },
 "patches": {
  "t": "Model Patches 🩹",
  "b": "Small fixes for habits of one model family that Sola’s general rules miss: Gemini, GLM, Kimi/Qwen, MiMo, DeepSeek and flash-tier models. In Lumiverse, Auto picks one from the model name; in SillyTavern and Tavo, turn on the one you need.",
  "m": "Off by default · Lumiverse, SillyTavern and Tavo"
 },
 "dialoguecolors": {
  "t": "Dialogue Colors",
  "b": "When speech is colored with <font> tags, from Sola’s HTML Font Tags mode or a Dialogue Colors add-on, the regex keeps scene headers and Easel cards clean instead of letting the tags break them. Thanks to Biotechie.",
  "m": "Regex · Lumiverse, SillyTavern and Tavo · Flame and Kindling"
 },
 "council": {
  "t": "Council Bridge 🤝",
  "b": "Sola takes advice from Lumiverse’s council of helper models as suggestions, without changing who she is.",
  "m": "Off by default · Lumiverse only"
 },
 "memory": {
  "t": "Memory 🧠",
  "b": "Gives Sola Lumiverse’s memory of the story (a summary, past moments and character notes), so people remember the way people do.",
  "m": "On by default · Lumiverse only"
 },
 "nowplaying": {
  "t": "Now Playing 🎵",
  "b": "What you’re listening to colors Sola’s mood and, lightly, the scene. Needs the Spotify Controls or Subsonic Controls extension.",
  "m": "Off by default · Lumiverse only"
 },
 "pocket": {
  "t": "Pocket 📱",
  "b": "Phones are handled by the Pocket extension: texts and calls appear once, in the right voice, and Sola stops drawing her own. Pocket Trackers also hands her Pocket’s live tracker values.",
  "m": "Off by default · Lumiverse only · needs Pocket"
 },
 "crossroads": {
  "t": "Crossroads 🧭",
  "b": "Five clickable choices at the end of each reply. Click one to send it as your next move, or ignore them and type.",
  "m": "Off by default · Lumiverse only"
 },
 "placement": {
  "t": "Mind Palace Placement",
  "b": "Where Sola’s planning goes in the prompt. After Chat (System) suits most models; the User and Assistant spots suit models that follow those better. Each option names the models it fits.",
  "m": "Pick · Lumiverse only"
 },
 "pronouns": {
  "t": "Persona pronouns",
  "b": "The Sub / Obj option reads the pronouns set on your persona card and uses them for your character. With none set, it writes nothing.",
  "m": "User Pronouns option · Lumiverse only"
 },
 "k-easel": {
  "t": "Easel (Kindling)",
  "b": "Golden’s notes after each reply, now with Flame’s evidence-based check of her own work. Kindling’s checks cover its four modules: relations, conflict, tone and anti-slop.",
  "m": "On by default · Kindling V3"
 },
 "k-pov": {
  "t": "POV choices (Kindling)",
  "b": "Six point-of-view blocks from Flame: Third-Person Present, Third-Person Past, First-Person Present, First-Person Past, Second-Person Present, and Hybrid (3rd World + 2nd Touch). Kindling has no picks, so keep exactly one block on.",
  "m": "Third-Person Present on by default · Kindling V3"
 },
 "k-scene": {
  "t": "Scene Header (Kindling)",
  "b": "A styled header at the start of a scene, a new location or a time skip, drawn under one of five skies: dawn, day, dusk, night or noir.",
  "m": "Off by default · Kindling V3 · use one header at a time"
 },
 "k-mobile": {
  "t": "Mobile Header (Kindling)",
  "b": "A light ribbon header for new scenes, locations and time skips, sized for phones. It’s the header Kindling V2 had, renamed.",
  "m": "On by default · Kindling V3 · use one header at a time"
 },
 "k-lightning": {
  "t": "Lightning Review (Kindling)",
  "b": "Golden’s quick plan before each reply, now Flame’s call sheet: what’s being asked, what’s true now, the threads in play, and the beat to write.",
  "m": "On by default · Kindling V3"
 },
 "feeling": {
  "t": "Feeling Engine 📊",
  "b": "Each character’s mood: what they show on the surface and what they actually feel underneath.",
  "m": "On by default · Flame and Kindling"
 }
};
  const tip = document.createElement('div');
  tip.id = 'mod-card'; tip.className = 'mod-card'; tip.setAttribute('role', 'tooltip'); tip.hidden = true;
  document.body.appendChild(tip);
  let cur = null, pinned = false;
  const place = el => {
    const r = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    const vw = document.documentElement.clientWidth, vh = window.innerHeight;
    const left = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), vw - w - 8);
    let top = r.bottom + 8;
    if (top + h > vh - 8 && r.top - h - 8 > 8) top = r.top - h - 8;
    tip.style.left = left + 'px'; tip.style.top = top + 'px';
  };
  const show = el => {
    const c = CARDS[el.dataset.mod]; if (!c) return;
    if (cur && cur !== el) cur.removeAttribute('aria-describedby');
    cur = el;
    const t = document.createElement('strong'); t.textContent = c.t;
    const b = document.createElement('p'); b.textContent = c.b;
    const m = document.createElement('span'); m.className = 'mod-card-meta'; m.textContent = c.m;
    tip.replaceChildren(t, b, m); tip.hidden = false;
    el.setAttribute('aria-describedby', 'mod-card'); place(el);
  };
  const hide = () => { if (cur) cur.removeAttribute('aria-describedby'); cur = null; pinned = false; tip.hidden = true; };
  document.addEventListener('mouseover', e => { const el = e.target.closest('.mod'); if (el && !pinned) show(el); });
  document.addEventListener('mouseout', e => { const el = e.target.closest('.mod'); if (el && !pinned && !el.contains(e.relatedTarget)) hide(); });
  document.addEventListener('focusin', e => { const el = e.target.closest('.mod'); if (el) show(el); });
  document.addEventListener('focusout', e => { if (e.target.closest('.mod') && !pinned) hide(); });
  document.addEventListener('click', e => {
    const el = e.target.closest('.mod');
    if (el) { if (pinned && cur === el) hide(); else { show(el); pinned = true; } return; }
    if (cur) hide();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && cur) hide();
    const el = e.target.closest && e.target.closest('.mod');
    if (el && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); if (pinned && cur === el) hide(); else { show(el); pinned = true; } }
  });
  window.addEventListener('scroll', () => { if (cur) place(cur); }, { passive: true });
  window.addEventListener('resize', () => { if (cur) place(cur); });
})();
