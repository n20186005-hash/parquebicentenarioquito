import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { legal, policySlugs } from "@/i18n/legal";
import { locales } from "@/content/visit-guides";
import CookiesClient from "./CookiesClient";

type Props = { params: Promise<{ locale: string; policy: string }> };

async function resolve(params: Props["params"]) {
  const values = await params;
  const locale = locales.find((item) => item === values.locale);
  const policy = policySlugs.find((item) => item === values.policy);
  if (!locale || !policy) notFound();
  return { locale, policy, copy: legal[locale] };
}

export function generateStaticParams() {
  return policySlugs.map((policy) => ({ policy }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, policy, copy } = await resolve(params);
  const title = copy.titles[policy];
  const description = policy === "cookies" ? copy.cookie.intro : copy[policy][0][1];
  return {
    title, description,
    alternates: {
      canonical: `/${locale}/${policy}`,
      languages: Object.fromEntries([...locales.map((l) => [l, `/${l}/${policy}`]), ["x-default", `/en/${policy}`]]),
    },
    openGraph: { title, description, url: `/${locale}/${policy}` },
    twitter: { title, description },
  };
}

export default async function PolicyPage({ params }: Props) {
  const { locale, policy, copy } = await resolve(params);
  if (policy === "cookies") return <CookiesClient locale={locale} />;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-cream)", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "3rem", borderRadius: "2px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>{copy.titles[policy]}</h1>
        <p style={{ color: "var(--color-stone)", marginBottom: "2rem" }}>{copy.updated}</p>
        {copy[policy].map(([heading, paragraph, items]) => (
          <section key={heading} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>{heading}</h2>
            <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)" }}>{paragraph}</p>
            {items && <ul style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", paddingLeft: "1.5rem" }}>{items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>
        ))}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <Link href={`/${locale}`} style={{ color: "var(--color-teal)", textDecoration: "none" }}>← {copy.back}</Link>
        </div>
      </div>
    </div>
  );
}
