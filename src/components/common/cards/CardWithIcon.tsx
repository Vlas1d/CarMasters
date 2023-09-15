import React from "react";

import s from './cardWithIcon.module.scss';

interface CardWithIconProps {
    title: string;
    text: string;
    icon: string;
}

const CardWithIcon = (props: CardWithIconProps) => {
    const { title, text, icon } = props;

    return (
        <div className={s.cardWithIcon}>
            <div>
                <img src={icon} alt={icon} />
                <h4>{title}</h4>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default CardWithIcon;