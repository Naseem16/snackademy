# 🎓 CertPrep — AWS Certification Learning App

A **mobile-first, card-based, gamified** web app for preparing for AWS certifications.
Built to make studying *fun*: bite-sized cards, plain-English explanations, real-world
analogies, visual diagrams, quick quizzes, streaks, XP, levels and badges — all with
**no login required**.

Ships today with full content for:

| Cert | Code | Level | Cards |
|------|------|-------|-------|
| 🤖 AWS Certified AI Practitioner | AIF-C01 | Foundational | 184 |
| 🏛️ AWS Certified Solutions Architect – Associate | SAA-C03 | Associate | 172 |

…plus a structure designed so new certifications (Cloud Practitioner, Developer
Associate, and beyond) can be dropped in with zero code changes.

---

## ✨ Features

- **Mobile-first** — designed for the phone, scales up to desktop. Safe-area aware.
- **Card-based microlearning** — one idea per card, swipe through them. Card kinds:
  `concept`, `analogy 💡`, `example 🧪`, `diagram 🗺️`, `exam tip 🎯`, `compare ⚖️`, and
  interactive `quiz ❓` with instant feedback + explanations.
- **Fun visual diagrams** — data-driven SVG/HTML diagrams (flows, stacks, pyramids,
  cycles, quadrants, comparisons) authored as plain data.
- **No login. Device-local everything** — progress, streaks, bookmarks and badges are
  stored in `localStorage` on the device. Nothing is uploaded, no account, no sync.
- **Gamification** — XP, levels, a daily **streak** counter, milestones, and 14 unlockable
  **badges** with celebratory animations.
- **Bookmarks** — save tricky cards and jump back to them instantly.
- **Resume where you left off** — the home screen deep-links you back into your last card.
- **Installable PWA + offline** — add to home screen, works without a network.
- **Self-updating content** — when new content is deployed, the app detects it and shows a
  "📚 New content available — Refresh" banner (and checks hourly while open).

---

## 🧱 Tech stack

- **Vite** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS** (mobile-first utility styling)
- **React Router** (HashRouter — works on any static host, no server rewrites)
- **Framer Motion** (card transitions, badge celebrations)
- **vite-plugin-pwa** (service worker, manifest, offline cache, update prompt)

No backend. The entire app is static files.

---

## 🚀 Run locally

```bash
npm install
npm run dev        # http://localhost:5173/aws-ai-practitioner-learning-app/
```

Other scripts:

```bash
npm run validate   # check content integrity (ids unique, quizzes valid, diagrams well-formed)
npm run build      # validate + typecheck + production build into dist/
npm run preview    # serve the production build locally
npm run icons      # regenerate PWA icons from scripts/generate-icons.mjs
```

---

## 🌐 Deploy to GitHub Pages

Deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
It builds the app and publishes `dist/` to GitHub Pages on every push to `main`.
The base path is derived automatically from your repo name, so it just works.

**One-time setup:**

1. Create a new GitHub repo (any name — the workflow adapts). Example:
   `aws-ai-practitioner-learning-app`.
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CertPrep learning app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub
   Actions**.
4. The **Deploy to GitHub Pages** workflow runs automatically. When it finishes, your app
   is live at:
   ```
   https://<your-username>.github.io/<your-repo>/
   ```

> Using a **custom domain** or a `<user>.github.io` **user/org page** (served from `/`)?
> Set the base path to `/` by adding `BASE_PATH=/` to the `Build` step env in the workflow.

**Updating content later:** edit a content file, commit, push. The workflow redeploys and
users get the "new content available" refresh prompt. You can also trigger a redeploy
manually from the **Actions** tab (the workflow has `workflow_dispatch`).

---

## 🗂️ Project structure

```
src/
  content/
    types.ts                     # the content schema (Certification → Domain → Chapter → Section → Card)
    index.ts                     # registry of all certifications (+ "coming soon" teasers)
    certifications/
      aws-ai-practitioner.ts      # AIF-C01 content
      aws-solutions-architect.ts  # SAA-C03 content
  store/
    ProgressContext.tsx          # localStorage state: progress, bookmarks, streaks, badges, XP
    badges.ts                    # badge/milestone definitions + XP→level curve
  components/                    # Diagram, CardView, MarkdownLite, BottomNav, BadgeToast, ReloadPrompt, Ui, Icons
  pages/                         # Home, CertOverview, DomainPage, CardViewer, Achievements, Bookmarks, Settings
scripts/
  generate-icons.mjs             # pure-stdlib PWA icon generator
  validate-content.mjs           # runtime content integrity checks
```

---

## ➕ Add a new certification

No app code changes needed — just add content and register it.

1. Create `src/content/certifications/<your-cert>.ts` exporting a `Certification` object
   (see `types.ts` for the full schema, and the two existing files as templates).
2. Register it in `src/content/index.ts`:
   ```ts
   import { yourCert } from './certifications/your-cert'
   export const certifications = [awsAiPractitioner, awsSolutionsArchitect, yourCert, ...]
   ```
3. Run `npm run validate` to check it, then `npm run build`.

The hierarchy is **Certification → Domain (exam topic) → Chapter → Section → Card**.
Cards are the bite-sized unit shown one at a time. Keep card bodies short (~40–110 words),
lead sections with a `concept`, sprinkle in `analogy`/`example`/`diagram`/`tip` cards, and
end with one or two `quiz` cards. Set `available: false` to show a cert as a "coming soon"
teaser.

Bump the cert's `version` / `lastUpdated` when you revise content — those show in Settings
and the PWA update flow notifies returning learners.

---

## 🔒 Privacy

There is **no account and no server**. All learner data (progress, streaks, badges,
bookmarks) lives in the browser's `localStorage` on the device. Clearing browser data or
switching devices starts fresh — by design, since there's no login to sync across devices.
