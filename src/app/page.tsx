import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import { offerings, faqs } from "@/content/mandali";
import { SITE_URL, CONTACT_PHONE, CONTACT_PHONE_HREF, WHATSAPP_URL } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bhajan Anand Mandali",
    url: SITE_URL,
    areaServed: "Dallas–Fort Worth, Texas",
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroBanner
        eyebrow="॥ श्री गणेशाय नमः ॥"
        title="Bhajan Anand Mandali"
        description="भजन से आनंद, आनंद से भगवान — Keertan · Bhajan Sandhya · Mata ki Chowki · Sundarkand Path · Satsang, serving the DFW area, Texas."
      />

      {/* Poster */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-sm overflow-hidden rounded-[24px] shadow-[var(--shadow)]">
          <Image
            src="/images/poster.webp"
            alt="Bhajan Anand Mandali — Keertan, Bhajan Sandhya, Mata ki Chowki, Sundarkand Path, Satsang"
            width={1080}
            height={1920}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      {/* About */}
      <section className="mt-10 rounded-[24px] border border-border-muted bg-surface px-5 py-7 text-center shadow-[var(--shadow)] sm:px-8 sm:py-9">
        <p className="text-sm font-semibold tracking-wide text-orange-900/70 uppercase">
          Who We Are
        </p>
        <h2 className="mt-1 text-2xl font-bold text-orange-900 sm:text-3xl">
          A Community of Devotional Singing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">
          Bhajan Anand Mandali brings together voices, instruments and
          hearts in devotion through bhajan, kirtan and sankirtan, serving
          the DFW area, Texas. We gather to sing the names of the Divine,
          build community, and offer this seva in the spirit of Sanatan
          Dharma — open to all who wish to join in song.
        </p>
      </section>

      {/* What We Do */}
      <section className="mt-10">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-orange-900/70 uppercase">
            What We Do
          </p>
          <h2 className="mt-1 text-2xl font-bold text-orange-900 sm:text-3xl">
            Bhajan &amp; Kirtan Gatherings
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="rounded-[20px] border border-border-muted bg-surface px-5 py-6 shadow-[var(--shadow)]"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-3 text-lg font-bold text-orange-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Invite / Connect */}
      <section className="mt-10 rounded-[24px] border border-border-muted bg-surface px-5 py-7 text-center shadow-[var(--shadow)] sm:px-8 sm:py-9">
        <p className="text-sm font-semibold tracking-wide text-orange-900/70 uppercase">
          Invite Us
        </p>
        <h2 className="mt-1 text-2xl font-bold text-orange-900 sm:text-3xl">
          Invite Us to Your Home for Keertan 🙏
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">
          Reach out below and we&apos;ll be glad to coordinate a Keertan,
          Bhajan Sandhya, Mata Ki Chowki, Sundarkand Path or Satsang for
          your home or community gathering.
        </p>

        <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`tel:${CONTACT_PHONE_HREF}`}
            className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
            }}
          >
            📞 Call {CONTACT_PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
            style={{ background: "#25D366" }}
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-orange-900/70 uppercase">
            Good to Know
          </p>
          <h2 className="mt-1 text-2xl font-bold text-orange-900 sm:text-3xl">
            Frequently Asked
          </h2>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[18px] border border-border-muted bg-surface px-5 py-5 shadow-sm"
            >
              <h3 className="text-base font-bold text-orange-900">
                {item.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing line */}
      <p className="font-devanagari mt-10 text-center text-base font-semibold text-orange-900/80">
        Jai Shri Ram · Jai Mata Di · Har Har Mahadev · Jai Shri Krishna
      </p>
    </div>
  );
}
