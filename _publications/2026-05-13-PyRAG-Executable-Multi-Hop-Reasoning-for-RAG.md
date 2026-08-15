---
title: "Retrieval is Cheap, Show Me the Code: Executable Multi-Hop Reasoning for Retrieval-Augmented Generation"
collection: publications
permalink: /publication/2026-05-13-PyRAG
date: 2026-05-13
venue: '<strong>arXiv</strong> preprint, 2026'
paperurl: 'https://arxiv.org/abs/2605.12975'
citation: 'Jiashuo Sun, Jimeng Shi, Yixuan Xie, Saizhuo Wang, Jash Rajesh Parekh, Pengcheng Jiang, Zhiyi Shi, Jiajun Fan, Qinglong Zheng, Peiran Li, Shaowen Wang, Ge Liu, Jiawei Han. &quot;Retrieval is Cheap, Show Me the Code: Executable Multi-Hop Reasoning for Retrieval-Augmented Generation.&quot; arXiv preprint arXiv:2605.12975, 2026.'
bibtex: |
  @article{sun2026pyrag,
    title={Retrieval is Cheap, Show Me the Code: Executable Multi-Hop Reasoning for Retrieval-Augmented Generation},
    author={Sun, Jiashuo and Shi, Jimeng and Xie, Yixuan and Wang, Saizhuo and Parekh, Jash Rajesh and Jiang, Pengcheng and Shi, Zhiyi and Fan, Jiajun and Zheng, Qinglong and Li, Peiran and Wang, Shaowen and Liu, Ge and Han, Jiawei},
    journal={arXiv preprint arXiv:2605.12975},
    year={2026},
    url={https://arxiv.org/abs/2605.12975}
  }
---

PyRAG recasts multi-hop retrieval-augmented generation as program synthesis and execution. Rather than a free-form reasoning trace, the model emits an executable Python program over retrieval and QA tools: intermediate states become named variables, the interpreter supplies deterministic feedback instead of ungrounded self-reflection, and the whole chain stays inspectable. That formulation buys compiler-grounded self-repair and execution-driven adaptive retrieval with no extra training. Across PopQA, HotpotQA, 2WikiMultihopQA, MuSiQue and Bamboogle it beats strong baselines in both training-free and RL-trained settings, with the widest margins on compositional multi-hop questions.
