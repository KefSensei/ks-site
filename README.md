# Kef Sensei — Studio Website

Official marketing site for **Kef Sensei Studio** — independent game developers creating FUN since 2007.

Built with **Astro 6**, **Tailwind CSS 4**, and vanilla TypeScript/CSS animations. No framework overhead, no dependencies at runtime — just fast, clean static pages.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | [Astro 6](https://astro.build) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) with `@theme` tokens |
| Animations | Vanilla CSS keyframes + JS carousel logic |
| Forms | [Formspree](https://formspree.io) |
| Sitemap | `@astrojs/sitemap` (auto-generated) |
| Build | Vite (via Astro) → static `dist/` |

---

## Pages

| Route | Description |
|---|---|
| `/` | Main studio site — Hero, Services, Portfolio, About, Contact |
| `/privacy-policy` | GDPR / CCPA / PIPEDA-compliant privacy policy |
| `/terms-of-use` | IP, NDA, confidentiality & partnership provisions |
| `/games/roxys-magic-reels` | Game detail page (scaffold for future expansion) |
| `/404` | Custom not-found page |

---

## Project Structure

```
src/
├── assets/              # Processed images (logo, studio art, game art)
├── components/
│   ├── layout/          # Nav, Footer, SEOHead
│   ├── sections/        # Hero, Services, Portfolio, About, Contact
│   └── ui/              # Badge, Button, ScrollReveal, GradientMesh
├── content/
│   └── portfolio/       # Markdown entries for each game title
├── layouts/
│   └── BaseLayout.astro
├── pages/               # File-based routing
└── styles/
    └── global.css       # Tailwind @theme tokens + global styles

public/
├── assets/
│   ├── game/            # Game banners, screenshots, symbols
│   └── studio/          # Sensei characters, runner chars, concept art
└── robots.txt
```

---

## Dev Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server → http://localhost:4321
npm run build        # Type-check + build → dist/
npm run preview      # Preview production build
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run format       # Prettier format
```

---

## Key Design Decisions

- **No JS framework** — all interactivity is vanilla TS/CSS (carousel, scroll reveal, parallax). Keeps the bundle tiny.
- **CSS keyframe animations** — `floatGem`, `floatChar`, `frameEnter`/`frameExit`, `idleFloat`/`idleSway`/`idleMeditate`/`idleBounce`. No GSAP dependency on the marketing site.
- **JS carousel over pure CSS** — the sensei character carousel uses `setInterval` + class toggling with `setTimeout` cleanup (more reliable than `animationend` across browsers).
- **Transparent PNG characters** — all hero floaters use RGBA assets so they composite cleanly over the dark background.
- **`@theme` design tokens** — all brand colours, fonts, and spacing defined once in `global.css` and consumed via Tailwind utilities.

---

## Timeline Reference

| Year | Title | Status |
|---|---|---|
| 1997 | Fruit Salad | Shipped |
| 2009 | Hotel Dash | Shipped |
| 2009 | Scrabble Plus | Shipped |
| 2010 | Parking Dash | Shipped |
| 2011 | Hotel Dash 2 | Shipped |
| 2011 | Garden Dash | Shipped |
| 2013 | Sparkling Amber | Shipped |
| 2014 | Hidden Express | Shipped |
| 2017 | Fruity Beats | In Development |
| 2018 | Detective Tempin | In Development |
| 2020 | Runestrike | Shipped |
| 2022 | Rabbit Hole | In Development |
| 2024 | Finding Roxy | In Development |
| 2026 | Roxy's Magic Reels | In Development |

---

## Roadmap

- [ ] Analytics (Plausible or GA4)
- [ ] Individual game detail pages for all titles
- [ ] Deployment pipeline (Vercel)
- [ ] Mobile touch optimisation
- [ ] Blocker tile mechanics in Roxy's Magic Reels integration

---

*Kef Sensei Studio — Est. 2007 — Creating FUN.*
