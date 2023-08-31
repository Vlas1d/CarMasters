import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//-------styles
import './style.scss';
//------------------

//-------components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Button, { Theme } from './components/common/Button';
//------------------

//-------images

//------------------

const TestComponents = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Button text='inventory' theme={Theme.Light} />
            <Button text='Request a car' theme={Theme.Dark} />
            <Footer />
        </div>
    );
}

export default TestComponents;