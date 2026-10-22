import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Einsatzgebiet: Metallbau in Herford, Bielefeld & OWL",
  description: "Wir arbeiten in Herford und 100 km Umkreis: Bielefeld, Gütersloh, Minden, Detmold, Osnabrück, Paderborn und Hannover.",
  path: "/einsatzgebiet/",
});

// Stadtseiten erst anlegen, wenn es echte Referenzen aus der Stadt gibt (keine Doorway-Seiten).
export default function Page() {
  const zonen = [
    { title: "Kerngebiet bis 30 km", orte: site.serviceArea.kern },
    { title: "30 bis 70 km", orte: site.serviceArea.erweitert },
    { title: "70 bis 100 km, vor allem Objektbau", orte: site.serviceArea.rand },
  ];
  return (
    <div className="wrap pt-10 pb-20">
      <Breadcrumbs items={[{ name: "Einsatzgebiet", path: "/einsatzgebiet/" }]} />
      <h1 className="h1 mt-6">Einsatzgebiet</h1>
      <p className="lede mt-5 text-ink-2">Von Herford aus arbeiten wir in ganz Ostwestfalen-Lippe und bis zu 100 km darüber hinaus.</p>
      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {zonen.map((z) => (
          <div key={z.title} className="grid content-start gap-2 bg-sheet p-6">
            <h2 className="h3">{z.title}</h2>
            <p className="text-muted">{z.orte.join(", ")}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
