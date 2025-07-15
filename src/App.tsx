"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components/3d-card";
import {
  CalendarCheck,
  DollarSign,
  MessageSquare,
  Code,
  Laptop,
  Settings,
} from "lucide-react";
import Header from "./components/header";
import ToolCard from "./components/toolCards";
import { VerticalScrollTestimonials } from "./components/testimonies";
import Footer from "./components/footer";
import { useScroll, useTransform } from "motion/react";
import { TitleAnimate } from "./components/titleAnimate";

const App: React.FC = () => {
   const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
   const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="min-h-screen bg-darkBgColor">
      <Header />
       <div
            className="h-[200vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
            ref={ref}
          >
            <TitleAnimate
            title=" Potencia Tu Negocio con"
            description=" En Orvex, creamos agentes de IA inteligentes y desarrollamos páginas
          web de vanguardia para transformar tu operación y maximizar tus
          resultados."
              pathLengths={[
                pathLengthFirst,
                pathLengthSecond,
                pathLengthThird,
                pathLengthFourth,
                pathLengthFifth,
              ]}
            />
          </div>
      <section id="servicios" className="px-6 bg-black">
        <div className="max-w-7xl mx-auto">
         
          <div className=" flex items-center justify-center">
            
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
                bg-[linear-gradient(90deg,transparent,#EF4444,#F97316,transparent)]"
        />
        <ToolCard />
        <div
          className="max-w-7xl mx-auto h-[2px] w-full
                bg-[linear-gradient(90deg,transparent,#EF4444,#F97316,transparent)]"
        />
      </div>
      <section id="servicios" className="px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <VerticalScrollTestimonials />
        </div>
      </section>
      <section className="mt-[100px]">
        <div>
          <div
            className="max-w-7xl mx-auto h-[2px] w-full
                bg-[linear-gradient(90deg,transparent,#EF4444,#F97316,transparent)]"
          />
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default App;
