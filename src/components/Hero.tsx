export default function Hero() {
  return (
    <section
      className="px-4 py-14 text-center sm:px-6 sm:py-20"
      style={{
        background:
          "linear-gradient(135deg, #521515 0%, #6b1f1f 45%, #b85000 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
          Devotional Singing, Rooted in Bhakti
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
          <span className="font-semibold text-gold">Bhajan Anand Mandali</span>{" "}
          brings Keertan, Bhajan Sandhya, Mata Ki Chowki, Sundarkand Path,
          Naam Jap and Satsang to homes and community gatherings across the
          DFW area, Texas — singing in devotion, uniting the community.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#what-we-do"
            className="rounded-[10px] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--orange)" }}
          >
            What We Do
          </a>
          <a
            href="#invite"
            className="rounded-[10px] border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
          >
            Invite Us
          </a>
        </div>

        <p className="mt-6 text-xs text-white/70 sm:text-sm">
          🙏 Serving the DFW community with devotion
        </p>
      </div>
    </section>
  );
}
