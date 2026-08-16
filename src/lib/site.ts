export const site = {
  name: "Innovanet",
  legalName: "Innovanet 2026, C.A.",
  domain: "innovannet.com",
  url: "https://innovannet.com",
  appUrl: "https://app.innovannet.com",
  tagline: "Tecnología que ordena la operación",
  description:
    "Innovanet: desarrollo de software, automatización, soporte TI, redes, servidores, consultoría y capacitaciones en Venezuela. Tecnología con acompañamiento real.",
  keywords: [
    "Innovanet",
    "servicios TI Venezuela",
    "automatización de procesos",
    "desarrollo de software Venezuela",
    "soporte técnico empresas",
    "consultoría tecnológica",
    "redes empresariales",
    "servidores cloud",
    "capacitaciones TI",
    "innovannet",
  ],
  whatsapp: {
    e164: "584145835937",
    display: "+58 414 5835937",
    url: "https://wa.me/584145835937",
  },
  email: "administracion@innovannet.com",
  product: {
    name: "Asistente virtual empresarial",
    summary:
      "Consulta en lenguaje natural sobre inventario, comercial, facturación, cartera, costos y reportes, según los módulos y permisos de cada empresa.",
  },
  automation: {
    title: "Automatización de procesos",
    summary:
      "Conectamos lo que ya usas para que deje de copiarse a mano. Menos espera para tus clientes y la información en un solo lugar.",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/producto", label: "Producto" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const trustPills = [
  "Alcance por escrito",
  "Tiempos de respuesta",
  "Soporte después del go-live",
] as const;

export const productModules = [
  {
    id: "asistente",
    featured: true,
    title: "Consulta en lenguaje natural",
    text: "El asistente es el punto de acceso a la operación. En una misma sesión se consultan inventario, clientes, ventas, pedidos, cotizaciones, cartera y reportes, de acuerdo con los permisos del usuario.",
    items: [
      "Consultas en lenguaje natural, además de los paneles",
      "Respuestas con datos de la empresa, no contenido genérico",
      "Vistas analíticas cuando se requiere mayor detalle",
    ],
  },
  {
    id: "comercial",
    featured: false,
    title: "Operación comercial",
    text: "Gestión unificada de clientes, ventas, pedidos y cotizaciones.",
    items: [
      "Clientes y ventas del período",
      "Pedidos y seguimiento de pendientes",
      "Historial de cotizaciones",
    ],
  },
  {
    id: "almacen",
    featured: false,
    title: "Operación de almacén",
    text: "Visibilidad de productos e inventario: disponibilidad, faltantes y precios.",
    items: [
      "Existencias y alertas de stock bajo",
      "Precios e inventario valorizado",
      "Carga inicial y reabastecimiento",
    ],
  },
  {
    id: "dinero",
    featured: false,
    title: "Finanzas y control",
    text: "Facturación, cuentas por cobrar, estructura de costos e indicadores para la toma de decisiones.",
    items: [
      "Facturación y cartera (cuentas por cobrar)",
      "Costos e indicadores de gestión",
      "Reportes y comparación de períodos",
    ],
  },
] as const;

export const automationSignals = [
  {
    n: "01",
    title: "Copias datos una y otra vez",
    text: "Si el Excel, el sistema y WhatsApp no se hablan, el equipo pierde horas.",
  },
  {
    n: "02",
    title: "Tus clientes esperan demasiado",
    text: "Cotizar o confirmar un pedido no debería depender de una persona ocupada.",
  },
  {
    n: "03",
    title: "La información está en todos lados",
    text: "Unificamos fuentes para que ventas y operación vean lo mismo.",
  },
] as const;

export const services = [
  {
    id: "software",
    title: "Desarrollo de software",
    short: "Aplicaciones alineadas a tu operación, no a una plantilla genérica.",
    detail:
      "Diseñamos e implementamos soluciones web y de gestión con foco en usabilidad, seguridad y escalabilidad.",
    includes: [
      "Alcance y prototipo acordados",
      "Desarrollo e integración con lo que ya usas",
      "Puesta en marcha y capacitación del equipo",
    ],
  },
  {
    id: "soporte",
    title: "Soporte TI",
    short: "Mesa de ayuda para que estaciones y servicios no detengan el día.",
    detail:
      "Atención preventiva y correctiva a estaciones, periféricos y servicios internos, con tiempos de respuesta definidos.",
    includes: [
      "Canal único de tickets / WhatsApp",
      "Preventivo + correctivo",
      "Reporte de incidentes y acuerdos de tiempo",
    ],
  },
  {
    id: "redes",
    title: "Redes e infraestructura",
    short: "Conectividad ordenada, segmentada y lista para crecer.",
    detail:
      "Cableado, switches, Wi‑Fi empresarial, segmentación y monitoreo para una red confiable.",
    includes: [
      "Diseño y documentación de la red",
      "Implementación y Wi‑Fi corporativo",
      "Monitoreo básico y endurecimiento",
    ],
  },
  {
    id: "servidores",
    title: "Servidores y cloud",
    short: "Infraestructura respaldada, endurecida y disponible.",
    detail:
      "Instalación, hardening, respaldos, virtualización y despliegues en VPS o cloud según tu operación.",
    includes: [
      "Dimensionamiento e instalación",
      "Respaldos y plan de recuperación",
      "Hardening y monitoreo",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoría",
    short: "Prioridad de inversión TI con criterio de negocio.",
    detail:
      "Diagnóstico, roadmap digital y acompañamiento para decidir con claridad qué hacer primero.",
    includes: [
      "Diagnóstico de operación y riesgos",
      "Roadmap priorizado",
      "Acompañamiento en la ejecución",
    ],
  },
  {
    id: "capacitaciones",
    title: "Capacitaciones",
    short: "Formación práctica para que el equipo adopte las herramientas.",
    detail:
      "Talleres a medida sobre herramientas, seguridad, buenas prácticas y adopción de sistemas.",
    includes: [
      "Programa según roles",
      "Sesiones prácticas, no solo teoría",
      "Material y seguimiento post-taller",
    ],
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Mapeamos operación, riesgos y lo que realmente duele al equipo.",
  },
  {
    n: "02",
    title: "Propuesta",
    text: "Alcance, plazos y entregables por escrito. Sin letra chica.",
  },
  {
    n: "03",
    title: "Implementación",
    text: "Ejecutamos con comunicación continua y control de calidad.",
  },
  {
    n: "04",
    title: "Soporte",
    text: "Acompañamos el día a día y evolucionamos el sistema contigo.",
  },
] as const;
