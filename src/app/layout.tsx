import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const display = Archivo({ variable: "--font-display", subsets: ["latin"], weight: ["700", "800"] });
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
      <body className="flex min-h-screen flex-col">
        <a href="#inhalt" className="sr-only focus:not-sr-only focus:absolute focus:p-3">Zum Inhalt</a>
        <Header />
        <main id="inhalt" className="flex-1">{children}</main>
        <Footer />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
