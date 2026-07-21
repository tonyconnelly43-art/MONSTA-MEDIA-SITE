# Monsta Media & Design — Site

Next.js (App Router) rebuild of monstamediaanddesign.com, built for deployment on Vercel.

## Status / known placeholders

The live Wix site (monstamediaanddesign.com) was unreachable from the build environment, so the
following content is **draft placeholder copy** and needs to be swapped for the real content before
launch:

- Home, Packages, Services page copy
- Blog posts (2 example posts included; add real posts as `.mdx` files in `content/blog`)
- Legal, Privacy, and Terms & Conditions pages (marked with an on-page notice)

## Free Brand Review form

The homepage lead form (`components/BrandReviewForm.tsx`) posts to `app/api/quote/route.ts`, which saves
the lead to a Postgres database and/or emails it via Resend -- either one is enough for the form to work,
and it's fine to set up only one. **Without either configured, submissions fail with a friendly error
message telling the visitor to call/email directly instead.**

### Option A: save to a database you can browse (recommended, no new account needed)

Vercel's Storage tab lets you add a Postgres database (powered by Neon) directly from the dashboard you
already use to deploy this project:

1. In the Vercel dashboard, open the `monsta-media-site` project → **Storage** tab → **Create Database** →
   choose **Postgres**.
2. Connect it to this project when prompted -- Vercel injects a `DATABASE_URL` environment variable
   automatically, no manual copy/paste needed.
3. Redeploy. The `leads` table is created automatically on the first form submission (see the
   `CREATE TABLE IF NOT EXISTS` in the route handler) -- no manual SQL required.
4. To view submissions, open the database from the Storage tab, which links out to Neon's console; its
   **Tables** view shows every lead in a spreadsheet-like browser.

### Option B: get an email per lead

1. Create a free [Resend](https://resend.com) account and API key.
2. In the Vercel project settings, add an environment variable `RESEND_API_KEY` with that key.
3. Redeploy. Leads will land in the inbox set by `siteConfig.email` (`lib/site-config.ts`), with the
   submitter's email set as reply-to when they provide one.

The route sends from `onboarding@resend.dev` (Resend's shared sandbox address, works without verifying a
domain). To send from `you@monstamediaanddesign.com` instead, verify the domain in Resend and update the
`from` address in the route handler.

## New SEO pages

`/branding` and its 5 child pages (`/branding/hvac-companies`, `/branding/van-wrap-design-for-contractors`,
`/branding/logo-design-for-home-service-businesses`, `/branding/branding-agency-for-trades-businesses`,
`/branding/uniform-design-for-service-companies`) target Tier 1 Search Console keywords, localized to
Cleveland/Northfield, OH. Content/config lives in `lib/branding-pages.ts`.

## URL structure changes from Wix

- `/services-2` → `/services` (redirect added in `next.config.js`)

## Development

```bash
npm install
npm run dev
```

## Deploying to Vercel

Import this repo in Vercel with default Next.js settings (no special build config needed).
