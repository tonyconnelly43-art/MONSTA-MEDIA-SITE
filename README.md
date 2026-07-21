# Monsta Media & Design — Site

Next.js (App Router) rebuild of monstamediaanddesign.com, built for deployment on Vercel.

## Status / known placeholders

The live Wix site (monstamediaanddesign.com) was unreachable from the build environment, so the
following content is **draft placeholder copy** and needs to be swapped for the real content before
launch:

- Home, Packages, Services page copy
- Blog posts (2 example posts included; add real posts as `.mdx` files in `content/blog`)
- Legal, Privacy, and Terms & Conditions pages (marked with an on-page notice)
- Logo/mascot (currently a simple placeholder SVG in `components/MonsterMascot.tsx`) and all photography
- Open Graph image (`public/og-default.svg` — replace with a real PNG/JPG, some platforms don't render SVG OG images)

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
