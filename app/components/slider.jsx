import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <Product
            id="1"
            name="Air Jordan 1 Low SE Craft"
            price={95}
            image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            id="2"
            name="Air Jordan 1 Mid"
            price={125}
            image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd4cf472-051a-4699-964b-443b3364b2bb/air-jordan-1-mid-womens-shoes-TB9sVQ.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
          id="3"
            name="Air Jordan 1 Retro High OG"
            price={180}
            image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fd8ed81b-130b-4580-9c8c-bb1d66c77231/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
          id="4"
            name="Air Jordan 1 Element"
            price={200}
            image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fdddfb3c-fc17-45f5-b45a-c824a2683b81/air-jordan-1-element-shoes-Kcsdzl.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
