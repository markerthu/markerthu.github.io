import { timeline } from './util.js';
// Fitted scaling slopes from the paper: Qwen2.5-Omni-7B -0.510, Ke-Omni-R -0.007, CESAR +0.038
// (lines drawn with those slopes, schematic levels). MMAU totals: 65.2 / 74.6 / 76.5 / 77.1.
const slope = (y0, m) => [[0, y0], [1, y0 + m]];
export default {
  id: 'cesar', name: 'CESAR', kicker: 'CESAR  ·  A PROJECT FILM', badge: ['ICLR 2026', 'audio reasoning'], page: '/projects/cesar/',
  chapters: timeline([
    { len: 7, shape: 'v:waveform', viz: {}, label: 'ICLR 2026', title: 'CESAR',
      lines: ['Consistent, effective and scalable', 'reasoning for audio LLMs.'], meta: 'JIAJUN FAN ET AL.  ·  UIUC & AMAZON' },
    { shape: 'v:lines', viz: { x: [0, 1], y: [0, 1], xlabel: 'longer reasoning →', ylabel: 'accuracy',
        series: [{ label: 'base model: slope −0.51', pts: [[0, 0.88], [0.25, 0.74], [0.5, 0.58], [0.75, 0.42], [1, 0.24]] }] },
      tick: 'THE PROBLEM', label: 'THE PROBLEM', title: 'Thinking longer, worse',
      lines: ['With outcome-only rewards, more reasoning makes', 'audio LLMs worse: test-time inverse scaling.'],
      meta: 'SCHEMATIC  ·  SLOPE FITTED IN THE PAPER' },
    { shape: 'v:chain', viz: { gold: true, steps: [
        { text: 'question ↔ reasoning' }, { text: 'analytical structure' }, { text: 'calibrated depth' }, { text: 'reasoning ↔ answer' }, { text: 'correct answer' }] },
      tick: 'THE IDEA', label: 'THE IDEA', title: 'Reward the reasoning',
      lines: ['Process rewards for consistency, structure and', 'depth, not just the answer. Online RL with GRPO.'] },
    { len: 9, shape: 'v:lollipop', viz: { domain: [60, 80], unit: '%', caption: 'MMAU test-mini, total accuracy.', rows: [
        { label: 'CESAR (ours)', v: 77.1, ours: true }, { label: 'CESAR without the overthinking penalty', v: 76.5 },
        { label: 'Ke-Omni-R (outcome-only RL)', v: 74.6 }, { label: 'Qwen2.5-Omni-7B (base)', v: 65.2 }] },
      tick: 'RESULTS', label: 'RESULTS  ·  MMAU', title: 'State of the art',
      lines: ['Best on MMAU test-mini, ahead of Gemini 2.5 Pro', 'and GPT-4o Audio.'] },
    { len: 9, shape: 'v:lines', viz: { x: [0, 1], y: [0, 1], xlabel: 'longer reasoning →', ylabel: 'accuracy', stagger: 0.7, series: [
        { label: 'base: −0.510', pts: [[0, 0.72], [1, 0.21]] },
        { label: 'outcome-only RL: −0.007', pts: slope(0.77, -0.007), dy: 14 },
        { label: 'CESAR: +0.038', pts: slope(0.84, 0.038), ours: true, dy: -14 }] },
      tick: 'SCALING', label: 'TEST-TIME SCALING', title: 'Thinking that helps',
      lines: ['Only CESAR has a positive scaling slope:', 'more reasoning now means better answers.'],
      meta: 'SLOPES AS FITTED IN THE PAPER' },
    { len: 7, shape: 'v:chain', viz: { gold: true, steps: [{ text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }] }, label: 'CESAR', title: 'Reasoning, rewarded',
      lines: ['Supervise the process,', 'and more thinking pays off.'], meta: 'JIAJUNFAN.COM/PROJECTS/CESAR' },
  ]),
};
