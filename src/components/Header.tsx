import Link from "next/link";
import { CONTACT_PHONE, CONTACT_PHONE_HREF, WHATSAPP_URL } from "@/lib/site";

export default function Header() {
  return (
    <>
      {/* Top utility bar — mirrors dharmpathusa.com's own top strip */}
      <div
        className="hidden sm:block"
        style={{ background: "var(--maroon)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-white/90 sm:px-6">
          <span>🕉️ Devotional Singing · Seva with Bhakti · DFW, Texas</span>
          <a href={`tel:${CONTACT_PHONE_HREF}`} className="hover:text-gold">
            📞 {CONTACT_PHONE}
          </a>
        </div>
      </div>

      {/* Main header — gold gradient, logo badge, WhatsApp CTA */}
      <header
        id="site-header"
        className="sticky top-0 z-20 shadow-[0_2px_16px_rgba(107,31,31,0.25)]"
        style={{
          background:
            "linear-gradient(90deg, #b86a10 0%, #e8a020 30%, #f5c040 60%, #d08818 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="Bhajan Anand Mandali — Home"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl shadow-[0_2px_8px_rgba(82,21,21,0.4)] sm:h-12 sm:w-12"
                style={{
                  background:
                    "radial-gradient(circle at 35% 25%, #fff3b0 0%, #f5c040 40%, #b86a10 100%)",
                  color: "var(--maroon-dark)",
                }}
                aria-hidden="true"
              >
                ॐ
              </span>
              <span
                className="font-display rounded-full px-4 py-2 leading-tight shadow-sm"
                style={{ background: "var(--maroon)" }}
              >
                <span className="block text-sm font-bold text-white sm:text-base">
                  Bhajan Anand
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.15em] text-gold sm:text-xs">
                  MANDALI
                </span>
              </span>
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] px-3 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 sm:px-4 sm:text-sm"
              style={{ background: "var(--maroon)" }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
