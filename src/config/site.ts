// ============================================================
// CONFIGURACIÓN CENTRAL DEL SITIO — editá aquí sin tocar el markup
// ============================================================

export const WHATSAPP_NUMBER = "5492216900406"; // sin + ni espacios
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola! Me interesa crear la web de mi negocio con WEBPMARG."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const SITE_NAME = "WEBPMARG";
export const SITE_DESCRIPTION =
  "Páginas web simples, rápidas y a precio justo para comercios chicos y medianos. Entrega en 7 a 14 días.";
export const SITE_URL = "https://www.webpmarg.com.ar";

export const HIGHLIGHTS = [
  "Lista en 7 a 14 días",
  "Pensada para el celular",
  "Soporte después de publicar",
];

export const SERVICES = [
  {
    icon: "layout",
    title: "Sitio web",
    description: "Qué hacés, dónde estás y cómo contactarte. Claro y al grano.",
  },
  {
    icon: "shop",
    title: "Tienda online",
    description: "Vendé con carrito y Mercado Pago, y manejá tu stock.",
  },
  {
    icon: "search",
    title: "Aparecer en Google",
    description: "Optimizamos tu web para que te encuentren cuando te buscan.",
  },
  {
    icon: "support",
    title: "Soporte",
    description: "Cambios y ayuda después del lanzamiento. No te dejamos solo.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Charlamos",
    description: "Nos escribís y entendemos qué necesita tu negocio. Sin compromiso.",
  },
  {
    title: "Diseñamos",
    description: "Te mostramos una propuesta y la ajustamos hasta que te guste.",
  },
  {
    title: "Publicamos",
    description: "Tu web queda online y te acompañamos con el soporte.",
  },
];

export const PLANS = [
  {
    name: "Básico",
    description: "Para empezar a estar online.",
    highlight: false,
    features: [
      "Hasta 5 secciones",
      "Botón de WhatsApp y formulario",
      "SEO básico",
      "Entrega en 7 días",
      "1 mes de soporte",
    ],
  },
  {
    name: "Profesional",
    description: "Para destacar y conseguir más clientes.",
    highlight: true,
    features: [
      "Hasta 10 secciones",
      "Diseño personalizado",
      "SEO avanzado + Google Analytics",
      "Entrega en 10 días",
      "3 meses de soporte",
    ],
  },
  {
    name: "Tienda",
    description: "Para vender online sin límites.",
    highlight: false,
    features: [
      "Todo lo del plan Profesional",
      "Tienda con Mercado Pago",
      "Panel para gestionar stock y pedidos",
      "Entrega en 14 días",
      "6 meses de soporte",
    ],
  },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/webpmarg",
  facebook: "https://facebook.com/webpmarg",
  linkedin: "https://linkedin.com/company/webpmarg",
};

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Planes", href: "#planes" },
];
