# Web oficial de Spotter

La web que explica qué es Spotter. No es la web app: aquí solo se presenta la app.

Hecha con [Astro](https://astro.build), sobre la misma base que `nmclauncher.nartics.xyz`.

## Desarrollo en local

1. `npm install`
2. `npm run dev`

`npm run build` genera la web estática en `dist/`.

## Linter y hook de Git

El linter es [Oxlint](https://oxc.rs/docs/guide/usage/linter), con sus reglas en `.oxlintrc.json`:

```bash
npm run lint        # analiza src/
npm run lint:fix    # aplica las correcciones automáticas
```

Oxlint analiza los ficheros TypeScript de `src/` (`config.ts`, `i18n/ui.ts`, `scripts/main.ts` y las rutas `.ts`). Los `.astro` no los lee.

Al hacer `npm install` se activa solo un hook de Git (`.githooks/pre-commit`, lo configura el script `prepare`).
Antes de cada `git commit` pasa `npm run lint`: si el linter encuentra un error, el commit se cancela y dice qué arreglar.
Se puede saltar una vez con `git commit --no-verify`, pero lo normal es arreglar el aviso.
