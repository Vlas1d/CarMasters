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

//------------------

//-------components
const MainSlider = React.lazy(() => import('../../components/common/big/MainSlider'));
import Preloader from '../../components/modal/Preloader';
import TriangleStep from '../../components/common/small/TriangleStep';

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
            </div>
        </>
    );
}

export default Main;