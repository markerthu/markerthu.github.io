import { timeline } from './util.js';
export default {
  id: 'proteinzero', name: 'ProteinZero', kicker: 'PROTEINZERO  ·  A PROJECT FILM', badge: ['TMLR 2026', 'open source'], page: '/projects/proteinzero/',
  chapters: timeline([
    { len: 7, shape: 'helix', label: 'TMLR 2026', title: 'ProteinZero',
      lines: ['Self-improving protein generation', 'via online reinforcement learning.'], meta: 'WANG, FAN, GUO, NGUYEN, JI, LIU  ·  UIUC' },
    { shape: 'collapse', tick: 'THE PROBLEM', label: 'THE PROBLEM', title: 'Copying is not designing',
      lines: ['Inverse folding learns to copy curated data,', 'not to design sequences that fold and stay stable.'] },
    { shape: 'pipeline', tick: 'THE LOOP', label: 'THE LOOP', title: 'Its own designs',
      lines: ['Sample, score with ESMFold and a fast ddG proxy,', 'stay diverse, update, and go again.'],
      meta: 'A FULL RUN: ONE 8-GPU NODE, ABOUT THREE DAYS' },
    { shape: 'diverse', tick: 'NO COLLAPSE', label: 'NO COLLAPSE', title: 'Diverse, not narrow',
      lines: ['An embedding-level diversity term keeps designs', 'apart, where preference tuning collapses.'] },
    { shape: 'bars', tick: 'RESULTS', label: 'RESULTS  ·  CATH-4.3', title: 'Designs that fold',
      lines: ['Held-out backbones, both length ranges; 36–48%', 'fewer design failures than prior models.'],
      stat: { from: 0, to: 90.1, decimals: 1, suffix: '%', label: 'SUCCESS RATE, 0–150 RESIDUES' }, meta: 'ALL EVALUATION IS COMPUTATIONAL' },
    { len: 7, shape: 'helix', label: 'PROTEINZERO', title: 'Open source',
      lines: ['Ready to use as a tool in your own agent', 'or design pipeline.'], meta: 'GITHUB.COM/ZIWENWANG28/PROTEINZERO' },
  ]),
};
