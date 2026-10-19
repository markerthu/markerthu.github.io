// "Out of the loop" — a one-minute research film, rendered live.
// Everything is a pure function of t (seconds), so the same code drives the
// web player and a frame-exact MP4 export.
import * as THREE from 'three';

export const DESIGN_W = 1920, DESIGN_H = 1080;
export const DURATION = 61;

const INK = [236, 230, 218];
const GOLD = [201, 166, 107];
const BG = '#09090a';

// Chapters. Only published or arXiv work is named; RSI is presented as the next step.
const CH = [
  { t0: 0, t1: 7, shape: 'sphere',
    label: 'REINFORCEMENT LEARNING', title: 'Out of the loop',
    lines: ['How much of its own teaching', 'can a model take over from us?'],
    meta: 'JIAJUN FAN  ·  UIUC' },
  { t0: 7, t1: 16, shape: 'crystal', tick: 'SUPERHUMAN',
    label: '2022 — 2023', title: 'Superhuman',
    lines: ['An agent learns to choose its own experience,', 'and breaks 24 Atari human world records.'],
    meta: 'GDI  ·  ICML 2022          LBC  ·  ICLR 2023 ORAL' },
  { t0: 16, t1: 25, shape: 'galaxy', tick: 'OWN DATA',
    label: '2025 — 2026', title: 'Its own data',
    lines: ['No collected preferences: the model improves', 'from its own generations, without collapsing.'],
    meta: 'ORW-CFM-W2  ·  ICLR 2025          PROTEINZERO  ·  TMLR 2026' },
  { t0: 25, t1: 34, shape: 'chain', tick: 'OWN REASONING',
    label: '2025 — 2026', title: 'Its own reasoning',
    lines: ['No hand-tuned regularisation, no human-written', 'chains of thought. The reasoning emerges.'],
    meta: 'ADRPO  ·  NEURIPS 2025          CESAR  ·  ICLR 2026' },
  { t0: 34, t1: 43, shape: 'wave', tick: 'AGENTS',
    label: '2026', title: 'Worlds to act in',
    lines: ['Voice agents that listen and speak natively;', 'tool agents that learn the order of things.'],
    meta: 'SPEECHGYM  ·  ARXIV 2026          PROCEDURE-AWARE RL  ·  COLM 2026' },
  { t0: 43, t1: 53, shape: 'knot', tick: 'OWN CRITIC',
    label: 'NEXT', title: 'Its own critic',
    lines: ['Recursive self-improvement: each better model', 'becomes the critic and teacher of the next.'],
    meta: 'ONGOING WORK' },
  { t0: 53, t1: 61, shape: 'ring',
    label: 'RESEARCH', title: 'Jiajun Fan',
    lines: ['Reinforcement learning for generative', 'and agentic models.'],
    meta: 'JIAJUNFAN.COM' },
];
const T_TL0 = CH[1].t0, T_TL1 = CH[5].t1;

// The three things a human still does in the loop, and when each one goes.
const HUMAN = [
  { name: 'data collection', off: 18.6 },
  { name: 'labelling & tuning', off: 27.6 },
  { name: 'reward design', next: 45.6 },
];

// ── small math ──
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const u = clamp((x - a) / (b - a)); return u * u * (3 - 2 * u); };
const easeOut = u => 1 - Math.pow(1 - clamp(u), 3);
const easeInOut = u => { u = clamp(u); return u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2; };
const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

function rotYX(p, ay, ax) {
  const cy = Math.cos(ay), sy = Math.sin(ay);
  let x = p[0] * cy + p[2] * sy, z = -p[0] * sy + p[2] * cy, y = p[1];
  const cx = Math.cos(ax), sx = Math.sin(ax);
  const y2 = y * cx - z * sx, z2 = y * sx + z * cx;
  p[0] = x; p[1] = y2; p[2] = z2;
}

