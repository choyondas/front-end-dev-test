import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

import './Galary.css';

//import all necessary images

import g1 from '../../images/pig/1.png';
import g2 from '../../images/pig/2.png';
import g3 from '../../images/pig/3.png';
import g4 from '../../images/pig/4.png';
import g5 from '../../images/pig/9.png';




const Galary = () => {
    return (
        <div className="galary">
                 <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={g1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={g2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={g3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={g4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={g5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={g1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={g1} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Galary;