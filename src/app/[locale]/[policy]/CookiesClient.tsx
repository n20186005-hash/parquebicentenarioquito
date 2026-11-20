"use client";

import Link from "next/link";
import { useState } from "react";

import type { Locale } from "@/i18n/translations";
import { legal } from "@/i18n/legal";

const categories = ["necessary", "analytics", "preferences", "marketing"] as const;

export default function CookiesClient({ locale }: { locale: Locale }) {
  const copy = legal[locale];
  const t = copy.cookie;
  const [cookieSettings, setCookieSettings] = useState(() =>
    categories.map((id, index) => ({
      id, name: t.names[index], description: t.descriptions[index], provider: t.providers[index],
      active: id === "necessary" || id === "preferences", alwaysActive: id === "necessary",
    })),
  );

  const handleToggle = (id: string) => {
    setCookieSettings((prev) =>
      prev.map((cookie) =>
        cookie.id === id && !cookie.alwaysActive
          ? { ...cookie, active: !cookie.active }
          : cookie
      )
    );
  };

  const handleSave = () => {
    alert(t.saved);
  };

  const handleRejectAll = () => {
    setCookieSettings((prev) =>
      prev.map((cookie) =>
        cookie.alwaysActive ? cookie : { ...cookie, active: false }
      )
    );
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-cream)", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "3rem", borderRadius: "2px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
          {copy.titles.cookies}
        </h1>
        <p style={{ color: "var(--color-stone)", marginBottom: "2rem" }}>
          {copy.updated}
        </p>

        <section style={{ marginBottom: "2rem" }}>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", marginBottom: "1.5rem" }}>
            {t.intro}
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          {cookieSettings.map((cookie) => (
            <div
              key={cookie.id}
              style={{
                padding: "1.5rem",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "2px",
                marginBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-deep)", margin: 0 }}>
                  {cookie.name}
                </h3>
                <label style={{ display: "flex", alignItems: "center", cursor: cookie.alwaysActive ? "not-allowed" : "pointer" }}>
                  <input
                    type="checkbox"
                    aria-label={cookie.name}
                    checked={cookie.active}
                    onChange={() => handleToggle(cookie.id)}
                    disabled={cookie.alwaysActive}
                    style={{ marginRight: "0.5rem" }}
                  />
                  <span style={{ fontSize: "0.9rem", color: cookie.active ? "var(--color-teal)" : "var(--color-stone)" }}>
                    {cookie.active ? t.active : t.inactive}
                  </span>
                </label>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "var(--color-earth-soft)", marginBottom: "0.5rem" }}>
                {cookie.description}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--color-stone)", margin: 0 }}>
                {t.provider} · {cookie.provider}
              </p>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            {t.consent}
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)" }}>
            {t.detail}
          </p>
        </section>

        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
          <button
            onClick={handleSave}
            style={{
              padding: "0.75rem 2rem",
              background: "var(--color-teal)",
              color: "#fff",
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            {t.save}
          </button>
          <button
            onClick={handleRejectAll}
            style={{
              padding: "0.75rem 2rem",
              background: "transparent",
              color: "var(--color-teal)",
              border: "1.5px solid var(--color-teal)",
              borderRadius: "2px",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            {t.reject}
          </button>
        </div>

        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <Link href={`/${locale}`} style={{ color: "var(--color-teal)", textDecoration: "none" }}>
            ← {copy.back}
          </Link>
        </div>
      </div>
    </div>
  );
}
