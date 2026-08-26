---
layout: post
title: 'The Exploration-Exploitation Dilemma in RLHF for Generative Models'
date: 2025-10-20
permalink: /posts/2025/10/diversity-collapse-rlhf/
tags:
  - reinforcement learning
  - RLHF
  - generative models
  - flow matching
excerpt: "RL fine-tuning runs on one fixed coefficient that has to both protect the model and get out of its way. Subtracting each sample's advantage lets a 2B model beat a 12B one — without losing diversity."
header:
  og_image: "/images/blog/adrpo_reward_diversity.webp"
---

{% include post-editorial.html %}

<div class="ed" markdown="0">

<p class="lede">RL fine-tuning of a generative model runs on one dial. Turn it up and the model keeps its diversity but stops improving; turn it down and it chases reward until it collapses into template output. The dial is a single coefficient applied identically to every sample. This note is about what happens when you stop treating it as a constant.</p>

<figure class="fig bleed"><div class="figscroll">

<svg viewBox="0 0 940 330" role="img" aria-label="How ADRPO sets regularisation strength. Fixed methods apply one beta to every sample. ADRPO subtracts each sample advantage, so high-advantage samples are regularised less and low-advantage samples more.">
<defs><style>.t{font-family:var(--sans);font-size:12.5px;fill:var(--body)}.tb{font-family:var(--sans);font-size:13px;font-weight:700;fill:var(--ink)}.tm{font-family:var(--sans);font-size:11px;fill:var(--muted)}.eq{font-family:var(--mono);font-size:15px;font-weight:700;fill:var(--link)}.eqm{font-family:var(--mono);font-size:13px;fill:var(--muted)}.ax{stroke:var(--rule);stroke-width:1.2}</style><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
<text class="tb" x="40" y="30">Fixed regularisation</text>
<text class="tm" x="40" y="48">PPO &middot; GRPO &middot; DPO &middot; ORW-CFM-W2</text>
<line class="ax" x1="40" y1="248" x2="380" y2="248"/>
<line class="ax" x1="40" y1="248" x2="40" y2="80"/>
<text class="tm" x="40" y="268">low advantage</text>
<text class="tm" x="380" y="268" text-anchor="end">high advantage</text>
<text class="tm" x="34" y="86" text-anchor="end" transform="rotate(-90 34 86)">regularisation &beta;</text>
<line x1="40" y1="164" x2="380" y2="164" stroke="var(--muted)" stroke-width="3" stroke-dasharray="7 5"/>
<text class="t" x="210" y="152" text-anchor="middle" fill="var(--muted)">one &beta; for every sample</text>
<circle cx="80" cy="164" r="4" fill="var(--muted)" opacity=".75"/>
<circle cx="150" cy="164" r="4" fill="var(--muted)" opacity=".75"/>
<circle cx="220" cy="164" r="4" fill="var(--muted)" opacity=".75"/>
<circle cx="290" cy="164" r="4" fill="var(--muted)" opacity=".75"/>
<circle cx="355" cy="164" r="4" fill="var(--muted)" opacity=".75"/>
<text class="tm" x="210" y="296" text-anchor="middle">Good samples are held back. Bad samples are not held back enough.</text>
<text class="tb" x="560" y="30">ADRPO</text>
<text class="tm" x="560" y="48">regularisation follows the sample</text>
<line class="ax" x1="560" y1="248" x2="900" y2="248"/>
<line class="ax" x1="560" y1="248" x2="560" y2="80"/>
<text class="tm" x="560" y="268">low advantage</text>
<text class="tm" x="900" y="268" text-anchor="end">high advantage</text>
<line x1="560" y1="104" x2="900" y2="224" stroke="var(--link)" stroke-width="3.4" stroke-linecap="round"/>
<circle cx="600" cy="118.1" r="4.6" fill="var(--link)"/>
<circle cx="670" cy="142.8" r="4.6" fill="var(--link)"/>
<circle cx="740" cy="167.5" r="4.6" fill="var(--link)"/>
<circle cx="810" cy="192.2" r="4.6" fill="var(--link)"/>
<circle cx="875" cy="215.2" r="4.6" fill="var(--link)"/>
<text class="t" x="576" y="96" fill="var(--link)">hold back</text>
<text class="t" x="898" y="240" text-anchor="end" fill="var(--link)">let it run</text>
<text class="tm" x="730" y="296" text-anchor="middle">Every sample gets the constraint its own quality earns.</text>
<line x1="470" y1="86" x2="470" y2="252" stroke="var(--rule)" stroke-width="1"/>
<text class="eq" x="470" y="158" text-anchor="middle">&beta; = &beta;<tspan baseline-shift="sub" font-size="11">0</tspan> &minus; A</text>
<text class="eqm" x="470" y="180" text-anchor="middle">one term,</text>
<text class="eqm" x="470" y="196" text-anchor="middle">no new networks</text>
</svg>

