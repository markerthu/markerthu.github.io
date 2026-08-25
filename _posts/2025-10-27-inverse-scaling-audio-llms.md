---
layout: post
title: 'Test-Time Inverse Scaling in Audio LLMs'
date: 2025-10-27
permalink: /posts/2025/10/inverse-scaling-audio-llms/
tags:
  - reinforcement learning
  - audio LLMs
  - reasoning
  - test-time scaling
excerpt: "Ask an Audio LLM to think before it answers and it gets worse — and worse the longer it thinks. The culprit is not reasoning; it is reasoning nobody trained. Rewarding the process flips the sign."
header:
  og_image: "/projects/cesar/images/teaser.png"
---

{% include post-editorial.html %}

<div class="ed" markdown="0">

<p class="lede">Chain-of-thought is the reflex answer for making a model smarter. In Audio LLMs it backfires: tell the model to think first and it gets <em>worse</em>, and the longer it thinks the worse it gets. This note is about why that happens, why it is not an argument against reasoning, and what changes when you supervise the reasoning process instead of only the final answer.</p>

<figure class="fig bleed"><div class="figscroll">

<svg viewBox="0 0 940 322" role="img" aria-label="MMAU Test-mini accuracy when each model answers directly versus when it reasons first. The base Qwen2.5-Omni-7B loses 3.40 points by reasoning; CESAR gains exactly 3.40.">
<defs><style>.gl{stroke:var(--rule);stroke-width:1}.gt{font-family:var(--sans);font-size:11.5px;fill:var(--muted)}.hd{font-family:var(--sans);font-size:12px;font-weight:700;fill:var(--body);letter-spacing:.02em}.nm{font-family:var(--sans);font-size:13px;font-weight:700}.sb{font-family:var(--sans);font-size:11px;fill:var(--muted)}.vl{font-family:var(--mono);font-size:11.5px;fill:var(--muted)}.dl{font-family:var(--mono);font-size:12px;font-weight:700}</style></defs>
<line class="gl" x1="250" y1="217.4" x2="660" y2="217.4"/>
<text class="gt" x="192" y="221.4" text-anchor="end">65</text>
<line class="gl" x1="250" y1="159.8" x2="660" y2="159.8"/>
<text class="gt" x="192" y="163.8" text-anchor="end">70</text>
<line class="gl" x1="250" y1="102.1" x2="660" y2="102.1"/>
<text class="gt" x="192" y="106.1" text-anchor="end">75</text>
<text class="hd" x="250" y="26" text-anchor="middle">answer directly</text>
<text class="hd" x="660" y="26" text-anchor="middle">reason first</text>
<line class="gl" x1="204" y1="36" x2="706" y2="36"/>
<text class="gt" x="192" y="62.9" text-anchor="end" font-weight="700">MMAU</text>
<text class="gt" x="192" y="76.9" text-anchor="end">accuracy %</text>
<g opacity="1">
<line x1="250" y1="175.9" x2="660" y2="215.1" stroke="#c0504a" stroke-width="2.8" stroke-linecap="round"/>
<circle cx="250" cy="175.9" r="4.8" fill="#c0504a"/>
<circle cx="660" cy="215.1" r="4.8" fill="#c0504a"/>
<text class="vl" x="236" y="179.9" text-anchor="end">68.60</text>
<text class="nm" x="686" y="215.1" fill="#c0504a">Qwen2.5-Omni-7B</text>
<text class="dl" x="812" y="215.1" fill="#c0504a">−3.40</text>
<text class="sb" x="686" y="230.1">base model &#183; 65.20</text>
</g>
<g opacity=".5">
<line x1="250" y1="107.9" x2="660" y2="106.7" stroke="var(--muted)" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="250" cy="107.9" r="4.8" fill="var(--muted)"/>
<circle cx="660" cy="106.7" r="4.8" fill="var(--muted)"/>
<text class="vl" x="236" y="126.1" text-anchor="end">74.50</text>
<path d="M 667 106.7 L 675 153.9 L 682 153.9" fill="none" stroke="var(--muted)" stroke-width="1" opacity=".45"/>
<text class="nm" x="686" y="157.9" fill="var(--muted)">Ke-Omni-R</text>
<text class="dl" x="766" y="157.9" fill="var(--muted)">+0.10</text>
<text class="sb" x="686" y="172.9">outcome-only RL &#183; 74.60</text>
</g>
<g opacity=".5">
<line x1="250" y1="102.1" x2="660" y2="84.8" stroke="var(--muted)" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="250" cy="102.1" r="4.8" fill="var(--muted)"/>
<circle cx="660" cy="84.8" r="4.8" fill="var(--muted)"/>
<text class="vl" x="236" y="106.1" text-anchor="end">75.00</text>
<path d="M 667 84.8 L 675 113.9 L 682 113.9" fill="none" stroke="var(--muted)" stroke-width="1" opacity=".45"/>
<text class="nm" x="686" y="117.9" fill="var(--muted)">CESAR w/o OP</text>
<text class="dl" x="789" y="117.9" fill="var(--muted)">+1.50</text>
<text class="sb" x="686" y="132.9">ours &#183; 76.50</text>
</g>
<g opacity="1">
<line x1="250" y1="117.1" x2="660" y2="77.9" stroke="var(--link)" stroke-width="3.4" stroke-linecap="round"/>
<circle cx="250" cy="117.1" r="4.8" fill="var(--link)"/>
<circle cx="660" cy="77.9" r="4.8" fill="var(--link)"/>
<text class="vl" x="236" y="146.1" text-anchor="end">73.70</text>
<text class="nm" x="686" y="77.9" fill="var(--link)">CESAR</text>
<text class="dl" x="736" y="77.9" fill="var(--link)">+3.40</text>
<text class="sb" x="686" y="92.9">ours &#183; 77.10</text>
</g>
</svg>

