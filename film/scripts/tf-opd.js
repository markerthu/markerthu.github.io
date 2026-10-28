// TF-OPD has a finished film with its own score (rendered with this film engine, ~/Desktop/tfopd_promo/web);
// every number in it is from arXiv 2610.22236 (v2), as in that folder's posts.md. Played as an MP4.
export default {
  id: 'tf-opd', name: 'TF-OPD', page: '/projects/tf-opd/',
  video: '/film/video/tf-opd.mp4', poster: '/film/posters/tf-opd.jpg',
  transcript: '<p>Training-Free On-Policy Distillation (arXiv 2610.22236). Reinforcement learning turns one base model into '
    + 'specialists, each strong in one domain and behind in the others; on-policy distillation merges them at the price of rollouts, '
    + 'teacher passes and gradient steps for every teacher. TF-OPD merges specialists that share a base model with zero gradient steps: '
    + 'each specialist answers a few hundred problems, answers stuck in repetition loops (7% of the answers, 23% of the tokens) are '
    + 'dropped, each specialist reads its kept answers once, and every layer is solved exactly as a least-squares problem. On Olmo 3 7B '
    + 'the fused model has the highest mean accuracy over seven math and code benchmarks: 61.1, against 59.8 for the math specialist and '
    + '53.6 for the code specialist, with about 10 GPU-hours of forward passes in total.</p>',
};
