import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//-------styles
import './style.scss';
//------------------

//-------components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Button, { Theme } from './components/common/Button';
import TriangleStep from './components/common/TriangleStep';
import Triangle from './components/common/Triangle';
import Range from './components/common/Range';
import Calculator from './components/common/Calculator';
//------------------

//-------images
import delivery from './images/svg/Delivery.svg';
import car from './images/svg/Car.svg';
import finance from './images/svg/Finance.svg';

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
            </div>


        </div>
    );
}

export default TestComponents;