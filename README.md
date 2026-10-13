# therakeshpurohit.com

Personal portfolio for [Rakesh Purohit](https://www.therakeshpurohit.com) — DevRel Engineer at Rocket. Cinematic scrollytelling, zero runtime JavaScript.

---

## About

I'm a DevRel Engineer at [Rocket](https://rocket.new) (rocket.new, formerly DhiWise), where I lead technical content, content strategy, and community. 144 bylined articles on AI agents, MCP, and AI app building. A Discord community grown from 0 to 22k. An Instagram rebuilt from 3 likes a post to up to ~10k engagements. I build with the tools I write about — Claude Code, Codex, and Cursor are in my daily workflow, and my job in that loop is judging the output.

Based in Surat, Gujarat. Relocating to Bengaluru.

---

## The concept

The homepage is structured as seven cinematic chapters — full-screen scenes with large serif title cards, film grain, letterbox bars, and subtitle-style captions. Each chapter opens into a "Rabbit Hole" section: headline → explainer → artifact (link or quote) → one-line takeaway, with margin notes and highlight marks that animate in on scroll.

Palette: near-black `#111010`, warm off-white `#F2EEE4`, amber accent `#D4A853`. Dark by default.

Animation is driven entirely by CSS `animation-timeline: view()` scroll-driven animations. No scroll-jacking. Browsers that don't support the spec see the content at full opacity (graceful fallback via `@supports`). `prefers-reduced-motion` disables every animation globally.

---

## Stack

| Package | Version |
|---|---|
| [Astro](https://astro.build) | 7.3.8 |
| [Tailwind CSS](https://tailwindcss.com) | 4.3.3 |
| [@tailwindcss/vite](https://github.com/tailwindlabs/tailwindcss) | 4.3.3 |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | 3.7.4 |
| [@astrojs/rss](https://docs.astro.build/en/guides/rss/) | 4.0.19 |
| [satori](https://github.com/vercel/satori) | 0.52.0 |
| [sharp](https://sharp.pixelplumbing.com) | 0.35.5 |

Astro was chosen over Next.js because it ships zero JavaScript by default — the right trade-off for a mostly-static scrollytelling portfolio driven by CSS animations. No React, no hydration overhead, no unused component library. Content is handled by Astro's Content Layer (Markdown + Zod schema). OG images are generated at build time via `satori` + `sharp` and served as static PNGs.

---

## Performance and SEO

- **Zero runtime JS** — no framework JavaScript shipped to the browser by default; the only JS is the ~30-line inline theme toggle
- **Static output** — `output: 'static'`, hosted on Vercel's CDN edge
- **OG images** — 1200×630 PNG per page and per post, generated at `astro build` via satori + sharp; no SVG fallback
- **RSS** — `/rss.xml` covering all posts; autodiscovery `<link>` in every page `<head>`
- **Sitemap** — `/sitemap-index.xml` via `@astrojs/sitemap`
- **JSON-LD** — `Person` (jobTitle, worksFor, sameAs), `WebSite`, `BlogPosting` per post
- **Canonical host** — `www.therakeshpurohit.com`; `vercel.json` 301-redirects the apex domain
- **Cache headers** — `immutable` for hashed `/_astro/*` assets; `s-maxage=86400, stale-while-revalidate=86400` for HTML
- **robots.txt** — no non-standard `Host:` line
- **Accessibility** — semantic landmarks, skip link, `focus-visible` states, `aria-current`, `aria-label`, alt text throughout

---

## Project structure

```
src/
  content/
    writing/        # Markdown posts (Astro Content Layer)
  components/
    BaseHead.astro  # meta, canonical, OG, JSON-LD, RSS link
    Navbar.astro
    Footer.astro    # credits roll
  layouts/
    Base.astro
  pages/
    index.astro           # scrollytelling homepage (7 chapters)
    work.astro            # content samples
    projects.astro        # open source tools
    writing/
      index.astro         # post list
      [slug].astro        # post detail
    about.astro
    404.astro
    rss.xml.ts
    robots.txt.ts
    og/[slug].png.ts      # build-time OG image endpoint
  styles/
    global.css            # tokens, film grain, scroll-driven animations
  utils/
    content.ts            # site data, projects, experience
    og.ts                 # satori + sharp OG generation
src/content.config.ts     # Content Layer schema (Zod)
astro.config.mjs
vercel.json
```

---

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
```

```bash
npm run build        # production build → dist/
npm run preview      # serve dist/ locally
npm run typecheck    # astro check (0 errors expected)
```

---

## Deploy

Hosted on [Vercel](https://vercel.com). The `vercel.json` at the root handles:

- 301 redirect from apex (`therakeshpurohit.com`) → www
- `Cache-Control: immutable` for `/_astro/*` hashed assets
- `s-maxage=86400, stale-while-revalidate=86400` for HTML pages

Vercel detects the Astro framework automatically. No adapter needed for static output.

---

## Links

[therakeshpurohit.com](https://www.therakeshpurohit.com) · [GitHub](https://github.com/TheRakeshPurohit) · [LinkedIn](https://linkedin.com/in/therakeshpurohit) · [X](https://x.com/irakeshpurohit)
