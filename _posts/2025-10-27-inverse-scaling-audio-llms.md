---
title: 'Test-Time Inverse Scaling: Why Reasoning Hurts Audio LLMs (And How Process Rewards Fix It)'
date: 2025-10-27
permalink: /posts/2025/10/inverse-scaling-audio-llms/
tags:
  - reinforcement learning
  - audio LLMs
  - reasoning
  - test-time scaling
  - ICLR 2026
excerpt: "Chain-of-thought reasoning has transformed text LLMs, but in Audio LLMs it often backfires — longer reasoning chains degrade performance. We term this test-time inverse scaling and trace it to outcome-only reward training. Process rewards resolve it."
---

*This post explains why reasoning hurts Audio LLMs, the phenomenon of test-time inverse scaling, and how process-oriented rewards (CESAR, ICLR 2026) transform reasoning from a liability into a scalable capability.*

---

## The Paradox: More Thinking = Worse Performance?

Chain-of-thought (CoT) reasoning has been transformative for text-based LLMs. Models like OpenAI's o1 and DeepSeek-R1 show that explicit reasoning dramatically improves performance on complex tasks. The recipe seems clear: teach models to "think step by step."

But something unexpected happens when you apply this recipe to Audio LLMs. **More reasoning often makes things worse.**

We observed this systematically across multiple Audio LLM architectures and termed it **test-time inverse scaling**: as you increase the maximum allowed reasoning length \\(L_{\text{max\_think}}\\), performance *decreases*:

$$\frac{\partial P(L_{\text{max\_think}})}{\partial L_{\text{max\_think}}} < 0$$

where \\(P(L)\\) is accuracy at maximum thinking length \\(L\\). This is the opposite of what happens in text LLMs, where more reasoning tokens generally help.

This isn't a subtle effect. Models that achieve 70%+ accuracy with direct answers can drop to 60% or lower when forced to reason. **The reasoning itself is actively harmful.**

---

## What Goes Wrong? Three Failure Modes

We traced test-time inverse scaling to three specific failure modes in how current Audio LLMs reason:

### 1. Hallucinatory Reasoning

When Audio LLMs are trained only to get the right final answer (outcome-only rewards), their reasoning chains are essentially unsupervised. The model learns that *having* a reasoning chain is necessary (format reward), but never learns *what constitutes good reasoning*.

Result: the model generates plausible-sounding but factually incorrect analysis. In audio tasks, this manifests as:
- Describing instruments that aren't present in the audio
- Inventing acoustic properties that contradict the signal
- Confabulating music theory that doesn't apply

As reasoning chains get longer, more hallucinations accumulate and compound.

### 2. Reasoning-Answer Inconsistency

A particularly insidious failure: the model's reasoning says one thing, but the final answer says another. For example:

> *"The audio contains a clear piano melody in the key of C major... therefore the answer is **jazz saxophone**."*

With outcome-only rewards, the model can learn to generate correct answers *despite* wrong reasoning. The reasoning becomes decorative — it looks like thinking but contributes nothing to the answer. When you increase reasoning length, you amplify noise that was already disconnected from the answer.

### 3. Unstructured, Circular Reasoning

Without explicit guidance on *how* to reason, models develop random reasoning patterns:
- Repeating the same observation multiple times
- Circular logic that goes nowhere
- Tangential elaboration unrelated to the question
- No systematic analytical structure

Each additional token of unstructured reasoning is another opportunity for error accumulation.

---

## Why Outcome-Only Rewards Can't Fix This

Current RL-based approaches for Audio LLMs (like R1-AQA and Ke-Omni-R) use outcome-only verifiable rewards:

$$R_{\text{RLVR}}(s_i) = \mathbb{I}[\hat{y}_i = y_i] + \mathbb{I}[\text{ValidFormat}(s_i)]$$

This reward says: "Is the final answer correct?" and "Is the output in the right format?" That's it. The entire reasoning chain \\(t_i\\) is invisible to the reward.

The model gets the same reward whether its reasoning is brilliant or nonsensical, as long as the final answer is right. This creates a fundamental problem: **the model has no gradient signal to improve its reasoning quality.** Good reasoning and bad reasoning are both equally rewarded if they happen to produce the same answer.

Worse, because reasoning adds tokens that increase the chance of format errors or attention degradation, there's actually an implicit *penalty* for longer reasoning. The model learns that shorter reasoning is safer, and when forced to reason longer, it fills space with noise.

---

## CESAR: Rewarding the Process, Not Just the Outcome

CESAR (Consistent, Effective, and Scalable Audio Reasoners) addresses this by introducing **process rewards** — explicit signals that evaluate reasoning quality, not just answer correctness.

### The Multi-Faceted Reward Suite

The total reward decomposes into verifiable and process components:

$$R_{\text{total}}(s_i) = \underbrace{\alpha_1 R_{\text{acc}} + \alpha_2 R_{\text{format}}}_{\text{Verifiable (existing)}} + \underbrace{\alpha_3 R_{\text{consistency}} + \alpha_4 R_{\text{keywords}} + \alpha_5 R_{\text{overthinking}}}_{\text{Process Rewards (new)}}$$

Let's examine each process reward:

### Reasoning Consistency Reward

$$R_{\text{consistency}}(s_i) = \text{Sim}(t_i, \hat{y}_i) + \text{Sim}(t_i, Q_i)$$

