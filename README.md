# The Curator's Atlas

Revista editorial de viajes + consultoría (Fora Travel Advisor). Sitio estático bilingüe (EN / ES) hecho con [Astro](https://astro.build), pensado para publicarse gratis en **Cloudflare Pages**.

## Qué personalizar primero

| Qué | Dónde |
| --- | --- |
| Tu nombre, email, Instagram, link a tu perfil de Fora, formulario | `src/config.ts` |
| Tarifas de Consultoría Express / Ruta Esencial / Gran Itinerario | `src/config.ts` → `PRICES` |
| Textos de "About" (completá los `[ ]`) | `src/pages/[lang]/about.astro` |
| Textos de "Curated Journeys" | `src/pages/[lang]/journeys.astro` |
| Textos generales (menú, botones, portada) | `src/i18n/ui.ts` |
| Dominio definitivo | `astro.config.mjs` → `site` |

## Publicar un artículo

1. Creá un archivo `.md` en `src/content/journal/en/` (inglés) y/o `src/content/journal/es/` (español). El nombre del archivo es la URL.
2. Copiá el encabezado de un artículo existente:

```md
---
title: 'Título'
excerpt: 'Bajada de una o dos líneas.'
date: 2026-11-20
category: destinations   # destinations | stays | culture | itineraries
place: 'Mendoza, Argentina'
translationKey: mendoza-vendimia   # igual en la versión EN y ES → el selector de idioma las une
cover: /images/mendoza.jpg          # opcional; poné la foto en public/images/
coverAlt: 'Viñedos al atardecer'
featured: false                      # true = aparece destacado en la portada
---
```

3. Escribí el texto en Markdown (`## subtítulos`, `> citas`, listas, **negritas**).
4. Guardá los cambios en GitHub y Cloudflare publica la nueva versión sola en uno o dos minutos.

Los 8 artículos incluidos son **ejemplos**: editalos o borralos.

## Formulario "Work With Me"

Sin configuración, el botón abre el email del visitante con el perfil completo. Para recibir los envíos directo en tu casilla:
1. Creá una cuenta gratis en [formspree.io](https://formspree.io) y un formulario nuevo.
2. Pegá la URL (`https://formspree.io/f/xxxx`) en `formEndpoint` dentro de `src/config.ts`.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Publicación en Cloudflare Pages

1. Subí este proyecto a un repositorio de GitHub.
2. En Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** y elegí el repositorio.
3. Configuración de build: framework **Astro**, comando `npm run build`, carpeta de salida `dist`.
4. Te queda publicado en `https://<proyecto>.pages.dev`.
5. Dominio propio: **Custom domains → Set up a domain**.
   - `.com`: se puede comprar en Cloudflare Registrar y queda conectado automáticamente.
   - `.com.ar`: se compra en NIC Argentina; ahí, en "Delegaciones", poné los dos nameservers que te indique Cloudflare.
