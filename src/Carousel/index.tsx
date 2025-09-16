import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "./Carousel.css";
interface CarouselProps {
  carouselItems: { id: number; img: string; alt?: string }[];
}

export function Carousel({ carouselItems }: CarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="mySwiper"
      loop
    >
      {carouselItems.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.img} alt={item.alt} className="carousel-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
