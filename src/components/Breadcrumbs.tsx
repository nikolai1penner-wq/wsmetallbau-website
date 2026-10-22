import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Start", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Brotkrumen" className="label flex flex-wrap gap-x-2 pb-6">
        {all.map((item, i) => (
          <span key={item.path} className="flex gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i < all.length - 1 ? (
              <Link href={item.path} className="hover:text-ink">{item.name}</Link>
            ) : (
              <span aria-current="page" className="text-ink">{item.name}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </>
  );
}
