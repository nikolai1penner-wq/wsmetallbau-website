import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Foto } from "@/components/Foto";
import { LeistungGrid, type Karte } from "@/components/LeistungGrid";
import { bilderFuer } from "@/lib/bilder";
import { publishedReferenzen } from "@/lib/referenzen";
import { site } from "@/lib/site";

const leistungen: Karte[] = [
  { tag: "Objektbau", title: "Sonderkonstruktionen", text: "Stahl-, Edelstahl- und Glaskonstruktionen nach Ihren Plänen, von der Werkplanung bis zur Montage.", href: "/objektbau/sonderkonstruktionen/" },
  { tag: "Objektbau · Privat", title: "Treppen", text: "Spindeltreppen, Innen- und Außentreppen aus Stahl, verzinkt oder pulverbeschichtet.", href: "/privat/treppen/", bildKey: "treppen" },
  { tag: "Objektbau · Privat", title: "Balkone", text: "Vorstellbalkone und Balkonanlagen, selbsttragend und ohne Eingriff in die Dämmung.", href: "/objektbau/balkonanlagen/", bildKey: "balkone" },
  { tag: "Objektbau · Privat", title: "Geländer und Glas", text: "Edelstahl-, Stahl- und Ganzglasgeländer für Balkon, Treppe und französische Fenster.", href: "/privat/gelaender/", bildKey: "gelaender" },
  { tag: "Privat · Gewerbe", title: "Lofttüren und Trennwände", text: "Handgefertigt nach Maß, als Dreh- oder Schiebetür, Trennwand oder Festelement.", href: "/privat/loft-tueren-trennwaende/", bildKey: "loft-tueren-trennwaende" },
  { tag: "Objektbau", title: "Stahlbau und Industrie", text: "Bühnen, Podeste, Überdachungen und Stahlkonstruktionen für Gewerbe und Industrie.", href: "/objektbau/stahlbau-industrie/" },
];

const schritte = [
  { title: "Beratung und Aufmaß", text: "Wir klären Anforderungen, Normen und Budget und nehmen vor Ort Maß." },
  { title: "Konstruktion", text: "Werkplanung, Statik mit Partnern und Freigabe der Details." },
  { title: "Fertigung und Montage", text: "Gefertigt in der eigenen Werkstatt, montiert von unserem Team." },
  { title: "Übergabe", text: "Abnahme, Dokumentation und Ansprechpartner auch nach dem Projekt." },
];