</div><figcaption class="cap"><b>The same test, the same model sizes, one instruction apart.</b> Left: the model answers directly. Right: it is asked to reason first. The base model pays 3.40 points for thinking. After training on the reasoning process, CESAR earns 3.40 points for it — the identical margin, with the sign reversed. Numbers are MMAU Test-mini accuracy from Table 1 of the paper.</figcaption></figure>

<p class="snum">The short version</p>

<h2>Six things this paper pinned down</h2>

<p class="lede">Each is stated with the number that carries it, and shown in full further down.</p>

<div class="fgrid bleed">
<div class="fcard"><div class="fhead"><div class="fno">1</div><div class="fclaim">Reasoning made audio models worse</div></div><p class="fev">Ask Qwen2.5-Omni-7B to think before answering and MMAU accuracy falls from <b>68.60</b> to <b>65.20</b>. Longer chains kept making it worse. We name this <b>test-time inverse scaling</b>.</p><div class="fptr">§01 &middot; the paradox</div></div>
<div class="fcard"><div class="fhead"><div class="fno">2</div><div class="fclaim">The culprit is untrained reasoning, not reasoning</div></div><p class="fev">Models never taught <i>how</i> to reason produce hallucinatory, inconsistent chains whose errors compound. The capacity is there; the supervision was not.</p><div class="fptr">§02 &middot; the diagnosis</div></div>
<div class="fcard"><div class="fhead"><div class="fno">3</div><div class="fclaim">So reward the process, not just the answer</div></div><p class="fev">Outcome-only RLVR scores the final token and ignores the road to it. CESAR adds <b>five process rewards</b> — consistency, structure, logic, domain grounding, and a penalty on overthinking.</p><div class="fptr">§03 &middot; the fix</div></div>
<div class="fcard"><div class="fhead"><div class="fno">4</div><div class="fclaim">The sign flips</div></div><p class="fev">Under the same test, CESAR gains <b>+3.40</b> from reasoning — exactly the margin the base model lost. Reasoning stops being a liability and becomes the source of the gain.</p><div class="fptr">§04 &middot; results</div></div>
<div class="fcard"><div class="fhead"><div class="fno">5</div><div class="fclaim">A 7B model passes Gemini 2.5 Pro and GPT-4o Audio</div></div><p class="fev"><b>77.10</b> on MMAU Test-mini against 71.60 and 62.50, and the top-scoring 7B model on the harder MMAU-Pro at <b>56.4</b>.</p><div class="fptr">§04 &middot; results</div></div>
<div class="fcard"><div class="fhead"><div class="fno">6</div><div class="fclaim">Better reasoning also sharpened perception</div></div><p class="fev">On MMSU, reasoning reaches <b>81.07</b> against a human 86.77 — and <i>perception</i> rose too, though it stays far behind humans. That gap is the real bottleneck.</p><div class="fptr">§06 &middot; the ceiling</div></div>
</div>

