# cankecilioglu.dev

Personal portfolio for **Can Keçilioğlu** — robotics perception & embedded engineer.
Custom Astro + Tailwind build with an instrument / telemetry aesthetic. The signature
element is the **signal path** (`sensor → state → meaning`) rendered as a hero pipeline
with a heat-gradient rule.

- **Framework:** [Astro 7](https://astro.build) (static, zero-JS by default)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) with custom design tokens
- **Content:** Markdown/MDX content collections (`work`, `writing`)
- **Fonts:** self-hosted Archivo (display), IBM Plex Sans (body), IBM Plex Mono (data)
- **Deploy target:** Cloudflare Pages → `cankecilioglu.dev`

---

## Contact details

All contact details are configured in **`src/consts.ts`** — `email`
(`cankecilioglu@gmail.com`), `linkedin`, and `github`. Change anything there and it
updates across the contact page, footer, about page, and structured data. If you
change your name/headline, regenerate the social card with `npm run gen:assets`.

---

## Local development

Requires **Node 22.12+** (see `.nvmrc`).

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:4321
npm run build      # production build → ./dist
npm run preview    # preview the production build locally
npm run check      # type-check (astro check)
npm run gen:assets # regenerate og.png + apple-touch-icon.png from scripts/gen-assets.mjs
```

---

## Project structure

```
src/
├─ consts.ts              # site config + contact details (edit me)
├─ content.config.ts      # work + writing collection schemas
├─ styles/global.css      # design tokens (@theme), base styles, prose, scroll-reveal
├─ layouts/BaseLayout.astro
├─ components/
│  ├─ SignalPath.astro    # the signature sensor → state → meaning pipeline
│  ├─ Header.astro  Footer.astro  BaseHead.astro
│  ├─ Eyebrow.astro  ArrowLink.astro  ProjectCard.astro
│  ├─ TelemetrySidebar.astro   # mono spec sidebar on project pages
│  └─ Figure.astro        # telemetry-styled media placeholder for MDX
├─ content/
│  ├─ work/               # rover.mdx (flagship), split-flap.mdx (in progress)
│  └─ writing/            # the-rover-deep-dive.mdx (draft template)
└─ pages/                 # index, work/[id], about, contact, writing, 404
public/                   # favicon.svg, og.png, apple-touch-icon.png, robots.txt, _headers
```

### Editing content

- **Project copy / specs:** edit the `*.mdx` files in `src/content/work/`. Frontmatter
  (`title`, `summary`, `stack`, `role`, `year`, `repo`, `status`, `order`, `heroMedia`)
  drives the card, the telemetry sidebar, and the hero. Use the `<Figure>` component for
  media placeholders — swap them for real `<img>`/`<video>` when assets are ready.
- **Add a blog post:** drop a `.mdx` file in `src/content/writing/` with `title`,
  `description`, `pubDate`, and remove `draft: true` to publish. A template is provided.
- **Page copy:** the home/about/contact text lives directly in the corresponding files
  under `src/pages/`.

### Design tokens

All colours and fonts are defined once in `src/styles/global.css` under `@theme`
(`--color-ink`, `--color-data`, `--color-signal`, the `--heat` gradient, etc.). Change
them there and the whole site follows.

---

## Version control & first push

This folder is not a git repository yet — initialise it with **your own** identity
(so the commit history shows the correct name) and push to a new GitHub repo:

```bash
git init -b main
git config user.name "Can Keçilioğlu"
git config user.email "<your-github-email>"
git add -A
git commit -m "Initial build: cankecilioglu.dev portfolio"
git remote add origin https://github.com/cankecilioglu/site.git
git push -u origin main
```

`node_modules/`, `dist/`, and `.astro/` are already git-ignored.

## Deploy to Cloudflare Pages

1. **Push to GitHub** using the steps above, e.g. `cankecilioglu/site`.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**,
   pick the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION = 22.12.0` (also pinned via `.nvmrc`)
4. Deploy. Every push to the default branch auto-deploys.
5. **Custom domain:** Pages → your project → **Custom domains → Set up a domain** →
   `cankecilioglu.dev`. If the domain is on Cloudflare Registrar, DNS auto-configures.

`public/_headers` already sets long-cache headers for hashed assets and baseline
security headers. `robots.txt` and `sitemap-index.xml` (generated on build) are wired up.

---

## License

© Can Keçilioğlu. All rights reserved.