export default function Home() {
  const kennzahlen = [
    ...site.facts,
    site.certification
      ? { value: site.certification.norm, label: `Ausführungsklasse ${site.certification.klasse}` }
      : { value: "1 Hand", label: "Fertigung und Montage" },
  ];
  const referenz = publishedReferenzen[0];
  return (
    <>
      <section className="dark pt-10 sm:pt-14">
        <div className="wrap flex flex-wrap items-end gap-12">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6 pb-4 sm:pb-16">
            <span className="eyebrow text-on-dark-muted">Metallbau · Stahlbau · Sonderkonstruktionen</span>
            <h1 className="h1">Metallbau aus Herford, vom Geländer bis zur Sonder&shy;konstruktion</h1>
            <p className="lede text-on-dark-2">
              Eigene Fertigung und eigene Montage für Objektbau und private Bauherren in Ostwestfalen-Lippe und 100 km Umkreis.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/objektbau/" className="btn">Für Architekten &amp; Bauträger</Link>
              <Link href="/privat/" className="btn-ghost-light">Für Bauherren &amp; Privat</Link>
            </div>
          </div>
          <Foto
            bild={bilderFuer("treppen")[0] ?? bilderFuer("loft-tueren-trennwaende")[0]}
            label="Sonderkonstruktion oder Treppe in Montage"
            priority
            className="-mx-4 h-[260px] min-w-0 flex-[1_1_520px] sm:mx-0 sm:h-[520px]"
            sizes="(min-width: 1024px) 620px, 100vw"
          />
        </div>
      </section>

      <section aria-label="Kennzahlen" className="rule border-b-[1.5px] border-b-anthracite bg-sheet">
        <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
          {kennzahlen.map((k, i) => (
            <div key={k.label} className={`flex flex-col-reverse gap-0.5 border-line py-4 sm:py-6 ${i % 2 ? "border-l pl-4 sm:pl-6" : "pr-4"} ${i < 2 ? "border-b lg:border-b-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}>
              <dt className="text-[13px] text-muted sm:text-[15px]">{k.label}</dt>
              <dd className="font-display text-[26px] leading-none font-bold sm:text-[32px]">{k.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Link href="/objektbau/" className="dark flex flex-col gap-4 p-8 no-underline sm:p-10">
            <span className="eyebrow text-accent-light">Objektbau</span>
            <h2 className="h2-sm">Für Architekten, Planer und Bauträger</h2>
            <ul className="grid gap-1 pl-5 text-on-dark-2 [list-style:square]">
              <li>Balkonanlagen, Treppen und Geländer in Serie</li>
              <li>Sonderkonstruktionen in Stahl, Edelstahl und Glas</li>
              <li>Planungsunterlagen und Ausschreibungstexte</li>
              <li>Rückmeldung zu Ihrer Projektanfrage in 24 Stunden</li>
            </ul>
            <span className="mt-2 font-semibold">Zum Objektbau →</span>
          </Link>
          <Link href="/privat/" className="flex flex-col gap-4 border-[1.5px] border-anthracite bg-sheet p-8 text-ink no-underline sm:p-10">
            <span className="eyebrow text-privat">Privat</span>
            <h2 className="h2-sm">Für Bauherren und Hausbesitzer</h2>
            <ul className="grid gap-1 pl-5 text-ink-2 [list-style:square]">
              <li>Lofttüren und Trennwände nach Maß</li>
              <li>Geländer aus Edelstahl, Stahl und Ganzglas</li>
              <li>Spindeltreppen, Innentreppen, Vorstellbalkone</li>
              <li>Kostenfreie Einschätzung mit Ihren Fotos</li>
            </ul>
            <span className="mt-2 font-semibold text-link">Zu den Privatleistungen →</span>
          </Link>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="wrap grid gap-8">
          <div className="rule flex flex-wrap items-end justify-between gap-4 pt-7">
            <h2 className="h2">Leistungen</h2>
            <p className="max-w-[520px] text-muted">Jede Leistung gibt es mit technischen Angaben für den Objektbau und mit Galerie und Anfrage für private Bauherren.</p>
          </div>
          <LeistungGrid items={leistungen} />
        </div>
      </section>

      {referenz && (
        <section className="band section">
          <div className="wrap flex flex-wrap gap-12">
            <Foto label={referenz.title} className="min-h-[300px] min-w-0 flex-[1_1_560px] sm:min-h-[460px]" sizes="(min-width: 1024px) 680px, 100vw" />
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
              <span className="eyebrow text-muted">Referenz · {referenz.ort}</span>
              <h2 className="h2-sm">{referenz.title}</h2>
              <p className="text-ink-2">{referenz.herausforderung}</p>
              <Link href={`/referenzen/${referenz.slug}/`} className="link">Projekt ansehen →</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap flex flex-wrap gap-12">
          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-4">
            <span className="eyebrow text-muted">Planer-Service</span>
            <h2 className="h2">Unterlagen für Ihre Planung</h2>
            <p className="max-w-[480px] text-ink-2">Standarddetails, Ausschreibungstexte und Datenblätter für Architekten und Fachplaner. Auf Wunsch beraten wir schon in der Entwurfsplanung.</p>
            <Link href="/planer-service/" className="btn-dark self-start">Zum Planer-Service</Link>
          </div>
          <ul className="rule min-w-0 flex-[1_1_520px]">
            {[
              ["DWG", "Standarddetails Vorstellbalkon"],
              ["PDF", "Ausschreibungstext Stahltreppe"],
              ["PDF", "Ausschreibungstext Glasgeländer"],
              ["PDF", "Datenblatt Ganzglasgeländer"],
            ].map(([typ, name]) => (
              <li key={name} className="flex min-h-11 items-center gap-5 border-b border-line py-4">
                <span className="min-w-11 bg-anthracite px-2 py-1 text-center font-mono text-xs text-on-dark">{typ}</span>
                <span className="flex-1 font-medium">{name}</span>
                <span className="label">in Vorbereitung</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dark section">
        <div className="wrap grid gap-10">
          <h2 className="h2">So läuft Ihr Projekt</h2>
          <ol className="grid border-t-[1.5px] border-line-strong sm:grid-cols-2 lg:grid-cols-4">
            {schritte.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-2.5 pt-6 pr-6 pb-2">
                <span className="font-display text-[40px] leading-none font-bold text-accent-light">{i + 1}</span>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-[15px] text-on-dark-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap flex flex-wrap items-center gap-14">
          <Umkreis />
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
            <span className="eyebrow text-muted">Einsatzgebiet</span>
            <h2 className="h2">Herford, OWL und 100 km Umkreis</h2>
            <div className="grid gap-3.5 text-base">
              <p><strong>Bis 30 km:</strong> {site.serviceArea.kern.join(", ")}</p>
              <p><strong>Bis 70 km:</strong> {site.serviceArea.erweitert.join(", ")}</p>
              <p><strong>Bis 100 km:</strong> {site.serviceArea.rand.join(", ")}, für Objektprojekte</p>
            </div>
            <Link href="/einsatzgebiet/" className="link">Mehr zum Einsatzgebiet →</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Umkreis() {
  return (
    <div aria-hidden="true" className="relative hidden size-[420px] flex-none md:block">
      <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-line-strong" />
      <div className="absolute inset-[63px] rounded-full border-[1.5px] border-dashed border-line-strong" />
      <div className="absolute inset-[147px] rounded-full border-[1.5px] border-anthracite bg-sheet" />
      <div className="absolute top-[202px] left-[202px] size-4 rounded-full border-2 border-anthracite bg-accent" />
      <span className="absolute top-[196px] left-[226px] text-[15px] font-semibold">Herford</span>
      <span className="absolute top-[152px] left-1/2 -translate-x-1/2 font-mono text-[11px] text-muted">30 km</span>
      <span className="absolute top-[68px] left-1/2 -translate-x-1/2 font-mono text-[11px] text-muted">70 km</span>
      <span className="absolute top-1.5 left-1/2 -translate-x-1/2 font-mono text-[11px] text-muted">100 km</span>
    </div>
  );
}
