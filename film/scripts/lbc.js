import { timeline } from './util.js';
export default {
  id: 'lbc', name: 'LBC', kicker: 'LBC  ·  A PROJECT FILM', badge: ['ICLR 2023  ·  ORAL', 'deep RL'], page: '/projects/lbc/',
  chapters: timeline([
    { len: 7, shape: 'invader', label: 'ICLR 2023  ·  ORAL', title: 'LBC',
      lines: ['Learnable behavior control:', 'breaking Atari human world records.'], meta: 'JIAJUN FAN ET AL.' },
    { shape: 'diverse', tick: 'THE LIMIT', label: 'THE LIMIT', title: 'A fixed population',
      lines: ['Population-based RL explores with a fixed,', 'predefined set of policies, and is capped by it.'] },
    { shape: 'galaxy', tick: 'THE IDEA', label: 'THE IDEA', title: 'Blend every behavior',
      lines: ['A learnable mapping over all policies, and a', 'bandit meta-controller that picks per episode.'] },
    { shape: 'invader', tick: 'RECORDS', label: 'RESULTS  ·  ATARI', title: 'Superhuman',
      lines: ['Human world records within 1 billion frames,', 'with 78× less data than Agent57.'],
      stat: { from: 0, to: 24, label: 'ATARI HUMAN WORLD RECORDS' } },
    { shape: 'bars', tick: 'SCORE', label: 'RESULTS  ·  ATARI', title: 'Far above human',
      lines: ['Mean human-normalized score', 'across the Atari benchmark.'],
      stat: { from: 0, to: 10077, suffix: '%', label: 'MEAN HUMAN-NORMALIZED SCORE' } },
    { len: 7, shape: 'invader', label: 'LBC', title: 'Behavior, learned',
      lines: ['Exploration that chooses', 'its own behavior.'], meta: 'JIAJUNFAN.COM/PROJECTS/LBC' },
  ]),
};
