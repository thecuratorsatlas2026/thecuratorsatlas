export const languages = { en: 'EN', es: 'ES' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

export const categories = ['destinations', 'stays', 'culture', 'itineraries'] as const;
export type Category = (typeof categories)[number];

export const categoryLabels: Record<Lang, Record<Category, { title: string; blurb: string }>> = {
  en: {
    destinations: {
      title: 'Destinations',
      blurb: 'City and regional guides devoted to the texture of a place: its light, its rhythms, its streets.',
    },
    stays: {
      title: 'Stays & Retreats',
      blurb: 'Boutique hotels, working estancias, architect-designed lodges and quietly exceptional addresses.',
    },
    culture: {
      title: 'Culture & Art',
      blurb: 'Museums, galleries, heritage, artist studios, design, and the backstage of a culture.',
    },
    itineraries: {
      title: 'Bespoke Itineraries',
      blurb: 'Detailed routes, thematic journeys and slow, multi-day travel plans.',
    },
  },
  es: {
    destinations: {
      title: 'Destinos',
      blurb: 'Guías de ciudades y regiones centradas en la textura del lugar: su luz, sus ritmos, sus calles.',
    },
    stays: {
      title: 'Estadías y Refugios',
      blurb: 'Hoteles boutique, estancias de campo, lodges de autor y alojamientos verdaderamente excepcionales.',
    },
    culture: {
      title: 'Cultura y Arte',
      blurb: 'Museos, galerías, patrimonio, talleres de artistas, diseño y la trastienda cultural.',
    },
    itineraries: {
      title: 'Itinerarios de Autor',
      blurb: 'Recorridos detallados, rutas temáticas y planes de viaje slow de varios días.',
    },
  },
};

export const ui = {
  en: {
    'nav.journal': 'Journal',
    'nav.about': 'About',
    'nav.journeys': 'Curated Journeys',
    'nav.work': 'Work With Me',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.switch': 'Leer en español',
    'tagline': 'A journal of slow travel, culture and beautiful places — with bespoke journeys by a Fora Travel Advisor.',
    'home.kicker': 'Issue — South America & Beyond',
    'home.title': 'Travel, read slowly.',
    'home.lede':
      'Essays, field notes and itineraries on art, architecture and the boutique stays that make a journey memorable. Written with an analyst’s eye and a curator’s patience.',
    'home.cta.read': 'Read the Journal',
    'home.cta.plan': 'Plan a journey',
    'home.latest': 'Latest from the Journal',
    'home.sections': 'Read by section',
    'home.services.kicker': 'Curated Journeys',
    'home.services.title': 'Two ways to travel with intention',
    'home.inbound.title': 'South America, Curated',
    'home.inbound.text':
      'For international travelers seeking closed doors opened: private studio visits, design-led estancias and the Buenos Aires that rarely makes the guidebooks.',
    'home.outbound.title': 'Itineraries by Design',
    'home.outbound.text':
      'For Spanish-speaking travelers who want a route designed with aesthetic judgment — international or regional — and hours of research saved.',
    'home.discover': 'Discover',
    'journal.title': 'The Journal',
    'journal.lede': 'Chronicles, guides and editorial notes, organised by place and by experience.',
    'journal.all': 'All',
    'journal.empty': 'New stories are on their way.',
    'article.by': 'By',
    'article.read': 'min read',
    'article.back': 'Back to the Journal',
    'article.related': 'Continue reading',
    'article.cta.title': 'Would you like a journey like this one?',
    'article.cta.text': 'I design bespoke itineraries and book hotels with exclusive Fora benefits.',
    'cta.book': 'Book a Trip',
    'cta.contact': 'Start a conversation',
    'cta.fora': 'Book via my Fora profile',
    'plate.placeholder': 'Photograph forthcoming',
    'footer.about':
      'An editorial travel journal and bespoke travel consultancy. Independent advisor affiliated with Fora Travel.',
    'footer.explore': 'Explore',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'price.ask': 'Rate upon request',
    '404.title': 'This page has wandered off the map.',
    '404.back': 'Return home',
  },
  es: {
    'nav.journal': 'Journal',
    'nav.about': 'Sobre mí',
    'nav.journeys': 'Viajes Curados',
    'nav.work': 'Trabajemos juntos',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'nav.switch': 'Read in English',
    'tagline': 'Una revista de viajes slow, cultura y lugares bellos — con itinerarios a medida de una Fora Travel Advisor.',
    'home.kicker': 'Edición — Sudamérica y más allá',
    'home.title': 'Viajar, leer despacio.',
    'home.lede':
      'Ensayos, crónicas e itinerarios sobre arte, arquitectura y los hoteles boutique que vuelven memorable un viaje. Escritos con mirada analítica y paciencia de curadora.',
    'home.cta.read': 'Leer el Journal',
    'home.cta.plan': 'Planear un viaje',
    'home.latest': 'Lo último del Journal',
    'home.sections': 'Leer por sección',
    'home.services.kicker': 'Viajes Curados',
    'home.services.title': 'Dos formas de viajar con intención',
    'home.inbound.title': 'Sudamérica Curada',
    'home.inbound.text':
      'Para viajeros extranjeros que buscan puertas cerradas abiertas: visitas privadas a talleres, estancias de diseño y la Buenos Aires que rara vez aparece en las guías.',
    'home.outbound.title': 'Itinerarios a Medida',
    'home.outbound.text':
      'Para viajeros hispanoparlantes que quieren una ruta diseñada con criterio estético —internacional o regional— y ahorrarse horas de investigación.',
    'home.discover': 'Descubrir',
    'journal.title': 'El Journal',
    'journal.lede': 'Crónicas, guías y notas editoriales, organizadas por destino y por experiencia.',
    'journal.all': 'Todo',
    'journal.empty': 'Pronto habrá nuevas historias.',
    'article.by': 'Por',
    'article.read': 'min de lectura',
    'article.back': 'Volver al Journal',
    'article.related': 'Seguir leyendo',
    'article.cta.title': '¿Querés un viaje como este?',
    'article.cta.text': 'Diseño itinerarios a medida y reservo hoteles con beneficios exclusivos de Fora.',
    'cta.book': 'Reservar un viaje',
    'cta.contact': 'Empezar una conversación',
    'cta.fora': 'Reservar en mi perfil de Fora',
    'plate.placeholder': 'Fotografía próximamente',
    'footer.about':
      'Revista editorial de viajes y consultoría de viajes a medida. Asesora independiente afiliada a Fora Travel.',
    'footer.explore': 'Explorar',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'price.ask': 'Tarifa a consultar',
    '404.title': 'Esta página se salió del mapa.',
    '404.back': 'Volver al inicio',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

/** Construye una URL interna con prefijo de idioma: path('es', 'about') → /es/about/ */
/** Prefijo del sitio (vacío en Cloudflare; '/thecuratorsatlas' en GitHub Pages). */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function path(lang: Lang, ...parts: string[]): string {
  const rest = parts.filter(Boolean).join('/');
  return `${BASE}/${lang}/${rest ? rest + '/' : ''}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'es' ? 'es-AR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
