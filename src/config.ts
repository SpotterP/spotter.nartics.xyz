// Datos de la web en un solo sitio. Cambia aquí el dominio y los enlaces.
export const SITE = {
  name: "Spotter",
  // Dominio principal para compilaciones locales. El workflow lo establece
  // explícitamente al generar la versión publicada.
  url: "https://spotter.nartics.xyz",

  // Deja un enlace vacío ("") mientras no exista: la web lo anuncia como "muy pronto".
  links: {
    webApp: "", // p. ej. "https://app.spot.com"
    android: "", // ficha de Google Play
    ios: "", // ficha del App Store
    github: "", // p. ej. "https://github.com/SpotterP"
  },
} as const;

// Los textos (lema, descripción, menú) están en src/i18n/ui.ts, en los tres idiomas.
export const NAV = [
  { href: "#about", label: "nav.about" },
  { href: "#features", label: "nav.features" },
  { href: "#platforms", label: "nav.platforms" },
  { href: "https://spotter-foro.vercel.app", label: "nav.forum" },
] as const;

/** Enlace del menú: los anclajes (#...) cuelgan de la portada; las URLs completas van tal cual. */
export function navHref(home: string, href: string) {
  return href.startsWith("#") ? `${home}${href}` : href;
}
