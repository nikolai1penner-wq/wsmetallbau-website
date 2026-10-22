import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { publishedReferenzen } from "@/lib/referenzen";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Referenzen: Metallbau-Projekte aus OWL",
  description: "Ausgewählte Projekte: Treppen, Balkonanlagen, Geländer und Sonderkonstruktionen mit Ort, Material, Umfang und Bauzeit.",
  path: "/referenzen/",
});

export default function Page() {
  return (
    <div className="wrap pt-8">
      <Breadcrumbs items={[{ name: "Referenzen", path: "/referenzen/" }]} />
      <h1 className="h1">Referenzen</h1>
      <p className="lede mt-5">Jedes Projekt mit Ort, Leistung, Material und der Aufgabe, die wir gelöst haben.</p>
      {publishedReferenzen.length === 0 ? (
        <p className="panel mt-10 text-muted">Die ersten Fallstudien werden gerade aufbereitet.</p>
      ) : (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {publishedReferenzen.map((r) => (
            <li key={r.slug}>
              <Link href={`/referenzen/${r.slug}/`} className="panel h-full hover:border-ink">
                <span className="label">{r.ort} · {r.jahr}</span>
                <h2 className="h3">{r.title}</h2>
                <p className="text-muted">{r.leistung}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
