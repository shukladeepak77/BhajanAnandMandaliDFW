import Image from "next/image";

export default function Hero() {
  return (
    <section>
      {/* Full-width banner — the group's own artwork carries the title,
          tagline, offerings and contact info visually. */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/hero-banner.webp"
          alt="Bhajan Anand Mandali — DFW Area, Texas. Bhajan se Anand, Anand se Bhagwan. Keertan, Bhajan Sandhya, Mata ki Chowki, Sundarkand Path, Satsang. Invite us to your home for Keertan. (214) 945-5080 · WhatsApp."
          width={1920}
          height={1080}
          className="h-auto w-full"
          priority
        />
        {/* Visually hidden heading — the banner image carries this text
            visually, but search engines and screen readers need real text. */}
        <h1 className="sr-only">
          Bhajan Anand Mandali — Devotional Singing, Rooted in Bhakti, DFW
          Area, Texas
        </h1>
      </div>

      {/* CTA strip below the banner */}
      <div
        className="px-4 py-6 text-center sm:px-6"
        style={{ background: "var(--maroon)" }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#spiritual-seva"
            className="rounded-[10px] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--orange)" }}
          >
            Spiritual Seva
          </a>
          <a
            href="#invite"
            className="rounded-[10px] border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
          >
            Invite Us
          </a>
        </div>
      </div>
    </section>
  );
}
