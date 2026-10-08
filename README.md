# Mogli Advertisement Company — Website

Marketing website for **Mogli Advertisement Company** (Printing Experts), a
customized screen-printing business serving the Manesar–Bawal–Khushkhera
industrial belt since 1996.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript and
Tailwind CSS. Deployed on [Vercel](https://vercel.com).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command         | What it does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the local dev server         |
| `npm run build` | Production build (must pass in CI) |
| `npm run lint`  | Run ESLint                         |
| `npm run start` | Serve the production build locally |

## Project structure

- `src/lib/site-config.ts` — **single source of truth** for all business data:
  phone, WhatsApp, email, services, clients, service areas. Edit this file to
  update content across the whole site.
- `src/app/` — pages: `/` (home), `/services`, `/contact`, plus
  `sitemap.ts`/`robots.ts` for SEO.
- `src/components/` — Header, Footer, ContactForm, WhatsAppButton, etc.

## Contact form

The form on `/contact` submits through [Web3Forms](https://web3forms.com)
(free). Set the access key in the `NEXT_PUBLIC_WEB3FORMS_KEY` environment
variable (see `.env.example`). Without the key, the page shows a WhatsApp
fallback instead of the form.

## Deployment

Pushes to `main` deploy automatically to production via Vercel; every pull
request gets its own preview URL. GitHub Actions (`.github/workflows/ci.yml`)
runs lint + build on each push and PR.

### One-time setup checklist

1. Fill in real phone/WhatsApp/email in `src/lib/site-config.ts`.
2. Create a free key at web3forms.com and set `NEXT_PUBLIC_WEB3FORMS_KEY` in
   Vercel → Project Settings → Environment Variables.
3. Optional: buy a custom domain (e.g. `mogliprinting.in`) and add it in
   Vercel → Project Settings → Domains, then update `url` in
   `src/lib/site-config.ts`.
