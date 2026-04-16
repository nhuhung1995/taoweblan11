import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/san-pham",
    "/pricing",
    "/giai-phap",
    "/ho-tro",
    "/lien-he",
  ];

  const productRoutes = products.map((item) => item.href);
  const now = new Date();

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${siteConfig.url}${route || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
