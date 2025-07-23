import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

  export function testimonies (){
    const cardsData = [
    {
      id: 1,
      title: "Estábamos perdiendo pacientes porque éramos incapaces de responder a los emails",
      description:
        "“Antes, los pacientes nos escribían para pedir cita, pero esos correos quedaban sin respuesta, perdiendo oportunidades constantemente. Orvex optimizó nuestra web e implementó un sistema que responde y agenda automáticamente, transformando nuestra frustración en una agenda gestionada sola, ofreciendo finalmente la experiencia profesional que nuestros pacientes merecen.”",
      color: "bg-white",
      zIndex: 10,
      testimonialAuthor: "Appodium – Consultorio de Psicología",
      img: "/assets/appodium.webp",
    },
    {
      id: 2,
      title:
        "Son el único equipo de diseño al que le confiamos el trabajo de nuestros propios clientes",
      description:
        "“Como empresa audiovisual, nuestro estándar de calidad es todo. Orvex ha demostrado un nivel de compromiso y talento que nos da la total tranquilidad de delegarles proyectos para nuestros clientes más importantes. Entienden nuestra visión y siempre entregan un trabajo que podemos presentar con orgullo en el diseño web y otros.”",
      color: "bg-white",
      zIndex: 20,
      testimonialAuthor: "Cuwo Creativo",
      img: "/assets/cuwo.webp",
    },
    {
      id: 3,
      title: "Crearon el hogar digital perfecto para nuestra comunidad de bienestar",
      description:
        "“Lo que más valoramos de Orvex fue su increíble atención al detalle. Les pedimos una web interactiva y llamativa, y superaron nuestras expectativas. El resultado es una plataforma que no solo funciona a la perfección, sino que ofrece una experiencia visual que ha encantado a nuestra comunidad.”",
      color: "bg-white",
      zIndex: 30,
      testimonialAuthor: "Holiment - Comunidad de Bienesta",
      img: "/assets/holiment.webp",
    },
    {
      id: 4,
      title: "Un apoyo clave",
      description:
        "“Me sorprendió la capacidad de Orvex para entender las necesidades de nuestro negocio. A lo largo de nuestra colaboración, demostraron un gran profesionalismo y compromiso. Sin duda, su apoyo ha sido un factor clave para nuestro éxito.”",
      color: "bg-white",
      zIndex: 50,
      testimonialAuthor: "Milena García - Asesora de Créditos Hipotecarios",
      img: "/assets/milena.webp",
    },
    {
      id: 5,
      title: "Supieron traducir mi marca personal en una landing page que vende",
      description:
        "“Lo que más me gustó de trabajar con Orvex fue cómo unieron la creatividad con la tecnología. Usaron la IA para crear elementos de diseño únicos y construyeron una landing page que no solo respeta mi marca personal, sino que está perfectamente optimizada para alcanzar mis objetivos comerciales.”",
      color: "bg-white",
      zIndex: 60,
      testimonialAuthor: "Sherina - Mentora",
      img: "/assets/sherina.webp",
    }
  ];
    return cardsData

  }



