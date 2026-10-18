# Bhajan Anand Mandali of DFW

A single-page organizational website for Bhajan Anand Mandali of DFW — a
community bhajan and kirtan group operating under the umbrella of
[Dharma Path USA Foundation](https://dharmpathusa.com), a 501(c)(3)
non-profit, via an Assumed Name Certificate filed with the Texas Secretary
of State (File #806577129).

Sections: hero, about, what we do (Bhajan Sandhya, Mata Ki Chowki, Naam
Jap & Kirtan, Festival singing), how to connect, and FAQ. See `CONTENT.md`
for where each piece of content comes from and how to update it.

## Stack

Next.js, static export (`output: "export"`), Tailwind v4 — same
architecture as the sibling Aarti/Meera Bhajan/Tulsidas Bhajan/Chalisa
Sangrah sites in this family: a single `src/content/mandali.ts` file, no
build-time content generation, no backend.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Netlify, connected to this GitHub repo. `netlify.toml` sets the build
command (`npm run build`) and publish directory (`out`). Currently live
at a placeholder Netlify subdomain pending a custom domain.
