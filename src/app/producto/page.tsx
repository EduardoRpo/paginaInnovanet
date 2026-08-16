import type { Metadata } from "next";
import { PhoneVideo } from "@/components/PhoneVideo";
import { productModules, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.product.name} | Software comercial`,
  description: site.product.summary,
  alternates: { canonical: "/producto" },
  openGraph: {
    title: `${site.product.name} | Innovanet`,
    description: site.product.summary,
    url: "/producto",
  },
};

export default function ProductoPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Producto</span>
          <h1>{site.product.name}</h1>
          <p>{site.product.summary}</p>
        </div>
      </header>

      <section className="section">
        <div className="container media-split">
          <div className="about-prose">
            <p>
              Es una plataforma propia para el área comercial: consultas de
              ventas, clientes y pedidos sin saltar entre archivos. El asistente
              entiende preguntas en español, no solo menús.
            </p>
            <p>
              El video es una demo real. Si encaja con tu operación, agendamos
              una sesión con tus datos y módulos.
            </p>
            <div className="btn-row" style={{ marginTop: "0.5rem" }}>
              <a
                className="btn btn--primary"
                href={`${site.whatsapp.url}?text=${encodeURIComponent(
                  `Hola Innovanet, quiero una demo de ${site.product.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar demo
              </a>
              <a
                className="btn btn--ghost"
                href={site.appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar si ya eres cliente
              </a>
            </div>
          </div>
          <PhoneVideo
            src="/videos/plataforma-innovanet.mp4"
            poster="/videos/plataforma-innovanet.jpg"
            title={`Demo de ${site.product.name}`}
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Módulos</span>
            <h2>Lo que ves en la demo</h2>
            <p>Capacidades concretas de la plataforma, no promesas genéricas.</p>
          </div>
          <div className="module-grid">
            {productModules.map((mod) => (
              <article key={mod.title} className="module-card">
                <h3>{mod.title}</h3>
                <p>{mod.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
