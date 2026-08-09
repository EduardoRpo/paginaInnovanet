import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Innovanet por WhatsApp o formulario para cotizar servicios de TI.",
};

export default function ContactoPage() {
  return <ContactoClient />;
}
