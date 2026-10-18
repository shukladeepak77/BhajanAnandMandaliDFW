import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";

export default function Header() {
  return (
    <header
      id="site-header"
      className="sticky top-0 z-20 shadow-[0_2px_16px_rgba(154,52,18,0.18)]"
      style={{ background: "linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)" }}
    >
      <div className="mx-auto max-w-[2000px] px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-between">
          <Link
            href="/"
            style={{
              background:
                "radial-gradient(120% 140% at 30% 15%, #c2410c 0%, #7c2d12 55%, #450a0a 100%)",
              boxShadow:
                "0 0 0 3px rgba(253,224,71,0.55), 0 6px 20px rgba(69,10,10,0.5), inset 0 1px 1px rgba(255,255,255,0.45)",
            }}
            className="group relative flex w-[250px] shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-4 py-2.5 ring-1 ring-gold/60 transition-all duration-200 hover:-translate-y-0.5 hover:ring-gold sm:w-[290px] sm:gap-2.5 sm:px-5"
            aria-label="Bhajan Anand Mandali — Home"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/40 to-transparent"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50"
              style={{
                background: "radial-gradient(circle, #fde047 0%, transparent 70%)",
              }}
            />
            <span
              aria-hidden="true"
              className="relative text-lg leading-none text-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            >
              ॐ
            </span>
            <span
              className="relative whitespace-nowrap text-sm font-extrabold tracking-wide sm:text-base"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ffffff 0%, #fff3b0 35%, #fde047 70%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                filter:
                  "drop-shadow(0 0 10px rgba(255,247,200,0.85)) drop-shadow(0 1px 1px rgba(180,83,9,0.35))",
              }}
            >
              Bhajan Anand Mandali
            </span>
            <span aria-hidden="true" className="relative text-xs text-gold/80 sm:text-sm">
              ✦
            </span>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 sm:text-sm"
            style={{ background: "#25D366" }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
