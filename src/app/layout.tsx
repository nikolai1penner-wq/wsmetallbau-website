import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileActions } from "@/components/MobileActions";
import { localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

// Archivo als variable Schrift mit Breitenachse, damit die schmalen Versalien (font-stretch 70–85 %) echt sind
const display = Archivo({ variable: "--font-display", subsets: ["latin"], axes: ["wdth"] });
const body = IBM_Plex_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Metallbau Herford – ${site.name}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Metallbau und Sonderkonstruktionen aus Herford: Treppen, Balkone, Geländer und Stahlbau für Architekten, Bauträger und Privatkunden in OWL und 100 km Umkreis.",
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
