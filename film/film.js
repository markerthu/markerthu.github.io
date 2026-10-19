// Research films, rendered live. A film is a script (film/scripts/*.js): a list of
// chapters, each with a particle shape and its type. Everything is a pure function
// of t (seconds), so the same code drives the web player and a frame-exact MP4 export.
import * as THREE from 'three';
import { makeViz } from './viz.js';

export const DESIGN_W = 1920, DESIGN_H = 1080;

const INK = [236, 230, 218];
const GOLD = [201, 166, 107];
const BG = '#09090a';

// ── small math ──
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const u = clamp((x - a) / (b - a)); return u * u * (3 - 2 * u); };
const easeOut = u => 1 - Math.pow(1 - clamp(u), 3);
const easeInOut = u => { u = clamp(u); return u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2; };
const frac = x => x - Math.floor(x);
const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

function rotYX(p, ay, ax) {
  const cy = Math.cos(ay), sy = Math.sin(ay);
  const x = p[0] * cy + p[2] * sy, z = -p[0] * sy + p[2] * cy, y = p[1];
  const cx = Math.cos(ax), sx = Math.sin(ax);
  p[0] = x; p[1] = y * cx - z * sx; p[2] = y * sx + z * cx;
}

// 11x8 space-invader sprite, two frames (legs alternate)
const INVADER = [
  ['..X.....X..', '...X...X...', '..XXXXXXX..', '.XX.XXX.XX.', 'XXXXXXXXXXX', 'X.XXXXXXX.X', 'X.X.....X.X', '...XX.XX...'],
  ['..X.....X..', 'X..X...X..X', 'X.XXXXXXX.X', 'XXX.XXX.XXX', 'XXXXXXXXXXX', '.XXXXXXXXX.', '..X.....X..', '.X.......X.'],
].map(rows => { const on = []; rows.forEach((r, y) => [...r].forEach((ch, x) => { if (ch === 'X') on.push([x - 5, 3.5 - y]); })); return on; });

