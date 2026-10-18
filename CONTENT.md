# Where the content comes from

This is a single-page site for Bhajan Anand Mandali, a community bhajan
and kirtan group serving the DFW area, Texas.

`src/content/mandali.ts` holds the page's structured content: the
`offerings` array (Keertan, Bhajan Sandhya, Mata Ki Chowki, Sundarkand
Path, Satsang — matching the group's own promotional poster exactly) and
`faqs`.

The poster image (`public/images/poster.webp`) is the group's own
existing promotional artwork, reused here as both the page's visual hero
element and the Open Graph/social-share image.

No specific schedule (day/time/venue) is published — the "Invite Us"
section intentionally points people to phone/WhatsApp contact rather than
a fabricated recurring schedule, since gatherings are arranged per
invitation (matching the poster's own "Invite us to your home for
Keertan" framing) rather than on a fixed public calendar.

## Updating content

- **Offerings / what we do**: edit the `offerings` array in
  `src/content/mandali.ts`.
- **FAQ**: edit the `faqs` array in the same file.
- **Contact details**: edit `src/lib/site.ts`
  (`CONTACT_PHONE`/`CONTACT_PHONE_HREF`/`WHATSAPP_URL`).
- The home page (`src/app/page.tsx`) renders both arrays automatically —
  no other file needs to change for content edits.

## Branding

This site is intentionally standalone — it does not reference any parent
organization anywhere in its public content, metadata, or structured
data, per explicit instruction. Logo/branding is the group's own poster
artwork, not a borrowed asset.

## Domain

Currently deployed to a placeholder Netlify subdomain
(`bhajananandmandali.netlify.app`). A custom domain can be attached in
Netlify's site settings once registered — update `SITE_URL` in
`src/lib/site.ts` to match once that happens.
