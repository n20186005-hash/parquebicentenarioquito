import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" }
  ],
};

export const metadata: Metadata = {
  title: "Parque Bicentenario — Quito, Ecuador",
  description: "A travel guide to Parque Bicentenario in Quito, Ecuador. Explore the largest urban ecological park built on the former site of Mariscal Sucre International Airport.",
  metadataBase: new URL(`https://${process.env.CURRENT_SITE_DOMAIN || 'parquebicentenarioquito.com'}`),
  alternates: {
    canonical: "/en",
    languages: {
      "en": "/en",
      "es": "/es",
      "zh": "/zh",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_EC", "zh_CN"],
    title: "Parque Bicentenario — Quito, Ecuador",
    description: "A travel guide to Parque Bicentenario in Quito, Ecuador.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}