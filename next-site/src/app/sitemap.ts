import type { MetadataRoute } from "next";

import { site } from "@/lib/media";
import { toolPaths } from "@/lib/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...toolPaths.map((path) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/tools/" ? 0.7 : 0.6,
    })),
    {
      url: `${site.url}/release-notes/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/compare/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/privacy/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${site.url}/support/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
