import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // WordPress-URLs enden auf "/", so bleiben bestehende Adressen 1:1 gültig
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // 301 von alten WordPress-URLs (SEO-Konzept, Abschnitt 08). /impressum/ und /datenschutz/ bleiben unverändert.
  async redirects() {
    return [
      { source: "/kontakt", destination: "/anfrage/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      // Alte Domain ws-edelstahlbau.de, sobald sie auf dieses Vercel-Projekt zeigt
      ...[
        ["/lofttuer", "/privat/loft-tueren-trennwaende/"],
        ["/gelaender", "/privat/gelaender/"],
        ["/ganzglasgelaender", "/privat/gelaender/"],
        ["/weiteres", "/privat/"],
        ["/:path*", "/:path*"],
      ].flatMap(([source, ziel]) =>
        ["ws-edelstahlbau.de", "www.ws-edelstahlbau.de"].map((host) => ({
          source,
          has: [{ type: "host" as const, value: host }],
          destination: `https://wsmetall.de${ziel}`,
          permanent: true,
        })),
      ),
    ];
  },
};

export default nextConfig;
