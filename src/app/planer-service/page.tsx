import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Planer-Service: CAD-Details & Ausschreibungstexte",
  description: "Standarddetails als DWG/DXF, Ausschreibungstexte und Datenblätter für Treppen, Geländer und Balkone. Für Architekten und Fachplaner.",
  path: "/planer-service/",
  noindex: true,
});

export default function Page() {
  return (
    <div className="wrap pt-8">
      <Breadcrumbs items={[{ name: "Planer-Service", path: "/planer-service/" }]} />
      <h1 className="h1">Planer-Service</h1>
      <p className="lede mt-5">Standarddetails als DWG/DXF und PDF, Ausschreibungstexte für Treppen, Geländer und Balkone sowie technische Datenblätter. Der Downloadbereich ist in Vorbereitung.</p>
    </div>
  );
}
