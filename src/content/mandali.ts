export type Offering = {
  icon: string;
  title: string;
  description: string;
};

// What the mandali does — mirrors the "Path & Bhakti Events" style already
// used on dharmpathusa.com/spiritual-seva, scoped to what this group itself
// offers (group bhajan/kirtan singing), not the parent foundation's full
// catalog of seva offerings.
export const offerings: Offering[] = [
  {
    icon: "🎶",
    title: "Bhajan Sandhya",
    description:
      "A soul-stirring evening of devotional bhajans and sankirtan — group singing, dhol and harmonium, open to all voices and all levels.",
  },
  {
    icon: "🪔",
    title: "Mata Ki Chowki",
    description:
      "Devotional gatherings in reverence of Mata — uplifting community evenings of bhajan and bhakti, open to all.",
  },
  {
    icon: "🙏",
    title: "Naam Jap & Kirtan",
    description:
      "Guided group mantra jap and kirtan sessions, with correct uccharan and meaning explained for beginners and seasoned singers alike.",
  },
  {
    icon: "📿",
    title: "Festival & Occasion Singing",
    description:
      "Bhajan mandali participation for festivals, home gatherings and community occasions — coordinated with full devotion and care.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Who can be part of Bhajan Anand Mandali?",
    answer:
      "Anyone with an open heart and love for devotional singing — no formal training required. Singers, instrumentalists and listeners are all part of the mandali.",
  },
  {
    question: "Is this affiliated with Dharma Path USA Foundation?",
    answer:
      "Yes — Bhajan Anand Mandali of DFW operates under the umbrella of Dharma Path USA Foundation, a 501(c)(3) non-profit, as its dedicated bhajan and kirtan group.",
  },
  {
    question: "How do I get in touch about a gathering?",
    answer:
      "Reach out using the contact details below, or through Dharma Path USA Foundation's main site — we'll be glad to connect.",
  },
];
