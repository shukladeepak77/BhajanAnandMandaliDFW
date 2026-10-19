export type Offering = {
  icon: string;
  title: string;
  description: string;
};

export type OfferingGroup = {
  eyebrow: string;
  title: string;
  blurb: string;
  items: Offering[];
};

// One group for now, mirroring dharmpathusa.com/spiritual-seva's "Path &
// Bhakti Events" list: the group's own poster items (originally Keertan,
// Bhajan Sandhya, Mata ki Chowki, Sundarkand Path, Satsang — Keertan was
// later replaced with Mata Ka Jagran per explicit instruction) plus
// Akhand RamCharitManas Path from that same list. Hanuman Chalisa Path
// and Naam Jap are intentionally not separate listings — per explicit
// instruction, Hanuman Chalisa is recited as part of Sundarkand Path
// itself, and Naam Jap is not offered as its own standalone service.
//
// A second "Scripture & Discourse" group (Shree Ram Charit Manas, Bhagwad
// Gita, Upanishads — mirroring that page's "Discourses & Sessions" list)
// existed here and was removed for now, per explicit instruction ("will
// add them later") — not dropped for any content reason. Re-add as a
// second entry in offeringGroups when ready; see git history for the
// exact prior wording.
export const offeringGroups: OfferingGroup[] = [
  {
    eyebrow: "WHAT WE DO",
    title: "Bhajan, Kirtan & Path Gatherings",
    blurb:
      "Devotional singing and recitation for home or community gatherings — coordinated with full devotion and care.",
    items: [
      {
        icon: "🙏",
        title: "Mata Ka Jagran",
        description:
          "An overnight devotional vigil in reverence of Mata — group kirtan and bhajans with dhol, harmonium and taal through the night, open to all voices and all levels.",
      },
      {
        icon: "🪔",
        title: "Mata Ki Chowki",
        description:
          "Devotional gatherings in reverence of Mata — uplifting evenings of bhajan and bhakti, open to all.",
      },
      {
        icon: "🎶",
        title: "Bhajan Sandhya",
        description:
          "A soul-stirring evening of devotional bhajans and sankirtan — group singing in devotion, for home or community gatherings.",
      },
      {
        icon: "📿",
        title: "Sundarkand Path",
        description:
          "Devotional recitation from Ramcharitmanas, including Hanuman Chalisa — sankalp, path and concluding aarti for peace, protection and positive energy.",
      },
      {
        icon: "📖",
        title: "Akhand RamCharitManas Path",
        description:
          "Continuous, uninterrupted recitation of the Ramcharitmanas for auspicious occasions, family gatherings and divine blessings.",
      },
      {
        icon: "🕉️",
        title: "Satsang",
        description:
          "Gatherings of devotional singing, reflection and togetherness — bringing the community together in a spirit of bhakti.",
      },
    ],
  },
];

// Flattened list, used for the shorter highlight strip in the hero card.
export const highlightOfferings: Offering[] = offeringGroups[0].items.slice(0, 5);

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What does Bhajan Anand Mandali of DFW do?",
    answer:
      "We bring devotional singing — Mata Ka Jagran, Bhajan Sandhya, Mata Ki Chowki, Sundarkand Path, Satsang and more — to homes and community gatherings across the DFW area, Texas.",
  },
  {
    question: "Can we invite the mandali to our home or event?",
    answer:
      "Yes — we're happy to come for any of the gatherings listed above. Reach out by phone, text, or WhatsApp with your date, occasion and location, and we'll coordinate with full devotion.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "Call, text, or message us on WhatsApp at (214) 945-5080 — we'll be glad to connect and help you plan your gathering.",
  },
];
