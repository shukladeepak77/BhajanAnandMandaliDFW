export type Offering = {
  icon: string;
  title: string;
  description: string;
};

// Matches the group's own poster exactly: Keertan · Bhajan Sandhya · Mata
// ki Chowki · Sundarkand Path · Satsang.
export const offerings: Offering[] = [
  {
    icon: "🙏",
    title: "Keertan",
    description:
      "Group kirtan — call-and-response devotional chanting with dhol, harmonium and taal, open to all voices and all levels.",
  },
  {
    icon: "🎶",
    title: "Bhajan Sandhya",
    description:
      "A soul-stirring evening of devotional bhajans and sankirtan — group singing in devotion, for home or community gatherings.",
  },
  {
    icon: "🪔",
    title: "Mata Ki Chowki",
    description:
      "Devotional gatherings in reverence of Mata — uplifting evenings of bhajan and bhakti, open to all.",
  },
  {
    icon: "📿",
    title: "Sundarkand Path",
    description:
      "Devotional recitation from Ramcharitmanas — sankalp, path and concluding aarti for peace, protection and positive energy.",
  },
  {
    icon: "🕉️",
    title: "Satsang",
    description:
      "Gatherings of devotional singing, reflection and fellowship — bringing the community together in a spirit of bhakti.",
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
    question: "Can we invite the mandali to our home or event?",
    answer:
      "Yes — we're happy to come for Keertan, Bhajan Sandhya, Mata Ki Chowki, Sundarkand Path or Satsang. Reach out by phone or WhatsApp to coordinate.",
  },
  {
    question: "How do I get in touch about a gathering?",
    answer:
      "Call or message us on WhatsApp at (214) 945-5080 — we'll be glad to connect and coordinate with full devotion.",
  },
];
