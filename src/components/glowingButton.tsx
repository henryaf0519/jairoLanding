import React, { useState } from "react";
import ReactDOM from "react-dom";
import SignupFormDemo from "./form/form";

const GlowingButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // La función que crea el portal
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
      <button
        className="mt-10 relative inline-flex items-center justify-center w-64 h-19 rounded-full p-1 group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Background glow element */}
        <div
          className="
            absolute 
            -inset-0.5 
            bg-gradient-to-r from-[#FF0000] to-[#EF4444]
            rounded-full 
            blur-lg 
            opacity-75 
            group-hover:opacity-500 
            transition 
            duration-1000 
            group-hover:duration-3000
            animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]
          "
        ></div>

        {/* Button content */}
        <div
          className="
            relative 
            w-60 h-18
            px-10 py-4 
            text-lg
            font-bold
            text-white
            bg-primaryColor
            rounded-full 
            leading-none 
            flex 
            items-center
            justify-center
            transform
            group-hover:scale-105
            transition-transform
            duration-300
            ease-in-out
            cursor-pointer
          "
        >
          Agendar Demo
        </div>
      </button>

      {isModalOpen &&
        ReactDOM.createPortal(
          modal,
          document.body
        )}
    </>
  );
};

export default GlowingButton;
