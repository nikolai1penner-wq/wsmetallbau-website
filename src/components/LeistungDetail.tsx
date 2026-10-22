import Link from "next/link";
import { bilderFuer } from "@/lib/bilder";
import type { Leistung } from "@/lib/leistungen";
import { serviceJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { Galerie } from "./Galerie";
import { CtaBand } from "./CtaBand";
import { JsonLd } from "./JsonLd";

export function LeistungDetail({ leistung, segment }: { leistung: Leistung; segment: "objektbau" | "privat" }) {
  const hub = segment === "objektbau" ? { name: "Objektbau", path: "/objektbau/" } : { name: "Privat", path: "/privat/" };
  const path = `${hub.path}${leistung.slug}/`;
  return (
    <div className="wrap pt-8">
      <Breadcrumbs items={[hub, { name: leistung.title, path }]} />
      <span className={`tag ${segment}`}>{segment === "objektbau" ? "Für Planer & Bauträger" : "Für Bauherren"}</span>
      <h1 className="h1 mt-4">{leistung.title}</h1>
      <p className="lede mt-5">{leistung.intro}</p>
      <section className="mt-12 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="panel">
          <span className="label">Leistungen</span>
          <ul className="list-disc pl-5">
            {leistung.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <span className="label">In Arbeit</span>
          <p className="text-muted">
            {segment === "objektbau"
              ? "Hier folgen Referenzen mit technischen Daten, Details zum Download und Angaben zu Normen und Ausführungsklasse."
              : "Hier folgen Bildergalerie mit Projekten aus der Region, Kostenrahmen und der Ablauf von Aufmaß bis Montage."}
          </p>
        </div>
      </section>
      {segment === "privat" && <Galerie bilder={bilderFuer(leistung.slug)} titel="Ausgeführte Arbeiten" />}
      {leistung.counterpart && (
        <p className="mt-8">
          {segment === "objektbau" ? "Für Ihr eigenes Haus? " : "Sie planen ein größeres Bauvorhaben? "}
          <Link href={leistung.counterpart} className="link">
            {segment === "objektbau" ? "Zur Seite für Privatkunden" : "Zur Seite für Planer und Bauträger"}
          </Link>
        </p>
      )}
      <CtaBand segment={segment} />
      <JsonLd
        data={serviceJsonLd({
          name: leistung.title,
          description: leistung.description,
          path,
          audience: segment === "objektbau" ? "Architekten, Planer, Bauträger" : "Privatkunden",
        })}
      />
    </div>
  );
}
