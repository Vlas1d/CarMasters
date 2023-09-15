import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
SwiperCore.use([]);

import 'swiper/scss';
import 'swiper/scss/navigation';

import './mainSlider.scss';

import suv from '../../../images/main/suv.webp';
import car from '../../../images/main/car.webp';
import truck from '../../../images/main/truck.webp';
import van from '../../../images/main/van.webp';
import road from '../../../images/main/road.png';

import { Navigation } from 'swiper/modules';
import Button, { Theme } from "../small/Button";

const MainSlider = () => {

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const buttonNames: Array<string> = [
        'Request a suv',
        'Request a car',
        'Request a truck',
        'Request a van'
    ]

    const handleSlideChange = (swiper: SwiperCore) => {
        setCurrentSlide(swiper.realIndex);
    };

    return (
        <div className='mainSliderBox'>
            <div
                className="mainSliderBox__road"
                style={{ transform: `translate(${5 * currentSlide}%, 0)` }}
            ></div>
            <div className="container">
                <div className="mainSliderContent">
                    <div className="mainSliderContent__text">
                        <h1>The easiest way to buy a car in Canada</h1>
                        <Button text={buttonNames[currentSlide] ?? 'car'} theme={Theme.Light} />
                    </div>
                    <div>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className='mainSlider'
                            onSlideChange={(swiper) => handleSlideChange(swiper)}
                        >
                            <SwiperSlide><img src={suv} alt="suv" /></SwiperSlide>
                            <SwiperSlide><img src={car} alt="car" /></SwiperSlide>
                            <SwiperSlide><img src={truck} alt="truck" /></SwiperSlide>
                            <SwiperSlide><img src={van} alt="van" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSlider;