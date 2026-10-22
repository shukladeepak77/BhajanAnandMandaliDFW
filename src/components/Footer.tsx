import { CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

const QUICK_LINKS = [
  { label: "Spiritual Seva", href: "/spiritual-seva" },
  { label: "Invite Us", href: "/#invite" },
  { label: "Request an Event", href: "/invite-request" },
  { label: "FAQ", href: "/#faq" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--footer-bg)" }}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-white">
              Bhajan Anand Mandali of DFW
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              A community of devotional singing — Mata Ka Jagran, Bhajan
              Sandhya, Mata Ki Chowki, Sundarkand Path, Akhand
              RamCharitManas Path and Satsang — serving the DFW area,
              Texas.
            </p>
          </div>

          <div>
            <h3 className="font-display border-b border-gold/30 pb-2 text-base font-bold text-white">
              Quick Links
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-white/60">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display border-b border-gold/30 pb-2 text-base font-bold text-white">
              Connect
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/60">
              <a href={`tel:${CONTACT_PHONE_HREF}`} className="hover:text-gold">
                📞 {CONTACT_PHONE}
              </a>
              <span>📍 DFW Area, Texas</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="font-devanagari text-base font-semibold text-gold">
            भजन से आनंद, आनंद से भगवान
          </p>
          <p className="mt-1 text-xs text-white/50">
            Jai Shri Ram · Jai Mata Di · Har Har Mahadev · Jai Shri Krishna
          </p>
          <p className="mt-4 text-xs text-white/40">
            Serving the DFW community with devotion.
          </p>
        </div>
      </div>
    </footer>
  );
}
