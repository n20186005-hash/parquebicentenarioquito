"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LangProvider, useLang } from "@/components/LangProvider";
import { useTheme } from "next-themes";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import galleryImagesData from "@/gallery-data.json";

const MAPS_URL = "https://maps.app.goo.gl/6nQEPT1UWiVMPZDH8";

const GOOGLE_REVIEWS = [
  { name: "Carlos Mendoza", avatar: "CM", rating: 5, date: "2024-05-15", text: "Un parque increíble. Lo que antes fue un aeropuerto ahora es un pulmón verde maravilloso para la ciudad. Ideal para correr, caminar en familia o pasear con mascotas." },
  { name: "Sarah Johnson", avatar: "SJ", rating: 5, date: "2024-04-20", text: "Amazing transformation! The former airport runways are now beautiful green spaces. Perfect for jogging, cycling, or a family picnic. A must-visit urban park in Quito." },
  { name: "张伟", avatar: "张", rating: 4, date: "2024-06-10", text: "非常漂亮的城市公园！以前是机场，现在变成了绿地。适合跑步、骑车、野餐。空气很好，视野开阔，是基多市民休闲的好去处。" },
  { name: "María González", avatar: "MG", rating: 5, date: "2024-03-28", text: "Hermoso parque para caminar, correr o andar en bicicleta. Tiene amplios espacios para mascotas y niños. Muy recomendado para un día de sol en Quito." },
  { name: "James Wilson", avatar: "JW", rating: 5, date: "2024-05-05", text: "What a fantastic urban park! The transformation from airport to green space is impressive. Great cycling paths, walking trails, and picnic areas. A true gem in Quito." },
  { name: "Isabella Rossi", avatar: "IR", rating: 4, date: "2024-04-15", text: "Bellissimo parco urbano! Ex aeroporto trasformato in spazio verde. Perfetto per correre, andare in bici o fare un picnic. Consigliato per una giornata all'aria aperta." },
];

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ width: "24px", height: "24px" }} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
      style={{
        background: "none",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        padding: "0.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {theme === "dark" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
          Parque Bicentenario
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#visiting">{t.nav.visiting}</a>
          <a href="#transportation">{t.nav.transportation}</a>
          <a href="#tips">{t.nav.tips}</a>
          <a href="#gallery">{t.gallery.title}</a>
          <a href="#reviews">{t.nav.reviews}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#location">{t.nav.location}</a>
        </div>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-texture" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tagline">{t.hero.tagline}</p>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <a href="#about" className="hero-cta">
          {t.hero.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="hero-meta">
          <div className="hero-rating">4.4</div>
          <div className="hero-stars">★★★★☆</div>
          <div className="hero-reviews">23,529 {t.rating.reviews} · {t.rating.source}</div>
        </div>
      </a>
    </section>
  );
}

function About() {
  const { t } = useLang();

  return (
    <section id="about" className="section">
      <ScrollReveal>
        <p className="section-label">01</p>
        <h2 className="section-title">{t.about.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ marginBottom: "3rem", padding: "1.5rem", background: "#f8f9fa", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1rem" }}>
            {t.about.highlights.title}
          </h3>
          <div className="highlights-grid">
            {t.about.highlights.items.map((item: string, i: number) => (
              <div className="highlight-item" key={i}>
                <div className="highlight-icon" />
                <span className="highlight-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>{t.about.p1}</p>
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>{t.about.p2}</p>
      </ScrollReveal>
      <ScrollReveal>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-deep)", marginTop: "4rem", marginBottom: "2rem" }}>
          {t.about.timeline.title}
        </h3>
        <div className="timeline" style={{ position: "relative", borderLeft: "2px solid rgba(0,0,0,0.1)", paddingLeft: "2rem", marginLeft: "1rem" }}>
          {t.about.timeline.events.map((evt: {period: string, description: string}, i: number) => (
            <div key={i} style={{ position: "relative", marginBottom: "2rem" }}>
              <div style={{ position: "absolute", left: "-2.45rem", top: "0.2rem", width: "14px", height: "14px", borderRadius: "50%", background: "var(--color-gold)", border: "3px solid #fff" }} />
              <strong style={{ display: "block", color: "var(--color-teal)", marginBottom: "0.25rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>{evt.period}</strong>
              <p style={{ fontSize: "0.95rem", color: "var(--color-earth-soft)", lineHeight: "1.6" }}>{evt.description}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ marginTop: "3rem", padding: "2rem", background: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid var(--color-teal)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.5rem" }}>
            {t.about.management.title}
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--color-stone)" }}>
            {t.about.management.content}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Visiting() {
  const { t } = useLang();
  const cards = [
    { title: t.visiting.hours.title, content: t.visiting.hours.content, note: t.visiting.hours.note },
    { title: t.visiting.price.title, content: t.visiting.price.content, note: t.visiting.price.note },
    { title: t.visiting.duration.title, content: t.visiting.duration.content, note: t.visiting.duration.note },
  ];

  return (
    <section id="visiting" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #eee8dd 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">02</p>
          <h2 className="section-title">{t.visiting.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="info-grid">
            {cards.map((c, i) => (
              <div className="info-card" key={i}>
                <div className="info-card-title">{c.title}</div>
                <div className="info-card-content">{c.content}</div>
                <div className="info-card-note">{c.note}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="bring-section" style={{ marginTop: "3rem" }}>
            <div className="bring-title">{t.visiting.animals.title}</div>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--color-earth-soft)", background: "rgba(255,255,255,0.5)", padding: "1.5rem", borderRadius: "8px", borderLeft: "4px solid var(--color-gold)" }}>
              {t.visiting.animals.content}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="bring-section">
            <div className="bring-title">{t.visiting.bring.title}</div>
            <ul className="bring-list">
              {t.visiting.bring.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Transportation() {
  const { t } = useLang();

  return (
    <section id="transportation" className="section">
      <ScrollReveal>
        <p className="section-label">03</p>
        <h2 className="section-title">{t.transportation.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          
          <div className="transport-card">
            <div className="transport-icon">✈️</div>
            <h3 className="transport-title">{t.transportation.airport.title}</h3>
            <p className="transport-content" style={{ marginBottom: "1rem" }}>{t.transportation.airport.content}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {t.transportation.airport.options.map((opt: { name: string; price: string; time: string; steps: string[] }, i: number) => (
                <div key={i} style={{ padding: "1.25rem", background: "rgba(0,0,0,0.03)", borderRadius: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <strong style={{ color: "var(--color-deep)", fontSize: "1.05rem" }}>{opt.name}</strong>
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                    <span style={{ color: "var(--color-gold)", fontWeight: 600 }}>{opt.price}</span>
                    <span>⏱️ {opt.time}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {opt.steps.map((step: string, j: number) => (
                      <div key={j} style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", lineHeight: "1.5" }}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div className="transport-card">
              <div className="transport-icon">🚇</div>
              <h3 className="transport-title">{t.transportation.city.title}</h3>
              <p className="transport-content" style={{ marginBottom: "1rem" }}>{t.transportation.city.content}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "rgba(0,0,0,0.02)", padding: "1.25rem", borderRadius: "6px" }}>
                {t.transportation.city.steps.map((step: string, i: number) => (
                  <div key={i} style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", lineHeight: "1.5" }}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="transport-card">
              <div className="transport-icon">🚗</div>
              <h3 className="transport-title">{t.transportation.selfDrive.title}</h3>
              <p className="transport-content" style={{ marginBottom: "1rem" }}>{t.transportation.selfDrive.content}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "rgba(0,0,0,0.02)", padding: "1.25rem", borderRadius: "6px" }}>
                {t.transportation.selfDrive.steps.map((step: string, i: number) => (
                  <div key={i} style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", lineHeight: "1.5" }}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

function Tips() {
  const { t } = useLang();
  return (
    <section id="tips" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">04</p>
          <h2 className="section-title">{t.tips.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <ul className="tips-list">
            {t.tips.items.map((tip: string, i: number) => (
              <li className="tip-item" key={i}>
                <span className="tip-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="tip-text">{tip}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryImages = galleryImagesData;

  useEffect(() => {
    if (lightboxIndex !== null && galleryImages.length > 0) {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [lightboxIndex, galleryImages.length]);

  return (
    <section id="gallery" className="section">
      <ScrollReveal>
        <p className="section-label">05</p>
        <h2 className="section-title">{t.gallery.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="gallery-grid">
          {galleryImages.map((src, i) => (
            <div className="gallery-item" key={i} onClick={() => setLightboxIndex(i)}>
              <img src={src} alt={`Parque Bicentenario ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {t.gallery.viewMore}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
      {lightboxIndex !== null && galleryImages.length > 0 && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>×</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length); }}>‹</button>
          <img src={galleryImages[lightboxIndex]} alt={`Parque Bicentenario ${lightboxIndex + 1}`} className="lightbox-img" />
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryImages.length); }}>›</button>
        </div>
      )}
    </section>
  );
}

function Reviews() {
  const { t } = useLang();

  return (
    <section id="reviews" className="section">
      <ScrollReveal>
        <p className="section-label">06</p>
        <h2 className="section-title">{t.reviews.title}</h2>
        <p className="section-subtitle">{t.reviews.subtitle}</p>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="reviews-grid">
          {GOOGLE_REVIEWS.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-info">
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
                <div className="review-rating">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-source">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#4285F4"/>
                </svg>
                Google
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {t.reviews.viewMore}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

function FAQ() {
  const { t } = useLang();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems = t.faq.items;

  return (
    <section id="faq" className="section">
      <div className="section">
        <ScrollReveal>
          <p className="section-label">07</p>
          <h2 className="section-title">{t.faq.title}</h2>
          <p className="section-subtitle">{t.faq.subtitle}</p>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="faq-list">
            {faqItems.map((item: { question: string; answer: string }, i: number) => (
              <div className={`faq-item ${expandedIndex === i ? "expanded" : ""}`} key={i}>
                <button
                  className="faq-question"
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  <span style={{ color: "var(--color-deep)", fontWeight: 600 }}>{item.question}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`faq-icon ${expandedIndex === i ? "rotated" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {expandedIndex === i && (
                  <div className="faq-answer">
                    {item.answer.split("\n\n").map((paragraph: string, j: number) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="section">
      <ScrollReveal>
        <p className="section-label">08</p>
        <h2 className="section-title">{t.location.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="location-section">
          <div className="location-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.443553378906!2d-78.494722!3d-0.139444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d591aa7f3e3b1b%3A0x7c5f8c8c8c8c8c8c!2sParque%20Bicentenario%20Quito!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="800"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Parque Bicentenario Location Map"
            />
          </div>
          <div className="location-info">
            <p className="location-address">{t.location.address}</p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="maps-link">
              {t.location.openMaps}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.linksTitle}</p>
        <div className="footer-links-grid">
          {t.footer.links.map((link: { name: string; url: string }, i: number) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <Link href="/privacy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          Privacy Policy
        </Link>
        <Link href="/terms" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          Terms of Service
        </Link>
        <Link href="/cookies" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          Cookie Settings
        </Link>
      </div>
      <p className="footer-text" style={{ marginTop: "2rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-gold)" }}>
        {t.footer.callToAction}
      </p>
      <p className="footer-text" style={{ marginTop: "1rem", whiteSpace: "pre-line" }}>{t.footer.text}</p>
    </footer>
  );
}

export default function Home(props: { params: Promise<{ locale: string }> }) {
  const params = React.use(props.params);
  return (
    <LangProvider initialLocale={params.locale as "en" | "zh" | "es"}>
      <Nav />
      <Hero />
      <About />
      <Visiting />
      <Transportation />
      <Tips />
      <Gallery />
      <Reviews />
      <FAQ />
      <Location />
      <Footer />
    </LangProvider>
  );
}
