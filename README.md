# Mosle Al Dein Soad — Portfolio

A React + Vite portfolio site, styled as a live "systems dashboard" for the
platform ecosystem you manage — an animated map of PRISM Echo, HRMS, Unnoti,
IRIS/Optimus, the Insurance Portal, and the Retailers App orbits your name in
the hero, with pulses traveling the connections like live data.

No backend server is needed. The contact form uses **Netlify Forms**
(built into Netlify hosting, free) so messages land straight in your
Netlify dashboard and forward to your email — nothing to host or run.

## Run it locally in VS Code

```bash
npm install
npm run dev
```

Open the printed `http://localhost:5173` URL. Edits save-and-reload instantly.

## Where to edit things

- **All text content** (name, experience, projects, skills, certifications) —
  `src/data/content.js`. Edit this one file to update copy across the whole
  site; you don't need to touch any component.
- **Ecosystem map nodes** — also in `src/data/content.js`, the `ecosystem`
  array. Add/remove a platform and the hero diagram updates automatically.
- **Colors / fonts** — CSS variables at the top of `src/index.css`
  (`--bg`, `--cyan`, `--amber`, `--font-display`, etc).
- **Sections** — each section is its own file in `src/components/`
  (`Hero.jsx`, `Experience.jsx`, `Projects.jsx`, `Skills.jsx`, `Contact.jsx`…).
- **Resume PDF**: if you want a "Download Resume" button, drop a PDF into
  `public/` (e.g. `public/resume.pdf`) and link to `/resume.pdf`.

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with `npm run preview`.

## Deploy to Netlify

**Option A — drag & drop (fastest):**
1. Run `npm run build`.
2. Go to app.netlify.com/drop and drag the `dist` folder in.

**Option B — connect your Git repo (recommended, auto-deploys on push):**
1. Push this project to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Build command: `npm run build`. Publish directory: `dist`.
   (Already configured in `netlify.toml`, so Netlify should detect this
   automatically.)
4. Deploy.

The contact form works automatically once deployed to Netlify — no extra
setup. Submissions appear under **Site configuration → Forms** in your
Netlify dashboard, and you can turn on email notifications there.

## Stack

- Vite + React 19
- Framer Motion for animation
- Plain CSS (design tokens in `index.css`, inline styles in components —
  no CSS framework to fight with when you want to tweak something)
