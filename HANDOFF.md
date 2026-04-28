# Lucid — Handoff Notes

This repository is a **visual + content reference** for a ketamine-therapy telehealth marketing site. It is not production code. You are expected to rebuild it on your stack (Google Cloud, real database, real auth) using this as the source of truth for design, copy, structure, and form UX.

---

## What this repo is

- A working React + Vite + Express prototype.
- All copy, page structure, navigation, brand voice, and form UX is intentional. Lift it.
- Visual design (colors, typography, spacing) lives in `client/src/index.css` as CSS variables — easy to port to any styling system.

## What this repo is **not**

- Not production code. Don't ship it.
- Not a real backend. Submissions live in an in-memory array (`server/storage.ts`) and are wiped on restart. Replace this with your real persistence.
- Not HIPAA-compliant. There is no auth, no encryption-at-rest, no audit log, no PHI handling, no BAAs.
- No real medical data. Testimonials, condition stats, and team mentions are placeholders.

---

## Running it locally

```bash
npm install
npm run dev
```

That's it — **no environment variables, no database**. The app serves both the Express API and the Vite dev server on port 5000 (or auto-assigned if 5000 is taken on macOS).

---

## File structure

```
shared/
  schema.ts           ← Form data contract (zod). Authoritative for validation.
  routes.ts           ← API path + input/response schema for the assessment endpoint.

server/
  index.ts            ← Express bootstrap.
  routes.ts           ← Single route: POST /api/assessments.
  storage.ts          ← In-memory store. REPLACE with real persistence.
  vite.ts / static.ts ← Dev/prod static handling.

client/src/
  pages/              ← Routed pages (wouter):
    Home.tsx              /                 (single-page funnel)
    About.tsx             /about
    Safety.tsx            /safety
    Eligibility.tsx       /eligibility
    Contact.tsx           /contact          (mock form, console.logs only)
    FAQPage.tsx           /faq
    Privacy.tsx           /privacy
    Terms.tsx             /terms
    HIPAA.tsx             /hipaa
    not-found.tsx         (404)

  components/         ← Section components used on Home + shared chrome:
    Hero.tsx
    Conditions.tsx          ← Depression / Anxiety / PTSD cards
    Treatments.tsx
    MedicalStandards.tsx
    Science.tsx
    Testimonials.tsx        ← !!! synthetic — replace before launch
    FAQ.tsx
    Navigation.tsx
    Footer.tsx
    AssessmentDialog.tsx    ← The conversion form (multi-step modal)
    PageLayout.tsx          ← Wrapper for /about /safety /etc subpages
    Reveal.tsx              ← Tiny scroll-reveal helper
    ui/                     ← shadcn/ui primitives (button, dialog, input, etc.)
```

---

## Design tokens

All colors and typography live as CSS custom properties in `client/src/index.css`.

Key tokens:
- `--cream` — page background
- `--charcoal` — primary text / dark CTA
- `--sage`, `--sage-dark`, `--sage-light` — accent (used for italics, eyebrows, primary chip)
- `--warm-gray` — secondary text
- `--deep` — dark footer background
- `--light-gray` — input borders

Tailwind reads these via `arbitrary value` syntax: `bg-[var(--cream)]`, `text-[var(--charcoal)]`. If you migrate styling systems, port these tokens first — most components reference them by name.

Display font: a serif used in `<h1>`/`<h2>` (currently via the `font-display` class). Body: system / Inter via Tailwind defaults.

---

## The assessment form (the only real data flow)

`AssessmentDialog.tsx` is the conversion engine of the entire site. Every primary CTA opens it.

### Three-step flow

1. **About you** — first name, last name, email, date of birth (MM/DD/YYYY auto-formatted), state (CA/FL/TX/NY dropdown).
2. **What's going on** — multi-select chips for Depression / Anxiety / PTSD / Something else; conditional "Tell us more" text if "Something else" is picked; optional context textarea.
3. **How to reach you** — phone (auto-formatted as `(555) 123-4567`).

### UX details to preserve in your rebuild

- Progress bar across the top + "Step N of 3 — {Name}" label.
- Continue/Submit is **disabled** until the current step has all required values.
- Inline validation runs on `blur` (not on every keystroke).
- Draft state persists to `localStorage` under `lucid:assessment:draft` and restores on dialog reopen — including which step the user was on.
- Auto-formatted fields strip non-digits and reformat live (phone + DOB).
- Each step auto-focuses its first input.
- Date of birth is rejected if the user is under 18 — schema-enforced.
- After successful submit, the dialog swaps to a **"Thanks, {firstName}"** success state with next-step copy. It is closed via the Close button, *not* by reset.
- On modal close after submit, state fully resets and the localStorage draft is cleared.

### Data contract

See `shared/schema.ts` — fully commented at the top. The shape:

