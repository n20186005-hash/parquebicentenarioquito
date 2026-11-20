import { fieldNoteLabel, fieldNotes } from "@/content/quito/field-notes";
import { SiteNav } from "@/components/SiteNav";
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
  const localeIndex = ({ es: 0, en: 1, zh: 2 } as const)[locale];
  const highlight = isVisitTopic(topic) ? null : landmarkHighlights[topic][localeIndex];
  const fieldNote = isVisitTopic(topic) ? null : fieldNotes[topic][localeIndex];
  const reviewCopy = reviewText[locale];
  const landmarkPhoto = isVisitTopic(topic) ? null : landmarkPhotos[topic];
  const photo = landmarkPhoto ?? (topic === "parque-la-carolina" || topic === "jardin-botanico-quito" ? nearbyPhotos[topic] : null);
  const portrait = photo && photo.height > photo.width;
  const license = landmarkPhoto?.license ?? "4.0";
  const related = topic === "plaza-grande" ? (["catedral", "compania", "san-francisco"] as const) : landmark
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
  const home = `/${locale}`;
  const city = locale === "zh" ? "基多，厄瓜多" : "Quito, Ecuador";
  const address = landmark ? `${facts.address}${locale === "zh" ? "，基多" : ", Quito"}` : facts.address;
  const languagePaths = { en: guidePath("en", topic), es: guidePath("es", topic), zh: guidePath("zh", topic) };

  return (
    <main lang={locale === "zh" ? "zh-Hant" : locale} className="visit-guide">
      <SiteNav locale={locale} homeHref={home} languagePaths={languagePaths}>
        <a href="#guide-about">{adviceText.about.trim()}</a>
        <a href="#guide-facts">{factText.basic}</a>
        <a href="#visitor-reviews">{factText.reviews}</a>
        <Link href={`${home}#explore-quito`}>{cityLabels.nearby}</Link>
      </SiteNav>
      <header className="hero guide-hero">
        <div className={`hero-bg guide-hero-bg${portrait ? " guide-hero-bg-portrait" : ""}`}>
          <Image src={photo?.src ?? "/gallery/parque-bicentenario (1).jpg"} alt={photo ? guide.title : labels.home} fill preload sizes="100vw" />
        </div>
        <div className="hero-texture" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-tagline">{city}</p>
          <h1 className="hero-title">{guide.title}</h1>
          <p className="hero-subtitle">{guide.description}</p>
          <div className="guide-hero-meta">
            <a href="#visitor-reviews">{review ? `★ ${review.score}/5 · Tripadvisor` : factText.reviews}</a>
            <p>{factText.hours} · {facts.hours}</p>
          </div>
          <a className="hero-cta" href={map}>{labels.map}</a>
        </div>
      </header>
      <div className="section guide-body">
        {photo && (
          <p className="info-card-note">
            {factText.photo} · <a href={photo.source}>{photo.author} / Wikimedia Commons</a>
            {" · "}<a href={license === "CC0" ? "https://creativecommons.org/publicdomain/zero/1.0/" : `https://creativecommons.org/licenses/by-sa/${license}/`}>{license === "CC0" ? "CC0 1.0" : `CC BY-SA ${license}`}</a>
            {landmarkPhoto && ` · ${cityLabels.resized}`}
          </p>
        )}
        {landmark && (
          <section className="info-card">
            <h2>{structure.discover}</h2>
            <p>{guide.description}</p>
            <h3>{adviceText.tips}</h3>
            <p>{advice}</p>
            <h3>{structure.highlights}</h3>
            <p>{highlight}</p>
          </section>
        )}
        <section className="info-card" id="guide-about">
          <h2>{landmark ? `${adviceText.about}${locale === "zh" ? "" : " "}${guide.title}` : factText.manager}</h2>
          <p>{facts.manager}</p>
        </section>
        <section className="info-card" id="guide-facts">
          <h2>{factText.basic}</h2>
          <dl className="guide-facts">
            {landmark ? (
              <>
                <div><dt>{structure.name}</dt><dd>{guide.title}</dd></div>
                <div><dt>{structure.city}</dt><dd>{city}</dd></div>
                <div><dt>{factText.address}</dt><dd>{address}</dd></div>
                <div><dt>{structure.metro}</dt><dd>{landmark.station}</dd></div>
                <div><dt>{factText.hours}</dt><dd>{facts.hours}</dd></div>
                <div><dt>{factText.fee}</dt><dd>{facts.fee}</dd></div>
                <div><dt>{factText.transit}</dt><dd>{facts.transit}</dd></div>
              </>
            ) : (["address", "hours", "fee", "transit"] as const).map((field) => (
              <div key={field}><dt>{factText[field]}</dt><dd>{facts[field]}</dd></div>
            ))}
          </dl>
        </section>
        {landmark && (
          <>
            <section className="info-card">
              <h2>{structure.hours}</h2>
              <p>{facts.hours}</p>
              <p><a href={landmark.practicalSource}>{structure.official}</a></p>
            </section>
            <section className="info-card">
              <h2>{structure.fee}</h2>
              <p>{facts.fee}</p>
            </section>
            <section className="info-card">
              <h2>{structure.transport}</h2>
              <p>{facts.transit}</p>
            </section>
          </>
        )}
        {topic === "arena-bicentenario" && (
          <section className="info-card" id="agenda">
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
          <section className="info-card" id="entrances">
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
              <section className="info-card">
                <h2>{structure.notice}</h2>
                <details>
                  <summary>{landmark.faq[0]}</summary>
                  <p>{landmark.faq[1]}</p>
                </details>
              </section>
            )}
            <section className="info-card">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {fieldNote && section.title === cityLabels.design && (
                <>
                  <h3>{fieldNoteLabel[locale]}</h3>
                  <p>{fieldNote}</p>
                </>
              )}
              {portrait && photo && "kind" in section && section.kind === "photo" && (
                <Image className="guide-photo-full" src={photo.src} alt={guide.title} width={photo.width} height={photo.height} sizes="(max-width: 420px) 85vw, 390px" />
              )}
              {section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}
            </section>
          </Fragment>
        ))}
        {landmark && (
          <section className="info-card">
            <h2>{structure.stay}</h2>
            <p>{lodgingAdvice(locale, landmark.station)}</p>
            <p><a href={lodgingDirectory}>{structure.officialLodging}</a></p>
          </section>
        )}
        <section className="info-card" id="visitor-reviews">
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
        <section className="info-card">
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
          <section className="info-card">
            <h2>{structure.address}</h2>
            <p>{address}</p>
            <p><a href={map}>{labels.map}</a></p>
            {directions && <p><a href={directions}>{adviceText.directions}</a></p>}
          </section>
        )}
        <section className="info-card">
          <h2>{labels.sources}</h2>
          <ul>
            {guide.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
