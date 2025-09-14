import React from 'react';
import CalendlyEmbed from '../components/CalendlyEmbed';
import { CheckCircle } from 'lucide-react';

const Schedule: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-darkBgColor text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* --- Contenido de Texto --- */}
        <div className="w-full">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Agenda tu <span className="text-paradigmaRed">Diagnóstico Estratégico</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Este es el primer paso para escalar tu negocio. En esta sesión 1:1, analizaremos tu situación actual y te daremos una hoja de ruta clara para alcanzar tus metas.
          </p>
          <ul className="mt-8 mb-10 space-y-4 text-gray-300 inline-block text-left">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-paradigmaRed w-5 h-5 flex-shrink-0" />
              <span>Análisis 100% personalizado de tu negocio.</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-paradigmaRed w-5 h-5 flex-shrink-0" />
              <span>Identificación de cuellos de botella que frenan tu crecimiento.</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-paradigmaRed w-5 h-5 flex-shrink-0" />
              <span>Recibirás un plan de acción claro y sin compromiso.</span>
            </li>
          </ul>
        </div>

        {/* --- Componente de Calendly --- */}
        <div className="w-full h-[90vh] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
          <CalendlyEmbed url="https://calendly.com/henryaf0519/reunion-demo-orvex" />
        </div>

      </div>
    </div>
  );
};

export default Schedule;