import { timeline } from './util.js';
// The alpha study from the paper: alpha = 0 pure reward and collapse, 0.3 balanced (recommended), 0.8 high diversity.
export default {
  id: 'orw-cfm-w2', name: 'ORW-CFM-W2', kicker: 'ORW-CFM-W2  ·  A PROJECT FILM', badge: ['ICLR 2025', 'flow matching'], page: '/projects/orw-cfm-w2/',
  chapters: timeline([
    { len: 7, shape: 'v:flow', viz: { from: 'noise', to: 'samples' }, label: 'ICLR 2025', title: 'ORW-CFM-W2',
      lines: ['Online reward-weighted fine-tuning of flow', 'matching, with Wasserstein regularization.'], meta: 'FAN, SHEN, CHENG, CHEN, LIANG, LIU  ·  UIUC' },
    { shape: 'v:alpha', viz: { panels: [{ label: 'reward-weighting alone', note: 'collapses onto one mode', mode: 'collapse' }] },
      tick: 'THE PROBLEM', label: 'THE PROBLEM', title: 'Hard to fine-tune',
      lines: ['No likelihood to regularize with, collapse under', 'reward pressure, and a need for human data.'] },
    { shape: 'v:flow', viz: { from: 'its own samples', reward: 'more reward, more weight' }, tick: 'ONLINE', label: 'THE METHOD', title: 'Reward-weighted, online',
      lines: ['The model trains on its own samples, weighted', 'by reward: no reward gradients, no filtered data.'] },
    { len: 9, shape: 'v:alpha', viz: { panels: [
        { label: 'α = 0', note: 'pure reward: collapse', mode: 'collapse' },
        { label: 'α = 0.3', note: 'balanced (recommended)', mode: 'balanced', gold: true },
        { label: 'α = 0.8', note: 'high diversity', mode: 'diverse' }] },
      tick: 'THE W2 KNOB', label: 'NO COLLAPSE', title: 'A knob for diversity',
      lines: ['A tractable Wasserstein-2 bound gives a smooth', 'reward-diversity trade-off, set by α.'] },
    { shape: 'v:flow', viz: { to: 'Stable Diffusion 3', reward: 'aligned to the reward' }, tick: 'RESULTS', label: 'RESULTS  ·  SD3', title: 'Zero human data',
      lines: ['Fine-tunes Stable Diffusion 3 and improves', 'spatial and compositional understanding.'],
      stat: { text: '0', label: 'HUMAN-COLLECTED DATA REQUIRED' } },
    { len: 7, shape: 'v:flow', viz: {}, label: 'ORW-CFM-W2', title: 'RL for flow matching',
      lines: ['Aligned to the reward,', 'and still diverse.'], meta: 'JIAJUNFAN.COM/PROJECTS/ORW-CFM-W2' },
  ]),
};
