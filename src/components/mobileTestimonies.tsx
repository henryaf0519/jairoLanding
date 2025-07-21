// MobileTestimonialsCarousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { testimonies } from "../../utils/utils";

interface CardProps {
  className?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  img: string;
}

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
  const cardsData = testimonies();
  return (
    <div className="mt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-white">
        Lo que dicen de nosotros
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // El carrusel cambia cada 3 segundos
          disableOnInteraction: false,
        }}
        parallax={true} // Activar el efecto Parallax
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