<p class="snum">01 &mdash; The paradox</p>

<h2>More thinking, less accuracy</h2>

<p>Text LLMs made chain-of-thought look like a free lunch: o1 and DeepSeek-R1 turned longer deliberation into better answers. Carrying the same prompt into audio produces the opposite. Across the leading open Audio LLMs, switching reasoning on costs accuracy, and sweeping the maximum thinking length makes the loss deepen rather than recover. We call it <b>test-time inverse scaling</b>, and it is the first thing a process-level view has to explain.</p>

<div class="panel bleed"><div class="phd"><span class="ttl">MMAU Test-mini &mdash; total accuracy</span><span class="meta">1k expertly annotated questions &middot; 27 reasoning skills &middot; higher is better</span></div>

<div class="brow"><div class="bl">CESAR<i>ours · with reasoning</i></div><div class="btrack"><div class="bwrap"><span class="bfill aft" style="width:86.8%"></span><span class="bval on">77.10</span></div></div></div>

<div class="brow"><div class="bl">CESAR w/o OP<i>ours · no overthinking penalty</i></div><div class="btrack"><div class="bwrap"><span class="bfill aft" style="width:84.1%"></span><span class="bval on">76.50</span></div></div></div>

<div class="brow"><div class="bl">Ke-Omni-R<i>outcome-only RL</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:75.5%"></span><span class="bval">74.60</span></div></div></div>

<div class="brow"><div class="bl">Gemini 2.5 Flash<i>proprietary</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:62.7%"></span><span class="bval">71.80</span></div></div></div>

<div class="brow"><div class="bl">Gemini 2.5 Pro<i>proprietary</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:61.8%"></span><span class="bval">71.60</span></div></div></div>

<div class="brow"><div class="bl">Qwen2.5-Omni-7B<i>base, answering directly</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:48.2%"></span><span class="bval">68.60</span></div></div></div>

<div class="brow"><div class="bl">GPT-4o Audio<i>proprietary</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:20.5%"></span><span class="bval">62.50</span></div></div></div>

<div class="legend"><span><i class="sw aft"></i>CESAR (7B, ours)</span><span><i class="sw"></i>baselines and proprietary systems</span></div></div>

<p class="snum">02 &mdash; The diagnosis</p>

<h2>The chains were never trained, only permitted</h2>

<p>It would be easy to read the curve above as evidence that audio reasoning is a dead end. Reading the chains themselves says otherwise. Supervised fine-tuning on CoT data teaches a model to <em>imitate the shape</em> of reasoning; outcome-only RL rewards it only for landing on the right option. Neither ever looks at the middle. Three failure modes follow directly, and all three are visible in the traces.</p>

<div class="knobs bleed">
<div class="knob"><div class="kcomp">failure mode 01</div><div class="kttl">Reasoning appears at random</div><div class="kbody">Nothing in an outcome-only objective makes a reasoning pattern reliable. Useful analysis shows up when it happens to, and cannot be summoned on demand.</div></div>
<div class="knob"><div class="kcomp">failure mode 02</div><div class="kttl">The answer contradicts the reasoning</div><div class="kbody">The most damaging one. A model correctly identifies <b>&ldquo;three rings&rdquo;</b> in its trace and then emits <b>2</b> as its answer. Outcome-only reward is blind to this: it grades only the 2.</div></div>
<div class="knob"><div class="kcomp">failure mode 03</div><div class="kttl">No analytical structure</div><div class="kbody">Without pressure toward elimination, comparison or multi-step deduction, chains drift into free association — and every extra token is another chance to hallucinate.</div></div>
<div class="knob"><div class="kcomp">consequence</div><div class="kttl">Errors compound with length</div><div class="kbody">Put the three together and length becomes a liability: a longer chain is simply more unsupervised steps, each able to derail the next. That <b>is</b> the inverse-scaling curve.</div></div>
</div>

<div class="kick">If the deficit were reasoning <b>capacity</b>, the fix would be a bigger model. It is reasoning <b>supervision</b> — and that is something a reward can carry.</div>

<p class="snum">03 &mdash; The fix</p>

<h2>Grade the road, not just the destination</h2>

<p>CESAR keeps GRPO and keeps verifiable correctness, then stops treating the reasoning trace as a black box between prompt and answer. Five terms make up the total reward. The first two are the conventional verifiable pair; the last three are the ones that make reasoning a trainable skill rather than an emergent accident.</p>

<div class="knobs bleed">
<div class="knob"><div class="kcomp">verifiable &middot; weight 5.0</div><div class="kttl">Answer correctness</div><div class="kbody">The anchor. A binary check that the chosen option is right, weighted <b>5&times;</b> everything else so process credit can never buy a wrong answer.</div></div>
<div class="knob"><div class="kcomp">verifiable &middot; weight 1.0</div><div class="kttl">Format compliance</div><div class="kbody">Output must carry a real <b>&lt;think&gt;</b> block and a real <b>&lt;answer&gt;</b> block. Without it a model simply routes around the reasoning it is being trained on.</div></div>
<div class="knob"><div class="kcomp">process &middot; weight 1.0</div><div class="kttl">Reasoning&ndash;answer consistency</div><div class="kbody">Concept overlap measured twice: thought against answer, and thought against the question. This is the term that kills the classic failure where a model reasons its way to &ldquo;three rings&rdquo; and then outputs &ldquo;2&rdquo;.</div></div>
<div class="knob"><div class="kcomp">process &middot; weight 1.0</div><div class="kttl">Structure, logic, domain</div><div class="kbody">One reward with three parts: analytical <b>patterns</b> (sequential organisation, comparison, elimination), <b>logical</b> markers (deduction, hypothesis, evidence), and <b>audio-domain</b> vocabulary — acoustic, musical, phonetic terms.</div></div>
<div class="knob"><div class="kcomp">process &middot; weight 1.0</div><div class="kttl">Overthinking penalty</div><div class="kbody">A linear cost on chain length, <b>1 &minus; |t| / 256</b>. Rambling is where hallucinations accumulate; this is what buys the short, decisive chains.</div></div>
</div>

<p>Correctness is weighted five times the rest, which matters more than it looks: the process terms can shape <em>how</em> the model gets there, but can never pay for getting there wrong. Training is GRPO on Qwen2.5-Omni-7B, 8 sampled responses per example, on AVQA augmented with answer-invariant rephrasings so the model has to learn the reasoning rather than the wording.</p>

<p class="snum">04 &mdash; What changed</p>

<h2>The sign flips, and a 7B model clears the proprietary field</h2>

<p>The headline is not that accuracy went up. It is that the <em>relationship between thinking and accuracy</em> inverted. Every model below is measured twice under identical conditions — once answering directly, once reasoning first.</p>

<div class="panel bleed"><div class="phd"><span class="ttl">What reasoning is worth, per model</span><span class="meta">MMAU Test-mini &middot; direct answer &rarr; reason first</span></div>

