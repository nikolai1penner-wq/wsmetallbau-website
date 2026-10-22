import Image from "next/image";
import type { Bild } from "@/lib/bilder";

export function Galerie({ bilder, titel }: { bilder: Bild[]; titel: string }) {
  if (bilder.length === 0) return null;
  return (
    <section className="section">
      <div className="wrap grid gap-7">
        <h2 className="h2">{titel}</h2>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {bilder.map((b) => (
            <li key={b.src} className="relative aspect-[3/4] overflow-hidden bg-line">
              <Image src={b.src} alt={b.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 768px) 33vw, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
