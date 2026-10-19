import { timeline } from './util.js';
export default {
  id: 'speechgym', name: 'SpeechGym', kicker: 'SPEECHGYM  ·  A PROJECT FILM', badge: ['ARXIV 2026', 'arXiv 2608.26432'], page: '/projects/speechgym/',
  chapters: timeline([
    { len: 7, shape: 'waveform', label: 'ARXIV 2026', title: 'SpeechGym',
      lines: ['An audio-native gym for training voice agents', 'with reinforcement learning.'], meta: 'JIAJUN FAN ET AL.  ·  UIUC & AMAZON' },
    { shape: 'sphere', tick: 'THE PROBLEM', label: 'THE PROBLEM', title: 'Measured, never trained',
      lines: ['Benchmarks score a closed realtime API: no gradient', 'crosses the boundary, and every call costs money.'] },
    { shape: 'dialog', tick: 'THE GYM', label: 'THE GYM', title: 'Both sides, in speech',
      lines: ['A frozen open omni-model plays the caller;', 'the same architecture, trainable, is the agent.'],
      stat: { from: 1, to: 5.4, decimals: 1, suffix: '×', label: 'FASTER PER EPOCH, AT ZERO API COST' } },
    { shape: 'chain', tick: 'PER-TURN REWARD', label: 'THE REWARD', title: 'Every turn counts',
      lines: ['When every rollout fails, outcome-only GRPO learns', 'nothing. Scoring each turn keeps the signal.'],
      stat: { before: '16% → ', from: 16, to: 99.6, decimals: 1, suffix: '%', label: 'ROLLOUT GROUPS WITH A GRADIENT' } },
    { shape: 'bars', tick: 'TRANSFER', label: 'IT TRANSFERS', title: 'Out of the gym',
      lines: ['Run unchanged in τ-Voice, an independent benchmark:', 'better in every domain, with fewer turns.'],
      stat: { before: '24% → ', from: 24, to: 53, suffix: '%', label: 'TASK SUCCESS ON τ-VOICE' } },
    { len: 7, shape: 'ring', label: 'SPEECHGYM', title: 'Voice agents, trained',
      lines: ['Both sides of the call are open models,', 'so the agent can finally learn.'], meta: 'JIAJUNFAN.COM/PROJECTS/SPEECHGYM' },
  ]),
};
