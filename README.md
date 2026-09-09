# Kevin Dsouza | Application Security Portfolio

A responsive, static web application with Home, About, Experience, Projects, and Blogs. The site uses native HTML, CSS, and JavaScript, with a small Node.js generator to keep content and shared layouts consistent. There are no production dependencies, trackers, or remote font requests.

## Run locally

Requires Node.js 20 or newer. No dependency installation is needed.

```sh
node tooling/build.mjs
node tooling/serve.mjs
```

The server prints its local URL and selects the next port if 4173 is occupied. The generated root `index.html` also works directly in a browser.

## Edit the portfolio

- `src/content.mjs`: resume-backed experience, skills, certifications, projects, and planned writing.
- `src/render.mjs`: page templates and shared navigation/footer.
- `assets/css/site.css`: responsive layout and design tokens.
- `assets/js/app.js`: career tabs, mobile navigation, project deep links, and the portfolio terminal.
- `assets/files/`: downloadable resume and the original research reports.

Run `node tooling/build.mjs` after changes. It updates the root HTML for the existing GitHub Pages setup and writes a deployable copy to `dist/`. `background.html` remains available as an experience-page alias. The build only copies site assets and generated pages into `dist/`.

The career timeline supports keyboard navigation and direct role links, with a full readable history when JavaScript is disabled. Project details use native disclosure controls. Terminal input is rendered as plain text. Layouts support mobile devices and reduced-motion preferences.

## Validate

```sh
node tooling/check.mjs
```

The check uses Node.js and Python 3's standard library. Set `PYTHON` to a Python executable if it is not on PATH. It verifies JavaScript syntax, every local link and anchor, asset availability, document landmarks, career-panel relationships, and key resume facts. No automated browser testing is included.

## Content notes

The supplied September 2026 CV is the source of truth. Citi's VP role starts in May 2026; the preceding AVP role runs from February 2023 to May 2026. The Northeastern ITS capstone is volunteer research, not employment. Security+ and CEH are labeled expired. Blog topics remain planned articles. Professional tools without a public repository are labeled accordingly.

The downloadable PDF was regenerated from the supplied CV. To regenerate it from a future Markdown CV, use Python with ReportLab:

```sh
python tooling/resume.py path/to/updated-cv.md assets/files/kevin-dsouza-resume.pdf
node tooling/build.mjs
```

## Assets and hosting

Icons are vendored from Lucide (`assets/icons/LICENSE`). DM Sans is self-hosted under the SIL Open Font License (`assets/fonts/OFL.txt`). Research thumbnails are rendered from the existing reports.

The repository remains compatible with GitHub Pages. Sites uses `.openai/hosting.json` and the static `dist/` output for a separate private review deployment. Publishing to GitHub Pages requires a separate push to the GitHub remote.
