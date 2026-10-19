// Paper-specific visuals for the project films. Each viz places particles to show one
// finding (a leaderboard, a scaling slope, a reward-diversity scatter, ...) and returns
// labels anchored in the same 3D frame, so text and particles stay together.
// pt(i, t, lt, c) writes env.p, sets env.tint (-1 ink .. 0 default .. 1 gold), returns brightness.
// tags(c, t, lt) returns [{text, at:[x,y,z], style, align, dx, dy, a}] in the viz frame.

export function makeViz(env) {
  const { R, G, p, rotYX, easeOut, easeInOut, smooth, frac, INVADER } = env;
  const cache = new WeakMap();
  const lay = (c, f) => { let v = cache.get(c); if (!v) { v = f(); cache.set(c, v); } return v; };
  const r = (i, k) => R[i * 4 + k], g = (i, k) => G[i * 3 + k];
  const blob = (cx, cy, cz, s, i) => { p[0] = cx + g(i, 0) * s; p[1] = cy + g(i, 1) * s; p[2] = cz + g(i, 2) * s; };
  const seg = (ax, ay, bx, by, u, i, j = 0.01) => { p[0] = ax + (bx - ax) * u + g(i, 0) * j; p[1] = ay + (by - ay) * u + g(i, 1) * j; p[2] = g(i, 2) * j; };
  const hash = n => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
  const set = v => { env.tint = v; };

  // one shared, gentle view rotation for every viz (labels use the same one)
  function vrot(q, c, t) {
    const v = c.viz || {};
    rotYX(q, (v.yaw ?? 0.1) + 0.03 * Math.sin(t * 0.3), v.pitch ?? 0.05);
  }

  // axes for charts: x from -1.9..1.8 at y=-1.05, y from -1.05..1.05 at x=-1.9
  function axes(i, xr = 1.8) {
    if (r(i, 2) < 0.5) seg(-1.9, -1.05, xr, -1.05, r(i, 3), i, 0.004); else seg(-1.9, -1.05, -1.9, 1.05, r(i, 3), i, 0.004);
    set(-0.8); return 0.22;
  }

  const V = {};

  // ── ranking / dumbbell: rows of value dots on a shared axis ──
  V.lollipop = {
    L(c) { return lay(c, () => { const v = c.viz, n = v.rows.length, [lo, hi] = v.domain;
      return { n, X: x => -1.85 + 3.55 * (x - lo) / (hi - lo), ys: v.rows.map((_, k) => n === 1 ? 0 : 1.0 - k * 2.0 / (n - 1)) }; }); },
    xv(c, k, lt) { const L = this.L(c), row = c.viz.rows[k];
      let x = L.X(row.v);
      if (row.from !== undefined) { const m = easeInOut((lt - (c.viz.moveAt ?? 3.0)) / 1.5); x = L.X(row.from) + (L.X(row.v) - L.X(row.from)) * m; }
      return x; },
    pt(i, t, lt, c) {
      const L = this.L(c), v = c.viz, k = Math.min(L.n - 1, Math.floor(r(i, 0) * L.n)), row = v.rows[k], y = L.ys[k];
      const grow = easeOut((lt - 0.5 - k * 0.12) / 1.3), x0 = L.X(v.domain[0]), xe = x0 + (this.xv(c, k, lt) - x0) * grow;
      let b;
      if (r(i, 1) < 0.6) { seg(x0, y, xe, y, r(i, 2), i, 0.006); b = 0.38; }
      else { blob(xe, y, 0, row.ours ? 0.055 : 0.042, i); b = 1.05; }
      set(row.ours ? 1 : -0.7); vrot(p, c, t);
      return b * (grow > 0.01 ? 1 : 0);
    },
    tags(c, t, lt) {
      const L = this.L(c), v = c.viz, out = [];
      v.rows.forEach((row, k) => {
        const y = L.ys[k], a = smooth(0.6 + k * 0.12, 1.3 + k * 0.12, lt);
        out.push({ text: row.label, at: [L.X(v.domain[0]), y + 0.13, 0], style: row.ours ? 'gold' : 'name', align: 'left', a });
        const xv = this.xv(c, k, lt), val = row.from !== undefined && lt < (v.moveAt ?? 3.0) + 1.5
          ? row.from + (row.v - row.from) * easeInOut((lt - (v.moveAt ?? 3.0)) / 1.5) : row.v;
        out.push({ text: (v.fmt ? v.fmt(val) : val.toFixed(v.decimals ?? 1)) + (v.unit || ''), at: [xv, y, 0], dx: 30, style: row.ours ? 'num' : 'numInk', align: 'left', a: a * smooth(1.0, 1.8, lt) });
      });
      if (v.caption) out.push({ text: v.caption, at: [-1.85, -1.28, 0], style: 'small', align: 'left', a: smooth(1, 2, lt) });
      return out;
    },
  };

  // ── line chart, drawn on ──
  V.lines = {
    L(c) { return lay(c, () => { const v = c.viz, [x0, x1] = v.x, [y0, y1] = v.y;
      const X = x => -1.9 + 3.0 * (x - x0) / (x1 - x0), Y = y => -1.05 + 2.1 * (y - y0) / (y1 - y0);
      const S = v.series.map(s => { const P = s.pts.map(([x, y]) => [X(x), Y(y)]); const cum = [0];
        for (let k = 1; k < P.length; k++) cum.push(cum[k - 1] + Math.hypot(P[k][0] - P[k - 1][0], P[k][1] - P[k - 1][1]));
        return { P, cum, len: cum[cum.length - 1] }; });
      return { X, Y, S }; }); },
    at(s, u) { const d = u * s.len; let k = 1; while (k < s.cum.length - 1 && s.cum[k] < d) k++;
      const a = s.P[k - 1], b = s.P[k], w = (d - s.cum[k - 1]) / Math.max(1e-6, s.cum[k] - s.cum[k - 1]);
      return [a[0] + (b[0] - a[0]) * w, a[1] + (b[1] - a[1]) * w]; },
    prog(c, k, lt) { return easeOut((lt - 0.6 - k * (c.viz.stagger ?? 0.6)) / 1.8); },
    pt(i, t, lt, c) {
      const L = this.L(c), v = c.viz;
      if (r(i, 0) < 0.1) { const b = axes(i, 1.1); vrot(p, c, t); return b; }
      const k = Math.min(L.S.length - 1, Math.floor(((r(i, 0) - 0.1) / 0.9) * L.S.length)), s = L.S[k], pr = this.prog(c, k, lt);
      const u = r(i, 1) * pr;
      const q = this.at(s, u);
      if (r(i, 2) < 0.18) { const pk = Math.floor(r(i, 3) * s.P.length); const frac0 = s.len ? s.cum[pk] / s.len : 0;
        blob(s.P[pk][0], s.P[pk][1], 0, 0.035, i); set(v.series[k].ours ? 1 : -0.5); vrot(p, c, t); return frac0 <= pr + 1e-6 ? 1.1 : 0; }
      p[0] = q[0] + g(i, 0) * 0.012; p[1] = q[1] + g(i, 1) * 0.012; p[2] = g(i, 2) * 0.012;
      set(v.series[k].ours ? 1 : -0.5); vrot(p, c, t);
      return pr > 0 ? 0.8 : 0;
    },
    tags(c, t, lt) {
      const L = this.L(c), v = c.viz, out = [];
      v.series.forEach((s, k) => { const pr = this.prog(c, k, lt), q = this.at(L.S[k], Math.max(0.001, pr));
        out.push({ text: s.label, at: [q[0], q[1], 0], dx: 22, dy: s.dy || 0, style: s.ours ? 'gold' : 'name', align: 'left', a: smooth(0.85, 1, pr) }); });
      if (v.xlabel) out.push({ text: v.xlabel, at: [1.1, -1.05, 0], dy: 26, style: 'small', align: 'right', a: smooth(0.5, 1.5, lt) });
      if (v.ylabel) out.push({ text: v.ylabel, at: [-1.9, 1.05, 0], dy: -16, style: 'small', align: 'left', a: smooth(0.5, 1.5, lt) });
      return out;
    },
  };

  // ── scatter with labelled points ──
  V.scatter = {
    L(c) { return lay(c, () => { const v = c.viz, [x0, x1] = v.x, [y0, y1] = v.y;
      return { X: x => -1.9 + 3.7 * (x - x0) / (x1 - x0), Y: y => -1.05 + 2.1 * (y - y0) / (y1 - y0) }; }); },
    pt(i, t, lt, c) {
      const L = this.L(c), v = c.viz, n = v.points.length;
      if (r(i, 0) < 0.14) { const b = axes(i); vrot(p, c, t); return b; }
      const k = Math.min(n - 1, Math.floor(((r(i, 0) - 0.14) / 0.86) * n)), q = v.points[k];
      const a = easeOut((lt - 0.6 - k * 0.45) / 0.9);
      blob(L.X(q.x), L.Y(q.y), 0, (q.ours ? 0.085 : 0.06) * (0.4 + 0.6 * a), i);
      set(q.ours ? 1 : -0.6); vrot(p, c, t);
      return a * (q.ours ? 1.2 : 0.85);
    },
    tags(c, t, lt) {
      const L = this.L(c), v = c.viz, out = [];
      v.points.forEach((q, k) => out.push({ text: q.label, at: [L.X(q.x), L.Y(q.y), 0], dx: q.dx ?? 30, dy: q.dy ?? 0,
        style: q.ours ? 'gold' : 'name', align: q.align || 'left', a: smooth(0.8 + k * 0.45, 1.5 + k * 0.45, lt) }));
      if (v.xlabel) out.push({ text: v.xlabel, at: [1.8, -1.05, 0], dy: 26, style: 'small', align: 'right', a: smooth(0.5, 1.5, lt) });
      if (v.ylabel) out.push({ text: v.ylabel, at: [-1.9, 1.05, 0], dy: -16, style: 'small', align: 'left', a: smooth(0.5, 1.5, lt) });
      return out;
    },
  };

  // ── 10x10 rollout groups: which ones still carry a gradient ──
  V.cells = {
    count(c, lt) { const v = c.viz; return v.from + (v.to - v.from) * easeInOut((lt - (v.switchAt ?? 3.4)) / 1.6); },
    pt(i, t, lt, c) {
      const k = Math.floor(r(i, 0) * 100), col = k % 10, row = Math.floor(k / 10), sp = 0.215;
      const cx = -1.0 + col * sp, cy = 0.97 - row * sp;
      p[0] = cx + (r(i, 1) - 0.5) * 0.16; p[1] = cy + (r(i, 2) - 0.5) * 0.16; p[2] = g(i, 0) * 0.01;
      const n = this.count(c, lt), lit = k < Math.floor(n) ? 1 : (k < n ? n - Math.floor(n) : 0);
      const appear = easeOut((lt - 0.4 - (row * 10 + col) * 0.006) / 0.6);
      set(lit > 0 ? 1 : -0.8); vrot(p, c, t);
      return appear * (0.18 + 0.95 * lit);
    },
    tags(c, t, lt) {
      const v = c.viz, sw = smooth((v.switchAt ?? 3.4) - 0.1, (v.switchAt ?? 3.4) + 0.4, lt);
      return [
        { text: v.before, at: [-1.1, 1.22, 0], style: 'name', align: 'left', a: smooth(0.8, 1.4, lt) * (1 - sw) },
        { text: v.after, at: [-1.1, 1.22, 0], style: 'gold', align: 'left', a: sw },
        { text: v.note, at: [-1.1, -1.22, 0], style: 'small', align: 'left', a: smooth(1, 2, lt) },
      ];
    },
  };

  // ── a cascade of failures: three linked stations, speech vs text ──
  V.cascade = {
    X: [-1.45, 0, 1.45],
    rad: v => 0.08 + 0.55 * Math.sqrt(v / 100),
    pt(i, t, lt, c) {
      const v = c.viz, k = Math.floor(r(i, 1) * 3), st = v.nodes[k], ap = easeOut((lt - 0.5 - k * 0.5) / 0.9);
      if (r(i, 0) < 0.42) { blob(this.X[k], 0.32, 0, this.rad(st.a) * 0.45, i); set(1); vrot(p, c, t); return ap * 0.95; }
      if (r(i, 0) < 0.62) { blob(this.X[k], -0.62, 0, this.rad(st.b) * 0.45, i); set(-0.8); vrot(p, c, t); return ap * 0.75; }
      const kk = Math.min(1, Math.floor(r(i, 2) * 2)), s = frac(r(i, 3) + t * 0.32);
      seg(this.X[kk] + 0.25, 0.32, this.X[kk + 1] - 0.25, 0.32, s, i, 0.02);
      set(1); vrot(p, c, t);
      return easeOut((lt - 1.2 - kk * 0.5) / 0.9) * 0.7 * Math.sin(Math.PI * s);
    },
    tags(c, t, lt) {
      const v = c.viz, out = [];
      v.nodes.forEach((st, k) => { const a = smooth(0.6 + k * 0.5, 1.3 + k * 0.5, lt);
        out.push({ text: st.label, at: [this.X[k], 1.12, 0], style: 'name', align: 'center', a });
        out.push({ text: st.a + '%', at: [this.X[k], 0.32, 0], dy: -(160 * this.rad(st.a) + 20), style: 'num', align: 'center', a });
        out.push({ text: st.b + '%', at: [this.X[k], -0.62, 0], dy: 160 * this.rad(st.b) + 22, style: 'numInk', align: 'center', a }); });
      out.push({ text: 'upper: in speech', at: [-1.95, 1.45, 0], style: 'gold', align: 'left', a: smooth(0.5, 1.2, lt) });
      out.push({ text: 'lower: same tasks in text', at: [-0.2, 1.45, 0], style: 'name', align: 'left', a: smooth(0.5, 1.2, lt) });
      return out;
    },
  };

  // ── a closed box: gradients bounce off it ──
  V.blackbox = {
    pt(i, t, lt, c) {
      const h = 0.62, cx = 0.75;
      if (r(i, 0) < 0.4) { // cube edges
        const e = Math.floor(r(i, 1) * 12), u = r(i, 2) * 2 - 1, A = [[-1, -1], [-1, 1], [1, -1], [1, 1]][e % 4];
        if (e < 4) { p[0] = cx + u * h; p[1] = A[0] * h; p[2] = A[1] * h; } else if (e < 8) { p[0] = cx + A[0] * h; p[1] = u * h; p[2] = A[1] * h; }
        else { p[0] = cx + A[0] * h; p[1] = A[1] * h; p[2] = u * h; }
        p[0] += g(i, 0) * 0.008; p[1] += g(i, 1) * 0.008;
        set(-0.6); vrot(p, c, t); return 0.8;
      }
      if (r(i, 0) < 0.5) { blob(cx, 0, 0, 0.18, i); set(-0.9); vrot(p, c, t); return 0.25; }
      // incoming probes that hit the wall and bounce back
      const s = frac(r(i, 1) + t * 0.3), y = (r(i, 2) - 0.5) * 1.1, wall = cx - h - 0.03;
      const x = s < 0.6 ? -2.0 + (wall + 2.0) * (s / 0.6) : wall - (wall + 2.0) * ((s - 0.6) / 0.4) * 0.55;
      p[0] = x; p[1] = y + (s < 0.6 ? 0 : (s - 0.6) * 0.6 * Math.sign(y)); p[2] = g(i, 0) * 0.05;
      set(1); vrot(p, c, t);
      return easeOut((lt - 0.5) / 1.2) * (s < 0.6 ? 0.75 : 0.35);
    },
    tags(c, t, lt) { const v = c.viz; return [
      { text: v.box, at: [0.75, 0.62, 0], dy: -22, style: 'name', align: 'center', a: smooth(0.8, 1.5, lt) },
      { text: v.probe, at: [-1.95, 0.75, 0], style: 'gold', align: 'left', a: smooth(1.4, 2.1, lt) },
      { text: v.note, at: [0.75, -0.62, 0], dy: 34, style: 'small', align: 'center', a: smooth(2.0, 2.7, lt) },
    ]; },
  };

  // ── two speakers, speech travelling both ways ──
  V.dialog = {
    pt(i, t, lt, c) {
      const r0 = r(i, 0);
      if (r0 < 0.7) { const side = r0 < 0.35 ? -1 : 1, m = Math.hypot(g(i, 0), g(i, 1), g(i, 2)) || 1, rad = 0.42 * Math.cbrt(r(i, 1)) * (1 + 0.05 * Math.sin(t * 2 + side));
        p[0] = side * 1.3 + g(i, 0) / m * rad; p[1] = g(i, 1) / m * rad; p[2] = g(i, 2) / m * rad;
        set(side > 0 ? 1 : -0.5); vrot(p, c, t); return 0.6; }
      if (c.viz && c.viz.tools && r0 < 0.8) { // three tools under the agent
        const k = Math.floor(r(i, 1) * 3); blob(0.85 + k * 0.45, -0.95, 0, 0.06, i); set(-0.4); vrot(p, c, t); return 0.8; }
      const dir = r(i, 3) < 0.5 ? 1 : -1, s = frac(r(i, 2) + t * 0.22), x = dir > 0 ? -0.86 + 1.72 * s : 0.86 - 1.72 * s;
      p[0] = x; p[1] = dir * 0.2 + 0.18 * Math.sin(16 * s - 6 * t) * Math.sin(Math.PI * s) + g(i, 0) * 0.02; p[2] = g(i, 1) * 0.04;
      set(dir > 0 ? 1 : -0.5); vrot(p, c, t); return 1.0;
    },
    tags(c, t, lt) { const v = c.viz || {}; const out = [
      { text: v.left ?? 'caller', at: [-1.3, -0.5, 0], dy: 18, style: 'name', align: 'center', a: smooth(0.8, 1.5, lt) },
      { text: v.right ?? 'agent', at: [1.3, 0.5, 0], dy: -14, style: 'gold', align: 'center', a: smooth(1.1, 1.8, lt) },
      { text: v.mid ?? 'native speech', at: [0, 0.92, 0], style: 'small', align: 'center', a: smooth(1.4, 2.1, lt) }];
      if (v.tools) out.push({ text: v.tools, at: [1.3, -0.95, 0], dy: 30, style: 'small', align: 'center', a: smooth(1.8, 2.5, lt) });
      return out; },
  };

  // ── an audio waveform, with an optional caption under it ──
  V.waveform = {
    pt(i, t, lt, c) {
      const x = -2.0 + 4.0 * r(i, 0);
      const amp = (0.12 + 0.88 * Math.abs(Math.sin(2.3 * x + t * 1.3) * Math.cos(0.9 * x - t * 0.7))) * (1 - Math.pow(Math.abs(x) / 2.1, 4));
      p[0] = x; p[1] = (r(i, 1) * 2 - 1) * amp * 0.85; p[2] = g(i, 0) * 0.05;
      set(0); vrot(p, c, t);
      return 0.55 + 0.3 * (1 - Math.abs(p[1]) / (amp + 1e-3));
    },
    tags(c, t, lt) { const v = c.viz || {}; return v.caption ? [{ text: v.caption, at: [0, -1.05, 0], style: v.captionStyle || 'small', align: 'center', a: smooth(1.4, 2.2, lt) }] : []; },
  };

  // ── the layer stack, read with a lens: words surface at their depth ──
  V.layers = {
    NL: 12,
    X(d) { return -1.8 + 3.6 * d; },
    pt(i, t, lt, c) {
      const v = c.viz || {}, NL = this.NL, k = Math.floor(r(i, 0) * NL), d = k / (NL - 1), hy = 0.85, hz = 0.5;
      let y = (r(i, 1) * 2 - 1) * hy, z = (r(i, 2) * 2 - 1) * hz, edge = false;
      if (r(i, 3) < 0.4) { edge = true; const s = r(i, 1) * 4, f = Math.floor(s), u = (s - f) * 2 - 1;
        if (f === 0) { y = hy; z = u * hz; } else if (f === 1) { y = -hy; z = u * hz; } else if (f === 2) { z = hz; y = u * hy; } else { z = -hz; y = u * hy; } }
      p[0] = this.X(d); p[1] = y; p[2] = z;
      const band = v.band ? (d >= v.band[0] - 0.02 && d <= v.band[1] + 0.02) : false;
      const head = (lt * 1.6) % (NL + 5) - 2, pulse = Math.exp(-Math.pow(k - head, 2) * 0.7);
      set(band && v.bandGold ? 0.8 : -0.4); vrot(p, c, t);
      return (edge ? 1.25 : 0.3) * (0.4 + (band ? 0.5 : 0) + 0.6 * pulse);
    },
    tags(c, t, lt) {
      const v = c.viz || {}, out = [];
      (v.tokens || []).forEach(tk => out.push({ text: tk.text, at: [this.X(tk.d), tk.y ?? 0.95, 0.5], style: tk.style || 'gold', align: 'center', a: smooth(tk.t, tk.t + 0.5, lt) }));
      if (v.band) out.push({ text: v.bandLabel || 'workspace band', at: [this.X((v.band[0] + v.band[1]) / 2), -0.85, 0.5], dy: 30, style: 'small', align: 'center', a: smooth(0.8, 1.6, lt) });
      out.push({ text: 'input', at: [this.X(0), -0.85, 0.5], dy: 30, style: 'small', align: 'center', a: smooth(0.5, 1.2, lt) });
      out.push({ text: 'output', at: [this.X(1), -0.85, 0.5], dy: 30, style: 'small', align: 'center', a: smooth(0.5, 1.2, lt) });
      return out;
    },
  };

  // ── delete one layer at a time: how much accuracy is lost ──
  V.drop = {
    loss(k, v) { return k === 0 ? v.big : 2 + 7 * hash(k + 3); },
    pt(i, t, lt, c) {
      const v = c.viz, n = v.n || 12, k = Math.floor(r(i, 0) * n), x = -1.75 + 3.5 * k / (n - 1), y0 = 0.8;
      const h = 1.75 * this.loss(k, v) / v.big * easeOut((lt - 0.8 - k * 0.08) / 1.2);
      if (r(i, 1) < 0.35) { blob(x, y0, 0, 0.045, i); set(k === 0 ? 1 : -0.6); vrot(p, c, t); return 0.9; }
      seg(x, y0, x, y0 - h, r(i, 2), i, 0.008); set(k === 0 ? 1 : -0.6); vrot(p, c, t);
      return h > 0.01 ? (k === 0 ? 0.9 : 0.5) : 0;
    },
    tags(c, t, lt) { const v = c.viz; return [
      { text: v.bigLabel, at: [-1.75, 0.8, 0], dy: -22, style: 'gold', align: 'left', a: smooth(0.8, 1.5, lt) },
      { text: '−' + v.big + ' pts', at: [-1.75, 0.8 - 1.75, 0], dx: 16, style: 'num', align: 'left', a: smooth(1.8, 2.4, lt) },
      { text: v.restLabel, at: [0.45, 0.8, 0], dy: -22, style: 'name', align: 'left', a: smooth(1.2, 1.9, lt) },
      { text: 'at most −10 pts', at: [0.45, 0.8 - 0.45, 0], dy: 34, style: 'numInk', align: 'left', a: smooth(2.2, 2.8, lt) },
    ]; },
  };

  // ── steps of a procedure, in order or shuffled ──
  V.pipeline = {
    pos(c, k) { const v = c.viz; return v.shuffled ? [[1.25, 0.5], [-1.3, -0.45], [0.0, 0.1]][k] : [-1.35 + k * 1.35, 0]; },
    pt(i, t, lt, c) {
      const v = c.viz, k = Math.floor(r(i, 1) * 3), [cx, cy0] = this.pos(c, k), h = 0.3, cy = cy0 + (v.shuffled ? 0.05 * Math.sin(t * 1.3 + k * 2) : 0);
      if (r(i, 0) < 0.8) {
        const face = Math.floor(r(i, 2) * 6), a = (r(i, 3) * 2 - 1) * h, b = (frac(r(i, 2) * 6) * 2 - 1) * h, s = face % 2 ? h : -h;
        if (face < 2) { p[0] = cx + s; p[1] = cy + a; p[2] = b; } else if (face < 4) { p[0] = cx + a; p[1] = cy + s; p[2] = b; } else { p[0] = cx + a; p[1] = cy + b; p[2] = s; }
        const lit = v.shuffled ? 0.15 : Math.exp(-Math.pow(k - ((lt * 0.9) % 4.5), 2) * 1.5);
        set(v.shuffled && k === 0 ? 0 : -0.3); vrot(p, c, t);
        return 0.5 + 0.8 * lit;
      }
      if (v.shuffled) { blob(cx, cy, 0, 0.12, i); set(-0.5); vrot(p, c, t); return 0.3; }
      const s = frac(r(i, 2) + t * 0.25); seg(-1.35, 0, 1.35, 0, s, i, 0.02); set(1); vrot(p, c, t); return 0.8;
    },
    tags(c, t, lt) { const v = c.viz, out = [];
      v.labels.forEach((lb, k) => { const [x, y] = this.pos(c, k); out.push({ text: lb, at: [x, y + 0.3, 0.3], dy: -16, style: 'mono', align: 'center', a: smooth(0.7 + k * 0.3, 1.3 + k * 0.3, lt) }); });
      if (v.verdict) out.push({ text: v.verdict, at: [0, -0.95, 0], style: v.shuffled ? 'bad' : 'good', align: 'center', a: smooth(2.2, 2.9, lt) });
      return out; },
  };

  // ── several inputs feeding one node (or one node generalising several) ──
  V.hub = {
    pos(c, k) { const v = c.viz, n = v.nodes.length;
      if (v.layout === 'left') return [-1.55, n === 1 ? 0 : 0.95 - k * 1.9 / (n - 1)];
      if (v.layout === 'right') return [1.2, n === 1 ? 0 : 0.7 - k * 1.4 / (n - 1)];
      const a = Math.PI / 2 + Math.PI / n + 2 * Math.PI * k / n; return [1.35 * Math.cos(a), 1.0 * Math.sin(a)]; },
    center(c) { const l = c.viz.layout; return l === 'left' ? [1.15, 0] : l === 'right' ? [-1.0, 0] : [0, 0]; },
    pt(i, t, lt, c) {
      const v = c.viz, n = v.nodes.length, [ox, oy] = this.center(c), r0 = r(i, 0);
      if (r0 < 0.22) { blob(ox, oy, 0, 0.16, i); set(1); vrot(p, c, t); return easeOut((lt - 0.3) / 0.8) * 1.0; }
      const k = Math.floor(r(i, 1) * n), nd = v.nodes[k], [nx, ny] = this.pos(c, k), ap = easeOut((lt - 0.5 - k * 0.3) / 0.8);
      if (r0 < 0.55) { blob(nx, ny, 0, 0.07, i); set(nd.hi ? 1 : -0.5); vrot(p, c, t); return ap * (nd.hi ? 1.1 : 0.8); }
      const s = frac(r(i, 2) + t * 0.28), u = v.dir === 'out' ? s : 1 - s;
      seg(ox, oy, nx, ny, 0.12 + 0.76 * u, i, 0.015); set(nd.hi ? 1 : -0.4); vrot(p, c, t);
      return ap * 0.55 * Math.sin(Math.PI * s);
    },
    tags(c, t, lt) { const v = c.viz, out = [], [ox, oy] = this.center(c);
      const ring = !v.layout || v.layout === 'ring';
      out.push({ text: v.center, at: [ox, oy, 0], dx: ring ? 64 : 0, dy: ring ? -10 : 52, style: 'gold', align: ring ? 'left' : 'center', a: smooth(0.5, 1.2, lt) });
      if (v.centerNote) out.push({ text: v.centerNote, at: [ox, oy, 0], dx: ring ? 64 : 0, dy: ring ? 14 : 76, style: 'small', align: ring ? 'left' : 'center', a: smooth(0.8, 1.5, lt) });
      v.nodes.forEach((nd, k) => { const [x, y] = this.pos(c, k), side = v.layout === 'left' || v.layout === 'right';
        const a1 = smooth(0.7 + k * 0.3, 1.3 + k * 0.3, lt), a2 = smooth(1.0 + k * 0.3, 1.6 + k * 0.3, lt);
        if (side) { // keep labels off the streams: above upper nodes, below lower ones
          const up = y >= this.center(c)[1] - 1e-6, xl = v.layout === 'left' ? x - 0.12 : x - 0.12;
          out.push({ text: nd.label, at: [xl, y, 0], dy: up ? (nd.note ? -60 : -40) : 38, style: nd.hi ? 'gold' : 'name', align: 'left', a: a1 });
          if (nd.note) out.push({ text: nd.note, at: [xl, y, 0], dy: up ? -40 : 58, style: 'small', align: 'left', a: a2 });
        } else {
          const up = y >= 0;
          out.push({ text: nd.label, at: [x, y, 0], dy: up ? -30 : 28, style: nd.hi ? 'gold' : 'name', align: 'center', a: a1 });
          if (nd.note) out.push({ text: nd.note, at: [x, y, 0], dy: up ? -50 : 48, style: 'small', align: 'center', a: a2 });
        } });
      return out; },
  };

  // ── a population of policies, and the space of blends between them ──
  V.simplex = {
    K: 5,
    vert(k) { const a = Math.PI / 2 + 2 * Math.PI * k / this.K; return [1.25 * Math.cos(a), 1.1 * Math.sin(a)]; },
    dir(seed, out) { let s = 0; for (let k = 0; k < this.K; k++) { const w = -Math.log(Math.max(1e-6, hash(seed * 7.3 + k * 1.7))); out[k] = w; s += w; }
      let x = 0, y = 0; for (let k = 0; k < this.K; k++) { const [vx, vy] = this.vert(k); x += vx * out[k] / s; y += vy * out[k] / s; } return [x, y]; },
    tmp: new Float32Array(8),
    pt(i, t, lt, c) {
      const v = c.viz, r0 = r(i, 0);
      if (r0 < 0.3) { const k = Math.floor(r(i, 1) * this.K), [x, y] = this.vert(k); blob(x, y, 0, 0.08, i); set(-0.2); vrot(p, c, t); return 1.0; }
      if (r0 < 0.4) { const k = Math.floor(r(i, 1) * this.K), [ax, ay] = this.vert(k), [bx, by] = this.vert((k + 1) % this.K); seg(ax, ay, bx, by, r(i, 2), i, 0.006); set(-0.7); vrot(p, c, t); return 0.3; }
      if (r0 < 0.9) {
        const fill = v.fill ? easeOut((lt - 0.6) / 2.0) : 0, [x, y] = this.dir(i * 0.37 + 1, this.tmp);
        const k = Math.floor(r(i, 1) * this.K), [vx, vy] = this.vert(k);
        p[0] = vx + (x - vx) * fill + g(i, 0) * 0.01; p[1] = vy + (y - vy) * fill + g(i, 1) * 0.01; p[2] = g(i, 2) * 0.05;
        set(-0.3); vrot(p, c, t); return v.fill ? 0.55 : 0.7;
      }
      if (!v.cursor) { p[0] = p[1] = p[2] = 0; return 0; }
      const e = Math.floor(lt / 1.1), [x, y] = this.dir(e + 11, this.tmp);
      blob(x, y, 0, 0.06, i); set(1); vrot(p, c, t); return easeOut((lt - 1.6) / 0.6) * 1.3;
    },
    tags(c, t, lt) { const v = c.viz, out = [];
      const [x0, y0] = this.vert(0);
      out.push({ text: v.vertexLabel, at: [x0, y0, 0], dy: -24, style: 'name', align: 'center', a: smooth(0.6, 1.3, lt) });
      if (v.fill) out.push({ text: v.fillLabel, at: [0, -1.1, 0], dy: 28, style: 'gold', align: 'center', a: smooth(1.6, 2.4, lt) });
      if (v.cursor) { const [x, y] = this.dir(Math.floor(lt / 1.1) + 11, this.tmp); out.push({ text: v.cursorLabel, at: [x, y, 0], dx: 26, style: 'small', align: 'left', a: smooth(2.0, 2.6, lt) }); }
      return out; },
  };

  // ── a wall of Atari games, lighting up as records fall ──
  V.records = {
    pt(i, t, lt, c) {
      const v = c.viz, n = v.n, cols = v.cols || 8, k = Math.floor(r(i, 0) * n), col = k % cols, row = Math.floor(k / cols);
      const rows = Math.ceil(n / cols), cx = -1.75 + col * (3.5 / (cols - 1)), cy = (rows - 1) * 0.3 - row * 0.6;
      const on = INVADER[(Math.floor(t / 0.55) + k) % 2], px = on[Math.floor(r(i, 1) * on.length) % on.length], sz = 0.036;
      p[0] = cx + (px[0] + (r(i, 2) - 0.5) * 0.8) * sz; p[1] = cy + (px[1] + (r(i, 3) - 0.5) * 0.8) * sz; p[2] = g(i, 0) * 0.01;
      const lit = k < n * easeOut((lt - 0.6) / 3.0) ? 1 : 0;
      set(lit ? 1 : -0.8); vrot(p, c, t);
      return 0.22 + 0.85 * lit;
    },
    tags() { return []; },
  };

  // ── how much data: two volumes ──
  V.volume = {
    rad(c) { const v = c.viz; return [1.0, Math.max(0.07, Math.cbrt(v.b.v / v.a.v))]; },
    pt(i, t, lt, c) {
      const [ra, rb] = this.rad(c), big = r(i, 0) < 0.86, m = Math.hypot(g(i, 0), g(i, 1), g(i, 2)) || 1, u = Math.cbrt(r(i, 1));
      const rad = (big ? ra : rb) * u * easeOut((lt - (big ? 0.4 : 1.2)) / 1.0), cx = big ? -0.7 : 1.45;
      p[0] = cx + g(i, 0) / m * rad; p[1] = g(i, 1) / m * rad; p[2] = g(i, 2) / m * rad;
      set(big ? -0.6 : 1); vrot(p, c, t); return big ? 0.45 : 1.2;
    },
    tags(c, t, lt) { const v = c.viz, [ra, rb] = this.rad(c); return [
      { text: v.a.label, at: [-0.7, -ra, 0], dy: 30, style: 'name', align: 'center', a: smooth(0.8, 1.4, lt) },
      { text: v.a.sub, at: [-0.7, -ra, 0], dy: 52, style: 'small', align: 'center', a: smooth(1.0, 1.6, lt) },
      { text: v.b.label, at: [1.45, -Math.max(rb, 0.2), 0], dy: 30, style: 'gold', align: 'center', a: smooth(1.6, 2.2, lt) },
      { text: v.b.sub, at: [1.45, -Math.max(rb, 0.2), 0], dy: 52, style: 'small', align: 'center', a: smooth(1.8, 2.4, lt) },
    ]; },
  };

  // ── a replay buffer whose sampling distribution changes ──
  V.replay = {
    C: 14, Rw: 8,
    prob(c, k, lt) { const v = c.viz, ph = this.phase(c, lt), col = k % this.C, row = Math.floor(k / this.C);
      if (ph.mode === 'uniform') return 0.5;
      if (ph.mode === 'prior') return Math.pow(hash(k * 3.1), 5) * 1.6;
      const cx = 7 + 5 * Math.sin(lt * 0.9), cy = 3.5 + 2.5 * Math.cos(lt * 0.7);
      return Math.exp(-((col - cx) ** 2 + (row - cy) ** 2) / 6) * 1.1 + 0.08; },
    phase(c, lt) { const P = c.viz.phases; let ph = P[0]; for (const q of P) if (lt >= q.at) ph = q; return ph; },
    pt(i, t, lt, c) {
      const n = this.C * this.Rw, k = Math.floor(r(i, 0) * n), col = k % this.C, row = Math.floor(k / this.C);
      const cx = -1.9 + col * 0.19, cy = 0.75 - row * 0.21, pr = Math.min(1, this.prob(c, k, lt));
      if (r(i, 1) < 0.78) { p[0] = cx + (r(i, 2) - 0.5) * 0.13; p[1] = cy + (r(i, 3) - 0.5) * 0.15; p[2] = g(i, 0) * 0.01;
        set(pr > 0.45 ? 1 : -0.7); vrot(p, c, t); return 0.15 + 0.9 * pr; }
      if (r(i, 1) < 0.86) { blob(1.55, 0, 0, 0.17, i); set(1); vrot(p, c, t); return 0.9; }
      const s = frac(r(i, 2) + t * 0.45); seg(cx, cy, 1.55, 0, s, i, 0.015); set(1); vrot(p, c, t);
      return pr * 0.8 * Math.sin(Math.PI * s);
    },
    tags(c, t, lt) { const v = c.viz, out = [];
      v.phases.forEach((q, k) => { const nxt = v.phases[k + 1]; const a = smooth(q.at + 0.1, q.at + 0.6, lt) * (nxt ? 1 - smooth(nxt.at - 0.1, nxt.at + 0.3, lt) : 1);
        out.push({ text: q.label, at: [-1.9, 0.95, 0], dy: -10, style: k === v.phases.length - 1 ? 'gold' : 'name', align: 'left', a }); });
      out.push({ text: v.buffer || 'replay buffer', at: [-0.65, -0.85, 0], dy: 26, style: 'small', align: 'center', a: smooth(0.6, 1.2, lt) });
      out.push({ text: v.learner || 'learner', at: [1.55, -0.2, 0], dy: 26, style: 'small', align: 'center', a: smooth(0.8, 1.4, lt) });
      return out; },
  };

  // ── the same target distribution under different settings ──
  V.alpha = {
    cx(c, k) { const n = c.viz.panels.length; return n === 1 ? 0 : n === 2 ? (k ? 0.95 : -0.95) : -1.4 + k * 1.4; },
    mode(j) { const a = Math.PI / 2 + 2 * Math.PI * j / 5; return [0.36 * Math.cos(a), 0.36 * Math.sin(a)]; },
    pt(i, t, lt, c) {
      const v = c.viz, n = v.panels.length, k = Math.floor(r(i, 0) * n), P = v.panels[k], cx = this.cx(c, k), ap = easeOut((lt - 0.5 - k * 0.7) / 0.9);
      if (r(i, 1) < 0.16) { const a = 2 * Math.PI * r(i, 2); p[0] = cx + 0.62 * Math.cos(a); p[1] = 0.62 * Math.sin(a); p[2] = 0; set(-0.8); vrot(p, c, t); return 0.22 * ap; }
      let j = Math.floor(r(i, 2) * 5), s = 0.06, x, y;
      if (P.mode === 'collapse') { j = 0; s = 0.035; }
      if (P.mode === 'balanced') { const w = r(i, 2); j = w < 0.4 ? 0 : w < 0.6 ? 1 : w < 0.75 ? 2 : w < 0.9 ? 3 : 4; }
      [x, y] = this.mode(j);
      if (P.mode === 'diverse') { x *= 1.15; y *= 1.15; s = 0.11; }
      if (P.mode === 'stuck') { x = 0; y = 0; s = 0.24; }
      blob(cx + x, y, 0, s, i);
      set(P.gold ? 1 : -0.4); vrot(p, c, t);
      return ap * (P.mode === 'collapse' ? 1.2 : P.mode === 'stuck' ? 0.5 : 0.85);
    },
    tags(c, t, lt) { const v = c.viz, out = [];
      v.panels.forEach((P, k) => { const a = smooth(0.7 + k * 0.7, 1.3 + k * 0.7, lt);
        out.push({ text: P.label, at: [this.cx(c, k), -0.62, 0], dy: 34, style: P.gold ? 'gold' : 'name', align: 'center', a });
        if (P.note) out.push({ text: P.note, at: [this.cx(c, k), -0.62, 0], dy: 58, style: 'small', align: 'center', a }); });
      return out; },
  };

  // ── per-sample regularisation: each sample on its own leash ──
  V.leash = {
    M: 16,
    A(j, t) { return Math.sin(0.55 * t + 2.1 * j) * 0.95; },
    pos(j, t) { const a = 2 * Math.PI * j / this.M + 0.2 * Math.sin(j), rr = 0.3 + 1.05 / (1 + Math.exp(-3.2 * this.A(j, t))); return [rr * Math.cos(a), 0.85 * rr * Math.sin(a)]; },
    pt(i, t, lt, c) {
      const j = Math.floor(r(i, 1) * this.M), [x, y] = this.pos(j, t), A = this.A(j, t), ap = easeOut((lt - 0.4 - j * 0.04) / 0.8);
      if (r(i, 0) < 0.14) { blob(0, 0, 0, 0.1, i); set(-0.3); vrot(p, c, t); return 0.9; }
      if (r(i, 0) < 0.55) { blob(x, y, 0, 0.05, i); set(A > 0 ? A : -0.6); vrot(p, c, t); return ap * (0.5 + 0.6 * Math.max(0, A) + 0.2); }
      seg(0, 0, x, y, r(i, 2), i, 0.005); set(A > 0 ? A * 0.8 : -0.8); vrot(p, c, t);
      return ap * 0.28;
    },
    tags(c, t, lt) { const v = c.viz || {}; return [
      { text: v.formula ?? 'β = β₀ − A', at: [0, 1.25, 0], style: 'num', align: 'center', a: smooth(0.8, 1.5, lt) },
      { text: v.hi ?? 'high advantage: explores', at: [1.4, 0.8, 0], style: 'gold', align: 'left', a: smooth(1.6, 2.2, lt) },
      { text: v.lo ?? 'low advantage: held close', at: [-0.3, -1.25, 0], style: 'name', align: 'center', a: smooth(2.0, 2.6, lt) },
      { text: v.ref ?? 'reference model', at: [0, 0, 0], dy: 32, style: 'small', align: 'center', a: smooth(1.0, 1.6, lt) },
    ]; },
  };

  // ── a denoising trajectory: reward at the end only, or a critic at every step ──
  V.denoise = {
    K: 6,
    path(s) { return [-1.75 + 3.5 * s, 0.22 * Math.sin(s * Math.PI * 1.6)]; },
    pt(i, t, lt, c) {
      const v = c.viz, r0 = r(i, 0), dense = v.mode === 'dense';
      if (r0 < 0.22) { const k = Math.floor(r(i, 1) * this.K), s = (k + 0.5) / this.K, [x, y] = this.path(s), a = 2 * Math.PI * r(i, 2);
        p[0] = x + 0.13 * Math.cos(a); p[1] = y + 0.13 * Math.sin(a); p[2] = 0;
        const head = frac(t * 0.17) * this.K - 0.5, pulse = dense ? Math.exp(-Math.pow(k - head, 2) * 2) : 0;
        const last = k === this.K - 1;
        set(dense || last ? 1 : -0.7); vrot(p, c, t);
        return dense ? 0.45 + 0.9 * pulse : (last ? 1.1 : 0.25);
      }
      const s = frac(r(i, 1) + t * 0.17), [x, y] = this.path(s), sp = 0.32 * (1 - s) + 0.035;
      if (s > 0.85) { // structure forms at the end
        const a = 2 * Math.PI * r(i, 2), pet = 0.18 + 0.08 * Math.cos(5 * a); p[0] = 1.75 + 0.05 + pet * Math.cos(a) * 0.9 + g(i, 0) * 0.01; p[1] = pet * Math.sin(a) * 0.9 + g(i, 1) * 0.01; p[2] = 0;
        const w = smooth(0.85, 0.95, s); p[0] = x + (p[0] - x) * w; p[1] = y + (p[1] - y) * w;
      } else { p[0] = x + g(i, 0) * sp * 0.4; p[1] = y + g(i, 1) * sp; p[2] = g(i, 2) * sp * 0.5; }
      set(-0.2); vrot(p, c, t);
      return 0.35 + 0.5 * s;
    },
    tags(c, t, lt) { const v = c.viz, [lx, ly] = this.path((this.K - 0.5) / this.K); return [
      { text: 'noise', at: [-1.75, -0.4, 0], dy: 20, style: 'small', align: 'center', a: smooth(0.5, 1.1, lt) },
      { text: 'image', at: [1.85, -0.4, 0], dy: 20, style: 'small', align: 'center', a: smooth(0.7, 1.3, lt) },
      v.mode === 'dense'
        ? { text: v.note ?? 'critic: a value at every step', at: [0, 0.55, 0], style: 'gold', align: 'center', a: smooth(1.2, 1.9, lt) }
        : { text: v.note ?? 'reward only at the end', at: [lx - 0.2, ly + 0.5, 0], style: 'gold', align: 'center', a: smooth(1.2, 1.9, lt) },
    ]; },
  };

  // ── proposed updates, clipped to a ring ──
  V.clip = {
    pt(i, t, lt, c) {
      const ring = 1.0;
      if (r(i, 0) < 0.18) { const a = 2 * Math.PI * r(i, 1); p[0] = ring * Math.cos(a); p[1] = ring * 0.88 * Math.sin(a); p[2] = 0; set(1); vrot(p, c, t); return 0.45; }
      const M = 36, j = Math.floor(r(i, 1) * M), batch = Math.floor(lt / 1.6), a = 2 * Math.PI * (j + hash(j + batch * 5)) / M;
      const L = 0.3 + 1.7 * Math.pow(hash(j * 1.3 + batch * 9.1), 2), grow = easeOut((lt - batch * 1.6) / 0.8) * L;
      const u = r(i, 2) * grow, uu = Math.min(u, ring);
      p[0] = uu * Math.cos(a); p[1] = uu * 0.88 * Math.sin(a); p[2] = g(i, 0) * 0.01;
      const clipped = u > ring;
      set(clipped ? 1 : -0.4); vrot(p, c, t);
      return clipped ? 0.9 : 0.5;
    },
    tags(c, t, lt) { const v = c.viz || {}; return [
      { text: v.ring || 'advantage clipping', at: [0.72, 0.72, 0], dx: 12, style: 'gold', align: 'left', a: smooth(1.0, 1.7, lt) },
      { text: v.note || 'critic warm-up before it guides the actor', at: [0, -1.0, 0], dy: 34, style: 'small', align: 'center', a: smooth(1.8, 2.5, lt) },
    ]; },
  };

  // ── a reasoning chain whose steps are each scored ──
  V.chain = {
    nodes(c) { return lay(c, () => { const n = c.viz.steps.length; return c.viz.steps.map((_, k) => [-1.7 + 3.4 * k / (n - 1), k % 2 ? -0.32 : 0.32]); }); },
    pt(i, t, lt, c) {
      const N = this.nodes(c), n = N.length, v = c.viz;
      if (r(i, 0) < 0.55) { const k = Math.floor(r(i, 1) * n), [x, y] = N[k], ap = easeOut((lt - 0.4 - k * 0.35) / 0.6);
        blob(x, y, 0, 0.065, i); const ok = v.steps[k].ok; set(ok === false ? -0.8 : v.gold ? 1 : -0.2); vrot(p, c, t); return ap * 1.0; }
      const k = Math.floor(r(i, 1) * (n - 1)), [ax, ay] = N[k], [bx, by] = N[k + 1], ap = easeOut((lt - 0.6 - k * 0.35) / 0.6);
      seg(ax, ay, bx, by, r(i, 2) * ap, i, 0.01); set(-0.3); vrot(p, c, t); return ap * 0.5;
    },
    tags(c, t, lt) { const N = this.nodes(c), v = c.viz;
      return v.steps.map((s, k) => ({ text: s.text, at: [N[k][0], N[k][1], 0], dy: k % 2 ? 36 : -30, style: s.style || (v.gold ? 'gold' : 'name'), align: 'center', a: smooth(0.7 + k * 0.35, 1.3 + k * 0.35, lt) })); },
  };

  // ── flow matching: noise streaming into structure; one mode can be rewarded ──
  V.flow = {
    pt(i, t, lt, c) {
      const v = c.viz || {}, q = frac(r(i, 0) + t * 0.11), e = easeInOut(q);
      const sx = -1.35 + g(i, 0) * 0.32, sy = g(i, 1) * 0.32, sz = g(i, 2) * 0.32;
      const a = 2 * Math.PI * r(i, 1), petal = 0.62 + 0.22 * Math.cos(5 * a);
      const tx = 1.15 + petal * Math.cos(a), ty = petal * Math.sin(a);
      p[0] = sx + (tx - sx) * e; p[1] = sy + (ty - sy) * e + 0.3 * Math.sin(Math.PI * q) * (r(i, 2) - 0.5); p[2] = sz * (1 - e);
      const pi = Math.floor(((a + Math.PI / 5) % (2 * Math.PI)) / (2 * Math.PI / 5)), rew = v.reward && pi === 0;
      set(rew ? Math.min(1, e * 1.4) : (v.reward ? -0.5 : -0.2)); vrot(p, c, t);
      return (0.45 + 0.75 * e) * smooth(0, 0.06, q) * (1 - smooth(0.94, 1, q)) * (rew ? 1.7 : 1);
    },
    tags(c, t, lt) { const v = c.viz || {}, out = [];
      if (v.from) out.push({ text: v.from, at: [-1.35, -0.6, 0], dy: 20, style: 'small', align: 'center', a: smooth(0.8, 1.4, lt) });
      if (v.to) out.push({ text: v.to, at: [1.15, -0.95, 0], dy: 20, style: 'small', align: 'center', a: smooth(1.0, 1.6, lt) });
      if (v.reward) out.push({ text: v.reward, at: [1.15, 1.05, 0], style: 'gold', align: 'center', a: smooth(1.6, 2.3, lt) });
      return out; },
  };

  return { V, vrot };
}
