import { timeline } from './util.js';
// GDI: the sampling distribution of training data is learned; DQN, PER, R2D2 and Agent57 are special cases.
// 22 records, 9,620% mean HNS, 200M frames, 500x more sample-efficient than Agent57 (project page).
export default {
  id: 'gdi', name: 'GDI', kicker: 'GDI  ·  A PROJECT FILM', badge: ['ICML 2022', 'deep RL'], page: '/projects/gdi/',
  chapters: timeline([
    { len: 7, shape: 'v:replay', viz: { phases: [{ at: 0, mode: 'learned', label: '' }] }, label: 'ICML 2022', title: 'GDI',
      lines: ['Generalized data distribution iteration:', 'the training data is the lever.'], meta: 'JIAJUN FAN, CHANGNAN XIAO' },
    { len: 9, shape: 'v:replay', viz: { phases: [
        { at: 0, mode: 'uniform', label: 'DQN: sample uniformly' }, { at: 2.8, mode: 'prior', label: 'PER: sample by priority' },
        { at: 5.4, mode: 'learned', label: 'GDI: learn the distribution' }] },
      tick: 'THE INSIGHT', label: 'THE INSIGHT', title: 'Optimize the data',
      lines: ['Which data to learn from becomes a learned', 'operator, optimized with the value function.'] },
    { shape: 'v:hub', viz: { layout: 'ring', dir: 'out', center: 'GDI', centerNote: 'one data-distribution operator', nodes: [
        { label: 'DQN', note: 'uniform replay' }, { label: 'PER', note: 'prioritized replay' }, { label: 'R2D2', note: 'recurrent replay' }, { label: 'Agent57', note: 'meta-controller' }] },
      tick: 'UNIFIED', label: 'ONE FRAMEWORK', title: 'Special cases',
      lines: ['From DQN to Agent57, well-known methods are', 'special cases of one operator.'] },
    { shape: 'v:volume', viz: { a: { label: 'Agent57', sub: 'reference', v: 500 }, b: { label: 'GDI', sub: '200M frames', v: 1 } },
      tick: 'RESULTS', label: 'RESULTS  ·  ATARI', title: '500× less data',
      lines: ['22 human world records and a 9,620% mean', 'human-normalized score, in 200M frames.'] },
    { shape: 'v:hub', viz: { layout: 'right', dir: 'out', center: 'GDI  ·  2022', nodes: [{ label: 'LBC', note: 'ICLR 2023 Oral', hi: true }, { label: 'ORW-CFM-W2', note: 'ICLR 2025', hi: true }] },
      tick: 'LEGACY', label: 'WHAT FOLLOWED', title: 'An idea that travelled',
      lines: ['It led to behavior control in LBC, and to', 'distribution optimization for generative models.'] },
    { len: 7, shape: 'v:replay', viz: { phases: [{ at: 0, mode: 'learned', label: '' }], buffer: '', learner: '' }, label: 'GDI', title: 'The data is the lever',
      lines: ['Choose what to learn from,', 'and learn far more from less.'], meta: 'JIAJUNFAN.COM/PROJECTS/GDI' },
  ]),
};
