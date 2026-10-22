# wsmetall.de

Neubau der Website von WSMetall (Metallbau, Herford) mit Next.js auf Vercel. Grundlage ist das SEO-Konzept
(Hubs `/objektbau/` und `/privat/`, Referenzen als Fallstudien, Planer-Service, getrennte Anfrageformulare).

## Entwickeln

```bash
npm install
npm run dev
```

## Wo was gepflegt wird

- `src/lib/site.ts`: Firmenname, Telefon, Adresse, Zertifizierung, Einsatzgebiet (offene Punkte sind mit TODO markiert)
- `src/lib/leistungen.ts`: alle Leistungsseiten beider Hubs
- `src/lib/referenzen.ts`: Referenzprojekte (später Headless-CMS)
- `next.config.ts`: 301-Weiterleitungen alter URLs (wsmetall.de-WordPress und ws-edelstahlbau.de)

## Bilder von ws-edelstahlbau.de

Einmalig per GitHub Action „Bilder importieren“ (Actions-Tab, „Run workflow“) oder lokal mit
`node scripts/import-bilder.mjs`. Das Skript lädt alle URLs aus `scripts/bilder-urls.txt`, verkleinert sie,
speichert sie als WebP mit sprechenden Namen unter `public/bilder/` und füllt `src/data/bilder.json`.

## Umgebungsvariablen (Vercel)

| Variable | Zweck |
| --- | --- |
| `RESEND_API_KEY` | Versand der Anfrageformulare per Resend |
| `ANFRAGE_EMPFAENGER` | Empfänger, kommagetrennt |
| `ANFRAGE_ABSENDER` | optional, Standard `Website <anfrage@wsmetall.de>` (Domain in Resend verifizieren) |
| `NEXT_PUBLIC_SITE_URL` | optional, Standard `https://wsmetall.de` |