</div><figcaption class="cap"><b>The whole method is one subtraction.</b> Conventional RL fine-tuning applies a fixed divergence coefficient &beta; to every sample. ADRPO subtracts that sample&rsquo;s own advantage estimate, so a generation the reward model likes is allowed to move further from the reference policy, and a poor one is held closer to it. The advantage is already computed for the policy gradient — the adaptation is free.</figcaption></figure>

<p class="snum">The short version</p>

<h2>Six things one subtraction bought</h2>

<p class="lede">Each is stated with the number that carries it, and shown in full further down.</p>

<div class="fgrid bleed">
<div class="fcard"><div class="fhead"><div class="fno">1</div><div class="fclaim">One fixed knob cannot serve both jobs</div></div><p class="fev">Strong regularisation protects the pre-trained model but caps the reward. Weak regularisation chases reward and invites collapse or hacking. Every sample gets the same &beta;, whether it deserves it or not.</p><div class="fptr">§01 &middot; the dilemma</div></div>
<div class="fcard"><div class="fhead"><div class="fno">2</div><div class="fclaim">Let the sample choose its own constraint</div></div><p class="fev">ADRPO sets <b>&beta; = &beta;<sub>0</sub> &minus; A</b>. High-advantage samples are regularised less and exploited harder; low-advantage samples are pulled back toward the reference model. One term, no extra networks, no architecture change.</p><div class="fptr">§02 &middot; the fix</div></div>
<div class="fcard"><div class="fhead"><div class="fno">3</div><div class="fclaim">Negative advantage does more than down-weight</div></div><p class="fev">Reward-weighting can only give a bad sample a small positive push. An advantage-weighted objective flips the gradient sign and pushes <i>away</i> from it — actively suppressing poor generations instead of politely ignoring them.</p><div class="fptr">§02 &middot; the fix</div></div>
<div class="fcard"><div class="fhead"><div class="fno">4</div><div class="fclaim">A 2B model beat a 12B one</div></div><p class="fev">Fine-tuned SD3 at <b>2B</b> parameters outscores FLUX.1-Dev (12B) and SANA-1.5 (4.8B) on ClipScore, aesthetics and human preference. Adaptive regularisation bought more than 6&times; the parameters would have.</p><div class="fptr">§03 &middot; text-to-image</div></div>
<div class="fcard"><div class="fhead"><div class="fno">5</div><div class="fclaim">The only method that raised reward without spending diversity</div></div><p class="fev">Every competing method trades one for the other. ADRPO finishes at <b>5.13</b> diversity against the base model's 5.08 — higher reward <i>and</i> higher diversity than the model it started from.</p><div class="fptr">§04 &middot; the Pareto front</div></div>
<div class="fcard"><div class="fhead"><div class="fno">6</div><div class="fclaim">It transfers to LLMs and to audio</div></div><p class="fev">On Qwen3, ADRPO escapes a local optimum by deliberately raising entropy and converges at <b>5&times;</b> GRPO's reward. On MMAU a 7B model reaches <b>76.0</b>, past Gemini 2.5 Pro and GPT-4o Audio.</p><div class="fptr">§05 &middot; §06</div></div>
</div>

<p class="snum">01 &mdash; The dilemma</p>

<h2>The coefficient that has to be two things at once</h2>

<p>Every mainstream RL fine-tuning objective &mdash; PPO, GRPO, DPO, and W2-regularised flow matching &mdash; carries a divergence penalty scaled by a fixed &beta;. That single number is asked to do two opposing jobs simultaneously: keep the policy near the pre-trained model so it does not forget or collapse, and get out of the way so the policy can actually improve.</p>

