# Project Specification — Mogli Advertisement Company Website

**Status:** Live development · **Repo:** [github.com/Codegrammer2002/mogli-advertisement](https://github.com/Codegrammer2002/mogli-advertisement) · **Last updated:** 2026-10-08

## 1. Purpose

Marketing website for **Mogli Advertisement Company** ("Printing Experts"), a
customized screen-printing business operating since **1996** in the
Manesar–Bawal–Khushkhera industrial belt (Haryana/Rajasthan, India). The goal
of the site is to generate customer enquiries from industrial buyers, with
WhatsApp as the primary conversion channel.

## 2. Business context

| Item | Value |
| --- | --- |
| Business name | Mogli Advertisement Company |
| Tagline | Printing Experts |
| Founded | 1996 |
| Phone / WhatsApp | +91 98960 84820 |
| Email | himanshusagar1968@gmail.com |
| Base | Manesar, Gurugram, Haryana |
| Service areas | Manesar, Panchgaon, Bilaspur, Dharuhera, Bawal, Bhiwadi, Khushkhera, Chaupanki |

**Services:** screen printing on wooden/corrugated boxes, utensils (spindles,
trays, cups), PP/Nylon/SS/Aluminium/Glass surfaces, cooler bodies, SS bottles,
signage & sunboards, vinyl stickers, paper gummed stickers, and screen making
(printing dies on cloth).

**Reference clients:** Nefab, Showa Arch Metal, Vbros Auto (Manesar);
Xpertpack, Pluss Advance (Bawal); JP Group, DLJM Housewares, Bhagwati
Products, Parasnath Innovative Industries (Khushkhera); Panash Technologies
(Noida).

## 3. Tech stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js 16 (App Router) | All routes statically prerendered |
| Language | TypeScript (strict) | |
| Styling | Tailwind CSS v4 | Design tokens via CSS variables + `@theme inline` |
| Fonts | next/font (Google) | Fraunces, Bricolage Grotesque, JetBrains Mono |
| Forms | Web3Forms API | Client-side POST, no backend |
| Hosting | Vercel | Auto-deploy from `main`; preview deploys per PR |
| CI | GitHub Actions | `lint` + `build` on every push/PR |

## 4. Architecture

### Routes

| Route | Content |
| --- | --- |
| `/` | Hero + job-ticket spec card, stats strip, services index, client ledger, coverage map, CTA |
| `/services` | Substrate compatibility table + detailed service catalogue |
| `/contact` | Call/WhatsApp/email cards, enquiry form |
| `/sitemap.xml`, `/robots.txt` | Generated via Next.js file conventions |

### Key files

- `src/lib/site-config.ts` — **single source of truth** for all business data
  (contact details, services, clients, service areas). Every component reads
  from it; content changes are one-file edits.
- `src/app/layout.tsx` — root layout: fonts, global metadata, LocalBusiness
  JSON-LD structured data, Header/Footer/WhatsApp button.
- `src/components/` — `Header`, `Footer`, `ContactForm`, `WhatsAppButton`,
  `ClientsSection`, `ServiceAreas`, `RegMark` (registration-mark decoration).
- `next.config.ts` — injects `BUILD_YEAR` at build time (Next.js 16 forbids
  `new Date()` during prerendering; the "years of experience" figure derives
  from it and refreshes on every deploy).

## 5. Design system

Print-shop aesthetic — the site should look like it came off the shop's own press.

- **Typography:** Fraunces (display, weight 800–900) / Bricolage Grotesque
  (body, weight 300–500) / JetBrains Mono (uppercase "tech labels", defined by
  the `.tech-label` utility in `globals.css`).
- **Color discipline:** exactly three roles — one dominant background (paper
  cream `#f4efe4` light / deep ink `#14110a` dark), one text color, one accent
  (screen-print orange `#e03e00` light / `#ff5a1f` dark). No gradients. All
  colors are CSS variables in `globals.css`; dark mode follows
  `prefers-color-scheme`.
- **Texture & decoration:** halftone dot pattern (`.halftone` utility),
  registration crosshairs (`RegMark`), 2px solid borders, square corners,
  offset-panel shadows.
- **Layout rules:** asymmetric hero (no centered hero), numbered index lists
  and dense ledger tables instead of card grids, inverted ink-black CTA blocks.

## 6. Contact & conversion

1. **WhatsApp** (primary): floating button on every page + hero/footer links,
   `wa.me` deep link with pre-filled greeting.
2. **Phone / email:** `tel:` and `mailto:` links in header, footer, contact page.
3. **Enquiry form:** POSTs to Web3Forms with key from
   `NEXT_PUBLIC_WEB3FORMS_KEY` (see `.env.example`). Without the key the form
   degrades gracefully to a WhatsApp call-to-action.

## 7. SEO

- Per-page titles/descriptions targeting "screen printing + {area}" queries.
- Open Graph tags, `sitemap.xml`, `robots.txt`.
- `LocalBusiness` JSON-LD with `areaServed` for local search.

## 8. Workflow

- Work on `main` (solo project); meaningful incremental commits.
- `npm run lint` and `npm run build` must pass before every commit (enforced
  again by CI on GitHub).
- Pushing to `main` deploys production on Vercel; PRs get preview URLs.

## 9. Open items

- [ ] Connect the GitHub repo to Vercel (owner action, ~2 min).
- [ ] Web3Forms access key → Vercel env var `NEXT_PUBLIC_WEB3FORMS_KEY`.
- [ ] Update `siteConfig.url` once the final production URL exists.
- [ ] Real logo to replace the "M" wordmark.
- [ ] Photos of actual printed work (biggest credibility upgrade).
- [ ] Optional: custom domain (e.g. `mogliprinting.in`).
- [ ] Optional: Hindi language version.
