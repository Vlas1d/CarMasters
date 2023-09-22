import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';

//-------styles
import '../../style.scss';
import s from './main.module.scss';
//------------------

//-------images
import hondaImg from '../../images/main/HondaAccord.webp';
import lexusImg from '../../images/main/Lexus.webp';
import phoneUnderImg from '../../images/main/phoneUnder.webp';
import phoneUpperImg from '../../images/main/phoneUpper.webp';

import deliveryImg from '../../images/svg/Delivery.svg';
import financeImg from '../../images/svg/Finance.svg';
import carImg from '../../images/svg/car.svg';

import car1Img from '../../images/main/Honda.webp';
import car2Img from '../../images/main/Corola.webp';

//------------------

//-------components
const MainSlider = React.lazy(() => import('../../components/common/big/MainSlider'));
import Preloader from '../../components/modal/Preloader';
import TriangleStep from '../../components/common/small/TriangleStep';
import Triangle from '../../components/common/cards/Triangle';
import Button, { Theme } from '../../components/common/small/Button';

//------------------

const Main = () => {

    const steps: Array<Array<string>> = [
        [
            'First Contact',
            'Tell us what your dream vehicle is.'
        ],
        [
            'Vehicle Selection',
            'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.'
        ],
        [
            'Secure Financing',
            'You work with a dedicated Qualified Agent to secure financing on your terms.'
        ],
        [
            'Vehicle Delivery',
            'We deliver your car to your home or office for you to test drive.'
        ],
        [
            'Getting Vehicle',
            'If you love the vehicle, you sign the paperwork and keep the car.'
        ],
    ];
    const advantages: Array<Array<string>> = [
        [
            deliveryImg,
            'Vehicle Delivery',
            'We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.'
        ],
        [
            financeImg,
            'Auto Financing',
            'We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%'
        ],
        [
            carImg,
            'Huge Inventory',
            'We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you'
        ]
    ]

    return (
        <>
            <div className='wrapper'>
                <Suspense fallback={<Preloader />}>
                    <MainSlider />
                </Suspense>

                <div className={`${s.cars} containerFull`}>
                    <div className={s.cars__card}>
                        <h2>How does it work?</h2>
                        <h3>From your Phone to your Home</h3>
                        <p>We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.</p>
                    </div>
                    <div className={s.cars__cars}>
                        <img className={s.hondaImg} src={hondaImg} alt='honda' />
                        <img className={s.lexusImg} src={lexusImg} alt='lexus' />
                    </div>
                </div>
                <div className={`${s.steps} container`}>
                    <div className={s.steps__text}>
                        <h2>Your perfect car in 5 easy steps</h2>
                        {
                            Array.from({ length: steps.length }).map((_, index) => (
                                <TriangleStep
                                    id={index + 1}
                                    title={steps[index][0]}
                                    text={steps[index][1]}
                                />
                            ))
                        }
                    </div>
                    <div className={s.steps__images}>
                        <img className={s.underImg} src={phoneUnderImg} alt='phone' />
                        <img className={s.upperImg} src={phoneUpperImg} alt='phone' />
                    </div>
                </div>
                <div className={`${s.advantages} container`}>
                    <h2>Advantages of working with us</h2>
                    <div className={s.advantages__triangles}>
                        {
                            Array.from({ length: advantages.length }).map((_, index) => (
                                <Triangle
                                    upsideDown={!(index % 2 === 0) ? true : false}
                                    image={advantages[index][0]}
                                    title={advantages[index][1]}
                                    text={advantages[index][2]}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={`${s.catalog} container`}>
                    <div className={s.catalog__images}>
                        <img src={car1Img} alt='car' />
                        <img src={car2Img} alt='car' />
                    </div>
                    <div className={s.catalog__text}>
                        <h2>Сhoose your dream vehicle in our catalog</h2>
                        <div>
                            <p>In our catalogue there are many models of vehicles. Choose your car to your liking.</p>
                            <Button text='inventory' theme={Theme.Dark} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Main;