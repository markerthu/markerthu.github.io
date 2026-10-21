// ui.js: the toolbar, the census, the learning panel and the hint. Every number shown is read from live state.
const $ = id => document.getElementById(id);

const ICON = {
  manta: '<svg viewBox="0 0 34 28" aria-hidden="true"><path d="M17 6c1.6 0 2.6-1.6 3-3 .4 1.5 0 3.3-.8 4.3 3.8 1.7 8.6 7 13.4 9.6-5.6.2-10.4-1.4-13.6-1.2-.5 2.4-1.2 4.7-2 6.8-.8-2.1-1.5-4.4-2-6.8-3.2-.2-8 1.4-13.6 1.2 4.8-2.6 9.6-7.9 13.4-9.6-.8-1-1.2-2.8-.8-4.3.4 1.4 1.4 3 3 3z" fill="#1d2226"/><path d="M13.4 10.2l-4 3.6M20.6 10.2l4 3.6" stroke="#e9eef0" stroke-width="1.6" stroke-linecap="round"/><path d="M17 21.5v5" stroke="#1d2226" stroke-width="1.1"/></svg>',
  eagle: '<svg viewBox="0 0 34 28" aria-hidden="true"><path d="M17 4.2c1.4 0 2 1.2 2 2.4 4 1.6 9 6.6 14 9.3-5.8.3-10.8-1.2-14 .6-.3 1.8-1 3.2-2 4.2-1-1-1.7-2.4-2-4.2-3.2-1.8-8.2-.3-14-.6 5-2.7 10-7.7 14-9.3 0-1.2.6-2.4 2-2.4z" fill="#1b2433"/><g fill="#f1f4f7"><circle cx="13" cy="11" r=".9"/><circle cx="21" cy="11" r=".9"/><circle cx="10" cy="13.2" r=".8"/><circle cx="24" cy="13.2" r=".8"/><circle cx="15.4" cy="13.6" r=".8"/><circle cx="18.6" cy="13.6" r=".8"/><circle cx="17" cy="9.4" r=".7"/></g><path d="M17 20.6c-.3 3 .6 5 2.8 7" stroke="#1b2433" stroke-width=".9" fill="none"/></svg>',
  sting: '<svg viewBox="0 0 34 28" aria-hidden="true"><ellipse cx="17" cy="11" rx="7.6" ry="8.6" fill="#a58c56"/><g fill="#2f9be0"><circle cx="14" cy="8" r="1"/><circle cx="20" cy="8.4" r="1"/><circle cx="12.6" cy="12" r=".9"/><circle cx="21.4" cy="12.4" r=".9"/><circle cx="17" cy="11" r="1"/><circle cx="15.6" cy="15.4" r=".8"/><circle cx="18.6" cy="15.6" r=".8"/></g><path d="M17 19.5c0 2.5-.4 4.5-1.6 7.5" stroke="#8c7748" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>',
  moon: '<svg viewBox="0 0 34 28" aria-hidden="true"><circle cx="17" cy="13" r="10" fill="#e9ecfb" fill-opacity=".85" stroke="#c9cdee" stroke-width=".8"/><g fill="none" stroke="#c98ccb" stroke-width="1.5"><path d="M13.6 9.8a2.4 2.4 0 1 1 1.4 3.4"/><path d="M20.4 9.8a2.4 2.4 0 1 0-1.4 3.4"/><path d="M13.6 16.2a2.4 2.4 0 1 0 1.4-3.4"/><path d="M20.4 16.2a2.4 2.4 0 1 1-1.4-3.4"/></g></svg>',
  nettle: '<svg viewBox="0 0 34 28" aria-hidden="true"><g stroke="#f2b779" stroke-width=".8" fill="none"><path d="M12 15c-1 4-3 7-5 10"/><path d="M15 16c-.3 4-1 7-2 10"/><path d="M19 16c.3 4 1 7 2 10"/><path d="M22 15c1 4 3 7 5 10"/></g><circle cx="17" cy="11" r="8.4" fill="#e9934d"/><g stroke="#b9612a" stroke-width=".9" opacity=".7"><path d="M17 3v16M9 11h16M11.2 5.2l11.6 11.6M22.8 5.2L11.2 16.8"/></g><circle cx="17" cy="11" r="3" fill="#ffd6a1" opacity=".7"/></svg>',
};
const SEA = [
  ['calm', 'Calm', '<svg viewBox="0 0 24 24"><path d="M3 13c2.5-2 5-2 7.5 0s5 2 7.5 0 2.5-1 3-1"/><path d="M3 18c2.5-2 5-2 7.5 0s5 2 7.5 0"/></svg>'],
  ['rain', 'Rain', '<svg viewBox="0 0 24 24"><path d="M7 15a4 4 0 0 1-.4-8A6 6 0 0 1 18 8.5 3.5 3.5 0 0 1 17.5 15z"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/></svg>'],
  ['current', 'Current', '<svg viewBox="0 0 24 24"><path d="M3 8h13l-3-3M3 16h13l-3 3"/><path d="M19 8h2M19 16h2"/></svg>'],
  ['whirl', 'Whirlpool', '<svg viewBox="0 0 24 24"><path d="M12 12a1.5 1.5 0 1 0 1.5 1.5A4 4 0 1 0 9 9.4a6.5 6.5 0 1 0 9 1.2"/></svg>'],
];
const OPT = {
  sound: ['Sound', '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>'],
  learn: ['Learning', '<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h16"/><path d="M7 15l4-4 3 2 5-6"/></svg>'],
  hide: ['Hide', '<svg viewBox="0 0 24 24"><path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z"/><path d="M4 4l16 16"/></svg>'],
};
const NAMES = { manta: ['Manta', 'mantas'], eagle: ['Eagle ray', 'eagle rays'], sting: ['Stingray', 'stingrays'], moon: ['Moon jelly', 'moon jellies'], nettle: ['Sea nettle', 'sea nettles'] };
export const SPECIES_ORDER = ['manta', 'eagle', 'sting', 'moon', 'nettle'];

