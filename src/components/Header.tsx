import Link from "next/link";
import { site, telHref } from "@/lib/site";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export const mainNav = [
  { href: "/objektbau/", label: "Objektbau" },
  { href: "/privat/", label: "Privat" },
  { href: "/referenzen/", label: "Referenzen" },
  { href: "/planer-service/", label: "Planer-Service" },
  { href: "/unternehmen/", label: "Unternehmen" },
];

export function Header() {
  return (
    <header className="dark relative border-b border-line-dark">
      <div className="wrap flex min-h-16 flex-wrap items-center gap-x-8 gap-y-3 md:min-h-[76px]">
        <Link href="/" className="flex items-center gap-3.5 text-on-dark no-underline" aria-label={`${site.name}, zur Startseite`}>
          <Logo />
          <span className="hidden font-mono text-[11px] leading-tight tracking-[0.1em] text-on-dark-muted sm:block">METALLBAU<br />HERFORD</span>
        </Link>
        <nav aria-label="Hauptmenü" className="hidden flex-1 md:block">
          <NavLinks items={mainNav} className="flex flex-wrap gap-x-6 gap-y-1 text-[15px] font-medium" />
        </nav>
        {site.phone && (
          <a href={telHref(site.phone)} className="hidden font-mono text-[15px] text-on-dark no-underline lg:inline">{site.phone}</a>
        )}
        <Link href="/anfrage/" className="btn hidden px-5 text-[15px] md:inline-flex">Anfrage</Link>
        {/* Mobil: aufklappbares Menü ohne JavaScript */}
        {site.phone && (
          <a href={telHref(site.phone)} aria-label="Anrufen" className="ml-auto flex size-11 items-center justify-center text-on-dark md:hidden">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
          </a>
        )}
        <details className={`group md:hidden ${site.phone ? "" : "ml-auto"}`}>
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden" aria-label="Menü">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path className="group-open:hidden" d="M4 7h16M4 12h16M4 17h16" />
              <path className="hidden group-open:block" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </summary>
          <nav aria-label="Hauptmenü mobil" className="absolute inset-x-0 top-16 z-40 border-t border-line-dark bg-anthracite px-4 pb-6">
            <NavLinks
              items={[...mainNav, { href: "/anfrage/", label: "Anfrage" }]}
              className="flex flex-col text-lg font-medium [&_a]:flex [&_a]:min-h-12 [&_a]:items-center [&_a]:border-b [&_a]:border-line-dark"
            />
          </nav>
        </details>
      </div>
    </header>
  );
}
