import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Ratgeber Metallbau: Kosten, Ablauf & Pflege",
  description: "Was kostet ein Geländer pro Meter, ein Balkonanbau oder eine Stahltreppe? Preisfaktoren, Ablauf und Genehmigung verständlich erklärt.",
  path: "/privat/ratgeber/",
  noindex: true,
});

export default function Page() {
  return (
    <div className="wrap pt-8">
      <Breadcrumbs items={[{ name: "Privat", path: "/privat/" }, { name: "Ratgeber", path: "/privat/ratgeber/" }]} />
      <h1 className="h1">Ratgeber</h1>
      <p className="lede mt-5">Hier entstehen Artikel zu Kosten, Ablauf, Pflege und Genehmigung. Erste Themen: Geländer-Kosten pro Meter, Balkon anbauen, Stahltreppe Kosten.</p>
    </div>
  );
}
