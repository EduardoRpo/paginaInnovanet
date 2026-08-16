import type { Metadata } from "next";
import Link from "next/link";
import { PhoneVideo } from "@/components/PhoneVideo";
import { ServiceIcon } from "@/components/Icons";
import { automationSignals, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios de TI: automatización, software, redes y consultoría",
  description:
    "Automatización de procesos, desarrollo de software, soporte TI, redes, servidores, consultoría y capacitaciones para empresas en Venezuela.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de TI | Innovanet",
    description:
      "Automatización, software, soporte TI, redes, servidores, consultoría y capacitaciones.",
    url: "/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Servicios</span>
          <h1>TI de punta a punta, con entregables claros</h1>
          <p>
            Automatización, software e infraestructura — mismo criterio técnico
            y de negocio, de diagnóstico a soporte.
          </p>
        </div>
      </header>

      <section className="section" id="automatizacion">
        <div className="container media-split">
          <div className="about-prose">
            <span className="eyebrow">Automatización</span>
            <h2>{site.automation.title}</h2>
            <p>{site.automation.summary}</p>
            <ol className="signal-list">
              {automationSignals.map((signal) => (
                <li key={signal.n}>
                  <span>{signal.n}</span>
                  <div>
                    <strong>{signal.title}</strong>
                    <p>{signal.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="btn-row" style={{ marginTop: "1rem" }}>
              <a
                className="btn btn--primary"
                href={`${site.whatsapp.url}?text=${encodeURIComponent(
                  "Hola Innovanet, me interesa automatizar procesos en mi empresa."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
          <PhoneVideo
            src="/videos/automatizacion-innovanet.mp4"
            poster="/videos/automatizacion-innovanet.jpg"
            title="Video: automatización de procesos Innovanet"
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container service-detail">
          {services.map((service) => (
            <article key={service.id} id={service.id}>
              <ServiceIcon id={service.id} />
              <h2>{service.title}</h2>
              <p>{service.detail}</p>
              <p className="service-detail__label">Qué incluye</p>
              <ul className="include-list">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-block">
            <span className="eyebrow">Cotización</span>
            <h2>Dinos qué se está trabando hoy</h2>
            <p>
              Te orientamos con un alcance inicial, sin compromiso de compra.
            </p>
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
