---
title: "Procedure-Aware Reinforcement Learning for Tool-Augmented Large Language Models"
collection: publications
permalink: /publication/2026-07-08-Procedure-Aware-RL
date: 2026-07-08
venue: 'Conference on Language Modeling (<strong>COLM 2026</strong>)'
citation: 'Qinglong Zheng, Jiajun Fan, Chaoran Cheng, Ge Liu. &quot;Procedure-Aware Reinforcement Learning for Tool-Augmented Large Language Models.&quot; COLM 2026.'
bibtex: |
  @inproceedings{zheng2026procedure,
    title     = {Procedure-Aware Reinforcement Learning for Tool-Augmented
    Large Language Models},
    author    = {Qinglong Zheng and Jiajun Fan and Chaoran Cheng and Ge Liu},
    booktitle = {Conference on Language Modeling (COLM)},
    year      = {2026},
    url       = {https://openreview.net/forum?id=d4wrBuJ4xo}
  }
film: "procedure-aware-rl"
projectpage: "/projects/procedure-aware-rl/"
---

A procedure-aware RL framework for tool-augmented LLMs that supervises the procedural fidelity of multi-turn tool invocations, not just final-answer correctness. It scores both invocation-chain quality and final system-state correctness, and trains with GRPO plus KL regularization. On API-Bank, Bamboogle and BFCL-V3, a fine-tuned Qwen2.5-3B-Instruct consistently beats correctness-only baselines and reaches average accuracy competitive with far larger proprietary models. Optimizing tool sequencing also improves recovery from failed tool calls.
