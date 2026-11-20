import { interfaceCopy } from "@/i18n/interface";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import { siteUrl } from "@/content/site-url";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = siteUrl.origin;

const homeMetadata = {
  es: {
    title: "Parque Bicentenario Quito: horarios, entradas y Metro",
    description: "Consulta el horario del Parque Bicentenario de Quito, los accesos y la llegada en Metro por El Labrador. Revisa también la agenda de Arena Bicentenario.",
  },
  en: {
    title: "Parque Bicentenario Quito: Visitor Guide and Directions",
    description: "Plan a visit to Quito’s former airport park. Find park entrances, directions from El Labrador and information on Arena Bicentenario concerts.",
  },
  zh: {
    title: "基多二百週年公園｜遊覽指南、地鐵交通與活動",
    description: "規劃基多二百週年公園之旅，檢視舊機場園區入口、El Labrador 地鐵交通與 Arena Bicentenario 活動指南。",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "es" && locale !== "zh") notFound();
  const { title, description } = homeMetadata[locale];
  const copy = interfaceCopy[locale];
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${copy.park}`,
    },
    description,
    authors: [{ name: copy.title }],
    creator: copy.title,
    publisher: copy.title,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === 'es' ? 'es_EC' : locale === 'zh' ? 'zh_TW' : 'en_US',
      alternateLocale: ["en_US", "es_EC", "zh_TW"].filter(l => !l.startsWith(locale)),
      url: `${baseUrl}/${locale}`,
      title,
      description,
      siteName: copy.title,
      images: [
        {
          url: "/gallery/parque-bicentenario (1).jpg",
          width: 1200,
          height: 630,
          alt: copy.photo,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/gallery/parque-bicentenario (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en": "/en",
        "es": "/es",
        "zh": "/zh",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale === "zh" ? "zh-Hant" : locale} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <div className={`${cormorant.variable} ${dmSans.variable}`}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
