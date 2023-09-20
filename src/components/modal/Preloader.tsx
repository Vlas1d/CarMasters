import React from "react";

import s from './preloader.module.scss';
import prelImg from '../../images/svg/logoPreloader.svg';

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <div>
                <img src={prelImg} alt="logo" />
                <span>Loading...</span>
            </div>
        </div >
    );
}

export default Preloader;