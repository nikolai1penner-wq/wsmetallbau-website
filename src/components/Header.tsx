import Link from "next/link";
import { bilderFuer } from "@/lib/bilder";
import { mainNav, megaMenus } from "@/lib/navigation";
import { site, telHref } from "@/lib/site";
import { Logo } from "./Logo";
import { MegaNav, MobileNav } from "./MegaNav";

export function Header() {
  const teaserBilder = megaMenus.map((m) => bilderFuer(m.teaser.bildKey)[0]);
  return (
    <header className="dark relative z-40 border-b border-line-dark">
      <div className="wrap flex min-h-16 items-center gap-x-8 md:min-h-[76px]">
        <Link href="/" className="flex items-center gap-3.5 text-on-dark no-underline" aria-label={`${site.name}, zur Startseite`}>
          <Logo />
          <span className="hidden font-mono text-[11px] leading-tight tracking-[0.1em] text-on-dark-muted sm:block">METALLBAU<br />HERFORD</span>
        </Link>
        <MegaNav menus={megaMenus} links={mainNav} teaserBilder={teaserBilder} />
        {site.phone && (
          <a href={telHref(site.phone)} className="hidden font-mono text-[15px] text-on-dark no-underline lg:inline">{site.phone}</a>
        )}
        <Link href="/anfrage/" className="btn hidden px-5 text-[15px] md:inline-flex">Projekt anfragen</Link>
        {site.phone && (
          <a href={telHref(site.phone)} aria-label="Anrufen" className="ml-auto flex size-11 items-center justify-center text-on-dark md:hidden">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
          </a>
        )}
        <div className={site.phone ? "" : "ml-auto"}>
          <MobileNav menus={megaMenus} links={mainNav} />
        </div>
      </div>
    </header>
  );
}
