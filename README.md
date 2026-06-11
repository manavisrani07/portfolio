# Manav Israni — Portfolio

Personal portfolio of an AI Software Engineer. Next.js 14 (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.

**Live data:** the projects grid auto-syncs with public GitHub repos (hourly revalidation, no token needed). Contact form posts to a serverless API route (`/api/contact`) with Resend support and a mailto fallback.

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo → Deploy. No config needed.
3. (Optional) Add `RESEND_API_KEY` env var for server-side contact emails.

## Editing content

See **HOW-TO-UPDATE.md** — everything lives in `lib/data.ts`.
