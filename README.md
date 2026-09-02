# WebWorkers — Studio Website

AI Systems & Digital Growth Studio marketing site. React + Vite + TypeScript +
Tailwind CSS v4 + Framer Motion + Lucide React.

## 1. Installation

```bash
npm install
```

## 2. Development

```bash
npm run dev
```

Opens at `http://localhost:5173` by default.

## 3. Production build

```bash
npm run build
```

Type-checks with `tsc -b` and outputs a static bundle to `dist/`. Preview it locally with:

```bash
npm run preview
```

## 4. Environment variables

Copy `.env.example` to `.env` and fill in what applies:

```bash
cp .env.example .env
```

| Variable | Purpose |
|---|---|
| `VITE_BOOKING_URL` | Scheduling link embedded in the "Book a Call" section |
| `VITE_WHATSAPP_URL` | WhatsApp link shown in Contact and the footer |
| `VITE_EMAIL` | Email address (rendered as a `mailto:` link) |
| `VITE_LINKEDIN_URL` | LinkedIn profile/page link |
| `VITE_CONTACT_API_URL` | Endpoint the contact form submits to |

Any variable left blank degrades gracefully in the UI (a labeled placeholder
state) instead of breaking or faking success — nothing is hard-coded as if
it were live.

## 5. Connecting booking

Set `VITE_BOOKING_URL` to a scheduling page that supports being embedded in
an iframe — a Cal.com event link (`https://cal.com/<you>/<event>`) or a
Calendly link (`https://calendly.com/<you>/<event>`) both work as-is. For
Google Calendar appointment schedules, use the public booking page URL.
The Booking section (`src/sections/Booking.tsx`) renders it directly; no
other code changes are needed.

## 6. Connecting the contact form

The form (`src/components/ContactForm.tsx`) POSTs a JSON body —
`{ name, company, email, looking_for, budget, message }` — to
`VITE_CONTACT_API_URL`. This works as-is with:

- **Formspree**: use your form's endpoint, e.g. `https://formspree.io/f/xxxxxx`
- **Resend**: point it at a small serverless function that calls the Resend API
- **Supabase**: point it at a Supabase Edge Function or REST insert endpoint
- **Custom API**: any endpoint that accepts a JSON POST and returns a 2xx status

If `VITE_CONTACT_API_URL` is unset, the form still validates client-side but
shows a clearly labeled "not connected yet" message on submit instead of a
false success state.

## 7. Changing social / contact links

Update the corresponding `VITE_*` variables in `.env`. Nothing else to
change — `src/lib/config.ts` reads them and every section (`Footer`,
`Contact`) consumes that same config object.

## 8. Replacing project / service information

- **Projects**: `src/data/projects.ts`
- **Services**: `src/data/services.ts`
- **FAQ**: `src/data/faq.ts`

Each is a plain typed array — edit the objects directly, no component
changes required.

## 9. Logo

**No logo file was received with this brief.** `src/components/Logo.tsx`
is a placeholder wordmark (a simple node motif + "WebWorkers" text) — it is
not a redesign of a real logo, just a stand-in so the site isn't blank.
There's also a matching placeholder icon at `public/favicon.svg`.

To use the real WebWorkers logo:

1. Add the actual logo file to `public/` (e.g. `public/logo.png` or
   `public/logo.svg`).
2. Replace the contents of `src/components/Logo.tsx` with an `<img>` tag
   pointing at it, e.g.:
   ```tsx
   export function Logo({ className = '' }: { className?: string }) {
     return <img src="/logo.png" alt="WebWorkers" className={`h-8 w-auto ${className}`} />
   }
   ```
3. Optionally regenerate `public/favicon.svg` (or a `.png`/`.ico`) from the
   real mark and update the `<link rel="icon">` in `index.html` if the
   filename changes.

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, Button, ThemeToggle,
                SectionHeading, ServiceCard, ProjectCard, FaqAccordion,
                ContactForm, Logo, WorkflowSpine (signature diagram), icons
  sections/     Page sections: Hero, TrustStrip, FeaturedWork, Services,
                ProblemSolution, Process, WhyWebWorkers, CaseStudy, About,
                Booking, Contact, Faq, FinalCta
  pages/        Home.tsx composes all sections
  data/         services.ts, projects.ts, faq.ts — content separated from UI
  lib/          theme.tsx (light/dark context), config.ts (env wiring)
public/
  logo.svg, favicon.svg, robots.txt, sitemap.xml
```

## Notes

- Theme (light/dark) persists via `localStorage` under `ww-theme` and
  respects system preference on first visit.
- No client logos, testimonials, stats, or case-study results are
  invented anywhere — where real data isn't available, the copy is
  written to be honest about it (e.g. "Case Study" vs. "Coming Soon"
  badges on unfinished projects).
- `sitemap.xml`, `robots.txt`, and the canonical/OG URLs in `index.html`
  use a placeholder domain (`webworkers.example`) — update these once a
  real domain is live.
