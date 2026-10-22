import Image from "next/image";
import type { Bild } from "@/lib/bilder";

export function Galerie({ bilder, titel }: { bilder: Bild[]; titel: string }) {
  if (bilder.length === 0) return null;
  return (
    <section className="mt-12">
      <h2 className="h2">{titel}</h2>
      <ul className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {bilder.map((b, i) => (
          <li key={b.src} className="relative aspect-[4/5] overflow-hidden bg-line">
            <Image
              src={b.src}
              alt={b.alt}
              fill
              sizes="(min-width: 1024px) 270px, (min-width: 768px) 33vw, 50vw"
              className="object-cover"
              priority={i < 2}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
