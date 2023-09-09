import React, { useState, useEffect } from "react";

import s from './calculator.module.scss';

import Range from "./Range";
import Button, { Theme } from "./Button";

const Calculator = () => {

    const [price, setPrice] = useState({
        type: 'poor',
        amount: 150000,
        duration: 18,
        monthlyPayment: 0
    });

    const setAmount = (val: number) => {
        setPrice(prevPrice => ({ ...prevPrice, amount: val }));
    }
    const setDuration = (val: number) => {
        setPrice(prevPrice => ({ ...prevPrice, duration: val }))
    }

    const setAmountForType = (type: string) => {
        switch (type) {
            case 'poor': return 150000; break;
            case 'average': return 400000; break;
            case 'good': return 700000; break;
            default: return 400000; break;
        }
    }
    const setDurationForType = (type: string) => {
        switch (type) {
            case 'poor': return 18; break;
            case 'average': return 30; break;
            case 'good': return 12; break;
            default: return 30; break;
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice({
            ...price,
            type: event.target.id,
            amount: setAmountForType(event.target.id),
            duration: setDurationForType(event.target.id)
        });
    }

    useEffect(() => {
        setPrice(prevPrice => (
            {
                ...prevPrice,
                monthlyPayment: Math.floor(prevPrice.amount / prevPrice.duration)
            }
        ));
    }, [price.amount, price.duration]);

    return (
        <div className={s.calculator}>
            <div className={s.calculator__inputs}>
                <div className={s.calculator__price}>
                    <input
                        type="radio"
                        name="price"
                        id='poor'
                        checked={price.type === 'poor'}
                        onChange={handleChange}
                    />
                    <label htmlFor='poor'>poor</label>
                    <input
                        type="radio"
                        name="price"
                        id='average'
                        checked={price.type === 'average'}
                        onChange={handleChange}
                    />
                    <label htmlFor='average'>average</label>
                    <input
                        type="radio"
                        name="price"
                        id='good'
                        checked={price.type === 'good'}
                        onChange={handleChange}
                    />
                    <label htmlFor='good'>good</label>
                </div>
                <Range
                    min={0}
                    max={700000}
                    name="Loan Amount"
                    textBeforeVal="$"
                    value={price.amount}
                    callback={setAmount}
                />
                <Range
                    min={1}
                    max={60}
                    name="Loan Duration"
                    textAfterVal="month"
                    value={price.duration}
                    callback={setDuration}
                />
            </div>

            <div className={s.calculator__result}>
                <div className={s.calculator__biWeekly}>
                    <span>Bi-Weekly Payment</span>
                    <span>{`$ ${Math.floor(price.monthlyPayment / 2)}`}</span>
                </div>
                <div className={s.calculator__monthly}>
                    <span>Monthly Payment</span>
                    <span>{`$ ${Math.floor(price.monthlyPayment)}`}</span>
                </div>
                <div className={s.calculator__weekly}>
                    <span>Weekly Payment</span>
                    <span>{`$ ${Math.floor(price.monthlyPayment / 4)}`}</span>
                </div>
                <Button text="request a car" theme={Theme.Dark} />
            </div>
        </div>
    );
}

export default Calculator;