import type { Metadata } from "next";
import { PhoneVideo } from "@/components/PhoneVideo";
import { productModules, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.product.name} | Operación en lenguaje natural`,
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
              No son cinco productos sueltos. Es un asistente y áreas de
              trabajo que se activan por empresa y por usuario: comercial,
              almacén, facturación, cartera, costos y reportes.
            </p>
            <p>
              En el demo preguntas en español y, en la misma conversación,
              aparecen stock, clientes, ventas, pedidos, cotizaciones y
              números para decidir. El video es un recorte; la sesión completa
              se arma con tus datos.
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
          <div className="section-head section-head--wide">
            <span className="eyebrow">En el demo</span>
            <h2>Una conversación, toda la operación</h2>
            <p>
              El asistente es la interfaz. Lo demás son capacidades que se ven
              juntas, según lo que tenga activa la empresa — no una tarjeta por
              cada módulo.
            </p>
          </div>
          <div className="module-grid">
            {productModules.map((mod) => (
              <article
                key={mod.id}
                className={`module-card${mod.featured ? " module-card--featured" : ""}`}
              >
                {mod.featured ? (
                  <span className="eyebrow">Interfaz</span>
                ) : null}
                <h3>{mod.title}</h3>
                <p>{mod.text}</p>
                <ul className="include-list">
                  {mod.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
