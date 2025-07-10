"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components/3d-card";
import {
  CalendarCheck,
  DollarSign,
  MessageSquare,
  Code,
  Star,
  ChevronRight,
  Laptop,
  Settings,
} from "lucide-react";
import Header from "./components/header";
import Title from "./components/title";
import ToolCard from "./components/toolCards";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-darkBgColor">
      <Header />
      <section id="servicios" className="px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="h-screen flex items-center justify-center">
            <Title />
          </div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Nuestros Servicios Innovadores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <CardContainer className="inter-var m-4 w-full sm:w-[80%] lg:w-[100%] border border-white rounded-xl transition-all duration-300 hover:border-neonRed hover:ring-4 hover:ring-neonRed">
              <CardBody className="bg-darkBgColor relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border transition-all duration-300">
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-primaryColor text-white">
                    <CalendarCheck size={32} />
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white mb-4"
                >
                  Agentes IA para Agendar Citas
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-base font-bold text-white dark:text-white"
                >
                  Automatiza la gestión de citas para centros médicos,
                  psicológicos, consultorios y más. Nuestros agentes IA se
                  encargan de la disponibilidad, recordatorios y confirmaciones.
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="text-base py-2 rounded-xl font-normal dark:text-white text-white"
                  >
                    Saber mas →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var m-4 w-full sm:w-[80%] lg:w-[100%] border border-white rounded-xl transition-all duration-300 hover:border-neonRed hover:ring-4 hover:ring-neonRed">
              <CardBody className="bg-darkBgColor relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-primaryColor text-white">
                    <DollarSign size={32} />
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white mb-4"
                >
                  Agentes IA con Agendamiento y Pago
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-base font-bold text-white dark:text-white"
                >
                  Simplifica el proceso de venta permitiendo a tus clientes
                  agendar servicios y realizar pagos de forma integrada y
                  segura, todo gestionado por nuestra IA.
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="text-base py-2 rounded-xl font-normal dark:text-white text-white"
                  >
                    Saber mas →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var m-4 w-full sm:w-[80%] lg:w-[100%] border border-white rounded-xl transition-all duration-300 hover:border-neonRed hover:ring-4 hover:ring-neonRed">
              <CardBody className="bg-darkBgColor relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-primaryColor text-white">
                    <MessageSquare size={32} />
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white mb-4"
                >
                  Chatbots IA para Web y WhatsApp
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-base font-bold text-white dark:text-white"
                >
                  Implementa asistentes virtuales 24/7 en tu web y WhatsApp para
                  vender productos, resolver dudas frecuentes y ofrecer soporte
                  al cliente de manera instantánea.
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="text-base py-2 rounded-xl font-normal dark:text-white text-white"
                  >
                    Saber mas →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var m-4 w-full sm:w-[80%] lg:w-[100%] border border-white rounded-xl transition-all duration-300 hover:border-neonRed hover:ring-4 hover:ring-neonRed">
              <CardBody className="bg-darkBgColor relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-primaryColor text-white">
                    <Code size={32} />
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white mb-4"
                >
                  Desarrollo de Páginas Web
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-base font-bold text-white dark:text-white"
                >
                  Creamos sitios web modernos y funcionales desde cero,
                  adaptados a las necesidades de tu negocio, utilizando las
                  últimas tecnologías, incluyendo inteligencia artificial, para
                  optimizar el rendimiento y asegurar la mejor experiencia de
                  usuario.
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="text-base py-2 rounded-xl font-normal dark:text-white text-white"
                  >
                    Saber mas →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var m-4 w-full sm:w-[80%] lg:w-[100%] border border-white rounded-xl transition-all duration-300 hover:border-neonRed hover:ring-4 hover:ring-neonRed">
              <CardBody className="bg-darkBgColor relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-primaryColor text-white">
                    <Laptop size={32} />
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white mb-4"
                >
                  Rediseño y Optimización Web
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-base font-bold text-white dark:text-white"
                >
                  Mejora el rendimiento, la estética y la funcionalidad de tu
                  sitio web existente utilizando inteligencia artificial.
                  Optimización de velocidad, usabilidad y diseño, con IA
                  integrada para ofrecer una experiencia moderna, eficiente y
                  atractiva a tus usuarios.
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="text-base py-2 rounded-xl font-normal dark:text-white text-white"
                  >
                    Saber mas →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var m-4 w-full sm:w-[80%] lg:w-[100%] border border-white rounded-xl transition-all duration-300 hover:border-neonRed hover:ring-4 hover:ring-neonRed">
              <CardBody className="bg-darkBgColor relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-primaryColor text-white">
                    <Settings size={32} />
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white dark:text-white mb-4"
                >
                  Automatizaciones Personalizadas
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-base font-bold text-white dark:text-white"
                >
                  Desarrollamos soluciones de automatización personalizadas para
                  tu negocio utilizando inteligencia artificial. Optimiza tareas
                  repetitivas, mejora la eficiencia y permite que tu equipo se
                  enfoque en lo que realmente importa.
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="text-base py-2 rounded-xl font-normal dark:text-white text-white"
                  >
                    Saber mas →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="mt-20 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Integrado a las mejores herramientas
            </h2>
          </div>
          
        </div>
      </section>
      <div>
            <div
              className="max-w-7xl mx-auto h-[2px] w-full
                bg-[linear-gradient(90deg,transparent,#EF4444,#F97316,transparent)]"/>
            <ToolCard />
            <div className="max-w-7xl mx-auto h-[2px] w-full
                bg-[linear-gradient(90deg,transparent,#EF4444,#F97316,transparent)]"/>
          </div>
    </div>
  );
};

export default App;
