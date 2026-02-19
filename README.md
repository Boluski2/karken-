# Baltic Harvest Hub — Karken Company

> A responsive, SEO-first marketing site for a B2B food distributor (Lithuania / Baltic region).

## Overview

This project is a multi-page marketing site built for Karken Company, a B2B distributor of authentic African food products. The site is implemented with modern frontend tooling and focuses on performance, accessibility and search-engine readiness. It includes bilingual content (Lithuanian / English), structured data (JSON-LD), and an EmailJS-powered contact flow for lead capture.

## Highlights

- Responsive, accessible UI built with Tailwind CSS
- React + TypeScript app scaffolded with Vite
- Multi-language content using a custom `LanguageProvider` (`lt` / `en`)
- SEO-ready via `react-helmet-async`, Open Graph/Twitter tags and JSON-LD
- Optimized images with IntersectionObserver (`src/components/OptimizedImage.tsx`) and priority loads for hero assets
- Reusable component library (Radix primitives + local `ui/` components)

## Tech stack

- React, TypeScript, Vite
- Tailwind CSS
- React Router, @tanstack/react-query
- Framer Motion, lucide-react, Radix UI primitives
- EmailJS (contact form scaffolding)
- Vitest, ESLint

## Run locally

Install and start the dev server:

```bash
npm install
npm run dev
```

Build and preview production bundle:

```bash
npm run build
npm run preview
```

## Important files to cite in a portfolio

- [package.json](baltic-harvest-hub/package.json) — dependencies and scripts
- [vite.config.ts](baltic-harvest-hub/vite.config.ts) — build config & path alias
- [tailwind.config.ts](baltic-harvest-hub/tailwind.config.ts) — theme and utilities
- [src/App.tsx](baltic-harvest-hub/src/App.tsx) — providers and routing
- [src/components/SEO.tsx](baltic-harvest-hub/src/components/SEO.tsx) — SEO/meta + JSON-LD
- [src/components/OptimizedImage.tsx](baltic-harvest-hub/src/components/OptimizedImage.tsx) — lazy/priority image logic
- [src/contexts/LanguageContext.tsx](baltic-harvest-hub/src/contexts/LanguageContext.tsx) — bilingual provider
- [src/config/emailjs.ts](baltic-harvest-hub/src/config/emailjs.ts) — EmailJS setup scaffold

## Suggested screenshots for portfolio

- Homepage hero (full-bleed image + CTA)
- Services grid (sourcing / export / import / distribution cards)
- Contact form + success toast (demonstrates EmailJS flow)
- About / Compliance section (bilingual content and JSON-LD evidence)
