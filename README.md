# Millfield Tapes

This is a Vite + React project (mobile case UI). Build with `npm run build` and deploy `dist/` to GitHub Pages.

Steps to publish are provided in the repository root and CI workflow.# The Millfield Tapes

A browser-playable detective-simulation interface: the player explores a
victim's smartphone across two home screens for one of four cases. Every
icon opens a real, interactive screen — texts and emails can be sent, calls
can be placed, both games are playable, and Maps has clickable pins.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Cases

All four cases on the selection screen are playable:

- **NOOR (Case #001)** — built from real source material you provided.
- **FELIX (Case #002)** — "The Pre-Med Student's Last Plunge," an original
  mystery written for this engine, using the title/theme you provided.
- **REI (Case #003)** — "The Second Ledger," an original mystery.
- **DANNY (Case #004)** — "Permit 2209," an original mystery.

FELIX, REI, and DANNY are original stories written to fit the same
phone-interface format as NOOR (notes, calls, texts, emails, photos, map
pins, and a Maya recall quiz) — swap in real material any time by editing
the files under `src/data/<case>/`.

## What's interactive

- **Notes** — locked note behind a 4-digit passcode, per case
- **Phone** — tap a contact to place a simulated call (ringing → connected → logs the call)
- **Messages** — real send/receive; typed messages append to the thread
- **Gmail** — compose new emails or reply to existing ones; inbox updates live
- **Photos** — album grid
- **Maps** — clickable pins for locations mentioned in each case
- **Signal / Instagram** — case-specific locked/archived threads
- **Safari** — address bar + bookmarks
- **Weather / Calendar / Bank / Clock / Voice Memos / Health / Settings** — all clickable, per-case where relevant
- **Snake** — real playable game (arrow keys or on-screen d-pad)
- **Tic Tac Toe** — playable against a simple computer opponent

## Project structure

```
src/
  data/
    registry.js     combines all four cases into one lookup object
    cases.js         the four case-menu entries (name, cover image, tagline)
    home2Apps.js      shared app-icon config for the second home screen
    noor/             NOOR's notes, calls, messages, emails, albums, locations, quiz, meta
    felix/            FELIX's data, same shape
    rei/              REI's data, same shape
    danny/            DANNY's data, same shape
  context/
    CaseContext.jsx   React context — provides the active case's data to every app screen
  components/
    apps/             every full-screen phone app, including the two games
  App.jsx             root component — tracks which case is active
  main.jsx            React entry point
```

## Adding or replacing a case

1. Add a folder under `src/data/<id>/` with `notes.js`, `calls.js`,
   `messages.js`, `emails.js`, `albums.js`, `locations.js`,
   `mayaQuestions.js`, and `meta.js` (copy an existing case as a template).
2. Register it in `src/data/registry.js` and `src/data/cases.js`.

## Known design choices (not sourced from original material)

- Each locked "In Case" note's `PASSCODE` (in `src/data/<case>/notes.js`) is
  derived from a number already present in that case's own notes — documented
  in a comment above each `PASSCODE` export.
- Each case's `mayaQuestions.js` is a recall quiz built from facts already in
  that case's data, not scripted dialogue.
- FELIX, REI, and DANNY are original mysteries written for this project,
  not sourced from external material — replace their `src/data/<case>/`
  folders with real content any time.
