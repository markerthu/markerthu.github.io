---
title: "AudioRSI: Recursively Self-Improving Audio Reasoners"
collection: publications
permalink: /publication/2026-10-27-AudioRSI
date: 2026-10-27
venue: '<strong>arXiv</strong> preprint, 2026'
paperurl: 'https://arxiv.org/abs/2610.36578'
citation: 'Jiajun Fan, Roger Ren, Jingyuan Li, Rahul Pandey, Prashanth Gurunath Shivakumar, Ankur Gandhe, Yile Gu, Ge Liu, Ivan Bulyko. &quot;AudioRSI: Recursively Self-Improving Audio Reasoners.&quot; arXiv preprint arXiv:2610.36578, 2026.'
bibtex: |
  @article{fan2026audiorsi,
    title   = {{AudioRSI}: Recursively Self-Improving Audio Reasoners},
    author  = {Jiajun Fan and Roger Ren and Jingyuan Li and Rahul Pandey and
    Prashanth Gurunath Shivakumar and Ankur Gandhe and Yile Gu and
    Ge Liu and Ivan Bulyko},
    journal = {arXiv preprint arXiv:2610.36578},
    year    = {2026}
  }
film: "audiorsi"
projectpage: "/projects/audiorsi/"
---

Reinforcement learning has made audio LLMs better reasoners, but the reward still comes from outside the model, and an external judge stays frozen while the student improves. In AudioRSI one model is both student and teacher: as the student it writes reasoning paths, and as the teacher it hears the same recording and compares them pair by pair, turning its own judgments into a process-level reward. Every 200 steps the improved student becomes the teacher of its successor. To our knowledge, it is the first recursively self-improving audio LLM.
