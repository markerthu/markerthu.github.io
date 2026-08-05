---
title: "Rethinking the Reranker: Boundary-Aware Evidence Selection for Robust Retrieval-Augmented Generation"
collection: publications
permalink: /publication/2026-04-30-BAR-RAG
date: 2026-04-30
venue: 'International Conference on Machine Learning (<strong>ICML 2026</strong>)'
paperurl: 'https://openreview.net/forum?id=Tt8lCe1NrW'
citation: 'Jiashuo Sun, Pengcheng Jiang, Saizhuo Wang, Jiajun Fan, Heng Wang, Siru Ouyang, Ming Zhong, Yizhu Jiao, Chengsong Huang, Xueqiang Xu, Pengrui Han, Peiran Li, Jiaxin Huang, Ge Liu, Heng Ji, Jiawei Han. &quot;Rethinking the Reranker: Boundary-Aware Evidence Selection for Robust Retrieval-Augmented Generation.&quot; ICML 2026.'
bibtex: |
  @inproceedings{sun2026barrag,
    title={Rethinking the Reranker: Boundary-Aware Evidence Selection for Robust Retrieval-Augmented Generation},
    author={Sun, Jiashuo and Jiang, Pengcheng and Wang, Saizhuo and Fan, Jiajun and Wang, Heng and Ouyang, Siru and Zhong, Ming and Jiao, Yizhu and Huang, Chengsong and Xu, Xueqiang and Han, Pengrui and Li, Peiran and Huang, Jiaxin and Liu, Ge and Ji, Heng and Han, Jiawei},
    booktitle={International Conference on Machine Learning},
    year={2026},
    url={https://openreview.net/forum?id=Tt8lCe1NrW}
  }
---

BAR-RAG reframes the reranker as a boundary-aware evidence selector that targets the generator's "Goldilocks Zone" — evidence that is neither trivially answer-revealing nor unanswerable, but challenging yet sufficient. The selector is trained with RL from generator feedback, then the generator is fine-tuned under the induced evidence distribution. Average gain of 10.3% over strong RAG and reranking baselines under noisy retrieval. [Code](https://github.com/GasolSun36/BAR-RAG).
