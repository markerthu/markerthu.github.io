---
title: "Ask to Distill: Learning to Synthesize Data for On-Policy Distillation"
collection: publications
permalink: /publication/2026-10-20-Ask-to-Distill
date: 2026-10-20
venue: '<strong>arXiv</strong> preprint, 2026'
paperurl: 'https://arxiv.org/abs/2610.27450'
citation: 'Jiashuo Sun, Hao Zhang, Xueqiang Xu, Heng Wang, Yixuan Xie, Pengcheng Jiang, Zhenrui Yue, Jiajun Fan, Peiran Li, Ge Liu, Shaowen Wang, Jiawei Han. &quot;Ask to Distill: Learning to Synthesize Data for On-Policy Distillation.&quot; arXiv preprint arXiv:2610.27450, 2026.'
bibtex: |
  @article{sun2026asktodistill,
    title={Ask to Distill: Learning to Synthesize Data for On-Policy Distillation},
    author={Sun, Jiashuo and Zhang, Hao and Xu, Xueqiang and Wang, Heng and Xie, Yixuan and Jiang, Pengcheng and Yue, Zhenrui and Fan, Jiajun and Li, Peiran and Liu, Ge and Wang, Shaowen and Han, Jiawei},
    journal={arXiv preprint arXiv:2610.27450},
    year={2026},
    url={https://arxiv.org/abs/2610.27450}
  }
---

Ask-to-Distill learns to write training questions for on-policy distillation without reference answers. A synthesizer initialized from the student is optimized with a distributional surrogate for question value, computed from a frozen student&ndash;teacher pair, and the filtered questions form a prompt-only bank for standard on-policy distillation. Across math, code and agentic tasks it improves on unoptimized student-generated prompts and KL-filtered real questions, and matches or exceeds distillation on a real question bank in the evaluated settings.