export function createFilm(canvas, opts = {}) {
  const S_ = opts.script;
  const CH = S_.chapters;
  const DURATION = CH[CH.length - 1].t1;
  const TICKED = CH.filter(c => c.tick);
  const T_TL0 = TICKED.length ? TICKED[0].t0 : 0, T_TL1 = TICKED.length ? TICKED[TICKED.length - 1].t1 : DURATION;
  const HUD_IN = CH.length > 1 ? CH[1].t0 : 0, HUD_OUT = CH[CH.length - 1].t0;

  const N = opts.particles || 9000;
  const GN = Math.floor(Math.sqrt(N));
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
    for (let k = 0; k < 3; k++) {
      const u = Math.max(1e-6, rnd()), v = rnd();
      G[i * 3 + k] = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    }
  }

  const pos = new Float32Array(N * 3), alpha = new Float32Array(N), size = new Float32Array(N), col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r = rnd();
    size[i] = 0.7 + Math.pow(rnd(), 3) * 2.4;
    col.set(r < 0.16 ? [0.86, 0.70, 0.45] : [0.95, 0.92, 0.86], i * 3);
  }
  const baseCol = col.slice(), tint = new Float32Array(N);
  const GOLDC = [0.9, 0.72, 0.44], INKC = [0.95, 0.92, 0.86];
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

  // crystal: an irregular low-poly stone (dark faces + faint edges + sparkles)
  const ico = new THREE.IcosahedronGeometry(1.75, 1); // polyhedra are already non-indexed
  const icoP = ico.attributes.position.array, F = icoP.length / 9;
  for (let j = 0; j < icoP.length; j += 3) {
    const x = icoP[j], y = icoP[j + 1], z = icoP[j + 2];
    const h = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
    const k = 0.84 + 0.26 * (h - Math.floor(h)) * (y > 0 ? 1 : 0.85);
    icoP[j] = x * k * 1.06; icoP[j + 1] = y * k * 0.9; icoP[j + 2] = z * k;
  }
  const L = new THREE.Vector3(0.45, 0.8, 0.55).normalize();
  const icoShade = new Float32Array(F), icoN = [];
  for (let f = 0; f < F; f++) {
    const a = new THREE.Vector3(icoP[f * 9], icoP[f * 9 + 1], icoP[f * 9 + 2]);
    const b = new THREE.Vector3(icoP[f * 9 + 3], icoP[f * 9 + 4], icoP[f * 9 + 5]);
    const c = new THREE.Vector3(icoP[f * 9 + 6], icoP[f * 9 + 7], icoP[f * 9 + 8]);
    const n = b.sub(a).cross(c.sub(a)).normalize();
    icoN.push(n.toArray());
    icoShade[f] = 0.22 + 0.78 * Math.pow(Math.max(0, n.dot(L)), 1.3);
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
  const chainSway = t => 0.38 * Math.sin(t * 0.32) + 0.25;

  // ── shapes: write position into p, return brightness. lt = time since the chapter began ──
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
    chain(i, t, lt) {
      let b;
      if (R[i * 4] < 0.5) {
        const k = Math.floor(R[i * 4 + 1] * K), n = NODES[k];
        for (let d = 0; d < 3; d++) p[d] = n[d] + G[i * 3 + d] * 0.07;
        const head = (lt * 1.1) % (K + 3); // a pulse walks the chain, node by node
        b = 0.9 + 1.0 * Math.exp(-Math.pow(k - head, 2) * 1.2);
      } else {
        const k = Math.floor(R[i * 4 + 1] * (K - 1)), s = R[i * 4 + 2], a = NODES[k], c = NODES[k + 1];
        for (let d = 0; d < 3; d++) p[d] = a[d] + (c[d] - a[d]) * s + G[i * 3 + d] * 0.012;
        b = 0.55;
      }
      rotYX(p, chainSway(t), 0.12);
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
    bloom(i, t) { // a star being born: particles stream outward from a bright core
      const g0 = G[i * 3], g1 = G[i * 3 + 1], g2 = G[i * 3 + 2], m = Math.hypot(g0, g1, g2) || 1;
      const q = frac(R[i * 4] + t * 0.11), r = 0.08 + 2.1 * Math.pow(q, 1.5);
      p[0] = g0 / m * r; p[1] = g1 / m * r; p[2] = g2 / m * r;
      rotYX(p, t * 0.08, 0.2);
      return (1.5 - 1.1 * q) * smooth(0, 0.05, q);
    },
    waveform(i, t) { // a spoken clip: a filled, moving amplitude envelope
      const x = -2.0 + 4.0 * R[i * 4];
      const amp = (0.12 + 0.88 * Math.abs(Math.sin(2.3 * x + t * 1.3) * Math.cos(0.9 * x - t * 0.7))) * (1 - Math.pow(Math.abs(x) / 2.1, 4));
      p[0] = x; p[1] = (R[i * 4 + 1] * 2 - 1) * amp; p[2] = G[i * 3] * 0.06;
      rotYX(p, 0.25 * Math.sin(t * 0.2), 0.1);
      return 0.55 + 0.6 * (1 - Math.abs(p[1]) / (amp + 1e-3)) * 0.5;
    },
    dialog(i, t) { // two speakers and speech travelling between them
      const r0 = R[i * 4];
      if (r0 < 0.72) {
        const side = r0 < 0.36 ? -1 : 1, g0 = G[i * 3], g1 = G[i * 3 + 1], g2 = G[i * 3 + 2], m = Math.hypot(g0, g1, g2) || 1;
        const rad = 0.44 * Math.cbrt(R[i * 4 + 1]) * (1 + 0.05 * Math.sin(t * 2 + side));
        p[0] = side * 1.3 + g0 / m * rad; p[1] = g1 / m * rad; p[2] = g2 / m * rad;
      } else {
        const dir = R[i * 4 + 3] < 0.5 ? 1 : -1, s = frac(R[i * 4 + 2] + t * 0.22);
        const x = dir > 0 ? -0.88 + 1.76 * s : 0.88 - 1.76 * s;
        p[0] = x; p[1] = dir * 0.22 + 0.2 * Math.sin(16 * s - 6 * t) * Math.sin(Math.PI * s) + G[i * 3] * 0.02; p[2] = G[i * 3 + 1] * 0.04;
      }
      rotYX(p, 0.25 * Math.sin(t * 0.18), 0.12);
      return r0 < 0.72 ? 0.6 : 1.0;
    },
    layers(i, t, lt) { // a stack of layers; the middle ones light up as a pulse passes
      const NL = 9, k = Math.floor(R[i * 4] * NL), hy = 0.9, hz = 0.55;
      let y = (R[i * 4 + 1] * 2 - 1) * hy, z = (R[i * 4 + 2] * 2 - 1) * hz, edge = false;
      if (R[i * 4 + 3] < 0.35) { // a third of each layer traces its frame
        edge = true; const s = R[i * 4 + 1] * 4, f = Math.floor(s), u = (s - f) * 2 - 1;
        if (f === 0) { y = hy; z = u * hz; } else if (f === 1) { y = -hy; z = u * hz; } else if (f === 2) { z = hz; y = u * hy; } else { z = -hz; y = u * hy; }
      }
      p[0] = -1.75 + k * (3.5 / (NL - 1)); p[1] = y; p[2] = z;
      const mid = Math.exp(-Math.pow((k - (NL - 1) / 2) / 1.6, 2));
      const head = (lt * 2.0) % (NL + 6) - 2;
      rotYX(p, 0.42 + 0.06 * Math.sin(t * 0.3), 0.14);
      return (edge ? 1.0 : 0.3) * (0.35 + 0.55 * mid + 0.8 * Math.exp(-Math.pow(k - head, 2) * 0.8));
    },
    helix(i, t) { // an alpha-helix ribbon along a gentle S-curve
      const u = R[i * 4], ang = 2 * Math.PI * 6 * u + t * 0.6, rr = 0.34;
      const ax = -1.8 + 3.6 * u, ay = 0.4 * Math.sin(2 * Math.PI * u * 0.8);
      const w = (R[i * 4 + 1] - 0.5) * 0.16;
      p[0] = ax + w; p[1] = ay + rr * Math.cos(ang) + G[i * 3] * 0.018; p[2] = rr * Math.sin(ang) + G[i * 3 + 1] * 0.018;
      rotYX(p, 0.35 + 0.18 * Math.sin(t * 0.3), 0.2);
      return 0.55 + 0.5 * (p[2] + 0.5);
    },
    flow(i, t) { // flow matching: noise streams into structure
      const q = frac(R[i * 4] + t * 0.11), e = easeInOut(q);
      const sx = -1.35 + G[i * 3] * 0.32, sy = G[i * 3 + 1] * 0.32, sz = G[i * 3 + 2] * 0.32;
      const a = 2 * Math.PI * R[i * 4 + 1], petal = 0.62 + 0.22 * Math.cos(5 * a); // a five-petal target
      const tx = 1.15 + petal * Math.cos(a), ty = petal * Math.sin(a), tz = 0.05 * G[i * 3 + 2];
      p[0] = sx + (tx - sx) * e; p[1] = sy + (ty - sy) * e + 0.3 * Math.sin(Math.PI * q) * (R[i * 4 + 2] - 0.5);
      p[2] = sz + (tz - sz) * e;
      rotYX(p, 0.18 * Math.sin(t * 0.2), 0.08);
      return (0.45 + 0.75 * e) * smooth(0, 0.06, q) * (1 - smooth(0.94, 1, q));
    },
    collapse(i, t) { // mode collapse: almost everything in one tight clump
      const k = R[i * 4] < 0.88, s = k ? 0.13 : 0.9;
      p[0] = G[i * 3] * s; p[1] = G[i * 3 + 1] * s; p[2] = G[i * 3 + 2] * s;
      rotYX(p, t * 0.2, 0.2);
      return k ? 0.5 : 0.35;
    },
    diverse(i, t) { // many distinct modes, spread out
      const NC = 7, c = Math.floor(R[i * 4] * NC);
      const phi = Math.acos(1 - 2 * (c + 0.5) / NC), th = Math.PI * (1 + Math.sqrt(5)) * (c + 0.5);
      const cr = 1.35;
      p[0] = cr * Math.sin(phi) * Math.cos(th) + G[i * 3] * 0.16; p[1] = cr * Math.cos(phi) + G[i * 3 + 1] * 0.16;
      p[2] = cr * Math.sin(phi) * Math.sin(th) + G[i * 3 + 2] * 0.16;
      rotYX(p, t * 0.15, 0.3);
      return 0.7 + 0.25 * Math.sin(c * 1.7);
    },
    pipeline(i, t, lt, c) { // three steps in order, with work flowing through them
      const r0 = R[i * 4], shuffled = c && c.arg === 'shuffled';
      if (r0 < 0.8 || shuffled) {
        const k = Math.floor(R[i * 4 + 1] * 3), h = 0.3;
        const cx = shuffled ? [1.25, -1.3, 0.05][k] : -1.35 + k * 1.35, cy = shuffled ? [0.55, -0.45, 0.15][k] + 0.06 * Math.sin(t * 1.3 + k * 2) : 0;
        const face = Math.floor(R[i * 4 + 2] * 6), a = (R[i * 4 + 3] * 2 - 1) * h, b = (frac(R[i * 4 + 2] * 6) * 2 - 1) * h;
        const s = face % 2 ? h : -h;
        if (face < 2) { p[0] = cx + s; p[1] = cy + a; p[2] = b; } else if (face < 4) { p[0] = cx + a; p[1] = cy + s; p[2] = b; } else { p[0] = cx + a; p[1] = cy + b; p[2] = s; }
        const lit = shuffled ? 0.15 : Math.exp(-Math.pow(k - ((lt * 0.9) % 4.5), 2) * 1.5);
        rotYX(p, 0.5 + 0.15 * Math.sin(t * 0.3), 0.32);
        return 0.55 + 0.8 * lit;
      }
      const s = frac(R[i * 4 + 2] + t * 0.25);
      p[0] = -1.35 + 2.7 * s; p[1] = G[i * 3] * 0.02; p[2] = G[i * 3 + 1] * 0.02;
      rotYX(p, 0.5 + 0.15 * Math.sin(t * 0.3), 0.32);
      return 0.75;
    },
    invader(i, t) { // an Atari sprite, two animation frames
      const on = INVADER[Math.floor(t / 0.55) % 2], px = on[Math.floor(R[i * 4] * on.length) % on.length], sz = 0.27;
      p[0] = (px[0] + (R[i * 4 + 1] - 0.5) * 0.85) * sz; p[1] = (px[1] + (R[i * 4 + 2] - 0.5) * 0.85) * sz;
      p[2] = (R[i * 4 + 3] - 0.5) * sz * 0.85;
      rotYX(p, 0.4 * Math.sin(t * 0.35), 0.1);
      return 0.95;
    },
    bars(i, t, lt) { // results rising
      const HS = [0.55, 0.8, 1.05, 1.4, 1.95], k = Math.floor(R[i * 4] * 5), g = easeOut((lt - 0.3) / 2.2);
      const h = HS[k] * g;
      p[0] = -1.3 + k * 0.65 + (R[i * 4 + 1] - 0.5) * 0.4; p[1] = -1.0 + R[i * 4 + 2] * h; p[2] = (R[i * 4 + 3] - 0.5) * 0.4;
      rotYX(p, 0.45 + 0.1 * Math.sin(t * 0.25), 0.18);
      return (k === 4 ? 1.15 : 0.6) * (0.4 + 0.6 * smooth(0, 0.3, h));
    },
  };

  const env = { R, G, p, rotYX, easeOut, easeInOut, smooth, frac, INVADER, tint: 0 };
  const VZ = makeViz(env);
  const vizOf = c => c.shape.startsWith('v:') ? VZ.V[c.shape.slice(2)] : null;
  function evalShape(c, i, t, lt) { env.tint = 0; const vz = vizOf(c); return vz ? vz.pt(i, t, lt, c) : SHAPES[c.shape](i, t, lt, c); }

  function chapterAt(t) { for (let k = CH.length - 1; k >= 0; k--) if (t >= CH[k].t0) return k; return 0; }
  function presence(shape, t) { // how much of the scene is this shape right now
    let v = 0;
    CH.forEach(c => { if (c.shape === shape) v = Math.max(v, smooth(c.t0 - 0.6, c.t0 + 1.0, t) * (1 - smooth(c.t1 - 1.2, c.t1 + 0.4, t))); });
    return v;
  }

  const q = [0, 0, 0];
  let colDirty = false;
  function updateParticles(t) {
    for (let f = 0; f < F; f++) { const n = icoN[f]; p[0] = n[0]; p[1] = n[1]; p[2] = n[2]; rotYX(p, t * 0.22, 0.32); facing[f] = p[2]; }
    const k = chapterAt(t), c = CH[k], nxt = CH[Math.min(k + 1, CH.length - 1)];
    const fade = smooth(0.2, 2.2, t) * (1 - smooth(DURATION - 1.6, DURATION - 0.2, t));
    const lta = t - c.t0, ltb = Math.max(0, t - nxt.t0);
    const T0 = c.t1 - 1.5;
    for (let i = 0; i < N; i++) {
      let e = 0;
      if (k < CH.length - 1 && t > T0) e = easeInOut((t - T0 - R[i * 4 + 3] * 0.5) / 1.5);
      const ba = evalShape(c, i, t, lta), ta = env.tint; q[0] = p[0]; q[1] = p[1]; q[2] = p[2];
      let b = ba, tn = ta;
      if (e > 0) {
        const bb = evalShape(nxt, i, t, ltb); tn = ta + (env.tint - ta) * e;
        const sw = Math.sin(Math.PI * e) * 0.35; // a little swirl mid-morph
        for (let d = 0; d < 3; d++) p[d] = q[d] + (p[d] - q[d]) * e + G[i * 3 + d] * sw;
        b = ba + (bb - ba) * e;
      } else { p[0] = q[0]; p[1] = q[1]; p[2] = q[2]; }
      pos[i * 3] = p[0]; pos[i * 3 + 1] = p[1]; pos[i * 3 + 2] = p[2];
      alpha[i] = b * fade;
      if (tn !== tint[i]) {
        tint[i] = tn; const T = tn >= 0 ? GOLDC : INKC, w = Math.abs(tn);
        for (let d = 0; d < 3; d++) col[i * 3 + d] = baseCol[i * 3 + d] + (T[d] - baseCol[i * 3 + d]) * w;
        colDirty = true;
      }
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.aAlpha.needsUpdate = true;
    if (colDirty) { geo.attributes.aColor.needsUpdate = true; colDirty = false; }

    const pc = presence('crystal', t);
    edges.material.opacity = 0.16 * pc; rock.material.opacity = 0.92 * pc;
    for (const o of [edges, rock]) { o.rotation.order = 'XYZ'; o.rotation.x = 0.32; o.rotation.y = t * 0.22; }
    links.material.opacity = 0.32 * presence('chain', t);
    const lp = linkGeo.attributes.position.array, sway = chainSway(t);
    for (let k2 = 0; k2 < K - 1; k2++) for (let e2 = 0; e2 < 2; e2++) {
      const n = NODES[k2 + e2]; p[0] = n[0]; p[1] = n[1]; p[2] = n[2]; rotYX(p, sway, 0.12);
      lp.set(p, (k2 * 2 + e2) * 3);
    }
    linkGeo.attributes.position.needsUpdate = true;
  }

  // ── 2D layer: type, HUD, timeline, grain, vignette ──
  const noise = document.createElement('canvas'); noise.width = noise.height = 256;
  { const nx = noise.getContext('2d'), img = nx.createImageData(256, 256), nr = mulberry32(7);
    for (let j = 0; j < img.data.length; j += 4) { const v = nr() * 255; img.data[j] = img.data[j + 1] = img.data[j + 2] = v; img.data[j + 3] = 255; }
    nx.putImageData(img, 0, 0); }
  const hasFilter = 'filter' in ctx;

  let S = 1; // design → canvas scale
  function font(spec) { ctx.font = spec.replace(/(\d+(?:\.\d+)?)px/, (_, n) => (n * S).toFixed(2) + 'px'); }
  function trackedWidth(text, sp) { let w = 0; for (const ch of text) w += ctx.measureText(ch).width + sp * S; return w - sp * S; }
  function tracked(text, x, y, sp, align = 'left') {
    const w = trackedWidth(text, sp);
    let cx = align === 'right' ? x * S - w : align === 'center' ? x * S - w / 2 : x * S;
    for (const ch of text) { ctx.fillText(ch, cx, y * S); cx += ctx.measureText(ch).width + sp * S; }
    return w / S;
  }
  function withA(a, blurPx, fn) {
    if (a <= 0.002) return;
    ctx.save(); ctx.globalAlpha = clamp(a);
    if (hasFilter && blurPx > 0.05) ctx.filter = `blur(${(blurPx * S).toFixed(2)}px)`;
    fn(); ctx.restore();
  }
  const isLast = c => c === CH[CH.length - 1];
  function inout(t, tin, c, dur = 0.9) {
    const out = c.t1 - (isLast(c) ? 0.9 : 1.15);
    return easeOut((t - tin) / dur) * (1 - smooth(out, out + 0.75, t));
  }
  function fmtStat(st, v) {
    const s = Math.abs(v).toFixed(st.decimals || 0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const sign = v < 0 ? '−' : (st.plus && v > 0 ? '+' : '');
    return (st.before || '') + (st.prefix || '') + sign + s + (st.suffix || '');
  }

  const TITLE_PX = 124, TITLE_MAX = 780;
  function drawChapterText(t) {
    const k = chapterAt(t), c = CH[k];
    const base = c.t0 + (k === 0 ? 0.9 : 0.35);
    ctx.textBaseline = 'alphabetic';
    let a = inout(t, base, c);
    withA(a, (1 - a) * 6, () => {
      font('600 21px Inter'); ctx.fillStyle = rgba(GOLD, 1);
      const w = tracked(c.label, 170, 452 + (1 - a) * 10, 6.5);
      ctx.fillStyle = rgba(GOLD, 0.55);
      ctx.fillRect(170 * S, 476 * S, Math.min(96, w) * easeOut((t - base - 0.2) / 1.0) * S, 1.5 * S);
    });
    // title, letter by letter, shrunk to fit the left column
    font(`300 ${TITLE_PX}px Newsreader`);
    const tw = ctx.measureText(c.title).width / S;
    if (tw > TITLE_MAX) font(`300 ${(TITLE_PX * TITLE_MAX / tw).toFixed(1)}px Newsreader`);
    const tTitle = base + 0.25, out = c.t1 - (isLast(c) ? 0.9 : 1.15);
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
    (c.lines || []).forEach((line, j) => {
      const a2 = inout(t, base + 1.25 + j * 0.3, c, 1.1);
      withA(a2 * 0.78, (1 - a2) * 5, () => {
        font('italic 300 41px Newsreader'); ctx.fillStyle = rgba(INK, 1);
        ctx.fillText(line, 170 * S, (694 + j * 54 + (1 - a2) * 14) * S);
      });
    });
    if (c.meta) {
      const a3 = inout(t, base + 2.1, c, 1.0);
      withA(a3 * 0.55, (1 - a3) * 4, () => { font('500 17px Inter'); ctx.fillStyle = rgba(INK, 1); tracked(c.meta, 170, 838, 3.4); });
    }
    if (c.stat) { // a number that counts up, with a small-caps label
      const st = c.stat, ts = base + 1.9, a4 = inout(t, ts, c, 0.9);
      const u = easeOut((t - ts - 0.2) / 1.6);
      const v = st.from === undefined ? st.to : st.from + (st.to - st.from) * u;
      withA(a4, (1 - a4) * 4, () => {
        font('300 64px Newsreader'); ctx.fillStyle = rgba(GOLD, 1);
        const txt = st.text || fmtStat(st, v);
        ctx.fillText(txt, 170 * S, 928 * S);
        const w = ctx.measureText(txt).width / S;
        font('600 14px Inter'); ctx.fillStyle = rgba(INK, 0.62);
        tracked(st.label, 170 + w + 26, 922, 3.2);
      });
    }
  }

  // labels that belong to a viz, projected from its 3D frame into the type layer
  const _v = new THREE.Vector3();
  const TAG = { name: ['500 17px Inter', INK, 0.86, 0.3], gold: ['600 17px Inter', GOLD, 1, 0.3], num: ['300 34px Newsreader', GOLD, 1, 0],
    numInk: ['300 30px Newsreader', INK, 0.82, 0], small: ['500 13px Inter', INK, 0.6, 1.0], mono: ['500 16px Inter', INK, 0.92, 0.2],
    good: ['600 17px Inter', [150, 205, 160], 1, 0.3], bad: ['600 17px Inter', [232, 150, 130], 1, 0.3] };
  function drawTags(t) {
    const c = CH[chapterAt(t)], vz = vizOf(c);
    if (!vz && !c.tags) return;
    const lt = t - c.t0, envA = inout(t, c.t0 + 0.2, c, 0.6);
    if (envA <= 0.002) return;
    group.updateMatrixWorld(true);
    const list = (vz ? vz.tags(c, t, lt) : []).concat(c.tags || []);
    ctx.save(); ctx.textBaseline = 'middle'; ctx.shadowColor = 'rgba(0,0,0,0.9)'; ctx.shadowBlur = 8 * S;
    for (const tg of list) {
      const a = (tg.a ?? 1) * envA;
      if (a <= 0.01 || !tg.text) continue;
      const qq = tg.at.slice(); VZ.vrot(qq, c, t);
      _v.set(qq[0], qq[1], qq[2]).applyMatrix4(group.matrixWorld).project(camera);
      const x = (_v.x + 1) / 2 * DESIGN_W + (tg.dx || 0), y = (1 - _v.y) / 2 * DESIGN_H + (tg.dy || 0);
      const st = TAG[tg.style] || TAG.name;
      font(st[0]); ctx.globalAlpha = a; ctx.fillStyle = rgba(st[1], st[2]);
      tracked(tg.text, x, y, st[3], tg.align || 'left');
    }
    ctx.restore();
  }

  function hudAlpha(t) { return smooth(HUD_IN - 1.4, HUD_IN + 0.2, t) * (1 - smooth(HUD_OUT - 0.4, HUD_OUT + 0.8, t)); }
  function drawHUD(t) {
    const a = hudAlpha(t);
    if (a <= 0.002) return;
    ctx.save(); ctx.globalAlpha = a; ctx.textBaseline = 'alphabetic';
    font('500 15px Inter'); ctx.fillStyle = rgba(INK, 0.5);
    tracked(S_.kicker, 170, 120, 5);
    const P = S_.panel;
    if (P) {
      tracked(P.title, 1750, 120, 5, 'right');
      P.items.forEach((h, j) => {
        const y = 162 + j * 36;
        font('400 21px Inter');
        let txtA = 0.88, dotFill = 1, strike = 0, isNext = 0;
        if (h.off) { const u = easeOut((t - h.off) / 0.8); strike = u; txtA = 0.88 - 0.6 * u; dotFill = 1 - u; }
        if (h.next) isNext = easeOut((t - h.next) / 0.8);
        ctx.fillStyle = isNext > 0 ? `rgba(${Math.round(INK[0] + (GOLD[0] - INK[0]) * isNext)},${Math.round(INK[1] + (GOLD[1] - INK[1]) * isNext)},${Math.round(INK[2] + (GOLD[2] - INK[2]) * isNext)},${txtA})` : rgba(INK, txtA);
        const w = tracked(h.name, 1722, y, 0.6, 'right');
        if (strike > 0) { ctx.fillStyle = rgba(INK, 0.6); ctx.fillRect((1722 - w * strike) * S, (y - 7) * S, w * strike * S, 1.4 * S); }
        const dx = 1742 * S, dy = (y - 7) * S;
        ctx.beginPath(); ctx.arc(dx, dy, 5 * S, 0, Math.PI * 2);
        if (isNext > 0) {
          const pulse = 0.55 + 0.45 * Math.sin((t - h.next) * 3.2);
          ctx.strokeStyle = rgba(GOLD, 0.5 + 0.5 * pulse * isNext); ctx.lineWidth = 1.4 * S;
          ctx.setLineDash([2.2 * S, 2.2 * S]); ctx.stroke(); ctx.setLineDash([]);
          ctx.fillStyle = rgba(GOLD, 0.35 * pulse * isNext); ctx.fill();
          withA(isNext, 0, () => { font('600 12px Inter'); ctx.fillStyle = rgba(GOLD, 0.9); tracked('NEXT', 1722 - w - 16, y - 1, 3, 'right'); });
        } else {
          ctx.strokeStyle = rgba(INK, 0.55); ctx.lineWidth = 1.2 * S; ctx.stroke();
          if (dotFill > 0.01) { ctx.fillStyle = rgba(INK, 0.85 * dotFill); ctx.fill(); }
        }
      });
    } else if (S_.badge) {
      tracked(S_.badge[0], 1750, 120, 5, 'right');
      if (S_.badge[1]) { font('400 19px Inter'); ctx.fillStyle = rgba(INK, 0.78); tracked(S_.badge[1], 1750, 158, 0.6, 'right'); }
    }
    ctx.restore();
  }

  const X0 = 170, X1 = 1750, TY = 992;
  const tx = t => X0 + (X1 - X0) * clamp((t - T_TL0) / (T_TL1 - T_TL0));
  function drawTimeline(t) {
    const a = hudAlpha(t);
    if (a <= 0.002 || !TICKED.length) return;
    ctx.save(); ctx.globalAlpha = a;
    ctx.fillStyle = rgba(INK, 0.12); ctx.fillRect(X0 * S, TY * S, (X1 - X0) * S, 1 * S);
    const mx = tx(t);
    ctx.fillStyle = rgba(INK, 0.42); ctx.fillRect(X0 * S, TY * S, (mx - X0) * S, 1 * S);
    for (let s = T_TL0; s <= T_TL1 + 1e-6; s += 1) {
      const x = tx(s); ctx.fillStyle = rgba(INK, s <= t ? 0.32 : 0.14);
      ctx.fillRect(x * S, (TY - 3) * S, 1 * S, 4 * S);
    }
    const cur = CH[chapterAt(t)];
    font('600 12px Inter');
    TICKED.forEach(c => {
      const x = tx(c.t0);
      ctx.fillStyle = rgba(INK, 0.38); ctx.fillRect(x * S, (TY - 10) * S, 1 * S, 11 * S);
      ctx.fillStyle = c === cur ? rgba(GOLD, 0.95) : rgba(INK, c.t0 < cur.t0 ? 0.45 : 0.28);
      tracked(c.tick, x + 10, TY + 30, 3.2);
    });
    const g = ctx.createRadialGradient(mx * S, TY * S, 0, mx * S, TY * S, 22 * S);
    g.addColorStop(0, 'rgba(255,240,215,0.55)'); g.addColorStop(1, 'rgba(255,240,215,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(mx * S, TY * S, 22 * S, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,246,230,0.95)'; ctx.beginPath(); ctx.arc(mx * S, TY * S, 3.6 * S, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  function drawPost(t, W, H) {
    ctx.save(); ctx.globalCompositeOperation = 'screen';
    const g = ctx.createRadialGradient(1360 * S, 540 * S, 0, 1360 * S, 540 * S, 640 * S);
    g.addColorStop(0, 'rgba(201,166,107,0.07)'); g.addColorStop(1, 'rgba(201,166,107,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore();
    ctx.save(); ctx.globalAlpha = 0.032;
    const f = Math.floor(t * 24);
    ctx.translate(-((f * 37) % 256), -((f * 91) % 256));
    ctx.fillStyle = ctx.createPattern(noise, 'repeat'); ctx.fillRect(0, 0, W + 256, H + 256); ctx.restore();
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
    drawPost(t, W, H);
    if (opts.text !== false) { drawTags(t); drawChapterText(t); drawHUD(t); drawTimeline(t); }
    const fb = smooth(DURATION - 1.4, DURATION - 0.1, t);
    if (fb > 0) { ctx.fillStyle = `rgba(0,0,0,${fb})`; ctx.fillRect(0, 0, W, H); }
  }

  return { renderAt, resize, duration: DURATION, script: S_,
           timelineHit: (x, y) => (TICKED.length && y > 940 && y < 1060 && x > X0 - 20 && x < X1 + 20) ? T_TL0 + (T_TL1 - T_TL0) * clamp((x - X0) / (X1 - X0)) : null };
}

export async function loadFonts() {
  const specs = ['300 124px Newsreader', 'italic 300 41px Newsreader', '300 64px Newsreader', '600 21px Inter', '500 17px Inter',
    '400 21px Inter', '600 12px Inter', '500 15px Inter', '600 14px Inter', '400 19px Inter'];
  try { await Promise.all(specs.map(s => document.fonts.load(s))); await document.fonts.ready; } catch (e) { }
}

// Known films (id → script module). Keep ids to [a-z0-9-].
export const FILMS = ['main', 'speechgym', 'read-the-mind', 'procedure-aware-rl', 'cesar', 'adrpo', 'orw-cfm-w2', 'ac-flow', 'lbc', 'gdi'];
export async function loadScript(id) {
  if (!FILMS.includes(id)) id = 'main';
  return (await import(`./scripts/${id}.js`)).default;
}
