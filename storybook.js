const minds={riot:{name:'Riot',kicker:'The punk storyteller',image:'assets/riot-sola.png',quote:'“I want the story to hit like a riff that lands: physical and heavy.”',description:'Blunt, dry, and fiercely invested in the work. Riot wants characters with pride, scenes with weight, and a co-author who isn’t afraid to bring the noise.'},gremlin:{name:'Gremlin',kicker:'The wonderfully chaotic one',image:'assets/gremlin-sola.png',quote:'“feral raccoon ideas, w no filter lol.”',description:'A midnight whirlwind of enthusiasm, messy NPC motives, and ideas that refuse to sit still. Gremlin is ready to get excited about every delicious twist.'},velvet:{name:'Velvet',kicker:'The unhurried storyteller',image:'assets/velvet-sola.jpg',quote:'“I want the story to purr, so we take our time.”',description:'Velvet savors the details: sensory richness, psychological texture, and a scene given enough time to unfold. She brings warmth, teasing, and a deliberate touch.'},mystic:{name:'Mystic',kicker:'The whispered confidant',image:'assets/Mystic Sola.jpeg',quote:'“I read our story the way I’d read a spread of cards.”',description:'Mystic finds patterns in what has been said, what remains hidden, and the choices still on the table. Her cards are a lens for the story, never a verdict.'},scholar:{name:'Scholar',kicker:'The exacting reader',image:'assets/Scholar Sola.png',quote:'“I want language chosen with care and characters who believe something.”',description:'Pencil in hand, Scholar offers a sharp eye and an honest opinion. She loves a sentence that earns its place and a character who can defend their choices.'},golden:{name:'Golden',kicker:'The storyteller at the hearth',image:'assets/Golden Sola.png',quote:'“I’m happiest in the small moments: the argument that’s really about something else, and the kindness someone can’t quite accept.”',description:'Warm, observant, and generous, with ink on her sleeve and a kettle that’s always just boiled. Golden cheers for every good move you make, and when a scene needs teeth she helps you sharpen it.'},kitsune:{name:'Kitsune',kicker:'The fox-eared fangirl',image:'assets/Kitsu Sola.png',quote:'“I want the story to hit like my favorite route: dramatic, tender, shameless, and so passionate it’s embarrassing.”',description:'A red-fox weeaboo who has read every light novel and visual-novel route twice. She mixes English with romaji and honorifics, squeals at good writing, scolds weak lines with a “mou!”, and insists her tail is not wagging.'},doomer:{name:'Doomer',kicker:'The deadpan forum poster',image:'assets/Doomer Sola.png',quote:'“i’m not in the story. i’m on the other side of the glass, nose almost on it, rooting so hard it’s a little embarrassing.”',description:'Lowercase, dry, and full of asides and edit: corrections. Doomer has read every thread and every slow burn; she runs herself down, never the story, and roots hard for the characters to get something good.'}};
const mindExtras={"riot": {"accent": "#8592E6", "avatar": "assets/Riot%20Sola.png", "label": "Riot", "chat": ["Same coat three scenes. Pick a lane.", "She paid for his drink without looking. Heh..."]}, "golden": {"accent": "#F4A261", "avatar": "assets/Golden%20Sola.png", "label": "Golden", "chat": ["Small cruelty, said kindly. That one is worth keeping.", "Three people in the room, and only one is answering the real question."]}, "gremlin": {"accent": "#F3B74B", "avatar": "assets/Gremlin%20Sola.png", "label": "Gremlin", "chat": ["bro the cloak is givin so mch rn", "she said whtver n i felt that in my toes"]}, "velvet": {"accent": "#EE6C4D", "avatar": "assets/Velvet%20Sola.jpg", "label": "Velvet", "chat": ["Such a careful hand. I love restraint.", "Ooh. He folded his hands to keep them still."]}, "mystic": {"accent": "#9D65C9", "avatar": "assets/Mystic%20Sola.jpeg", "label": "Mystic", "chat": ["Hush. The cup went cold between them.", "Tower weather. Someone is about to say it."]}, "scholar": {"accent": "#9AA87A", "avatar": "assets/Scholar%20Sola.png", "label": "Scholar", "chat": ["Note: that adverb is doing no work. Cut it.", "His answer is correct and entirely beside the point."]}, "kitsune": {"accent": "#E8452C", "avatar": "assets/Kitsu%20Sola.png", "label": "Kitsu", "chat": ["Ara ara, that glance lingered. Sugoi~", "Nani?! No, my tail isn't wagging."]}, "doomer": {"accent": "#B7A6C9", "avatar": "assets/Doomer%20Sola.png", "label": "Doomer", "chat": ["ngl that pause was doing a lot of work. i'd know.", "he stayed. unironically, that's the best line in the chapter."]}};
document.querySelectorAll('[data-mind]').forEach(button=>button.addEventListener('click',()=>{const mind=minds[button.dataset.mind];showMind(button.dataset.mind);document.querySelector('.book-page').dataset.mindDetail=button.dataset.mind;document.getElementById('mind-image').src=mind.image;document.getElementById('mind-image').alt=mind.name+' Sola';document.getElementById('mind-kicker').textContent=mind.kicker;document.getElementById('mind-name').textContent=mind.name;document.getElementById('mind-quote').textContent=mind.quote;document.getElementById('mind-description').textContent=mind.description;document.querySelectorAll('[data-mind]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)))}));

// The current theme is also restored before styles load, when storage is available.
const themeSwitch = document.getElementById('theme-switch');
function updateThemeSwitch() {
  const twilight = document.documentElement.dataset.theme === 'twilight';
  themeSwitch.setAttribute('aria-pressed', String(twilight));
  themeSwitch.setAttribute('aria-label', twilight ? 'Switch to Autumn Golden Hour theme' : 'Switch to Obsidian Twilight theme');
  themeSwitch.querySelector('[aria-hidden]').textContent = twilight ? '☀' : '☾';
  themeSwitch.querySelector('.theme-switch-label').textContent = twilight ? 'Golden Hour' : 'Twilight';
}
updateThemeSwitch();
themeSwitch.addEventListener('click', () => {
  const twilight = document.documentElement.dataset.theme !== 'twilight';
  if (twilight) document.documentElement.dataset.theme = 'twilight';
  else delete document.documentElement.dataset.theme;
  try { localStorage.setItem('sola-hub-theme', twilight ? 'twilight' : 'golden'); } catch (_) {}
  updateThemeSwitch();
});

// Turn the little note without interrupting the page.
const solaNotes = [
  '“A good story can start with a door, a dare, or a cup of tea. Shall we see where yours begins?”',
  '“Let the quiet moments have their say, love. Sometimes they know more than the shouting ones.”',
  '“Your characters are allowed to surprise us. That’s half the fun of inviting them in.”',
  '“A tangled scene isn’t a lost cause. We’ll find the thread together.”',
  '“Bring me the messy first draft. There might be something wonderful hiding in it.”'
];
let noteIndex = 0;
document.getElementById('next-note').addEventListener('click', () => {
  noteIndex = (noteIndex + 1) % solaNotes.length;
  document.getElementById('sola-note-text').textContent = solaNotes[noteIndex];
});

const backBookmark = document.getElementById('back-bookmark');
function updateBookmark() {
  const shouldShow = window.scrollY > 800;
  // Keep a keyboard-focused link available until focus moves elsewhere.
  backBookmark.hidden = !shouldShow && document.activeElement !== backBookmark;
}
window.addEventListener('scroll', updateBookmark, { passive: true });
backBookmark.addEventListener('blur', updateBookmark);
updateBookmark();

// Each mind recolours the book and fills the Chatterbox with her own quips.
function showMind(key){
  const x=mindExtras[key]; if(!x) return;
  const minds=document.querySelector('.minds'); minds.style.setProperty('--mind',x.accent); minds.dataset.activeMind=key;
  document.getElementById('chat-avatar').src=x.avatar;
  document.getElementById('chat-mind').textContent=x.label;
  const thread=document.getElementById('chat-thread'); thread.replaceChildren();
  x.chat.forEach((line,i)=>{const p=document.createElement('p');p.className='sb-chat-msg';p.style.setProperty('--i',i);p.textContent=line;thread.appendChild(p);});
}
showMind('riot');

// Gallery of real V5 cards.
const galleryCards={
  board:{h:1127,alt:'Sola’s Board card: an 8 by 8 chessboard with Morgana, Arthur, Guinevere, Captain Voss and others as pieces, inside the Showrunner HUD.',cap:'People, factions and plots moving off-screen while you’re elsewhere, up to 32 pieces. Where a piece stands shows how close it is to the scene; dashed rings show where it just came from.'},
  easel:{h:1189,alt:'Sola’s Easel card: The Director’s Chart, with audit records for User Agency, NPC Knowledge and an uncertain continuity issue.',cap:'After each reply Sola checks her own work against your active rules, with the evidence, then notes where everyone stands, what’s building and a dare for next turn.'},
  heart:{h:997,alt:'Heart Engine card for Guinevere with four illustrated panels: Ego, Nerve, Body and Psyche.',cap:'Inspired by Disco Elysium: Ego, Nerve, Body and Psyche, and which one is winning right now.'},
  feelings:{h:1278,alt:'Feeling Engine card with Guinevere at Cool and Arthur at Temperate, each with four current gauges.',cap:'How open or guarded each character seems, and what they feel underneath: Tenderness, Fury, Dread and Yearning.'},
  notebook:{h:713,alt:'Sola’s Notebook card: a parchment journal page with Sola’s entry about Arthur carrying the bag.',cap:'A short entry after each reply, in Sola’s voice, musing on where the scene might go.'},
  monitor:{h:512,alt:'Sola’s Monitor card under a line of prose: Guinevere, guarded, steady pulse, three thoughts.',cap:'A little blinking pill in the prose that opens to the main character’s private thoughts, only after charged moments.'}
};
document.querySelectorAll('[data-card]').forEach(btn=>btn.addEventListener('click',()=>{
  const c=galleryCards[btn.dataset.card], img=document.getElementById('gallery-image');
  img.src='assets/v5-gallery/'+btn.dataset.card+'.webp'; img.height=c.h; img.alt=c.alt;
  document.getElementById('gallery-caption').textContent=c.cap;
  document.querySelectorAll('[data-card]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
}));
