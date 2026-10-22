"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({ items, className }: { items: { href: string; label: string }[]; className?: string }) {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {items.map((item) => {
        const active = pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`no-underline hover:text-accent-light ${active ? "text-accent-light" : "text-on-dark"}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
