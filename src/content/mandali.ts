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

// Two groups, mirroring the exact split used on
// dharmpathusa.com/spiritual-seva ("Path & Bhakti Events" and
// "Discourses & Sessions"): Group 1 = the group's own poster items
// (Keertan, Bhajan Sandhya, Mata ki Chowki, Sundarkand Path, Satsang)
// plus every remaining Path & Bhakti Events item from that page (Akhand
// RamCharitManas Path, Hanuman Chalisa Path, Naam Jap). Group 2 = every
// Discourses & Sessions item from that page (Shree Ram Charit Manas,
// Bhagwad Gita, Upanishads). Per explicit instruction, every service
// listed on that page is represented here, not a subset.
export const offeringGroups: OfferingGroup[] = [
  {
    eyebrow: "WHAT WE DO",
    title: "Bhajan, Kirtan & Path Gatherings",
    blurb:
      "Devotional singing and recitation for home or community gatherings — coordinated with full devotion and care.",
    items: [
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
        icon: "📖",
        title: "Akhand RamCharitManas Path",
        description:
          "Continuous, uninterrupted recitation of the Ramcharitmanas for auspicious occasions, family gatherings and divine blessings.",
      },
      {
        icon: "🐒",
        title: "Hanuman Chalisa Path",
        description:
          "Group recitation of Hanuman Chalisa with dhyan, path and concluding prayers for strength and devotion.",
      },
      {
        icon: "🧘",
        title: "Naam Jap",
        description:
          "Guided group mantra jap sessions covering sacred mantras and shlokas, with correct uccharan and meaning explained.",
      },
      {
        icon: "🕉️",
        title: "Satsang",
        description:
          "Gatherings of devotional singing, reflection and fellowship — bringing the community together in a spirit of bhakti.",
      },
    ],
  },
  {
    eyebrow: "SCRIPTURE & DISCOURSE",
    title: "Sacred Texts & Devotional Practices",
    blurb:
      "Sessions on Sanatan scriptures woven alongside our bhajan and kirtan gatherings.",
    items: [
      {
        icon: "📜",
        title: "Shree Ram Charit Manas",
        description:
          "Study of Tulsidas's Avadhi masterpiece — Chaupais, Dohas, Chhands and Sorthas explored with translation, meaning and commentary.",
      },
      {
        icon: "🌸",
        title: "Bhagwad Gita",
        description:
          "Chapter-wise exploration of karma, dharma, bhakti and jnana — the eternal dialogue between Arjuna and Krishna.",
      },
      {
        icon: "🔔",
        title: "Upanishads",
        description:
          "Selected study of key Upanishads — exploring Brahman, Atman, consciousness and the mahavakyas.",
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
    question: "What does Bhajan Anand Mandali do?",
    answer:
      "We bring devotional singing — Keertan, Bhajan Sandhya, Mata Ki Chowki, Sundarkand Path, Naam Jap, Satsang and more — to homes and community gatherings across the DFW area, Texas.",
  },
  {
    question: "Can we invite the mandali to our home or event?",
    answer:
      "Yes — we're happy to come for any of the gatherings listed above. Reach out by phone or WhatsApp with your date, occasion and location, and we'll coordinate with full devotion.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "Call or message us on WhatsApp at (214) 945-5080 — we'll be glad to connect and help you plan your gathering.",
  },
];
