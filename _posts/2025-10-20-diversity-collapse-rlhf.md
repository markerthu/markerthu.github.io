---
title: 'Why Your Fine-Tuned Model Keeps Collapsing: The Exploration-Exploitation Dilemma in RLHF'
date: 2025-10-20
permalink: /posts/2025/10/diversity-collapse-rlhf/
tags:
  - reinforcement learning
  - RLHF
  - generative models
  - exploration-exploitation
  - NeurIPS 2025
excerpt: "RLHF fine-tuning of generative models faces a fundamental dilemma: push too hard for reward and you get mode collapse; regularize too much and the model barely improves. Fixed regularization can't solve this because different samples need different treatment. ADRPO introduces sample-level adaptive control."
---

*This post explains the diversity collapse problem in RLHF fine-tuning and how adaptive divergence regularization (ADRPO, NeurIPS 2025) addresses it. We walk through the math, the intuition, and why this matters for anyone training generative models.*

---

## The Problem: Why Does RLHF Break Diversity?

You have a powerful pre-trained generative model — say, Stable Diffusion 3 for image generation, or a large language model like Qwen. You want to fine-tune it with reinforcement learning to produce outputs that score higher on some reward function (e.g., human preference, CLIP score, task accuracy).

The standard RLHF objective looks deceptively simple:

$$J(\theta) = \mathbb{E}_{x \sim \pi_\theta}[R(x, c)] - \beta \cdot D(\pi_\theta, \pi_{\text{ref}})$$

where \\(R(x, c)\\) is the reward, \\(D(\pi_\theta, \pi_{\text{ref}})\\) is a divergence measure between your fine-tuned model and the original pre-trained model, and \\(\beta\\) controls the trade-off.

**The first term** pushes the model toward high-reward outputs. **The second term** keeps it from straying too far from the pre-trained distribution.

Sounds reasonable. So what goes wrong?

### The Collapse Mechanism

Consider what happens during online RL training. The model generates samples, gets rewards, and updates its policy. Without any regularization (\\(\beta = 0\\)):

1. The model finds a few high-reward outputs early in training
2. It concentrates more probability mass on those outputs
3. With more mass concentrated, it generates similar outputs more often
4. Those outputs get reinforced further
5. **Result: the model collapses to generating essentially the same output** regardless of the input prompt

This is **mode collapse** or **diversity collapse**. In image generation, your model might produce the same "perfect" image for every prompt. In language, it might always generate the same response pattern.

Mathematically, without regularization, the optimal policy converges to a delta distribution:

$$\pi^*(x|c) \to \delta(x - x^*_c)$$

where \\(x^*_c = \arg\max_x R(x, c)\\). All diversity is lost.

### The Fixed Regularization Dilemma

The standard fix is to add divergence regularization with a fixed coefficient \\(\beta\\). For flow matching models, this typically uses Wasserstein-2 (W2) distance:

$$\mathcal{L} = \mathcal{L}_{\text{RL}} + \beta \cdot \mathbb{E}_{c,t,x_t}\left[\|\mathbf{v}_\theta(x_t, t, c) - \mathbf{v}_{\text{ref}}(x_t, t, c)\|^2\right]$$

For LLMs, it uses KL divergence:

$$\mathcal{L} = \mathcal{L}_{\text{PG}} + \beta \cdot D_{\text{KL}}(\pi_\theta \| \pi_{\text{ref}})$$

**But fixed \\(\beta\\) creates an inherent dilemma:**

| \\(\beta\\) too high | \\(\beta\\) too low |
|:---|:---|
| Model barely moves from pre-trained weights | Risk of mode collapse |
| Limited reward improvement | Reward hacking |
| Safe but underperforming | Unstable training |
| Diversity preserved but alignment poor | Good alignment but diversity lost |

There is no single \\(\beta\\) that works well for all samples. Consider two scenarios during training:

- **Sample A** has a high reward (advantage \\(A > 0\\)) — the model has found a promising direction. Here, you *want* to exploit this finding with less regularization.
- **Sample B** has a low reward (advantage \\(A < 0\\)) — the model is in a poor region. Here, you *want* stronger regularization to pull it back toward the stable pre-trained distribution.

Fixed \\(\beta\\) treats both samples identically. This is fundamentally suboptimal.

---

## ADRPO: Adaptive Divergence Regularized Policy Optimization

The key insight in ADRPO is simple but powerful: **make the regularization strength depend on sample quality.**

### The Core Formula

$$\mathcal{L}_{\text{ADRPO}}(\theta) = \mathcal{L}_{\text{RL}}(\theta) + (\beta_0 - A) \cdot \mathcal{L}_{\text{D}}(\theta)$$

where \\(A\\) is the advantage estimate for the current sample, and \\(\beta_0\\) is a baseline regularization coefficient.

The effective regularization coefficient becomes \\(\beta_{\text{eff}} = \beta_0 - A\\), which adapts automatically:

