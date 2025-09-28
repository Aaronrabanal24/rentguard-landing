# RentMatch Landing

Next.js (Pages Router) + Tailwind landing with:
- Variant headlines
- Value blocks for renters and landlords
- Segmented waitlist form posting to `/api/waitlist`
- Plausible or GA4 tracking hooks
- FAQ schema markup

## Quick start
1. Ensure Tailwind is installed in your project.
2. Copy these files into your repo root (preserving folders).
3. Optional: add Plausible or GA4 scripts in `pages/_app.tsx`.
4. Optional: configure Resend for emails in `pages/api/waitlist.ts`.

## Environment (optional for email)
- `RESEND_API_KEY` — if you enable email sending

## Notes
- Replace social proof text in `Hero.tsx` with real data before launch.
- All headings and CTAs avoid dashes per your preference.
