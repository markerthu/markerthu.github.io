import { timeline } from './util.js';
export default {
  id: 'adrpo', name: 'ADRPO', kicker: 'ADRPO  ·  A PROJECT FILM', badge: ['NEURIPS 2025', 'generative models'], page: '/projects/adrpo/',
  chapters: timeline([
    { len: 7, shape: 'flow', label: 'NEURIPS 2025', title: 'ADRPO',
      lines: ['Adaptive divergence regularization', 'for fine-tuning generative models.'], meta: 'FAN, WEI, CHENG, CHEN, LIU  ·  UIUC' },
    { shape: 'collapse', tick: 'THE DILEMMA', label: 'THE DILEMMA', title: 'One knob, two failures',
      lines: ['Strong regularization keeps diversity but stalls;', 'weak regularization aligns, then collapses.'] },
    { shape: 'galaxy', tick: 'THE IDEA', label: 'THE IDEA', title: 'Let the advantage decide',
      lines: ['Regularization strength β₀ − A: good samples explore,', 'poor samples stay on a short leash.'],
      meta: 'ONE LINE OF MATH  ·  NO EXTRA NETWORKS' },
    { shape: 'bars', tick: 'RESULTS', label: 'RESULTS  ·  SD3', title: 'Small model, top reward',
      lines: ['A 2B SD3 matches or beats FLUX.1-Dev (12B) and', 'SANA-1.5 (4.8B), with the highest diversity.'],
      stat: { from: 0, to: 32.6, decimals: 1, label: 'REWARD, HIGHEST OF ALL METHODS' } },
    { shape: 'diverse', tick: 'EVERYWHERE', label: 'ACROSS MODALITIES', title: 'One plug-in',
      lines: ['Flow matching with W2, LLMs with KL, audio too;', 'in LLMs it escapes a local optimum GRPO stays in.'],
      stat: { text: '≈3×', label: 'THE REWARD OF GRPO ON QWEN2' } },
    { len: 7, shape: 'flow', label: 'ADRPO', title: 'Regularize adaptively',
      lines: ['Explore where it pays,', 'hold back where it does not.'], meta: 'JIAJUNFAN.COM/PROJECTS/ADRPO' },
  ]),
};
