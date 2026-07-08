# Suchitra M — Developer Portfolio

A premium, animated developer portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** (App Router, React 18)
- **TypeScript**
- **Tailwind CSS** — custom indigo / blue / purple design tokens, no dark mode
- **Framer Motion** — scroll reveals, hover micro-interactions, floating elements
- **Lucide React** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: this project uses `next/font/google` (Geist) which fetches fonts at build time and requires an internet connection. This works out of the box on Vercel and any machine with normal network access.

## Editing content

All personal content — name, roles, bio, skills, projects, education, and contact links — lives in one place:

```
lib/data.ts
```

Update that file to change any text on the site without touching component code.

## Replacing the résumé

The "Download Resume" button in the hero links to `public/resume.pdf`, currently a placeholder. Replace that file with your real résumé (keep the filename, or update `resumeUrl` in `lib/data.ts`).

## Project structure

```
app/
  layout.tsx       Root layout, fonts, metadata/SEO
  page.tsx          Assembles all sections
  globals.css        Design tokens, glass/gradient utilities
  icon.svg           Favicon
  loading.tsx        Route loading state
components/
  Navbar.tsx          Sticky nav, scroll-spy, mobile menu
  Hero.tsx             Headline, CTAs, animated profile card
  About.tsx            Bio + snapshot stats
  Skills.tsx           Animated skill category cards
  Projects.tsx         Project cards with hover overlays
  Education.tsx        Timeline-style education entry
  Contact.tsx          Contact link cards
  Footer.tsx            Social links + copyright
  ScrollProgress.tsx    Top scroll progress bar
  AmbientBackground.tsx Grid + animated gradient blobs, mouse-follow glow
  AnimatedCounter.tsx    Count-up numbers
  TypingText.tsx         Typing/deleting role rotator
  Reveal.tsx              Scroll-in-view fade/slide wrapper
  SectionHeading.tsx      Shared eyebrow/title/description block
lib/
  data.ts             Single source of truth for all site content
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed. Deploy.
