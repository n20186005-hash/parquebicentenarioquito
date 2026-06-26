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

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "parquebicentenarioquito.com"}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Parque Bicentenario — Quito, Ecuador",
      template: "%s | Parque Bicentenario",
    },
    description:
      "A travel guide to Parque Bicentenario in Quito, Ecuador. Explore the largest urban ecological park built on the former site of Mariscal Sucre International Airport.",
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
      title: "Parque Bicentenario — Quito, Ecuador",
      description:
        "A travel guide to Parque Bicentenario in Quito, Ecuador. Explore the largest urban ecological park built on the former site of Mariscal Sucre International Airport.",
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
      title: "Parque Bicentenario — Quito, Ecuador",
      description:
        "A travel guide to Parque Bicentenario in Quito, Ecuador.",
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
    <html lang={locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