export function createFilm(canvas, opts = {}) {
  const N = opts.particles || 9000;
  const GN = Math.floor(Math.sqrt(N)); // wave grid side
  const ctx = canvas.getContext('2d');
  const glCanvas = document.createElement('canvas');
  const renderer = new THREE.WebGLRenderer({ canvas: glCanvas, antialias: true, alpha: false, preserveDrawingBuffer: true });
  renderer.setClearColor(new THREE.Color(BG), 1);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 16 / 9, 0.1, 100);
  const group = new THREE.Group();
  group.position.x = 1.95;
  group.scale.setScalar(0.8);
  scene.add(group);

  // per-particle randoms
  const rnd = mulberry32(20261019);
  const R = new Float32Array(N * 4), G = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    for (let k = 0; k < 4; k++) R[i * 4 + k] = rnd();
    for (let k = 0; k < 3; k++) { // gaussian
      const u = Math.max(1e-6, rnd()), v = rnd();
      G[i * 3 + k] = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    }
  }

  // geometry & material
  const pos = new Float32Array(N * 3), alpha = new Float32Array(N), size = new Float32Array(N), col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r = rnd();
    size[i] = 0.7 + Math.pow(rnd(), 3) * 2.4;
    const gold = r < 0.16;
    const c = gold ? [0.86, 0.70, 0.45] : [0.95, 0.92, 0.86];
    col.set(c, i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1));
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.ShaderMaterial({
    uniforms: { uPx: { value: 1 } },
    vertexShader: `attribute float aAlpha; attribute float aSize; attribute vec3 aColor; uniform float uPx;
      varying float vA; varying vec3 vC;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uPx * (8.6 / -mv.z); vA = aAlpha; vC = aColor; }`,
    fragmentShader: `varying float vA; varying vec3 vC;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); float a = smoothstep(0.5, 0.0, d); a = a*a;
        gl_FragColor = vec4(vC * a * vA, 1.0); }`,
    transparent: true, depthWrite: false, depthTest: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  group.add(points);

  // crystal: icosahedron faces + faint edges
  const ico = new THREE.IcosahedronGeometry(1.75, 1); // polyhedra are already non-indexed
  const icoP = ico.attributes.position.array, F = icoP.length / 9;
  for (let j = 0; j < icoP.length; j += 3) { // same vertex -> same bump, so faces stay closed
    const x = icoP[j], y = icoP[j + 1], z = icoP[j + 2];
    const h = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
    const k = 0.84 + 0.26 * (h - Math.floor(h)) * (y > 0 ? 1 : 0.85);
    icoP[j] = x * k * 1.06; icoP[j + 1] = y * k * 0.9; icoP[j + 2] = z * k;
  }
  const icoShade = new Float32Array(F);
  const L = new THREE.Vector3(0.45, 0.8, 0.55).normalize();
  for (let f = 0; f < F; f++) {
    const a = new THREE.Vector3(icoP[f * 9], icoP[f * 9 + 1], icoP[f * 9 + 2]);
    const b = new THREE.Vector3(icoP[f * 9 + 3], icoP[f * 9 + 4], icoP[f * 9 + 5]);
    const c = new THREE.Vector3(icoP[f * 9 + 6], icoP[f * 9 + 7], icoP[f * 9 + 8]);
    const n = b.clone().sub(a).cross(c.clone().sub(a)).normalize();
    icoShade[f] = 0.22 + 0.78 * Math.pow(Math.max(0, n.dot(L)), 1.3);
  }
  const icoN = [];
  for (let f = 0; f < F; f++) {
    const a = new THREE.Vector3(icoP[f * 9], icoP[f * 9 + 1], icoP[f * 9 + 2]);
    const b = new THREE.Vector3(icoP[f * 9 + 3], icoP[f * 9 + 4], icoP[f * 9 + 5]);
    const c = new THREE.Vector3(icoP[f * 9 + 6], icoP[f * 9 + 7], icoP[f * 9 + 8]);
    icoN.push(b.sub(a).cross(c.sub(a)).normalize().toArray());
  }
  const facing = new Float32Array(F);
  ico.computeVertexNormals();
  const rockCol = new Float32Array(F * 9);
  for (let f = 0; f < F; f++) { const v = 0.004 + 0.03 * Math.pow(icoShade[f], 1.2); for (let j = 0; j < 3; j++) rockCol.set([v * 1.05, v, v * 0.92], f * 9 + j * 3); }
  ico.setAttribute('color', new THREE.BufferAttribute(rockCol, 3));
  const rock = new THREE.Mesh(ico, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0,
    depthWrite: false, depthTest: false, side: THREE.FrontSide }));
  rock.renderOrder = -1;
  group.add(rock);
  const lineMat = () => new THREE.LineBasicMaterial({ color: 0xe9e2d4, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false });
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(ico, 1), lineMat());
  group.add(edges);

  // chain: reasoning nodes + links
  const K = 8, NODES = [];
  for (let k = 0; k < K; k++) NODES.push([-1.5 + k * 0.43, 0.62 * Math.sin(k * 1.15 + 0.4), 0.5 * Math.cos(k * 0.95)]);
  const linkGeo = new THREE.BufferGeometry();
  linkGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array((K - 1) * 6), 3));
  const links = new THREE.LineSegments(linkGeo, lineMat());
  group.add(links);

  // ── shapes: write position into p, return brightness ──
  const p = [0, 0, 0];
  const SHAPES = {
    sphere(i, t) {
      const k = i + 0.5, phi = Math.acos(1 - 2 * k / N), th = Math.PI * (1 + Math.sqrt(5)) * k;
      const r = 1.62 * (0.93 + 0.14 * R[i * 4]) + 0.035 * Math.sin(t * 0.9 + R[i * 4 + 1] * 6.283);
      p[0] = r * Math.sin(phi) * Math.cos(th); p[1] = r * Math.cos(phi); p[2] = r * Math.sin(phi) * Math.sin(th);
      rotYX(p, t * 0.12, 0.25);
      return 0.72;
    },
    crystal(i, t) {
      const f = Math.min(F - 1, Math.floor(R[i * 4] * F));
      let u = R[i * 4 + 1], v = R[i * 4 + 2];
      if (u + v > 1) { u = 1 - u; v = 1 - v; }
      for (let d = 0; d < 3; d++) {
        const a = icoP[f * 9 + d], b = icoP[f * 9 + 3 + d], c = icoP[f * 9 + 6 + d];
        p[d] = a + u * (b - a) + v * (c - a);
      }
      rotYX(p, t * 0.22, 0.32);
      return 1.25 * icoShade[f] * (facing[f] > 0 ? 1 : 0.28);
    },
    galaxy(i, t) {
      const arm = Math.floor(R[i * 4] * 3), rr = 0.12 + 2.3 * Math.pow(R[i * 4 + 1], 0.9);
      const ang = arm * 2.0944 + rr * 1.75 + G[i * 3] * 0.2 / (0.35 + rr * 0.4) - t * 0.32;
      p[0] = rr * Math.cos(ang); p[2] = rr * Math.sin(ang); p[1] = G[i * 3 + 1] * 0.06 * (1.4 - rr / 2.5);
      rotYX(p, 0.3, 1.02);
      return 0.95 * (1.15 - rr / 2.8);
    },
    chain(i, t) {
      const sway = 0.38 * Math.sin(t * 0.32) + 0.25;
      let b;
      if (R[i * 4] < 0.5) {
        const k = Math.floor(R[i * 4 + 1] * K), n = NODES[k];
        for (let d = 0; d < 3; d++) p[d] = n[d] + G[i * 3 + d] * 0.07;
        // a pulse walks along the chain, node by node
        const head = ((t - 25) * 1.1) % (K + 3);
        b = 0.9 + 1.0 * Math.exp(-Math.pow(k - head, 2) * 1.2);
      } else {
        const k = Math.floor(R[i * 4 + 1] * (K - 1)), s = R[i * 4 + 2], a = NODES[k], c = NODES[k + 1];
        for (let d = 0; d < 3; d++) p[d] = a[d] + (c[d] - a[d]) * s + G[i * 3 + d] * 0.012;
        b = 0.55;
      }
      rotYX(p, sway, 0.12);
      return b;
    },
    wave(i, t) {
      const gx = i % GN, gz = Math.floor(i / GN) % GN;
      const x = (gx / (GN - 1) - 0.5) * 4.0, z = (gz / (GN - 1) - 0.5) * 4.0;
      p[0] = x; p[2] = z;
      p[1] = 0.24 * Math.sin(1.5 * x + 1.1 * t) * Math.cos(1.2 * z + 0.8 * t) + 0.08 * Math.sin(2.6 * (x + z) - 1.6 * t);
      const fade = 1 - smooth(1.25, 2.05, Math.hypot(x, z));
      rotYX(p, -0.6 + t * 0.03, 0.46);
      return 0.95 * fade;
    },
    knot(i, t) {
      const u = 2 * Math.PI * (R[i * 4] + t * 0.03), P = 2, Q = 3, s = 0.54;
      const rr = 2 + Math.cos(Q * u);
      p[0] = s * rr * Math.cos(P * u) + G[i * 3] * 0.06;
      p[1] = s * rr * Math.sin(P * u) + G[i * 3 + 1] * 0.06;
      p[2] = s * Math.sin(Q * u) * 1.1 + G[i * 3 + 2] * 0.06;
      const az = t * 0.16, cz = Math.cos(az), sz = Math.sin(az), x0 = p[0];
      p[0] = x0 * cz - p[1] * sz; p[1] = x0 * sz + p[1] * cz;
      rotYX(p, 0.35 * Math.sin(t * 0.25), 0.3);
      return 0.85;
    },
    ring(i, t) { // the loop, closed
      const a = 2 * Math.PI * (R[i * 4] + t * 0.02), w = 0.07 + 0.05 * R[i * 4 + 1];
      p[0] = 1.45 * Math.cos(a) + G[i * 3] * w; p[1] = G[i * 3 + 1] * w; p[2] = 1.45 * Math.sin(a) + G[i * 3 + 2] * w;
      rotYX(p, t * 0.1, 1.15);
      return 0.85;
    },
    core(i, t) {
      const g0 = G[i * 3], g1 = G[i * 3 + 1], g2 = G[i * 3 + 2], m = Math.hypot(g0, g1, g2) || 1;
      const r = (0.18 + 0.5 * Math.pow(R[i * 4], 1.8)) * (1 + 0.06 * Math.sin(t * 1.6));
      p[0] = g0 / m * r; p[1] = g1 / m * r; p[2] = g2 / m * r;
      rotYX(p, t * 0.25, 0.2);
      return 0.6;
    },
  };

  function chapterAt(t) { for (let k = CH.length - 1; k >= 0; k--) if (t >= CH[k].t0) return k; return 0; }
  // presence of chapter k's shape (for line overlays)
  function presence(k, t) {
    const c = CH[k]; return smooth(c.t0 - 0.6, c.t0 + 1.0, t) * (1 - smooth(c.t1 - 1.2, c.t1 + 0.4, t));
  }

  const q = [0, 0, 0];
  function updateParticles(t) {
    for (let f = 0; f < F; f++) { const n = icoN[f]; p[0] = n[0]; p[1] = n[1]; p[2] = n[2]; rotYX(p, t * 0.22, 0.32); facing[f] = p[2]; }
    const k = chapterAt(t), c = CH[k], nxt = CH[Math.min(k + 1, CH.length - 1)];
    const env = smooth(0.2, 2.2, t) * (1 - smooth(DURATION - 1.6, DURATION - 0.2, t));
    const fa = SHAPES[c.shape], fb = SHAPES[nxt.shape];
    const T0 = c.t1 - 1.5;
    for (let i = 0; i < N; i++) {
      let e = 0;
      if (k < CH.length - 1 && t > T0) e = easeInOut((t - T0 - R[i * 4 + 3] * 0.5) / 1.5);
      let ba = fa(i, t); q[0] = p[0]; q[1] = p[1]; q[2] = p[2];
      let b = ba;
      if (e > 0) {
        const bb = fb(i, t);
        const sw = Math.sin(Math.PI * e) * 0.35; // a little swirl mid-morph
        for (let d = 0; d < 3; d++) p[d] = q[d] + (p[d] - q[d]) * e + G[i * 3 + d] * sw;
        b = ba + (bb - ba) * e;
      } else { p[0] = q[0]; p[1] = q[1]; p[2] = q[2]; }
      pos[i * 3] = p[0]; pos[i * 3 + 1] = p[1]; pos[i * 3 + 2] = p[2];
      alpha[i] = b * env;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.aAlpha.needsUpdate = true;

    // overlays
    edges.material.opacity = 0.16 * presence(1, t);
    rock.material.opacity = 0.92 * presence(1, t);
    rock.rotation.order = 'XYZ'; rock.rotation.x = 0.32; rock.rotation.y = t * 0.22;
    edges.rotation.set(0, 0, 0); { // match crystal rotation (Y then X)
      edges.rotation.order = 'XYZ'; edges.rotation.x = 0.32; edges.rotation.y = t * 0.22;
    }
    links.material.opacity = 0.32 * presence(3, t);
    const lp = linkGeo.attributes.position.array, sway = 0.38 * Math.sin(t * 0.32) + 0.25;
    for (let k2 = 0; k2 < K - 1; k2++) for (let e2 = 0; e2 < 2; e2++) {
      const n = NODES[k2 + e2]; p[0] = n[0]; p[1] = n[1]; p[2] = n[2]; rotYX(p, sway, 0.12);
      lp.set(p, (k2 * 2 + e2) * 3);
    }
    linkGeo.attributes.position.needsUpdate = true;
  }

  // ── 2D layer: text, HUD, timeline, grain, vignette ──
  const noise = document.createElement('canvas'); noise.width = noise.height = 256;
  { const nx = noise.getContext('2d'), img = nx.createImageData(256, 256), nr = mulberry32(7);
    for (let j = 0; j < img.data.length; j += 4) { const v = nr() * 255; img.data[j] = img.data[j + 1] = img.data[j + 2] = v; img.data[j + 3] = 255; }
    nx.putImageData(img, 0, 0); }
  const hasFilter = 'filter' in ctx;

  let S = 1; // design → canvas scale
  function font(spec) { ctx.font = spec.replace(/(\d+(?:\.\d+)?)px/, (_, n) => (n * S).toFixed(2) + 'px'); }
  function trackedWidth(text, sp) { let w = 0; for (const ch of text) w += ctx.measureText(ch).width + sp * S; return w - sp * S; }
  function tracked(text, x, y, sp, align = 'left') {
    let w = trackedWidth(text, sp), cx = align === 'right' ? x * S - w : align === 'center' ? x * S - w / 2 : x * S;
    for (const ch of text) { ctx.fillText(ch, cx, y * S); cx += ctx.measureText(ch).width + sp * S; }
    return w / S;
  }
  function withA(a, blurPx, fn) {
    if (a <= 0.002) return;
    ctx.save(); ctx.globalAlpha = clamp(a);
    if (hasFilter && blurPx > 0.05) ctx.filter = `blur(${(blurPx * S).toFixed(2)}px)`;
    fn(); ctx.restore();
  }
  // in/out envelope for chapter text
  function inout(t, tin, c, dur = 0.9) {
    const out = c.t1 - (c === CH[CH.length - 1] ? 0.9 : 1.15);
    return easeOut((t - tin) / dur) * (1 - smooth(out, out + 0.75, t));
  }

  function drawChapterText(t) {
    const k = chapterAt(t), c = CH[k];
    const base = c.t0 + (k === 0 ? 0.9 : 0.35);
    ctx.textBaseline = 'alphabetic';
    // label
    let a = inout(t, base, c);
    withA(a, (1 - a) * 6, () => {
      font('600 21px Inter'); ctx.fillStyle = rgba(GOLD, 1);
      const w = tracked(c.label, 170, 452 + (1 - a) * 10, 6.5);
      ctx.fillStyle = rgba(GOLD, 0.55);
      ctx.fillRect(170 * S, 476 * S, Math.min(96, w) * easeOut((t - base - 0.2) / 1.0) * S, 1.5 * S);
    });
    // title, letter by letter
    font('300 124px Newsreader');
    const tTitle = base + 0.25, out = c.t1 - 1.15;
    const fadeOut = 1 - smooth(out, out + 0.75, t);
    let cx = 170 * S;
    [...c.title].forEach((ch, j) => {
      const u = easeOut((t - tTitle - j * 0.045) / 0.7) * fadeOut;
      if (u > 0.002) {
        ctx.save(); ctx.globalAlpha = u; ctx.fillStyle = rgba(INK, 1);
        if (hasFilter && u < 0.98) ctx.filter = `blur(${((1 - u) * 8 * S).toFixed(2)}px)`;
        ctx.fillText(ch, cx, (606 + (1 - u) * 26) * S); ctx.restore();
      }
      cx += ctx.measureText(ch).width - 1.5 * S;
    });
    // italic lines
    c.lines.forEach((line, j) => {
      const a2 = inout(t, base + 1.25 + j * 0.3, c, 1.1);
      withA(a2 * 0.78, (1 - a2) * 5, () => {
        font('italic 300 41px Newsreader'); ctx.fillStyle = rgba(INK, 1);
        ctx.fillText(line, 170 * S, (694 + j * 54 + (1 - a2) * 14) * S);
      });
    });
    // meta
    const a3 = inout(t, base + 2.1, c, 1.0);
    withA(a3 * 0.55, (1 - a3) * 4, () => {
      font('500 17px Inter'); ctx.fillStyle = rgba(INK, 1);
      tracked(c.meta, 170, 838, 3.4);
    });
  }

  function drawHUD(t) {
    const a = smooth(5.6, 7.2, t) * (1 - smooth(52.6, 53.8, t));
    if (a <= 0.002) return;
    ctx.save(); ctx.globalAlpha = a;
    ctx.textBaseline = 'alphabetic';
    font('500 15px Inter'); ctx.fillStyle = rgba(INK, 0.5);
    tracked('OUT OF THE LOOP  ·  A RESEARCH FILM', 170, 120, 5);
    // human-in-the-loop panel
    ctx.fillStyle = rgba(INK, 0.5);
    tracked('HUMAN IN THE LOOP', 1750, 120, 5, 'right');
    HUMAN.forEach((h, j) => {
      const y = 162 + j * 36;
      font('400 21px Inter');
      let txtA = 0.88, dotFill = 1, strike = 0, isNext = 0;
      if (h.off) { const u = easeOut((t - h.off) / 0.8); strike = u; txtA = 0.88 - 0.6 * u; dotFill = 1 - u; }
      if (h.next) isNext = easeOut((t - h.next) / 0.8);
      const label = h.name;
      ctx.fillStyle = isNext > 0 ? `rgba(${Math.round(INK[0] + (GOLD[0] - INK[0]) * isNext)},${Math.round(INK[1] + (GOLD[1] - INK[1]) * isNext)},${Math.round(INK[2] + (GOLD[2] - INK[2]) * isNext)},${txtA})` : rgba(INK, txtA);
      const w = tracked(label, 1722, y, 0.6, 'right');
      if (strike > 0) { ctx.fillStyle = rgba(INK, 0.6); ctx.fillRect((1722 - w * strike) * S, (y - 7) * S, w * strike * S, 1.4 * S); }
      // dot
      const dx = 1742 * S, dy = (y - 7) * S;
      ctx.beginPath(); ctx.arc(dx, dy, 5 * S, 0, Math.PI * 2);
      if (isNext > 0) {
        const pulse = 0.55 + 0.45 * Math.sin((t - h.next) * 3.2);
        ctx.strokeStyle = rgba(GOLD, 0.5 + 0.5 * pulse * isNext); ctx.lineWidth = 1.4 * S;
        ctx.setLineDash([2.2 * S, 2.2 * S]); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = rgba(GOLD, 0.35 * pulse * isNext); ctx.fill();
      } else {
        ctx.strokeStyle = rgba(INK, 0.55); ctx.lineWidth = 1.2 * S; ctx.stroke();
        if (dotFill > 0.01) { ctx.fillStyle = rgba(INK, 0.85 * dotFill); ctx.fill(); }
      }
      if (isNext > 0) withA(isNext, 0, () => {
        font('600 12px Inter'); ctx.fillStyle = rgba(GOLD, 0.9);
        tracked('NEXT', 1722 - w - 16, y - 1, 3, 'right');
      });
    });
    ctx.restore();
  }

  const X0 = 170, X1 = 1750, TY = 992;
  const tx = t => X0 + (X1 - X0) * clamp((t - T_TL0) / (T_TL1 - T_TL0));
  function drawTimeline(t) {
    const a = smooth(5.6, 7.2, t) * (1 - smooth(52.6, 53.8, t));
    if (a <= 0.002) return;
    ctx.save(); ctx.globalAlpha = a;
    ctx.fillStyle = rgba(INK, 0.12); ctx.fillRect(X0 * S, TY * S, (X1 - X0) * S, 1 * S);
    const mx = tx(t);
    ctx.fillStyle = rgba(INK, 0.42); ctx.fillRect(X0 * S, TY * S, (mx - X0) * S, 1 * S);
    for (let s = T_TL0; s <= T_TL1 + 1e-6; s += 1) {
      const x = tx(s); ctx.fillStyle = rgba(INK, s <= t ? 0.32 : 0.14);
      ctx.fillRect(x * S, (TY - 3) * S, 1 * S, 4 * S);
    }
    const cur = chapterAt(t);
    font('600 12px Inter');
    for (let k = 1; k <= 5; k++) {
      const x = tx(CH[k].t0);
      ctx.fillStyle = rgba(INK, 0.38); ctx.fillRect(x * S, (TY - 10) * S, 1 * S, 11 * S);
      ctx.fillStyle = k === cur ? rgba(GOLD, 0.95) : rgba(INK, k < cur ? 0.45 : 0.28);
      tracked(CH[k].tick, x + 10, TY + 30, 3.2);
    }
    // marker with halo
    const g = ctx.createRadialGradient(mx * S, TY * S, 0, mx * S, TY * S, 22 * S);
    g.addColorStop(0, 'rgba(255,240,215,0.55)'); g.addColorStop(1, 'rgba(255,240,215,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(mx * S, TY * S, 22 * S, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,246,230,0.95)'; ctx.beginPath(); ctx.arc(mx * S, TY * S, 3.6 * S, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  function drawPost(t, W, H) {
    // warm glow behind the object
    ctx.save(); ctx.globalCompositeOperation = 'screen';
    const g = ctx.createRadialGradient(1360 * S, 540 * S, 0, 1360 * S, 540 * S, 640 * S);
    g.addColorStop(0, 'rgba(201,166,107,0.07)'); g.addColorStop(1, 'rgba(201,166,107,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore();
    // grain
    ctx.save(); ctx.globalAlpha = 0.032;
    const f = Math.floor(t * 24);
    ctx.translate(-((f * 37) % 256), -((f * 91) % 256));
    ctx.fillStyle = ctx.createPattern(noise, 'repeat'); ctx.fillRect(0, 0, W + 256, H + 256); ctx.restore();
    // vignette
    const v = ctx.createRadialGradient(W / 2, H / 2, H * 0.32, W / 2, H / 2, H * 1.05);
    v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,0.62)');
    ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);
  }

  let curW = 0, curH = 0;
  function resize(w, h) {
    if (w === curW && h === curH) return;
    curW = w; curH = h; canvas.width = w; canvas.height = h;
    renderer.setPixelRatio(1); renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    S = w / DESIGN_W;
    mat.uniforms.uPx.value = h / DESIGN_H * 2.1;
  }

  function renderAt(t) {
    t = clamp(t, 0, DURATION);
    updateParticles(t);
    camera.position.set(0, 0.05, 7.7 - 0.3 * Math.sin(t * 0.09));
    camera.lookAt(0, 0, 0);
    group.rotation.set(0.04 * Math.sin(t * 0.21), 0, 0);
    renderer.render(scene, camera);
    const W = canvas.width, H = canvas.height;
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'; ctx.filter = 'none';
    ctx.drawImage(glCanvas, 0, 0, W, H);
    drawPost(t, W, H);         // glow + grain + vignette under the type
    if (opts.text !== false) { drawChapterText(t); drawHUD(t); drawTimeline(t); }
    const fb = smooth(DURATION - 1.4, DURATION - 0.1, t);
    if (fb > 0) { ctx.fillStyle = `rgba(0,0,0,${fb})`; ctx.fillRect(0, 0, W, H); }
  }

  return { renderAt, resize, duration: DURATION, chapters: CH.map(c => ({ t0: c.t0, title: c.title })),
           timelineHit: (x, y) => (y > 940 && y < 1060 && x > X0 - 20 && x < X1 + 20) ? T_TL0 + (T_TL1 - T_TL0) * clamp((x - X0) / (X1 - X0)) : null };
}

export async function loadFonts() {
  const specs = ['300 124px Newsreader', 'italic 300 41px Newsreader', '600 21px Inter', '500 17px Inter', '400 21px Inter', '600 12px Inter', '500 15px Inter'];
  try { await Promise.all(specs.map(s => document.fonts.load(s))); await document.fonts.ready; } catch (e) { }
}
