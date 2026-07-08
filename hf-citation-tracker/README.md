# Beautified Paper Citation Tracker (for your forked HF Space)

These are restyled drop-in replacements for the WNJXYK/paper-citation-tracker Space.
Only `index.html` and `embed.html` changed — all backend logic (app.py, scholar.py,
storage.py) is untouched, so behavior is identical; only the look is upgraded.

## How to use
1. Open https://huggingface.co/spaces/WNJXYK/paper-citation-tracker
2. Top-right ⋮ menu → **Duplicate this Space** (creates your own copy).
3. Set env: `SCHOLAR_URL` = your Scholar profile, `SERPAPI_KEY` (secret), `HF_TOKEN` (secret).
4. In your new Space, replace `index.html` and `embed.html` with the two files here.
5. The Space rebuilds automatically — done.

## What changed (visual only)
- Indigo→violet→pink gradient identity, animated brand, drop-shadow.
- Dark mode toggle (🌙/☀️), persisted, full dark theme.
- Terminal-style code chips (mono font) + gradient Copy buttons.
- Gradient stat number, gradient citation pills, hover-lift cards.
- Chart.js: gradient area fill, smooth line, hover tooltips, themed grid.
- Polished nav pills, range buttons, calendar cells; fade-up animations; reduced-motion safe.

NOTE: this folder is excluded from the Jekyll build (see _config.yml) — it is NOT
published on jiajunfan.com; it's just storage for the Space files.
