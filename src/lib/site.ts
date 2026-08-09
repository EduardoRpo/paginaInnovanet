export const site = {
  name: "Innovanet",
  legalName: "Innovanet 2026, C.A.",
  domain: "innovannet.com",
  url: "https://innovannet.com",
  appUrl: "https://app.innovannet.com",
  tagline: "Tu socio tecnológico para crecer",
  description:
    "Innovanet: desarrollo de software, soporte TI, redes, servidores, consultoría y capacitaciones en Venezuela. Tecnología con acompañamiento real.",
  keywords: [
    "Innovanet",
    "servicios TI Venezuela",
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
    name: "Plataforma Innovanet",
    summary:
      "Nuestra aplicación para organizar y potenciar la operación de tu negocio con herramientas claras y acompañamiento experto.",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/producto", label: "Producto" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const services = [
  {
    id: "software",
    title: "Desarrollo de software",
    short: "Aplicaciones y sistemas a la medida de tu operación.",
    detail:
      "Diseñamos e implementamos soluciones web y de gestión alineadas a tus procesos, con foco en usabilidad, seguridad y escalabilidad.",
  },
  {
    id: "soporte",
    title: "Soporte TI",
    short: "Acompañamiento técnico para que tu equipo no se detenga.",
    detail:
      "Atención preventiva y correctiva a estaciones de trabajo, periféricos y servicios internos, con tiempos de respuesta definidos.",
  },
  {
    id: "redes",
    title: "Redes e infraestructura",
    short: "Conectividad estable, ordenada y preparada para crecer.",
    detail:
      "Cableado, configuración de switches, Wi‑Fi empresarial, segmentación y monitoreo para una red confiable.",
  },
  {
    id: "servidores",
    title: "Servidores y cloud",
    short: "Infraestructura segura, respaldada y disponible.",
    detail:
      "Instalación, hardening, respaldos, virtualización y despliegues en VPS o cloud según la necesidad de tu empresa.",
  },
  {
    id: "consultoria",
    title: "Consultoría",
    short: "Estrategia tecnológica con criterio de negocio.",
    detail:
      "Diagnóstico, roadmap digital y acompañamiento para decidir inversiones de TI con claridad y prioridad.",
  },
  {
    id: "capacitaciones",
    title: "Capacitaciones",
    short: "Formación práctica para tu equipo.",
    detail:
      "Talleres y sesiones a medida sobre herramientas, seguridad, buenas prácticas y adopción de sistemas.",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Entendemos tu operación, riesgos y oportunidades.",
  },
  {
    n: "02",
    title: "Propuesta",
    text: "Definimos alcance, plazos y entregables claros.",
  },
  {
    n: "03",
    title: "Implementación",
    text: "Ejecutamos con comunicación continua y control de calidad.",
  },
  {
    n: "04",
    title: "Soporte",
    text: "Acompañamos la operación y evolucionamos contigo.",
  },
] as const;
