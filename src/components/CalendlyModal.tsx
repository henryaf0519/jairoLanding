// src/components/CalendlyModal.tsx
import React from "react";
import ReactDOM from "react-dom";
import CalendlyEmbed from "./CalendlyEmbed";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose, url }) => {
  if (!isOpen) {
    return null;
  }

  // Usamos un portal para renderizar el modal en el body, evitando problemas de z-index.
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-darkBgColor bg-opacity-70 backdrop-blur-sm"
      onClick={onClose} // Cierra el modal al hacer clic en el fondo
    >
      <div
        className="relative bg-darkBgColor rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] overflow-hidden border border-gray-700"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white hover:text-gray-400 text-4xl leading-none z-10"
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        {/* Embed de Calendly */}
        <CalendlyEmbed url={url} />
      </div>
    </div>,
    document.body
  );
};

export default CalendlyModal;