<p>The bind is that the right answer differs <em>per sample</em>. A generation the reward model scores highly is a direction worth committing to; holding it back is pure loss. A poor generation is exactly where you want the reference model&rsquo;s pull to be strongest. A constant cannot express that, so practitioners tune &beta; to a compromise that is wrong for both cases.</p>

<div class="knobs bleed">
<div class="knob"><div class="kcomp">&beta; too high</div><div class="kttl">Capabilities preserved, nothing learned</div><div class="kbody">The penalty dominates. The policy stays close to the reference model, diversity survives, and reward barely moves. Safe and useless.</div></div>
<div class="knob"><div class="kcomp">&beta; too low</div><div class="kttl">Reward climbs, the model narrows</div><div class="kbody">Constraint effectively removed. Reward optimisation runs unchecked into catastrophic forgetting, <b>mode collapse</b>, or reward hacking — template-like generations that score well and look identical.</div></div>
</div>

<p class="snum">02 &mdash; The fix</p>

<h2>Subtract the advantage</h2>

<p>ADRPO replaces the constant with <b>&beta; = &beta;<sub>0</sub> &minus; A</b>, where <i>A</i> is the advantage estimate already being computed for the policy gradient. Nothing is added to the model, no second network is trained, and the objective stays a drop-in for existing methods. What changes is that the constraint now varies inversely with sample quality.</p>

<div class="knobs bleed">
<div class="knob"><div class="kcomp">mechanism</div><div class="kttl">Exploitation where the signal is good</div><div class="kbody">High advantage means low &beta;: the divergence penalty shrinks and the policy is free to commit to a direction the reward model already endorses.</div></div>
<div class="knob"><div class="kcomp">mechanism</div><div class="kttl">Exploration where it is not</div><div class="kbody">Low or negative advantage means high &beta;: the penalty grows, pulling the update back toward the reference policy and preserving what the pre-trained model knew.</div></div>
<div class="knob"><div class="kcomp">for flow matching</div><div class="kttl">Advantage-weighted, not reward-weighted</div><div class="kbody">Reward weights are non-negative, so a bad sample can only be down-weighted. Weighting by advantage lets the sign invert, so <b>negative-advantage samples are actively pushed away from</b> rather than quietly ignored — and average samples, where A &asymp; 0, cost almost no gradient at all.</div></div>
<div class="knob"><div class="kcomp">stability</div><div class="kttl">Clipped, and cheap</div><div class="kbody">Advantages are clipped to [A<sub>min</sub>, A<sub>max</sub>] so the coefficient cannot run away, and training uses LoRA. The overhead over the base method is negligible.</div></div>
</div>

<div class="kick">The exploration&ndash;exploitation trade-off stops being a hyperparameter you guess before training, and becomes something the run resolves <b>per sample, continuously</b>.</div>

<p class="snum">03 &mdash; Text-to-image</p>

<h2>A 2B model past a 12B one</h2>

<p>ADRPO was applied to SD3 (2B parameters) on DrawBench prompts with CLIP score as the reward, against offline DPO, reward-ranked RAFT, fixed-&beta; ORW-CFM-W2, and two much larger models that were never RL-tuned at all. It leads on task metrics, image quality and human preference at the same time.</p>

<div class="panel bleed"><div class="phd"><span class="ttl">Text-to-image &mdash; alignment, quality, preference</span><span class="meta">SD3 backbone &middot; DrawBench &middot; mean of 3 seeds &middot; higher is better</span></div>

<div class="brow"><div class="bl">SD3 + ADRPO<i>ours &middot; 2B</i></div><div class="btrack"><div class="bwrap"><span class="bfill aft" style="width:89.4%"></span><span class="bval on">32.97 ClipScore</span></div><div class="bwrap"><span class="bfill aft" style="width:89.5%"></span><span class="bval on">6.27 Aesthetic</span></div><div class="bwrap"><span class="bfill aft" style="width:90.5%"></span><span class="bval on">22.78 PicScore</span></div></div></div>

