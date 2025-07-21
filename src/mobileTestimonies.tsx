// MobileTestimonialsCarousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface CardProps {
  className?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  img: string;
}

const cardsData = [
  {
    id: 1,
    title: "Orvex transformó completamente nuestros flujos de trabajo",
    description:
      "“Orvex transformó completamente nuestros flujos de trabajo, ahorrándonos tiempo y aumentando la eficacia. Gracias a su sistema de gestión de citas, todo es mucho más eficiente y organizado.”",
    color: "bg-white",
    zIndex: 10,
    testimonialAuthor: "Daniel Cardona",
    img: "/assets/woman1.png",
  },
  {
    id: 2,
    title:
      "Orvex ha sido increíble para automatizar nuestras tareas de marketing",
    description:
      "“Orvex ha sido increíble para automatizar nuestras tareas de marketing. Es fiable, eficiente y fácil de usar. La integración de pagos y agendamiento de servicios nos ha facilitado la vida.”",
    color: "bg-white",
    zIndex: 20,
    testimonialAuthor: "Aron D'mello",
    img: "/assets/woman1.png",
  },
  {
    id: 3,
    title: "Gracias a Orvex, nuestra agencia funciona mejor que nunca",
    description:
      "“Gracias a Orvex, nuestra agencia funciona mejor que nunca. La automatización de la generación de contenidos y la gestión de citas nos ha ahorrado mucho tiempo y mejorado nuestra productividad.”",
    color: "bg-white",
    zIndex: 30,
    testimonialAuthor: "Alejandro Sarmiento",
    img: "/assets/woman1.png",
  },
  {
    id: 4,
    title:
      "Las herramientas de automatización de Orvex nos han cambiado las reglas del juego",
    description:
      "“Las herramientas de automatización de Orvex nos han cambiado las reglas del juego. Ahora gestionamos citas, recordatorios y pagos automáticamente, lo que mejora nuestra eficiencia diaria.”",
    color: "bg-white",
    zIndex: 40,
    testimonialAuthor: "Sebastián B.",
    img: "/assets/woman1.png",
  },
  {
    id: 5,
    title: "El apoyo de Orvex ha sido excepcional",
    description:
      "“El apoyo de Orvex ha sido excepcional. Hicieron que el proceso de integración de su IA fuera fluido para nuestro equipo. Ahora contamos con asistentes virtuales 24/7 para resolver dudas y ofrecer soporte al cliente.”",
    color: "bg-white",
    zIndex: 50,
    testimonialAuthor: "Hannah Brownlee",
    img: "/assets/woman1.png",
  },
  {
    id: 6,
    title: "Orvex ha agilizado nuestras interacciones con los clientes",
    description:
      "“Orvex ha ayudado a agilizar nuestras interacciones con los clientes y automatizar flujos de trabajo clave, mejorando la eficiencia general. Además, los asistentes virtuales trabajan 24/7 sin descanso.”",
    color: "bg-white",
    zIndex: 60,
    testimonialAuthor: "Christian Perez",
    img: "/assets/woman1.png",
  },
  {
    id: 7,
    title: "Con la IA de Orvex, hemos optimizado nuestros procesos de ventas",
    description:
      "“Con la IA de Orvex, hemos optimizado nuestros procesos de ventas y hemos impulsado la generación de clientes potenciales sin esfuerzo. Ahora, nuestros clientes pueden agendar y pagar con facilidad, todo de forma integrada.”",
    color: "bg-white",
    zIndex: 70,
    testimonialAuthor: "Juan Camilo García",
    img: "/assets/woman1.png",
  },
  {
    id: 8,
    title:
      "Orvex ha hecho que automatizar nuestras tareas de marketing sea sencillo y eficaz",
    description:
      "“Orvex ha hecho que automatizar nuestras tareas de marketing sea sencillo y eficaz. La plataforma ha permitido que nuestros equipos se concentren en tareas de alto valor mientras la IA se encarga del resto.”",
    color: "bg-white",
    zIndex: 80,
    testimonialAuthor: "Daniel Salinas",
    img: "/assets/woman1.png",
  },
  {
    id: 9,
    title:
      "Las herramientas de automatización de Orvex nos permitieron agilizar las operaciones",
    description:
      "“Las herramientas de automatización de Orvex nos permitieron agilizar las operaciones en todos los ámbitos. Lo recomiendo encarecidamente a cualquier empresa que quiera aumentar su eficiencia con IA.”",
    color: "bg-white",
    zIndex: 90,
    testimonialAuthor: "Benedicta Mendez",
    img: "/assets/woman1.png",
  },
  {
    id: 10,
    title:
      "Orvex ha revolucionado nuestra forma de gestionar la atención al cliente",
    description:
      "“Orvex ha revolucionado nuestra forma de gestionar la atención al cliente y la automatización de ventas. Los diseños de su plataforma son impresionantes y las animaciones son de otro nivel. ¡Una experiencia visual increíble!”",
    color: "bg-white",
    zIndex: 100,
    testimonialAuthor: "María R.",
    img: "/assets/woman1.png",
  },
  {
    id: 11,
    title: "La eficacia de nuestro negocio se disparó tras integrar Orvex",
    description:
      "“La eficacia de nuestro negocio se disparó tras integrar Orvex. La plataforma es fácil de usar e increíblemente eficaz. Además, el diseño y las animaciones del sitio web que crearon para nosotros son de clase mundial.”",
    color: "bg-white",
    zIndex: 110,
    testimonialAuthor: "Leo Isaza",
    img: "/assets/woman1.png",
  },
  {
    id: 12,
    title:
      "La forma en que Orvex integra la IA en nuestros procesos es perfecta",
    description:
      "“La forma en que Orvex integra la IA en nuestros procesos es perfecta. Hemos ahorrado mucho tiempo y esfuerzo gracias a sus herramientas, además de tener una web optimizada y moderna.”",
    color: "bg-white",
    zIndex: 120,
    testimonialAuthor: "Santiago Ruiz",
    img: "/assets/woman1.png",
  },
];

const Card: React.FC<CardProps> = ({
  className,
  title,
  description,
  children,
  img,
}) => (
  <div
    className={`w-full bg-white rounded-2xl shadow-xl hover:shadow-2xl p-4 sm:p-6 md:p-8 
              flex flex-col justify-between 
              transition-all duration-300 transform hover:scale-105 
              min-h-[420px] sm:min-h-[380px] md:min-h-[350px]
              ${className}`}
  >
    <div className="flex flex-col items-center space-y-2 text-center">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 break-words">
        {title}
      </h3>
      <p className="text-base sm:text-lg text-gray-600 opacity-90 break-words">
        {description}
      </p>
    </div>

    <div className="flex items-center gap-4 mt-6 flex-wrap">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-4 border-gray-200 shrink-0">
        <img src={img} alt="Avatar" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow break-words text-sm sm:text-base">
        {children}
      </div>
    </div>
  </div>
);

const MobileTestimonialsCarousel: React.FC = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-white">
        Lo que dicen de nosotros
      </h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
      >
        {cardsData.map((card) => (
          <SwiperSlide key={card.id}>
            <Card
              className={`bg-gradient-to-br ${card.color} border-2 border-black rounded-2xl`}
              title={card.title}
              description={card.description}
              img={card.img}
            >
              <div className="text-sm opacity-60">{card.testimonialAuthor}</div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileTestimonialsCarousel;
