import React from "react";
import "./Compt3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { HiMinus } from "react-icons/hi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Compt3() {
  return (
    <div id="compt3_div">
    <h3 id="compt3_h3"><HiMinus color="whitesmoke" /> BENEFITS <HiMinus color="whitesmoke" /></h3>
    <h2 id="compt3_h4">We Help You To Grow</h2>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
    </div>
  );
}

export default Compt3;
