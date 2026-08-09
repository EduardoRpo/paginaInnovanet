"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export default function ContactoClient() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [servicio, setServicio] = useState("Consulta general");
  const [mensaje, setMensaje] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `Hola Innovanet, soy ${nombre || "un interesado"}.`,
      empresa ? `Empresa: ${empresa}.` : "",
      `Tema: ${servicio}.`,
      mensaje ? `Mensaje: ${mensaje}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    window.open(
      `${site.whatsapp.url}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Contacto</span>
          <h1>Cuéntanos qué necesitas</h1>
          <p>
            Completa el formulario y te abrimos WhatsApp con el mensaje listo,
            o escríbenos directo al {site.whatsapp.display}.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <div className="contact-meta">
              <div>
                <strong>WhatsApp</strong>
                <a
                  href={site.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.whatsapp.display}
                </a>
              </div>
              <div>
                <strong>Correo</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>{site.legalName}</span>
              </div>
            </div>
            <p className="form-note">
              Horario habitual de respuesta: días hábiles. Para urgencias de
              soporte, indícalo en el mensaje.
            </p>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <label>
              Nombre
              <input
                name="nombre"
                autoComplete="name"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </label>
            <label>
              Empresa
              <input
                name="empresa"
                autoComplete="organization"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </label>
            <label>
              Interés
              <select
                name="servicio"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
              >
                <option>Consulta general</option>
                <option>Desarrollo de software</option>
                <option>Soporte TI</option>
                <option>Redes e infraestructura</option>
                <option>Servidores y cloud</option>
                <option>Consultoría</option>
                <option>Capacitaciones</option>
                <option>{site.product.name}</option>
              </select>
            </label>
            <label>
              Mensaje
              <textarea
                name="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Cuéntanos brevemente tu necesidad"
                required
              />
            </label>
            <button className="btn btn--primary" type="submit">
              Enviar por WhatsApp
            </button>
            <p className="form-note">
              Al enviar se abre WhatsApp con tu mensaje prellenado. No
              almacenamos el formulario en un servidor.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
