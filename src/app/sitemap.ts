import type { MetadataRoute } from "next";
import { objektbau, privat } from "@/lib/leistungen";
import { publishedReferenzen } from "@/lib/referenzen";
import { site } from "@/lib/site";

// Seiten mit noindex (Platzhalter, Impressum, Datenschutz) stehen bewusst nicht in der Sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/objektbau/",
    ...objektbau.map((l) => `/objektbau/${l.slug}/`),
    "/privat/",
    ...privat.map((l) => `/privat/${l.slug}/`),
    "/referenzen/",
    ...publishedReferenzen.map((r) => `/referenzen/${r.slug}/`),
    "/unternehmen/",
    "/einsatzgebiet/",
    "/anfrage/",
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
