import { Boxes } from "./background-boxes";
import AnimatedGradientButton from "./button";
import React, { useState, useEffect } from "react";

const Title = () => {
  const titles = [
    "Inteligencia Artificial",
    "Automatización Inteligente",
    "Desarrollo Web de Impacto",
    "Transformación Digital",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 15;
  const deletingSpeed = 10;
  const pauseDuration = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[titleIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
      }
    };

    let timer: number;

    if (!isDeleting && currentText === titles[titleIndex]) {
      // Pause when word is fully typed
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentText === "") {
      // Move to next word when deleted
      setIsDeleting(false);
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    } else {
      // Continue typing or deleting
      timer = window.setTimeout(
        handleTyping,
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);
  return (
    <div className="h-96 relative w-full overflow-hidden bg-darkBgColor flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-darkBgColor z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mt-2 leading-tight text-white relative z-20">
          Potencia Tu Negocio con
        </h1>
        <h1 className="h-[90px] text-5xl md:text-6xl leading-[1.5] md:leading-[1.5] font-extrabold text-center mt-2   relative z-20 bg-gradient-to-r from-red-600 via-[#ff0000] to-red-400 bg-clip-text text-transparent ">
          {currentText}
        </h1>
        <p className="w-3/4 mt-5  text-center text-gray-300 relative z-20 ">
          En Orvex, creamos agentes de IA inteligentes y desarrollamos páginas
          web de vanguardia para transformar tu operación y maximizar tus
          resultados.
        </p>
        <AnimatedGradientButton
          onClick={() => alert("Button Clicked!")}
          className="mt-10"
        >
          Agendar Demo
        </AnimatedGradientButton>
      </div>
    </div>
  );
};

export default Title;
