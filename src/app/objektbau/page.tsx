import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { LeistungGrid } from "@/components/LeistungGrid";
import { objektbau } from "@/lib/leistungen";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Metallbau für Architekten, Planer & Bauträger in OWL",
  description:
    "Sonderkonstruktionen, Treppen, Balkonanlagen und Geländer für Objekt- und Wohnungsbau. Werkplanung, Fertigung und Montage aus Herford für Projekte in OWL und 100 km Umkreis.",
  path: "/objektbau/",
});

export default function Page() {
  return (
    <div className="wrap pt-8">
      <Breadcrumbs items={[{ name: "Objektbau", path: "/objektbau/" }]} />
      <span className="tag objektbau">Für Planer & Bauträger</span>
      <h1 className="h1 mt-4">Metallbau für den Objektbau</h1>
      <p className="lede mt-5">
        Wir arbeiten Architekten, Fachplanern und Bauträgern zu: von der frühen Detailabstimmung bis zur termingerechten
        Montage von Serienleistungen wie Balkonanlagen und Treppen.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {site.certification ? (
          <span className="tag objektbau">
            Zertifiziert nach {site.certification.norm} {site.certification.klasse}
          </span>
        ) : null}
        <Link href="/planer-service/" className="link">Planungsunterlagen &amp; Ausschreibungstexte</Link>
      </div>
      <section className="mt-12">
        <LeistungGrid items={objektbau} base="/objektbau/" />
      </section>
      <CtaBand segment="objektbau" />
    </div>
  );
}
