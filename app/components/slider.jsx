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
            name="Air Jordan 1"
            price={199}
            image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd4cf472-051a-4699-964b-443b3364b2bb/air-jordan-1-mid-womens-shoes-TB9sVQ.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            id="2"
            name="Nike Sneakers"
            price={349}
            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            name="Nike Extended"
            price={189}
            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            name="Nike Express"
            price={289}
            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a34f007a106043afb2f3afab00e997ee_9366/Samba_OG_Shoes_White_IG1024_01_standard.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
