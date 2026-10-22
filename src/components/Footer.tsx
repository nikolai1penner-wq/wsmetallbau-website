import Link from "next/link";
import { site, telHref } from "@/lib/site";
import { objektbau, privat } from "@/lib/leistungen";

export function Footer() {
  return (
    <footer className="mt-24 border-t-[1.5px] border-ink bg-sheet">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="grid content-start gap-2">
          <span className="font-display text-lg font-extrabold uppercase">{site.name}</span>
          <address className="not-italic text-muted">
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </address>
          {site.phone && <a href={telHref(site.phone)}>{site.phone}</a>}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <FooterList title="Objektbau" base="/objektbau/" items={objektbau} />
        <FooterList title="Privat" base="/privat/" items={privat} />
        <div className="grid content-start gap-2">
          <span className="label">Unternehmen</span>
          <Link href="/referenzen/">Referenzen</Link>
          <Link href="/planer-service/">Planer-Service</Link>
          <Link href="/einsatzgebiet/">Einsatzgebiet</Link>
          <Link href="/unternehmen/">Über uns</Link>
          <Link href="/anfrage/">Anfrage</Link>
          <Link href="/impressum/">Impressum</Link>
          <Link href="/datenschutz/">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, base, items }: { title: string; base: string; items: { slug: string; title: string }[] }) {
  return (
    <div className="grid content-start gap-2">
      <Link href={base} className="label">{title}</Link>
      {items.map((l) => (
        <Link key={l.slug} href={`${base}${l.slug}/`} className="text-[0.95rem]">{l.title}</Link>
      ))}
    </div>
  );
}