```ts
{
  firstName: string,
  lastName: string,
  email: string,
  phone: string,           // formatted "(555) 123-4567"
  dateOfBirth: string,     // "MM/DD/YYYY"
  state: "CA" | "FL" | "TX" | "NY",
  conditions: ("depression"|"anxiety"|"ptsd"|"other")[],
  otherCondition?: string, // required when "other" is in conditions
  message?: string         // optional context
}
```

Server returns `201 { ...input, id, status: "pending", createdAt }` or `400 { message, field }`.

### What your rebuild needs to add

- Real persistence (Postgres, Firestore, whatever you pick on GCP).
- Email notification to the clinical review queue.
- Confirmation email to the patient.
- Rate limiting / CAPTCHA / honeypot for bot protection.
- Audit logging (HIPAA).
- Optional: PHQ-2 / GAD-2 mini-screeners as a step 2 (skipped in this prototype to keep the funnel short).

---

## Routes — go live or kill

| Path | Status | Notes |
|---|---|---|
| `/` | Live | Single-page funnel — Hero → Conditions → Treatments → MedicalStandards → Science → Testimonials → FAQ |
| `/about` | Live | Mission, principles, "How we differ" comparison block, prescribing physicians card |
| `/safety` | Live | Safety pillars, side effects, exclusion criteria, 911/988 callout |
| `/eligibility` | Live | Qualifies / cannot-treat split, **state list is placeholder** |
| `/contact` | Live | Demo form (logs to console, no backend) |
| `/faq` | Live | 9 Qs |
| `/privacy` | Live | Placeholder Privacy Policy — **lawyer review required** |
| `/terms` | Live | Placeholder Terms of Service — **lawyer review required** |
| `/hipaa` | Live | Placeholder Notice of Privacy Practices — **lawyer review required** |

---

## Placeholder content to replace before launch

Search the codebase for `[Placeholder` to find all of them. Current list:

- **About** — "Prescribing physicians" card has flavor text but real bios/photos are missing.
- **Eligibility** — `[Placeholder — developer to populate with supported states list and a lookup.]`. State list (CA/FL/TX/NY) needs to match your actual physician licensure.
- **Privacy / Terms / HIPAA** — every page opens with a "Prototype notice" sage callout. Lawyer review before launch.
- **Footer** — addresses, phone, email all use `lucid.example` and `(800) 555-1234`. Replace with real.
- **Testimonials** (`components/Testimonials.tsx`) — **synthesized for visual demonstration only**. Do not ship without HIPAA-compliant consented patient stories.
- **TrustBar metrics** that previously claimed "2,000+ sessions / 89% improvement" were intentionally removed. Don't reintroduce without real data.

---

## Things we deliberately stripped from the prototype

These were in earlier drafts and removed. Don't reintroduce unless you have real backing:

- **Pricing** ($129/$149 dollar amounts) — replaced with "Pricing confirmed after your clinical consult."
- **Membership tiers / monthly plans** — explicitly not the model. Pricing is per-prescription, gated by a monthly clinical re-screen.
- **TrustBar with fake stats** — replaced with credibility chips earlier, then removed entirely.
- **"How It Works" page** — removed; the homepage section was redundant with `/about` and `/eligibility`.
- **"Press & partnerships" contact card** — removed, not relevant pre-launch.

---

## Stack notes

- **React 18** + Vite + TypeScript.
- **wouter** for routing — much smaller than React Router. Replace if you prefer.
- **TanStack Query** wraps the one mutation. You can keep or drop in your rebuild — it's overkill for a single endpoint but fine to leave.
- **react-hook-form** + zod resolver for the assessment form.
- **shadcn/ui** primitives (`components/ui/*`) — Radix-based, copy-paste components rather than a dep.
- **Tailwind 3** + CSS variables.
- **Express 5** for the API. Replace.
- **In-memory storage** in `server/storage.ts` — the only file you must throw out.

---

## Open punch list for production (your team)

1. Real database + migrations.
2. Auth + patient portal.
3. Payments (Stripe with HIPAA BAA).
4. EHR / pharmacy integrations.
5. Clinician review queue UI.
6. Monthly re-screening workflow + automated reminders.
7. Suicidality / crisis flag handling on assessment intake.
8. Real testimonials and clinician bios.
9. State-by-state physician licensure list, kept in sync with the eligibility page.
10. Lawyer review of `/privacy`, `/terms`, `/hipaa`.
11. Per-page `<title>` and meta descriptions (currently empty).
12. Favicon + manifest + Open Graph images.
13. Accessibility audit (color contrast, keyboard nav, focus states, ARIA labels).
14. Analytics (GA4 + ad pixels) with PHI-safe event design.
15. Error tracking (Sentry).
16. Cookie consent banner.
17. Sitemap + robots.txt + structured data.
18. Performance pass (image optimization, font preload, lazy-load below the fold).

---

## Questions?

The only authoritative source for design intent is this codebase. If anything is ambiguous, the rule of thumb is: **structure, content, and form UX are deliberate. Everything else is replaceable.**
