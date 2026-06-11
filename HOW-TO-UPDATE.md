# How to update your portfolio (the only guide you need)

**Golden rule: 99% of edits happen in ONE file → `lib/data.ts`.**
You never need to touch the design/components to change content. Edit, save, push to GitHub — Vercel redeploys automatically in ~1 minute.

---

## Add a new job / experience

Open `lib/data.ts`, find `export const experience`, and add a new object **at the top** of the array (newest first):

```ts
{
  company: "Company Name",
  role: "Your Role",
  period: "Jan 2027 — Present",
  location: "City, Country",
  type: "Full-time",            // optional
  points: [
    "What you did, with numbers if possible.",
    "Second bullet.",
  ],
  tech: ["Python", "LangGraph"], // optional chips
},
```

## Projects

**You usually don't need to do anything.** The "Live from GitHub" grid auto-syncs with all your public repos (no token needed — it's the public API, refreshed every hour). Push a new repo with a good description and it appears by itself.

- **Promote a repo to a featured card** (big card with custom blurb): add it to `export const projects` with `featured: true`.
- **Hide a repo** from the auto grid: add `"manavisrani07/repo-name"` to `export const hiddenRepos`.

## Add a publication

Add to `export const publications` — title, venue, year, authors, summary, doi, and an optional `badge` (e.g. "SOTA F1 0.9376").

## Add a Medium/Substack article

Add to `export const articles` at the top: title, url, date, tags.

## Education / Honors / Programs

- Degrees → `export const education`
- Summer schools, hackathon wins → `export const programs`

## Personal stuff

- Headline, tagline, about, email, location, social links → `export const profile`
- Skills chips → `export const skills`
- Hobbies & soft skills ("Beyond the code" card) → `export const beyond`
- Hero stat counters → `export const stats`

## Swap your photo or resume

- Photo → replace `public/profile.png` (portrait, roughly 4:5 ratio looks best). If the file is missing the site falls back to your GitHub avatar automatically.
- Resume → replace `public/resume.pdf`.

---

## Deploying changes

```bash
git add -A && git commit -m "update content" && git push
```

Vercel rebuilds automatically. To preview locally first: `npm run dev` → http://localhost:3000

## Contact form (optional, 2 min)

The form works out of the box by opening the visitor's email client. To make it send silently from the server instead: create a free account at resend.com, then in Vercel → Project → Settings → Environment Variables add `RESEND_API_KEY`. Done.

## Where things live (if you ever want to restyle)

```
lib/data.ts          ← ALL content (edit this)
app/page.tsx         ← section order
app/globals.css      ← colors, effects, animations
components/*.tsx     ← one file per section
app/api/contact/     ← contact form backend
public/              ← profile.jpg, resume.pdf
```
