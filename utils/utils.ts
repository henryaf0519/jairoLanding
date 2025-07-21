import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

  export function testimonies (){
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
    return cardsData

  }



