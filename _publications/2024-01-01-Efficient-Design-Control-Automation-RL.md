---
title: "Efficient Design-and-Control Automation with Reinforcement Learning and Adaptive Exploration"
collection: publications
permalink: /publication/2024-01-01-Efficient-Design-Control-RL
date: 2024-10-07
venue: '<strong>AI4Mat-NeurIPS-2024</strong> Workshop on AI for Accelerated Materials Design'
paperurl: 'https://openreview.net/forum?id=stiehhc5y6'
citation: 'Jiajun Fan, Hongyao Tang, Michael Przystupa, Mariano Phielipp, Santiago Miret, Glen Berseth. &quot;Efficient Design-and-Control Automation with Reinforcement Learning and Adaptive Exploration.&quot; AI4Mat-NeurIPS-2024.'
bibtex: |
  @inproceedings{fan2024edison,
    title={Efficient Design-and-Control Automation with Reinforcement Learning and Adaptive Exploration},
    author={Fan, Jiajun and Tang, Hongyao and Przystupa, Michael and Phielipp, Mariano and Miret, Santiago and Berseth, Glen},
    booktitle={AI for Accelerated Materials Design (AI4Mat), NeurIPS 2024 Workshop},
    year={2024},
    url={https://openreview.net/forum?id=stiehhc5y6}
  }
---

**EDiSon** (Efficient Design and Stable Control) casts design optimization as a multi-step MDP and learns design and control jointly: a design policy proposes a structure step by step while a control policy operates it, both trained with deep RL against a reward that scores design quality. A design memory drives adaptive exploration — the agent regulates between building a design from scratch and replaying a stored high-quality design to refine it, which balances exploration against exploitation and stabilises control-policy learning. Because the formulation is domain-agnostic, the same method covers **robot morphology design** and **Tetris-based design**, and targets automated materials discovery.
