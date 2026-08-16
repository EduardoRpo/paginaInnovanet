import type { Metadata } from "next";
import { PhoneVideo } from "@/components/PhoneVideo";
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
        <div className="container media-split">
          <div className="about-prose">
            <p>
              Además de nuestros servicios de TI, ofrecemos una línea de producto
              propia: una plataforma para dar control al área comercial —
              clientes, pedidos, cotizaciones y reportes, con un asistente
              virtual que responde en lenguaje natural.
            </p>
            <p>
              Mira el video: es una demo real de búsqueda inteligente, ventas y
              consultas rápidas. Si quieres ver módulos a medida, agenda una
              conversación con el equipo.
            </p>
            <ul className="feature-pills">
              <li>Área comercial</li>
              <li>Asistente virtual</li>
              <li>Demo personalizada</li>
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
          <PhoneVideo
            src="/videos/plataforma-innovanet.mp4"
            poster="/videos/plataforma-innovanet.jpg"
            title={`Demo de ${site.product.name}`}
          />
        </div>
      </section>
    </>
  );
}
