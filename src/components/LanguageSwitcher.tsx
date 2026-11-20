"use client";

import { interfaceCopy } from "@/i18n/interface";
import type { Locale } from "@/i18n/translations";

const LANG_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  es: "ES",
};

export function LanguageSwitcher({ locale, paths }: { locale: Locale; paths?: Record<Locale, string> }) {
  return (
    <div className="lang-switcher">
      {(["zh", "en", "es"] as Locale[]).map((l) => (
        <button
          key={l}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          onClick={() => {
            if (l !== locale) {
              window.location.href = `${paths?.[l] ?? `/${l}`}${window.location.hash}`;
            }
          }}
          aria-pressed={locale === l}
          aria-label={interfaceCopy[locale].language[l]}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
