import { timeline } from './util.js';
// Depths follow the paper's layer-by-layer table for the Nixon clip (water/gate/scandal at 8-16%,
// Nixon by ~29-33%, president at 37%, the Chinese 'president' at 61-65%, Nixon again at 86-90%).
// The garbled transcript is quoted from the paper. Layer deletion: entry layer -65 pts, interior <= 10.
export default {
  id: 'read-the-mind', name: 'Read the Mind', kicker: 'READ THE MIND  ·  A PROJECT FILM', badge: ['ARXIV 2026', 'arXiv 2608.24958'], page: '/projects/read-the-mind/',
  chapters: timeline([
    { len: 7, shape: 'v:waveform', viz: { caption: 'the model’s own transcript of this clip:  “The ote — [End of Audio]”' },
      label: 'ARXIV 2026', title: 'Read the Mind',
      lines: ['Can we read the mind of an audio LLM', 'before it speaks?'], meta: 'JIAJUN FAN ET AL.  ·  AMAZON AGI & UIUC' },
    { shape: 'v:layers', viz: {}, tick: 'THE LENS', label: 'THE LENS', title: 'Read every layer',
      lines: ['A logit lens at the audio positions turns each', 'layer into words, before a token is emitted.'] },
    { len: 9, shape: 'v:layers', viz: { band: [0.35, 0.8], bandLabel: 'workspace band', tokens: [
        { text: 'water + gate', d: 0.12, y: 1.02, t: 1.0 }, { text: 'scandal', d: 0.15, y: 0.62, t: 1.6 },
        { text: 'Nixon', d: 0.31, y: 1.02, t: 2.2 }, { text: 'president', d: 0.37, y: 0.62, t: 2.8 },
        { text: '总统', d: 0.63, y: 1.02, t: 3.4 }, { text: 'Nixon', d: 0.88, y: 0.62, t: 4.0 }] },
      tick: 'A HIDDEN CHAIN', label: 'A HIDDEN CHAIN', title: 'Watergate, then Nixon',
      lines: ['Its own transcript is garbled, yet the readout', 'rebuilds Watergate, then names Nixon.'],
      meta: 'READ OVER THE AUDIO, BEFORE ANY TOKEN' },
    { shape: 'v:layers', viz: { band: [0.35, 0.8], bandGold: true, bandLabel: 'workspace band  ·  35–80% depth', tokens: [
        { text: 'president', d: 0.5, y: 1.02, t: 1.2, style: 'name' }, { text: '总统', d: 0.66, y: 0.62, t: 1.7 }] },
      tick: 'THE WORKSPACE', label: 'THE WORKSPACE', title: 'Legible, mid-stack',
      lines: ['Verbalizable, multilingual, paralinguistic', 'and causal: a workspace in the middle layers.'],
      stat: { from: 0, to: 38, suffix: '%', label: 'TOP-1 READOUTS IN CHINESE, ON ENGLISH INPUTS' } },
    { shape: 'v:drop', viz: { big: 65, n: 12, bigLabel: 'entry layer (encoder to text)', restLabel: 'every interior layer' },
      tick: 'LAYER DELETION', label: 'DELETE ONE LAYER', title: 'Where it breaks',
      lines: ['Only the encoder-to-text entry layer is critical;', 'no interior layer costs more than ten points.'] },
    { len: 7, shape: 'v:layers', viz: { band: [0.35, 0.8], bandGold: true }, label: 'READ THE MIND', title: 'Before it speaks',
      lines: ['Monitoring need not wait for the model', 'to speak, or trust it to narrate.'], meta: 'JIAJUNFAN.COM/PROJECTS/READ-THE-MIND' },
  ]),
};
