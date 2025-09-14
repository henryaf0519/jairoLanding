import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";
import {
  CheckCircle,
  TrendingUp,
  Target,
  Rocket,
  DollarSign,
  Link,
  BadgeCheck,
} from "lucide-react";
import WistiaPlayer from "../components/WistiaPlayer";
import CalendlyModal from "../components/CalendlyModal";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedStatCard from "../components/AnimatedStatCard";

const resultsData = [
  {
    id: 1,
    timeframe: "Resultados en 1 mes",
    description: "Logramos reducir el costo por agenda en un",
    highlight: "80%",
    chartImage1: "/assets/imagen1.webp",
    chartImage2: "/assets/imagen2.webp",
  },
  {
    id: 2,
    timeframe: "Resultados en 3 meses",
    description: "Pasamos de tener 25 ventas al doble del producto a tener",
    highlight: "+90 en una sola semana reduciendo x5 los costos.",
    chartImage1: "/assets/imagen3.webp",
    chartImage2: "/assets/imagen4.webp",
  },
];

const Landing: React.FC = () => {
  const fullText = "ESCALAMOS LAS VENTAS DE TU TIENDA ONLINE";
  const progress = useMotionValue(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(progress, fullText.length + 1, {
              duration: fullText.length * 0.08,
              ease: "linear",
              onComplete: () => setTypingFinished(true),
            });
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
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
        className="font-inter antialiased bg-darkBgWhite text-gray-100"
      >
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative min-h-screen flex items-center justify-center bg-darkBgColor py-20"
        >
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6">
              <span className="bg-yellow-900/50 text-yellow-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-yellow-700">
                EXCLUSIVO PARA EXPERTOS QUE ESTÁN BUSCANDO ESCALAR SU NEGOCIO
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-5xl">
              Si ya tienes{" "}
              <span className="text-orange-400">
                UN PROGRAMA QUE TRANSFORMA VIDAS
              </span>{" "}
              lo único que necesitas ahora es un{" "}
              <span className="text-orange-400">sistema probado </span>que
              multiplique tus agendas hasta en un 100% en menos de{" "}
              <span className="text-orange-400">90 días.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-gray-400 max-w-3xl">
              <span className="text-orange-400 mr-2">✦</span>
              Garantizando que cada dólar invertido en anuncios se convierta en
              prospectos calificados que están buscando exactamente lo que
              ofreces.
            </p>

            {/* Video Player */}
            <div className="mt-10 w-full max-w-4xl mx-auto">
              <div className="aspect-video bg-black rounded-lg shadow-2xl overflow-hidden border border-gray-700">
                <WistiaPlayer
                  mediaId="b0dckf0a2r" // Reemplaza con tu Media ID real de Wistia
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg text-xl transition-colors duration-300 shadow-lg shadow-orange-500/20"
              >
                Agendar diagnóstico
              </button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              {/* --- Columna Izquierda: Título y Descripción --- */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
                  Con nuestro método superarás los{" "}
                  <span className="text-paradigmaRed">+$10k USD/mes</span>
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Si inviertes más de{" "}
                  <strong className="text-gray-900">$500 USD/mes</strong> en
                  pauta publicitaria, con nuestra{" "}
                  <strong className="text-gray-900">
                    estrategia de tiple calificación{" "}
                  </strong>
                  multiplicarás tus agendas calificadas x3, x5 y hasta x10{" "}
                  <strong className="text-paradigmaRed">
                    con el mismo presupuesto.
                  </strong>{" "}
                  el primer mes que lograrán llevarte a los{" "}
                  <strong className="text-gray-900">$500M</strong>.
                </p>
              </div>

              {/* --- Columna Derecha: Tarjetas de Estadísticas --- */}
              <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-8">
                <AnimatedStatCard
                  label="Ingresos Promedio"
                  targetValue={12}
                  icon={TrendingUp}
                  prefix="$ "
                  suffix="K/Mes"
                />

                <AnimatedStatCard
                  label="Horas Ahorradas"
                  targetValue={8.8}
                  decimalPlaces={1}
                  prefix="X"
                  icon={Target}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* INICIA LA SECCIÓN DE RESULTADOS (CORREGIDA PARA MÓVILES)          */}
        {/* ================================================================== */}
        <section className="py-16 sm:py-24 bg-darkBgColor overflow-hidden">
          {" "}
          {/* <-- AÑADE overflow-hidden AQUÍ */}
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            {resultsData.map((result, index) => (
              <motion.div
                key={result.id}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-gray-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* === Efecto de Brillo Decorativo === */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 ${
                    index % 2 !== 0
                      ? "right-0 translate-x-1/2"
                      : "left-0 -translate-x-1/2"
                  } w-1/2 h-full bg-paradigmaRed/10 rounded-full blur-3xl -z-10`}
                />

                {/* --- Columna de Texto --- */}
                <div
                  className={`text-center lg:text-left ${
                    index % 2 !== 0 ? "lg:order-last" : ""
                  }`}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {result.timeframe}
                  </h3>
                  <p className="mt-4 text-xl text-gray-300">
                    {result.description}{" "}
                    <span className="font-bold bg-gradient-to-r from-paradigmaRed to-paradigmaMagenta bg-clip-text text-transparent">
                      {result.highlight}
                    </span>
                  </p>
                </div>

                {/* --- Columna de Gráficos con Composición Separada --- */}
                {/* --- Columna de Gráficos con Composición Separada --- */}
                <div className="flex flex-col items-center justify-center gap-8">
                  {" "}
                  {/* <-- CAMBIOS AQUÍ */}
                  <motion.img
                    src={result.chartImage1}
                    alt={`Gráfico 1 para ${result.timeframe}`}
                    className="w-full rounded-lg shadow-2xl border-2 border-gray-800"
                    initial={{ opacity: 0, x: -30, rotate: -10 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  />
                  <motion.img
                    src={result.chartImage2}
                    alt={`Gráfico 2 para ${result.timeframe}`}
                    className="w-full rounded-lg shadow-2xl border-2 border-gray-700 bg-gray-900 p-1"
                    initial={{ opacity: 0, x: 30, rotate: 10 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================================================================== */}
        {/* INICIA LA NUEVA SECCIÓN "EL PROCESO" (VIDEO MÁS GRANDE)          */}
        {/* ================================================================== */}
        <section className="relative py-24 sm:py-32 bg-darkBgColor overflow-hidden">
          {/* === Efecto de Brillo de Fondo === */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-full max-w-4xl bg-paradigmaRed/10 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              {/* --- Columna de Texto (ocupa 2 de 5 columnas) --- */}
              <motion.div
                className="lg:col-span-2 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="font-semibold text-paradigmaRed tracking-wider">
                  CÓMO LO HACEMOS
                </p>
                <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
                  El Proceso Probado que Escala Expertos
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                  No dejamos nada al azar. Nuestro método está diseñado para que
                  expertos digitales como tú consigan más agendas calificadas,
                  menor desgaste de tiempo y un crecimiento predecible en menos
                  de 90 días.
                </p>

                <ul className="mt-8 space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-paradigmaRed w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">
                      <strong className="text-white">
                        Diagnóstico Estratégico:
                      </strong>{" "}
                      Definimos la base de tu negocio, entendemos tu propuesta
                      única y diseñamos una estrategia tan potente que genera en
                      tus prospectos el miedo a perder la oportunidad de
                      trabajar contigo.{" "}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-paradigmaRed w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">
                      <strong className="text-white">
                        Sistema de Triple Calificación:
                      </strong>{" "}
                      Implementamos filtros automáticos que ahorran horas de
                      llamadas improductivas, asegurando que sólo lleguen a tu
                      calendario prospectos listos para invertir en tu
                      formación.{" "}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-paradigmaRed w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">
                      <strong className="text-white">
                        Optimización del Algoritmo:{" "}
                      </strong>{" "}
                      Descontaminamos y optimizamos tu cuenta publicitaria para
                      que cada dólar invertido multiplique tus agendas x3, x5 e
                      incluso x10 sin disparar los costos.{" "}
                    </span>
                  </li>
                </ul>

                <div className="mt-10">
                  <a
                    href="https://wa.me/TUNUMERO" // <-- REEMPLAZA CON TU NÚMERO
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center p-0.5 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-paradigmaRed to-paradigmaMagenta rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <span className="relative bg-black hover:bg-gray-900 transition-colors duration-300 rounded-full px-8 py-4 text-lg font-bold text-white flex items-center">
                      Quiero Escalar Mi Negocio como Experto
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* --- Columna de Video (ocupa 3 de 5 columnas) --- */}
              <motion.div
                className="lg:col-span-3 relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-2xl shadow-2xl w-full">
                  <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
                    <WistiaPlayer
                      mediaId="b0dckf0a2r"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* INICIA LA SECCIÓN "¿QUIÉN SOY?"                                    */}
        {/* ================================================================== */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* --- Columna Izquierda: Tarjeta de Fundador (Estilo Instagram) --- */}
              <motion.div
                className="bg-gray-900 border border-white/10 rounded-3xl p-8 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="flex items-center gap-6">
                  <img
                    src="/assets/woman1.png" // <-- REEMPLAZA CON TU FOTO DE PERFIL
                    alt="Foto de Jose Huila"
                    className="w-24 h-24 rounded-full border-4 border-gray-800 object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      Jose Huila
                      <BadgeCheck className="w-6 h-6 text-blue-500" />
                    </h3>
                    <p className="text-gray-400">@josehuilaa</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center my-6">
                  <div>
                    <p className="text-2xl font-bold text-white">16</p>
                    <p className="text-sm text-gray-400">Publicaciones</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">16,3 mil</p>
                    <p className="text-sm text-gray-400">Seguidores</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">83</p>
                    <p className="text-sm text-gray-400">Seguidos</p>
                  </div>
                </div>

                <div className="text-gray-300 space-y-2">
                  <p className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-paradigmaRed" /> Escalo
                    ventas de marcas con contenido y anuncios
                  </p>
                  <p className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-paradigmaRed" /> $2.7M
                    USD Facturados con E-Commerce
                  </p>
                  <p className="flex items-center gap-2">
                    <Link className="w-4 h-4 text-paradigmaRed" /> ¡Así puedo
                    ayudar a tu empresa!
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <button className="flex-1 bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Seguir
                  </button>
                  <button className="flex-1 bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition-colors">
                    Mensaje
                  </button>
                </div>
              </motion.div>

              {/* --- Columna Derecha: Texto "¿Quién Soy?" --- */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  ¿Quién soy?
                </h2>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Un gusto, soy Jose. Trabajo en marketing desde que tenía{" "}
                  <span className="text-paradigmaRed font-semibold">
                    14 años
                  </span>
                  ; empecé desde cero ofreciendo mi trabajo gratis.
                </p>
                <p className="mt-4 text-xl text-gray-600 leading-relaxed">
                  <span className="text-paradigmaRed font-semibold">
                    5 Años después
                  </span>{" "}
                  desarrollamos un método con la que escalamos empresas a vender{" "}
                  <span className="font-bold bg-gradient-to-r from-paradigmaRed to-paradigmaMagenta bg-clip-text text-transparent">
                    +$500M/mes
                  </span>
                  .
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* INICIA LA SECCIÓN DE DUDAS Y TESTIMONIOS (VÍDEOS CORREGIDOS)      */}
        {/* ================================================================== */}
        <section className="relative py-24 sm:py-32 bg-darkBgColor overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-paradigmaRed/10 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* --- Columna Izquierda: Texto y Llamado a la Acción --- */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Quieres ver un caso de éxito ¿verdad?
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-md mx-auto lg:mx-0">
                  conoce lo que uno de los mejores coaches de LATAM dice
                </p>
                <div className="mt-10">
                  <a
                    onClick={() => setIsModalOpen(true)}
                    className="relative inline-flex items-center justify-center p-0.5 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-paradigmaRed to-paradigmaMagenta rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <span className="relative bg-black hover:bg-gray-900 transition-colors duration-300 rounded-full px-8 py-4 text-lg font-bold text-white flex items-center">
                      Enviar mensaje a WhatsApp
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* --- Columna Derecha: Videos de Testimonios (CORREGIDA) --- */}
              <motion.div
                className="relative flex justify-center items-center gap-8 py-8" // Eliminamos h-96 y añadimos padding vertical
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Video 1 */}
                <div className="w-1/2 max-w-[250px] transform -rotate-6 hover:rotate-0 hover:scale-110 hover:z-20 transition-transform duration-300">
                  <div className="aspect-[9/16] bg-black rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-700">
                    <WistiaPlayer
                      mediaId="b0dckf0a2r"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Video 2 */}
                <div className="w-1/2 max-w-[250px] transform rotate-6 hover:rotate-0 hover:scale-110 hover:z-20 transition-transform duration-300">
                  <div className="aspect-[9/16] bg-black rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-700">
                    <WistiaPlayer
                      mediaId="b0dckf0a2r"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <CalendlyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url="https://calendly.com/henryaf0519/reunion-demo-orvex"
      />
    </>
  );
};

export default Landing;
