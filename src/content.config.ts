import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  // Cada artículo es un .md dentro de src/content/journal/en/ o src/content/journal/es/
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.enum(['destinations', 'stays', 'culture', 'itineraries']),
    /** Lugar mostrado como "kicker" (ej. "Buenos Aires, Argentina"). */
    place: z.string(),
    /** Misma clave en la versión EN y ES de un artículo → el selector de idioma las vincula. */
    translationKey: z.string(),
    /** Ruta a una imagen en /public (ej. /images/palacio.jpg) o URL externa. Opcional. */
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    /** Crédito de la foto, ej. 'Foto: Ana Pérez · CC BY 2.0'. */
    coverCredit: z.string().optional(),
    /** Link a la página original de la foto (requerido por las licencias CC). */
    coverCreditUrl: z.string().optional(),
    /** Tono del placeholder cuando todavía no hay foto: sand | stone | olive | clay | ink */
    tone: z.enum(['sand', 'stone', 'olive', 'clay', 'ink']).default('sand'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
