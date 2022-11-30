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
      <h3 id="compt3_h3">
        <HiMinus color="whitesmoke" /> BENEFITS <HiMinus color="whitesmoke" />
      </h3>
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
        <SwiperSlide>
          <div className="compt3_div" id="compt3_div1">
            <img src="https://bookpresstheme.com/html/assets/images/index2/icon-4.png" alt="" className="compt3_img"/>
            <h2 className="compt3_h2">Grow Your Personality</h2>
            <p className="compt3_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,cumque.</p>
            <p className="compt3_p1">Learn More</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="compt3_div" id="compt3_div2">
            <img src="https://bookpresstheme.com/html/assets/images/index2/icon-5.png" alt="" className="compt3_img"/>
            <h2 className="compt3_h2">Grow Your Personality</h2>
            <p className="compt3_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,cumque.</p>
            <p className="compt3_p1">Learn More</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="compt3_div" id="compt3_div3">
            <img src="https://bookpresstheme.com/html/assets/images/index2/icon-6.png" alt="" className="compt3_img"/>
            <h2 className="compt3_h2">Grow Your Personality</h2>
            <p className="compt3_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,cumque.</p>
            <p className="compt3_p1">Learn More</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Compt3;
