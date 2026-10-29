# Tracker SVG Overhaul

## Shared visual direction

- Put tracker graphics in the SillyTavern chat flow, inside Sola's unified HUD at the end of a response—not in a standalone white dashboard.
- Use the V3 HUD's obsidian-and-warm-amber atmosphere with the Autumn Golden Hour colors. Keep the dark surface; use the gold, copper, terracotta, coral, sage, and rose tones as accents.
- Give each compact tracker its own legible 32×32 sigil. Do not shrink the full Astrolabe to reuse it as every tracker's icon.
- Use zodiac, medieval, and fantasy imagery; draw on Arthurian tales where it fits the tracker's meaning. Keep each symbol distinct rather than repeating one frame or motif.
- Keep Sola commentary on warm golden/coffee parchment (`#DEC18E` → `#EAD5AE`) with a subtle corner stain, dark sans-serif italic text, and a thin 1px bronze left rule instead of a heavy coral stripe. Apply this shared treatment in the full showcase and Easel test export. Astrolabe keeps its separate Chronometer Note, and Bond keeps a parchment note inside each relationship slip; preserve their text.

### Autumn Golden Hour colors from V3

| Color | Hex |
|---|---|
| Marigold | `#F4A261` |
| Amber | `#F3B74B` |
| Cider | `#E9A036` |
| Coral | `#EE6C4D` |
| Copper | `#E07A5F` |
| Terracotta | `#C06C54` |
| Sage | `#9AA87A` |
| Rose | `#F4845F` |

The chat mock uses an obsidian surface (`#141516` background, `#211E1A` panel) and subdued bronze borders. Those surface values are preview styling, not V3 palette swatches.

## Celestial Astrolabe — approved direction

- The full Astrolabe is the distinctive illustration for **Time & Chronology**.
- Keep it as the large focal instrument in that tracker; use separate 32×32 sigils for the other tracker labels.
- Its engraved circles, zodiac ring, central solar star, lunar crescent, and alidade combine medieval instrument craft with celestial imagery.
- In SillyTavern, it appears in the dark unified HUD after the narrative prose. The mockup demonstrates placement and color; it is not a screenshot of a live SillyTavern session.
- **Approved readout — Observatory Almanac:** replace generic data tiles with a ruled brass almanac: a prominent Campaign Day beside Horizon, a full-width Macro Chronology entry, and an Elapsed Beat with engraved graduations. Keep the warm parchment Chronometer Note separate below.
- The large emblem is locked during readout revisions: preserve its SVG source and desktop/mobile size rules exactly. Sample values remain Day 42, Dusk, Mid-Autumn · 4th Year of the Eclipse, and ~20 minutes.

### Astrolabe SVG source

