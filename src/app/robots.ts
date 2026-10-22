import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Vorschau-Deployments auf Vercel sollen nicht indexiert werden, nur die Produktion.
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${site.url}/sitemap.xml` };
}
