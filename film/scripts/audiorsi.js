// AudioRSI has a finished film with its own score (rendered with this film engine, ~/Desktop/audiorsi_promo/web);
// every number in it is traced to arXiv 2610.36578 in that folder's posts.md. Played as an MP4.
export default {
  id: 'audiorsi', name: 'AudioRSI', page: '/projects/audiorsi/',
  video: '/film/video/audiorsi.mp4', poster: '/film/posters/audiorsi.jpg',
  transcript: '<p>AudioRSI: recursively self-improving audio reasoners (arXiv 2610.36578). To our knowledge, the first recursively '
    + 'self-improving audio LLM: one model is both student and teacher. Trained by a frozen external teacher (Ke-Omni-R, 74.6% on '
    + 'MMAU test-mini), the student ends at 75.1%, above its teacher; when the improved student becomes the teacher every 200 steps, '
    + 'AudioRSI reaches 76.1%. The teacher hears the same recording and rejects reasoning that cites sounds the audio does not contain. '
    + 'A 7B model with no external reward model: ahead of Gemini 2.5 Pro and Audio Flamingo 3 on MMAU test-mini, and 37.9% on the '
    + 'Multi-Audio split of MMAU-Pro, ahead of every system tested.</p>',
};
