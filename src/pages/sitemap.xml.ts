import type { APIRoute } from "astro";
import { languages, localePath, type Lang } from "../i18n/ui";

// Una entrada por idioma, cada una enlazada con las otras versiones.
export const GET: APIRoute = ({ site }) => {
  const langs = Object.keys(languages) as Lang[];
  const url = (lang: Lang) => new URL(localePath(lang, "/"), site).href;
  const alternates = langs
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l)}"/>`)
    .join("\n");
  const entries = langs
    .map((l) => `  <url>\n    <loc>${url(l)}</loc>\n${alternates}\n  </url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
