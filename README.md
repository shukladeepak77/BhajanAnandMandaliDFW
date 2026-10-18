# Bhajan Anand Mandali

A single-page website for Bhajan Anand Mandali — a community bhajan and
kirtan group serving the Dallas–Fort Worth area, Texas.

Sections: hero, about, what we do (Keertan, Bhajan Sandhya, Mata Ki
Chowki, Sundarkand Path, Satsang), invite us / contact, and FAQ. See
`CONTENT.md` for where each piece of content comes from and how to
update it.

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
