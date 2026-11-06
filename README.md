# Joshua Falcasantos: portfolio

A dark, techy one-page portfolio built with Next.js 16, Tailwind v4 and Framer Motion. The visual direction comes from `ui-ux-pro-max` (see `../../resources/portfolio/design-system.md`). The hero beams and the navbar come from 21st.dev.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (static)
npm run lint
```

## Edit the content

All the copy lives in **`src/content.ts`**: profile, projects, process, about, skills and experience. Change it there; you don't need to touch any components.

- **Add a project**: push a new object onto `projects`. The bento in `sections/projects.tsx` places the first two projects. If you add more, extend the grid, for example with more `md:col-span-2` cards.
- **Add a skill**: add `{ name, icon }`. `icon` must be a key in the `icons` map in `sections/about.tsx`, which uses lucide-react names.

## Structure

```
src/
  content.ts                  # all site copy
  app/layout.tsx              # fonts (Inter + JetBrains Mono), SEO metadata, skip link
  app/globals.css             # color tokens, marquee/blink keyframes, reduced-motion rules
  components/site-nav.tsx     # nav items
  components/ui/
    background-beams.tsx      # 21st.dev (Aceternity), recolored, deterministic, reduced-motion safe
    tubelight-navbar.tsx      # 21st.dev (ayushmxxn), plus scroll-spy and a11y labels
    marquee.tsx               # skills marquee (pauses on hover, stops on reduced motion)
    section-heading.tsx       # Reveal-on-scroll + numbered section heading
    brand-icons.tsx           # GitHub/LinkedIn SVGs (lucide v1 dropped brand icons)
  components/sections/        # hero, projects (bento), process, about, experience, contact
```

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds the static export and publishes it every time you push to `main`.

**One-time setup:** go to the repo's Settings → Pages → Build and deployment and set Source to **GitHub Actions**.

How it works:
- `next.config.ts` uses `output: "export"`, so `npm run build` writes plain HTML to `out/`.
- The workflow sets `PAGES_BASE_PATH` (`/portfolio`) so asset URLs resolve under `username.github.io/portfolio/`. Locally the variable is unset, so dev runs at `/`.
- To test the Pages build locally from Git Bash:

  ```bash
  MSYS_NO_PATHCONV=1 PAGES_BASE_PATH=/portfolio npm run build
  ```

  Then serve a folder that contains `out/` renamed to `portfolio/`.

The site is also Vercel-ready: import the repo at vercel.com/new. Leave `PAGES_BASE_PATH` unset there.
