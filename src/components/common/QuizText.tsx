import React, { useState } from "react";

import s from './quizText.module.scss';

export enum Size {
    Full,
    Middle
}

interface QuizTextProps {
    question: string;
    detail: string;
    fields: Array<{
        size: Size;
        placeholder: string;
    }>
    callback?: () => void;
}

const QuizText = (props: QuizTextProps) => {
    const { question, detail, fields } = props;

    const [answers, setAnswers] = useState<Map<string, string>>(new Map());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswers((prevAnswers) => new Map().set(event.target.name, event.target.value));
    }

    return (
        <div className={s.quizText}>
            <h4>{question}</h4>
            <span>{detail}</span>
            <div className={s.quizText__fields}>
                {Array.from({ length: fields.length }).map((_, index) => (
                    <>
                        <input
                            name={`field${index}`}
                            value={answers.get(`field${index}`)}
                            placeholder={fields[index].placeholder}
                            onChange={handleChange}
                            style={(fields[index].size === Size.Full) ? { maxWidth: '100%' } : { maxWidth: '222px' }}
                        />
                    </>
                ))}
            </div>
        </div>
    );
}

export default QuizText;