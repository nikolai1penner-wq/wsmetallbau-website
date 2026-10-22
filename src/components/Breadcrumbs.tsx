import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({ items, onDark = false }: { items: { name: string; path: string }[]; onDark?: boolean }) {
  const all = [{ name: "Start", path: "/" }, ...items];
  const tone = onDark ? "text-on-dark-muted" : "text-muted";
  return (
    <>
      <nav aria-label="Brotkrumen" className={`flex flex-wrap gap-x-2 font-mono text-xs uppercase tracking-[0.06em] ${tone}`}>
        {all.map((item, i) => (
          <span key={item.path} className="flex gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i < all.length - 1 ? (
              <Link href={item.path} className={`${tone} hover:underline`}>{item.name}</Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </>
  );
}
