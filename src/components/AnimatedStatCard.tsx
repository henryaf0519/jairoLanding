// src/components/AnimatedStatCard.tsx

import React, { useEffect, useRef } from 'react';
import { useInView, animate } from "framer-motion";
import { LucideProps } from 'lucide-react';

interface AnimatedStatCardProps {
  label: string;
  targetValue: number;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
  icon: React.ElementType<LucideProps>;
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({
  label,
  targetValue,
  prefix = '',
  suffix = '',
  decimalPlaces = 0,
  icon: Icon,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  
  // === LA CORRECCIÓN ESTÁ AQUÍ ===
  // Cambiamos el margen para asegurar que se active en móviles
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, targetValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = prefix + value.toFixed(decimalPlaces).replace('.', ',') + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, targetValue, prefix, suffix, decimalPlaces]);

  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 hover:border-paradigmaRed/50">
      
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-paradigmaRed/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4">
          <div className="bg-gray-800 p-3 rounded-xl">
            <Icon className="text-paradigmaRed w-6 h-6" />
          </div>
          <p className="text-base text-gray-300 tracking-wider uppercase font-semibold">{label}</p>
        </div>
        
        <div className="flex-grow flex items-center mt-4">
            <p 
                ref={ref}
                className="text-6xl md:text-7xl font-bold text-white"
                style={{fontVariantNumeric: 'tabular-nums'}}
            >
                {prefix}0{suffix}
            </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatCard;