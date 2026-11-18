export default {
  id: 'self-rewriting', name: 'Self-Rewriting', page: '/projects/self-rewriting/',
  video: '/film/video/self-rewriting.mp4', poster: '/film/posters/self-rewriting.jpg',
  transcript: '<p>Language Models Can Rewrite Their Own Weights (arXiv 2611.21885). In 1947, Alan Turing imagined a machine that '
    + 'could alter its own instructions, and admitted it would not get us very far. Today, a model is trained once, and then frozen. '
    + 'To make it better, we train it again: complex infrastructure, rooms full of GPUs. Or we spend more, at every answer. Prompt '
    + 'engineering. Harness engineering. Test-time scaling.</p>'
    + '<p>Seventy-nine years later, it gets us further. One open model reads its own weights, finds its own failure, and rewrites '
    + 'itself. The third paradigm. No new pre-training or post-training. No harness engineering. No prompt engineering. One GPU. '
    + 'A few hours.</p>'
    + '<p>Session after session, it keeps getting better: from 57.2 percent to 63.8 percent, on 490 problems it never saw. What '
    + 'its own tests reject, it withdraws. It thinks with fewer wasted tokens. Before its edit: one sentence, written 549 times, '
    + 'and no answer. After its own edit: a correct answer.</p>'
    + '<p>Now, a damaged copy: eight rows of one matrix, overwritten with noise. Told only that some values are corrupted, it '
    + 'finds the matrix, and rewrites it with values of its own. Without a backup, a broken model needed retraining. This one '
    + 'needed none. On six image benchmarks it never saw: 7.3 percent becomes 70.2 percent. The ability emerges with scale. Of '
    + 'four sizes, only the largest improves itself.</p>'
    + '<p>Learning was something we did to models. Now, it is something a model can do to itself. Every change can be read, and '
    + 'reversed. What if a model could improve while it acts? We never stopped living in order to learn. A flash of insight, a new '
    + 'connection, and we have learned. Perhaps models can learn the same way. Perhaps a robot will act by day, and rewrite itself '
    + 'while it sleeps. We may have knocked on the door of lifelong continual learning.</p>'
    + '<p>Affordable. Scalable. Recursive. We seem to have reached the edge of recursive self-improvement. Welcome to the era of '
    + 'self-rewriting.</p>',
};
