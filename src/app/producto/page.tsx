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
              No se trata de aplicaciones independientes. Es un asistente
              virtual con áreas de trabajo que se habilitan por empresa y por
              usuario: comercial, almacén, facturación, cartera, costos y
              reportes.
            </p>
            <p>
              En la demostración se consulta en lenguaje natural y, en la misma
              sesión, se obtienen inventario, clientes, ventas, pedidos,
              cotizaciones e indicadores. El video es una muestra; la
              implementación se configura con la información de cada cliente.
            </p>
            <div className="btn-row" style={{ marginTop: "0.5rem" }}>
              <a
                className="btn btn--primary"
                href={`${site.whatsapp.url}?text=${encodeURIComponent(
                  `Hola Innovanet, deseo agendar una demostración del ${site.product.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar demostración
              </a>
              <a
                className="btn btn--ghost"
                href={site.appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acceder a la plataforma
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
            <span className="eyebrow">Capacidades</span>
            <h2>Un canal de consulta para toda la operación</h2>
            <p>
              El asistente es la interfaz. Comercial, almacén y finanzas se
              consultan en el mismo entorno, según los módulos habilitados para
              cada empresa.
            </p>
          </div>
          <div className="module-grid">
            {productModules.map((mod) => (
              <article
                key={mod.id}
                className={`module-card${mod.featured ? " module-card--featured" : ""}`}
              >
                {mod.featured ? (
                  <span className="eyebrow">Acceso</span>
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
