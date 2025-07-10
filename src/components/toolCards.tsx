import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const logos = [
  {
    src: "https://cdn.prod.website-files.com/66dcd014322ea9965fa61f03/66ee4428ff4a52644731ec76_Logo%20-%20Integraciones.svg",
    alt: "Logo 1",
  },
  {
    src: "https://cdn.prod.website-files.com/66dcd014322ea9965fa61f03/66ee44ba009d6866af615cb8_Logo%20-%20Integraciones-1.svg",
    alt: "Logo 4",
  },
  {
    src: "https://cdn.prod.website-files.com/66dcd014322ea9965fa61f03/66ee44bad17f8a9ced86ba81_Logo%20-%20Integraciones-2.svg",
    alt: "Logo 5",
  },
  {
    src: "https://cdn.prod.website-files.com/66dcd014322ea9965fa61f03/66ee44ba88465e30779eb75f_Logo%20-%20Integraciones-4.svg",
    alt: "Logo 7",
  },
  {
    src: "https://wompi.com/assets/downloadble/logos_wompi/Wompi_LogoPrincipal.svg",
    alt: "Logo 18",
  },
  {
    src: "https://cdn.prod.website-files.com/66dcd014322ea9965fa61f03/66ee44bcae7d4e96939d546c_Logo%20-%20Integraciones-15.svg",
    alt: "Logo 10",
  },
  {
    src: "https://cdn.prod.website-files.com/66dcd014322ea9965fa61f03/66ee44ba88465e30779eb763_Logo%20-%20Integraciones-12.svg",
    alt: "Logo 15",
  },
  { src: "../../assets/OpenAI.svg" },
  { src: "../../assets/OpenAIN.svg" },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
  },
   {
    src: "../../assets/whatsapp.svg",
  },
  {
    src: "../../assets/fb.png",
  },
   {
    src: "../../assets/Instagram_Glyph_Gradient.svg",
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
              <img src={logo.src} className=" h-[100px] " />
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
              <img
                src={logo.src}
                alt={logo.alt}
                className=" h-[100px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToolCard;
