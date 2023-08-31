import React from "react";

import s from './button.module.scss';

export enum Theme {
    Light,
    Dark
}

interface ButtonProps {
    text: string;
    theme: Theme;
    onClick?: () => void;
    isDisabled?: boolean;
}

const Button = (props: ButtonProps) => {
    const { text, theme, onClick } = props;

    return (
        <button
            className={`${s.button} ${theme === Theme.Dark ? s.button__dark : s.button__light}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;