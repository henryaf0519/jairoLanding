// Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;  // Controlar la visibilidad del modal
  onClose: () => void;  // Función para cerrar el modal
  children: React.ReactNode;  // El contenido que va dentro del modal (en este caso, el formulario)
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Si no está abierto, no renderizamos el modal

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-darkBgColor bg-opacity-50">
      <div className="relative bg-darkBgColor rounded-3xl shadow-lg p-6 w-full max-w-md h-[100vh] sm:h-[100vh] overflow-auto">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-700 text-2xl leading-none"
        >
          &times;
        </button>

        {/* El contenido del modal (en este caso, el formulario) */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
