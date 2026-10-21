---
title: "SpeechGym: An Audio-Native Gym for Training Voice Agents via Reinforcement Learning"
collection: publications
permalink: /publication/2026-08-26-SpeechGym
date: 2026-08-26
venue: '<strong>arXiv</strong> preprint, 2026'
paperurl: 'https://arxiv.org/abs/2608.26432'
citation: 'Jiajun Fan, Jingyuan Li, Prashanth Gurunath Shivakumar, Jia-Hong Huang, Qi Luo, M. Maruf, Ivan Bulyko, Ge Liu, Roger Ren. &quot;SpeechGym: An Audio-Native Gym for Training Voice Agents via Reinforcement Learning.&quot; arXiv preprint arXiv:2608.26432, 2026.'
bibtex: |
  @article{fan2026speechgym,
    title={SpeechGym: An Audio-Native Gym for Training Voice Agents via Reinforcement Learning},
    author={Fan, Jiajun and Li, Jingyuan and Shivakumar, Prashanth Gurunath and Huang, Jia-Hong and Luo, Qi and Maruf, M. and Bulyko, Ivan and Liu, Ge and Ren, Roger},
    journal={arXiv preprint arXiv:2608.26432},
    year={2026},
    url={https://arxiv.org/abs/2608.26432}
  }
film: "speechgym"
projectpage: "/projects/speechgym/"
---

Voice-agent benchmarks score a proprietary realtime API from the outside: no gradient crosses the boundary, and per-call pricing rules out the rollout volume RL needs. SpeechGym makes both sides of the conversation local open models talking in native speech over an existing tool-use benchmark, so a voice agent can actually be trained. A per-turn process reward then fixes the thing that breaks first: at audio success rates, almost every rollout group fails identically and teaches nothing.
