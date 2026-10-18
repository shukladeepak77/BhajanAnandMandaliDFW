# Where the content comes from

This is a single-page organizational site for Bhajan Anand Mandali of DFW,
the dedicated bhajan/kirtan group operating under Dharma Path USA
Foundation's umbrella (registered with the Texas Secretary of State as an
Assumed Name Certificate on Dharma Path USA Foundation's nonprofit
registration, File #806577129).

`src/content/mandali.ts` holds the page's structured content: the
`offerings` array (what the mandali does — Bhajan Sandhya, Mata Ki Chowki,
Naam Jap & Kirtan, Festival singing) and `faqs`. This content style and
tone mirrors the "Path & Bhakti Events" section of
[dharmpathusa.com/spiritual-seva](https://dharmpathusa.com/spiritual-seva),
scoped down to just what this specific group (group bhajan/kirtan singing)
offers, rather than the parent foundation's full seva catalog (discourses,
individual path requests, etc., which stay on the main site).

No specific schedule (day/time/venue) is published yet — the "Sing With
Us" section intentionally points people to contact details rather than a
fabricated recurring schedule, since the actual gathering cadence is set
and communicated by the mandali's own team, not hard-coded here.

## Updating content

- **Offerings / what we do**: edit the `offerings` array in
  `src/content/mandali.ts`.
- **FAQ**: edit the `faqs` array in the same file.
- **Contact details** (phone/email, parent site link): edit
  `src/lib/site.ts`.
- The home page (`src/app/page.tsx`) renders both arrays automatically —
  no other file needs to change for content edits.

## Branding

Reuses `dharma-path-logo.png` from the parent foundation's own asset,
since Bhajan Anand Mandali of DFW is legally the same entity (Dharma Path
USA Foundation) operating under an assumed name — not a separate
organization. Replace with a dedicated mandali logo/photo later if one is
designed.

## Domain

Currently deployed to a placeholder Netlify subdomain
(`bhajananandmandali.netlify.app`). A custom domain can be attached in
Netlify's site settings once registered — update `SITE_URL` in
`src/lib/site.ts` to match once that happens.
