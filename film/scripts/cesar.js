import { timeline } from './util.js';
export default {
  id: 'cesar', name: 'CESAR', kicker: 'CESAR  ·  A PROJECT FILM', badge: ['ICLR 2026', 'audio reasoning'], page: '/projects/cesar/',
  chapters: timeline([
    { len: 7, shape: 'waveform', label: 'ICLR 2026', title: 'CESAR',
      lines: ['Consistent, effective and scalable', 'reasoning for audio LLMs.'], meta: 'JIAJUN FAN ET AL.  ·  UIUC & AMAZON' },
    { shape: 'collapse', tick: 'THE PROBLEM', label: 'THE PROBLEM', title: 'Thinking longer, worse',
      lines: ['With outcome-only rewards, longer reasoning makes', 'audio LLMs worse: test-time inverse scaling.'],
      stat: { text: '−0.51', label: 'BASE MODEL: ACCURACY SLOPE VS. REASONING' } },
    { shape: 'chain', tick: 'THE IDEA', label: 'THE IDEA', title: 'Reward the reasoning',
      lines: ['Process rewards for consistency, structure and', 'depth, not just the answer. Online RL with GRPO.'] },
    { shape: 'bars', tick: 'RESULTS', label: 'RESULTS  ·  MMAU', title: 'State of the art',
      lines: ['Best on MMAU test-mini, ahead of', 'Gemini 2.5 Pro and GPT-4o Audio.'],
      stat: { before: '65.2% → ', from: 65.2, to: 77.1, decimals: 1, suffix: '%', label: 'MMAU, BASE MODEL → CESAR' } },
    { shape: 'galaxy', tick: 'SCALING', label: 'TEST-TIME SCALING', title: 'Thinking that helps',
      lines: ['The scaling slope turns positive: reasoning', 'becomes a capability, not a liability.'],
      stat: { text: '+0.038', label: 'CESAR: ACCURACY SLOPE VS. REASONING' } },
    { len: 7, shape: 'ring', label: 'CESAR', title: 'Reasoning, rewarded',
      lines: ['Supervise the process,', 'and more thinking pays off.'], meta: 'JIAJUNFAN.COM/PROJECTS/CESAR' },
  ]),
};
