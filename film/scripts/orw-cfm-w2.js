import { timeline } from './util.js';
export default {
  id: 'orw-cfm-w2', name: 'ORW-CFM-W2', kicker: 'ORW-CFM-W2  ·  A PROJECT FILM', badge: ['ICLR 2025', 'flow matching'], page: '/projects/orw-cfm-w2/',
  chapters: timeline([
    { len: 7, shape: 'flow', label: 'ICLR 2025', title: 'ORW-CFM-W2',
      lines: ['Online reward-weighted fine-tuning of flow', 'matching, with Wasserstein regularization.'], meta: 'FAN, SHEN, CHENG, CHEN, LIANG, LIU  ·  UIUC' },
    { shape: 'collapse', tick: 'THE PROBLEM', label: 'THE PROBLEM', title: 'Hard to fine-tune',
      lines: ['Flow matching has no likelihood, collapses under', 'reward pressure, and usually needs human data.'] },
    { shape: 'galaxy', tick: 'ONLINE', label: 'THE METHOD', title: 'Reward-weighted, online',
      lines: ['The model learns from its own samples, weighted', 'by reward: no reward gradients, no filtered data.'] },
    { shape: 'diverse', tick: 'NO COLLAPSE', label: 'NO COLLAPSE', title: 'A knob for diversity',
      lines: ['A tractable Wasserstein-2 bound keeps the policy near', 'the base: a smooth reward-diversity trade-off.'] },
    { shape: 'bars', tick: 'RESULTS', label: 'RESULTS  ·  STABLE DIFFUSION 3', title: 'Zero human data',
      lines: ['Fine-tunes Stable Diffusion 3 and improves', 'spatial and compositional understanding.'],
      stat: { text: '0', label: 'HUMAN-COLLECTED DATA REQUIRED' } },
    { len: 7, shape: 'flow', label: 'ORW-CFM-W2', title: 'RL for flow matching',
      lines: ['Aligned to the reward,', 'and still diverse.'], meta: 'JIAJUNFAN.COM/PROJECTS/ORW-CFM-W2' },
  ]),
};
