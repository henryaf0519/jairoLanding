import React, { useState} from "react";
import {
  motion,
} from "motion/react";
import WistiaPlayer from "../components/WistiaPlayer";
import CalendlyModal from "../components/CalendlyModal";

const BSL: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        id="inicio"
        className="font-inter antialiased bg-darkBgWhite text-gray-100"
      >
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative min-h-screen flex items-center justify-center bg-darkBgColor py-24 sm:py-32 overflow-hidden"
        >
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6">
              <span className="block bg-paradigmaRed/10 text-paradigmaRed text-base font-semibold px-4 py-1.5 rounded-full border border-paradigmaRed/30">
                EXCLUSIVO PARA EXPERTOS QUE ESTÁN BUSCANDO ESCALAR SU NEGOCIO
              </span>
            </div>

            {/* Main Title - AHORA CON ANIMACIÓN */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-5xl"
            >
              Si ya tienes{" "}
              <span className="text-paradigmaRed">
                UN PROGRAMA QUE TRANSFORMA VIDAS
              </span>{" "}
              lo único que necesitas ahora es un{" "}
              <span className="text-paradigmaRed">sistema probado </span>que
              multiplique tus agendas hasta en un 100% en menos de{" "}
              <span className="text-paradigmaRed">90 días.</span>
            </motion.h1>

            {/* Subtitle */}
            <p className="mt-6 text-xl text-gray-400 max-w-3xl">
              <span className="text-paradigmaRed mr-2">✦</span>
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
              {/* Texto añadido antes del botón */}
              <p className="mt-6 text-2xl text-white max-w-4xl">
                <span className="text-paradigmaRed mr-2">
                  Solicita tu diagnóstico 1:1
                </span>
                únicamente si eres un experto que factura más de
                <span className="text-paradigmaRed"> 2.5k al mes</span> y desea
                escalar.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="relative inline-flex items-center justify-center mt-10 px-10 py-4 text-xl rounded-full font-bold text-white transition-all duration-300 bg-gradient-to-r from-paradigmaRed to-paradigmaMagenta hover:shadow-2xl hover:shadow-paradigmaRed/40"
              >
                Agenda tu sesión 1:1
              </button>
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

export default BSL;
