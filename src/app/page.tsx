import Link from "next/link";
import { LeistungGrid } from "@/components/LeistungGrid";
import { objektbau } from "@/lib/leistungen";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="wrap grid gap-6 pt-14 pb-10">
        <span className="label">Metallbau · Stahlbau · Sonderkonstruktionen · Herford</span>
        <h1 className="h1">
          Metallbau aus Herford für <span className="hl">anspruchsvolle Projekte</span>
        </h1>
        <p className="lede">
          Treppen, Balkonanlagen, Geländer und Sonderkonstruktionen aus Stahl und Edelstahl. Geplant, gefertigt und montiert
          für Architekten, Bauträger und Bauherren in Ostwestfalen-Lippe und 100 km Umkreis.
        </p>
        <dl className="grid grid-cols-3 border-[1.5px] border-ink bg-sheet">
          {site.facts.map((f) => (
            <div key={f.label} className="border-r border-line p-3 last:border-r-0 sm:p-4">
              <dt className="label">{f.label}</dt>
              <dd className="font-display text-2xl font-extrabold sm:text-3xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-label="Einstieg nach Zielgruppe" className="wrap grid gap-4 md:grid-cols-2">
        <Link href="/objektbau/" className="panel border-t-4 border-t-steel p-6 hover:border-ink sm:p-8">
          <span className="tag objektbau w-fit">Objektbau</span>
          <h2 className="h2">Für Planer &amp; Bauträger</h2>
          <p className="text-muted">Sonderkonstruktionen, Balkonanlagen und Treppen in Serie. Mit Werkplanung, Detaillösungen und Planungsunterlagen.</p>
          <span className="link mt-2">Zum Objektbau</span>
        </Link>
        <Link href="/privat/" className="panel border-t-4 border-t-[var(--b2c)] p-6 hover:border-ink sm:p-8">
          <span className="tag privat w-fit">Privat</span>
          <h2 className="h2">Für Bauherren &amp; Privatkunden</h2>
          <p className="text-muted">Geländer, Balkone, Treppen, Loft-Türen und Vordächer nach Maß. Von Aufmaß bis Montage aus einer Hand.</p>
          <span className="link mt-2">Zu den Leistungen für Ihr Haus</span>
        </Link>
      </section>

      <section className="wrap mt-20 grid gap-6">
        <h2 className="h2">Leistungen im Objektbau</h2>
        <LeistungGrid items={objektbau} base="/objektbau/" />
      </section>

      <section className="wrap mt-20 grid gap-6">
        <h2 className="h2">So läuft ein Projekt</h2>
        <ol className="grid border border-line bg-sheet sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Anfrage", "Pläne, Fotos oder Skizze schicken"],
            ["Beratung & Aufmaß", "Machbarkeit, Details, Kostenrahmen"],
            ["Fertigung", "im eigenen Betrieb in Herford"],
            ["Montage", "durch unsere eigenen Teams"],
          ].map(([t, d], i) => (
            <li key={t} className="grid gap-1 border-b border-line p-5 last:border-b-0 sm:border-r lg:border-b-0">
              <span className="label">Schritt {i + 1}</span>
              <span className="font-semibold">{t}</span>
              <span className="text-[0.95rem] text-muted">{d}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
