import { PARENT_SITE_URL, CONTACT_PHONE, CONTACT_PHONE_HREF, CONTACT_EMAIL } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      className="shadow-[0_-2px_16px_rgba(69,10,10,0.25)]"
      style={{
        background:
          "linear-gradient(90deg, #450a0a 0%, #7c2d12 50%, #9a3412 100%)",
        borderTop: "1px solid rgba(253,224,71,0.35)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-white/85 sm:px-6">
        <p className="font-devanagari text-base font-semibold text-gold">
          ॥ जय जय श्री राधे ॥
        </p>
        <p className="mt-1.5">
          Bhajan Anand Mandali of DFW — singing in devotion, uniting in
          dharma.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/75 sm:text-sm">
          <a href={`tel:${CONTACT_PHONE_HREF}`} className="hover:text-gold">
            📞 {CONTACT_PHONE}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold">
            ✉️ {CONTACT_EMAIL}
          </a>
          <a
            href={PARENT_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            🕉️ dharmpathusa.com
          </a>
        </div>

        <p className="mt-4 text-xs text-white/60">
          A seva program of{" "}
          <a
            href={PARENT_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-2 hover:text-gold"
          >
            Dharma Path USA Foundation
          </a>
          , a 501(c)(3) tax-exempt public charity.
        </p>
      </div>
    </footer>
  );
}