<div class="brow"><div class="bl">SANA-1.5<i>4.8B, no RL</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:73.6%"></span><span class="bval">32.18 ClipScore</span></div><div class="bwrap"><span class="bfill" style="width:72.3%"></span><span class="bval">5.89 Aesthetic</span></div><div class="bwrap"><span class="bfill" style="width:69.3%"></span><span class="bval">21.85 PicScore</span></div></div></div>

<div class="brow"><div class="bl">FLUX.1-Dev<i>12B, no RL</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:64.4%"></span><span class="bval">31.72 ClipScore</span></div><div class="bwrap"><span class="bfill" style="width:75.0%"></span><span class="bval">5.95 Aesthetic</span></div><div class="bwrap"><span class="bfill" style="width:68.9%"></span><span class="bval">21.83 PicScore</span></div></div></div>

<div class="brow"><div class="bl">SD3 + ORW-CFM-W2<i>fixed W2 regularisation</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:58.4%"></span><span class="bval">31.42 ClipScore</span></div><div class="bwrap"><span class="bfill" style="width:45.0%"></span><span class="bval">5.29 Aesthetic</span></div><div class="bwrap"><span class="bfill" style="width:49.3%"></span><span class="bval">20.97 PicScore</span></div></div></div>

<div class="brow"><div class="bl">SD3 + DPO<i>offline preference</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:56.0%"></span><span class="bval">31.30 ClipScore</span></div><div class="bwrap"><span class="bfill" style="width:69.1%"></span><span class="bval">5.82 Aesthetic</span></div><div class="bwrap"><span class="bfill" style="width:57.0%"></span><span class="bval">21.31 PicScore</span></div></div></div>

<div class="brow"><div class="bl">SD3 + RAFT<i>reward-ranked FT</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:17.0%"></span><span class="bval">29.35 ClipScore</span></div><div class="bwrap"><span class="bfill" style="width:10.9%"></span><span class="bval">4.54 Aesthetic</span></div><div class="bwrap"><span class="bfill" style="width:9.3%"></span><span class="bval">19.21 PicScore</span></div></div></div>

<div class="brow"><div class="bl">SD3<i>2B base model</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:15.4%"></span><span class="bval">29.27 ClipScore</span></div><div class="bwrap"><span class="bfill" style="width:55.9%"></span><span class="bval">5.53 Aesthetic</span></div><div class="bwrap"><span class="bfill" style="width:45.7%"></span><span class="bval">20.81 PicScore</span></div></div></div>

<div class="legend"><span><i class="sw aft"></i>SD3 + ADRPO (2B, ours)</span><span><i class="sw"></i>baselines and larger models</span><span>three bars per model: ClipScore &middot; Aesthetic &middot; PicScore</span></div></div>

<p class="snum">04 &mdash; The Pareto front</p>

<h2>Reward went up. Diversity did not go down.</h2>

<p>This is the result that is hard to get by tuning a constant. Reward-ranked fine-tuning reaches decent alignment by flattening the output distribution &mdash; its diversity falls from 5.08 to <b>1.85</b>, a textbook collapse. Fixed-&beta; W2 regularisation is gentler but still pays 3.86. ADRPO finishes at <b>5.13</b>, <em>above</em> the base model it started from, while posting the highest alignment score in the table.</p>

<figure class="fig bleed"><div class="figscroll">