| Sample Quality | Advantage \\(A\\) | Effective \\(\beta\\) | Behavior |
|:---|:---|:---|:---|
| High reward | \\(A > 0\\) | \\(\beta_0 - A\\) (lower) | **Exploit**: less regularization, more freedom to optimize |
| Average | \\(A \approx 0\\) | \\(\approx \beta_0\\) | Standard regularization |
| Low reward | \\(A < 0\\) | \\(\beta_0 - A\\) (higher) | **Explore conservatively**: stronger pull toward reference |

### Why This Works: Intuition

Think of it like portfolio management:

- **Winning trades** (high-advantage samples): Let them run. Reduce the hedging.
- **Losing trades** (low-advantage samples): Cut losses quickly. Increase the hedging.
- **Average trades**: Apply standard risk management.

Fixed \\(\beta\\) is like applying the same hedge ratio to every position regardless of whether it's winning or losing. No rational trader would do this, yet it's exactly what standard RLHF does.

### For Flow Matching Models (SD3)

ADRPO with W2 regularization for flow matching:

$$\mathcal{L}_{\text{ADRPO-FM}}(\theta) = \mathbb{E}\left[A(x_1,c) \cdot \|\mathbf{v}_\theta - \mathbf{u}_t\|^2\right] + (\beta_0 - A(x_1,c)) \cdot \mathbb{E}\left[\|\mathbf{v}_\theta - \mathbf{v}_{\text{ref}}\|^2\right]$$

Note the advantage \\(A\\) also appears in the RL loss — samples with positive advantage strengthen the velocity field match, while negative advantage *reverses* the gradient direction, actively pushing the model away from poor generations. This is fundamentally different from reward-weighting approaches (like ORW-CFM-W2) which can only down-weight bad samples but cannot actively suppress them.

### For LLMs (GRPO)

ADRPO integrated with GRPO:

$$\mathcal{L}_{\text{ADRPO-GRPO}}(\theta) = \mathcal{L}_{\text{PG}}(\theta) + (\beta_0 - A_{\text{GRPO}}) \cdot D_{\text{KL}}(\pi_\theta \| \pi_{\text{ref}})$$

The advantage \\(A_{\text{GRPO}}\\) comes from GRPO's group-based estimation: within each group of responses to the same prompt, compare each response's reward to the group mean.

---

## What Happens in Practice?

### The Pareto Front

The reward-diversity trade-off can be visualized as a Pareto front. ADRPO achieves a **dominant Pareto frontier** — at any given diversity level, it achieves higher reward than fixed-regularization methods. Conversely, at any given reward level, it preserves more diversity.

This isn't marginal improvement. With ADRPO, a 2B parameter SD3 model surpasses models with 4.8B (SANA-1.5) and 12B (FLUX.1-Dev) parameters in attribute binding, semantic consistency, and compositional control.

### Emergent Exploration in LLMs

Perhaps the most surprising finding is an **emergent exploration ability** in LLM fine-tuning. When ADRPO is applied to GRPO for training language models, the adaptive regularization allows the model to escape local optima that fixed-regularization methods get trapped in.

When the model is stuck in a poor solution (low advantages everywhere), ADRPO *increases* regularization globally, effectively "resetting" the exploration. When it finds a promising direction, it *decreases* regularization to exploit it. This creates a natural curriculum that fixed methods cannot replicate.

---

## Why Does Diversity Matter?

One might ask: if the goal is to maximize reward, why preserve diversity at all?

1. **Reward functions are imperfect.** They approximate human preferences, not capture them fully. A collapsed model that exploits reward function quirks (reward hacking) produces outputs that score high but look terrible to humans.

2. **Generalization.** A diverse model handles varied prompts. A collapsed model may perform well on prompts similar to its training distribution but fail catastrophically on novel inputs.

3. **Downstream utility.** In many applications (creative image generation, diverse text responses), diversity is itself a desirable property.

4. **Training stability.** Mode collapse often destabilizes further training — once the model concentrates on a narrow manifold, gradient signals become noisy and uninformative.

---

## Summary

The exploration-exploitation dilemma in RLHF is fundamental: no single regularization strength works for all samples. ADRPO resolves this by making \\(\beta\\) a function of advantage:

$$\beta_{\text{eff}} = \beta_0 - A$$

This one-line change — making regularization adaptive at the sample level — enables:
- **Better Pareto frontiers** in reward vs. diversity
- **Smaller models outperforming larger ones** (2B SD3 > 12B FLUX)
- **Emergent exploration** in LLM fine-tuning
- **Plug-and-play integration** with existing methods (W2, KL, GRPO, PPO)

No additional networks, no complex architecture changes, no manual tuning of \\(\beta\\).

---

*For full details, see our paper: [Adaptive Divergence Regularized Policy Optimization for Fine-tuning Generative Models](https://openreview.net/forum?id=aXO0xg0ttW) (NeurIPS 2025). Check out the [project page](/projects/adrpo/) for qualitative results.*
