import { timeline } from './util.js';
// GDI: an operator optimizes the selective distribution over behavior policies, i.e. which behaviors generate
// the training data. Sec. 4.5 casts DQN, PBT, R2D2 and Agent57 (among others) as special cases; PER is not one.
// 22 records, 9,620% mean HNS, 200M frames, 500x more sample-efficient than Agent57 (project page).
export default {
  id: 'gdi', name: 'GDI', kicker: 'GDI  ·  A PROJECT FILM', badge: ['ICML 2022', 'deep RL'], page: '/projects/gdi/',
  chapters: timeline([
    { len: 7, shape: 'v:replay', viz: { phases: [{ at: 0, mode: 'learned', label: '' }], buffer: 'behavior policies' }, label: 'ICML 2022', title: 'GDI',
      lines: ['Generalized data distribution iteration:', 'the training data is the lever.'], meta: 'JIAJUN FAN, CHANGNAN XIAO' },
    { len: 9, shape: 'v:replay', viz: { phases: [
        { at: 0, mode: 'uniform', label: 'R2D2: behaviors drawn uniformly' },
        { at: 5.4, mode: 'learned', label: 'GDI: learn the distribution' }], buffer: 'behavior policies' },
      tick: 'THE INSIGHT', label: 'THE INSIGHT', title: 'Optimize the data',
      lines: ['An operator optimizes which behavior policies', 'generate the data, inside policy iteration.'] },
    { shape: 'v:hub', viz: { layout: 'ring', dir: 'out', center: 'GDI', centerNote: 'one general framework', nodes: [
        { label: 'DQN', note: 'one behavior policy' }, { label: 'PBT', note: 'searched hyperparameters' }, { label: 'R2D2', note: 'uniform over 256 actors' }, { label: 'Agent57', note: 'meta-controller' }] },
      tick: 'UNIFIED', label: 'ONE FRAMEWORK', title: 'Special cases',
      lines: ['From DQN to Agent57, well-known methods are', 'special cases of one framework.'] },
    { shape: 'v:volume', viz: { a: { label: 'Agent57', sub: 'reference', v: 500 }, b: { label: 'GDI', sub: '200M frames', v: 1 } },
      tick: 'RESULTS', label: 'RESULTS  ·  ATARI', title: '500× less data',
      lines: ['22 human world records and a 9,620% mean', 'human-normalized score, in 200M frames.'] },
    { shape: 'v:hub', viz: { layout: 'right', dir: 'out', center: 'GDI  ·  2022', nodes: [{ label: 'LBC', note: 'ICLR 2023 Oral', hi: true }, { label: 'ORW-CFM-W2', note: 'ICLR 2025', hi: true }] },
      tick: 'LEGACY', label: 'WHAT FOLLOWED', title: 'An idea that travelled',
      lines: ['It led to behavior control in LBC, and to', 'distribution optimization for generative models.'] },
    { len: 7, shape: 'v:replay', viz: { phases: [{ at: 0, mode: 'learned', label: '' }], buffer: 'behavior policies', learner: '' }, label: 'GDI', title: 'The data is the lever',
      lines: ['Choose which behaviors generate the data,', 'and learn far more from less.'], meta: 'JIAJUNFAN.COM/PROJECTS/GDI' },
  ]),
};
