import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      {/* Full-width banner — the group's own artwork carries the title,
          tagline, offerings and contact info visually. Art-directed by
          screen size: the portrait poster reads far more clearly on a
          phone-width screen than the wide banner does once scaled down,
          so mobile gets its own version rather than a squeezed-down crop
          of the desktop one. */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/hero-banner-mobile.webp"
          alt="Bhajan Anand Mandali of DFW — DFW Area, Texas. Bhajan se Anand, Anand se Bhagwan. Bhajan Sandhya, Mata ki Chowki, Sundarkand Path, Satsang/Keertan. Invite Us, Ignite Devotion. (214) 945-5080 · WhatsApp/Text/Call."
          width={1429}
          height={2000}
          className="block h-auto w-full sm:hidden"
          priority
        />
        <Image
          src="/images/hero-banner-v3.webp"
          alt="Bhajan Anand Mandali of DFW — DFW Area, Texas. Bhajan se Anand, Anand se Bhagwan. Bhajan Sandhya, Mata ki Chowki, Sundarkand Path, Satsang/Keertan. Invite Us, Ignite Devotion. (214) 945-5080 · WhatsApp/Text/Call."
          width={1920}
          height={1080}
          className="hidden h-auto w-full sm:block"
          priority
        />
        {/* Visually hidden heading — the banner image carries this text
            visually, but search engines and screen readers need real text. */}
        <h1 className="sr-only">
          Bhajan Anand Mandali of DFW — Devotional Singing, Rooted in Bhakti,
          DFW Area, Texas
        </h1>
      </div>

      {/* CTA strip below the banner */}
      <div
        className="px-4 py-6 text-center sm:px-6"
        style={{ background: "var(--maroon)" }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/spiritual-seva"
            className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--orange)" }}
          >
            Spiritual Seva
          </Link>
          <a
            href="#invite"
            className="rounded-full px-6 py-3 text-sm font-semibold shadow-md transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gold)", color: "var(--maroon-dark)" }}
          >
            Invite Us
          </a>
        </div>
      </div>
    </section>
  );
}
