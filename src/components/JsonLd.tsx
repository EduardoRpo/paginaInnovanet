import { site } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logo-innovanet-transparent.png`,
    email: site.email,
    telephone: site.whatsapp.display,
    sameAs: [site.appUrl],
    areaServed: {
      "@type": "Country",
      name: "Venezuela",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.whatsapp.display,
        contactType: "sales",
        availableLanguage: ["Spanish"],
      },
      {
        "@type": "ContactPoint",
        email: site.email,
        contactType: "customer service",
        availableLanguage: ["Spanish"],
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "es-VE",
    publisher: {
      "@type": "Organization",
      name: site.legalName,
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    url: site.url,
    description: site.description,
    image: `${site.url}/logo-innovanet-transparent.png`,
    telephone: site.whatsapp.display,
    email: site.email,
    priceRange: "$$",
    areaServed: "VE",
    serviceType: [
      "Desarrollo de software",
      "Soporte TI",
      "Redes e infraestructura",
      "Servidores y cloud",
      "Consultoría tecnológica",
      "Capacitaciones TI",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
    </>
  );
}
