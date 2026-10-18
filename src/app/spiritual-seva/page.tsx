import type { Metadata } from "next";
import Link from "next/link";
import { offeringGroups } from "@/content/mandali";
import { SITE_NAME, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spiritual Seva",
  description:
    "Every bhajan and kirtan service Bhajan Anand Mandali offers — Keertan, Bhajan Sandhya, Mata Ki Chowki, Sundarkand Path, Akhand RamCharitManas Path, and Satsang — for homes and community gatherings across the DFW area, Texas.",
};

export default function SpiritualSevaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    areaServed: "Dallas–Fort Worth, Texas",
    serviceType: offeringGroups.flatMap((g) => g.items.map((i) => i.title)),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page header band */}
      <div
        className="px-4 py-12 text-center sm:px-6 sm:py-16"
        style={{
          background:
            "linear-gradient(135deg, #521515 0%, #6b1f1f 45%, #b85000 100%)",
        }}
      >
        <p className="text-xs text-white/70 sm:text-sm">
          <Link href="/" className="hover:text-gold hover:underline">
            Home
          </Link>{" "}
          / Spiritual Seva
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Spiritual Seva
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
          Devotional singing and recitation — brought to your home or
          community gathering across the DFW area, Texas, with full
          devotion and care.
        </p>
      </div>

      {/* Offering groups */}
      {offeringGroups.map((group, idx) => (
        <section
          key={group.title}
          id={idx === 0 ? "spiritual-seva" : "discourse"}
          className="scroll-mt-20 px-4 py-14 sm:px-6"
          style={{ background: idx % 2 === 0 ? "var(--cream-card)" : "var(--surface)" }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.15em] text-orange-dark uppercase">
                {group.eyebrow}
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold text-maroon sm:text-3xl lg:text-4xl">
                {group.title}
              </h2>
              <div
                className="mx-auto mt-3 h-1 w-14 rounded-full"
                style={{ background: "var(--orange)" }}
              />
              <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70 sm:text-base">
                {group.blurb}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[18px] px-5 py-6 shadow-[var(--shadow)]"
                  style={{ background: "var(--surface)" }}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="font-display mt-3 text-base font-bold text-maroon">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="px-4 py-14 sm:px-6">
        <div
          className="mx-auto max-w-4xl rounded-[22px] px-6 py-10 text-center shadow-[var(--shadow)] sm:px-10"
          style={{ background: "var(--cream-card)" }}
        >
          <h2 className="font-display text-2xl font-bold text-maroon sm:text-3xl lg:text-4xl">
            Invite Us · Connect With Us
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
            Whether it&apos;s a bhajan gathering or a Sundarkand Path — we
            are here to serve with full devotion.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <a
              href={`tel:${CONTACT_PHONE_HREF}`}
              className="rounded-[10px] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--orange)" }}
            >
              📞 Call {CONTACT_PHONE}
            </a>
          </div>
          <Link
            href="/#invite"
            className="mt-5 inline-block text-sm font-semibold text-orange-dark hover:underline"
          >
            See our full step-by-step invite process →
          </Link>
        </div>
      </section>
    </div>
  );
}
