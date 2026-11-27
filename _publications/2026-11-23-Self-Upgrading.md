---
title: "Self-Upgrading Embodied Agents"
collection: publications
permalink: /publication/2026-11-23-Self-Upgrading
date: 2026-11-23
venue: '<strong>arXiv</strong> preprint, 2026'
paperurl: 'https://arxiv.org/abs/2611.31117'
citation: 'Jiajun Fan, Neil He, Qinglong Zheng, Changyi Yang, Tong Wei, Andy Mao, Zetian Li, Chaoran Cheng, Hui Ren, Ruihan Guo, Xianrui Zhong, Xizheng Yu, Jingyuan Li, Xi Zhu, Kaiqu Liang, Chang Xu, Zun Qian, Zidi Xiong, Yuezhu Zhao, Xu Huang, Ge Liu. &quot;Self-Upgrading Embodied Agents.&quot; arXiv preprint arXiv:2611.31117, 2026.'
bibtex: |
  @article{fan2026selfupgrading,
    title         = {Self-Upgrading Embodied Agents},
    author        = {Jiajun Fan and Neil He and Qinglong Zheng and Changyi Yang and
                     Tong Wei and Andy Mao and Zetian Li and Chaoran Cheng and
                     Hui Ren and Ruihan Guo and Xianrui Zhong and Xizheng Yu and
                     Jingyuan Li and Xi Zhu and Kaiqu Liang and Chang Xu and
                     Zun Qian and Zidi Xiong and Yuezhu Zhao and Xu Huang and Ge Liu},
    journal       = {arXiv preprint arXiv:2611.31117},
    eprint        = {2611.31117},
    archivePrefix = {arXiv},
    year          = {2026}
  }
projectpage: "/projects/self-upgrading/"
---

The self-upgrading embodied agent learns from its own experience by upgrading its own weights on the job, between its tasks, with no training, no gradient, no reward model, no second model, no test-time scaling and no harness or prompt engineering. By day a 27B agent works in a household environment; at night it reads its record, traces steps wasted on replies that reach the token limit before any action to one direction in its hidden states, rewrites one tensor of its weights, and keeps only changes that hold against its unchanged self on practice tasks. Over thousands of held-out episodes, 48 fresh seeds a task, its one kept edit makes it complete significantly more tasks, in fewer steps, with fewer wasted and fewer tokens.
