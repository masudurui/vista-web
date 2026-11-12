/**
 * Every string, link and number on the marketing site lives here, copied from
 * the shipped static site (index.html) so the copy stays honest: no feature is
 * described that the app does not already have.
 */

export const site = {
  name: "Vista",
  tagline: "See your files, not filenames.",
  url: "https://vistaformac.com",
  description:
    "Vista is a file browser for macOS that shows your files as thumbnails, sorted by kind. Style every folder, search photos by what’s in them with an on-device AI model, and find the text inside screenshots and PDFs. Everything runs on your Mac.",
  ogDescription:
    "A visual file browser for macOS. Thumbnails sorted by kind, rounder folders in Sage Soft, White or Dark, Visual Search for photos and videos, and search inside screenshots and PDFs. Everything runs on your Mac.",
  buyUrl:
    "https://buy.polar.sh/polar_cl_TUK1YuJb0ImcyWnIdfuDXfaBeenBgx5fgmHdU2T5oTH",
  /** Served by the existing static site, so one upload keeps both in sync. */
  downloadUrl: "https://vistaformac.com/Vista.zip",
  requirements: "macOS 14 or later",
} as const;

export const pricing = {
  earlyBird: "$19",
  regular: "$29",
  licenceCount: "300",
  trialDays: "14",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export type Shot = {
  id: string;
  name: string;
  caption: string;
  alt: string;
  src: string;
  thumb: string;
  width: number;
  height: number;
};


/** The ten screenshots in the product tour, in the same order as the app. */
export const shots: Shot[] = [
  {
    id: "home",
    name: "Home",
    caption: "Good Afternoon: folders by kind, with storage at a glance.",
    alt: "Vista’s Home screen: folders by kind, with a storage bar across the top",
    src: "/images/hero/home.webp",
    thumb: "/images/hero/thumbs/home.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "search",
    name: "Search",
    caption: "Search in plain English, with visual matches inside your files.",
    alt: "Vista’s Search results with a visual match for a screenshot",
    src: "/images/hero/search.webp",
    thumb: "/images/hero/thumbs/search.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "customize",
    name: "Customize",
    caption: "Edit Folder: rename it, then pick a color and a shape.",
    alt: "Vista’s Edit Folder sheet with color and shape options",
    src: "/images/hero/customize.webp",
    thumb: "/images/hero/thumbs/customize.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "viewer",
    name: "Quick look",
    caption: "Preview code, text and PDFs without leaving the grid.",
    alt: "Vista’s file preview showing a photo full size",
    src: "/images/hero/viewer.webp",
    thumb: "/images/hero/thumbs/viewer.webp",
    width: 1600,
    height: 1005,
  },
  {
    id: "cleanup",
    name: "Clean up",
    caption: "Suggestions for the biggest leftovers, ready to review.",
    alt: "Vista’s Clean Up suggestions for large files",
    src: "/images/hero/cleanup.webp",
    thumb: "/images/hero/thumbs/cleanup.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "categories",
    name: "Categories",
    caption: "Every category in the sidebar, with counts and sizes.",
    alt: "Vista’s sidebar showing category counts and sizes",
    src: "/images/hero/categories.webp",
    thumb: "/images/hero/thumbs/categories.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "icons",
    name: "Folder icons",
    caption: "31 folder icons, or let a folder show its name.",
    alt: "Vista’s folder icon picker",
    src: "/images/hero/icons.webp",
    thumb: "/images/hero/thumbs/icons.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "folders",
    name: "Folder view",
    caption: "Open any source, like Slack, Arc or AirDrop, and see what’s inside.",
    alt: "Vista showing the contents of the Slack folder",
    src: "/images/hero/folders.webp",
    thumb: "/images/hero/thumbs/folders.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "large",
    name: "Large files",
    caption: "Sort a folder by size and spot the heavy files first.",
    alt: "Vista’s Large Files view inside AirDrop",
    src: "/images/hero/large.webp",
    thumb: "/images/hero/thumbs/large.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "gmail",
    name: "Move like Gmail",
    caption: "Arrow keys and single keys file things away, Gmail-style.",
    alt: "Vista’s GitHub folder: font files each shown as its own type specimen",
    src: "/images/hero/gmail.webp",
    thumb: "/images/hero/thumbs/gmail.webp",
    width: 1900,
    height: 1197,
  },
];

export type Pillar = { title: string; body: string };

/** The three-line summary under the hero. */
export const pillars: Pillar[] = [
  {
    title: "Thumbnails first",
    body: "Files and folders as large thumbnails, sorted into photos, screenshots, documents, and videos, no matter which folder they’re in.",
  },
  {
    title: "Search inside files",
    body: "Press / and type what you remember. Vista reads filenames and the words inside screenshots and PDFs, with matching lines shown under each result.",
  },
  {
    title: "Visual Search",
    body: "Describe a photo or video (“horse on the mountain”) and Vista finds it. On-device model, one-time download, then fully offline. Results show as “Visual match.”",
  },
];

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Does Vista reorganize my folders?",
    answer:
      "No. Vista changes how you see your files, not where they live. Your folders stay exactly as they are.",
  },
  {
    question: "Which folders does Vista look at?",
    answer:
      "Desktop, Documents, Downloads, Pictures, Movies, and Music, plus any folder you add.",
  },
  {
    question: "Can Vista delete my files?",
    answer:
      "No. Clean Up only moves files you’ve reviewed to the Trash, and Undo brings them back.",
  },
  {
    question: "Does anything leave my Mac?",
    answer:
      "No. Search, text recognition, duplicate detection and Visual Search run on your Mac. There’s no account and no cloud.",
  },
  {
    question: "How does Visual Search work?",
    answer:
      "Vista uses an AI model that runs on your Mac. You describe what you are looking for, like “horse”, “mountain” or “red car”, and it matches photos and videos by what’s in them, not by filename. The model is a one-time download of about 110 MB when you set it up; after that, every search works with no internet.",
  },
  {
    question: "Which themes does Vista have?",
    answer:
      "Sage Soft, White and Dark. Sage Soft is the default, Vista’s own soft green theme, and you can switch at any time.",
  },
  {
    question: "Can I style all my folders at once?",
    answer:
      "Yes. Pick a color, one of the seven rounder folder styles and an icon, then apply that style to every folder in one click, or keep individual folders different.",
  },
  {
    question: "Does Vista work without internet?",
    answer:
      "Yes. Visual Search needs its model downloaded once; after that everything runs locally, and your license works without a connection.",
  },
  {
    question: "Is this a subscription?",
    answer: "No. You pay once and get free updates.",
  },
  {
    question: "Why is it $19 and not $29?",
    answer:
      "The first 300 licenses are $19 as a thank-you to early users. After that it’s $29. Still one payment, still with free updates.",
  },
  {
    question: "What do I need?",
    answer: "A Mac running macOS 14 Sonoma or later.",
  },
];

/** What the one-time purchase includes. */
export const included: string[] = [
  "Every feature",
  "Free updates",
  "No account",
  "No cloud",
  "Works offline",
  "No tracking",
];
