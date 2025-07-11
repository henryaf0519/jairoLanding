import React from 'react';

const GlowingButton: React.FC = () => {
  return (
    <button 
      className="mt-10 relative inline-flex items-center justify-center w-64 h-19 rounded-full p-1 group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
      onClick={() => alert('¡Gracias por tu interés! Un representante te contactará pronto.')}
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
        "
      >
        Agendar Demo
      </div>
    </button>
  );
};

export default GlowingButton;
