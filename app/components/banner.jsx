// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        draggable={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#000000",
          "--swiper-navigation-color": "#hex",
        }}
      >
        <SwiperSlide>
          <img src="/slider1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider4.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
