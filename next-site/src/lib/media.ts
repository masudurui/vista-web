/** Links, pricing and the media used across the page. */

export const site = {
  url: "https://vistaformac.com",
  buyUrl:
    "https://buy.polar.sh/polar_cl_7UyQ6ez6Rg33eeY8r3EyC1KVhw6HkaqtusPx81HRmRo",
  /** The notarized build ships in public/, so the button serves this app's copy. */
  downloadUrl: "/Vista.zip",
  requirements: "macOS 14+",
} as const;

export const pricing = {
  earlyBird: "$19",
  regular: "$29",
  licences: "300",
  trialDays: "7",
} as const;

export type Shot = {
  id: string;
  name: string;
  text: string;
  alt: string;
  src: string;
  thumb: string;
  width: number;
  height: number;
};

/** The ten screenshots in the hero tour, in the live order. */
export const shots: Shot[] = [
  {
    id: "hero-tab-0",
    name: "Home",
    text: "Good Afternoon: folders by kind, with storage at a glance.",
    alt: "Vista's Home screen: folders by kind, with a storage bar across the top",
    src: "/images/hero/home.webp",
    thumb: "/images/hero/thumbs/home.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "hero-tab-1",
    name: "Search",
    text: "Search in plain English, with visual matches inside your files.",
    alt: "Vista's Search results with a visual match for a screenshot",
    src: "/images/hero/search.webp",
    thumb: "/images/hero/thumbs/search.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "hero-tab-2",
    name: "Customize",
    text: "Edit Folder: rename it, then pick a color and a shape.",
    alt: "Vista's Edit Folder sheet with color and shape options",
    src: "/images/hero/customize.webp",
    thumb: "/images/hero/thumbs/customize.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "hero-tab-3",
    name: "Quick look",
    text: "Preview code, text and PDFs without leaving the grid.",
    alt: "Vista's viewer showing a photo full size",
    src: "/images/hero/viewer.webp",
    thumb: "/images/hero/thumbs/viewer.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "hero-tab-4",
    name: "Clean up",
    text: "Suggestions for the biggest leftovers, ready to review.",
    alt: "Vista's Clean Up suggestions for large files",
    src: "/images/hero/cleanup.webp",
    thumb: "/images/hero/thumbs/cleanup.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "hero-tab-5",
    name: "Categories",
    text: "Every category in the sidebar, with counts and sizes.",
    alt: "Vista's sidebar showing category counts and sizes",
    src: "/images/hero/categories.webp",
    thumb: "/images/hero/thumbs/categories.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "hero-tab-6",
    name: "Folder icons",
    text: "31 folder icons, or let a folder show its name.",
    alt: "Vista's folder icon picker with the Apple folder style",
    src: "/images/hero/icons.webp",
    thumb: "/images/hero/thumbs/icons.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "hero-tab-7",
    name: "Folder view",
    text: "Open any source, like Slack, Arc or AirDrop, and see what's inside.",
    alt: "Vista showing the contents of the Slack folder",
    src: "/images/hero/folders.webp",
    thumb: "/images/hero/thumbs/folders.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "hero-tab-8",
    name: "Large files",
    text: "Sort a folder by size and spot the heavy files first.",
    alt: "Vista's Large Files view inside AirDrop",
    src: "/images/hero/large.webp",
    thumb: "/images/hero/thumbs/large.webp",
    width: 1900,
    height: 1193,
  },
  {
    id: "hero-tab-9",
    name: "Move like Gmail",
    text: "Arrow keys and single keys file things away, Gmail-style.",
    alt: "Vista's GitHub folder: 15 font files, each shown as its own type specimen, with downloads grouped by source in the sidebar",
    src: "/images/hero/gmail.webp",
    thumb: "/images/hero/thumbs/gmail.webp",
    width: 1900,
    height: 1197,
  },
];

export type Cue = [number, number, string, string];

export type FeatureVideo = {
  src: string;
  poster: string;
  alt: string;
  /** Cues shown over the clip, [start, length, key, label]. */
  cues?: Cue[];
};

/**
 * The five clips the live page loads through its media loader. They are H.264,
 * 1600x1040, silent — same files the live site serves, so the frames match.
 */
export const featureVideos: Record<string, FeatureVideo> = {
  customize: {
    src: "/images/customize.mp4",
    poster: "/images/customize.png",
    alt: "Vista's Edit Folder sheet: renaming a folder, choosing its color, shape and icon, then applying that style to every folder",
  },
  search: {
    src: "/images/search.mp4",
    poster: "/images/search.png",
    alt: "Vista searching for “imagination” and opening the screenshots that contain the word",
    cues: [[0.55, 1.2, "/", "to search"]],
  },
  gmail: {
    src: "/images/gmail.mp4",
    poster: "/images/gmail.png",
    alt: "Vista driven only by the keyboard: the arrow keys moving between categories and files, then opening the Dieter Rams folder",
  },
  cleanup: {
    src: "/images/cleanup.mp4",
    poster: "/images/cleanup.png",
    alt: "Vista's Clean Up: reviewing old screenshots and old downloads, then selecting the ones to clear and seeing how much space they free",
  },
  offline: {
    src: "/images/offline.mp4",
    poster: "/images/offline.png",
    alt: "Vista working with Wi‑Fi off: indexing, text recognition, duplicate detection and Visual Search all running on the Mac",
  },
};

export const VIDEO_ASPECT = "1600 / 1040";