<div class="brow"><div class="bl">Qwen2.5-Omni-7B<i>base model</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:48.2%"></span><span class="bval">68.60</span></div><div class="bwrap"><span class="bfill neg" style="width:32.7%"></span><span class="bval">65.20  (−3.40)</span></div></div></div>

<div class="brow"><div class="bl">Ke-Omni-R<i>outcome-only RL</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:75.0%"></span><span class="bval">74.50</span></div><div class="bwrap"><span class="bfill" style="width:75.5%"></span><span class="bval">74.60  (+0.10)</span></div></div></div>

<div class="brow"><div class="bl">CESAR w/o OP<i>ours</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:77.3%"></span><span class="bval">75.00</span></div><div class="bwrap"><span class="bfill aft" style="width:84.1%"></span><span class="bval on">76.50  (+1.50)</span></div></div></div>

<div class="brow"><div class="bl">CESAR<i>ours</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:71.4%"></span><span class="bval">73.70</span></div><div class="bwrap"><span class="bfill aft" style="width:86.8%"></span><span class="bval on">77.10  (+3.40)</span></div></div></div>

<div class="legend"><span><i class="sw"></i>answering directly</span><span><i class="sw aft"></i>reasoning first</span></div></div>

<div class="stats bleed"><div class="stat"><div class="n">77.10<small>%</small></div><div class="l">MMAU Test-mini &mdash; SOTA, above Gemini 2.5 Pro (71.60) and GPT-4o Audio (62.50)</div></div><div class="stat"><div class="n">56.4<small>%</small></div><div class="l">MMAU-Pro average &mdash; best of any 7B model on the in-the-wild benchmark</div></div><div class="stat"><div class="n">+3.40</div><div class="l">points gained from reasoning, against &minus;3.40 for the untrained base model</div></div></div>

<p class="snum">05 &mdash; The sweet spot</p>

<h2>Trained reasoning has an optimal depth, and finds it</h2>

<p>Sweeping the maximum thinking length from 0 to 250 tokens separates the two regimes cleanly. Baselines either collapse or wander with no reliable gain. Our variant without the overthinking penalty climbs steadily to a <b>76.50%</b> peak. The full method, penalised for rambling, peaks <em>higher</em> at <b>77.1%</b> using a chain of only about <b>35&ndash;40 tokens</b>. The penalty is not a tax on thinking; it is what teaches the model when to stop.</p>

<figure class="fig bleed"><div class="figscroll">

