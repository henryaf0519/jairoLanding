import { useEffect, useRef } from "react";
import gsap from "gsap";
const logos = [
  {
    src: "/assets/airtable.webp",
    alt: "Logo 1",
  },
  {
    src: "/assets/calendar.webp",
    alt: "Logo 4",
  },
  {
    src: "/assets/chatgpt.webp",
    alt: "Logo 5",
  },
  {
    src: "/assets/facebook.webp",
    alt: "Logo 7",
  },
   {
    src: "/assets/gemini.webp",
    alt: "Logo 7",
  },
  {
    src: "/assets/gmail.webp",
    alt: "Logo 18",
  },
  {
    src: "/assets/instagram.webp",
    alt: "Logo 18",
  },
  {
    src: "/assets/mailchimp.webp",
    alt: "Logo 18",
  },
  {
    src: "/assets/meta.webp",
    alt: "Logo 10",
  },
  {
    src: "/assets/openai.webp",
    alt: "Logo 15",
  },
  { src: "/assets/sheets.webp" },
  { src: "/assets/whatsapp.webp" },
  {
    src: "/assets/wompi.webp",
  },
];

const ToolCard = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    // Animamos el wrapper: xPercent -50 recorre justo la mitad de su ancho
    tl.to(wrapperRef.current, {
      xPercent: -50,
      duration: 20,
    });

    // Limpieza al desmontar
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div ref={wrapperRef} className="flex flex-nowrap w-max">
        {/* Primer set */}
        <ul className="flex items-center [&_li]:mx-8 [&_li]:flex-shrink-0">
          {logos.map((logo, i) => (
            <li key={i}>
              <img src={logo.src} className="h-[50px] " />
            </li>
          ))}
        </ul>
        {/* Segundo set, duplicado para el bucle */}
        <ul
          className="flex items-center [&_li]:mx-8 [&_li]:flex-shrink-0"
          aria-hidden="true"
        >
          {logos.map((logo, i) => (
            <li key={i}>
              <img src={logo.src} alt={logo.alt} className="h-[50px]" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToolCard;
