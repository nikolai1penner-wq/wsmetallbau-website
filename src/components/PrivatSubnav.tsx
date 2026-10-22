import Link from "next/link";
import { privat } from "@/lib/leistungen";

export function PrivatSubnav({ aktiv }: { aktiv?: string }) {
  const items = [...privat.map((l) => ({ key: l.slug, href: `/privat/${l.slug}/`, label: l.short })), { key: "ratgeber", href: "/privat/ratgeber/", label: "Ratgeber" }];
  return (
    <nav aria-label="Privatleistungen" className="border-b border-line bg-sheet">
      <ul className="wrap flex min-h-[52px] items-center gap-7 overflow-x-auto text-[15px] font-medium whitespace-nowrap">
        {items.map((i) => (
          <li key={i.key}>
            <Link
              href={i.href}
              aria-current={i.key === aktiv ? "page" : undefined}
              className={`inline-block py-3 no-underline ${i.key === aktiv ? "border-b-[3px] border-accent text-ink" : "text-ink-2 hover:text-ink"}`}
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