The artwork uses `--warning`, `--c1`, `--accent`, `--surface`, `--border`, and `--muted` from its surrounding theme.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420" role="img" aria-label="Engraved medieval astrolabe with zodiac ring, solar sigil, lunar phase and alidade">
  <defs>
    <linearGradient id="astrolabe-gilding" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="var(--warning, currentColor)"/>
      <stop offset=".5" stop-color="var(--c1, currentColor)"/>
      <stop offset="1" stop-color="var(--accent, currentColor)"/>
    </linearGradient>
    <radialGradient id="astrolabe-enamel">
      <stop offset="0" stop-color="var(--surface, transparent)" stop-opacity=".48"/>
      <stop offset="1" stop-color="var(--surface, transparent)" stop-opacity=".06"/>
    </radialGradient>
  </defs>

  <g fill="none" stroke="url(#astrolabe-gilding)" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="210" cy="210" r="181" stroke-width="1.6"/>
    <circle cx="210" cy="210" r="171" stroke="var(--border, currentColor)" stroke-width="1"/>
    <circle cx="210" cy="210" r="143" stroke-width="1.2"/>
    <circle cx="210" cy="210" r="83" stroke="var(--border, currentColor)" stroke-width="1"/>
    <circle cx="210" cy="210" r="68" stroke-width="1.3"/>
  </g>

  <g transform="translate(210 210)" fill="none" stroke="var(--muted, currentColor)" stroke-linecap="round">
    <path d="M0 -181v16" stroke="url(#astrolabe-gilding)" stroke-width="1.6"/>
    <path d="M0 -181v8" transform="rotate(30)"/>
    <path d="M0 -181v8" transform="rotate(60)"/>
    <path d="M0 -181v16" transform="rotate(90)" stroke="url(#astrolabe-gilding)" stroke-width="1.6"/>
    <path d="M0 -181v8" transform="rotate(120)"/>
    <path d="M0 -181v8" transform="rotate(150)"/>
    <path d="M0 -181v16" transform="rotate(180)" stroke="url(#astrolabe-gilding)" stroke-width="1.6"/>
    <path d="M0 -181v8" transform="rotate(210)"/>
    <path d="M0 -181v8" transform="rotate(240)"/>
    <path d="M0 -181v16" transform="rotate(270)" stroke="url(#astrolabe-gilding)" stroke-width="1.6"/>
    <path d="M0 -181v8" transform="rotate(300)"/>
    <path d="M0 -181v8" transform="rotate(330)"/>
  </g>

  <g fill="url(#astrolabe-enamel)" stroke="url(#astrolabe-gilding)" stroke-width="1.2">
    <path d="M210 48l5 7-5 7-5-7z"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(30 210 210)"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(60 210 210)"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(90 210 210)"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(120 210 210)"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(150 210 210)"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(180 210 210)"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(210 210 210)"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(240 210 210)"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(270 210 210)"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(300 210 210)"/>
    <path d="M210 48l5 7-5 7-5-7z" transform="rotate(330 210 210)"/>
  </g>

  <g fill="none" stroke="var(--muted, currentColor)" stroke-width="1">
    <ellipse cx="210" cy="210" rx="34" ry="78" transform="rotate(34 210 210)"/>
    <ellipse cx="210" cy="210" rx="34" ry="78" transform="rotate(-34 210 210)"/>
    <path d="M135 210h150 M210 135v150"/>
    <path d="M157 157l106 106 M263 157L157 263" opacity=".45"/>
  </g>

  <circle cx="210" cy="210" r="64" fill="url(#astrolabe-enamel)" stroke="url(#astrolabe-gilding)" stroke-width="1.2"/>
  <path d="M210 151l9 40 34-24-24 34 42 9-42 9 24 34-34-24-9 42-9-42-34 24 24-34-42-9 42-9-24-34 34 24z" fill="none" stroke="url(#astrolabe-gilding)" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M218 180a31 31 0 1 0 23 48a24 24 0 1 1-23-48z" fill="url(#astrolabe-gilding)" fill-opacity=".22" stroke="url(#astrolabe-gilding)" stroke-width="1.4"/>
  <path d="M210 210l77-77" stroke="url(#astrolabe-gilding)" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M287 133l-2 15-9-9z" fill="url(#astrolabe-gilding)" stroke="url(#astrolabe-gilding)" stroke-width="1"/>
  <circle cx="210" cy="210" r="5" fill="var(--warning, currentColor)"/>

  <g fill="var(--accent, currentColor)">
    <circle cx="210" cy="126" r="2.5"/>
    <circle cx="294" cy="210" r="2.5"/>
    <circle cx="210" cy="294" r="2.5"/>
    <circle cx="126" cy="210" r="2.5"/>
  </g>

  <g fill="none" stroke="url(#astrolabe-gilding)" stroke-width="1.5" stroke-linejoin="round">
    <path d="M210 9l10 22-10-5-10 5z"/>
    <path d="M210 411l10-22-10 5-10-5z"/>
    <path d="M9 210l22-10-5 10 5 10z"/>
    <path d="M411 210l-22-10 5 10-5 10z"/>
  </g>
</svg>
```

## Feeling Engine — heraldic rose direction

Sola V3 defines Inner Weather (`IW`) as outward emotional temperature from Frostbound to Fervent. It is not morality, affection, or an average of the separate Tenderness, Fury, Dread, and Yearning (`TFDY`) measures.

### Symbol direction

- Make the full-size art an ornate, symmetrical enamel shield: three gilded borders, a small crest, mirrored side scrollwork and diamond marks, a ringed central moonstone, and matched lower filigree around the four large petals.
- Color-code the petals to the four currents: left red = Tenderness, top orange = Fury, right green = Dread, bottom yellow = Yearning. The color ties each petal to its readout.
- Remove inset petal-like glyphs so each colored petal remains a single clear shape. Mirror the shield ornaments and lower filigree exactly.
- Keep the 32×32 sigil compact: a double shield outline, four clear color-coded petals, and a small moonstone; reserve the crest, scrollwork, and layered enamel detail for the full-size art.
- Keep the silhouette distinct from the Astrolabe. No gears, gauges, or literal engine imagery; avoid making the symbol a simple heart/love icon.
- The linked chat preview uses V3's Guinevere example: `IW 1` (Cool), `T3↑ F1↓ D0 Y4↑`. These values are illustrative.
- The user has locked the large heraldic-rose emblem; preserve its SVG source, decoration, symmetry, colors, and desktop/mobile size rules during readout revisions.
- **Approved readout — Enamel Measures:** put Inner Weather on a bordered plaque with its own five-position scale. Give each TFDY current a colored enamel panel, readable value/trend, and four small diamond measures representing the 0–4 value. The measures do not add a new score.
- Keep IW independent from the four currents. On narrow mobile, stack the IW scale and current panels for readable labels; retain the illustrative `IW 1`, `T3↑ F1↓ D0 Y4↑` values. This is HTML design work only; no prompt or regex change.

### 32×32 SVG draft

```svg
<svg viewBox="0 0 32 32" role="img" aria-label="Heraldic rose sigil for Inner Weather and TFDY">
  <defs>
    <linearGradient id="feeling-gilding" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="var(--warning, currentColor)"/>
      <stop offset=".55" stop-color="var(--c1, currentColor)"/>
      <stop offset="1" stop-color="var(--accent, currentColor)"/>
    </linearGradient>
  </defs>
  <path d="M16 2.8 26 6.4v8c0 6.4-4 11.1-10 14.8-6-3.7-10-8.4-10-14.8v-8z"
        fill="var(--surface, transparent)" stroke="var(--muted, currentColor)" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M16 4c1.5 1.3 1.4 2.3 0 3.4-1.4-1.1-1.5-2.1 0-3.4z"
        fill="url(#feeling-gilding)"/>
  <g fill="none" stroke="url(#feeling-gilding)" stroke-width="1.1" stroke-linejoin="round">
    <path d="M16 8c2.6 2 3.1 4.1 0 6.7C12.9 12.1 13.4 10 16 8z"/>
    <path d="M24 16c-2 2.6-4.1 3.1-6.7 0 2.6-3.1 4.7-2.6 6.7 0z"/>
    <path d="M16 24c-2.6-2-3.1-4.1 0-6.7 3.1 2.6 2.6 4.7 0 6.7z"/>
    <path d="M8 16c2-2.6 4.1-3.1 6.7 0-2.6 3.1-4.7 2.6-6.7 0z"/>
  </g>
  <path d="M16 13l3 3-3 3-3-3z" fill="url(#feeling-gilding)" stroke="var(--warning, currentColor)" stroke-width=".8"/>
  <circle cx="16" cy="16" r="1" fill="var(--surface, transparent)"/>
</svg>
```

**Full in-chat design preview:** [Feeling Engine — The Rose of Avalon](previews/feeling-engine-courtly-rose.html). It expands the 32×32 heraldic rose into a shield-centered tracker panel on the dark Autumn Golden Hour chat surface.

**Combined tracker HUD preview:** [Interactive Sola tracker HUD](previews/feeling-hud-combined.html).

## Bond & Chemistry Radar — Oath-Knot direction

Sola V3 defines one `<bond>` container for all active relationships. Each pair has a `Pair`, `Dynamic`, signed `Shift` entries, and Sola's chemistry whisper. Positive and negative shifts can coexist in the same turn; chemistry is qualitative, not a numeric score.

### Symbol and panel direction

- Use two interlaced gold and coral threads, star-like endpoints, and a central knot: an Arthurian oath-knot rather than a romance-only heart or a chemistry gauge.
- Keep the 32×32 label sigil and the larger oath-knot illustration visually distinct from the Astrolabe, heraldic rose, and other tracker marks.
- Give each active pair its own slip with a dynamic badge, separate positive and negative shift chips, and Sola's whisper.
- Use sage for positive movement and coral for friction or strain; preserve both when a relationship shifts in mixed directions.
- Preview values are illustrative; the V3 prompt remains the source of relationship state.

**Interactive preview:** [Bond & Chemistry in the combined tracker HUD](previews/feeling-hud-combined.html).

## Inner Current — cadence HUD

The V3 `Inner Current ☁️` prompt and its `<thought>` capsule stay unchanged. This design updates only the HUD readout for `<current>`.

### HUD readout

- Preserve the V3 cloud sigil in the collapsible tracker header.
- Show the three V3 fields: **Cadence Rhythm**, **Mind Focus**, and **Internal State**.
- Visualize cadence as a four-stage constellation path: Dormant (3–5 turns), Gathering (2 remaining), Primed (1 turn), and Window Open (emitted this turn).
- Keep private thought text out of this HUD card. Example values—2 turns remaining, Guinevere, Gathering—are illustrative.
- No changes to the V3 prompt or regex pack.

**Interactive preview:** [Inner Current in the combined tracker HUD](previews/feeling-hud-combined.html).



## Wardrobe & Physical State — The Tailor’s Workbench

Sola V3 keeps all active NPCs and `{{user}}` in one `<wardrobe>` container. `03.14a Wardrobe: Character Attire Slip` captures five values: `$1` name, `$2` the entire free-text Layers line, `$3` Condition, optional `$4` Tells, and optional `$5` Sola note. The prompt suggests Outer / Upper / Lower / Footwear within Layers, but the regex does not extract four garment fields, colors, or materials. `03.15 Card: Wardrobe & Physical State` wraps the result in the collapsible drawer and hides empty tells and notes.

### HUD card direction

- Use a 32×32 heraldic surcoat with a star-clasp; keep its silhouette distinct from the shielded Feeling Engine rose.
- Keep one collapsible **Sola’s Atelier & Wardrobe** card with the V3 `ATELIER` badge.
- **Approved direction — The Tailor’s Workbench:** replace the brass-framed register with woven sage fitting sheets, stitched hems, a wooden top rail, and hanging condition tags. The fixed material palette is decorative, never inferred from clothing. Restyle the existing `.sola-ward-slip` markup, not a new garment model.
- Keep `$2` intact in the existing `.sola-ward-layers` block beneath **Active Layers**. Do not require a fixed count, split the text into inferred garment slots, generate outfit drawings, or infer palette swatches.
- Give the full Layers text a large unboxed serif treatment. Separate Somatic Tells with a stitched rule. On desktop, pin the warm golden/coffee **Sola’s Atelier Note** beside these fields as a smaller paper annotation, not another full-width data panel. Retain the shared sans-serif italic note typography and thin bronze edge.
- Keep Condition as its captured text on a slightly angled hanging tag, without inferred severity or state-dependent colors. On narrow mobile, stack the text and pinned note. If no note is supplied, the garment text uses the full sheet width.
- Replace the large Tailor’s Seal with a static needle-and-thread detail resting above the first sheet. In a future regex export, this SVG is a fixed prefix to `$1` in `03.15`; `03.14a`’s five captures and markup remain unchanged. No outfit drawings, swatches, new fields, or runtime script.
- The showcase retains actual V3 attire-slip classes, inline markup, and captured text. This direction replaces the earlier emblem-over-register layout.
- The Guinevere and Sir Gareth entries are illustrative; Sir Gareth stands in for the user persona.
- No changes to the V3 prompt or regex pack.
- Browser smoke checks used the unchanged V3 attire-slip, Wardrobe drawer, and HUD rules with the fixed needle detail added. All five captured values were preserved for five participants; tells-only, note-only, and neither optional field retained correct visibility and layout. Desktop and 320px mobile dropdowns worked without horizontal overflow. Wind’s Arrow’s entire preview card, dedicated CSS, and shared parchment styles remained identical. This is HTML rendering verification, not a Lumi import or sanitizer test.

**Current interactive preview:** [Atelier in the full tracker HUD](previews/sola-tracker-hud-showcase.html#wardrobe). The earlier [combined HUD preview](previews/feeling-hud-combined.html) retains the previous slip design.

## Wind’s Arrow — Starbound Trajectory

Sola V3’s optional `D20 Roleplay System 🏹` emits one `<arrow>` block with `Gamble`, `Trajectory`, `Friction`, and `Sola`. The tag does not expose the numeric roll. The module is disabled in the V3 Flame preset; this design does not enable it or change the V3 prompt or regex pack.

`05.07a Arrow: Kinetic Fate Dossier` captures `$1` Gamble, `$2` the full Trajectory text, `$3` Friction, `$4` Sola commentary, and `$5` the recognized outcome prefix. `05.08 Card: The Wind's Arrow` supplies the drawer, outcome-dependent colors/icons, and hiding of empty Gamble, Friction, and note blocks. Keep these captures and behaviors; do not infer a numeric roll.

### Sigil and HUD card direction

- Use a 32×32 compass-ring sigil with a diagonal arrow, wind trails, fletching, and a four-point star at its point.
- Keep the collapsible V3 title **Sola’s Wind’s Arrow**, the `KINETIC D20` badge, and the result-sensitive trajectory banner.
- **Approved static graphic — Windbound Longbow:** a horizontal arrow held in a gilded longbow, right-facing sage fletching, paired wind curls mirrored horizontally, and mirrored celestial stars. Keep its warm metallic palette and geometry fixed across outcomes. Its open horizontal silhouette distinguishes it from the Astrolabe, heraldic shield, and Atelier hoop.
- Place the graphic once before the dossier in the fixed drawer template. The full-preview emblem is 300px wide where space permits and shrinks to fit narrow screens; it is decorative, not a trajectory diagram or roll indicator.
- Restyle the existing `.sola-arrow-banner` as a bordered outcome cartouche. Read the existing `data-trajectory` value for the appropriate color and small outcome icon; preserve neutral styling when no known outcome prefix is captured.
- Preserve V3 outcome meanings and colors: Wind Drift (7 or below; failure/complication; coral), Grazing Shot (8–14; costly success; amber), and Bullseye (15 or above; decisive hit; sage).
- Keep the existing `.sola-arrow-gamble` and `.sola-arrow-friction` as two ruled panels, stacked on narrow mobile. Sola’s Directorial Adjudication uses the warm golden/coffee parchment, sans-serif italic text, and thin bronze edge shared with Atelier. Preserve empty-field hiding. Do not add a roll field.
- Preview values are illustrative. V3 remains the source of tracker state.
- The full-preview dossier is generated by the unchanged V3 dossier regex, retaining its actual classes and inline markup. Browser smoke checks used the V3 dossier, Arrow drawer, and HUD replacements for all three outcomes, an unrecognized trajectory, and a trajectory-only case on desktop and 320px mobile. The large graphic stayed identical; optional empty panels hid correctly. This is HTML rendering verification, not a Lumi import or sanitizer test.

**Current interactive preview:** [Wind’s Arrow in the full tracker HUD](previews/sola-tracker-hud-showcase.html#arrow). The earlier [standalone preview](previews/winds-arrow-preview.html) retains the previous layout.

## Carried Inventory — The Ironbound Equipment Locker

Sola V3’s optional `Carried Inventory 🗡️` module emits one `<inventory>` container for all active NPCs and `{{user}}`, with one `Name · Inventory:` entry per participant. Each entry tracks `In-Hand`, `Carried`, `Concealed`, and `Sola`. The module is disabled in the V3 Flame preset; this design does not enable it or change the V3 prompt or regex pack.

`03.15a Inventory: Character Gear Slip` captures `$1` name, required `$2` In-Hand, optional `$3` Carried, optional `$4` Concealed, and optional `$5` Sola note. `03.16 Card: Carried Inventory & Gear` supplies the drawer and hides omitted optional rows/notes. Explicit text such as “None” is not an omitted field and remains visible.

### Sigil and HUD card direction

- Use a 32×32 belted satchel with a small keyhole clasp; keep its silhouette distinct from the Wardrobe surcoat and Wind’s Arrow compass.
- Keep one collapsible **Sola’s Armory & Carried Gear** card with the V3 `ARMORY` badge and a separate equipment slip for each participant.
- **Approved direction — The Ironbound Equipment Locker:** remove the large Quartermaster’s Coffer illustration. Integrate a fixed hanging skeleton key, iron side rail, hinge plates, and wooden drawer faces into the readout itself. Participant names sit on metal nameplates; Equipment Profile remains a restrained label rather than another pill.
- In a future regex export, wrap `$1` in `03.16` with `.armory-locker` and its fixed `.armory-key` SVG. Keep the repeated `03.15a` gear-slip captures and markup unchanged. The key and hinges are decoration, not held items or generated equipment.
- Arrange each participant’s three native fields as side-by-side locker compartments: a warmer, slightly larger **In-Hand**, blue-gray **Carried**, and a darker lavender-accented **Concealed** section. Use internal dividers instead of separate bordered cards. Keep all contents as free text; do not infer individual item slots, quantities, icons, or capacities.
- Stack the compartments on narrow mobile. Omitted optional categories disappear and the remaining compartments fill the available width; explicit “None” text remains visible.
- Give each participant a Sola’s Armory Note on warm golden/coffee parchment, with sans-serif italic text and a thin bronze edge, reusing the Atelier and Wind’s Arrow note styling. Use Guinevere and Sir Gareth as illustrative examples; Sir Gareth stands in for the user persona.
- Preserve the V3 zero-materialization rule and item continuity. Sample possessions are illustrative, not persistent story state.
- Browser smoke checks used the unchanged V3 gear-slip, inventory drawer, and HUD rules with the fixed locker wrapper added. All five captured values were preserved for five participants; omitted categories and notes retained their native hiding behavior and the grid reduced to one/two/three compartments as appropriate. Desktop and 320px mobile dropdowns worked without horizontal overflow. Wind’s Arrow’s preview card and dedicated CSS remained identical. This is HTML rendering verification, not a Lumi import or sanitizer test.

**Current interactive preview:** [Armory in the full tracker HUD](previews/sola-tracker-hud-showcase.html#inventory). The earlier [standalone preview](previews/carried-inventory-preview.html) retains the previous layout.

## Active Scene Facts — The Players’ Stage

Sola V3’s optional `Active Scene Facts 👥` prompt emits one `<scene_cast>` block with `Location`, `Active Speakers`, `Ambient NPCs`, `Observable Facts`, and `Sola`. It is emitted only for multi-NPC scenes or room-geography changes. The prompt is disabled in the V3 Flame preset; this design does not enable it or change the V3 prompt or regex pack.

V3’s `03.17a` through `03.17e` row rules each capture one whole value line for Location, Active Speakers, Ambient NPCs, Observable Facts, and Sola. `03.17 Card: Scene Cast & Local Facts` wraps the rows in `.sola-cast-dossier` inside the drawer. The regexes do not extract individual NPCs, coordinates, gestures, or separate per-person facts.

### Sigil and HUD card direction

- Use a 32×32 arched gallery sigil with two figures and a small keystone; keep it distinct from the Astrolabe, Arrow compass, and Inventory satchel.
- Keep the collapsible V3 title **Sola’s Scene Cast & Spatial Ledger** with its `SPATIAL LEDGER` badge.
- **Current direction — The Players’ Stage:** make the readout itself a medieval players’ stage, not a large emblem above boxed panels. Remove the Witness Gallery illustration. Use fixed mirrored wine-red curtains, golden tiebacks, a carved wooden beam, and a restrained footboard.
- Wrap `.sola-cast-dossier` in `.cast-playhouse`, with the static `.cast-canopy` SVG behind its top edge. In a future `03.17` drawer export, add this fixed wrapper around the existing dossier; do not change the row captures or infer a stage map. Curtains and beam never respond to cast names, counts, or positions.
- Location is an unboxed centered stage heading. Active Speakers occupies a wider, warmly lit main-stage area with larger serif text; Ambient NPCs sits in a narrower, quieter wing separated by one dashed rule. Observable Facts is a continuous witness strip below, not individual character cards. Preserve all captured text intact.
- On narrow mobile, stack the main-stage and wing content, retaining the curtain framing. A lone speaker/ambient block spans the full row. If Location is omitted, keep the first content below the canopy rather than overlapping the static artwork.
- Sola’s commentary remains a full-width warm golden/coffee parchment note, using the shared sans-serif italic text and thin bronze edge. Omitted fields do not produce placeholder panels; explicit “None” remains visible.
- Preserve the V3 field order: **Location**, **Active Speakers**, **Ambient NPCs**, **Observable Facts**, and **Sola**.
- Show no more than one or two active speakers; ambient NPCs remain limited to physical gestures. List all present NPCs in the observable-facts field with one visible or audible fact each—never inferred thoughts or motives.
- Example scene values are illustrative; the V3 prompt remains the source of cast and spatial state.
- The full-preview rows remain generated by the unchanged V3 row regexes. Browser checks used V3’s row, Cast drawer, and HUD replacements with only the proposed fixed wrapper added: complete scene, speakers without ambient/commentary, explicit ambient “None,” and a scene without Location. All captured values were preserved; single blocks spanned correctly, content cleared the canopy, and desktop/320px mobile dropdowns worked without horizontal overflow. This is HTML rendering verification, not a Lumi import or sanitizer test.

**Current interactive preview:** [Scene Cast in the full tracker HUD](previews/sola-tracker-hud-showcase.html#scene). The earlier [standalone preview](previews/active-scene-facts-preview.html) retains the previous layout.

## Character Matrix — Illuminated Character Register

Keep the readable character-register layout, but give it artwork comparable in detail to the other primary trackers. The court mirror was rejected for unclear symbolism; the subsequent pennant/avatar was rejected for being too plain.

**Approved direction:** universal faceless effigy with ornate foliate medallion, readable register layout, and parchment Sola notes.

### Sigil and HUD card direction

- Use an illuminated medallion with a universal, faceless metal effigy in a clasped mantle. Keep engraved oval borders, mirrored foliate ornament, enamel shading, and top/bottom jewel mounts. Avoid specific hair, skin tone, facial features, or a fixed character likeness.
- Give the nameplate manuscript-style corner rules, subtle vertical texture, and double gilded edging. Render the full medallion at 148×180 on desktop and 126×154 on narrow mobile; use a compact oval portrait adaptation for the 32×32 header sigil.
- Keep the collapsible title **Sola’s Character Matrix** and the `CHARACTER SPINE` badge.
- Place Location and Orbit beneath the name banner; pair Positive Trait and Negative Trait in a prominent band. Follow with readable Orientation, Voice, Mask, Internal, Boundary, and Audit rows.
- Use one aligned label column and ruled rows instead of nested section cards. On mobile, stack labels above values and the paired traits vertically. No miniature section glyphs, mirror diagram, doorway icon, or duplicate status stamps.
- Preserve the boundary and audit emphasis: character autonomy, no unearned softening, and no user-mirroring.
- Include **Sola’s Note** beneath the register on light parchment with dark, readable italic commentary and a copper edge. Preserve this parchment treatment for notes. Keep it separate from Audit; preview commentary is illustrative, not live state. This is preview presentation only, not a new prompt field or regex contract.
- Preview values are illustrative.

**Interactive preview:** [Character Matrix — Illuminated Character Register](previews/sola-tracker-hud-showcase.html).

## Heart Engine — Four Sovereign Faculties

The full showcase gives Ego, Nerve, Body, and Psyche four illustrated talisman panels. Each has its own large SVG, title, domain label, and independent reading; they sit four across on desktop, two across on intermediate screens, and stack on narrow mobile.

**Approved direction:** four illustrated talisman panels with separate faculty readings and a parchment Sola’s Note. Saved as HTML design artwork; production prompt and regex files remain unchanged.

### Sigils and HUD card direction

- Keep one collapsible **Sola’s Heart Engine** card with the `SOVEREIGN VITALS` badge.
- Use detailed, distinct illustrations: a jeweled crown on a cushion for Ego; a faceted crystal suspended under tension for Nerve; an engraved chalice visibly holding red wine for Body; and a symmetrical four-winged moth with lunar ornament for Psyche.
- Preserve the four readings: **Ego** (calculation and mask), **Nerve** (composure and reflex), **Body** (breath and pulse), and **Psyche** (feeling and intuition). Do not merge them into one score.
- Keep artwork at 112×128 within double-edged enamel panels. Preserve matched panel dimensions and readable text. Do not reintroduce the cathedral design or a modern ECG line.
- Example values are illustrative.
- Include Sola’s Note beneath all four faculties on light parchment with dark italic commentary. Sample notes do not create a new prompt or regex field.

**Interactive preview:** [Heart Engine — Four Illustrated Talismans](previews/sola-tracker-hud-showcase.html).

## Thought Engine — Backstage Folio

The full showcase presents Thought Engine as an illustrated private interview folio, preserving its five questions and answers outside the scene.

**Approved direction:** illustrated private interview folio, five ordered question/answer pairs, distinct unspoken closing section, and parchment Sola’s Note.

### Sigil and HUD card direction

- Use a 32×32 parchment folio crossed by a quill, with a small coral seal.
- Keep the collapsible title **Sola’s Thought Engine** and the `BACKSTAGE` badge.
- Replace the stack of identical boxes with one dark manuscript surface, a leather-like binding edge, Roman-numbered entries, gold questions, and larger ivory answers.
- Use a 180×180 quill-and-inkwell illustration with an open folio, engraved feather barbs, brass details, and a coral wax seal. Stack the illustration above the title on mobile.
- Preserve the primary character’s backstage preamble between the frontispiece and question I: italic “Sola sits in her chair and gives a gentle smile,” followed by the V3 welcome, “Thanks for coming back for our check-in. Lets start.” Render the welcome on warm parchment with sans-serif italic text. These are the existing V3 action/welcome captures, not an extra interview question or an in-scene action; do not repeat the preamble for secondary character blocks.
- Give **Behind Their Teeth** a distinct copper-edged closing section for the fifth, unspoken answer. Keep all five questions and sample answers intact.
- Include Sola’s Note below on light parchment; clearly mark sample commentary as illustrative. The folio remains outside the characters’ active scene and does not grant shared knowledge.

**Interactive preview:** [Thought Engine — Private Interview Folio](previews/sola-tracker-hud-showcase.html).

## Easel — Director’s Ledger

The Easel’s full showcase draft is a private director’s planning chart, retaining the approved four-point-star motif rather than a literal easel.

### Sigil and HUD card direction

- Use the circular 32×32 four-point star sigil with a smaller inset star.
- Keep the title **Sola’s Easel** and the `DIRECTOR SPOILERS` badge.
- Preserve the six ledger sections: **Overall Core Check**, **Staging & Continuity**, **Scene Currents & Subtext**, **The Living Currents**, **Branching Storyboard**, and **Sola’s Vault**.
- Use a large engraved four-point star with interlaced diamond tracery above the chart. Keep its symmetry and autumn gilding; avoid reusing the Astrolabe’s circular instrument or Thought Engine’s manuscript illustration.
- Give the six sections distinct layouts: a core-check strip; paired staging and subtext sections; a full-width Living Currents band; a connected five-option Branching Storyboard; and a separate Vault footer.
- The storyboard connector indicates alternative possibilities, not a scheduled sequence. Stack the alternatives along a vertical rail on mobile.
- Place Sola’s Note on light parchment below the chart, with illustrative commentary clearly marked. No prompt or production regex changes.
- Keep sample values marked as illustrative and outside story canon.

**Interactive preview:** [Sola’s Easel — Director’s Planning Chart](previews/sola-tracker-hud-showcase.html).

### Standalone Lumiverse test regex

**Import file:** [Sola Easel — Director Chart — Lumi Test](regex/Sola%20Easel%20-%20Director%20Chart%20-%20Lumi%20Test.json).

- HUD-compatible revision 4, in native `lumiverse_regex_scripts` format (schema version 1). Thirty AI-output, display-only rules in `Sola Easel - Director Chart TEST`, ordered 0–29. No prompt savers or response mutations are included.
- Re-import the same JSON in Lumi’s Regex panel. All thirty revision-3 script IDs are retained; revision 4 updates the existing field-label matcher to accept V3’s shortened labels and formatting variants. Existing V3 regexes may stay enabled; before-pack, after-pack, and default merged import order are supported.
- Matches raw V3 `<sola_easel>` blocks or already-rendered V3 Easel drawers, with or without turn metadata. Uses real check statuses, section contents, pressures, seeds, branch text, Vault voice/rating, and directorial dare. It never inserts the HTML mockup’s sample state.
- Branch alternatives retain their full text in connected rows rather than compressing them into the mockup’s five short labels. The live directorial dare or supplied Sola note uses parchment; no commentary is invented when absent.
- Nonstandard section layouts retain their full content inside the new dropdown. Partial blocks cannot absorb adjacent complete blocks.
- The first release collapsed to a 3px-wide strip inside V3’s flex HUD because its inline-size container lacked the required drawer wrapper and sizing classes. Revision 2 uses the wrapper, `sola-drawer-track`, and the HUD’s title/chevron structure; it has an explicit standalone width as well.
- Revision 3 restores chips for pressures (`DRM`, `STR`, `MNT`, `THR`, `UNL`) and seeds (`LAT`, `HEAT`, `SPRUNG`), including bracketed, descriptive, bare-code, and V3-generated HTML inputs. It also styles `E0`–`E4`, Gear 1–5, and ranges such as Gear 1–2. State chips have expanded-name hover titles.
- Render each pressure/seed as one intact row: stable ID, label, state chip, then the full catalyst/payoff note. Accept multi-digit IDs such as C10, S16, S24, and S100; preserve verbatim seed labels. V3’s old item patterns accepted only single-digit IDs, and its old chip scope did not recognize the new chart.
- Verified revision 3 through Lumi’s importer/display pipeline plus Markdown-island processing and sanitization against an in-memory database: upgrading revision 2 alongside all 228 V3 rules produced 258 rows without duplicate test rules. All three orders preserved ten ledger entries with ten state chips, all eight codes, multi-digit IDs, full notes, E4, and a gear range. Separate checks covered all five escalation levels, all five gears, bare codes, descriptive suffixes, repeat-processing without nested chips, and unchanged outside text.
- Chromium inspection reproduced the original 3px strip, then verified the corrected pill, full-width expansion, collapse, and another tracker’s independent interaction. Desktop, 390px, and 320px views had no horizontal overflow. Existing V3 Field Label/Pressure/Seed typography rules hit Lumi’s 500ms guard during some isolated combined passes; those original rules were left unchanged, and ledger text remained present.
- Final revision-3 Chromium inspection confirmed compact ledger rows, all eight state colors/tooltips, warm sans-serif parchment, and the thin rule. The full showcase’s shared notes and Matrix note use that same parchment treatment. The 320px integrated HUD and 390px showcase had no horizontal overflow; the Easel still collapsed correctly.
- Revision 4 highlights short forms such as Spatial, Props, Sensory, Climate, Body’s Truth, and Blindspot, while retaining their long forms, straight/curly apostrophes, and bold-label syntax. Labels remain verbatim rather than being renamed. Verified all six through the three combined execution orders and checked the rendered gold/semibold styling in Chromium; outside prose remained unchanged and all ten METAR chips survived.
- To revert, disable the test folder. If the old Easel display rules were disabled for the first test, re-enable them. Existing presets, production regex packs, and live Lumi data remain untouched.


## Director Notebook — Open Continuity Codex

The optional V3 Director Notebook uses `<story_notes>` for durable plot continuity. Its sample values stay private to Sola’s directorial continuity.

`03.18 Director Notebook: Story Dossier` captures `$1` Threads, `$2` Seeds, `$3` Motives, `$4` Horizon, and `$5` Sola/Sola Comment. The captures support multiline text and named fields arriving in different orders. `03.19 Card: Director Notebook & Story Seeds` supplies the drawer and hides empty sections. Do not split these text blocks into inferred threads, relationships, timelines, or individual clues.

### Sigil and HUD card direction

- Use a 32×32 open folio and quill with four colored page marks for Threads, Seeds, Motives, and Horizon.
- Keep one collapsible **Sola’s Director Notebook** card. The showcase retains its `PRIVATE FOLIO` badge; the unchanged V3 drawer uses `DIRECTOR SCRATCHPAD`.
- Preserve the V3 fields: **Threads**, **Seeds**, **Motives**, **Horizon**, and **Sola Comment**. Keep each field lean, with one or two bullets at most.
- **Approved direction — Open Continuity Codex:** make the readout an open leather-bound book rather than a large emblem with boxed sections. Use warm coffee-gold paper, dark readable ink, a shaded central binding gutter, visible page edges, and one fixed wine-red ribbon bookmark. All material decoration is static.
- Arrange Threads above Seeds on the left leaf, and Motives above Horizon on the right. Sola’s Continuity Note sits at the foot of the right leaf as editorial marginalia, with dark sans-serif italic text on the warm page. Keep all native section labels and values; remove the separate card backgrounds and borders.
- Use the existing `.sola-notes-dossier` and native cells. In a future `03.19` export, wrap `$1` once with `.notebook-codex`; the `03.18` captures and generated markup remain unchanged. No new prompt fields, parsing, external images, or runtime script.
- On narrow mobile, show one leaf in Threads → Seeds → Motives → Horizon → Sola order, without a central gutter. If only one side’s fields are supplied, use the single-leaf layout on desktop too. Omitted fields stay hidden, explicit “None” stays visible, and multiline values retain their line breaks.
- Characters do not know the notebook contents. Retire resolved threads and paid-off seeds.
- The V3 module is optional and disabled in the Flame preset. The preview does not enable or change it.
- Browser smoke checks used the unchanged V3 Notebook dossier, drawer, and HUD rules with the fixed codex wrapper added. Complete, reordered/multiline, left-only, and right-only fixtures preserved all five captures. Desktop and 320px mobile layouts fit without horizontal overflow and dropdowns opened/closed correctly. Wind’s Arrow, Armory, and Atelier markup remained unchanged; Wind’s Arrow’s dedicated CSS remained identical. This is HTML rendering verification, not a Lumi import or sanitizer test.

**Current interactive preview:** [Director Notebook in the full tracker HUD](previews/sola-tracker-hud-showcase.html#notebook). The earlier [standalone preview](previews/director-notebook-preview.html) retains the previous layout.

## Tempo Agitator — The Bard’s Measure

The optional V3 Tempo Agitator selects **NEUTRAL**, **STEADY**, or **DRIVE** from recent scene history. The HUD preview presents that gear in a collapsible dropdown.

V3’s `03.05`, `03.06`, and `03.07` Tempo chip rules recognize `<tempo>DRIVE</tempo>`, `<tempo>STEADY</tempo>`, and `<tempo>NEUTRAL</tempo>`, including case-insensitive and bracketed forms. They produce `.sola-tempo-gate` with a state class, not a dossier or drawer. The native active labels are `D · DRIVE`, `S · STEADY`, and `N · HOLD`. No elapsed time, numeric tempo, or history counter is captured.

### Sigil and HUD card direction

- **Approved direction — The Bard’s Measure:** give Tempo a musical readout rather than an emblem, pendulum, progress meter, or boxed gear cards. Use a 32×32 medieval lyre label icon and a four-line chant staff across the opened drawer.
- Show three fixed decorative musical marks: a square Neutral mark, a diamond Steady mark, and a paired Drive mark. Only the mark corresponding to the native chip’s state class is highlighted, using V3’s blue-gray, amber, or coral. No generated notation, animation, timing measurement, or implied progress.
- Keep one collapsible **Sola’s Tempo Agitator** card. Its header contains the actual native chip markup, restyled to show only the selected state. In a future export, each of the three existing chip replacements receives the same fixed drawer frame around its own chip; the matching regexes and pacing prompt need not change.
- Use V3’s `.sola-drawer`, `.sola-drawer-track`, `.sola-drawer-title`, `.sola-drawer-chevron`, and `.sola-track-body` hooks. Keep the state chip inside `.sola-drawer-title`: the unified HUD hides other summary children, so placing it beside the title would conceal it.
- Give the three display cues distinct voices: Neutral — “Let the room breathe.” Steady — “One beat. Then another.” Drive — “Give the moment teeth.” These are fixed HUD headings, not additional prompt instructions. Put the literal pacing definitions below them. Keep three columns on desktop and stack the explanations on mobile while retaining the full staff.
- Preserve the V3 pacing rules: Neutral holds plot while changing one concrete room detail; Steady advances one or two beats; Drive pushes or escalates.
- Show the unchanged history rule on warm parchment: after two quiet or NEUTRAL turns, step up one gear; after a peak beat, step down one gear. State explicitly that direct action and questions receive full answers in Neutral. Retain the length guidance: Neutral tends short; Drive may approach the word ceiling.
- V3’s existing regex renders inline tempo chips. This dropdown is a visual proposal; the prompt and regex remain unchanged. The optional module is disabled in the Flame preset.
- Browser smoke checks embedded all three actual V3 chip outputs in the proposed drawer inside V3’s real HUD open/close output. Each state exposed exactly one header label and highlighted exactly one matching musical mark. Desktop and 320px mobile retained visible state chips, working collapsed pills/dropdowns, and readable text without horizontal overflow. Bracketed lowercase inputs produced the same canonical native chip outputs. Wind’s Arrow, Notebook, Armory, and Atelier markup remained unchanged. This is browser verification of the proposed frame with native chips, not a claim that V3 already has this drawer or a Lumi import/sanitizer test.

**Current interactive preview:** [Tempo Agitator in the full tracker HUD](previews/sola-tracker-hud-showcase.html#tempo). The earlier [standalone preview](previews/tempo-agitator-preview.html) retains the previous layout.

## Unified HUD Showcase

The self-contained preview combines all fourteen redesigned tracker cards in one Autumn Golden Hour chat mockup. Each card opens independently; all sample values are illustrative.

**Full preview:** [Sola’s Unified Tracker HUD](previews/sola-tracker-hud-showcase.html).
