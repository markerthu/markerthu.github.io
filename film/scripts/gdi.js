import { timeline } from './util.js';
export default {
  id: 'gdi', name: 'GDI', kicker: 'GDI  ·  A PROJECT FILM', badge: ['ICML 2022', 'deep RL'], page: '/projects/gdi/',
  chapters: timeline([
    { len: 7, shape: 'galaxy', label: 'ICML 2022', title: 'GDI',
      lines: ['Generalized data distribution iteration:', 'the training data is the lever.'], meta: 'JIAJUN FAN, CHANGNAN XIAO' },
    { shape: 'collapse', tick: 'TWO PROBLEMS', label: 'TWO OLD PROBLEMS', title: 'Efficient and strong',
      lines: ['Sample efficiency and final performance,', 'usually traded against each other.'] },
    { shape: 'chain', tick: 'THE INSIGHT', label: 'THE INSIGHT', title: 'Optimize the data',
      lines: ['Cast both into training-data distribution', 'optimization: DQN to Agent57 as special cases.'] },
    { shape: 'invader', tick: 'RECORDS', label: 'RESULTS  ·  ATARI', title: '500× less data',
      lines: ['22 human world records and a 9,620% mean', 'human-normalized score, in 200M frames.'],
      stat: { from: 1, to: 500, suffix: '×', label: 'MORE SAMPLE-EFFICIENT THAN AGENT57' } },
    { shape: 'bars', tick: 'LEGACY', label: 'WHAT FOLLOWED', title: 'An idea that travelled',
      lines: ['It led to LBC, and to distribution optimization', 'for generative models in ORW-CFM-W2.'] },
    { len: 7, shape: 'galaxy', label: 'GDI', title: 'The data is the lever',
      lines: ['Choose what to learn from,', 'and learn far more from less.'], meta: 'JIAJUNFAN.COM/PROJECTS/GDI' },
  ]),
};
