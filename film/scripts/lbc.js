import { timeline } from './util.js';
// LBC: blends a population of policies into a learnable behavior space, picked per episode by a bandit.
// 24 Atari human world records in 1B frames; Agent57 used 100B (both from the LBC paper's tables).
export default {
  id: 'lbc', name: 'LBC', kicker: 'LBC  ·  A PROJECT FILM', badge: ['ICLR 2023  ·  ORAL', 'deep RL'], page: '/projects/lbc/',
  chapters: timeline([
    { len: 7, shape: 'invader', label: 'ICLR 2023  ·  ORAL', title: 'LBC',
      lines: ['Learnable behavior control:', 'breaking Atari human world records.'], meta: 'JIAJUN FAN ET AL.' },
    { shape: 'v:simplex', viz: { fill: 0, vertexLabel: 'a fixed population of policies' }, tick: 'THE LIMIT', label: 'THE LIMIT', title: 'A fixed population',
      lines: ['Population-based RL explores with a fixed,', 'predefined set of policies, and is capped by it.'] },
    { len: 9, shape: 'v:simplex', viz: { fill: 1, cursor: true, vertexLabel: 'base policies', fillLabel: 'a learnable space of hybrid behaviors', cursorLabel: 'bandit pick, this episode' },
      tick: 'THE IDEA', label: 'THE IDEA', title: 'Blend every behavior',
      lines: ['A learnable mapping over all policies, and a', 'bandit meta-controller that picks per episode.'] },
    { shape: 'v:records', viz: { n: 24, cols: 8 }, tick: 'RECORDS', label: 'RESULTS  ·  ATARI', title: 'Superhuman',
      lines: ['Human world records within 1 billion frames,', 'and a 10,077% mean human-normalized score.'],
      stat: { from: 0, to: 24, label: 'ATARI HUMAN WORLD RECORDS' } },
    { shape: 'v:volume', viz: { a: { label: 'Agent57', sub: '100 billion frames', v: 100 }, b: { label: 'LBC', sub: '1 billion frames', v: 1 } },
      tick: 'EFFICIENCY', label: 'RESULTS  ·  DATA', title: '100× less data',
      lines: ['Agent57 broke none of these records', 'with 78 times the experience.'] },
    { len: 7, shape: 'invader', label: 'LBC', title: 'Behavior, learned',
      lines: ['Exploration that chooses', 'its own behavior.'], meta: 'JIAJUNFAN.COM/PROJECTS/LBC' },
  ]),
};
