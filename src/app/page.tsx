import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NetworkSvg, ServiceIcon } from "@/components/Icons";
import { PhoneVideo } from "@/components/PhoneVideo";
import { Reveal } from "@/components/Reveal";
import {
  processSteps,
  productModules,
  services,
  site,
  trustPills,
} from "@/lib/site";

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
              Software, automatización, redes y soporte para empresas que
              exigen alcance claro y resultados — no improvisación.
            </p>
            <ul className="trust-pills">
              {trustPills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="btn-row">
              <a
                className="btn btn--primary"
                href={site.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar conversación
              </a>
              <Link className="btn btn--ghost" href="/servicios">
                Cómo trabajamos
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
              <h2>Un socio para software, infraestructura y operación</h2>
              <p>
                Automatización, desarrollo, redes, servidores, soporte,
                consultoría y formación — con el mismo criterio técnico.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <Link href="/servicios#automatizacion" className="featured-service">
              <div>
                <span className="eyebrow">Destacado</span>
                <h3>{site.automation.title}</h3>
                <p>{site.automation.summary}</p>
              </div>
              <span className="featured-service__go">Ver cómo lo hacemos →</span>
            </Link>
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
                {productModules.slice(0, 4).map((mod) => (
                  <li key={mod.title}>{mod.title}</li>
                ))}
              </ul>
              <Link className="btn btn--primary" href="/producto">
                Ver demo y módulos
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <PhoneVideo
              src="/videos/plataforma-innovanet.mp4"
              poster="/videos/plataforma-innovanet.jpg"
              title={`Demo de ${site.product.name}`}
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Método</span>
              <h2>Cómo trabajamos</h2>
              <p>De diagnóstico a soporte, con entregables por escrito.</p>
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
              <h2>Cuéntanos el cuello de botella</h2>
              <p>
                Respondemos por WhatsApp, armamos un diagnóstico y una propuesta
                con alcance definido.
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
                  Formulario de contacto
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
