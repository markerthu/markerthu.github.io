import { timeline } from './util.js';
export default {
  id: 'procedure-aware-rl', name: 'Procedure-Aware RL', kicker: 'PROCEDURE-AWARE RL  ·  A PROJECT FILM', badge: ['COLM 2026', 'tool-use agents'], page: '/projects/procedure-aware-rl/',
  chapters: timeline([
    { len: 7, shape: 'pipeline', label: 'COLM 2026', title: 'Procedure-Aware RL',
      lines: ['Teaching tool-using agents', 'the order of things.'], meta: 'ZHENG, FAN, CHENG, LIU  ·  UIUC' },
    { shape: 'pipeline', arg: 'shuffled', tick: 'THE PROBLEM', label: 'THE PROBLEM', title: 'Right calls, wrong order',
      lines: ['Correctness-only rewards score each call, never', 'the sequence: ship it before the address is known.'] },
    { shape: 'chain', tick: 'THE REWARD', label: 'THE REWARD', title: 'Score the procedure',
      lines: ['Call order (NDCG), a final-state check and a', 'penalty for malformed calls, on top of GRPO.'] },
    { shape: 'bars', tick: 'RESULTS', label: 'RESULTS  ·  BFCL-V3', title: 'A 3B model, ahead',
      lines: ['Beats correctness-only RL on all three benchmarks,', 'in the range of much larger proprietary models.'],
      stat: { from: 0, to: 65.67, decimals: 2, suffix: '%', label: 'BFCL-V3 AVERAGE ACCURACY, 3B' } },
    { shape: 'pipeline', tick: 'BEHAVIOUR', label: 'WHAT IT LEARNS', title: 'Navigate, then create',
      lines: ['It changes directory before creating the file,', 'and retries along a corrected path after a failure.'] },
    { len: 7, shape: 'ring', label: 'PROCEDURE-AWARE RL', title: 'Tool calling as a skill',
      lines: ['Only the reward changes;', 'the RL algorithm stays standard.'], meta: 'JIAJUNFAN.COM/PROJECTS/PROCEDURE-AWARE-RL' },
  ]),
};
