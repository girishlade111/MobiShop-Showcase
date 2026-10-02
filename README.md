# MobiShop Showcase

A modern, professional, high-performance e-commerce showcase website for mobile phones — browse a rich product catalog, filter and sort by brand or price, view detailed spec sheets, manage a cart and wishlist, and get AI-powered product recommendations. Built with Next.js 15, React 18, Tailwind CSS, and shadcn/ui, with Genkit server actions powering the AI recommendations feature.

## Features

- **Dynamic product catalog** — curated phone catalog with detailed specs, ratings, reviews, stock info, and multiple images per product
- **Advanced filtering & sorting** — filter by brand, price range, or name; sort options on the catalog page
- **Product detail pages** — per-product pages (`/products/[id]`) with image gallery and full spec sheets
- **AI-powered recommendations** — Genkit flow (`src/ai/flows/product-recommendations.ts`) suggests relevant products based on browsing history
- **Shopping cart & wishlist** — fully functional cart and wishlist with global state via React contexts
- **Auth pages** — sign-in / sign-up UI scaffolding (`/auth`)
- **Contact page** — contact form and info section
- **Modern responsive UI** — shadcn/ui components, Tailwind CSS animations, Lucide icons, great on mobile and desktop

## Tech Stack

- **Framework:** [Next.js 15.3](https://nextjs.org/) (App Router, server actions)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React 18](https://reactjs.org/), [Tailwind CSS 3.4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), Radix UI primitives
- **AI:** [Genkit 1.x](https://firebase.google.com/docs/genkit) with `@genkit-ai/googleai` (Gemini) for product recommendations
- **Forms & validation:** react-hook-form, Zod
- **Visuals:** recharts, embla-carousel
- **Hosting target:** Firebase App Hosting (`apphosting.yaml`) — or any Node-capable host

## Project Structure

```
src/
├── ai/                  # Genkit setup (genkit.ts, dev.ts) and AI flows
│   └── flows/product-recommendations.ts   # 'use server' AI recommendation flow
├── app/                 # Next.js App Router pages
│   ├── auth/            # sign-in / sign-up pages
│   ├── cart/            # cart page
│   ├── contact/         # contact page
│   ├── products/[id]/   # product detail pages
│   └── wishlist/        # wishlist page
├── components/          # reusable components incl. shadcn/ui set
│   └── ai-product-recommendations.tsx
├── contexts/            # cart & wishlist state providers
├── hooks/               # custom hooks
└── lib/                 # products.ts catalog data, utils.ts helpers
```

## Quick Start

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install
npm run dev        # dev server with Turbopack on port 9002
```

Open http://localhost:9002 in the browser.

**AI recommendations** require a Google AI (Gemini) API key — set `GEMINI_API_KEY` (or `GOOGLE_GENAI_API_KEY`) in your environment before starting; the flow lives in `src/ai/flows/product-recommendations.ts`.

## Available Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start dev server (Turbopack, port 9002) |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | Lint |
| `npm run typecheck` | `tsc --noEmit` |

## Env Vars

| Var | Purpose |
|---|---|
| `GEMINI_API_KEY` / `GOOGLE_GENAI_API_KEY` | Gemini API key for the AI recommendation flow (server-side) |

## Deploy Notes

- The app uses Next.js **server actions** (`'use server'` in the Genkit AI flow), so it is **not statically exportable** — deploy to a Node-capable host (Firebase App Hosting config in `apphosting.yaml` is included; Vercel, Netlify, or any Node server also work).
- Product images are loaded from `images.unsplash.com` and `placehold.co` — whitelisted in `next.config.ts` `images.remotePatterns`.
- `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` are enabled in `next.config.ts`.

## Roadmap Ideas

- Real checkout / payments integration
- Backend persistence for cart, wishlist, and orders
- More Genkit flows (price-drop alerts, spec comparison assistant)

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
