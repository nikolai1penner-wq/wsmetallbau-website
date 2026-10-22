import Link from "next/link";
import { site, telHref } from "@/lib/site";

const nav = [
  { href: "/objektbau/", label: "Objektbau" },
  { href: "/privat/", label: "Privat" },
  { href: "/referenzen/", label: "Referenzen" },
  { href: "/planer-service/", label: "Planer-Service" },
  { href: "/unternehmen/", label: "Unternehmen" },
];

export function Header() {
  return (
    <header className="border-b-[1.5px] border-ink bg-sheet">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
        <Link href="/" className="font-display text-xl font-extrabold uppercase tracking-tight">
          {site.shortName}
          <span className="sr-only"> – {site.name}</span>
        </Link>
        <nav aria-label="Hauptnavigation" className="order-3 w-full overflow-x-auto md:order-2 md:w-auto">
          <ul className="flex gap-5 whitespace-nowrap text-[0.95rem] font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-steel">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="order-2 flex items-center gap-4 md:order-3">
          {site.phone && (
            <a href={telHref(site.phone)} className="hidden font-mono text-sm sm:inline">{site.phone}</a>
          )}
          <Link href="/anfrage/" className="btn">Anfrage</Link>
        </div>
      </div>
    </header>
  );
}
