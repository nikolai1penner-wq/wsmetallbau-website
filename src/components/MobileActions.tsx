import Link from "next/link";
import { site, telHref } from "@/lib/site";

// Feste Aktionsleiste unten auf dem Handy (Screendesign „Startseite mobil“)
export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-line bg-sheet px-4 pt-2.5 pb-4 md:hidden">
      {site.phone ? (
        <a href={telHref(site.phone)} className="flex min-h-12 flex-1 items-center justify-center border-[1.5px] border-anthracite font-semibold text-ink no-underline">
          Anrufen
        </a>
      ) : (
        <a href={`mailto:${site.email}`} className="flex min-h-12 flex-1 items-center justify-center border-[1.5px] border-anthracite font-semibold text-ink no-underline">
          E-Mail
        </a>
      )}
      <Link href="/anfrage/" className="btn-dark flex-1">Anfrage senden</Link>
    </div>
  );
}
