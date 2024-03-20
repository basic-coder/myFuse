import React from 'react';
import TitleDescriptionBox from '../Common/TitleDescriptionBox/TitleDescriptionBox';
import SliderCard from '../Common/SliderCard/SliderCard';
import './recentjobs.css';

import heroCard1 from '../../images/heroSection/heroCard1.svg';
import heroCard2 from '../../images/heroSection/heroCard2.svg';
import heroCard3 from '../../images/heroSection/heroCard3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {  Autoplay, Navigation } from 'swiper/modules';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RecentJobs = () => {
    const DataArray = [
        {
            company: "Deloitte",
            field: "Technology and IT",
            location: "Bengaluru",
            role: "Associate Analyst",
            logo: heroCard1
        },
        {
            company: "AirBus",
            field: "Technology and IT",
            location: "Bengaluru",
            role: "Associate Analyst",
            logo: heroCard2
        },
        {
            company: "Amdocs",
            field: "Technology and IT",
            location: "Bengaluru",
            role: "Associate Analyst",
            logo: heroCard3
        },
        {
            company: "Deloitte",
            field: "Technology and IT",
            location: "Bengaluru",
            role: "Associate Analyst",
            logo: heroCard1
        },
    ];

    return (
        <div className='recentJobs'>
            <TitleDescriptionBox title="Recent Jobs" description="Recent job trends highlight positions in data analysis, telemedicine, and remote project management." />

            <Swiper
                className='spotlightSlider__container mySwiper'
                spaceBetween={50}
                loop={true}
                slidesPerView={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: true,
                }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                  }}
                breakpoints={{
                    1180: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                }}
                modules={[ Autoplay,Navigation]}
            >
                {DataArray.map((item, index) => (
                    <SwiperSlide key={index}>
                        <SliderCard data={item} />
                    </SwiperSlide>
                ))}

                <div className="controls swiper-controls">
                    <div className="swiper-button swiper-button-prev">
                        <FaChevronLeft />
                    </div>
                    <div className="swiper-button swiper-button-next">
                        <FaChevronRight />
                    </div>
                </div>

            </Swiper>
        </div>
    );
};

export default RecentJobs;