<svg viewBox="0 0 940 470" role="img" aria-label="Alignment against diversity for seven text-to-image systems. ADRPO is alone in the upper right: it is the only fine-tuning method that ends with more diversity than the base model it started from.">
<defs><style>.ax{stroke:var(--rule);stroke-width:1.2}.gr{stroke:var(--rule);stroke-width:1;stroke-dasharray:3 4;opacity:.65}.tk{font-family:var(--mono);font-size:10.5px;fill:var(--muted)}.al{font-family:var(--sans);font-size:12px;font-weight:700;fill:var(--body)}.pl{font-family:var(--sans);font-size:12px;font-weight:600;fill:var(--body)}.ps{font-family:var(--sans);font-size:10.5px;fill:var(--muted)}.hi{font-family:var(--sans);font-size:13.5px;font-weight:800;fill:var(--link)}.zn{font-family:var(--sans);font-size:11px;font-weight:700;fill:var(--muted);letter-spacing:.04em}</style></defs>
<line class="gr" x1="182.2" y1="400" x2="182.2" y2="56"/>
<line class="gr" x1="108" y1="99.6" x2="866" y2="99.6"/>
<rect x="182.2" y="56" width="683.8" height="43.6" fill="var(--link)" opacity=".05"/>
<text class="zn" x="194.2" y="76" fill="var(--link)">better on BOTH axes than the base model</text>
<line class="ax" x1="108" y1="400" x2="866" y2="400"/>
<line class="ax" x1="108" y1="400" x2="108" y2="56"/>
<line class="ax" x1="139.6" y1="400" x2="139.6" y2="405"/>
<text class="tk" x="139.6" y="419" text-anchor="middle">29</text>
<line class="ax" x1="297.5" y1="400" x2="297.5" y2="405"/>
<text class="tk" x="297.5" y="419" text-anchor="middle">30</text>
<line class="ax" x1="455.4" y1="400" x2="455.4" y2="405"/>
<text class="tk" x="455.4" y="419" text-anchor="middle">31</text>
<line class="ax" x1="613.3" y1="400" x2="613.3" y2="405"/>
<text class="tk" x="613.3" y="419" text-anchor="middle">32</text>
<line class="ax" x1="771.2" y1="400" x2="771.2" y2="405"/>
<text class="tk" x="771.2" y="419" text-anchor="middle">33</text>
<line class="ax" x1="103" y1="358.0" x2="108" y2="358.0"/>
<text class="tk" x="98" y="362.0" text-anchor="end">2</text>
<line class="ax" x1="103" y1="274.1" x2="108" y2="274.1"/>
<text class="tk" x="98" y="278.1" text-anchor="end">3</text>
<line class="ax" x1="103" y1="190.2" x2="108" y2="190.2"/>
<text class="tk" x="98" y="194.2" text-anchor="end">4</text>
<line class="ax" x1="103" y1="106.3" x2="108" y2="106.3"/>
<text class="tk" x="98" y="110.3" text-anchor="end">5</text>
<text class="al" x="487" y="440" text-anchor="middle">ClipScore &mdash; prompt alignment &rarr;</text>
<text class="al" x="26" y="228" text-anchor="middle" transform="rotate(-90 26 228)">ClipDiversity &rarr;</text>
<circle cx="766.5" cy="95.4" r="16" fill="var(--link)" opacity=".14"/>
<circle cx="766.5" cy="95.4" r="8.5" fill="var(--link)"/>
<text class="hi" x="748.5" y="79.4" text-anchor="end">SD3 + ADRPO</text>
<text class="ps" x="748.5" y="93.4" text-anchor="end">ours &#183; 2B &#183; 32.97 / 5.13</text>
<circle cx="641.8" cy="164.2" r="5.5" fill="var(--muted)" opacity=".62"/>
<text class="pl" x="651.8" y="151.2" text-anchor="start">SANA-1.5</text>
<circle cx="569.1" cy="165.9" r="5.5" fill="var(--muted)" opacity=".62"/>
<text class="pl" x="559.1" y="152.9" text-anchor="end">FLUX.1-Dev</text>
<circle cx="521.7" cy="202.0" r="5.5" fill="var(--muted)" opacity=".62"/>
<text class="pl" x="510.7" y="222.0" text-anchor="end">SD3 + ORW-CFM-W2</text>
<circle cx="502.8" cy="124.8" r="5.5" fill="var(--muted)" opacity=".62"/>
<text class="pl" x="490.8" y="110.8" text-anchor="end">SD3 + DPO</text>
<circle cx="194.9" cy="370.6" r="5.5" fill="var(--muted)" opacity=".62"/>
<text class="pl" x="207.9" y="374.6" text-anchor="start">SD3 + RAFT</text>
<text class="ps" x="207.9" y="388.6" text-anchor="start">reward-ranked FT &#183; 29.35 / 1.85</text>
<circle cx="182.2" cy="99.6" r="5.5" fill="var(--muted)" opacity=".62"/>
<text class="pl" x="195.2" y="83.6" text-anchor="start">SD3</text>
<text class="ps" x="195.2" y="97.6" text-anchor="start">2B base model &#183; 29.27 / 5.08</text>
</svg>