<svg viewBox="0 0 940 352" role="img" aria-label="Reasoning budget swept from 0 to 250 tokens. CESAR peaks at 77.1 percent using a chain of about 35 to 40 tokens. Without the overthinking penalty it keeps climbing and reaches a lower 76.5 percent peak with a much longer chain. Baselines show no reliable gain anywhere on the axis.">
<defs><style>.ax{stroke:var(--rule);stroke-width:1.2}.tk{font-family:var(--mono);font-size:10.5px;fill:var(--muted)}.axl{font-family:var(--sans);font-size:11.5px;font-weight:700;fill:var(--body)}.rl{font-family:var(--sans);font-size:13px;font-weight:800}.rs{font-family:var(--sans);font-size:11px;fill:var(--muted)}</style><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
<rect x="252.2" y="66" width="14.6" height="230" rx="3" fill="var(--link)" opacity=".13"/>
<line x1="259.5" y1="66" x2="259.5" y2="296" stroke="var(--link)" stroke-width="2.4"/>
<circle cx="259.5" cy="66" r="6" fill="var(--link)"/>
<text class="rl" x="282.8" y="54" fill="var(--link)">CESAR &mdash; 77.1% peak</text>
<text class="rs" x="282.8" y="72">at a chain of about 35&ndash;40 tokens &mdash; the paper&rsquo;s &ldquo;reasoning sweet spot&rdquo;</text>
<line x1="360.2" y1="150" x2="874.2" y2="150" stroke="var(--muted)" stroke-width="2.2" stroke-dasharray="7 6" opacity=".85" marker-end="url(#ar)"/>
<text class="rl" x="360.2" y="136" fill="var(--muted)">CESAR w/o penalty &mdash; 76.5% peak</text>
<text class="rs" x="360.2" y="170">climbs steadily; reported to need a much longer chain for a lower peak</text>
<path d="M 360.2 230 C 529.6 226, 704.8 248, 874.2 254" fill="none" stroke="#c0504a" stroke-width="2.2" opacity=".85"/>
<text class="rl" x="360.2" y="216" fill="#c0504a">Baselines</text>
<text class="rs" x="436.2" y="216">collapse, or wander &mdash; no reliable gain anywhere on this axis</text>
<line class="ax" x1="150" y1="296" x2="880" y2="296"/>
<line class="ax" x1="150.0" y1="296" x2="150.0" y2="301"/>
<text class="tk" x="150.0" y="315" text-anchor="middle">0</text>
<line class="ax" x1="296.0" y1="296" x2="296.0" y2="301"/>
<text class="tk" x="296.0" y="315" text-anchor="middle">50</text>
<line class="ax" x1="442.0" y1="296" x2="442.0" y2="301"/>
<text class="tk" x="442.0" y="315" text-anchor="middle">100</text>
<line class="ax" x1="588.0" y1="296" x2="588.0" y2="301"/>
<text class="tk" x="588.0" y="315" text-anchor="middle">150</text>
<line class="ax" x1="734.0" y1="296" x2="734.0" y2="301"/>
<text class="tk" x="734.0" y="315" text-anchor="middle">200</text>
<line class="ax" x1="880.0" y1="296" x2="880.0" y2="301"/>
<text class="tk" x="880.0" y="315" text-anchor="middle">250</text>
<text class="axl" x="515" y="338" text-anchor="middle">maximum reasoning length swept during evaluation &mdash; tokens</text>
</svg>

</div><figcaption class="cap"><b>Where each method peaks, on the same swept budget.</b> The paper reports the peak accuracy for both CESAR variants and the chain length at which the full method peaks; the position of the penalty-free peak and the exact baseline curves are shown schematically, not measured off a plot.</figcaption></figure>

<div class="kick">Test-time scaling was never unavailable to Audio LLMs. It was unavailable to <b>untrained</b> reasoning — and it returns the moment the process is supervised.</div>

<p class="snum">06 &mdash; The ceiling</p>

<h2>Near-human reasoning, and a perceptual wall behind it</h2>

<p>MMSU separates what a model <em>hears</em> from what it <em>concludes</em>, and the split is stark. CESAR&rsquo;s reasoning lands within six points of expert humans — and beats them outright on semantic reasoning, 88.72 against 82.16. Perception is another story: 48.45 against a human 91.24. Training the process lifted perception too, which is the genuinely surprising part, but the gap that remains is the one that will decide how far audio reasoning can go.</p>

<div class="panel bleed"><div class="phd"><span class="ttl">MMSU &mdash; reasoning vs perception</span><span class="meta">accuracy %, averaged over semantics, phonology and paralinguistics</span></div>

<div class="brow"><div class="bl">Human</div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:86.3%"></span><span class="bval">86.77</span></div><div class="bwrap"><span class="bfill" style="width:93.7%"></span><span class="bval">91.24</span></div></div></div>

<div class="brow"><div class="bl">CESAR<i>ours</i></div><div class="btrack"><div class="bwrap"><span class="bfill aft" style="width:76.8%"></span><span class="bval on">81.07</span></div><div class="bwrap"><span class="bfill aft" style="width:22.4%"></span><span class="bval on">48.45</span></div></div></div>

<div class="brow"><div class="bl">Qwen2.5-Omni-7B<i>base</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:74.7%"></span><span class="bval">79.83</span></div><div class="bwrap"><span class="bfill" style="width:12.5%"></span><span class="bval">42.50</span></div></div></div>

