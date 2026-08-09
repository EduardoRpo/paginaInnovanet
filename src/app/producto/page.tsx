import type { Metadata } from "next";
import { ProductShowcase } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.product.name} | Software empresarial`,
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
        <div className="container contact-grid">
          <div className="about-prose">
            <p>
              Además de nuestros servicios de TI, ofrecemos una línea de producto
              propia: una plataforma pensada para dar control, claridad y
              acompañamiento a la operación de tu negocio.
            </p>
            <p>
              Si quieres ver una demo, conocer módulos o evaluar si encaja con tu
              empresa, agenda una conversación con nuestro equipo.
            </p>
            <ul className="feature-pills">
              <li>Demo personalizada</li>
              <li>Implementación guiada</li>
              <li>Soporte continuo</li>
            </ul>
            <div className="btn-row" style={{ marginTop: "0.5rem" }}>
              <a
                className="btn btn--primary"
                href={site.appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar a la plataforma
              </a>
              <a
                className="btn btn--ghost"
                href={`${site.whatsapp.url}?text=${encodeURIComponent(
                  `Hola Innovanet, me interesa conocer más sobre ${site.product.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar demo por WhatsApp
              </a>
            </div>
          </div>
          <ProductShowcase />
        </div>
      </section>
    </>
  );
}
