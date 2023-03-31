import React from "react";
import styles from "../styles/sections.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Section = ({ product }) => {
  return (
    <div className={styles.sec}>
      <h4>
        {product.category}{" "}
        <a href="#" style={{ color: "#3333aa" }}>
          Tümünü Gör
        </a>
      </h4>
      <div className={styles.secslider}>
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          modules={[Navigation, Pagination]}
          className="mySwiper sectionswiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {product.prodmenu.map((a, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="imgcnt">
                  {" "}
                  <a href="#">
                    {" "}
                    <img src={a.image} alt="" />
                  </a>
                  <a href="#">
                    <img src={a.brandimg} alt="" />
                  </a>
                </div>
                <a id="secname" href="#" className={styles.secname}>
                  {a.name}
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Section;
