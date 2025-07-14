import React, { useState } from "react";
import ReactDOM from "react-dom";
import InstagramIcon from "../../assets/Iwhite.svg"; // Asegúrate de la ruta correcta
import Whastsapp from "../../assets/ww.svg"; // Asegúrate de la ruta correcta
import SignupFormDemo from "./form/form";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const primaryColor = "#FF0000"; // Rojo de Orvex
  const darkBgColor = "#1a1a1a"; // Fondo oscuro
  const modal = (
    <div
      className="
          fixed inset-0 
          z-[9999]               /* z-index superalto */
          flex items-center justify-center
          bg-darkBgColor bg-opacity-50
         
        "
    >
      <div className=" border border-white bg-darkBgColor rounded-3xl shadow-lg p-6 w-full max-w-md relative">
        {/* Botón de cerrar */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-white hover:text-gray-700 text-2xl leading-none"
        >
          &times;
        </button>

        <SignupFormDemo />
      </div>
    </div>
  );
  return (
    <>
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col space-y-4">
            <p className="text-lg font-semibold">
              © 2025 Orvex. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {/* Iconos de Instagram al lado del botón */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 w-12 h-12 flex items-center justify-center"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-8 h-8 object-contain" // Tamaño ajustado para los iconos
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 w-12 h-12 flex items-center justify-center"
            >
              <img
                src={Whastsapp}
                alt="Instagram"
                className="w-8 h-8 object-contain" // Tamaño ajustado para los iconos
              />
            </a>
            {/* Botón de Agendar Demo al lado de los iconos */}
            <button
              className="px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: primaryColor,
                color: "white",
                boxShadow: `0 4px 15px rgba(255, 0, 0, 0.4)`,
              }}
              onClick={() => setIsModalOpen(true)}
            >
              Agendar Demo
            </button>
          </div>
        </div>
      </footer>
      {isModalOpen && ReactDOM.createPortal(modal, document.body)}
    </>
  );
};

export default Footer;
