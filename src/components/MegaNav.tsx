"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Bild } from "@/lib/bilder";
import type { MegaMenu } from "@/lib/navigation";
import { Foto } from "./Foto";

type Props = { menus: MegaMenu[]; links: { href: string; label: string }[]; teaserBilder: (Bild | undefined)[] };

const Chevron = ({ open }: { open: boolean }) => (
  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${open ? "rotate-180" : ""}`}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/** Desktop: Mega-Menü für Objektbau und Privat, öffnet bei Hover oder per Klick/Tastatur */
export function MegaNav({ menus, links, teaserBilder }: Props) {
  const pathname = usePathname();
  // Das offene Menü gilt nur für die Seite, auf der es geöffnet wurde, so schließt es nach einem Klick auf einen Link
  const [zustand, setZustand] = useState<{ index: number; pfad: string } | null>(null);
  const offen = zustand?.pfad === pathname ? zustand.index : null;
  const setOffen = (index: number | null) => setZustand(index === null ? null : { index, pfad: pathname });
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (offen === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZustand(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [offen]);

  const oeffnen = (i: number) => { clearTimeout(timer.current); setOffen(i); };
  const schliessen = () => { timer.current = setTimeout(() => setOffen(null), 120); };
  const aktiv = (href: string) => pathname.startsWith(href);

  return (
    <nav aria-label="Hauptmenü" className="hidden flex-1 self-stretch md:flex" onMouseLeave={schliessen}>
      <ul className="flex flex-wrap items-stretch gap-x-6 text-[15px] font-medium">
        {menus.map((m, i) => (
          <li key={m.href} className="flex" onMouseEnter={() => oeffnen(i)}>
            <button
              type="button"
              aria-expanded={offen === i}
              aria-controls={`mega-${i}`}
              onClick={() => setOffen(offen === i ? null : i)}
              className={`inline-flex cursor-pointer items-center gap-1.5 hover:text-accent-light ${offen === i || aktiv(m.href) ? "text-accent-light" : "text-on-dark"}`}
            >
              {m.label}
              <Chevron open={offen === i} />
            </button>
            <div
              id={`mega-${i}`}
              hidden={offen !== i}
              className="absolute inset-x-0 top-full z-50 border-t-[3px] border-petrol bg-sheet text-ink shadow-[0_18px_40px_rgba(36,48,54,.18)]"
            >
              <div className="wrap flex flex-wrap gap-8 py-7 font-normal">
                <div className="flex min-w-0 flex-[2_1_520px] flex-col gap-2.5">
                  <div className="flex items-baseline justify-between gap-4 px-3.5">
                    <span className="font-mono text-[11px] tracking-[0.1em] text-accent uppercase">{m.eyebrow}</span>
                    <Link href={m.href} className="text-sm font-semibold text-accent">{m.alle} →</Link>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                    {m.leistungen.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="flex flex-col gap-0.5 border-l-2 border-transparent px-3.5 py-3 text-ink no-underline hover:border-petrol hover:bg-white focus-visible:border-petrol">
                          <span className="font-display text-[19px] leading-tight font-bold">{l.title}</span>
                          <span className="text-sm leading-snug text-muted">{l.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex min-w-0 flex-[1_1_220px] flex-col gap-3 border-l border-line pl-7">
                  <span className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase">{m.infoTitel}</span>
                  <ul className="grid gap-3.5">
                    {m.info.map((l) => (
                      <li key={l.title}>
                        <Link href={l.href} className="flex flex-col text-ink no-underline hover:underline">
                          <span className="font-semibold">{l.title} →</span>
                          <span className="text-sm text-muted">{l.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={m.teaser.href} className="group flex min-w-0 flex-[1_1_260px] flex-col bg-anthracite text-on-dark no-underline">
                  <Foto bild={teaserBilder[i]} label={m.teaser.label} className="h-[150px]" sizes="320px" />
                  <span className="flex flex-col gap-1.5 p-4">
                    <span className="font-mono text-[11px] tracking-[0.1em] text-accent-light uppercase">{m.teaser.eyebrow}</span>
                    <span className="font-display text-lg leading-tight font-bold">{m.teaser.text}</span>
                    <span className="text-sm font-semibold text-accent-light group-hover:underline">{m.teaser.cta} →</span>
                  </span>
                </Link>
              </div>
            </div>
          </li>
        ))}
        {links.map((l) => (
          <li key={l.href} className="flex items-center">
            <Link
              href={l.href}
              aria-current={aktiv(l.href) ? "page" : undefined}
              className={`no-underline hover:text-accent-light ${aktiv(l.href) ? "text-accent-light" : "text-on-dark"}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Mobil: aufklappbares Menü mit Bereichen für Objektbau und Privat */
export function MobileNav({ menus, links }: Omit<Props, "teaserBilder">) {
  const pathname = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => { if (ref.current) ref.current.open = false; }, [pathname]);
  const zeile = "flex min-h-12 items-center border-b border-line-dark text-on-dark no-underline";
  return (
    <details ref={ref} className="group/menu md:hidden">
      <summary className="flex size-11 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden" aria-label="Menü">
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path className="group-open/menu:hidden" d="M4 7h16M4 12h16M4 17h16" />
          <path className="hidden group-open/menu:block" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </summary>
      <nav aria-label="Hauptmenü mobil" className="absolute inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line-dark bg-anthracite px-4 pb-6 text-lg font-medium">
        {menus.map((m) => (
          <details key={m.href} className="group/sub border-b border-line-dark">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
              {m.label}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-open/sub:rotate-180"><path d="M6 9l6 6 6-6" /></svg>
            </summary>
            <ul className="grid gap-1 pb-4">
              {m.leistungen.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex flex-col border-l-2 border-petrol py-2 pl-3 text-on-dark no-underline">
                    <span className="font-display text-[17px] font-bold">{l.title}</span>
                    <span className="text-sm font-normal text-on-dark-muted">{l.text}</span>
                  </Link>
                </li>
              ))}
              <li className="mt-2 font-mono text-[11px] tracking-[0.1em] text-on-dark-muted uppercase">{m.infoTitel}</li>
              {m.info.map((l) => (
                <li key={l.title}><Link href={l.href} className="text-base text-on-dark no-underline">{l.title} →</Link></li>
              ))}
              <li className="mt-1"><Link href={m.href} className="text-base font-semibold text-accent-light no-underline">{m.alle} →</Link></li>
            </ul>
          </details>
        ))}
        <ul>
          {links.map((l) => (
            <li key={l.href}><Link href={l.href} className={zeile}>{l.label}</Link></li>
          ))}
        </ul>
        <Link href="/anfrage/" className="btn mt-5 w-full">Projekt anfragen</Link>
      </nav>
    </details>
  );
}
