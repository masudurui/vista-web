/**
 * The free tools, in one place so the landing-page cards and the sitemap stay in
 * sync. Each slug matches a folder in `public/tools/<slug>/index.html`.
 */
export type ToolMeta = {
  slug: string;
  label: string;
  hint: string;
};

export const tools: ToolMeta[] = [
  {
    slug: "screenshot-settings",
    label: "Screenshot settings",
    hint: "Pick the save folder, format, name and shadow. Copy one command.",
  },
  {
    slug: "folder-xray",
    label: "Folder X-ray",
    hint: "Drop a folder to see what is taking space. Nothing is uploaded.",
  },
  {
    slug: "folder-structure",
    label: "Folder structure",
    hint: "Pick your kind of work. Download a ready-made set of folders.",
  },
  {
    slug: "file-naming",
    label: "File naming",
    hint: "Build a naming format. Check any file name against it.",
  },
  {
    slug: "wallpaper-folder-colors",
    label: "Wallpaper folder colors",
    hint: "Drop in a wallpaper. See which folder colors match it.",
  },
];

/** Every URL the free tools occupy, for the sitemap. */
export const toolPaths = ["/tools/", ...tools.map((tool) => `/tools/${tool.slug}/`)];