This measures semantic alignment in two directions:
- **Reasoning ↔ Answer**: Does the reasoning actually support the conclusion?
- **Reasoning ↔ Question**: Is the reasoning about the right topic?

Implemented via concept overlap:

$$\text{Sim}(x, y) = \frac{\text{ConceptOverlap}(x, y)}{\max(|\text{Concepts}(x)|, |\text{Concepts}(y)|)}$$

This directly combats reasoning-answer inconsistency (Failure Mode 2). The model can no longer get away with generating irrelevant reasoning followed by a lucky correct answer — the reasoning must semantically relate to both the question and the answer.

### Structured Reasoning Keywords

$$R_{\text{keywords}}(s_i) = R_{\text{pattern}} + R_{\text{logic}} + R_{\text{domain}}$$

Three components:

**Analytical patterns** (\\(R_{\text{pattern}}\\)): Rewards structured reasoning architectures — sequential analysis, comparative evaluation, systematic elimination. Detects whether the model uses organized thinking rather than stream-of-consciousness.

**Logical rigor** (\\(R_{\text{logic}}\\)): Rewards linguistic markers of genuine reasoning — causal connectives ("therefore", "because"), hypothetical reasoning ("if...then"), evidential conclusions. Promotes logical progression from premises to conclusions.

**Domain knowledge** (\\(R_{\text{domain}}\\)): Rewards audio-specific expertise — acoustic terminology, musical concepts, speech analysis terms. Prevents the model from using generic reasoning patterns that ignore the audio signal.

### Overthinking Penalty

$$R_{\text{overthinking}}(s_i) = 1 - \frac{|t_i|}{L_{\text{max\_output}}}$$

A linear penalty that increases with reasoning length. This is the critical counterpart to structured reasoning rewards — it prevents the model from gaming the keyword reward by producing verbose, repetitive reasoning. The model must be *concise and effective*.

---

## The "Reasoning Sweet Spot"

With process rewards, something remarkable happens: test-time inverse scaling reverses. Performance now *increases* with reasoning length — up to a point.

CESAR discovers model-specific **"reasoning sweet spots"** — optimal reasoning depths where performance peaks:

$$L_{\text{sweet}} = \arg\max_{L} P(L)$$

This means:
1. Too little reasoning: the model doesn't have enough analytical depth
2. Sweet spot: optimal reasoning depth for the task
3. Too much reasoning: diminishing returns (but NOT degradation, unlike baselines)

For CESAR, the sweet spot provides substantial improvement over direct answering. For baseline models without process rewards, there is no sweet spot — performance only degrades with more reasoning.

---

## Results: What Process Rewards Enable

### State-of-the-Art on MMAU

CESAR achieves state-of-the-art results on MMAU Test-mini, the standard benchmark for audio understanding and reasoning. It substantially outperforms:
- **GPT-4o Audio**: which exhibits inverse scaling
- **Gemini 2.5 Pro**: which also exhibits inverse scaling
- **Ke-Omni-R** (outcome-only RL): severe inverse scaling

### Positive Test-Time Scaling

The key result: CESAR is the only method where reasoning *genuinely helps*. The scaling slope (how performance changes with reasoning length) is **consistently positive** for CESAR and **negative or flat** for all baselines.

### Synergistic Effects

Enhanced reasoning creates a surprising bonus: it simultaneously improves **perception** capabilities. Better reasoning about audio signals leads to better understanding of the audio itself. This suggests that reasoning quality and perception quality are deeply intertwined in multimodal models.

---

## The Broader Lesson

The test-time inverse scaling phenomenon teaches us something important about how LLMs learn to reason:

1. **Reasoning doesn't emerge for free.** Outcome-only rewards assume that correct answers imply correct reasoning. They don't. Models can learn shortcuts that bypass genuine reasoning entirely.

2. **Process supervision matters.** Just as students need feedback on their *work* (not just their final answers), models need feedback on their reasoning process.

3. **More compute isn't always better.** Without proper training, additional test-time compute (more reasoning tokens) can be actively harmful. The solution isn't more compute — it's better-trained reasoning.

4. **Audio is different from text.** The modality gap means that reasoning strategies that work for text don't automatically transfer. Audio reasoning requires domain-specific grounding that pure text-based training cannot provide.

---

## Summary

Test-time inverse scaling in Audio LLMs has a clear cause: **outcome-only rewards produce hallucinatory, inconsistent, unstructured reasoning** that accumulates errors with length.

CESAR's process rewards fix this by providing granular feedback on reasoning quality:

| Component | What It Rewards | What It Prevents |
|:---|:---|:---|
| Consistency | Reasoning-answer alignment | Disconnected reasoning |
| Keywords (pattern) | Structured analysis | Stream-of-consciousness |
| Keywords (logic) | Causal reasoning | Logical fallacies |
| Keywords (domain) | Audio expertise | Generic reasoning |
| Overthinking penalty | Conciseness | Verbose rambling |

The result: reasoning becomes a **controllable, scalable capability** — the first Audio LLM where more thinking genuinely produces better answers.

---

*For full details, see our paper: [Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards](https://openreview.net/forum?id=DUr48hxO2h) (ICLR 2026). Check out the [project page](/projects/cesar/) for figures and analysis.*
