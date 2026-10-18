import Hero from "@/components/Hero";
import { offeringGroups, highlightOfferings, faqs } from "@/content/mandali";
import { SITE_URL, CONTACT_PHONE, CONTACT_PHONE_HREF, WHATSAPP_URL } from "@/lib/site";

const INVITE_STEPS = [
  {
    step: "STEP 1",
    title: "Choose Your Gathering",
    description:
      "Keertan, Bhajan Sandhya, Mata Ki Chowki, Sundarkand Path, Naam Jap, Satsang, or a scripture session.",
  },
  {
    step: "STEP 2",
    title: "Share Date & Location",
    description:
      "Let us know your preferred date, time, and your home or venue in the DFW area.",
  },
  {
    step: "STEP 3",
    title: "Reach Out",
    description:
      "Call or message us on WhatsApp with your details and any special intentions.",
  },
  {
    step: "STEP 4",
    title: "We Coordinate",
    description:
      "Our team confirms with you, guides on samagri if needed, and prepares everything with reverence.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bhajan Anand Mandali",
    url: SITE_URL,
    areaServed: "Dallas–Fort Worth, Texas",
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      {/* Offerings-at-a-glance card: the banner above already carries the
          title/tagline/contact visually, so this card's job is just the
          quick-reference offering descriptions, mirrors the "OUR MISSION"
          icon-list pattern on dharmpathusa.com's homepage. */}
      <div className="mx-auto -mt-8 max-w-6xl px-4 sm:px-6">
        <div
          className="rounded-[22px] px-5 py-8 text-center shadow-[var(--shadow)] sm:px-10 sm:py-10"
          style={{ background: "var(--cream-card)" }}
        >
          <p className="text-xs font-bold tracking-wide text-orange-dark uppercase sm:text-sm">
            Our Offerings at a Glance
          </p>
          <div className="mx-auto mt-5 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-4 text-left sm:grid-cols-2">
            {highlightOfferings.map((item) => (
              <p key={item.title} className="text-sm text-foreground/85">
                <span className="mr-1.5">{item.icon}</span>
                <span className="font-semibold text-maroon">{item.title}</span>
                <span className="text-foreground/60"> — {item.description}</span>
              </p>
            ))}
          </div>
          <a
            href="#what-we-do"
            className="mt-5 inline-block text-sm font-semibold text-orange-dark hover:underline"
          >
            See everything we offer →
          </a>
        </div>
      </div>

      {/* Why We Gather */}
      <section
        className="mt-16 px-4 py-14 sm:px-6"
        style={{ background: "var(--cream-card)" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.15em] text-orange-dark uppercase">
            Why We Gather
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold text-maroon sm:text-3xl lg:text-4xl">
            Singing in Devotion, Uniting in Dharma
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-14 rounded-full"
            style={{ background: "var(--orange)" }}
          />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
            Bhajan Anand Mandali brings together voices, instruments and
            hearts in devotion through bhajan, kirtan and sankirtan, serving
            the DFW area, Texas. Each gathering is an offering — sung in the
            spirit of Sanatan Dharma, bringing peace and community wherever
            we go.
          </p>
          <a
            href="#invite"
            className="mt-6 inline-block rounded-[10px] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--orange)" }}
          >
            Invite Us to Your Gathering →
          </a>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.15em] text-orange-dark uppercase">
            Our Values
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold text-maroon sm:text-3xl lg:text-4xl">
            The Spirit Behind Every Gathering
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-14 rounded-full"
            style={{ background: "var(--orange)" }}
          />
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 text-left sm:grid-cols-3">
          {[
            {
              icon: "🕉️",
              title: "Rooted in Bhakti",
              description:
                "Every bhajan and kirtan is offered with sincerity and devotion — focused on spiritual upliftment.",
            },
            {
              icon: "🤝",
              title: "Community Through Song",
              description:
                "Devotional singing brings families and neighbors together — one gathering at a time.",
            },
            {
              icon: "🙏",
              title: "Open to All",
              description:
                "Every gathering we lead welcomes anyone who wishes to listen, sing along, or simply be present.",
            },
          ].map((value) => (
            <div key={value.title} className="flex items-start gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg"
                style={{ background: "var(--gold)", color: "var(--maroon-dark)" }}
              >
                {value.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-maroon">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do / Scripture groups */}
      {offeringGroups.map((group, idx) => (
        <section
          key={group.title}
          id={idx === 0 ? "what-we-do" : "discourse"}
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

      {/* How to Invite Us */}
      <section
        id="invite"
        className="scroll-mt-20 px-4 py-14 sm:px-6"
        style={{ background: "var(--cream-card)" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.15em] text-orange-dark uppercase">
            Invite Us
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold text-maroon sm:text-3xl lg:text-4xl">
            How to Invite Bhajan Anand Mandali
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-14 rounded-full"
            style={{ background: "var(--orange)" }}
          />
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {INVITE_STEPS.map((s) => (
            <div
              key={s.step}
              className="rounded-[16px] px-5 py-5 shadow-sm"
              style={{ background: "var(--surface)" }}
            >
              <p className="text-xs font-bold tracking-wide text-orange-dark">
                {s.step}
              </p>
              <h3 className="font-display mt-1 text-base font-bold text-maroon">
                {s.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

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
            Whether it&apos;s a bhajan gathering, a scripture session, or a
            Sundarkand Path — we are here to serve with full devotion.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${CONTACT_PHONE_HREF}`}
              className="rounded-[10px] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--orange)" }}
            >
              📞 Call {CONTACT_PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--maroon)" }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.15em] text-orange-dark uppercase">
              Good to Know
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold text-maroon sm:text-3xl lg:text-4xl">
              Frequently Asked
            </h2>
            <div
              className="mx-auto mt-3 h-1 w-14 rounded-full"
              style={{ background: "var(--orange)" }}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-[16px] px-5 py-5 shadow-sm"
                style={{ background: "var(--cream-card)" }}
              >
                <h3 className="font-display text-base font-bold text-maroon">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
