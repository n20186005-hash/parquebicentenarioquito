import { factLabels, nearbyPhotos, reviewChecked, reviewSnapshots, reviewText, visitFacts } from "@/content/nearby-guides";
import { agendaChecked, arenaSessions, cityAgenda, parkHoursSource, parkRouteMaps, parkVisit, quitoFestSource } from "@/content/park-visit";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideLabels, guideMaps, guidePath, guides, locales, topics } from "@/content/visit-guides";

export const revalidate = 3600;

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
  const visit = parkVisit[locale];
  const facts = visitFacts[topic][locale];
  const factText = factLabels[locale];
  const review = reviewSnapshots[topic];
  const reviewCopy = reviewText[locale];
  const photo = topic === "parque-la-carolina" || topic === "jardin-botanico-quito" ? nearbyPhotos[topic] : null;
  const dateFormat = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Guayaquil",
  });
  const todayInQuito = new Intl.DateTimeFormat("en-CA", {
    dateStyle: "short",
    timeZone: "America/Guayaquil",
  }).format(new Date());
  const upcoming = arenaSessions.filter(({ localTime }) => localTime.slice(0, 10) >= todayInQuito);
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
        <Image className="visit-guide-image" src={photo?.src || "/gallery/parque-bicentenario (1).jpg"} alt={photo ? guide.title : labels.home} width={photo?.width || 960} height={photo?.height || 540} sizes="(max-width: 960px) 100vw, 850px" />
        {photo && (
          <p className="info-card-note">
            {factText.photo} · <a href={photo.source}>{photo.author} / Wikimedia Commons</a>
            {" · "}<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
          </p>
        )}
      </header>
      <section>
        <h2>{factText.manager}</h2>
        <p>{facts.manager}</p>
      </section>
      <section>
        <h2>{factText.basic}</h2>
        <dl className="guide-facts">
          {(["address", "hours", "fee", "transit"] as const).map((field) => (
            <div key={field}><dt>{factText[field]}</dt><dd>{facts[field]}</dd></div>
          ))}
        </dl>
      </section>
      {topic === "arena-bicentenario" && (
        <section id="agenda">
          <h2>{visit.agendaTitle}</h2>
          {upcoming.length > 0 ? (
            <>
              <ul>
                {upcoming.map(({ localTime, name }) => (
                  <li key={localTime}>
                    <time dateTime={localTime}>{dateFormat.format(new Date(localTime))}</time>
                    {" · "}{name[locale]}{" · Arena Bicentenario"}
                  </li>
                ))}
              </ul>
              <p>{visit.agendaNote} <a href={quitoFestSource}>{visit.eventSource}</a></p>
            </>
          ) : <p>{visit.emptyAgenda}</p>}
          <p>{visit.checked} <time dateTime={agendaChecked}>{agendaChecked}</time></p>
          <p><a href={cityAgenda}>{visit.calendar}</a></p>
        </section>
      )}
      {topic === "como-llegar" && (
        <section id="entrances">
          <h2>{visit.hoursSource}</h2>
          <p>{visit.hours} <a href={parkHoursSource}>{labels.sources}</a></p>
          <p>{visit.arrival}</p>
          <ul>
            {parkRouteMaps.map((url, index) => <li key={url}><a href={url}>{visit.maps[index]}</a></li>)}
          </ul>
        </section>
      )}
      {guide.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}
        </section>
      ))}
      <section>
        <h2>{factText.reviews}</h2>
        {review && (
          <p>
            {topic === "como-llegar" && `${reviewCopy.park} · `}
            <strong>{review.score}/5</strong>
            {" · "}{review.count} {reviewCopy.count}
            {" · "}<a href={review.url}>Tripadvisor</a>
            {" · "}{reviewCopy.checked} <time dateTime={reviewChecked}>{reviewChecked}</time>
          </p>
        )}
        <p><a href={guideMaps[topic]}>{factText.reviewLink}</a></p>
      </section>
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
