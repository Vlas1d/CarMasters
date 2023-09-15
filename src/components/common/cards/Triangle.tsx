import React from "react";

import s from './triangle.module.scss';

import triangle from '../../../images/svg/big-triangle.svg';

interface TriangleProps {
    image: string;
    title: string;
    text: string;
    upsideDown?: boolean;
}

const Triangle = (props: TriangleProps) => {
    const { image, title, text, upsideDown } = props;

    return (
        <div className={`${s.triangle} ${upsideDown ? s.upsideDown : ''}`}>
            <img src={triangle} alt="triangle" />
            <div className={s.triangle__content}>
                <img src={image} alt="icon" />
                <span>{title}</span>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Triangle;