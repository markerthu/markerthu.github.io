import { timeline } from './util.js';
// Only published or arXiv work is named; recursive self-improvement is presented as the next step (AudioRSI is its first paper),
// and the AI scientist as the long-term goal.
const chapters = timeline([
  { len: 7, shape: 'sphere', label: 'JIAJUN FAN  ·  RESEARCH', title: 'From RL to AGI',
    lines: ['Taking the human out of the loop,', 'one step at a time.'], meta: 'REINFORCEMENT LEARNING  ·  UIUC' },
  { len: 9, shape: 'v:records', viz: { n: 24, cols: 8 }, tick: 'SUPERHUMAN', label: '2022 — 2023', title: 'Superhuman',
    lines: ['An agent learns to choose its own experience,', 'and breaks 24 Atari human world records.'],
    meta: 'GDI  ·  ICML 2022          LBC  ·  ICLR 2023 ORAL' },
  { len: 9, shape: 'v:flow', viz: {}, tick: 'OWN DATA', label: '2025 — 2026', title: 'Its own data',
    lines: ['No collected preferences: the model improves', 'from its own generations, without collapsing.'],
    meta: 'ORW-CFM-W2  ·  ICLR 2025          PROTEINZERO  ·  TMLR 2026' },
  { len: 9, shape: 'v:chain', viz: { gold: true, steps: [{ text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }] }, tick: 'OWN REASONING', label: '2025 — 2026', title: 'Its own reasoning',
    lines: ['No hand-tuned regularization, no human-written', 'chains of thought. The reasoning emerges.'],
    meta: 'ADRPO  ·  NEURIPS 2025          CESAR  ·  ICLR 2026' },
  { len: 9, shape: 'v:dialog', viz: { left: '', right: '', mid: '', tools: '' }, tick: 'AGENTS', label: '2026', title: 'Worlds to act in',
    lines: ['Voice agents that listen and speak natively;', 'tool agents that learn the order of things.'],
    meta: 'SPEECHGYM  ·  ARXIV 2026          PROCEDURE-AWARE RL  ·  COLM 2026' },
  { len: 9, shape: 'knot', tick: 'OWN CRITIC', label: 'NEXT', title: 'Its own critic',
    lines: ['Recursive self-improvement: each better model', 'becomes the critic and teacher of the next.'],
    meta: 'FIRST STEP  ·  AUDIORSI  ·  ARXIV 2026' },
  { len: 9, shape: 'bloom', tick: 'AI SCIENTIST', label: 'THE GOAL', title: 'An AI scientist',
    lines: ['Out of the loop entirely: a system that improves', 'itself, and does research on its own.'],
    meta: 'THE LONG-TERM DREAM  ·  FROM RL TO AGI' },
  { len: 7, shape: 'ring', label: 'RESEARCH', title: 'Jiajun Fan',
    lines: ['From reinforcement learning', 'to artificial general intelligence.'], meta: 'JIAJUNFAN.COM' },
]);
const at = (k, d) => chapters[k].t0 + d;
export default {
  id: 'main', name: 'From RL to AGI', kicker: 'FROM RL TO AGI  ·  A RESEARCH FILM',
  panel: { title: 'HUMAN IN THE LOOP', items: [
    { name: 'data collection', off: at(2, 2.6) },
    { name: 'labelling & tuning', off: at(3, 2.6) },
    { name: 'reward design', next: at(5, 2.6) },
  ] },
  chapters,
};
