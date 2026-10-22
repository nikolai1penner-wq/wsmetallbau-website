import type { Metadata } from "next";
import { site } from "./site";

/** absolute: Title ohne den Zusatz „| W&S Metallbau“ aus dem Layout-Template */
export function pageMeta(opts: { title: string; description: string; path: string; noindex?: boolean; absolute?: boolean }): Metadata {
  return {
    title: opts.absolute ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: { title: opts.title, description: opts.description, url: opts.path, type: "website" },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function localBusinessJsonLd() {
  const { address } = site;
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      postalCode: address.zip,
      addressLocality: address.city,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    areaServed: [...site.serviceArea.kern, ...site.serviceArea.erweitert, ...site.serviceArea.rand].map((name) => ({
      "@type": "City",
      name,
    })),
    knowsAbout: ["Metallbau", "Stahlbau", "Sonderkonstruktionen", "Treppen", "Balkone", "Geländer"],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string; audience: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    provider: { "@id": `${site.url}/#organization` },
    audience: { "@type": "Audience", audienceType: opts.audience },
    areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.1146, longitude: 8.6734 }, geoRadius: 100000 },
  };
}
