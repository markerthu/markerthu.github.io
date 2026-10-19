import { timeline } from './util.js';
export default {
  id: 'read-the-mind', name: 'Read the Mind', kicker: 'READ THE MIND  ·  A PROJECT FILM', badge: ['ARXIV 2026', 'arXiv 2608.24958'], page: '/projects/read-the-mind/',
  chapters: timeline([
    { len: 7, shape: 'waveform', label: 'ARXIV 2026', title: 'Read the Mind',
      lines: ['Can we read the mind of an audio LLM', 'before it speaks?'], meta: 'JIAJUN FAN ET AL.  ·  AMAZON AGI & UIUC' },
    { shape: 'sphere', tick: 'THE QUESTION', label: 'THE QUESTION', title: 'A black box that listens',
      lines: ['We see what an audio LLM says,', 'never what it worked out on the way.'] },
    { shape: 'layers', tick: 'THE LENS', label: 'THE LENS', title: 'Read every layer',
      lines: ['A logit lens at the audio positions turns each', 'layer into words, before a token is emitted.'] },
    { shape: 'chain', tick: 'A HIDDEN CHAIN', label: 'A HIDDEN CHAIN', title: 'Watergate, then Nixon',
      lines: ['Its own transcript of the clip is garbled, yet the', 'readout passes through scandal and president.'],
      meta: 'NO CHAIN OF THOUGHT WAS WRITTEN DOWN' },
    { shape: 'diverse', tick: 'THE WORKSPACE', label: 'THE WORKSPACE', title: 'A multilingual workspace',
      lines: ['The answer is legible in the middle layers,', 'often in another language.'],
      stat: { from: 0, to: 38, suffix: '%', label: 'TOP-1 READOUTS IN CHINESE, ON ENGLISH INPUTS' } },
    { len: 7, shape: 'ring', label: 'READ THE MIND', title: 'Legible, mid-stack',
      lines: ['Monitoring need not wait for the model', 'to speak, or trust it to narrate.'], meta: 'JIAJUNFAN.COM/PROJECTS/READ-THE-MIND' },
  ]),
};
