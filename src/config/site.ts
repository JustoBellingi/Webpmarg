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
  "Páginas web simples, rápidas y a precio justo para comercios chicos y medianos.";
export const SITE_URL = "https://www.webpmarg.com.ar";

export const SERVICES = [
  {
    icon: "layout",
    title: "Sitio web",
    description: "Qué hacés, dónde estás y cómo contactarte.",
  },
  {
    icon: "shop",
    title: "Tienda online",
    description: "Tus productos a la vista para vender las 24 horas.",
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

// `image` es una captura en /public/trabajos. Si no hay, se muestra una portada con `colors`
export const PROJECTS = [
  {
    name: "Hotel Nora",
    category: "Hotelería",
    url: "https://www.hotelnora.com.ar/",
    image: "/trabajos/hotel-nora.jpg",
    colors: "from-amber-500 to-rose-600",
  },
  {
    name: "La Andyna",
    category: "Turismo",
    url: "https://andyna-cabana.vercel.app/",
    image: "/trabajos/andyna.jpg",
    colors: "from-emerald-500 to-teal-700",
  },
  {
    name: "OPC",
    category: "Industria",
    url: "https://www.opcweb.com.ar/",
    image: "/trabajos/opc.jpg",
    colors: "from-red-500 to-zinc-800",
  },
];

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
    description: "Tu web queda online, lista para recibir clientes.",
  },
  {
    title: "Concretamos el pago",
    description: "Con todo aprobado, se concreta el pago y la web es tuya.",
  },
];

export const PLANS = [
  {
    name: "Básico",
    description: "Para empezar a estar online.",
    highlight: false,
    features: ["Hasta 5 secciones", "Botón de WhatsApp y formulario", "SEO básico"],
  },
  {
    name: "Profesional",
    description: "Para destacar y conseguir más clientes.",
    highlight: true,
    features: ["Hasta 10 secciones", "Diseño personalizado", "SEO avanzado + Google Analytics"],
  },
];

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Planes", href: "#planes" },
];
