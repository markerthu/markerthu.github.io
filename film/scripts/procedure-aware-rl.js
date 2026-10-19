import { timeline } from './util.js';
// The paper's 'sending a package' example (Fig. 2), its four reward terms, the BFCL-V3 table
// (base 57.31, ToolRL 63.07, GPT-5-mini 57.11, GPT-4.1-mini 64.65, Gemma-3-12b 64.69, ours 65.67)
// and the ablation (50.73 / 51.65 / 51.58 / 53.92, BFCL average over its three splits).
const two = v => v.toFixed(2);
export default {
  id: 'procedure-aware-rl', name: 'Procedure-Aware RL', kicker: 'PROCEDURE-AWARE RL  ·  A PROJECT FILM', badge: ['COLM 2026', 'tool-use agents'], page: '/projects/procedure-aware-rl/',
  chapters: timeline([
    { len: 7, shape: 'v:pipeline', viz: { labels: ['1. look_up_address', '2. wrap(gift)', '3. ship(package)'] }, label: 'COLM 2026', title: 'Procedure-Aware RL',
      lines: ['Teaching tool-using agents', 'the order of things.'], meta: 'ZHENG, FAN, CHENG, LIU  ·  UIUC' },
    { shape: 'v:pipeline', viz: { shuffled: true, labels: ['1. ship(package)', '2. wrap(gift)', '3. look_up_address'], verdict: 'same calls, same parameters — wrong final state' },
      tick: 'THE PROBLEM', label: 'THE PROBLEM', title: 'Right calls, wrong order',
      lines: ['A correctness-only reward scores this rollout', 'as highly as the right one.'] },
    { shape: 'v:hub', viz: { layout: 'left', dir: 'in', center: 'GRPO update', centerNote: 'weighted sum of four terms', nodes: [
        { label: 'format' }, { label: 'correctness', note: 'tool names, keys, values' },
        { label: 'procedural', note: 'call order (NDCG) + final-state check', hi: true }, { label: 'error-aware', note: 'penalty for malformed calls', hi: true }] },
      tick: 'THE REWARD', label: 'THE REWARD', title: 'Score the procedure',
      lines: ['Only the reward changes: two new terms on top', 'of format and correctness. GRPO stays standard.'] },
    { len: 9, shape: 'v:lollipop', viz: { domain: [50, 70], fmt: two, unit: '%', caption: 'BFCL-V3 average accuracy. Proprietary models under their official protocols.', rows: [
        { label: 'Procedure-Aware RL (ours, 3B)', v: 65.67, ours: true }, { label: 'Gemma-3-12b-it', v: 64.69 }, { label: 'GPT-4.1-mini', v: 64.65 },
        { label: 'ToolRL (correctness-only RL, 3B)', v: 63.07 }, { label: 'Qwen2.5-3B-Instruct (base)', v: 57.31 }, { label: 'GPT-5-mini', v: 57.11 }] },
      tick: 'RESULTS', label: 'RESULTS  ·  BFCL-V3', title: 'A 3B model, ahead',
      lines: ['Ahead of correctness-only RL, and of every', 'larger model in this table.'] },
    { shape: 'v:lollipop', viz: { domain: [49, 55], fmt: two, caption: 'Average over the BFCL non-live, live and multi-turn splits.', rows: [
        { label: 'full model (ours)', v: 53.92, ours: true }, { label: 'without the procedural reward', v: 51.65 },
        { label: 'without the error-aware penalty', v: 51.58 }, { label: 'ToolRL-3B (neither term)', v: 50.73 }] },
      tick: 'ABLATION', label: 'ABLATION', title: 'Both terms carry weight',
      lines: ['Remove either term and accuracy drops by more', 'than two points; remove both and you get ToolRL.'] },
    { len: 7, shape: 'v:pipeline', viz: { labels: ['1. cd (navigate)', '2. create the file', '3. state correct'], verdict: 'learned without being told: navigate first, then create' },
      label: 'WHAT IT LEARNS', title: 'Navigate, then create',
      lines: ['The baseline re-creates a folder that exists;', 'the trained agent changes directory first.'], meta: 'JIAJUNFAN.COM/PROJECTS/PROCEDURE-AWARE-RL' },
  ]),
};
