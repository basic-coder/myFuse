import React from 'react'
import TitleDescriptionBox from '../Common/TitleDescriptionBox/TitleDescriptionBox'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import './testimonial.css'

import testimonialImg1 from '../../images/testimonial/testimonialImg1.png';
import testimonialImg2 from '../../images/testimonial/testimonialImg2.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {

  const items= [
    {
      name: "Rajesh Kumar",
      role: "Web Developer",
      img: testimonialImg1,
      desp: "One of the portal's standout features is its extensive job listings. It covers a wide spectrum of industries and job roles, making it a valuable platform for job seekers  . The search and filter options help users find relevant job openings efficiently."
    },
    {
      name: "Sneha Kumari",
      role: "SDE",
      img: testimonialImg2,
      desp: "With the help of Myfuse, I was able to land my dream job as a software developer. The messaging feature allowed me to connect directly with HR representatives and clarify any doubts I had, making the job application process so much easier."
    },
    {
      name: "Rajesh Kumar",
      role: "Web Developer",
      img: testimonialImg1,
      desp: "One of the portal's standout features is its extensive job listings. It covers a wide spectrum of industries and job roles, making it a valuable platform for job seekers  . The search and filter options help users find relevant job openings efficiently."
    },
    {
      name: "Sneha Kumari",
      role: "SDE",
      img: testimonialImg2,
      desp: "With the help of Myfuse, I was able to land my dream job as a software developer. The messaging feature allowed me to connect directly with HR representatives and clarify any doubts I had, making the job application process so much easier."
    },
  ]

  return (
    <div className='testimonial'>
        <TitleDescriptionBox title="What Graduates Say About Myfuse!" description="Discover what our satisfied customers have to say about their experiences with our products and services. Read these testimonials to gain insights into the positive impact we've had on their lives" />
        
        <Swiper
        // install Swiper modules
        className='testimonialSlider__container'
        spaceBetween={0}
        loop={true}
        slidesPerView={1.2}
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
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
        onSlideChange={() => console.log('slide change')}
      >
        {
          items?.map((item, index) => (<SwiperSlide> <TestimonialCard data={item} key={index} /></SwiperSlide>))
        }
      </Swiper>
    
    </div>
  )
}

export default Testimonial