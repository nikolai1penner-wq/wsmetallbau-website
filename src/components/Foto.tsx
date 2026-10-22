import Image from "next/image";
import type { Bild } from "@/lib/bilder";

/** Projektfoto oder, solange noch keins importiert ist, ein beschrifteter Platzhalter */
export function Foto({ bild, label, className = "", sizes, priority }: { bild?: Bild; label: string; className?: string; sizes: string; priority?: boolean }) {
  if (bild) {
    return (
      <div className={`relative overflow-hidden bg-line ${className}`}>
        <Image src={bild.src} alt={bild.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  return (
    <div className={`ph relative ${className}`} role="img" aria-label={`Platzhalter: ${label}`}>
      <span className="absolute bottom-3 left-3 bg-on-dark px-2 py-1 font-mono text-[11px] text-anthracite sm:bottom-4 sm:left-4 sm:text-xs">FOTO: {label}</span>
    </div>
  );
}
