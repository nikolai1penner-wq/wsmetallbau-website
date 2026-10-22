import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileActions } from "@/components/MobileActions";
import { localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

// Barlow: Überschriften in Barlow Semi Condensed fett, Fließtext in Barlow (Nikolai, 22.10.)
const display = Barlow_Semi_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700"] });
const body = Barlow({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Metallbau Herford | Treppen, Balkone, Geländer | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Metallbau aus Herford für ganz OWL: Stahltreppen, Vorstellbalkone, Geländer, Lofttüren und Sonderkonstruktionen. 750+ Projekte. Jetzt anfragen.",
  openGraph: { locale: "de_DE", siteName: site.name, type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
      <body className="flex min-h-screen flex-col pb-[76px] md:pb-0">
        <a href="#inhalt" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-accent focus:p-3">Zum Inhalt</a>
        <Header />
        <main id="inhalt" className="flex-1">{children}</main>
        <Footer />
        <MobileActions />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
