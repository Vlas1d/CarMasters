import React from "react";

import s from './triangleStep.module.scss';

import triangle from '../../../images/svg/triangle.svg';

interface TriangleStepProps {
    id: number;
    title: string;
    text: string;
}

const TriangleStep = (props: TriangleStepProps) => {
    const { id, title, text } = props;

    return (
        <div className={s.triangleStep}>
            <div className={s.triangleStep__step}>
                <img src={triangle} alt="triangle" />
                <span>{id}</span>
            </div>
            <div className={s.triangleStep__text}>
                <span>{title}</span>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default TriangleStep;