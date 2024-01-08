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
            name="Air Jordan 1 Hi FlyEase"
            price={150}
            image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0ecb2c88-47db-4021-9c48-e0df34c7b355/air-jordan-1-hi-flyease-mens-shoes-VjGcGX.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            id="2"
            name="Air Jordan 1 Brooklyn"
            price={165}
            image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0a88f98-49f4-4cad-a742-c7c5bbda9ad1/air-jordan-1-brooklyn-womens-boots-kd9QhX.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
          id="3"
            name="Nike Invincible 3"
            price={180}
            image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f4add04d-480d-415c-9ae8-ca8b047ddb5f/invincible-3-mens-road-running-shoes-5ZZ4BQ.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
          id="4"
            name="Nike Air Max 270"
            price={160}
            image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/gorfwjchoasrrzr1fggt/air-max-270-mens-shoes-KkLcGR.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
