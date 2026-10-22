import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Über uns: Metallbaubetrieb in Herford",
  description: `${site.name}: Fertigung, Montageteams und Zertifizierung. Über 20 Jahre Metallbau aus Herford für Projekte in OWL.`,
  path: "/unternehmen/",
});

export default function Page() {
  return (
    <div className="wrap pt-10 pb-20">
      <Breadcrumbs items={[{ name: "Unternehmen", path: "/unternehmen/" }]} />
      <h1 className="h1 mt-6">Unternehmen</h1>
      <p className="lede mt-5 text-ink-2">
        Seit über 20 Jahren planen, fertigen und montieren wir Metallbau aus Herford. Über 750 Projekte für Bauträger,
        Gewerbe und Privatkunden.
      </p>
      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="grid content-start gap-2 bg-sheet p-6">
          <h2 className="h3">Fertigung</h2>
          {/* TODO: Hallenfläche, Maschinenpark, Kranlasten */}
          <p className="text-muted">Angaben zu Halle, Maschinen und Kapazität folgen.</p>
        </div>
        <div className="grid content-start gap-2 bg-sheet p-6">
          <h2 className="h3">Zertifizierung</h2>
          <p className="text-muted">
            {site.certification
              ? `Zertifiziert nach ${site.certification.norm}, Ausführungsklasse ${site.certification.klasse}.`
              : "Angaben zur Zertifizierung folgen."}
          </p>
        </div>
        <div className="grid content-start gap-2 bg-sheet p-6">
          <h2 className="h3">Ansprechpartner</h2>
          <p className="text-muted">{site.owners.join(" und ")}</p>
        </div>
      </section>
    </div>
  );
}
