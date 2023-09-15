import React from "react";

import s from './header.module.scss';

import logo from '../../../images/svg/logo.svg';

import Button, { Theme } from "../small/Button";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__logo}>
                <img src={logo} alt="logo" />
                <span >VAC</span>
            </div>
            <div className={s.header__buttons}>
                <Button text="inventory" theme={Theme.Light} />
                <Button text="request a car" theme={Theme.Dark} />
                <button className={s.header__burger}>
                    <span></span>
                </button>
            </div>
        </div>
    );
}

export default Header;