import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros | Empresa de tecnología en Venezuela",
  description: `Conoce a ${site.legalName}: socio tecnológico para desarrollo de software, infraestructura y soporte TI con acompañamiento real.`,
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: `Nosotros | ${site.name}`,
    description: `Conoce a ${site.legalName} y nuestro enfoque en tecnología con resultados.`,
    url: "/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Nosotros</span>
          <h1>Innovanet</h1>
          <p>
            {site.legalName}. Socio tecnológico para empresas que necesitan
            resultados, no solo herramientas.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-prose">
            <p>
              En Innovanet combinamos desarrollo de software, infraestructura,
              soporte y consultoría. No somos solo “la gente del sistema”:
              ayudamos a que la tecnología funcione de verdad en el día a día.
            </p>
            <p>
              Trabajamos con un enfoque cercano: escuchamos, diagnosticamos,
              proponemos con claridad y acompañamos la implementación hasta que
              el equipo opera con confianza.
            </p>
          </div>

          <div className="values">
            <article>
              <h3>Claridad</h3>
              <p>
                Propuestas entendibles, alcances definidos y comunicación
                directa.
              </p>
            </article>
            <article>
              <h3>Criterio técnico</h3>
              <p>
                Decisiones con base en seguridad, estabilidad y crecimiento
                real.
              </p>
            </article>
            <article>
              <h3>Acompañamiento</h3>
              <p>
                Estamos después del go-live: soporte, mejora continua y
                capacitación.
              </p>
            </article>
          </div>

          <div className="btn-row" style={{ marginTop: "2.5rem" }}>
            <a
              className="btn btn--primary"
              href={site.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar con el equipo
            </a>
            <Link className="btn btn--ghost" href="/contacto">
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
