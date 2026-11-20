import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideLabels, guideMaps, guidePath, guides, locales, topics } from "@/content/visit-guides";

type Props = { params: Promise<{ locale: string; topic: string }> };

function resolveGuide(params: Awaited<Props["params"]>) {
  const locale = locales.find((value) => value === params.locale);
  const topic = topics.find((value) => value === params.topic);
  if (!locale || !topic) notFound();
  return { locale, topic, guide: guides[topic][locale] };
}

export function generateStaticParams() {
  return topics.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, topic, guide } = resolveGuide(await params);
  const url = guidePath(locale, topic);

  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: {
      canonical: url,
      languages: { en: guidePath("en", topic), es: guidePath("es", topic), zh: guidePath("zh", topic), "x-default": guidePath("en", topic) },
    },
    openGraph: { title: guide.title, description: guide.description, url },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description },
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, topic, guide } = resolveGuide(await params);
  const labels = guideLabels[locale];
  const languages = { en: "English", es: "Español", zh: "中文" };

  return (
    <main lang={locale} className="section visit-guide">
      <header>
        <div className="visit-guide-links">
          <Link href={`/${locale}`}>{labels.home}</Link>
          <nav aria-label={labels.languages} className="visit-guide-links">
            {locales.map((language) => (
              <Link key={language} href={guidePath(language, topic)} hrefLang={language} lang={language} aria-current={language === locale ? "page" : undefined}>
                {languages[language]}
              </Link>
            ))}
          </nav>
        </div>
        <h1>{guide.title}</h1>
        <p>{guide.description}</p>
        <a className="maps-link" href={guideMaps[topic]}>{labels.map}</a>
        <Image className="visit-guide-image" src="/gallery/parque-bicentenario (1).jpg" alt={labels.home} width={960} height={540} sizes="(max-width: 960px) 100vw, 850px" />
      </header>
      {guide.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}
        </section>
      ))}
      <section>
        <h2>{labels.related}</h2>
        <ul>
          {topics.filter((other) => other !== topic).map((other) => (
            <li key={other}><Link href={guidePath(locale, other)}>{guides[other][locale].title}</Link></li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{labels.sources}</h2>
        <ul>
          {guide.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}
        </ul>
      </section>
    </main>
  );
}
