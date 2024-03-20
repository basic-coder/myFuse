import React from 'react'
import './spotlightSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const SpotlightSlider = ({ items }) => {
  return (
    <div className='spotlightSlider container'>
      <Swiper
        // install Swiper modules
        className='spotlightSlider__container'
        spaceBetween={50}
        loop={true}
        slidesPerView={3}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          1180: {
            slidesPerView: 5,
          },
          767: {
            slidesPerView: 4,
          },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
        onSlideChange={() => console.log('slide change')}
      >
        {
          items?.map((item, index) => (<SwiperSlide> <div className="spotlightSlider__img"> <img key={index} src={item} alt="" /> </div></SwiperSlide>))
        }
      </Swiper>
    </div>
  )
}

export default SpotlightSlider