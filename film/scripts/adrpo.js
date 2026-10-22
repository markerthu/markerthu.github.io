import { timeline } from './util.js';
// Reward-diversity points read off the paper's SD3 figure: ADRPO (5.18, 32.6), DPO (4.82, 31.1),
// ORW-CFM-W2 (3.94, 31.3), pre-trained SD3 (5.11, 29.2). Qwen2 reward curves sampled from its LLM figure.
const grpo = [[0, 0.52], [8, 0.69], [17, 0.68], [25, 0.66], [34, 0.61], [42, 0.32], [50, 0.37], [58, 0.41], [66, 0.36], [75, 0.55], [83, 0.69], [92, 0.58], [100, 0.6]];
const ours = [[0, 0.35], [8, 0.36], [17, 0.43], [25, 0.67], [34, 1.11], [42, 1.6], [50, 1.83], [58, 1.83], [66, 1.76], [75, 1.66], [83, 1.92], [92, 1.9], [100, 1.88]];
export default {
  id: 'adrpo', name: 'ADRPO', kicker: 'ADRPO  ·  A PROJECT FILM', badge: ['NEURIPS 2025', 'generative models'], page: '/projects/adrpo/',
  chapters: timeline([
    { len: 7, shape: 'v:leash', viz: { formula: '', hi: '', lo: '', ref: '' }, label: 'NEURIPS 2025', title: 'ADRPO',
      lines: ['Adaptive divergence regularization', 'for fine-tuning generative models.'], meta: 'FAN, WEI, CHENG, CHEN, LIU  ·  UIUC' },
    { shape: 'v:alpha', viz: { panels: [{ label: 'strong regularization', note: 'stays near the base model', mode: 'stuck' }, { label: 'weak regularization', note: 'collapses onto one mode', mode: 'collapse' }] },
      tick: 'THE DILEMMA', label: 'THE DILEMMA', title: 'One knob, two failures',
      lines: ['A fixed strength either holds the model back', 'or lets reward-hacking collapse it.'] },
    { shape: 'v:leash', viz: { formula: 'β = β₀ − A' }, tick: 'THE IDEA', label: 'THE IDEA', title: 'Let the advantage decide',
      lines: ['Each sample gets its own strength, set by its', 'advantage: no extra networks, no schedule.'] },
    { len: 9, shape: 'v:scatter', viz: { x: [3.6, 5.6], y: [28.8, 33.0], xlabel: 'diversity →', ylabel: 'reward', points: [
        { label: 'pre-trained SD3', x: 5.11, y: 29.2, dx: -30, align: 'right' }, { label: 'ORW-CFM-W2', x: 3.94, y: 31.3 },
        { label: 'DPO', x: 4.82, y: 31.1, dx: -30, align: 'right' }, { label: 'ADRPO (ours)', x: 5.18, y: 32.6, ours: true, dx: -34, align: 'right' }] },
      tick: 'RESULTS', label: 'RESULTS  ·  SD3', title: 'Top right',
      lines: ['The highest reward and the highest diversity;', 'a 2B SD3 surpassing 4.8B and 12B models.'] },
    { len: 9, shape: 'v:lines', viz: { x: [0, 100], y: [0.2, 2.1], xlabel: 'training progress →', ylabel: 'reward (Qwen2)', stagger: 0.3, series: [
        { label: 'GRPO, fixed β', pts: grpo }, { label: 'ADRPO: about 3× the reward', pts: ours, ours: true }] },
      tick: 'LLMS', label: 'ACROSS MODALITIES', title: 'Out of a local optimum',
      lines: ['On Qwen2, the adaptive strength re-opens', 'exploration whenever the model stalls.'] },
    { len: 7, shape: 'v:leash', viz: { formula: '', hi: '', lo: '', ref: '' }, label: 'ADRPO', title: 'Regularize adaptively',
      lines: ['Explore where it pays,', 'hold back where it does not.'], meta: 'JIAJUNFAN.COM/PROJECTS/ADRPO' },
  ]),
};
