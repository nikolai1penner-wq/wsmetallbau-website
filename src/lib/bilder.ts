import daten from "@/data/bilder.json";

export type Bild = { src: string; leistung: string; alt: string; width: number; height: number };

const bilder = daten as Bild[];

export const bilderFuer = (leistung: string) => bilder.filter((b) => b.leistung === leistung);
