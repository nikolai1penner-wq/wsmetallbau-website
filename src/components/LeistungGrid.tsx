import Link from "next/link";
import type { Leistung } from "@/lib/leistungen";

export function LeistungGrid({ items, base }: { items: Leistung[]; base: string }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((l) => (
        <li key={l.slug}>
          <Link href={`${base}${l.slug}/`} className="panel h-full transition-colors hover:border-ink">
            <h3 className="h3">{l.title}</h3>
            <p className="text-[0.95rem] text-muted">{l.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