</div><figcaption class="cap"><b>Every point is a row of Table 1.</b> Horizontal: prompt alignment. Vertical: generation diversity. The dashed lines mark the un-tuned SD3 base model, so the tinted quadrant is the region where a method improved alignment <em>without</em> paying for it in diversity. Only one point is in it. RAFT shows the failure mode most clearly &mdash; it buys a little alignment by collapsing diversity from 5.08 to 1.85. The unlabelled middle cluster, left to right: DPO 31.30 / 4.78, ORW-CFM-W2 31.42 / 3.86, FLUX.1-Dev 31.72 / 4.29, SANA-1.5 32.18 / 4.31.</figcaption></figure>

<p class="snum">05 &mdash; Language models</p>

<h2>An emergent willingness to explore</h2>

<p>The same objective drops into GRPO for LLM fine-tuning by making the KL coefficient advantage-dependent. Tracked in reward&ndash;entropy space on Qwen2 (0.5B) and Qwen3 (0.6B) against RM-Gemma-2B, the two methods take visibly different paths. GRPO holds high entropy throughout and moves sideways &mdash; lots of exploration, little reward found. ADRPO first tightens into a low-entropy region, then <em>deliberately raises entropy again</em> to break out of the local optimum it landed in, and converges at <b>5&times; GRPO&rsquo;s final reward</b>.</p>

<p>Nobody designed that behaviour. It falls out of the coefficient: once a region stops producing advantage, regularisation rises, the policy loosens, and exploration resumes on its own. The same mechanism explains why GRPO&rsquo;s later checkpoints often score <em>worse</em> than its earlier ones while ADRPO improves monotonically &mdash; no early stopping required.</p>

<p class="snum">06 &mdash; Audio reasoning</p>

<h2>And it holds in a third modality</h2>

<p>Continuous flow matching and discrete token generation are different enough that a shared mechanism is worth testing on a third case. Qwen2.5-Omni-7B was fine-tuned on AVQA with verifiable rewards and evaluated on MMAU.</p>

<div class="panel bleed"><div class="phd"><span class="ttl">MMAU &mdash; multi-modal audio reasoning</span><span class="meta">accuracy % &middot; sound / music / speech / total</span></div>

<div class="brow"><div class="bl">ADRPO<i>ours &middot; Qwen2.5-Omni-7B</i></div><div class="btrack"><div class="bwrap"><span class="bfill aft" style="width:87.9%"></span><span class="bval on">81.98 sound</span></div><div class="bwrap"><span class="bfill aft" style="width:40.2%"></span><span class="bval on">70.06 music</span></div><div class="bwrap"><span class="bfill aft" style="width:63.9%"></span><span class="bval on">75.98 speech</span></div><div class="bwrap"><span class="bfill aft" style="width:64.0%"></span><span class="bval on"><b>76.0 total</b></span></div></div></div>

<div class="brow"><div class="bl">GRPO<i>fixed &beta; = 0.04</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:68.7%"></span><span class="bval">77.18 sound</span></div><div class="bwrap"><span class="bfill" style="width:42.6%"></span><span class="bval">70.66 music</span></div><div class="bwrap"><span class="bfill" style="width:59.1%"></span><span class="bval">74.77 speech</span></div><div class="bwrap"><span class="bfill" style="width:56.8%"></span><span class="bval"><b>74.2 total</b></span></div></div></div>

<div class="brow"><div class="bl">Gemini 2.5 Pro<i>proprietary</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:60.3%"></span><span class="bval">75.08 sound</span></div><div class="bwrap"><span class="bfill" style="width:33.0%"></span><span class="bval">68.26 music</span></div><div class="bwrap"><span class="bfill" style="width:45.9%"></span><span class="bval">71.47 speech</span></div><div class="bwrap"><span class="bfill" style="width:46.4%"></span><span class="bval"><b>71.6 total</b></span></div></div></div>

<div class="brow"><div class="bl">Qwen2.5-Omni-7B<i>base model</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:49.5%"></span><span class="bval">72.37 sound</span></div><div class="bwrap"><span class="bfill" style="width:17.5%"></span><span class="bval">64.37 music</span></div><div class="bwrap"><span class="bfill" style="width:36.3%"></span><span class="bval">69.07 speech</span></div><div class="bwrap"><span class="bfill" style="width:34.4%"></span><span class="bval"><b>68.6 total</b></span></div></div></div>

