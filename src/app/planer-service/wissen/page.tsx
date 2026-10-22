import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Fachwissen Metallbau: Normen, Korrosionsschutz, Details",
  description: "Fachartikel für die Planungspraxis: EN 1090, ISO 12944, DIN 18008, DIN 18065 und Geländerhöhen nach Landesbauordnung.",
  path: "/planer-service/wissen/",
  noindex: true,
});

export default function Page() {
  return (
    <div className="wrap pt-8">
      <Breadcrumbs items={[{ name: "Planer-Service", path: "/planer-service/" }, { name: "Wissen", path: "/planer-service/wissen/" }]} />
      <h1 className="h1">Fachwissen</h1>
      <p className="lede mt-5">Kurze, präzise Artikel zu Fragen aus der Planungspraxis. Geplant: EN 1090 und Ausführungsklassen, Korrosionsschutz nach ISO 12944, absturzsichernde Verglasung nach DIN 18008, Treppen nach DIN 18065.</p>
    </div>
  );
}
