import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SignupFormDemo from "./form/form";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const primaryColor = "#FF0000"; // Rojo de Orvex
  const darkBgColor = "#1a1a1a"; // Fondo oscuro
  const modal = (
  <div
    className="
      fixed inset-0 
      z-[9999]               
      flex items-center justify-center
      bg-darkBgColor bg-opacity-50
      p-4
    "
  >
    <div
      className="
        border border-white 
        bg-darkBgColor 
        rounded-3xl 
        shadow-lg 
        w-full 
        max-w-md 
        h-full sm:h-auto 
        sm:max-h-[90vh] 
        overflow-y-auto 
        relative
      "
    >
      {/* Botón de cerrar */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-2 right-2 text-white hover:text-gray-400 text-2xl leading-none"
      >
        &times;
      </button>

      {/* Contenido del modal */}
      <div className="p-6">
        <SignupFormDemo />
      </div>
    </div>
  </div>
);
useEffect(() => {
  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isModalOpen]);
  return (
    <>
      <nav className=" shadow-md py-4 px-6 flex justify-between items-center fixed w-full z-10">
        <div className="flex items-center">
          {/* Logo de Orvex */}
          <div
            className=" mr-2"
          >
            <img
              src="/assets/logo.png"
              alt="Orvex Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a
            href="#inicio"
            className="hover:text-gray-400 font-medium transition-colors duration-200"
            style={{ color: "white" }}
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="hover:text-gray-400 font-medium transition-colors duration-200"
            style={{ color: "white" }}
          >
            Servicios
          </a>
          <a
            href="#testimonios"
            className="hover:text-gray-400 font-medium transition-colors duration-200"
            style={{ color: "white" }}
          >
            Testimonios
          </a>
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
        {/* Botón de menú para móviles */}
        <button className="md:hidden text-white hover:text-gray-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>
      {isModalOpen && ReactDOM.createPortal(modal, document.body)}
    </>
  );
};

export default Header;
