---
title: "ElegantVLA: Learning When to Think for Efficient Vision-Language-Action Models"
collection: publications
permalink: /publication/2026-05-28-ElegantVLA
date: 2026-05-28
venue: '<strong>arXiv</strong> preprint, 2026'
paperurl: 'https://arxiv.org/abs/2605.29438'
citation: 'Ye Li, Huanan Liu, Kangye Ji, Yuan Meng, Jiajun Fan, Yuansong Wang, Shiyu Qin, Chenglei Wu, Shu-Tao Xia, Zhi Wang. &quot;ElegantVLA: Learning When to Think for Efficient Vision-Language-Action Models.&quot; arXiv preprint arXiv:2605.29438, 2026.'
bibtex: |
  @article{li2026elegantvla,
    title={ElegantVLA: Learning When to Think for Efficient Vision-Language-Action Models},
    author={Li, Ye and Liu, Huanan and Ji, Kangye and Meng, Yuan and Fan, Jiajun and Wang, Yuansong and Qin, Shiyu and Wu, Chenglei and Xia, Shu-Tao and Wang, Zhi},
    journal={arXiv preprint arXiv:2605.29438},
    year={2026},
    url={https://arxiv.org/abs/2605.29438}
  }
---

A plug-in, phase-adaptive inference framework that accelerates Vision-Language-Action models by deciding *when* to spend full computation. A lightweight scheduler watches temporal representation similarity, robot-motion cues and episode progress, then allocates compute jointly across the vision encoder, the LLM and the action head — five Vision-LLM compute modes from full recomputation to multi-step temporal reuse, and three denoising modes that reuse intermediate states during stable motion while keeping full refinement for goal-sensitive stages. No retraining of the base model. Up to 2.55× speedup on GR00T and 3.77× on CogACT; on six real-world GR00T tasks it cuts computation 2.18× and lifts control frequency from 13.8 Hz to 26.3 Hz.
