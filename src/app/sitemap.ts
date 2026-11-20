import { policySlugs, type Policy } from "@/i18n/legal";
import type { MetadataRoute } from "next";
import { guidePath, locales, topics, type Topic } from "@/content/visit-guides";
import { siteUrl } from "@/content/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  function entries(topic?: Topic, policy?: Policy): MetadataRoute.Sitemap {
    const urlFor = (locale: (typeof locales)[number]) =>
      new URL(topic ? guidePath(locale, topic) : policy ? `/${locale}/${policy}` : `/${locale}`, siteUrl).href;
    const languages = Object.fromEntries(locales.map((locale) => [locale, urlFor(locale)]));
    return locales.map((locale) => ({
      url: urlFor(locale),
      alternates: { languages: { ...languages, "x-default": urlFor("en") } },
    }));
  }

  return [...entries(), ...topics.flatMap((topic) => entries(topic)), ...policySlugs.flatMap((policy) => entries(undefined, policy))];
}
