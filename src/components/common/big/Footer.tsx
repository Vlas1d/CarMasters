import React from "react";
import { Link } from 'react-router-dom';

import s from './footer.module.scss';

import logo from '../../../images/svg/logo-light.svg';
import instagram from '../../../images/svg/instagram.svg';
import facebook from '../../../images/svg/facebook.svg';
import youtube from '../../../images/svg/youtube.svg';
import logoId from '../../../images/svg/logo-id.svg';


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__logo}>
                <img src={logo} alt="logo" />
                <span >VAC</span>
            </div>
            <div className={s.footer__nav}>
                <Link to='/terms'>Terms</Link>
                <Link to='/privacy'>Privacy</Link>
            </div>
            <div className={s.footer__social}>
                <a href="https://instagram.com" target="_blank">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="https://facebook.com" target="_blank">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="https://youtube.com" target="_blank">
                    <img src={youtube} alt="youtube" />
                </a>
            </div>
            <div className={s.footer__copyright}>
                <span>Created by
                    <img src={logoId} alt="logo" />
                </span>
                <span>
                    ©Copyright, 2020. Vehicle Approval
                </span>
            </div>
        </div>
    );
}

export default Footer;