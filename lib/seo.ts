import type { Metadata } from "next";

export const siteConfig = {
  name: "Global Internet 5G",
  url: "https://globalinternet5g.com",
  locale: "vi_VN",
  defaultTitle: "Global Internet 5G",
  defaultDescription:
    "Giải pháp SIM, eSIM, Pocket WiFi, Home WiFi và Hikari tại Nhật. Tư vấn rõ ràng, hỗ trợ nhanh và trải nghiệm đáng tin cậy.",
  defaultKeywords: [
    "internet Nhật Bản",
    "SIM Nhật Bản",
    "eSIM Nhật Bản",
    "Pocket WiFi Nhật",
    "Home WiFi Nhật",
    "Hikari",
    "Global Internet 5G",
  ],
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: [...siteConfig.defaultKeywords, ...keywords],
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
