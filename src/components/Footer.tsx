import Link from "next/link";
import { objektbau, privat } from "@/lib/leistungen";
import { site, telHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-footer pt-14 pb-10 text-[15px] text-on-dark-soft">
      <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
        <div className="grid content-start gap-1.5">
          <Logo small />
          <span>{site.legalName}</span>
          <span>{site.address.street}, {site.address.zip} {site.address.city}</span>
          <span>
            {site.phone && <><a href={telHref(site.phone)} className="text-on-dark-soft">{site.phone}</a> · </>}
            <a href={`mailto:${site.email}`} className="text-on-dark-soft">{site.email}</a>
          </span>
        </div>
        <FooterNav title="Objektbau" base="/objektbau/" items={objektbau} extra={[{ href: "/planer-service/", label: "Planer-Service" }]} />
        <FooterNav title="Privat" base="/privat/" items={privat} extra={[{ href: "/privat/ratgeber/", label: "Ratgeber" }]} />
        <nav aria-label="Unternehmen" className="grid content-start gap-1.5">
          <span className="font-mono text-xs tracking-[0.1em] text-[#9aa8ae]">UNTERNEHMEN</span>
          {[
            ["/referenzen/", "Referenzen"],
            ["/unternehmen/", "Über uns"],
            ["/einsatzgebiet/", "Einsatzgebiet"],
            ["/karriere/", "Karriere"],
            ["/anfrage/", "Anfrage"],
            ["/impressum/", "Impressum"],
            ["/datenschutz/", "Datenschutz"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="text-on-dark-soft hover:text-on-dark">{label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

function FooterNav({ title, base, items, extra }: { title: string; base: string; items: { slug: string; title: string; short?: string }[]; extra: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title} className="grid content-start gap-1.5">
      <Link href={base} className="font-mono text-xs tracking-[0.1em] text-[#9aa8ae] uppercase">{title}</Link>
      {items.map((l) => (
        <Link key={l.slug} href={`${base}${l.slug}/`} className="text-on-dark-soft hover:text-on-dark">{l.short ?? l.title}</Link>
      ))}
      {extra.map((e) => (
        <Link key={e.href} href={e.href} className="text-on-dark-soft hover:text-on-dark">{e.label}</Link>
      ))}
    </nav>
  );
}
