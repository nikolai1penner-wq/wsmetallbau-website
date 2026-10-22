// Einmaliger Import der Projektfotos von ws-edelstahlbau.de (wird abgeschaltet).
// Lädt jede URL aus bilder-urls.txt, verkleinert auf max. 2000 px, speichert als WebP mit
// sprechendem Dateinamen unter public/bilder/<leistung>/ und schreibt src/data/bilder.json.
// Aufruf: node scripts/import-bilder.mjs   (lokal oder per GitHub Action "Bilder importieren")
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");

// Ordner auf der alten Seite → Leistungsseite, Dateiname, Alt-Text
const ordner = {
  "Lofttür": { leistung: "loft-tueren-trennwaende", name: "loft-tuer-stahl-glas", alt: "Loft-Tür aus Stahl und Glas nach Maß" },
  "Edelstahlgeländer": { leistung: "gelaender", name: "edelstahlgelaender", alt: "Edelstahlgeländer nach Maß" },
  "Ganzglasgeländer": { leistung: "gelaender", name: "ganzglasgelaender", alt: "Ganzglasgeländer" },
  "Innengeländer": { leistung: "gelaender", name: "innengelaender-stahl", alt: "Innengeländer aus Stahl" },
  "Spindeltreppe": { leistung: "treppen", name: "spindeltreppe-stahl", alt: "Spindeltreppe aus Stahl" },
  "Innentreppe": { leistung: "treppen", name: "innentreppe-stahl", alt: "Innentreppe aus Stahl" },
  "Vorstellbalkon": { leistung: "balkone", name: "vorstellbalkon-stahl", alt: "Vorstellbalkon aus Stahl" },
  "Balkonbeläge": { leistung: "balkone", name: "balkonbelag", alt: "Balkon mit Belag und Geländer" },
  "Fenstergitter": { leistung: "fenstergitter", name: "fenstergitter-stahl", alt: "Fenstergitter aus Stahl" },
};

const urls = (await readFile(path.join(root, "scripts/bilder-urls.txt"), "utf8")).split("\n").map((s) => s.trim()).filter(Boolean);
const zaehler = {};
const bilder = [];
const fehler = [];

// Der Bildserver bricht lange Verbindungen ab, daher jedes Bild mit neuer Verbindung und bis zu 4 Versuchen
async function laden(url) {
  for (let versuch = 1; versuch <= 4; versuch++) {
    try {
      const res = await fetch(url, { headers: { connection: "close" }, signal: AbortSignal.timeout(60_000) });
      if (res.ok) return Buffer.from(await res.arrayBuffer());
      if (res.status < 500) return null;
    } catch (e) {
      console.warn(`Versuch ${versuch} fehlgeschlagen: ${url} (${e.cause?.code ?? e.message})`);
    }
    await new Promise((r) => setTimeout(r, 2000 * versuch));
  }
  return null;
}

for (const url of urls) {
  const teile = decodeURIComponent(new URL(url).pathname).split("/");
  const quelle = teile.at(-2);
  if (teile.at(-1).startsWith("LOGO")) continue;
  const meta = ordner[quelle];
  if (!meta) { fehler.push(`unbekannter Ordner ${quelle}: ${url}`); continue; }

  const daten = await laden(url);
  if (!daten) { fehler.push(`nicht geladen: ${url}`); continue; }
  const nr = (zaehler[meta.name] = (zaehler[meta.name] ?? 0) + 1);
  const datei = `${meta.name}-${String(nr).padStart(2, "0")}.webp`;
  const ziel = path.join(root, "public/bilder", meta.leistung, datei);
  await mkdir(path.dirname(ziel), { recursive: true });
  const info = await sharp(daten)
    .rotate()
    .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(ziel);
  bilder.push({ src: `/bilder/${meta.leistung}/${datei}`, leistung: meta.leistung, alt: meta.alt, width: info.width, height: info.height, quelle: url });
  console.log("✓", datei);
}

await writeFile(path.join(root, "src/data/bilder.json"), JSON.stringify(bilder, null, 2) + "\n");
console.log(`${bilder.length} Bilder importiert`);
if (fehler.length) console.error(`${fehler.length} Fehler:\n${fehler.join("\n")}`);
if (!bilder.length) process.exitCode = 1;
