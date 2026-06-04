// ============================================================
// CONFIGURACIÓN CENTRAL DEL SITIO — editá aquí sin tocar el markup
// ============================================================

export const WHATSAPP_NUMBER = "5492210000000"; // sin + ni espacios
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola! Me interesa crear la web de mi negocio con WEBPMARG."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const SITE_NAME = "WEBPMARG";
export const SITE_TAGLINE = "Llevamos tu comercio al mundo digital";
export const SITE_DESCRIPTION =
  "Creamos páginas web profesionales para comercios chicos y medianos que quieren tener presencia online. Diseño moderno, entrega rápida y precios accesibles.";
export const SITE_URL = "https://webpmarg.com"; // actualizá con tu dominio real

export const SERVICES = [
  {
    icon: "Layout",
    title: "Diseño Web a Medida",
    description:
      "Creamos tu sitio desde cero con una identidad única que representa a tu comercio y atrae clientes.",
  },
  {
    icon: "ShoppingBag",
    title: "Tiendas Online",
    description:
      "Vendé tus productos 24/7 con una tienda virtual fácil de gestionar, segura y lista para cobrar.",
  },
  {
    icon: "Search",
    title: "Optimización SEO",
    description:
      "Posicionamos tu negocio en Google para que los clientes te encuentren antes que a la competencia.",
  },
  {
    icon: "Smartphone",
    title: "Diseño Responsive",
    description:
      "Tu web se ve perfecta en celulares, tablets y computadoras. El 70% del tráfico es mobile.",
  },
  {
    icon: "Zap",
    title: "Rendimiento y Velocidad",
    description:
      "Sitios ultrarrápidos que cargan en menos de 2 segundos. La velocidad retiene visitantes y mejora el SEO.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Soporte y Mantenimiento",
    description:
      "No te dejamos solo. Te acompañamos después del lanzamiento con soporte continuo y actualizaciones.",
  },
];

export const WHY_US = [
  {
    icon: "DollarSign",
    title: "Precios Accesibles",
    description:
      "Pensados especialmente para comercios chicos y medianos. Sin letras pequeñas ni costos ocultos.",
  },
  {
    icon: "Rocket",
    title: "Entrega Rápida",
    description:
      "Tu web lista en 7-14 días. Procesos ágiles sin burocracia para que empieces a vender cuanto antes.",
  },
  {
    icon: "Sparkles",
    title: "Diseño Moderno",
    description:
      "Nada de plantillas genéricas. Cada proyecto es único, con estética actual que genera confianza.",
  },
  {
    icon: "Users",
    title: "Acompañamiento Personalizado",
    description:
      "Trabajamos codo a codo con vos. Entendemos tu negocio para crear una web que realmente venda.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consulta Inicial",
    description:
      "Nos contactás por WhatsApp, te escuchamos y entendemos qué necesita tu negocio. Sin compromiso.",
  },
  {
    number: "02",
    title: "Propuesta y Diseño",
    description:
      "Preparamos una propuesta personalizada con el diseño visual de tu web para que la apruebes.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos tu sitio con las mejores tecnologías, optimizado para velocidad, SEO y mobile.",
  },
  {
    number: "04",
    title: "Revisión y Ajustes",
    description:
      "Te mostramos el resultado y realizamos los ajustes que necesites hasta que estés 100% conforme.",
  },
  {
    number: "05",
    title: "Lanzamiento",
    description:
      "Publicamos tu web y te entregamos todo listo para que empieces a atraer clientes online.",
  },
];

export const PORTFOLIO_ITEMS = [
  {
    title: "Panadería La Tradición",
    category: "Sitio Vitrina",
    description: "Web institucional con menú y galería de productos.",
    gradient: "from-orange-500 to-rose-600",
    emoji: "🍞",
  },
  {
    title: "Ferretería Central",
    category: "Catálogo Online",
    description: "Catálogo digital con buscador y contacto directo.",
    gradient: "from-blue-500 to-cyan-600",
    emoji: "🔧",
  },
  {
    title: "Ropa Style Boutique",
    category: "Tienda Online",
    description: "E-commerce con carrito, Mercado Pago y stock.",
    gradient: "from-purple-500 to-pink-600",
    emoji: "👗",
  },
  {
    title: "Consultorio Dr. García",
    category: "Sitio Profesional",
    description: "Agenda de turnos online y presentación de servicios.",
    gradient: "from-emerald-500 to-teal-600",
    emoji: "🏥",
  },
  {
    title: "Gym Power Fitness",
    category: "Landing Page",
    description: "Página de captación con planes y formulario de inscripción.",
    gradient: "from-yellow-500 to-orange-600",
    emoji: "💪",
  },
  {
    title: "Inmobiliaria Sur",
    category: "Portal de Propiedades",
    description: "Listado de propiedades con filtros y mapa interactivo.",
    gradient: "from-indigo-500 to-purple-600",
    emoji: "🏠",
  },
];

export const PLANS = [
  {
    name: "Básico",
    description: "Ideal para comercios que quieren empezar a tener presencia online.",
    highlight: false,
    features: [
      "Hasta 5 secciones",
      "Diseño responsive (mobile)",
      "Formulario de contacto",
      "Integración con WhatsApp",
      "Optimización SEO básica",
      "Entrega en 7 días",
      "1 mes de soporte",
    ],
  },
  {
    name: "Profesional",
    description: "Para negocios que quieren destacar y generar más clientes.",
    highlight: true,
    features: [
      "Hasta 10 secciones",
      "Diseño personalizado premium",
      "Blog o novedades",
      "SEO avanzado + Google Analytics",
      "Integración con redes sociales",
      "Galería o portfolio de productos",
      "Entrega en 10 días",
      "3 meses de soporte",
    ],
  },
  {
    name: "Premium",
    description: "Solución completa con tienda online para vender sin límites.",
    highlight: false,
    features: [
      "Todo lo del plan Profesional",
      "Tienda online completa",
      "Integración Mercado Pago / Stripe",
      "Panel de administración",
      "Gestión de stock y pedidos",
      "Capacitación para gestionar tu web",
      "Entrega en 14 días",
      "6 meses de soporte",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "María González",
    business: "Ropa Style Boutique",
    avatar: "MG",
    text: "Antes solo vendía por Instagram y era un caos. Con mi tienda online ahora tengo todo organizado y las ventas crecieron un 40% en el primer mes. ¡Los recomiendo sin dudarlo!",
    rating: 5,
  },
  {
    name: "Carlos Fernández",
    business: "Ferretería Central",
    avatar: "CF",
    text: "Pensé que tener una web iba a ser caro y complicado, pero WEBPMARG lo hizo súper fácil. Ahora mis clientes me encuentran en Google y recibo consultas todos los días.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    business: "Consultorio Odontológico",
    avatar: "LM",
    text: "El sistema de turnos online me cambió la vida. Mis pacientes pueden sacar turno a cualquier hora y yo ahorro un montón de tiempo en llamadas. Excelente servicio.",
    rating: 5,
  },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/webpmarg",
  facebook: "https://facebook.com/webpmarg",
  linkedin: "https://linkedin.com/company/webpmarg",
};

export const NAV_LINKS = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué elegirnos", href: "#por-que" },
  { label: "Proceso", href: "#proceso" },
  { label: "Planes", href: "#planes" },
];
