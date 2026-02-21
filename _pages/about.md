---
permalink: /
title: "Jiajun Fan"
excerpt: "CS Ph.D. Student at UIUC | RL Post-Training for Generative Models"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
/* ── Reset & base ── */
.page__content h2 { margin-top: 2em; }

/* ── Intro tagline ── */
.tagline {
  font-size: 1.08em;
  line-height: 1.75;
  color: #333;
  margin-bottom: 1.2em;
}

/* ── Internship callout ── */
.internship-banner {
  background: linear-gradient(135deg, #e8f4fd 0%, #f0f7ff 100%);
  border: 1.5px solid #4a90d9;
  border-radius: 8px;
  padding: 12px 18px;
  margin: 1.2em 0 1.5em 0;
  font-size: 0.95em;
}
.internship-banner a { color: #2a6db5; font-weight: 600; }

/* ── Impact stats row ── */
.stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 1.5em 0;
}
.stat-card {
  flex: 1 1 140px;
  background: #fff;
  border: 1.5px solid #e0e8f0;
  border-radius: 10px;
  padding: 14px 16px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(74,144,217,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(74,144,217,0.15);
}
.stat-number {
  font-size: 1.9em;
  font-weight: 800;
  color: #2a6db5;
  line-height: 1.1;
}
.stat-label {
  font-size: 0.78em;
  color: #666;
  margin-top: 4px;
  line-height: 1.3;
}

/* ── Section divider ── */
.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 2em 0 1em 0;
  font-size: 1.2em;
  font-weight: 700;
  color: #1a2332;
}
.section-header::after {
  content: '';
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, #4a90d9, transparent);
  border-radius: 1px;
}

/* ── Research interest cards ── */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
  margin-bottom: 1.5em;
}
.research-card {
  background: #fff;
  border: 1.5px solid #e0e8f0;
  border-radius: 10px;
  padding: 16px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.research-card:hover {
  border-color: #4a90d9;
  box-shadow: 0 4px 14px rgba(74,144,217,0.12);
}
.research-card .rc-icon {
  font-size: 1.8em;
  margin-bottom: 8px;
}
.research-card .rc-title {
  font-weight: 700;
  font-size: 0.95em;
  color: #1a2332;
  margin-bottom: 5px;
}
.research-card .rc-desc {
  font-size: 0.82em;
  color: #555;
  line-height: 1.5;
}

/* ── News timeline ── */
.news-list { margin: 0; padding: 0; list-style: none; }
.news-list li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.92em;
}
.news-list li:last-child { border-bottom: none; }
.news-date {
  min-width: 80px;
  color: #999;
  font-size: 0.85em;
  font-weight: 600;
  padding-top: 2px;
}
.news-badge {
  display: inline-block;
  padding: 1px 7px;
  border-radius: 4px;
  font-size: 0.75em;
  font-weight: 700;
  margin-right: 6px;
  vertical-align: middle;
}
.nb-top { background: #ffd700; color: #5a4000; }
.nb-accept { background: #d4edda; color: #155724; }
.nb-service { background: #e2e3e5; color: #383d41; }

/* ── Publication entries ── */
.pub-list { margin: 0; padding: 0; }
.pub-entry {
  display: flex;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid #f0f0f0;
  align-items: flex-start;
}
.pub-entry:last-child { border-bottom: none; }
.pub-left { min-width: 90px; display: flex; flex-direction: column; gap: 4px; align-items: flex-start; padding-top: 2px; }
.pub-badge {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 5px;
  font-size: 0.72em;
  font-weight: 800;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
.badge-oral  { background: #1a7f3c; color: #fff; }
.badge-iclr  { background: #1565c0; color: #fff; }
.badge-neurips { background: #6a0dad; color: #fff; }
.badge-icml  { background: #c62828; color: #fff; }
.badge-journal { background: #e65100; color: #fff; }
.badge-preprint { background: #546e7a; color: #fff; }
.pub-year { font-size: 0.78em; color: #aaa; font-weight: 600; }
.pub-right {}
.pub-title {
  font-weight: 700;
  font-size: 0.95em;
  color: #1a2332;
  line-height: 1.4;
}
.pub-title a { color: #1565c0; text-decoration: none; }
.pub-title a:hover { text-decoration: underline; }
.pub-authors { font-size: 0.82em; color: #666; margin-top: 3px; }
.pub-authors strong { color: #1a2332; }
.pub-desc { font-size: 0.82em; color: #444; margin-top: 5px; line-height: 1.5; }
.pub-highlight {
  display: inline-block;
  background: #fff8e1;
  border-left: 3px solid #ffa000;
  padding: 2px 8px;
  border-radius: 0 4px 4px 0;
  font-size: 0.78em;
  color: #5a4000;
  margin-top: 5px;
  font-weight: 600;
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .stats-row { gap: 8px; }
  .stat-card { flex: 1 1 100px; padding: 10px 12px; }
  .stat-number { font-size: 1.5em; }
  .research-grid { grid-template-columns: 1fr 1fr; }
  .pub-entry { flex-direction: column; gap: 6px; }
  .pub-left { flex-direction: row; }
}
</style>

<p class="tagline">
I am a Computer Science Ph.D. student at the <strong>University of Illinois Urbana-Champaign (UIUC)</strong>, advised by Prof. <a href="https://illinois.edu/">Ge Liu</a>. My research sits at the frontier of <strong>autonomous RL post-training for large generative models</strong> — spanning diffusion/flow models and multi-modal reasoning LLMs. The central thread: <em>progressively eliminating human intervention</em> from the post-training pipeline while keeping models stable, diverse, and continuously self-improving.
</p>

<div class="internship-banner">
🎓 <strong>Actively seeking research internship for Summer 2026.</strong> &nbsp;
<a href="files/CV.pdf">[CV]</a> &nbsp;
<a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en">[Google Scholar]</a> &nbsp;
<a href="mailto:jiajunf3@illinois.edu">[Email]</a>
</div>

<!-- ── Impact at a Glance ── -->
<div class="section-header">⚡ Impact at a Glance</div>

<div class="stats-row">
  <div class="stat-card">
    <div class="stat-number">9+</div>
    <div class="stat-label">Papers at Top ML Venues<br><em>ICLR / NeurIPS / ICML / TPAMI</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number">24</div>
    <div class="stat-label">Atari Human World Records<br><em>Broken by LBC (ICLR'23 Oral)</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number">500×</div>
    <div class="stat-label">Less Data than Agent57<br><em>while 2× better performance</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number">SOTA</div>
    <div class="stat-label">MMAU Audio Reasoning<br><em>Beats Gemini 2.5 Pro & GPT-4o</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number">4.0</div>
    <div class="stat-label">GPA at UIUC<br><em>Ph.D. Computer Science</em></div>
  </div>
</div>

<!-- ── Research Interests ── -->
<div class="section-header">🔬 Research Interests</div>

<div class="research-grid">
  <div class="research-card">
    <div class="rc-icon">🌊</div>
    <div class="rc-title">RL Post-Training for Generative Models</div>
    <div class="rc-desc">Collapse-free fine-tuning of flow/diffusion models via online RL with theoretically-grounded diversity guarantees (ORW-CFM-W2, ADRPO).</div>
  </div>
  <div class="research-card">
    <div class="rc-icon">🧠</div>
    <div class="rc-title">Multimodal Reasoning LLMs</div>
    <div class="rc-desc">Process-reward RL for audio/visual LLMs that resolves test-time inverse scaling and cultivates genuine chain-of-thought reasoning (CESAR).</div>
  </div>
  <div class="research-card">
    <div class="rc-icon">♾️</div>
    <div class="rc-title">Self-Evolving AI Systems</div>
    <div class="rc-desc">Autonomous online learning loops that continuously improve without human-collected data — from diffusion models to proteins (ProteinZero).</div>
  </div>
  <div class="research-card">
    <div class="rc-icon">📐</div>
    <div class="rc-title">Theoretical RL Foundations</div>
    <div class="rc-desc">Rigorous mathematical guarantees for convergence, diversity preservation, and data-efficiency in deep RL and RLHF (GDI, W2-bounds).</div>
  </div>
</div>

<!-- ── Latest News ── -->
<div class="section-header">📰 Latest News</div>

<ul class="news-list">
  <li>
    <span class="news-date">Jan 2026</span>
    <span><span class="news-badge nb-accept">Accept</span><strong>2 papers accepted at ICLR 2026</strong> — CESAR (Audio LLM Reasoning) &amp; SP-VLA. See you in Rio de Janeiro! 🇧🇷</span>
  </li>
  <li>
    <span class="news-date">Sep 2025</span>
    <span><span class="news-badge nb-accept">Accept</span><strong>2 papers accepted at NeurIPS 2025</strong> — ADRPO &amp; VarCon. See you in San Diego! 🌊</span>
  </li>
  <li>
    <span class="news-date">Jun 2025</span>
    <span><span class="news-badge nb-accept">Accept</span>Paper accepted at <strong>TPAMI</strong>: PRANCE — Adaptive ViT Inference.</span>
  </li>
  <li>
    <span class="news-date">Feb 2025</span>
    <span><span class="news-badge nb-accept">Accept</span>Paper accepted at <strong>ICLR 2025</strong>: ORW-CFM-W2 (Flow Matching self-evolution).</span>
  </li>
  <li>
    <span class="news-date">Jan 2025</span>
    <span><span class="news-badge nb-service">Service</span>Reviewer at ICML 2025, ICLR 2025, NeurIPS 2024, CVPR 2026, AAAI 2025.</span>
  </li>
  <li>
    <span class="news-date">Aug 2024</span>
    <span>🎓 Started Ph.D. at <strong>UIUC CS</strong> (GPA 4.0). Research on collapse-free RL post-training kicks off.</span>
  </li>
  <li>
    <span class="news-date">Jan 2023</span>
    <span><span class="news-badge nb-top">Oral · Top 5%</span>LBC accepted at <strong>ICLR 2023</strong> as oral (ranked <strong>5 / 4176</strong>) — broke 24 Atari world records.</span>
  </li>
</ul>

<!-- ── Selected Publications ── -->
<div class="section-header">📄 Selected Publications</div>

<p style="font-size:0.85em; color:#888; margin-top:-0.5em;">* = first author &nbsp;·&nbsp; Full list: <a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en">Google Scholar</a> &nbsp;/&nbsp; <a href="/publications/">Publications page</a></p>

<div class="pub-list">

<div class="pub-entry">
  <div class="pub-left">
    <span class="pub-badge badge-iclr">ICLR 2026</span>
    <span class="pub-year">2026</span>
  </div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=DUr48hxO2h">Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards</a></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, R. Ren, J. Li, R. Pandey, P.G. Shivakumar, Y. Gu, A. Gandhe, G. Liu, I. Bulyko</div>
    <div class="pub-desc">CESAR: process-reward RL (GRPO) that resolves test-time inverse scaling in Audio LLMs, cultivating genuine chain-of-thought reasoning.</div>
    <div class="pub-highlight">🏆 SOTA on MMAU Test-mini — outperforms Gemini 2.5 Pro &amp; GPT-4o Audio</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left">
    <span class="pub-badge badge-iclr">ICLR 2026</span>
    <span class="pub-year">2026</span>
  </div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=RwdGIIjPlC">SP-VLA: A Joint Model Scheduling and Token Pruning Approach for VLA Model Acceleration</a></div>
    <div class="pub-authors">Y. Li, Y. Meng, Z. Sun, K. Ji, C. Tang, <strong>J. Fan</strong>, X. Ma, S.-T. Xia, Z. Wang, W. Zhu</div>
    <div class="pub-desc">Unified VLA acceleration via action-aware model scheduling + spatio-semantic token pruning.</div>
    <div class="pub-highlight">⚡ 1.5× lossless speedup in LIBERO, 2.4× in SimplerEnv</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left">
    <span class="pub-badge badge-neurips">NeurIPS 2025</span>
    <span class="pub-year">2025</span>
  </div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=aXO0xg0ttW">Adaptive Divergence Regularized Policy Optimization for Fine-tuning Generative Models</a></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, T. Wei, C. Cheng, Y. Chen, G. Liu</div>
    <div class="pub-desc">ADRPO: sample-level adaptive KL control — reduces regularization for high-value samples, increases it for poor ones. Generalizes to LLMs and multimodal reasoning.</div>
    <div class="pub-highlight">🚀 2B SD3 model surpasses 4.8B &amp; 12B models in alignment tasks</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left">
    <span class="pub-badge badge-neurips">NeurIPS 2025</span>
    <span class="pub-year">2025</span>
  </div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=uOOlHOq500">Variational Supervised Contrastive Learning</a></div>
    <div class="pub-authors">Z. Wang, <strong>J. Fan</strong>, T. Nguyen, H. Ji, G. Liu</div>
    <div class="pub-desc">VarCon reformulates supervised contrastive learning as variational inference over latent class variables, enabling posterior-weighted ELBO optimization.</div>
    <div class="pub-highlight">📊 SOTA 79.36% Top-1 on ImageNet-1K with ResNet-50</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left">
    <span class="pub-badge badge-iclr">ICLR 2025</span>
    <span class="pub-year">2025</span>
  </div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=2IoFFexvuw">Online Reward-Weighted Fine-Tuning of Flow Matching with Wasserstein Regularization</a></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, S. Shen, C. Cheng, Y. Chen, C. Liang, G. Liu</div>
    <div class="pub-desc">ORW-CFM-W2: first theoretically-grounded framework for online RLHF of flow matching models. Derives tractable W2-bound guaranteeing collapse-free policy evolution without human-collected data.</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left">
    <span class="pub-badge badge-journal">TPAMI 2025</span>
    <span class="pub-year">2025</span>
  </div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://arxiv.org/abs/2407.05010">PRANCE: Joint Token-Optimization and Structural Channel-Pruning for Adaptive ViT Inference</a></div>
    <div class="pub-authors">Y. Li, C. Tang, Y. Meng, <strong>J. Fan</strong>, Z. Chai, X. Ma, Z. Wang, W. Zhu</div>
    <div class="pub-desc">Joint token and channel compression framework for adaptive Vision Transformer inference, achieving SOTA efficiency-accuracy trade-offs. <em>IEEE TPAMI</em></div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left">
    <span class="pub-badge badge-oral">ICLR 2023<br>Oral</span>
    <span class="pub-year">2023</span>
  </div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=FeWvD0L_a4">Learnable Behavior Control: Breaking Atari Human World Records via Sample-Efficient Behavior Selection</a></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, Y. Zhuang, Y. Liu, J. Hao, B. Wang, J. Zhu, H. Wang, S.-T. Xia</div>
    <div class="pub-desc">LBC: unified framework for behavior control in RL via learnable hybrid policy mapping + bandit-based meta-controller.</div>
    <div class="pub-highlight">🏅 Ranked 5/4176 · 10,077% mean human-normalized score · 24 world records broken · 500× more sample-efficient than prior SOTA</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left">
    <span class="pub-badge badge-icml">ICML 2022</span>
    <span class="pub-year">2022</span>
  </div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://proceedings.mlr.press/v162/fan22c.html">Generalized Data Distribution Iteration</a></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, C. Xiao</div>
    <div class="pub-desc">GDI: first theoretical demonstration that optimizing data distribution is key to RL efficiency. Provides unified perspective on diverse RL algorithms.</div>
    <div class="pub-highlight">📈 Outperformed Agent57 with 500× less data and 2× average performance</div>
  </div>
</div>

</div>

<!-- ── Research Philosophy ── -->
<div class="section-header">💡 Research Philosophy</div>

<blockquote style="background:#f8f4ff; border-left:4px solid #7c4dff; border-radius:0 8px 8px 0; padding:16px 20px; color:#333; font-style:normal;">
<p style="margin:0 0 8px 0; font-weight:700; color:#4a148c;">The Grand Challenge I'm Working On</p>
<p style="margin:0; font-size:0.95em; line-height:1.7;">
Modern AI systems are frozen after training — they can't improve on their own. My research builds the theoretical and algorithmic foundations for <strong>autonomous self-evolution</strong>: AI that continuously learns from its environment, refines its own capabilities, and corrects its own mistakes — without requiring humans to collect new data or hand-craft rewards at every step. The path I'm tracing: <em>from online RL that eliminates human data (ORW-CFM-W2) → adaptive divergence control without KL tuning (ADRPO) → process rewards without annotated reasoning paths (CESAR) → fully self-critiquing models (ongoing)</em>.
</p>
</blockquote>

<!-- ── Contact ── -->
<div class="section-header">📬 Contact</div>

<p>
  📧 <a href="mailto:jiajunf3@illinois.edu">jiajunf3@illinois.edu</a> &nbsp;·&nbsp;
  🏛 Thomas M. Siebel Center for CS, UIUC, Urbana IL &nbsp;·&nbsp;
  <a href="files/CV.pdf">CV</a> &nbsp;·&nbsp;
  <a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en">Google Scholar</a> &nbsp;·&nbsp;
  <a href="https://github.com/markerthu">GitHub</a> &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/jiajun-fan-57b12b26b">LinkedIn</a> &nbsp;·&nbsp;
  <a href="https://orcid.org/0000-0002-0263-2103">ORCID</a>
</p>
