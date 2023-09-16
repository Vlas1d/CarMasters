import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';

import './aboutUsSlider.scss';

import aboutUsImg1 from '../../../images/reviews1.webp';

const AboutUsSlider = () => {

    return (
        <div className='aboutUsSliderBox'>

            <div className="aboutUsSliderContent">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className='aboutUsSlider'
                    slidesPerView={1}
                    spaceBetween={20}
                >
                    <SwiperSlide>
                        <img src={aboutUsImg1} alt="review" />
                        <div>
                            <span>Laura Chaisson</span>
                            <div>In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={aboutUsImg1} alt="review" />
                        <div>
                            <span>Laura Chaisson</span>
                            <div>In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={aboutUsImg1} alt="review" />
                        <div>
                            <span>Laura Chaisson</span>
                            <div>In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default AboutUsSlider;