<div class="brow"><div class="bl">Ke-Omni-R<i>outcome-only RL</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:71.8%"></span><span class="bval">78.06</span></div><div class="bwrap"><span class="bfill" style="width:20.2%"></span><span class="bval">47.09</span></div></div></div>

<div class="brow"><div class="bl">Gemini 1.5 Pro<i>proprietary</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:68.6%"></span><span class="bval">76.16</span></div><div class="bwrap"><span class="bfill" style="width:18.9%"></span><span class="bval">46.31</span></div></div></div>

<div class="brow"><div class="bl">GPT-4o Audio<i>proprietary</i></div><div class="btrack"><div class="bwrap"><span class="bfill" style="width:61.6%"></span><span class="bval">71.96</span></div><div class="bwrap"><span class="bfill" style="width:7.8%"></span><span class="bval">39.67</span></div></div></div>

<div class="legend"><span><i class="sw aft"></i>CESAR</span><span><i class="sw"></i>humans, base model, RL baseline, proprietary systems</span><span>upper bar = reasoning &middot; lower bar = perception</span></div></div>

<p class="snum">07 &mdash; The verdict</p>

<h2>Three thousand human judgements, blind</h2>

<p>Accuracy says the answers improved. It cannot say the <em>reasoning</em> did. So the full 1,000-question MMAU Test-mini set was judged by three independent expert annotators — over <b>3,000 individual judgements</b>, blind to which model wrote which trace and blind to the correct answer, scoring only which reasoning process was sounder.</p>

<div class="panel bleed"><div class="phd"><span class="ttl">Human preference, majority vote</span><span class="meta">1,000 questions &middot; 3 annotators each &middot; win / lose / tie</span></div>

<div class="brow"><div class="bl">vs Qwen2.5-Omni-7B<i>base model</i></div><div class="btrack"><div class="bwrap"><span class="bfill aft" style="width:88.6%"></span><span class="bval on">88.60% win</span></div><div class="bwrap"><span class="bfill neg" style="width:6.6%"></span><span class="bval">6.60% lose</span></div><div class="bwrap"><span class="bfill" style="width:4.8%"></span><span class="bval">4.80% tie</span></div></div></div>

<div class="brow"><div class="bl">vs Ke-Omni-R<i>outcome-only RL</i></div><div class="btrack"><div class="bwrap"><span class="bfill aft" style="width:63.1%"></span><span class="bval on">63.10% win</span></div><div class="bwrap"><span class="bfill neg" style="width:14.8%"></span><span class="bval">14.80% lose</span></div><div class="bwrap"><span class="bfill" style="width:22.1%"></span><span class="bval">22.10% tie</span></div></div></div>

<div class="legend"><span><i class="sw aft"></i>CESAR preferred</span><span><i class="sw"></i>tie</span><span>the second row is the one that matters: it beats an RL baseline trained on the same data, outcome-only</span></div></div>

<p class="snum">08 &mdash; What it means</p>

<h2>Reasoning is a skill you supervise, not a switch you flip</h2>

<p>The tidy reading of test-time inverse scaling was that audio is simply not a reasoning-friendly modality. The result here says something narrower and more useful: what fails is reasoning nobody trained. Give the process its own reward — consistency with its own conclusion, analytical structure, domain grounding, and a real cost for rambling — and the same 7B model that lost 3.40 points to thinking gains 3.40, passes systems many times its size, and reasons within touching distance of expert humans.</p>

<p>The wall it runs into next is not cognitive. It is perceptual: 48.45 against 91.24. The next gain in audio reasoning will not come from thinking harder about what the model heard. It will come from hearing it better.</p>

<div class="chips"><span class="chip on">ICLR 2026</span><span class="chip">Qwen2.5-Omni-7B</span><span class="chip">GRPO</span><span class="chip">MMAU &middot; MMAU-Pro &middot; MMSU</span><span class="chip">UIUC &amp; Amazon AGI Foundations</span></div>

</div>
