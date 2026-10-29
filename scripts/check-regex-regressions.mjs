import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';

function compile(rule) {
    if (rule.find_regex !== undefined) return new RegExp(rule.find_regex, rule.flags);
    const end = rule.findRegex.lastIndexOf('/');
    return new RegExp(rule.findRegex.slice(1, end), rule.findRegex.slice(end + 1));
}

function check(rules) {
    const named = name => rules.find(rule => (rule.scriptName ?? rule.name).startsWith(name));
    const matrix = named('03.20a ');
    const card = text => `<char_matrix>\n${text}\n</char_matrix>`;
    const matches = text => [...text.matchAll(compile(matrix))];
    assert.equal(matches(card('Orientation: Heterosexual and heteroromantic')).length, 1);
    assert.equal(matches(card('Orientation:')).length, 1);
    assert.equal(matches(card('**Coordinates:** Camelot\r\n**Orientation**: Canon orientation\r\n**Voice:** Measured\r\n  Another authored clause')).length, 1);
    assert.equal(matches(card('Orientation: ' + 'x'.repeat(4001))).length, 0, 'Oversized values must use the fallback instead of being truncated into the dossier');
    assert.equal(matches(card('Location: Camelot\nVoice: Measured')).length, 0, 'Missing orientation must not consume another field');
    assert.equal(matches(card('Orientation: Guinevere\nNPC: Gawain\nOrientation: Gawain')).length, 0, 'A multi-character body must use the fallback');
    assert.equal(matches(card('Orientation: Guinevere') + '\nNarrative beat.\n' + card('Orientation: Gawain')).length, 2, 'Separate character cards must remain separate');
    for (const count of [1000, 4000]) {
        assert.equal(matches('<char_matrix>\nOrientation: ' + ' '.repeat(count)).length, 0, 'An unfinished whitespace field must reject without backtracking indefinitely');
    }
    for (const [prefix, tag] of [
        ['03.11 ', 'thought_engine'], ['02.02 ', 'thought_engine'],
        ['03.22 ', 'heart'], ['02.13 ', 'heart'],
    ]) {
        const rule = named(prefix);
        const pair = `<${tag}:Guinevere>First character</${tag}:Guinevere>\n<${tag}:Gawain>Second character</${tag}:Gawain>`;
        assert.equal([...pair.matchAll(compile(rule))].length, 2, `${tag} must keep both named NPC blocks`);
        assert.equal([...`<${tag}:Guinevere>Wrong closer</${tag}:Gawain>`.matchAll(compile(rule))].length, 0, `${tag} must enforce its named closer`);
        const partial = `<${tag} name="Guinevere"\n`.repeat(2000);
        assert.equal([...partial.matchAll(compile(rule))].length, 0, `${tag} must safely reject repeated unfinished attributes`);
    }
    const cast = text => `<scene_cast>\n${text}\n</scene_cast>`;
    for (const [prefix, label] of [
        ['03.17a ', 'Location'], ['03.17b ', 'Active Speakers'],
        ['03.17c ', 'Ambient NPCs'], ['03.17d ', 'Observable Facts'], ['03.17e ', 'Sola'],
    ]) {
        const rule = named(prefix);
        const line = `${label}: Authored cast content`;
        const both = cast(line) + '\nNarrative beat.\n' + cast(line) + '\n' + line + '\n<notebook>\n' + line + '\n</notebook>';
        assert.equal([...both.matchAll(compile(rule))].length, 2, `${label} must format both Cast cards without touching narrative or Notebook fields`);
        assert.equal([...(`<details class="sola-drawer sola-card-cast">\n${line}\n</details>\n${line}`).matchAll(compile(rule))].length, 1, `${label} must remain scoped after card wrapping`);
    }
    const whitespace = named('99.02 ');
    assert.equal('<div>\n<span>\n</span>\n</div>'.replace(compile(whitespace), whitespace.replaceString ?? whitespace.replace_string), '<div><span></span></div>', 'Inter-tag cleanup must apply globally');
    const brokenHtml = '>' + ' \n\t'.repeat(70000) + 'not-a-tag';
    assert.equal(brokenHtml.replace(compile(whitespace), whitespace.replaceString ?? whitespace.replace_string), brokenHtml, 'A missing next tag must preserve whitespace without runaway scanning');
}

if (!isMainThread) {
    check(workerData.rules);
    parentPort.postMessage('passed');
} else {
    const exports = ['presets/Sola V3 Flame.json', 'presets/Sola V3 Flame Lumi.json', 'regex/Sola V3 Regex Pack.json'];
    for (const path of exports) {
        const doc = JSON.parse(await readFile(new URL('../' + path, import.meta.url), 'utf8'));
        const rules = Array.isArray(doc) ? doc : doc.extensions.regex_scripts;
        await new Promise((resolve, reject) => {
            const worker = new Worker(new URL(import.meta.url), { workerData: { rules }, resourceLimits: { maxOldGenerationSizeMb: 64 } });
            const timer = setTimeout(() => {
                worker.terminate();
                reject(new Error(`${path}: regex regression exceeded 3s; possible runaway backtracking`));
            }, 3000);
            worker.once('message', () => { clearTimeout(timer); worker.terminate(); resolve(); });
            worker.once('error', error => { clearTimeout(timer); reject(error); });
        });
        console.log(`${path}: Matrix boundaries/streaming, Cast isolation, and global whitespace passed`);
    }
}
