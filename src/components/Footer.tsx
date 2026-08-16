import Image from "next/image";
import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link href="/" className="brand" aria-label="Innovanet inicio">
            <Image
              src="/logo-innovanet-transparent.png"
              alt="Innovanet"
              width={220}
              height={70}
              className="brand__logo"
            />
          </Link>
          <p>
            {site.legalName}. Soluciones de TI, software e infraestructura para
            empresas que quieren avanzar con orden y acompañamiento.
          </p>
        </div>

        <div>
          <h3>Servicios</h3>
          <ul>
            <li>
              <Link href="/servicios#automatizacion">Automatización</Link>
            </li>
            {services.slice(0, 4).map((s) => (
              <li key={s.id}>
                <Link href={`/servicios#${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Empresa</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a
                href={site.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {site.whatsapp.display}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {site.legalName}
        </span>
        <span>{site.domain}</span>
      </div>
    </footer>
  );
}
