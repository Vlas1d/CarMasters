import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';

import './blogSlider.scss';

import BlogCard from "../cards/BlogCard";
import Button, { Theme } from "../small/Button";

import blogImg1 from '../../../images/blog/blog1.webp';
import blogImg2 from '../../../images/blog/blog2.webp';
import blogImg3 from '../../../images/blog/blog3.webp';
import blogImg4 from '../../../images/blog/blog4.webp';
import blogImg5 from '../../../images/blog/blog5.webp';
import blogImg6 from '../../../images/blog/blog6.webp';
import blogImg7 from '../../../images/blog/blog7.webp';
import blogImg8 from '../../../images/blog/blog8.webp';

const BlogSlider = () => {

    return (
        <div className='blogSliderBox'>
            <div className='blogSliderBox__text'>
                <h2>Interesting to read</h2>
                <Button text="all articles" theme={Theme.Light} />
            </div>
            <div className="blogSliderContent">
                <Swiper
                    navigation={true}
                    modules={[]}
                    className='blogSlider'
                    slidesPerView={3}
                    spaceBetween={20}
                >
                    <SwiperSlide>
                        <BlogCard
                            img={blogImg1}
                            date='10 May, 2020'
                            name='How to save on buying a car? Why is it better to buy from us'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard
                            img={blogImg2}
                            date='10 May, 2020'
                            name='How to save on buying a car? Why is it better to buy from us'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard
                            img={blogImg3}
                            date='10 May, 2020'
                            name='How to save on buying a car? Why is it better to buy from us'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard
                            img={blogImg4}
                            date='10 May, 2020'
                            name='How to save on buying a car? Why is it better to buy from us'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard
                            img={blogImg5}
                            date='10 May, 2020'
                            name='How to save on buying a car? Why is it better to buy from us'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard
                            img={blogImg6}
                            date='10 May, 2020'
                            name='How to save on buying a car? Why is it better to buy from us'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard
                            img={blogImg7}
                            date='10 May, 2020'
                            name='How to save on buying a car? Why is it better to buy from us'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard
                            img={blogImg8}
                            date='10 May, 2020'
                            name='How to save on buying a car? Why is it better to buy from us'
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default BlogSlider;