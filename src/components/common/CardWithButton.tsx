import React from "react";

import s from './cardWithButton.module.scss';

import Button, { Theme } from "./Button";

interface CardWithButtonProps {
    title: string;
    text: string;
    buttonText: string;
    onClick?: () => void;
}

const CardWithButton = (props: CardWithButtonProps) => {
    const { title, text, buttonText, onClick } = props;

    return (
        <div className={s.cardWithButton}>
            <h2>{title}</h2>
            <p>{text}</p>
            <Button
                text={buttonText}
                theme={Theme.Dark}
                onClick={(onClick) ? onClick : () => { }}
            />
        </div>
    );
}

export default CardWithButton;