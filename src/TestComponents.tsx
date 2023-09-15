import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//-------styles
import './style.scss';
//------------------

//-------components
import Header from './components/common/big/Header';
import Footer from './components/common/big/Footer';
import Button, { Theme } from './components/common/small/Button';
import TriangleStep from './components/common/small/TriangleStep';
import Triangle from './components/common/cards/Triangle';
import Range from './components/common/small/Range';
import Calculator from './components/common/big/Calculator';
import MetricCard from './components/common/cards/MetricCard';
import CardWithButton from './components/common/cards/CardWithButton';
import CardWithIcon from './components/common/cards/CardWithIcon';
import BlogCard from './components/common/cards/BlogCard';
import InventoryCard from './components/common/cards/InventoryCard';
import VideoCard from './components/common/cards/VideoCard';
import VideoPopUp from './components/modal/VideoPopUp';
import MainSlider from './components/common/big/MainSlider';
import QuizRadio from './components/common/QuizRadio';
//------------------

//-------images
import delivery from './images/svg/Delivery.svg';
import car from './images/svg/Car.svg';
import finance from './images/svg/Finance.svg';
import procent from './images/svg/procent.svg';

import blogImg from './images/blog/blog1.webp';
import inventoryImg from './images/inventory/car1.webp';
import videoImg from './images/video/video1.webp';

const youtubeVideo: JSX.Element = (
    <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/BBRacI0G0Xs"
        title="*SOLD* 2018 Chevrolet Cruze LT Hatchback Walkaround, Start up, Tour and Overview"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
);

//------------------

const TestComponents = () => {
    return (
        <div className='wrapper' style={{ paddingBottom: '100px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
            <Header />
            <Footer />

            <div className='container' style={{ paddingBottom: '100px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
                <Button text='inventory' theme={Theme.Light} />
                <Button text='Request a car' theme={Theme.Dark} />

                <TriangleStep
                    id={1}
                    title='Vehicle Selection'
                    text='One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.'
                />
                <Triangle
                    image={delivery}
                    title='Vehicle Delivery'
                    text='We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.'
                />
                <Triangle
                    image={finance}
                    title='Auto Financing'
                    text='We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%'
                    upsideDown={true}
                />
                <Range min={0} max={500000} value={150000} name='Loan Amount' textBeforeVal='$' />
                <Calculator />
                <MetricCard num='7,988+' text='Sold Cars' />
                <CardWithButton
                    title='Our credit policy'
                    text='You want to secure a loan that works for your budget. Here at VAC we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan.'
                    buttonText='Request a Car'
                />
                <CardWithIcon
                    title='What are my interest rate options?'
                    text='We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is critical for determining the total cost of your auto financing. Interest rates are based on many factors including the loan amount, your credit score, and your budget. We help you find the lowest interest rates available for your auto loan.'
                    icon={procent}
                />
                <BlogCard
                    img={blogImg}
                    date='10 May, 2020'
                    name='How to save on buying a car? Why is it better to buy from us'
                />
                <InventoryCard
                    img={inventoryImg}
                    name='Porsche Panamera II Turbo S E-Hybrid'
                    price={150000}
                    tegs={['2012 year', 'Sedan', 'Transmission', 'Kilometres']}
                />
                <VideoCard
                    img={videoImg}
                    name={`VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback`}
                    iframe={youtubeVideo}
                />
                <QuizRadio
                    question="What's your budget?"
                    detail='Find vehicle options that fit your budget.'
                    answers={
                        ['Under $250/Month', '$250-374/Month', '$374-500/Month', 'Over $500/Month']
                    }
                />

            </div>
            <MainSlider />

        </div>
    );
}

export default TestComponents;