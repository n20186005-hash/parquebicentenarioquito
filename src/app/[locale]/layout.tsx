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
    title: "Parque Bicentenario Quito: cómo llegar y qué visitar",
    description: "Planifica tu visita al Parque Bicentenario de Quito en el antiguo aeropuerto. Consulta accesos, Metro El Labrador y la guía de conciertos de la Arena.",
  },
  en: {
    title: "Parque Bicentenario Quito: Visitor Guide and Directions",
    description: "Plan a visit to Quito’s former airport park. Find park entrances, directions from El Labrador and information on Arena Bicentenario concerts.",
  },
  zh: {
    title: "基多二百周年公園｜遊覽指南、地鐵交通與活動",
    description: "規劃基多二百周年公園之旅，查看舊機場園區入口、El Labrador 地鐵交通與 Arena Bicentenario 活動指南。",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = locale === "es" || locale === "zh" ? homeMetadata[locale] : homeMetadata.en;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: "%s | Parque Bicentenario",
    },
    description,
    keywords: [
      "Parque Bicentenario",
      "Bicentennial Park Quito",
      "Quito tourism",
      " urban ecological park Ecuador",
      " former airport park",
      " Quito parks",
      " Parque Bicentenario Quito Ecuador",
      " Quito metro",
      " EPMMOP",
    ],
    authors: [{ name: "Parque Bicentenario Travel Guide" }],
    creator: "Parque Bicentenario Travel Guide",
    publisher: "Parque Bicentenario Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === 'es' ? 'es_EC' : locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: ["en_US", "es_EC", "zh_CN"].filter(l => !l.startsWith(locale)),
      url: `${baseUrl}/${locale}`,
      title,
      description,
      siteName: "Parque Bicentenario Travel Guide",
      images: [
        {
          url: "/gallery/parque-bicentenario (1).jpg",
          width: 1200,
          height: 630,
          alt: "Parque Bicentenario - Quito, Ecuador",
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
    <div lang={locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      {children}
    </div>
  );
}
