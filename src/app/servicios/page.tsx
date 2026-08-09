import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIcon } from "@/components/Icons";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios de TI: software, redes, servidores y consultoría",
  description:
    "Conoce los servicios de Innovanet: desarrollo de software, soporte TI, redes, servidores y cloud, consultoría tecnológica y capacitaciones en Venezuela.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de TI | Innovanet",
    description:
      "Software, soporte TI, redes, servidores, consultoría y capacitaciones para empresas.",
    url: "/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Servicios</span>
          <h1>Soluciones de TI de punta a punta</h1>
          <p>
            Acompañamos a tu empresa en software, infraestructura y operación
            diaria — con el mismo criterio técnico y de negocio.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container service-detail">
          {services.map((service) => (
            <article key={service.id} id={service.id}>
              <ServiceIcon id={service.id} />
              <h2>{service.title}</h2>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="cta-block">
            <span className="eyebrow">Cotización</span>
            <h2>¿Qué servicio necesitas hoy?</h2>
            <p>Escríbenos y te orientamos sin compromiso.</p>
            <div className="btn-row">
              <a
                className="btn btn--primary"
                href={site.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar por WhatsApp
              </a>
              <Link className="btn btn--ghost" href="/contacto">
                Formulario de contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
