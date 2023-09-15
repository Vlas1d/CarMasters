import React, { useState } from "react";

import s from './quizRadio.module.scss';

interface QuizRadioProps {
    question: string;
    detail: string;
    answers: Array<string>;
    callback?: () => void;
}

const QuizRadio = (props: QuizRadioProps) => {
    const { question, detail, answers } = props;

    const [answer, setAnswer] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    }

    return (
        <div className={s.quizRadio}>
            <h4>{question}</h4>
            <span>{detail}</span>
            <div className={s.quizRadio__answers}>
                {Array.from({ length: answers.length }).map((_, index) => (
                    <>
                        <input
                            name="answer"
                            type="radio"
                            value={answers[index]}
                            id={`answer${index}`}
                            checked={(answer === answers[index])}
                            onChange={handleChange}
                        />
                        <label htmlFor={`answer${index}`}>
                            {answers[index]}
                        </label>
                    </>
                ))}
            </div>
        </div>
    );
}

export default QuizRadio;