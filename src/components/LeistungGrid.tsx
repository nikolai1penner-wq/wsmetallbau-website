import Link from "next/link";
import { bilderFuer } from "@/lib/bilder";
import type { Leistung } from "@/lib/leistungen";
import { Foto } from "./Foto";

export type Karte = { href: string; title: string; text: string; tag?: string; bildKey?: string };

export const karteAus = (l: Leistung, base: string, tag?: string): Karte => ({
  href: `${base}${l.slug}/`,
  title: l.short,
  text: l.teaser,
  tag,
  bildKey: l.slug,
});

/** Leistungskarten mit Foto (Startseite, Privat-Hub) */
export function LeistungGrid({ items }: { items: Karte[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((k) => (
        <li key={k.href}>
          <Link href={k.href} className="group flex h-full flex-col bg-sheet text-ink no-underline">
            <Foto bild={k.bildKey ? bilderFuer(k.bildKey)[0] : undefined} label={k.title} className="h-[230px]" sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" />
            <div className="grid gap-2 px-6 pt-5 pb-6">
              {k.tag && <span className="label">{k.tag}</span>}
              <h3 className="h3 group-hover:underline">{k.title}</h3>
              <p className="text-[15px] text-ink-2">{k.text}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Leistungen als Zeilen mit technischen Kurzangaben (Objektbau) */
export function LeistungRows({ items, base }: { items: Leistung[]; base: string }) {
  return (
    <ul className="border-t border-line">
      {items.map((l) => (
        <li key={l.slug}>
          <Link href={`${base}${l.slug}/`} className="group flex flex-wrap items-baseline gap-x-8 gap-y-3 border-b border-line py-6 text-ink no-underline">
            <h3 className="h3 flex-[1_1_300px] group-hover:underline">{l.short}</h3>
            <p className="flex-[2_1_420px] text-base text-ink-2">{l.teaser}</p>
            {l.spec && <span className="flex-[1_1_220px] font-mono text-xs tracking-[0.04em] text-muted">{l.spec}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
