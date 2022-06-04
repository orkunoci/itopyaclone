import React, { useState } from "react";
import styles from "../styles/hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import pc from "../assets/pc.png";
import collect from "../assets/collect.png";
import islemci from "../assets/islemci.png";
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
import dummyData from "../dummyData";

const Hero = () => {
  const [side, setSide] = useState(true);
  const handleSide = () => {
    setSide(!side);
  };
  return (
    <div className={styles.herocontainer}>
      <div className={styles.sidebar}>
        <div className={styles.leftMenu}>
          <ul>
            {dummyData.map((p, index) => {
              return (
                <li key={index}>
                  <a href="javascript:;" onClick={handleSide}>
                    <span className={styles.icon}>
                      <img src={p.image} alt="" />
                    </span>
                    <span className={styles.text}>{p.name}</span>
                  </a>
                  <div className={side ? styles.sub : styles.disapp}>
                    <a
                      href="javascript:;"
                      className={styles.back}
                      onClick={handleSide}
                    >
                      <BsChevronLeft className={styles.leftarrow} />
                      <span>bilgisayar parçaları</span>
                    </a>
                    <ul>
                      {p.submenu.map((a) => {
                        return (
                          <>
                            <li>
                              <a href="">
                                <span className={styles.icon}>
                                  <img src={a.subimage} alt="" />
                                </span>

                                <span
                                  style={{ textTransform: "capitalize" }}
                                  className={`${styles.text} txt`}
                                >
                                  {a.subname}
                                </span>
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
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
              <a href="">
                <img src={collectbanner} alt="" />
              </a>
            </div>
            <div className={styles.bannerready}>
              <a href="">
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
