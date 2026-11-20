import { landmarkHighlights, landmarkRatings, lodgingAdvice, lodgingDirectory, structureLabels } from "@/content/quito/practical-details";
import { adviceLabels, visitAdvice } from "@/content/quito/visit-advice";
import landmarkPhotos from "@/content/quito/photos.json";
import { landmarkLabels, landmarkGuide } from "@/content/quito/guide-data";
import { landmarkTopics } from "@/content/quito/landmarks";
import { factLabels, nearbyPhotos, reviewChecked, reviewSnapshots, reviewText, visitFacts } from "@/content/nearby-guides";
import { agendaChecked, arenaSessions, cityAgenda, parkHoursSource, parkRouteMaps, parkVisit, quitoFestSource } from "@/content/park-visit";
import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, getGuideMap, guideLabels, guidePath, isVisitTopic, locales, topics, visitTopics } from "@/content/visit-guides";

export const revalidate = 3600;

type Props = { params: Promise<{ locale: string; topic: string }> };

function resolveGuide(params: Awaited<Props["params"]>) {
  const locale = locales.find((value) => value === params.locale);
  const topic = topics.find((value) => value === params.topic);
  if (!locale || !topic) notFound();
  return { locale, topic, guide: getGuide(topic, locale) };
}

export function generateStaticParams() {
  return topics.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, topic, guide } = resolveGuide(await params);
  const url = guidePath(locale, topic);
  const photos = isVisitTopic(topic) ? undefined : [{ url: landmarkPhotos[topic].src, alt: guide.title }];

  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: {
      canonical: url,
      languages: { en: guidePath("en", topic), es: guidePath("es", topic), zh: guidePath("zh", topic), "x-default": guidePath("en", topic) },
    },
    openGraph: { title: guide.title, description: guide.description, url, images: photos },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: photos },
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, topic, guide } = resolveGuide(await params);
  const labels = guideLabels[locale];
  const visit = parkVisit[locale];
  const landmark = isVisitTopic(topic) ? null : landmarkGuide(topic, locale);
  const facts = landmark ? {
    manager: landmark.about,
    address: landmark.address,
    hours: landmark.hours,
    fee: landmark.access,
    transit: landmark.transport,
  } : visitFacts[topic][locale];
  const cityLabels = landmarkLabels[locale];
  const map = getGuideMap(topic);
  const advice = isVisitTopic(topic) ? null : visitAdvice[topic][locale];
  const adviceText = adviceLabels[locale];
  const destination = landmark ? new URL(map).searchParams.get("query") : null;
  const directions = destination ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}` : null;
  const factText = factLabels[locale];
  const review = isVisitTopic(topic) ? reviewSnapshots[topic] : landmarkRatings[topic];
  const structure = structureLabels[locale];
  const highlight = isVisitTopic(topic) ? null : landmarkHighlights[topic][({ es: 0, en: 1, zh: 2 } as const)[locale]];
  const reviewCopy = reviewText[locale];
  const landmarkPhoto = isVisitTopic(topic) ? null : landmarkPhotos[topic];
  const photo = landmarkPhoto ?? (topic === "parque-la-carolina" || topic === "jardin-botanico-quito" ? nearbyPhotos[topic] : null);
  const license = landmarkPhoto?.license ?? "4.0";
  const related = landmark
    ? landmarkTopics.filter((candidate) => candidate !== topic && landmarkGuide(candidate, locale).station === landmark.station).slice(0, 3)
    : visitTopics.filter((candidate) => candidate !== topic);
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
    <main lang={locale === "zh" ? "zh-Hant" : locale} className="section visit-guide">
      <header>
        <div className="visit-guide-links">
          <Link href={`/${locale}`}>{labels.home}</Link>
          <nav aria-label={labels.languages} className="visit-guide-links">
            {locales.map((language) => (
              <Link key={language} href={guidePath(language, topic)} hrefLang={language} lang={language === "zh" ? "zh-Hant" : language} aria-current={language === locale ? "page" : undefined}>
                {languages[language]}
              </Link>
            ))}
          </nav>
        </div>
        <h1>{guide.title}</h1>
        <p>{guide.description}</p>
        {landmark && (
          <p>
            {structure.hours} · {facts.hours}
            {" · "}
            {review ? <a href="#visitor-reviews">{review.score}/5 · Tripadvisor</a> : <a href="#visitor-reviews">{factText.reviews}</a>}
          </p>
        )}
        <a className="maps-link" href={map}>{labels.map}</a>
        <Image className={landmarkPhoto ? "visit-guide-image landmark-photo" : "visit-guide-image"} src={photo?.src || "/gallery/parque-bicentenario (1).jpg"} alt={photo ? guide.title : labels.home} width={photo?.width || 960} height={photo?.height || 540} sizes="(max-width: 960px) 100vw, 850px" />
        {photo && (
          <p className="info-card-note">
            {factText.photo} · <a href={photo.source}>{photo.author} / Wikimedia Commons</a>
            {" · "}<a href={license === "CC0" ? "https://creativecommons.org/publicdomain/zero/1.0/" : `https://creativecommons.org/licenses/by-sa/${license}/`}>{license === "CC0" ? "CC0 1.0" : `CC BY-SA ${license}`}</a>
            {landmarkPhoto && ` · ${cityLabels.resized}`}
          </p>
        )}
      </header>
      {landmark && (
        <section>
          <h2>{structure.discover}</h2>
          <h3>{adviceText.tips}</h3>
          <p>{advice}</p>
          <h3>{structure.highlights}</h3>
          <p>{highlight}</p>
        </section>
      )}
      <section>
        <h2>{landmark ? `${adviceText.about}${locale === "zh" ? "" : " "}${guide.title}` : factText.manager}</h2>
        <p>{facts.manager}</p>
      </section>
      <section>
        <h2>{factText.basic}</h2>
        <dl className="guide-facts">
          {landmark ? (
            <>
              <div><dt>{structure.name}</dt><dd>{guide.title}</dd></div>
              <div><dt>{structure.city}</dt><dd>{locale === "zh" ? "基多，厄瓜多" : "Quito, Ecuador"}</dd></div>
              <div><dt>{factText.address}</dt><dd>{facts.address}, Quito</dd></div>
              <div><dt>{structure.metro}</dt><dd>{landmark.station}</dd></div>
            </>
          ) : (["address", "hours", "fee", "transit"] as const).map((field) => (
            <div key={field}><dt>{factText[field]}</dt><dd>{facts[field]}</dd></div>
          ))}
        </dl>
      </section>
      {landmark && (
        <>
          <section>
            <h2>{structure.hours}</h2>
            <p>{facts.hours}</p>
            <p><a href={landmark.practicalSource}>{structure.official}</a></p>
          </section>
          <section>
            <h2>{structure.fee}</h2>
            <p>{facts.fee}</p>
          </section>
          <section>
            <h2>{structure.transport}</h2>
            <p>{facts.transit}</p>
          </section>
        </>
      )}
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
        <Fragment key={section.title}>
          {landmark && "kind" in section && section.kind === "photo" && (
            <section>
              <h2>{structure.notice}</h2>
              <details>
                <summary>{landmark.faq[0]}</summary>
                <p>{landmark.faq[1]}</p>
              </details>
            </section>
          )}
          <section>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}
          </section>
        </Fragment>
      ))}
      {landmark && (
        <section>
          <h2>{structure.stay}</h2>
          <p>{lodgingAdvice(locale, landmark.station)}</p>
          <p><a href={lodgingDirectory}>{structure.officialLodging}</a></p>
        </section>
      )}
      <section id="visitor-reviews">
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
        <p><a href={map}>{factText.reviewLink}</a></p>
      </section>
      <section>
        <h2>{labels.related}</h2>
        {related.length > 0 && (
          <ul>
            {related.map((other) => (
              <li key={other}><Link href={guidePath(locale, other)}>{getGuide(other, locale).title}</Link></li>
            ))}
          </ul>
        )}
        <p><Link href={`/${locale}#explore-quito`}>{cityLabels.nearby}</Link></p>
      </section>
      {landmark && (
        <section>
          <h2>{structure.address}</h2>
          <p>{landmark.address}, Quito</p>
          <p><a href={map}>{labels.map}</a></p>
          {directions && <p><a href={directions}>{adviceText.directions}</a></p>}
        </section>
      )}
      <section>
        <h2>{labels.sources}</h2>
        <ul>
          {guide.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}
        </ul>
      </section>
    </main>
  );
}
