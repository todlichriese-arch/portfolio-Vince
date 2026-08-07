# Your Portfolio

A single-page Next.js + Tailwind portfolio, styled like an engineering dossier
instead of a template. Everything you need to customize lives in one file.

## 1. Make it yours

Open `app/page.tsx`. At the very top is a `CONTENT` object — that's the only
thing you need to edit for text and links (name, role, about, projects,
experience, skills, email, GitHub/LinkedIn links).

Also edit the `<title>`/`description` in `app/layout.tsx` (lines near the top,
marked `EDIT THIS`) — that's what shows up in Google search results and the
browser tab.

If you want a downloadable resume link to work, drop a `resume.pdf` into the
`public/` folder (create it if it doesn't exist) — the "Resume" link in
`CONTENT.links` already points to `/resume.pdf`.

## 2. Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it hot-reloads as you edit `page.tsx`.

## 3. Put it on GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
```

Create a new **empty** repo on github.com (no README/license), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## 4. Deploy to Vercel

1. Go to https://vercel.com and sign up/log in **with your GitHub account**
   (this is the easiest path — no manual auth needed).
2. Click **Add New → Project**.
3. Select your `portfolio` repo from the list and click **Import**.
4. Vercel auto-detects Next.js — leave all settings as default.
5. Click **Deploy**. In about a minute you'll get a live URL like
   `portfolio-yourname.vercel.app`.

From now on, every `git push` to `main` automatically redeploys the live site.
No extra steps.

### Custom domain (optional but recommended for a portfolio)
In the Vercel project → **Settings → Domains**, add a domain you own (or buy
one for ~$10-15/year from Namecheap/Porkbun) and follow the DNS instructions
Vercel shows you. `yourname.dev` or `yourname.com` reads much better on a
resume than a `.vercel.app` subdomain.

### Alternative: deploy without GitHub (Vercel CLI)
```bash
npm i -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to your production URL
```
GitHub-connected deploys are still recommended since every push auto-updates
the live site.

## 5. Deploying your OTHER past projects to Vercel

The exact same "connect GitHub repo → Vercel imports it" flow works for
almost any front-end or full-stack JS project. A few notes by project type:

- **Static HTML/CSS/JS site** — push it to GitHub, import to Vercel, leave
  the build command blank (Vercel serves it as-is).
- **React (Create React App), Vite, Next.js, SvelteKit, Astro, etc.** —
  Vercel auto-detects the framework and sets the correct build command
  (`npm run build`) and output directory. Just import and deploy.
- **Project needs environment variables** (API keys, database URLs) — add
  them in Vercel under **Settings → Environment Variables** *before*
  deploying, matching whatever `.env` variables your project reads.
- **Backend-only project (Express server, etc.)** — Vercel is built for
  serverless/frontend deployment. A plain long-running Express server
  usually needs to be adapted into API routes, or hosted elsewhere (Render,
  Railway, Fly.io) instead. If a project is like this, it's fine to just
  link to its GitHub repo from your portfolio rather than a live demo.
- **Each project = its own Vercel project.** Don't try to combine them; just
  repeat "import repo → deploy" once per project. You can link all the
  resulting live URLs from your portfolio's project cards (the `live` field
  in `CONTENT.projects`).

Once 2-3 of your projects have real, working live links, swap the
`example.com` placeholders in `CONTENT.projects` for the actual URLs and
push — your portfolio updates automatically.
