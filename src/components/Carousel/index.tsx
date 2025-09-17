import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "./Carousel.css";

interface CarouselProps {
  carouselItems: { id: number; img: string; alt?: string; title?: string }[];
}

export function Carousel({ carouselItems }: CarouselProps) {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
        loop
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide-content">
              <img src={item.img} alt={item.alt} className="slide-img" />
              {item.title && <h2 className="slide-title">{item.title}</h2>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