<div class="brow"><div class="bl">GPT-4o Audio<i>proprietary</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:18.2%"></span><span class="bval">64.56 sound</span></div><div class="bwrap"><span class="bfill" style="width:1.5%"></span><span class="bval">56.29 music</span></div><div class="bwrap"><span class="bfill" style="width:26.7%"></span><span class="bval">66.67 speech</span></div><div class="bwrap"><span class="bfill" style="width:10.0%"></span><span class="bval"><b>62.5 total</b></span></div></div></div>

<div class="legend"><span><i class="sw aft"></i>ADRPO (7B)</span><span><i class="sw"></i>GRPO, base model, proprietary systems</span></div></div>

<div class="stats bleed"><div class="stat"><div class="n">2B <small>&gt; 12B</small></div><div class="l">SD3 + ADRPO outscores FLUX.1-Dev on alignment, aesthetics and human preference</div></div><div class="stat"><div class="n">5.13</div><div class="l">final diversity against the base model&rsquo;s 5.08 — the only method that gained on both axes</div></div><div class="stat"><div class="n">5&times;</div><div class="l">GRPO&rsquo;s final reward on Qwen3 LLM fine-tuning</div></div><div class="stat"><div class="n">76.0<small>%</small></div><div class="l">MMAU total, above Gemini 2.5 Pro (71.6) and GPT-4o Audio (62.5)</div></div></div>

<p class="snum">07 &mdash; Robustness</p>

<h2>The one hyperparameter it adds barely matters</h2>

<p>Adaptive regularisation introduces a clipping range for the advantage. If performance were delicately balanced on it, the method would have traded one tuning problem for another. Sweeping it over a 4&times; span moves the total by less than half a point, and every setting still beats fixed-&beta; GRPO.</p>

<div class="panel bleed"><div class="phd"><span class="ttl">Advantage-clipping ablation</span><span class="meta">MMAU total accuracy % &middot; variation across settings under 0.4 points</span></div>

<div class="brow"><div class="bl">0.5 &times; &beta;<sub>0</sub><i>&plusmn;0.02</i></div><div class="btrack"><div class="bwrap"><span class="bfill aft" style="width:83.9%"></span><span class="bval on">76.1</span></div></div></div>

<div class="brow"><div class="bl">1 &times; &beta;<sub>0</sub><i>&plusmn;0.04 &middot; recommended</i></div><div class="btrack"><div class="bwrap"><span class="bfill aft" style="width:80.6%"></span><span class="bval on">76.0</span></div></div></div>

<div class="brow"><div class="bl">2 &times; &beta;<sub>0</sub><i>&plusmn;0.08</i></div><div class="btrack"><div class="bwrap"><span class="bfill aft" style="width:71.0%"></span><span class="bval on">75.7</span></div></div></div>

<div class="brow"><div class="bl">GRPO<i>fixed &beta;, no adaptation</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:22.6%"></span><span class="bval">74.2</span></div></div></div>

<div class="legend"><span><i class="sw aft"></i>ADRPO, any clipping range</span><span><i class="sw"></i>fixed-&beta; GRPO baseline</span></div></div>

<p class="snum">08 &mdash; What it means</p>

<h2>The trade-off was never the problem. Treating it as constant was.</h2>

<p>Exploration versus exploitation is usually framed as something you resolve before training by picking a coefficient, and live with afterwards. The result here is that the information needed to resolve it properly is already sitting in the training loop: the advantage estimate says, for this particular sample, whether the policy has found something worth committing to. Subtracting it turns a global compromise into a local decision.</p>

<p>What makes the result more than a tuning trick is the range it survives. The same one-term change holds across continuous flow matching with a Wasserstein penalty, discrete LLM generation with a KL penalty, and multi-modal audio reasoning — three architectures, three divergence measures, one subtraction, and a 2B model that outperforms a 12B one.</p>

<div class="chips"><span class="chip on">NeurIPS 2025</span><span class="chip">SD3 &middot; Qwen2 &middot; Qwen3 &middot; Qwen2.5-Omni</span><span class="chip">flow matching &amp; LLMs</span><span class="chip">W2 &amp; KL divergence</span><span class="chip">UIUC</span></div>

</div>
