# Andrea Churchwell · Portfolio

Thoughtful software. A human perspective.

My personal portfolio brings together work in software, AI, sports analytics, and open source. With a background in healthcare, I’m interested in building tools that help people learn, explore, and make sense of information.

Built with React and Vite, the site pairs a botanical design with project summaries, live demos, source code, and a downloadable résumé.

## Selected work

### Our Door — AI learning platform

A team-built learning platform that helps students work through questions with hints, curriculum references, and next steps. Instructors receive anonymous insight into common learning challenges.

**Technologies:** React, FastAPI, ChromaDB, OpenAI, SQLite

[Live app](https://ourdoor.sampom.me) · [Repository](https://github.com/SamPomeroy/our-door)

### October Shift — MLB contender analytics

An interactive dashboard comparing all 30 MLB teams through offensive momentum, projected rotations, bullpen performance, recent form, and quality-adjusted results. A 15-step data pipeline supports team profiles, ranking history, and a preserved 2026 regular-season baseline.

The project evolved from single-game prediction experiments into a more focused comparison of postseason team profiles. Its score is a relative contender rating, not a championship probability.

**Technologies:** Python, Streamlit, pandas, NumPy, pybaseball, Statcast, MLB Stats API

[Live dashboard](https://october-shift.streamlit.app/) · [Repository](https://github.com/Andreachurchwell/2026-mlb-prediction)

### Andrea’s Bracket Breakdown — March Madness simulator

An interactive NCAA tournament simulator using feature engineering and Monte Carlo methods to explore bracket outcomes, matchup probabilities, and potential upsets.

**Technologies:** Python, pandas, Streamlit, Monte Carlo simulation

[Live app](https://march-madness-bracket-simulator-aagsrgemhfrs8ibkjjqcme.streamlit.app/) · [Repository](https://github.com/Andreachurchwell/march-madness-bracket-simulator)

### CesiumJS — Open-source contributions

Two contributions through FCF to CesiumJS, an open-source engine for 3D geospatial applications:

- **Merged fix: invalid glTF sampler wrap modes.** Traced texture-loading behavior and worked with maintainers to clarify the expected fallback. [PR #13562](https://github.com/CesiumGS/cesium/pull/13562) resolved [issue #12781](https://github.com/CesiumGS/cesium/issues/12781).
- **Investigation: repeated map attribution.** Added runtime logging and compared Google Maps attribution across zoom levels. Helped establish that overlapping provider responses, rather than duplicate credit IDs, explained the repeated content. This was an investigation with maintainers, without a merged code change. [Issue #12944](https://github.com/CesiumGS/cesium/issues/12944).

### Volunteer Weather — Weather analytics dashboard

A Python desktop dashboard with forecasts, radar animations, map overlays, and data visualizations. Includes a hometown temperature prediction model and a team feature comparing weather patterns across hometowns. Selected to present the GUI at graduation.

**Technologies:** Python, Tkinter, OpenWeather API, SQLite, Matplotlib, scikit-learn

[Repository](https://github.com/Andreachurchwell/TPS_Capstone2025)

### NBA Fatigue Study — Sports data analysis

An analysis of NBA scheduling data from 2019–2024, exploring how back-to-back games, four-in-six stretches, and travel mileage relate to team performance. Combines logistic regression with interactive visualizations to examine differences across teams.

**Technologies:** Python, pandas, Plotly, logistic regression

### Catwalk Detection — Computer vision

A real-time cat detection application that processes webcam input and locks a Windows computer when a cat is detected.

**Technologies:** Python, OpenCV, YOLO

[Repository](https://github.com/Andreachurchwell/camera-face-detection)

## Portfolio features

- Responsive layouts for desktop and smaller screens
- Botanical artwork, soft colors, and editorial typography
- Project demos, repository links, and résumé download
- Keyboard focus indicators and a skip-to-content link
- Reduced-motion support
- A decorative mouse ribbon on desktop with a fine pointer; disabled on touchscreens and when reduced motion is requested
- Compressed WebP artwork

## Built with

React · Vite · JavaScript · CSS · Framer Motion · React Icons · ESLint

## Run locally

Install Node.js and npm, then run these commands from the project folder:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. Keep the terminal running while using the site, and press **Ctrl+C** to stop the server.

## Build and check

```bash
npm run lint
npm run build
npm run preview
```

The production build is generated in `dist/`. The preview command serves that build locally; it does not publish the site.

## Project structure

```text
public/                 Résumé and public assets
src/
  assets/               Images and botanical artwork
  components/           Navigation, hero, projects, contact, and mouse ribbon
  styles/               Shared styles and design variables
  App.jsx               Page composition
  main.jsx              React entry point
index.html              Page metadata and application entry
```

## Connect

**Andrea Churchwell**

[GitHub](https://github.com/Andreachurchwell) · [LinkedIn](https://www.linkedin.com/in/andrea-churchwell-669443321/)
