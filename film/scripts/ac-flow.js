import { timeline } from './util.js';
export default {
  id: 'ac-flow', name: 'AC-Flow', kicker: 'AC-FLOW  ·  A PROJECT FILM', badge: ['ARXIV 2025', 'arXiv 2510.18072'], page: '/projects/ac-flow/',
  chapters: timeline([
    { len: 7, shape: 'v:denoise', viz: { mode: 'dense', note: '' }, label: 'ARXIV 2025', title: 'AC-Flow',
      lines: ['Fine-tuning flow matching models', 'with intermediate feedback.'], meta: 'FAN, CHENG, SHEN, ZHOU, LIU  ·  UIUC' },
    { shape: 'v:denoise', viz: { mode: 'outcome' }, tick: 'THE PROBLEM', label: 'THE PROBLEM', title: 'One reward, many steps',
      lines: ['Outcome rewards arrive only at the end of the', 'denoising chain: a credit-assignment problem.'] },
    { shape: 'v:denoise', viz: { mode: 'dense' }, tick: 'ACTOR-CRITIC', label: 'THE METHOD', title: 'An actor and a critic',
      lines: ['A critic estimates future reward at every step;', 'the actor learns from that dense feedback.'] },
    { shape: 'v:clip', viz: {}, tick: 'STABILITY', label: 'STABILITY', title: 'Collapse-free',
      lines: ['Reward shaping, advantage clipping and a critic', 'warm-up, plus Wasserstein regularization.'] },
    { shape: 'v:flow', viz: { to: 'Stable Diffusion 3', reward: 'aligned, other modes kept' }, tick: 'RESULTS', label: 'RESULTS  ·  SD3', title: 'Aligned, still diverse',
      lines: ['State-of-the-art text-to-image alignment on SD3,', 'without losing diversity or stability.'] },
    { len: 7, shape: 'v:denoise', viz: { mode: 'dense', note: '' }, label: 'AC-FLOW', title: 'Credit, step by step',
      lines: ['Feedback at every step of generation,', 'not only at the end.'], meta: 'JIAJUNFAN.COM/PROJECTS/AC-FLOW' },
  ]),
};
