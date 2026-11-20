// Keystone film; numbers from arXiv 2611.25530.
export default {
  id: 'keystone', name: 'Keystone', page: '/projects/keystone/',
  video: '/film/video/keystone.mp4', poster: '/film/posters/keystone.jpg',
  transcript: '<p>Keystone: Judging Previews at Key Steps for Test-Time Search in Diffusion Models (arXiv 2611.25530). More than two '
    + 'thousand years ago, Aristotle wrote: for the beginning is thought to be more than half of the whole. Every image a diffusion '
    + 'model draws begins as noise. Forty steps later, it is a picture. But the picture is decided long before it is finished. At '
    + 'step 8 of 40, the preview is still a blur, yet all four bananas are already there.</p>'
    + '<p>Ask for four bananas, and a model may draw two. Today, the remedy is brute force: draw many images, finish every one, and '
    + 'keep the best. Best-of-N. Every candidate is paid for in full, even the ones doomed from their first steps. Why not judge '
    + 'them early? Because the judges were built for finished images. On a blurry preview, reward models often read close to '
    + 'chance. One even prefers an image that ends wrong. The image was never the problem. The judge was.</p>'
    + '<p>In an arch, one stone holds all the others in place: the keystone. In an image, a few early steps do. Keystone changes '
    + 'the judge. It turns the prompt into questions. Exactly four bananas? Five or more? An off-the-shelf decision model answers '
    + 'every question, and each image is scored by its weakest answer. No training. No labels. Asked this way, it reads counts and '
    + 'positions from a blurry preview better than reward models read them from the finished image.</p>'
    + '<p>And it finds the key steps. Change the noise at one of the first two steps, and the outcome changes most often. By step 8, '
    + 'the outcome can already be read. So search stops finishing doomed images. Start eight candidates. Read them at step 8. Keep '
    + 'four. Read again at step 16. Keep two. Finish only those. Or start with one, and draw more only when its preview falls short. '
    + 'Compute goes where the outcome is still open.</p>'
    + '<p>On GenEval, with Stable Diffusion 3.5 Medium: from 0.68 to 0.82. Counting rises from 0.56 to 0.83. Position more than '
    + 'doubles. Above best-of-8 with every other verifier, at under half its compute. Dropped into existing methods, it lifts them '
    + 'too: best-of-N, progressive seed pruning, FK steering. Without retuning, the gain holds on average across four base models and '
    + 'three benchmarks.</p>'
    + '<p>Test-time search no longer has to finish an image to judge it. Any diffusion or flow sampler can now be searched at its '
    + 'key steps. The same judgment could one day guide how these models learn, with a signal at every step. The beginning is more '
    + 'than half of the whole. Now, we can judge it. Keystone.</p>',
};
