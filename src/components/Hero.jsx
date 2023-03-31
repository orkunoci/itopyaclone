import React, { useState } from "react";
import styles from "../styles/hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import collect from "../assets/collect.png";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import sbanner1 from "../assets/sbanner1.jpg";
import sbanner2 from "../assets/sbanner2.jpg";
import sbanner3 from "../assets/sbanner3.jpg";
import collectbanner from "../assets/collectbanner.jpg";
import hazisrsistmlerbanner from "../assets/hazirsistemlerbanner.jpg";
import { BsChevronLeft } from "react-icons/bs";

import Sidebar from "./Sidebar";

const Hero = () => {
  return (
    <div className={styles.herocontainer}>
      <div className={styles.sidebar}>
        <div className={styles.leftMenu}>
          <Sidebar />
        </div>
        <a className={styles.collectcomputer}>
          <span>
            <img src={collect} alt="" />
          </span>
          <span>
            <em>kendin</em>
            <strong>topla</strong>
          </span>
        </a>
      </div>
      <div className={styles.midslide}>
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          modules={[Navigation, Pagination]}
          className="mySwiper heroslider"
        >
          <SwiperSlide>
            <img src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.rightblock}>
        <div className={styles.gamerSlider}>
          <div className={styles.sliderWrapper}>
            <Swiper
              navigation={true}
              pagination={{
                clickable: true,
              }}
              mousewheel={true}
              modules={[Navigation, Pagination]}
              className="mySwiper rightSlider"
            >
              <SwiperSlide>
                <img src={sbanner1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sbanner2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sbanner3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.banners}>
            <div className={styles.bannercollect}>
              <a href="/">
                <img src={collectbanner} alt="" />
              </a>
            </div>
            <div className={styles.bannerready}>
              <a href="/">
                <img src={hazisrsistmlerbanner} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
