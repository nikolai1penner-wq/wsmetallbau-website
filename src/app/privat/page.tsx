import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { karteAus, LeistungGrid } from "@/components/LeistungGrid";
import { PrivatSubnav } from "@/components/PrivatSubnav";
import { privat } from "@/lib/leistungen";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Lofttüren, Geländer, Treppen & Balkone nach Maß in Herford",
  description:
    "Metallbau für Ihr Haus: Lofttüren, Geländer, Treppen, Vorstellbalkone, Vordächer, Fenstergitter, Tore und Carports. Aufmaß, Fertigung und Montage in Herford, Bielefeld und OWL.",
  path: "/privat/",
});

export default function Page() {
  return (
    <>
      <PrivatSubnav />
      <section className="pt-10 pb-12 sm:pt-14">
        <div className="wrap grid gap-6">
          <Breadcrumbs items={[{ name: "Privat", path: "/privat/" }]} />
          <span className="eyebrow text-privat">Für Bauherren und Hausbesitzer</span>
          <h1 className="h1 max-w-[900px]">Metallbau nach Maß für Ihr Haus</h1>
          <p className="lede text-ink-2">
            Lofttüren, Geländer, Treppen und Balkone, gefertigt in unserer Werkstatt in Herford und montiert von unseren eigenen Teams. Fotos und ungefähre Maße genügen für eine erste Einschätzung.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/anfrage/#privat" className="btn-dark">Kostenloses Angebot</Link>
            <Link href="/privat/ratgeber/" className="link self-center">Kosten und Ablauf im Ratgeber</Link>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="wrap">
          <LeistungGrid items={privat.map((l) => karteAus(l, "/privat/"))} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