export function createUI(api) {
  const sp = $('species'), seas = $('seas'), opts = $('opts');
  const ctBadge = {};
  SPECIES_ORDER.forEach((k, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sp'; b.dataset.sp = k;
    b.setAttribute('aria-label', `Add a ${NAMES[k][0].toLowerCase()} (key ${i + 1}; Shift removes one)`);
    b.innerHTML = `${ICON[k]}<span class="nm">${NAMES[k][0]}</span><span class="ct" aria-hidden="true">0</span>`;
    b.addEventListener('click', e => { e.shiftKey ? api.remove(k) : api.add(k); api.touched(); });
    b.addEventListener('contextmenu', e => { e.preventDefault(); api.remove(k); api.touched(); });
    sp.appendChild(b); ctBadge[k] = b.querySelector('.ct');
  });
  const seaBtn = {};
  for (const [k, label, svg] of SEA) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'ctl'; b.setAttribute('aria-pressed', k === 'calm' ? 'true' : 'false');
    b.innerHTML = `${svg}<span class="nm">${label}</span>`;
    b.addEventListener('click', () => { api.setSea(k); api.touched(); });
    seas.appendChild(b); seaBtn[k] = b;
  }
  const optBtn = {};
  for (const k of ['sound', 'learn', 'hide']) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'ctl'; b.setAttribute('aria-pressed', 'false');
    b.innerHTML = `${OPT[k][1]}<span class="nm">${OPT[k][0]}</span>`;
    opts.appendChild(b); optBtn[k] = b;
  }
  optBtn.sound.addEventListener('click', () => { const on = api.toggleSound(); optBtn.sound.setAttribute('aria-pressed', on ? 'true' : 'false'); });
  const panel = $('panel');
  const setPanel = on => { panel.classList.toggle('open', on); optBtn.learn.setAttribute('aria-pressed', on ? 'true' : 'false'); if (on) renderRows(true); };
  optBtn.learn.addEventListener('click', () => setPanel(!panel.classList.contains('open')));
  const setHidden = on => { document.body.classList.toggle('ui-hidden', on); optBtn.hide.setAttribute('aria-pressed', on ? 'true' : 'false'); api.uiHidden(on); };
  optBtn.hide.addEventListener('click', () => setHidden(true));
  $('showui').addEventListener('click', () => setHidden(false));
  $('restart').addEventListener('click', () => { api.startOver(); renderRows(true); });

  // learning rows
  const rows = $('rows');
  rows.innerHTML = '<span class="h"></span><span class="h">Follow the scent</span><span class="h">Steer clear of nettles</span><span class="h hg">Plankton vs untrained</span>';
  const R = {};
  for (const k of ['manta', 'eagle', 'sting']) {
    const who = document.createElement('span'); who.className = 'who'; who.textContent = NAMES[k][0];
    const m1 = document.createElement('span'); m1.className = 'meter'; m1.innerHTML = '<i></i>'; m1.setAttribute('role', 'meter');
    const m2 = document.createElement('span'); m2.className = 'meter'; m2.innerHTML = '<i></i>'; m2.setAttribute('role', 'meter');
    const g = document.createElement('span'); g.className = 'gain'; g.textContent = '—';
    if (k === 'sting') { m2.classList.add('off'); m2.title = 'Stingrays keep to water too shallow for nettles, so they never practise this habit.'; m2.setAttribute('aria-label', 'Not learned: stingrays rarely meet nettles'); }
    rows.append(who, m1, m2, g); R[k] = { m1, m2, g };
  }
  const setMeter = (m, v) => { // v in about [-3, 3]; bar grows from the centre line
    const i = m.firstChild, f = Math.max(-1, Math.min(1, v / 3));
    i.classList.toggle('neg', f < 0); i.style.left = (f >= 0 ? 50 : 50 + f * 50) + '%'; i.style.width = Math.abs(f) * 50 + '%';
    m.setAttribute('aria-valuenow', v.toFixed(2)); m.setAttribute('aria-valuemin', '-3'); m.setAttribute('aria-valuemax', '3');
  };
  let lastRows = 0;
  function renderRows(force) {
    const now = performance.now(); if (!force && now - lastRows < 400) return; lastRows = now;
    const s = api.state();
    for (const k of ['manta', 'eagle', 'sting']) {
      const th = s.thetas[k]; setMeter(R[k].m1, th[0]); if (k !== 'sting') setMeter(R[k].m2, -th[2]);
      const ab = s.ab[k];
      const okAB = ab && isFinite(ab.ratio);
      R[k].g.textContent = okAB ? `×${ab.ratio.toFixed(2)}` : ab ? 'too little plankton' : 'measuring…';
      R[k].g.title = okAB ? `In the same water and from the same starts, the learned habit ate ${ab.ratio.toFixed(2)}× the plankton of an untrained ray (${ab.n} paired swims, checked ${Math.round(s.t - ab.t)} s ago).` : ab ? 'Too little plankton near this species to compare. Tap the water to scatter some.' : '';
    }
    $('gen').textContent = `generation ${s.gen}` + (s.counts.manta + s.counts.eagle + s.counts.sting ? '' : ' · paused: no rays in the water');
  }
  let lastCensus = '';
  function update() {
    const s = api.state();
    for (const k of SPECIES_ORDER) ctBadge[k].textContent = s.counts[k];
    const rays = s.counts.manta + s.counts.eagle + s.counts.sting, jel = s.counts.moon + s.counts.nettle;
    const txt = `${rays} ${rays === 1 ? 'ray' : 'rays'} · ${jel} ${jel === 1 ? 'jelly' : 'jellies'} · ${s.seaLine}`;
    if (txt !== lastCensus) { $('census').textContent = txt; lastCensus = txt; }
    for (const [k] of SEA) seaBtn[k].setAttribute('aria-pressed', s.sea === k ? 'true' : 'false');
    if (panel.classList.contains('open')) renderRows(false);
  }
  let hintGone = false;
  const hideHint = () => { if (!hintGone) { hintGone = true; $('hint').classList.add('gone'); } };
  let toastT = 0;
  const toast = msg => { const t = $('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2200); };
  // keyboard
  addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    const n = '12345'.indexOf(e.key.replace(/[!@#$%]/, c => '12345'['!@#$%'.indexOf(c)]));
    if (n >= 0) { const s = SPECIES_ORDER[n]; e.shiftKey ? api.remove(s) : api.add(s); api.touched(); return; }
    if (k === 'c') api.setSea('calm'); else if (k === 'r') api.setSea('rain'); else if (k === 'u') api.setSea('current'); else if (k === 'w') api.setSea('whirl');
    else if (k === 's') optBtn.sound.click(); else if (k === 'l') setPanel(!panel.classList.contains('open'));
    else if (k === 'h') setHidden(!document.body.classList.contains('ui-hidden'));
    else if (e.key === 'Escape') { setPanel(false); if (document.body.classList.contains('ui-hidden')) setHidden(false); }
    else return;
    api.touched();
  });
  return { update, hideHint, toast, NAMES };
}
