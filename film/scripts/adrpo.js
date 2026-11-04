import { timeline } from './util.js';
// Reward-diversity points read off the paper's SD3 figure: ADRPO (5.18, 32.6), DPO (4.82, 31.1),
// ORW-CFM-W2 (3.94, 31.3), pre-trained SD3 (5.11, 29.2). Qwen2 reward curves: paper Fig. 8 (Qwen2-0.5B), 8%-window means;
// both runs start at the pre-trained 0.511, GRPO ends at 0.453 and ADRPO at 1.580 (about 3.5x).
const grpo = [[0, 0.51], [8, 0.23], [17, 0.7], [25, 0.6], [34, 0.68], [42, 0.59], [50, 0.69], [58, 0.78], [66, 0.75], [75, 0.53], [83, 0.4], [92, 0.51], [100, 0.45]];
const ours = [[0, 0.51], [8, 0.36], [17, 0.45], [25, 0.59], [34, 0.69], [42, 1.44], [50, 1.85], [58, 1.8], [66, 1.84], [75, 1.48], [83, 1.4], [92, 1.59], [100, 1.58]];
export default {
  id: 'adrpo', name: 'ADRPO', kicker: 'ADRPO  ·  A PROJECT FILM', badge: ['NEURIPS 2025', 'generative models'], page: '/projects/adrpo/',
  chapters: timeline([
    { len: 7, shape: 'v:leash', viz: { formula: '', hi: '', lo: '', ref: '' }, label: 'NEURIPS 2025', title: 'ADRPO',
      lines: ['Adaptive divergence regularization', 'for fine-tuning generative models.'], meta: 'FAN, WEI, CHENG, CHEN, LIU  ·  UIUC' },
    { shape: 'v:alpha', viz: { panels: [{ label: 'strong regularization', note: 'stays near the base model', mode: 'stuck' }, { label: 'weak regularization', note: 'collapses onto one mode', mode: 'collapse' }] },
      tick: 'THE DILEMMA', label: 'THE DILEMMA', title: 'One knob, two failures',
      lines: ['A fixed strength either holds the model back', 'or lets reward-hacking collapse it.'] },
    { shape: 'v:leash', viz: { formula: 'β = β₀ − A', hi: 'high advantage: exploited' }, tick: 'THE IDEA', label: 'THE IDEA', title: 'Let the advantage decide',
      lines: ['Each sample gets its own strength, set by its', 'advantage: no extra networks, no schedule.'] },
    { len: 9, shape: 'v:scatter', viz: { x: [3.6, 5.6], y: [28.8, 33.0], xlabel: 'diversity →', ylabel: 'reward', points: [
        { label: 'pre-trained SD3', x: 5.11, y: 29.2, dx: -30, align: 'right' }, { label: 'ORW-CFM-W2', x: 3.94, y: 31.3 },
        { label: 'DPO', x: 4.82, y: 31.1, dx: -30, align: 'right' }, { label: 'ADRPO (ours)', x: 5.18, y: 32.6, ours: true, dx: -34, align: 'right' }] },
      tick: 'RESULTS', label: 'RESULTS  ·  SD3', title: 'Top right',
      lines: ['The highest reward and the highest diversity;', 'a 2B SD3 surpassing 4.8B and 12B models.'] },
    { len: 9, shape: 'v:lines', viz: { x: [0, 100], y: [0.2, 2.1], xlabel: 'training progress →', ylabel: 'reward (Qwen2)', stagger: 0.3, series: [
        { label: 'GRPO, fixed β', pts: grpo }, { label: 'ADRPO: about 3.5× the final reward', pts: ours, ours: true }] },
      tick: 'LLMS', label: 'ACROSS MODALITIES', title: 'Climbing where GRPO stalls',
      lines: ['On Qwen2, GRPO never gets far from the base model;', 'ADRPO ends with about 3.5× its reward.'] },
    { len: 7, shape: 'v:leash', viz: { formula: '', hi: '', lo: '', ref: '' }, label: 'ADRPO', title: 'Regularize adaptively',
      lines: ['Push where it pays,', 'hold back where it does not.'], meta: 'JIAJUNFAN.COM/PROJECTS/ADRPO' },
  ]),
};
