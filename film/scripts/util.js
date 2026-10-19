// Lay chapters end to end: each chapter gets t0/t1 from its length (seconds).
export function timeline(chapters, len = 8) {
  let t = 0;
  return chapters.map(c => { const d = c.len || len; const o = { ...c, t0: t, t1: t + d }; t += d; return o; });
}
