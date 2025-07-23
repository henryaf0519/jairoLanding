import React, { useState } from "react";
import {
  FaWhatsapp,
  FaCalendarAlt,
  FaCalendarCheck,
  FaDatabase,
  FaCheckCircle,
  FaBrain,
  FaHospital,
  FaUserTie,
  FaStore,
  FaLightbulb,
  FaCreditCard,
  FaBell,
  FaChartLine,
  FaClock,
  FaDollarSign,
  FaHandshake,
  FaFunnelDollar,
  FaShieldAlt,
} from "react-icons/fa";
import HeaderLanding from "../components/headerLanding";

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition">
      <div className="text-red-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{children}</p>
    </div>
  );
}

const AgentesIA: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Define tus Necesidades",
      description:
        "Cuéntanos qué procesos quieres automatizar y qué objetivos buscas alcanzar.",
    },
    {
      id: 2,
      title: "Configuración Personalizada",
      description:
        "Diseñamos y entrenamos tu agente IA a la medida, adaptándolo a tu marca y necesidades.",
    },
    {
      id: 3,
      title: "Implementación Rápida",
      description:
        "Integramos tu agente en tu sitio web y WhatsApp en cuestión de días.",
    },
    {
      id: 4,
      title: "Resultados Instantáneos",
      description:
        "Observa cómo Orvex transforma tu operación y la experiencia de tus clientes.",
    },
  ];
  const benefits = [
    {
      id: 1,
      icon: (
        <FaChartLine className="text-primaryColor text-3xl flex-shrink-0 mt-1" />
      ),
      title: "Aumento de la Eficiencia",
      description:
        "Libera a tu equipo de tareas repetitivas, permitiéndoles enfocarse en actividades de mayor valor.",
    },
    {
      id: 2,
      icon: (
        <FaClock className="text-primaryColor text-3xl flex-shrink-0 mt-1" />
      ),
      title: "Disponibilidad Continua",
      description:
        "Ofrece atención al cliente 24/7, sin interrupciones, mejorando la satisfacción.",
    },
    {
      id: 3,
      icon: (
        <FaDollarSign className="text-primaryColor text-3xl flex-shrink-0 mt-1" />
      ),
      title: "Reducción de Costos",
      description:
        "Minimiza errores y optimiza la asignación de recursos, impactando positivamente tus finanzas.",
    },
    {
      id: 4,
      icon: (
        <FaHandshake className="text-primaryColor text-3xl flex-shrink-0 mt-1" />
      ),
      title: "Mejora la Experiencia del Cliente",
      description:
        "Ofrece respuestas rápidas y personalizadas, construyendo lealtad y confianza.",
    },
    {
      id: 5,
      icon: (
        <FaFunnelDollar className="text-primaryColor text-3xl flex-shrink-0 mt-1" />
      ),
      title: "Incremento de Ventas y Leads",
      description:
        "No pierdas oportunidades por falta de atención; convierte más visitantes en clientes.",
    },
    {
      id: 6,
      icon: (
        <FaShieldAlt className="text-primaryColor text-3xl flex-shrink-0 mt-1" />
      ),
      title: "Seguridad y Fiabilidad",
      description:
        "Nuestros sistemas están diseñados para operar con la máxima seguridad y consistencia.",
    },
  ];
  const industries = [
    { icon: FaHospital, label: "Centros Médicos" },
    { icon: FaBrain, label: "Clínicas Psicológicas" },
    { icon: FaUserTie, label: "Consultorios" },
    { icon: FaStore, label: "E-commerce" },
    { icon: FaLightbulb, label: "Servicios de Asesoría" },
  ];

  return (
    <>
    <HeaderLanding/>
      <div className="font-inter antialiased bg-darkBgColor text-gray-100">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-darkBgColor" />
          <div className="relative z-10 p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white my-4">
              <span className="text-red-600">Orvex:</span> Agentes IA que
              Trabajan por Ti
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nuestros agentes de inteligencia artificial se encargan de la
              gestión de citas, atención al cliente 24/7 y automatización de
              tareas clave para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
              >
                Solicita una Demostración Gratuita
              </a>
              <a
                href="#capabilities"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
              >
                Descubre sus Capacidades
              </a>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}

        <section id="capabilities" className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Las Capacidades de Nuestros{" "}
              <span className="text-red-600">Agentes IA</span>: Trabajan por Ti,
              24/7
            </h2>

            {/* Bloque de texto completo arriba */}
            <div className="max-w-3xl mx-auto space-y-6 mb-16">
              <p className="text-lg text-gray-300 leading-relaxed">
                Descubre cómo los agentes de inteligencia artificial de Orvex
                transforman la operativa diaria de tu negocio, liberándote para
                lo que realmente importa.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Desde la primera interacción hasta la gestión de datos, Orvex
                asegura que cada proceso sea fluido y sin errores.
              </p>
            </div>

            {/* Grid de cards debajo */}
            <div
              className="
                grid    
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-8
            "
            >
              <Card
                icon={<FaWhatsapp size={28} />}
                title="Responden en WhatsApp y Web"
              >
                Interactúan con tus clientes de forma natural en cualquier
                momento.
              </Card>

              <Card
                icon={<FaCalendarAlt size={28} />}
                title="Crean Citas y Gestionan Disponibilidad"
              >
                Automatizan todo el ciclo de citas y recordatorios.
              </Card>

              <Card
                icon={<FaDatabase size={28} />}
                title="Guardar Clientes en Base de Datos"
              >
                Capturan, organizan y guardan información de tus clientes.
              </Card>

              <Card
                icon={<FaCalendarCheck size={28} />}
                title="Crear Eventos en Google Calendar"
              >
                Sincronizan y actualizan tu agenda en tiempo real.
              </Card>

              <Card
                icon={<FaCreditCard size={28} />}
                title="Procesamiento de Pagos Seguro"
              >
                Realiza cobros usando pasarelas como Wompi, Stripe o PayU,
                garantizando transacciones seguras y una experiencia
                profesional.
              </Card>

              <Card
                icon={<FaBell size={28} />}
                title="Recordatorios, Consejos y Promociones"
              >
                Nuestro agente envía recordatorios de citas, consejos útiles y
                promociones personalizadas para mantener a tus clientes siempre
                comprometidos.
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Organiza reuniones al instante con{" "}
              <span className="text-primaryColor">tu Agente de IA</span> y
              concéntrate en tus tareas
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              Concéntrate en tus tareas clave mientras nuestro agente de IA
              atiende automáticamente las consultas de tus clientes, agenda
              citas y crea eventos directamente en tu calendario.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
              {/* Imagen o video */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://placehold.co/600x400/1a1a1a/FF0000?text=Interfaz+Orvex+Reuniones"
                  alt="Interfaz de Orvex para organizar reuniones"
                  className="rounded-xl shadow-2xl border-2 border-gray-700 max-w-full h-auto"
                />
              </div>

              {/* Lista de características */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Tu <span className="text-primaryColor">Agente de IA</span> al
                  servicio
                </h3>
                <p className="text-lg text-gray-300 mb-8">
                  Deja que la tecnología haga el trabajo repetitivo mientras tú
                  mantienes el foco en lo que realmente importa.
                </p>

                <ul className="space-y-6">
                  {[
                    "Atiende automáticamente las consultas de tus clientes.",
                    "Agenda y confirma citas sin complicaciones.",
                    "Crea eventos en tu calendario al instante.",
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="text-primaryColor text-2xl mr-4 mt-1 flex-shrink-0" />
                      <p className="text-lg text-gray-300">{text}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <a
                    href="#contact"
                    className="bg-primaryColor hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
                  >
                    Empezar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Potencia tu negocio con{" "}
              <span className="text-primaryColor">
                Notificaciones Inteligentes
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              Crea y envía recordatorios por correo o WhatsApp, consejos
              personalizados y promociones alineadas con tu negocio para
              mantener a tus clientes siempre comprometidos.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
              {/* Texto y lista de características */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Recordatorios{" "}
                  <span className="text-primaryColor">Inteligentes</span>
                </h3>
                <p className="text-lg text-gray-300 mb-8">
                  Mantén a tus clientes al día y maximiza tus ventas con
                  comunicaciones automatizadas.
                </p>
                <ul className="space-y-6">
                  {[
                    "Crea y envía recordatorios por correo o WhatsApp.",
                    "Nuestro agente genera y envía consejos personalizados según tu negocio.",
                    "Lanza promociones inteligentes alineadas con el perfil de tus clientes.",
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="text-primaryColor text-2xl mr-4 mt-1 flex-shrink-0" />
                      <p className="text-lg text-gray-300">{text}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <a
                    href="#contact"
                    className="bg-primaryColor hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Empezar Ahora
                  </a>
                </div>
              </div>

              {/* Imagen */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://placehold.co/600x400/1a1a1a/FF0000?text=Interfaz+Orvex+Pedidos"
                  alt="Interfaz de Orvex para gestión de pedidos"
                  className="rounded-xl shadow-2xl border-2 border-gray-700 max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Así de Fácil es Integrar{" "}
              <span className="text-primaryColor">Orvex</span> en Tu Negocio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <div className="bg-primaryColor text-white text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Beneficios Tangibles para Tu Negocio con{" "}
              <span className="text-primaryColor">Orvex</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b) => (
                <div
                  key={b.id}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-4 transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  {b.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {b.title}
                    </h3>
                    <p className="text-gray-400">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Orvex: La Solución Perfecta Para{" "}
              <span className="text-primaryColor">Diversas Industrias</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {industries.map(({ icon: Icon, label }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-4 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <Icon className="text-primaryColor text-5xl mb-3" />
                  <p className="text-white text-lg font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 sm:py-24 bg-black">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Transforma Tu Negocio Hoy.{" "}
              <span className="text-primaryColor">Contáctanos.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              ¿Listo para llevar tu eficiencia y atención al cliente al
              siguiente nivel? Completa el formulario y uno de nuestros expertos
              se pondrá en contacto contigo.
            </p>
            <form className="bg-gray-900 p-8 rounded-xl shadow-xl">
              <div className="mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu Nombre Completo"
                  className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primaryColor transition duration-200"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu Correo Electrónico"
                  className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primaryColor transition duration-200"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Tu Número de Teléfono"
                  className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primaryColor transition duration-200"
                />
              </div>
              <div className="mb-6">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Cuéntanos más sobre tus necesidades (opcional)"
                  className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primaryColor transition duration-200"
                />
              </div>
              <button
                type="submit"
                className="bg-primaryColor hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full"
              >
                Enviar Solicitud
              </button>
            </form>
            <p className="mt-8 text-sm text-gray-500">
              Al enviar, aceptas nuestra{" "}
              <span className="text-primaryColor hover:underline">
                Política de Privacidad
              </span>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AgentesIA;
