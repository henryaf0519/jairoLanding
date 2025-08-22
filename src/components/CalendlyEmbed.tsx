// src/components/calendlyEmbed.tsx
import React, { useEffect } from 'react';

// Le decimos a TypeScript que 'Calendly' puede existir en el objeto 'window'
declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets: () => void;
    };
  }
}

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  useEffect(() => {
    // 1. Cargar el script de Calendly solo si no existe ya
    const SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js';
    if (!document.querySelector(`script[src="${SCRIPT_URL}"]`)) {
      const script = document.createElement('script');
      script.src = SCRIPT_URL;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // 2. Este efecto se ejecuta cada vez que el componente se renderiza.
    //    Le dice a Calendly que busque y active todos los widgets en la página.
    //    Esto soluciona el problema de que el widget no aparezca.
    const initializeWidgets = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidgets();
      }
    };

    // Esperamos un momento para asegurarnos de que el script de Calendly
    // haya tenido tiempo de cargarse y ejecutarse, especialmente la primera vez.
    const timer = setTimeout(initializeWidgets, 100);

    // Limpieza
    return () => clearTimeout(timer);

  }, [url]); // Se ejecuta de nuevo si la URL cambia

  return (
    <div 
      className="calendly-inline-widget w-full" 
      data-url={url} 
      data-background-color="000000"
      data-text-color="ffffff"
      data-primary-color="ff0000"
      style={{ minWidth: '320px', height: '100%' }}
    >
      <div className="flex justify-center items-center h-full">
        <p className="text-white">Cargando agendador...</p>
      </div>
    </div>
  );
};

export default CalendlyEmbed;