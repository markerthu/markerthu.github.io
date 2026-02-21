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
/* ── Intro ── */
.tagline { font-size: 1.05em; line-height: 1.78; color: #333; margin-bottom: 1em; }

/* ── Internship banner ── */
.internship-banner {
  background: linear-gradient(135deg,#e8f4fd,#f0f7ff);
  border: 1.5px solid #1565c0;
  border-radius: 8px; padding: 11px 18px;
  margin: 1em 0 1.2em; font-size: 0.93em;
}
.internship-banner a { color: #1565c0; font-weight: 700; }

/* ── Quick nav ── */
.quick-nav {
  background: #f0f4ff; border-radius: 8px;
  padding: 9px 16px; margin-bottom: 1.4em;
  font-size: 0.84em; display: flex; flex-wrap: wrap; gap: 5px 16px; align-items: center;
}
.quick-nav a { color: #1565c0; text-decoration: none; }
.quick-nav a:hover { text-decoration: underline; }

/* ── Section headers ── */
.section-header {
  display: flex; align-items: center; gap: 10px;
  margin: 2em 0 1em; font-size: 1.18em; font-weight: 800; color: #1a2332;
  letter-spacing: -0.01em;
}
.section-header::after {
  content: ''; flex: 1; height: 2px;
  background: linear-gradient(to right, #1565c0, transparent); border-radius: 1px;
}

/* ── News timeline ── */
.news-list { margin: 0; padding: 0; list-style: none; }
.news-list li {
  display: flex; gap: 12px; align-items: flex-start;
  padding: 9px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.91em;
}
.news-list li:last-child { border-bottom: none; }
.news-date { min-width: 78px; color: #aaa; font-size: 0.84em; font-weight: 700; padding-top: 2px; }
.nbadge {
  display: inline-block; padding: 1px 7px; border-radius: 4px;
  font-size: 0.74em; font-weight: 800; margin-right: 5px; vertical-align: middle;
}
.nb-top    { background: #ffd700; color: #5a4000; }
.nb-accept { background: #d4edda; color: #155724; }
.nb-service{ background: #e2e3e5; color: #383d41; }

/* ── Publication list ── */
.pub-list { margin: 0; padding: 0; }
.pub-entry {
  display: flex; gap: 14px; padding: 14px 0;
  border-bottom: 1px solid #f0f0f0; align-items: flex-start;
}
.pub-entry:last-child { border-bottom: none; }
.pub-left {
  min-width: 88px; display: flex; flex-direction: column;
  gap: 4px; align-items: flex-start; padding-top: 2px;
}
.pb { /* pub badge */
  display: inline-block; padding: 3px 8px; border-radius: 5px;
  font-size: 0.70em; font-weight: 900; letter-spacing: 0.02em; white-space: nowrap; line-height: 1.4;
}
.pb-oral   { background: #1b5e20; color: #fff; }
.pb-iclr   { background: #1565c0; color: #fff; }
.pb-neurips{ background: #6a1b9a; color: #fff; }
.pb-icml   { background: #b71c1c; color: #fff; }
.pb-journal{ background: #e65100; color: #fff; }
.pb-arxiv  { background: #546e7a; color: #fff; }
.pub-year  { font-size: 0.77em; color: #bbb; font-weight: 700; }
.pub-title { font-weight: 700; font-size: 0.95em; color: #1a2332; line-height: 1.4; }
.pub-title a { color: #1565c0; text-decoration: none; }
.pub-title a:hover { text-decoration: underline; }
.pub-authors { font-size: 0.81em; color: #777; margin-top: 3px; }
.pub-authors strong { color: #1a2332; font-weight: 700; }
.pub-desc { font-size: 0.81em; color: #444; margin-top: 4px; line-height: 1.55; }
.pub-hl {
  display: inline-block; background: #fff8e1;
  border-left: 3px solid #ffa000; padding: 2px 9px;
  border-radius: 0 4px 4px 0; font-size: 0.77em;
  color: #5a4000; margin-top: 5px; font-weight: 700;
}
.pub-project {
  display: inline-block; margin-left: 6px;
  background: #e3f2fd; color: #0d47a1;
  border-radius: 4px; padding: 1px 7px; font-size: 0.74em; font-weight: 700;
  text-decoration: none !important;
}
.pub-project:hover { background: #bbdefb; }

/* ── Research grid ── */
.research-grid {
  display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-bottom: 1.5em;
}
.research-card {
  background: #fff; border: 1.5px solid #e0e8f0; border-radius: 10px;
  padding: 16px; transition: border-color .2s, box-shadow .2s;
}
.research-card:hover { border-color: #1565c0; box-shadow: 0 4px 14px rgba(21,101,192,.12); }
.rc-icon { font-size: 1.7em; margin-bottom: 8px; }
.rc-title { font-weight: 800; font-size: 0.93em; color: #1a2332; margin-bottom: 5px; }
.rc-desc  { font-size: 0.81em; color: #555; line-height: 1.55; }

/* ── Stats row ── */
.stats-row { display: flex; flex-wrap: wrap; gap: 12px; margin: 1.2em 0 1.6em; }
.stat-card {
  flex: 1 1 130px; background: #fff;
  border: 1.5px solid #e0e8f0; border-radius: 10px;
  padding: 14px 16px; text-align: center;
  box-shadow: 0 2px 8px rgba(21,101,192,.07);
  transition: transform .2s, box-shadow .2s;
}
.stat-card:hover { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(21,101,192,.15); }
.stat-number { font-size: 1.85em; font-weight: 900; color: #1565c0; line-height: 1.1; }
.stat-label  { font-size: 0.77em; color: #666; margin-top: 4px; line-height: 1.35; }

/* ── Responsive ── */
@media(max-width:760px) { .research-grid { grid-template-columns: 1fr 1fr; } }
@media(max-width:480px) {
  .research-grid { grid-template-columns: 1fr; }
  .pub-entry { flex-direction: column; gap: 6px; }
  .pub-left  { flex-direction: row; }
  .stat-card { flex: 1 1 100px; padding: 10px 12px; }
  .stat-number { font-size: 1.5em; }
}
</style>

<!-- Quick nav -->
<div class="quick-nav">
  <span style="font-weight:800;color:#1565c0;">↓ Jump to:</span>
  <a href="#news">📰 News</a>
  <a href="#publications">📄 Publications</a>
  <a href="#research">🔬 Research</a>
  <a href="#awards">🏅 Awards</a>
  <a href="files/CV.pdf">📋 CV</a>
</div>

<!-- Intro -->
<p class="tagline">
I am a Computer Science Ph.D. student at <strong>UIUC</strong>, advised by Prof. <a href="https://geliu.web.illinois.edu/">Ge Liu</a>. My research focuses on <strong>autonomous RL post-training for large generative models</strong> — making diffusion/flow models and multi-modal reasoning LLMs continuously self-improve with less and less human intervention. Previously, I pushed RL to <strong>superhuman performance</strong>: breaking 24 Atari world records and outperforming Agent57 with 500× less data.
</p>

<div class="internship-banner">
🎓 <strong>Seeking research internship — Summer 2026.</strong>
&nbsp;<a href="files/CV.pdf">[CV]</a>
&nbsp;<a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en">[Scholar]</a>
&nbsp;<a href="mailto:jiajunf3@illinois.edu">[Email]</a>
</div>

<!-- ═══════════════════════════════ NEWS ═══════════════════════════════ -->
<div class="section-header" id="news">📰 Latest News</div>

<ul class="news-list">
  <li>
    <span class="news-date">Jan 2026</span>
    <span><span class="nbadge nb-accept">Accept</span><strong>2 papers at ICLR 2026</strong> — CESAR &amp; SP-VLA. See you in Rio 🇧🇷</span>
  </li>
  <li>
    <span class="news-date">Sep 2025</span>
    <span><span class="nbadge nb-accept">Accept</span><strong>2 papers at NeurIPS 2025</strong> — ADRPO &amp; VarCon. See you in San Diego 🌊</span>
  </li>
  <li>
    <span class="news-date">Jun 2025</span>
    <span><span class="nbadge nb-accept">Accept</span>Paper accepted at <strong>IEEE TPAMI</strong>: PRANCE.</span>
  </li>
  <li>
    <span class="news-date">Feb 2025</span>
    <span><span class="nbadge nb-accept">Accept</span>Paper accepted at <strong>ICLR 2025</strong>: ORW-CFM-W2 (Flow Matching self-evolution).</span>
  </li>
  <li>
    <span class="news-date">Jan 2025</span>
    <span><span class="nbadge nb-service">Service</span>Area reviewer: ICLR 2025, NeurIPS 2024, CVPR 2026, AAAI 2025, AISTATS 2025.</span>
  </li>
  <li>
    <span class="news-date">Aug 2024</span>
    <span>🎓 Started Ph.D. at <strong>UIUC CS</strong> (GPA 4.0/4.0).</span>
  </li>
  <li>
    <span class="news-date">Jan 2023</span>
    <span><span class="nbadge nb-top">Oral · Top 5%</span>LBC at <strong>ICLR 2023</strong>, ranked <strong>5/4176</strong> — broke 24 Atari world records.</span>
  </li>
</ul>

<!-- ═══════════════════════════════ PUBLICATIONS ═══════════════════════ -->
<div class="section-header" id="publications">📄 Selected Publications</div>

<p style="font-size:0.83em;color:#999;margin-top:-0.6em;">* = first/co-first author &nbsp;·&nbsp;
<a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en">Full list on Google Scholar</a> &nbsp;/&nbsp;
<a href="/publications/">Publications page</a></p>

<div class="pub-list">

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-iclr">ICLR 2026</span><span class="pub-year">2026</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=DUr48hxO2h">Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards</a>
      <a class="pub-project" href="/projects/cesar/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, R. Ren, J. Li, R. Pandey, P.G. Shivakumar, Y. Gu, A. Gandhe, G. Liu, I. Bulyko</div>
    <div class="pub-desc">CESAR: process-reward RL (GRPO) resolving test-time inverse scaling in Audio LLMs — models produce hallucinatory reasoning without proper guidance; CESAR rewrites that.</div>
    <div class="pub-hl">🏆 SOTA on MMAU Test-mini · Outperforms Gemini 2.5 Pro &amp; GPT-4o Audio</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-iclr">ICLR 2026</span><span class="pub-year">2026</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=RwdGIIjPlC">SP-VLA: A Joint Model Scheduling and Token Pruning Approach for VLA Model Acceleration</a></div>
    <div class="pub-authors">Y. Li, Y. Meng, Z. Sun, K. Ji, C. Tang, <strong>J. Fan</strong>, X. Ma, S.-T. Xia, Z. Wang, W. Zhu</div>
    <div class="pub-desc">Action-aware model scheduling + spatio-semantic token pruning for VLA acceleration.</div>
    <div class="pub-hl">⚡ 1.5× lossless speedup (LIBERO) · 2.4× speedup (SimplerEnv)</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-neurips">NeurIPS 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=aXO0xg0ttW">Adaptive Divergence Regularized Policy Optimization for Fine-tuning Generative Models</a>
      <a class="pub-project" href="/projects/adrpo/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, T. Wei, C. Cheng, Y. Chen, G. Liu</div>
    <div class="pub-desc">ADRPO: sample-level adaptive KL — high-value samples get more freedom, poor samples get stronger constraint. Plug-and-play on top of any RLHF method.</div>
    <div class="pub-hl">🚀 2B SD3 surpasses 4.8B &amp; 12B models · Generalizes to LLMs &amp; audio reasoning</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-neurips">NeurIPS 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=uOOlHOq500">Variational Supervised Contrastive Learning</a></div>
    <div class="pub-authors">Z. Wang, <strong>J. Fan</strong>, T. Nguyen, H. Ji, G. Liu</div>
    <div class="pub-desc">VarCon: supervised contrastive learning as variational inference — posterior-weighted ELBO replaces pairwise comparisons.</div>
    <div class="pub-hl">📊 SOTA 79.36% Top-1 on ImageNet-1K (ResNet-50)</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-iclr">ICLR 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=2IoFFexvuw">Online Reward-Weighted Fine-Tuning of Flow Matching with Wasserstein Regularization</a>
      <a class="pub-project" href="/projects/orw-cfm-w2/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, S. Shen, C. Cheng, Y. Chen, C. Liang, G. Liu</div>
    <div class="pub-desc">ORW-CFM-W2: first online RLHF for flow matching — no human data, no likelihood, no collapse. W2 regularization keeps generation diverse.</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-arxiv">Preprint</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2510.18072">Fine-tuning Flow Matching Generative Models with Intermediate Feedback</a>
      <a class="pub-project" href="/projects/ac-flow/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, C. Cheng, S. Shen, X. Zhou, G. Liu &nbsp;·&nbsp; <em>Under Review</em></div>
    <div class="pub-desc">AC-Flow: actor-critic with intermediate feedback for flow matching — reward shaping + dual-stability + Wasserstein regularization. Robust fine-tuning on SD3 without collapse.</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-journal">TPAMI 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://arxiv.org/abs/2407.05010">PRANCE: Joint Token-Optimization and Structural Channel-Pruning for Adaptive ViT Inference</a></div>
    <div class="pub-authors">Y. Li, C. Tang, Y. Meng, <strong>J. Fan</strong>, Z. Chai, X. Ma, Z. Wang, W. Zhu &nbsp;·&nbsp; <em>IEEE TPAMI</em></div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-oral">ICLR 2023<br>Oral</span><span class="pub-year">2023</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=FeWvD0L_a4">Learnable Behavior Control: Breaking Atari Human World Records via Sample-Efficient Behavior Selection</a>
      <a class="pub-project" href="/projects/lbc/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, Y. Zhuang, Y. Liu, J. Hao, B. Wang, J. Zhu, H. Wang, S.-T. Xia</div>
    <div class="pub-desc">LBC: learnable hybrid behavior mapping + bandit meta-controller. Unified framework for exploration control in deep RL.</div>
    <div class="pub-hl">🏅 Ranked 5/4176 · 10,077% mean human score · 24 world records · 500× data efficiency</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-icml">ICML 2022</span><span class="pub-year">2022</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://proceedings.mlr.press/v162/fan22c.html">Generalized Data Distribution Iteration</a>
      <a class="pub-project" href="/projects/gdi/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, C. Xiao</div>
    <div class="pub-desc">GDI: optimizing the data distribution is the key to superhuman RL efficiency. Unified framework for diverse RL algorithms.</div>
    <div class="pub-hl">📈 Agent57 beaten with 500× less data &amp; 2× avg performance</div>
  </div>
</div>

</div>

<!-- ═══════════════════════════════ RESEARCH ═══════════════════════════ -->
<div class="section-header" id="research">🔬 Research Interests</div>

<div class="research-grid">
  <div class="research-card">
    <div class="rc-icon">🌊</div>
    <div class="rc-title">RL Post-Training for Generative Models</div>
    <div class="rc-desc">Collapse-free online RLHF for flow/diffusion models. No human-collected data needed — the model rewards itself (ORW-CFM-W2, ADRPO, AC-Flow).</div>
  </div>
  <div class="research-card">
    <div class="rc-icon">🧠</div>
    <div class="rc-title">Reasoning in Multimodal LLMs</div>
    <div class="rc-desc">Process-reward RL for audio/visual LLMs — fixing test-time inverse scaling so reasoning actually helps, not hurts (CESAR).</div>
  </div>
  <div class="research-card">
    <div class="rc-icon">🎮</div>
    <div class="rc-title">Superhuman-Level Deep RL</div>
    <div class="rc-desc">Sample-efficient RL that exceeds human performance. Broke 24 Atari world records with 500× less data than prior SOTA (LBC, GDI).</div>
  </div>
</div>

<!-- ═══════════════════════════════ STATS ═══════════════════════════════ -->
<div class="section-header">⚡ Impact at a Glance</div>

<div class="stats-row">
  <div class="stat-card">
    <div class="stat-number">9+</div>
    <div class="stat-label">Top Venue Papers<br><em>ICLR · NeurIPS · ICML · TPAMI</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number">24</div>
    <div class="stat-label">Atari World Records<br><em>broken by LBC (ICLR'23 Oral)</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number">500×</div>
    <div class="stat-label">More Data-Efficient<br><em>than Agent57</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number">SOTA</div>
    <div class="stat-label">MMAU Audio Reasoning<br><em>Beats Gemini 2.5 Pro</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number">200+</div>
    <div class="stat-label">Google Scholar Citations</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">4.0</div>
    <div class="stat-label">GPA — UIUC Ph.D.<br><em>Computer Science</em></div>
  </div>
</div>

<!-- ═══════════════════════════════ VISION ════════════════════════════ -->
<div class="section-header">💡 Research Vision</div>

<blockquote style="background:#f8f4ff;border-left:4px solid #7c4dff;border-radius:0 8px 8px 0;padding:14px 20px;color:#333;font-style:normal;">
<p style="margin:0 0 6px;font-weight:800;color:#4a148c;font-size:1em;">Making AI Systems That Improve Themselves</p>
<p style="margin:0;font-size:0.92em;line-height:1.75;">
Today's AI is frozen after training. I work to change that: AI that <strong>never stops getting better</strong>, with less and less human scaffolding at each step. The roadmap: <em>eliminate human-collected data (ORW-CFM-W2) → remove manual KL tuning (ADRPO) → drop hand-crafted process rewards (CESAR) → fully autonomous self-critique (ongoing).</em>
</p>
</blockquote>

<!-- ═══════════════════════════════ AWARDS ════════════════════════════ -->
<div class="section-header" id="awards">🏅 Awards &amp; Academic Service</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:1.5em;">
  <div>
    <p style="font-weight:800;margin-bottom:8px;color:#1a2332;">🎖 Selected Awards</p>
    <ul style="font-size:0.87em;color:#444;line-height:2;padding-left:1.2em;margin:0;">
      <li>National Scholarship ×2, Top 1% — Nankai Univ.</li>
      <li>Ranked <strong>1st / 83</strong> in major — Nankai Univ.</li>
      <li>Outstanding Graduates (Top 1%) — Nankai Univ.</li>
      <li>Tang Lixin Scholarship (Top 1%)</li>
      <li>GPA <strong>4.0/4.0</strong> — UIUC Ph.D.</li>
      <li>GPA <strong>3.97/4.0</strong>, Top 1.3% — Tsinghua M.Eng.</li>
    </ul>
  </div>
  <div>
    <p style="font-weight:800;margin-bottom:8px;color:#1a2332;">🔍 Reviewer</p>
    <ul style="font-size:0.87em;color:#444;line-height:2;padding-left:1.2em;margin:0;">
      <li>ICLR 2024 · 2025 · <strong>2026</strong></li>
      <li>NeurIPS 2022–2024 · <strong>2025</strong></li>
      <li>ICML 2023–2024 · <strong>2025 · 2026</strong></li>
      <li>CVPR <strong>2026</strong></li>
      <li>AAAI 2025 · AISTATS 2025 · KDD 2024</li>
    </ul>
  </div>
</div>

<!-- ═══════════════════════════════ CONTACT ══════════════════════════ -->
<div class="section-header">📬 Contact</div>
<p style="font-size:0.94em;">
Happy to discuss research, internships, or collaborations. Best reached by email.<br>
📧 <a href="mailto:jiajunf3@illinois.edu"><strong>jiajunf3@illinois.edu</strong></a> &nbsp;·&nbsp;
🏛 Siebel Center for CS, UIUC &nbsp;·&nbsp;
<a href="files/CV.pdf"><strong>CV (PDF)</strong></a>
</p>
