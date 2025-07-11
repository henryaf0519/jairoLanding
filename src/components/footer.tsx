import React from 'react';
import InstagramIcon from '../../assets/Iwhite.svg'; // Asegúrate de la ruta correcta
import Whastsapp from '../../assets/ww.svg'; // Asegúrate de la ruta correcta

const Footer = () => {
  return (
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
          <a
            href="/agendar-demo"
            className="bg-yellow-500 text-black py-2 px-6 rounded-md hover:bg-yellow-400 transition-colors duration-300"
          >
            Agendar Demo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
