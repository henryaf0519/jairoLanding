import React, { useState, useEffect, useRef } from "react";
import {
  FaCheckCircle,
  FaStore,
  FaChartLine,
  FaClock,
  FaQuestionCircle,
  FaFilter,
  FaTasks,
  FaCrosshairs,
  FaDraftingCompass,
  FaBolt,
  FaUsers,
  FaTimesCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import {
  motion,
  animate,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";
import CalendlyEmbed from "../components/CalendlyEmbed";
import CalendlyModal from "../components/CalendlyModal";

interface FormErrors {
  firstname?: string;
  email?: string;
  number?: string;
  message?: string;
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-white">
          {question}
        </h3>
        <span className="text-primaryColor text-2xl transform transition-transform duration-300">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

const AgentesIA: React.FC = () => {
  const fullText = "Agentes IA que Trabajan por Ti";
  const progress = useMotionValue(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Al cambiar, limpiamos el error de ese campo
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname = "Este campo es obligatorio";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Este campo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Este campo es obligatorio";
    }

    return newErrors;
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    sendMessage(formData);
    setErrors({});
  };

  const sendMessage = (data: Record<string, string>) => {
    emailjs
      .send(
        "service_w1zagv4",
        "template_tb05qji",
        {
          type: "Cotización",
          from_name: data.firstname,
          email: data.email,
          numberphone: data.number,
          message: `Deseo agendar un demo de agente IA estos son mis datos ${data.number}, ${data.email} \n Motivo: ${data.message}`,
        },
        "prOm35TXg66H46DY2"
      )
      .then(() => {
        setIsModalOpen(true);
        setFormData({
          firstname: "",
          email: "",
          number: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Arranca la animación al verse en pantalla
            animate(progress, fullText.length + 1, {
              duration: fullText.length * 0.08,
              ease: "linear",
              onComplete: () => setTypingFinished(true),
            });
            obs.unobserve(el); // solo una vez
          }
        });
      },
      { threshold: 0.5 } // dispara cuando al menos el 50% del elemento es visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fullText, progress]);

  useMotionValueEvent(progress, "change", (latest) => {
    setDisplayedText(fullText.slice(0, Math.floor(latest)));
  });
  return (
    <>
      <div
        id="inicio"
        className="font-inter antialiased bg-darkBgColor text-gray-100"
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center lg:text-left overflow-hidden px-6">
          <div className="absolute inset-0 bg-darkBgColor" />
          <div className="relative container mx-auto w-full max-w-7xl flex-grow flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* Columna Izquierda: Texto */}
              <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                  ref={containerRef}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white my-4"
                >
                  <span className="text-primaryColor">Orvex:</span>{" "}
                  {displayedText}
                  <motion.span
                    className="inline-block ml-1"
                    animate={
                      typingFinished
                        ? { opacity: [0, 1, 0] }
                        : { opacity: [0, 1] }
                    }
                    transition={
                      typingFinished
                        ? { duration: 1.2 }
                        : { repeat: Infinity, duration: 0.6, ease: "linear" }
                    }
                  />
                </motion.h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                  En los próximos 7 días, tu negocio puede dejar de perder
                  dinero por citas canceladas y empezar a cobrar por
                  adelantado... sin contratar personal, sin aprender tecnología
                  y sin perder más tiempo en WhatsApp.
                </p>
              </div>

              {/* Columna Derecha: Video Placeholder */}
              <div className="flex items-center justify-center w-full">
                {/* Reemplaza este div con tu componente de video o un iframe */}
                <div className="w-full max-w-md aspect-video bg-gray-800 rounded-lg flex items-center justify-center border-2 border-gray-700 shadow-2xl">
                  <span className="text-white">Tu Video Aquí</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botón centrado debajo de las columnas */}
          <div className="relative pb-16 pt-8 z-10 text-center">
            {/* TEXTO AÑADIDO */}
            <p className="text-3xl text-white mb-6 max-w-xl mx-auto">
              Descubre cómo implementar un Agente de IA que responde, agenda y
              cobra por ti, 24/7.
            </p>
            <button
              onClick={() => setIsModalOpen(true)} // CAMBIO
              className="bg-primaryColor hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 inline-block"
            >
              Solicita una Demostración Gratuita
            </button>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Columna Izquierda: Imagen */}
              <div className="relative flex justify-center group">
                <img
                  src="/assets/chat.png"
                  alt="Agente IA gestionando un chat con un cliente"
                  className="w-full max-w-md aspect-square object-cover rounded-xl shadow-2xl transition-all duration-300"
                />
                {/* Capa para fusionar con el fondo (MODIFICADA) */}
                <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Columna Derecha: Texto */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  ¿Tu día a día se siente como una carrera{" "}
                  <span className="text-primaryColor">contra el tiempo?</span>
                </h2>
                <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
                  ¿Te cancelan citas a último minuto? ¿Respondes las mismas
                  preguntas en WhatsApp a las 11 de la noche? Cada semana, esta
                  rutina te cuesta dinero, tiempo y, lo más valioso, tu
                  tranquilidad.
                </p>
                <p className="mt-4 text-lg sm:text-xl text-white font-semibold">
                  El problema no es tu dedicación. Es depender de herramientas
                  que ya no dan abasto.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-7xl mx-auto px-6">
            {/* Título Principal de la Sección */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Resultados, no solo promesas.
              </h2>
              <p className="mt-4 text-lg text-primaryColor font-semibold max-w-3xl mx-auto">
                Esto es lo que ORVEX consigue para tu negocio desde la primera
                semana.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Columna Izquierda: Beneficios Clave */}
              <div className="space-y-8">
                {/* Card de Beneficio 1: Aumento de Ventas */}
                <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl shadow-lg">
                  <FaChartLine className="text-primaryColor text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-xl">
                      Incremento en Ventas y Conversión
                    </h4>
                    <p className="text-gray-400 mt-1">
                      Convierte más conversaciones en ingresos. Tu agente IA
                      está entrenado para guiar a los clientes a través del
                      proceso de compra 24/7.
                    </p>
                  </div>
                </div>
                {/* Card de Beneficio 2: Eficiencia Operativa */}
                <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl shadow-lg">
                  <FaBolt className="text-primaryColor text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-xl">
                      Eficiencia y Ahorro de Costos
                    </h4>
                    <p className="text-gray-400 mt-1">
                      Automatiza respuestas y procesos para que no necesites
                      contratar más personal. Tu equipo se enfoca en tareas de
                      alto valor.
                    </p>
                  </div>
                </div>
                {/* Card de Beneficio 3: Recuperación de Tiempo */}
                <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl shadow-lg">
                  <FaClock className="text-primaryColor text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-xl">
                      Recupera de 5 a 10 Horas Semanales
                    </h4>
                    <p className="text-gray-400 mt-1">
                      Delega las tareas repetitivas a tu agente de IA y libera
                      tiempo valioso para dedicarlo a la estrategia y el
                      crecimiento de tu negocio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Plataforma CRM */}
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                  Tu <span className="text-primaryColor">Ecosistema</span> de
                  Crecimiento
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  ORVEX no es solo un agente de IA; es una plataforma de gestión
                  integral diseñada para convertir conversaciones en clientes.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-primaryColor mt-1.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      <span className="font-semibold text-white">
                        Bandeja Omnicanal:
                      </span>{" "}
                      Unifica WhatsApp, web y redes sociales en un solo lugar.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-primaryColor mt-1.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      <span className="font-semibold text-white">
                        Gestión de Pipeline:
                      </span>{" "}
                      Visualiza y gestiona cada lead, desde el primer contacto
                      hasta el cierre de la venta.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-primaryColor mt-1.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      <span className="font-semibold text-white">
                        Marketing Automatizado:
                      </span>{" "}
                      Envía promociones, recordatorios y contenido de valor para
                      nutrir a tus clientes sin esfuerzo.
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-lg text-white font-medium">
                  Toma el control total de la experiencia de tu cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS Section */}

        <section id="how-it-works" className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tu Agente de IA, listo en{" "}
              <span className="text-primaryColor">Menos de 7 Días</span>
            </h2>
            <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto">
              Implementamos tu Agente Digital 24/7 a través de un proceso simple
              y directo. Solo necesitas llenar un formulario para empezar.
            </p>

            {/* Grid de 4 pasos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Paso 1 */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
                <div className="text-primaryColor text-4xl mb-4">
                  <FaFilter />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Filtra Clientes Potenciales
                </h3>
              </div>
              {/* Paso 2 */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
                <div className="text-primaryColor text-4xl mb-4">
                  <FaQuestionCircle />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Responde Preguntas Frecuentes
                </h3>
              </div>
              {/* Paso 3 */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
                <div className="text-primaryColor text-4xl mb-4">
                  <FaTasks />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Automatiza Tareas Clave
                </h3>
              </div>
              {/* Paso 4 (MODIFICADO) */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
                <div className="text-primaryColor text-4xl mb-4">
                  <FaStore /> {/* Icono cambiado */}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Presenta tu Catálogo Inteligente {/* Texto cambiado */}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM AI AGENT PLATFORM Section */}
        <section
          id="platform-capabilities"
          className="py-16 sm:py-24 bg-darkBgColor"
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Título Principal */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Una Plataforma,{" "}
                <span className="text-primaryColor">Infinitas Soluciones</span>
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                No te entregamos un chatbot genérico. Te damos el poder de
                construir un agente de IA a la medida exacta de tus procesos de
                venta, soporte y marketing.
              </p>
            </div>

            {/* Grid de 3 Capacidades Fundamentales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pilar 1: Diseño de Flujos Conversacionales */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col transform hover:scale-105 transition">
                <div className="text-primaryColor text-4xl mb-4">
                  <FaDraftingCompass />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Diseña Experiencias Conversacionales
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  Define visualmente el recorrido perfecto para tus clientes.
                  Crea flujos que califican, educan y guían al usuario con
                  textos, imágenes, videos y cuestionarios interactivos.
                </p>
              </div>

              {/* Pilar 2: Comunicación Estratégica */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col transform hover:scale-105 transition">
                <div className="text-primaryColor text-4xl mb-4">
                  <FaCrosshairs />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Comunica con Precisión e Impacto
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  Segmenta tu audiencia y envía campañas masivas o mensajes
                  ultrapersonalizados. Entrega el mensaje correcto, a la persona
                  correcta, en el momento correcto.
                </p>
              </div>

              {/* Pilar 3: Automatización de Tareas a Medida */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col transform hover:scale-105 transition">
                <div className="text-primaryColor text-4xl mb-4">
                  <FaTasks />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Automatiza Tareas a tu Medida
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  Entrena a tu agente para que ejecute las tareas clave de tu
                  negocio: tomar pedidos, procesar pagos, agendar citas, dar
                  soporte y mucho más. Tú defines las reglas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INVESTMENT & SOCIAL PROOF Section */}
        <section
          id="investment-proof"
          className="py-16 sm:py-24 bg-darkBgColor"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Columna Izquierda (más ancha): La Inversión */}
              <div className="lg:col-span-2 bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  Una Inversión Inteligente, no un Gasto
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Analicemos los números. Un asistente tradicional puede ser un
                  recurso valioso, pero ¿es la opción más eficiente?
                </p>

                {/* Comparativa */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Asistente Humano */}
                  <div className="border border-gray-700 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white">
                      Asistente Humano
                    </h3>
                    <p className="text-4xl font-bold text-gray-500 my-4">
                      $2.5M+
                      <span className="text-lg font-normal">/mes</span>
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <FaTimesCircle className="text-red-500" /> Horario
                        limitado
                      </li>
                      <li className="flex items-center gap-2">
                        <FaTimesCircle className="text-red-500" /> Propenso a
                        errores
                      </li>
                      <li className="flex items-center gap-2">
                        <FaTimesCircle className="text-red-500" /> Necesita días
                        libres
                      </li>
                    </ul>
                  </div>
                  {/* Agente IA ORVEX */}
                  <div className="border-2 border-primaryColor p-6 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primaryColor text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      RECOMENDADO
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Agente IA ORVEX
                    </h3>
                    <p className="text-4xl font-bold text-white my-4">
                      Fracción
                      <span className="text-lg font-normal"> del costo</span>
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" /> Trabaja
                        24/7
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" /> Precisión
                        milimétrica
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" /> Nunca
                        descansa
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-8 text-center text-lg text-gray-300 italic">
                  "Si hoy pierdes al menos una venta a la semana, ya estás
                  pagando el costo de NO tenerlo."
                </p>
              </div>

              {/* Columna Derecha (MODIFICADA): Prueba Social */}
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl h-full flex flex-col">
                <div>
                  <div className="text-primaryColor text-4xl mb-4">
                    <FaUsers />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Únete a los Líderes del Mercado
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Empresas de diversos sectores como tiendas virtuales,
                    agencias de marketing, centros médicos y psicológicos,
                    clínicas estéticas, inmobiliarias, restaurantes y
                    profesionales de alto rendimiento ya confían en ORVEX.
                  </p>
                </div>
                <div className="flex-grow"></div>{" "}
                {/* Elemento flexible para empujar el texto hacia abajo */}
                <p className="text-white font-semibold mt-6">
                  Si ellos ya transformaron su negocio, tú también puedes
                  hacerlo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA Section */}
        <section id="final-cta" className="py-20 sm:py-24 bg-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              ¿Listo para Dejar de Perder Clientes y Tiempo?
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Es hora de implementar la solución de IA que trabaja por ti 24/7,
              convierte más y te devuelve el control de tu negocio.
            </p>
            <div className="mt-10">
              <button
                onClick={() => setIsModalOpen(true)} // CAMBIO
                className="bg-primaryColor hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:scale-105 inline-block text-xl"
              >
                Quiero Implementar mi Agente de IA Ahora
              </button>
            </div>
          </div>
        </section>

        {/* PRICING Section */}
        <section id="pricing" className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-7xl mx-auto px-6">
            {/* Título Principal */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Un Plan para Cada Etapa de tu Negocio
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Elige la potencia que necesitas hoy y escala con nosotros
                mañana. Sin complicaciones.
              </p>
            </div>

            {/* Grid de Precios */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Plan STARTER */}
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-white">Starter</h3>
                <p className="text-primaryColor font-semibold mt-1">
                  Ideal para pequeños negocios.
                </p>
                <div className="my-8">
                  <span className="text-5xl font-bold text-white">$35</span>
                  <span className="text-lg text-gray-400"> USD/mes</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-white text-lg mb-4">
                    Características Principales:
                  </h4>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" /> 1 Número
                      WhatsApp API
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" /> 5,000
                      Contactos 1 a 1
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" /> 1 Agente de
                      IA
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" /> 10
                      Automatizaciones
                    </li>
                  </ul>
                  <h4 className="font-bold text-white text-lg mb-4 border-t border-gray-700 pt-6">
                    Incluido en todos los planes:
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1" />{" "}
                      <div>
                        <span className="font-semibold">
                          WhatsApp Business API Gratuita:
                        </span>{" "}
                        Te ayudamos con la configuración y la verificación
                        oficial (sello azul).
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1" />{" "}
                      <div>
                        <span className="font-semibold">
                          Bandeja de Entrada Omnicanal:
                        </span>{" "}
                        Gestiona WhatsApp, Instagram, Messenger y más en un solo
                        lugar.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1" />{" "}
                      <div>
                        <span className="font-semibold">
                          Plataforma de Equipo:
                        </span>{" "}
                        Asigna conversaciones, crea plantillas y automatiza
                        respuestas.
                      </div>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)} // CAMBIO
                  className="mt-8 block w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition"
                >
                  Empezar Ahora
                </button>
              </div>

              {/* Plan ADVANCED (Destacado) */}
              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-primaryColor relative h-full flex flex-col shadow-2xl scale-105">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primaryColor text-white text-sm font-bold px-4 py-1 rounded-full">
                  Más Popular
                </div>
                <h3 className="text-2xl font-semibold text-white">Advanced</h3>
                <p className="text-primaryColor font-semibold mt-1">
                  Ideal para negocios con equipos de trabajo que priorizan su
                  atención al cliente por WhatsApp.
                </p>
                <div className="my-8">
                  <span className="text-5xl font-bold text-white">$50</span>
                  <span className="text-lg text-gray-400"> USD/mes</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-white text-lg mb-4">
                    Características Principales:
                  </h4>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" /> 1 Número
                      WhatsApp API
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" /> 3 Agentes de
                      IA
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" /> 10,000
                      Contactos 1 a 1
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" />{" "}
                      Automatizaciones Ilimitadas
                    </li>
                  </ul>
                  <h4 className="font-bold text-white text-lg mb-4 border-t border-gray-700 pt-6">
                    Incluido en todos los planes:
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1" />{" "}
                      <div>
                        <span className="font-semibold">
                          WhatsApp Business API Gratuita:
                        </span>{" "}
                        Te ayudamos con la configuración y la verificación
                        oficial (sello azul).
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1" />{" "}
                      <div>
                        <span className="font-semibold">
                          Bandeja de Entrada Omnicanal:
                        </span>{" "}
                        Gestiona WhatsApp, Instagram, Messenger y más en un solo
                        lugar.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1" />{" "}
                      <div>
                        <span className="font-semibold">
                          Plataforma de Equipo:
                        </span>{" "}
                        Asigna conversaciones, crea plantillas y automatiza
                        respuestas.
                      </div>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)} // CAMBIO
                  className="mt-8 block w-full text-center bg-primaryColor hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition"
                >
                  Comprar Plan
                </button>
              </div>

              {/* Plan PERSONALIZADO */}
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-white">
                  Personalizado
                </h3>
                <p className="text-primaryColor font-semibold mt-1">
                  Soluciones personalizadas para tu negocio.
                </p>
                <div className="my-8">
                  <span className="text-4xl font-bold text-white">
                    A Convenir
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-white text-lg mb-4">
                    Todo lo de Advanced, y además:
                  </h4>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" /> Agentes IA
                      Pro con integraciones avanzadas
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" /> Soporte y
                      consultoría dedicada
                    </li>
                  </ul>
                  <h4 className="font-bold text-white text-lg mb-4 border-t border-gray-700 pt-6">
                    Incluido en todos los planes:
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1" />{" "}
                      <div>
                        <span className="font-semibold">
                          WhatsApp Business API Gratuita:
                        </span>{" "}
                        Te ayudamos con la configuración y la verificación
                        oficial (sello azul).
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1" />{" "}
                      <div>
                        <span className="font-semibold">
                          Bandeja de Entrada Omnicanal:
                        </span>{" "}
                        Gestiona WhatsApp, Instagram, Messenger y más en un solo
                        lugar.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1" />{" "}
                      <div>
                        <span className="font-semibold">
                          Plataforma de Equipo:
                        </span>{" "}
                        Asigna conversaciones, crea plantillas y automatiza
                        respuestas.
                      </div>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)} // CAMBIO
                  className="mt-8 block w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition"
                >
                  Contactar Ventas
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 sm:py-24 bg-darkBgColor">
          <div className="max-w-4xl mx-auto px-6">
            {/* Título Principal */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Preguntas Frecuentes
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Resolvemos tus dudas para que tomes la mejor decisión.
              </p>
            </div>

            {/* Lista de Preguntas */}
            <div>
              <FAQItem
                question="¿Tengo que instalar algo complicado?"
                answer="No. Nosotros nos encargamos de todo el proceso técnico. Tú solo necesitas llenar un formulario con la información clave de tu negocio y nosotros hacemos el resto."
              />
              <FAQItem
                question="¿Existe alguna cláusula de permanencia?"
                answer="No. Creemos en la flexibilidad. Puedes elegir el plan que mejor se adapte a ti y cambiarlo o cancelarlo cuando lo necesites, sin contratos a largo plazo."
              />
              <FAQItem
                question="¿Qué pasa si no tengo página web o CRM?"
                answer="No es un problema. Tu agente de IA puede operar perfectamente a través de WhatsApp y redes sociales. Además, nuestra plataforma incluye un CRM integrado para que gestiones a tus clientes desde el primer día."
              />
              <FAQItem
                question="¿En cuánto tiempo estará funcionando mi agente?"
                answer="Nuestro proceso de implementación estándar es de 5 a 7 días hábiles. Así de rápido empezarás a ver los resultados."
              />
              <FAQItem
                question="¿Mis clientes se darán cuenta de que hablan con un robot?"
                answer="Precisamente por eso creamos agentes personalizados. Entrenamos a la IA para que hable en el tono y estilo de tu marca. Además, desde nuestra plataforma, tú o tu equipo pueden intervenir en la conversación en cualquier momento para gestionar leads complejos, asegurando una experiencia fluida."
              />
              <FAQItem
                question="¿Esto funciona solo para WhatsApp?"
                answer="No, nuestra plataforma es omnicanal. Integramos tu agente en WhatsApp, Instagram, Facebook Messenger y tu sitio web, centralizando todas las conversaciones en una única bandeja de entrada para un control total."
              />
              <FAQItem
                question="¿Qué tan personalizado puede ser el agente?"
                answer="Totalmente personalizado. No usamos plantillas genéricas. Construimos un agente de IA a la medida, entrenado para ejecutar los procesos específicos de tu negocio, ya sea vender, dar soporte, calificar o cualquier otra tarea que necesites automatizar."
              />
              <FAQItem
                question="¿Qué tipo de soporte ofrecen una vez que mi agente está funcionando?"
                answer="Ofrecemos soporte continuo para asegurar que tu operación funcione sin problemas. Dependiendo de tu plan, esto incluye desde soporte técnico hasta consultoría dedicada para ayudarte a optimizar tus flujos y estrategias."
              />
              <FAQItem
                question="¿Necesito configurar mi número de WhatsApp por mi cuenta?"
                answer="Absolutamente nada. Nosotros gestionamos todo el proceso de configuración de la API oficial de WhatsApp a través de la plataforma de Meta. Nos aseguramos de que tu número esté verificado y funcionando sin que tengas que preocuparte por ningún detalle técnico."
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-24 bg-black">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Agenda tu Demostración Gratuita Ahora
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Elige la fecha y hora que mejor te convenga. En menos de 30
              minutos, descubrirás cómo nuestros agentes de IA pueden
              transformar tu negocio.
            </p>

            <div
              className="bg-darkBgColor rounded-xl shadow-xl overflow-hidden"
              style={{ height: "700px" }}
            >
              {/* VERIFICA ESTA LÍNEA */}
              <CalendlyEmbed url="https://calendly.com/hentech-ia/30min" />
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Al agendar, aceptas nuestra{" "}
              <span className="text-primaryColor hover:underline">
                Política de Privacidad
              </span>
              .
            </p>
          </div>
        </section>
      </div>
      <CalendlyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url="https://calendly.com/hentech-ia/30min"
      />
    </>
  );
};

export default AgentesIA;
