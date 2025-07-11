import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare global {
    interface Window {
        gsap: any;
        ScrollTrigger: any;
    }
}
interface CardProps {
    className?: string;
    title: string;
    description: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, title, description, children }) => (
    <div className={`w-full h-full rounded-2xl shadow-2xl p-8 flex flex-col justify-between ${className}`}>
        <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-2 text-lg opacity-80">{description}</p>
        </div>
        <div>{children}</div>
    </div>
);

const cardsData = [
    {
        id: 1,
        title: 'Dapta transformó completamente nuestros flujos de trabajo',
        description: '“Dapta transformó completamente nuestros flujos de trabajo, ahorrándonos tiempo y aumentando la eficacia. No puedo recomendarlo lo suficiente.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 10,
        testimonialAuthor: 'Daniel Cardona'
    },
    {
        id: 2,
        title: 'Dapta ha sido increíble para automatizar nuestras tareas de marketing',
        description: '“Dapta ha sido increíble para automatizar nuestras tareas de marketing. Es fiable, eficiente y fácil de usar.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 20,
        testimonialAuthor: 'Aron D\'mello'
    },
    {
        id: 3,
        title: 'Gracias a Dapta, nuestra agencia funciona mejor que nunca',
        description: '“Gracias a Dapta, nuestra agencia funciona mejor que nunca. La automatización de la generación de contenidos nos ha ahorrado mucho tiempo.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 30,
        testimonialAuthor: 'Alejandro Sarmiento'
    },
    {
        id: 4,
        title: 'Las herramientas de automatización de Dapta nos han cambiado las reglas del juego',
        description: '“Las herramientas de automatización de Dapta nos han cambiado las reglas del juego. Ahora son una parte esencial de nuestras operaciones diarias.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 40,
        testimonialAuthor: 'Sebastián B.'
    },
    {
        id: 5,
        title: 'El apoyo de Dapta ha sido excepcional',
        description: '“El apoyo de Dapta ha sido excepcional. Hicieron que el proceso de integración fuera fluido para nuestro equipo.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 50,
        testimonialAuthor: 'Hannah Brownlee'
    },
    {
        id: 6,
        title: 'Dapta ha ayudado a agilizar nuestras interacciones con los clientes',
        description: '“Dapta ha ayudado a agilizar nuestras interacciones con los clientes y a automatizar los flujos de trabajo clave, mejorando la eficiencia general.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 60,
        testimonialAuthor: 'Christian Perez'
    },
    {
        id: 7,
        title: 'Con la IA de Dapta, hemos optimizado nuestros procesos de ventas',
        description: '“Con la IA de Dapta, hemos optimizado nuestros procesos de ventas y hemos impulsado la generación de clientes potenciales sin esfuerzo.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 70,
        testimonialAuthor: 'Juan Camilo García'
    },
    {
        id: 8,
        title: 'Dapta ha hecho que automatizar nuestras tareas de marketing sea sencillo y eficaz',
        description: '“Dapta ha hecho que automatizar nuestras tareas de marketing sea sencillo y eficaz. Ha supuesto un cambio total para nosotros.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 80,
        testimonialAuthor: 'Daniel Salinas'
    },
    {
        id: 9,
        title: 'Las herramientas de automatización de Dapta nos permitieron agilizar las operaciones',
        description: '“Las herramientas de automatización de Dapta nos permitieron agilizar las operaciones en todos los ámbitos. Lo recomiendo encarecidamente a cualquier empresa en crecimiento.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 90,
        testimonialAuthor: 'Benedicta Mendez'
    },
    {
        id: 10,
        title: 'Dapta ha revolucionado nuestra forma de gestionar la atención al cliente',
        description: '“Dapta ha revolucionado nuestra forma de gestionar la atención al cliente y la automatización de las ventas. Es una herramienta imprescindible.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 100,
        testimonialAuthor: 'María R.'
    },
    {
        id: 11,
        title: 'La eficacia de nuestro negocio se disparó tras integrar Dapta',
        description: '“La eficacia de nuestro negocio se disparó tras integrar Dapta. La plataforma es fácil de usar e increíblemente eficaz.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 110,
        testimonialAuthor: 'Leo Isaza'
    },
    {
        id: 12,
        title: 'La forma en que Dapta integra la IA en nuestros procesos es perfecta',
        description: '“La forma en que Dapta integra la IA en nuestros procesos es perfecta. Hemos ahorrado mucho tiempo y esfuerzo gracias a sus herramientas.”',
        color: 'bg-white',  // Fondo blanco
        zIndex: 120,
        testimonialAuthor: 'Santiago Ruiz'
    }
];



export const VerticalScrollTestimonials: React.FC = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (gsap && ScrollTrigger && mainContainerRef.current) {
        gsap.registerPlugin(ScrollTrigger);

        const pinElement = pinContainerRef.current;
        // Animar todas las tarjetas excepto la primera
        const cardsToAnimate = cardRefs.current.slice(1);

        if (!pinElement || cardsToAnimate.some(card => !card)) return;

        // Establecer el estado inicial de las tarjetas que se animarán
        gsap.set(cardsToAnimate, {
            y: 100,
            scale: 0.9,
            opacity: 0,
            transformOrigin: 'top center',
        });

        // Crear una línea de tiempo de GSAP controlada por el desplazamiento
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pinElement,
                pin: true,
                start: "top top",
                end: `+=${cardsToAnimate.length * 500}`, 
                scrub: 2, 
            },
        });

        // Animación para cada tarjeta
        cardsToAnimate.forEach((card, index) => {
            const rotationDeg = -4 + index; // Inicia en -4 y se incrementa
            tl.to(card, {
                y: 0,
                scale: 1,
                opacity: 1,
                rotation: rotationDeg, // Aplica la rotación incremental
                ease: "power2.inOut",
            });
        });
    }

    // Función de limpieza para evitar fugas de memoria al eliminar ScrollTriggers
    return () => {
        ScrollTrigger?.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main ref={mainContainerRef}>
        <section ref={pinContainerRef} className="h-screen flex items-center justify-center">
            <div className="relative w-[320px] h-[480px] md:w-[400px] md:h-[600px]">
                {cardsData.map((card, index) => (
                    <div
                        key={card.id}
                        ref={el => (cardRefs.current[index] = el)}
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ zIndex: card.zIndex }}
                    >
                        <Card
                            className={`bg-gradient-to-br ${card.color} border-2 border-black` }
                            title={card.title}
                            description={card.description}
                        >
                           <div className="text-sm opacity-60">Contenido de la tarjeta #{card.id}.</div>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    </main>
  );
};

export default VerticalScrollTestimonials;