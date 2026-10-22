import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { LeistungGrid } from "@/components/LeistungGrid";
import { privat } from "@/lib/leistungen";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Geländer, Balkone & Treppen nach Maß in Herford",
  description:
    "Metallbau für Ihr Haus: Geländer, Balkone, Treppen, Loft-Türen, Vordächer, Tore und Carports. Aufmaß, Fertigung und Montage in Herford, Bielefeld und Umgebung.",
  path: "/privat/",
});

export default function Page() {
  return (
    <div className="wrap pt-8">
      <Breadcrumbs items={[{ name: "Privat", path: "/privat/" }]} />
      <span className="tag privat">Für Bauherren</span>
      <h1 className="h1 mt-4">Metallbau für Ihr Haus</h1>
      <p className="lede mt-5">
        Geländer, Balkone, Treppen und mehr, nach Maß gefertigt in Herford und montiert von unseren eigenen Teams.
      </p>
      <section className="mt-12">
        <LeistungGrid items={privat} base="/privat/" />
      </section>
      <p className="mt-8">
        Was kostet das? <Link href="/privat/ratgeber/" className="link">Kosten und Ablauf im Ratgeber</Link>
      </p>
      <CtaBand segment="privat" />
    </div>
  );
}
