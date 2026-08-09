import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | Cotiza servicios de TI",
  description:
    "Contacta a Innovanet por WhatsApp o correo para cotizar desarrollo de software, soporte TI, redes, servidores y consultoría.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | Innovanet",
    description:
      "Habla con nuestro equipo y cotiza servicios de TI para tu empresa.",
    url: "/contacto",
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
