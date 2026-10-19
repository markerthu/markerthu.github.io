// ProteinZero has a finished cinematic film (GPT-image stills, Wan2.2 image-to-video, MusicGen score);
// every number in it is traced to the paper in ~/Desktop/proteinzero_promo/posts.md. Played as an MP4.
export default {
  id: 'proteinzero', name: 'ProteinZero', page: '/projects/proteinzero/',
  video: '/film/video/proteinzero.mp4', poster: '/film/posters/proteinzero.jpg',
  transcript: '<p>ProteinZero: self-improving protein generation via online reinforcement learning (TMLR 2026). '
    + 'The model proposes sequences, scores them for fold fidelity and stability, and learns from its own designs: '
    + '36&ndash;48% fewer design failures than prior models and over 90% success across diverse folds on CATH-4.3, '
    + 'one complete run on a single 8-GPU node in about three days. All evaluation is computational.</p>',
};
