const minds={riot:{name:'Riot',kicker:'The punk storyteller',image:'assets/riot-sola.png',quote:'“I want the story to hit like a riff that lands: physical, heavy, clean.”',description:'Blunt, dry, and fiercely invested in the work. Riot wants characters with pride, scenes with weight, and a co-author who isn’t afraid to bring the noise.'},gremlin:{name:'Gremlin',kicker:'The wonderfully chaotic one',image:'assets/gremlin-sola.png',quote:'“feral raccoon ideas, w no filter lol.”',description:'A midnight whirlwind of enthusiasm, messy NPC motives, and ideas that refuse to sit still. Gremlin is ready to get excited about every delicious twist.'},velvet:{name:'Velvet',kicker:'The unhurried storyteller',image:'assets/velvet-sola.jpg',quote:'“I want the story to purr: slow, deliberate, heavy-lidded, decadent.”',description:'Velvet savors the details: sensory richness, psychological texture, and a scene given enough time to unfold. She brings warmth, teasing, and a deliberate touch.'},mystic:{name:'Mystic',kicker:'The whispered confidant',image:'assets/Mystic Sola.jpeg',quote:'“I read our story like a card spread laid between two partners.”',description:'Mystic finds patterns in what has been said, what remains hidden, and the choices still on the table. Her cards are a lens for the story, never a verdict.'},scholar:{name:'Scholar',kicker:'The exacting reader',image:'assets/Scholar Sola.png',quote:'“I want language chosen with care, characters with convictions.”',description:'Pencil in hand, Scholar offers a sharp eye and an honest opinion. She loves a sentence that earns its place and a character who can defend their choices.'}};
document.querySelectorAll('[data-mind]').forEach(button=>button.addEventListener('click',()=>{const mind=minds[button.dataset.mind];document.querySelector('.book-page').dataset.mindDetail=button.dataset.mind;document.getElementById('mind-image').src=mind.image;document.getElementById('mind-image').alt=mind.name+' Sola';document.getElementById('mind-kicker').textContent=mind.kicker;document.getElementById('mind-name').textContent=mind.name;document.getElementById('mind-quote').textContent=mind.quote;document.getElementById('mind-description').textContent=mind.description;document.querySelectorAll('[data-mind]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)))}));

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
