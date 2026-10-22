import Link from "next/link";
import type { Leistung } from "@/lib/leistungen";
import { objektbau } from "@/lib/leistungen";
import { serviceJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { AnfrageForm } from "./AnfrageForm";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { LeistungRows } from "./LeistungGrid";

export function ObjektbauDetail({ leistung }: { leistung: Leistung }) {
  const path = `/objektbau/${leistung.slug}/`;
  return (
    <>
      <section className="dark pt-10 pb-16 sm:pb-20">
        <div className="wrap grid gap-8">
          <Breadcrumbs onDark items={[{ name: "Objektbau", path: "/objektbau/" }, { name: leistung.short, path }]} />
          <div className="flex flex-wrap items-start gap-14">
            <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
              <h1 className="h1">{leistung.title}</h1>
              <p className="lede text-on-dark-2">{leistung.intro}</p>
              <ul className="flex flex-wrap gap-2">
                {leistung.spec?.split(" · ").map((s) => <li key={s} className="chip">{s}</li>)}
                {site.certification && <li className="chip">{site.certification.norm} {site.certification.klasse}</li>}
              </ul>
            </div>
            <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-4 bg-sheet p-6 text-ink sm:p-8">
              <span className="label">Projektanfrage</span>
              <h2 className="font-display text-2xl leading-tight font-extrabold [font-stretch:80%]">Rückmeldung innerhalb von 24 Stunden</h2>
              <AnfrageForm variante="projekt-kurz" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid gap-8 md:grid-cols-2">
          <div className="grid content-start gap-4">
            <h2 className="h2-sm rule pt-6">Leistungsumfang</h2>
            <ul className="grid gap-2 pl-5 [list-style:square]">
              {leistung.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div className="grid content-start gap-4 bg-sheet p-6">
            <span className="label">In Vorbereitung</span>
            <p className="text-ink-2">Referenzen mit technischen Daten, Standarddetails zum Download und Angaben zu Normen und Ausführungsklasse folgen.</p>
            {leistung.counterpart && (
              <p>Für Ihr eigenes Haus? <Link href={leistung.counterpart} className="link">Zur Seite für Privatkunden</Link></p>
            )}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="wrap grid gap-6">
          <h2 className="h2-sm">Weitere Leistungen im Objektbau</h2>
          <LeistungRows items={objektbau.filter((l) => l.slug !== leistung.slug)} base="/objektbau/" />
        </div>
      </section>
      <JsonLd data={serviceJsonLd({ name: leistung.title, description: leistung.description, path, audience: "Architekten, Planer, Bauträger" })} />
    </>
  );
}
