import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NetworkSvg, ProductShowcase, ServiceIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__aurora hero__aurora--a" />
          <div className="hero__aurora hero__aurora--b" />
          <div className="hero__mesh" />
          <div className="hero__grid" />
          <NetworkSvg className="hero__network" />
          <div className="hero__hex" />
        </div>

        <div className="container hero__shell">
          <div className="hero__content">
            <Image
              src="/logo-innovanet-transparent.png"
              alt="Innovanet"
              width={760}
              height={240}
              className="hero__logo"
              priority
            />
            <h1>{site.tagline}</h1>
            <p className="hero__lead">
              Software, infraestructura y acompañamiento experto para empresas
              que exigen resultados — no improvisación.
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
              <Link className="btn btn--ghost" href="/servicios">
                Ver servicios
              </Link>
            </div>
          </div>
        </div>

        <div className="hero__fade" aria-hidden="true" />
      </section>

      <section className="section section--services" id="servicios">
        <div className="container">
          <Reveal>
            <div className="section-head section-head--wide">
              <span className="eyebrow">Servicios</span>
              <h2>Tecnología integral, con criterio de negocio</h2>
              <p>
                Un solo socio para software, redes, servidores, soporte,
                consultoría y formación. Diseñado para equipos exigentes.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 70}>
                <Link href={`/servicios#${service.id}`} className="service-panel">
                  <div className="service-panel__top">
                    <ServiceIcon id={service.id} />
                    <span className="service-panel__arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="product-band">
        <div className="container product-band__inner">
          <Reveal>
            <div>
              <span className="eyebrow">Producto</span>
              <h2>{site.product.name}</h2>
              <p>{site.product.summary}</p>
              <ul className="feature-pills">
                <li>Operación clara</li>
                <li>Acompañamiento continuo</li>
                <li>Hecho para crecer</li>
              </ul>
              <Link className="btn btn--primary" href="/producto">
                Conocer app
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ProductShowcase />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Método</span>
              <h2>Cómo trabajamos</h2>
              <p>Un proceso claro, de diagnóstico a soporte, sin sorpresas.</p>
            </div>
          </Reveal>

          <div className="process">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <article className="process-step">
                  <span className="process-step__n">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-block">
              <span className="eyebrow">Siguiente paso</span>
              <h2>Hablemos de tu próximo proyecto</h2>
              <p>
                Cuéntanos qué necesitas. Te respondemos por WhatsApp y armamos
                una propuesta a tu medida.
              </p>
              <div className="btn-row">
                <a
                  className="btn btn--primary"
                  href={site.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {site.whatsapp.display}
                </a>
                <Link className="btn btn--ghost" href="/contacto">
                  Ir a contacto
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
