/**
 * Configuración central del sitio.
 * Todo lo que tengas que personalizar (nombre, links, formulario, tarifas) está acá.
 */
export const SITE = {
  name: "The Curator's Atlas",
  /** Tu nombre tal como querés que aparezca en "About" y en la firma de los artículos. */
  founderName: '[Tu nombre]',
  /** Email de contacto público. */
  email: 'hola@tudominio.com',
  instagram: 'https://instagram.com/',
  /** Tu perfil de asesora en Fora (ej. https://www.foratravel.com/advisor/tu-usuario). */
  foraProfileUrl: 'https://www.foratravel.com/',
  /**
   * Endpoint del formulario "Work With Me".
   * Opción simple y gratuita: crear un formulario en https://formspree.io y pegar acá su URL
   * (ej. https://formspree.io/f/abcdwxyz). Si queda vacío, el formulario abre un email prellenado.
   */
  formEndpoint: '',
};

/**
 * Tarifas de los formatos de consultoría (outbound / regional).
 * Dejá `null` para mostrar "Tarifa a consultar".
 */
export const PRICES: Record<'express' | 'essential' | 'grand', string | null> = {
  express: null, // ej. 'USD 60'
  essential: null, // ej. 'USD 180'
  grand: null, // ej. 'Desde USD 350'
};
