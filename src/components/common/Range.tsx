import React, { useState, useEffect } from "react";

import s from './range.module.scss';

interface RangeProps {
    name: string;
    min: number;
    max: number;
    callback: (val: number) => void;
    value?: number;
    step?: number;
    textBeforeVal?: string;
    textAfterVal?: string;
}

const Range = (props: RangeProps) => {
    const [value, setValue] = useState<number>(0);

    const { callback } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let valueStr: string = event.target.value;
        let parseValue = parseInt(valueStr);

        if (valueStr === '' || isNaN(parseValue)) {
            parseValue = props.min;
        }
        else if (parseValue < props.min) {
            parseValue = props.min;
        }
        else if (parseValue > props.max) {
            parseValue = props.max;
        }

        setValue(parseValue);
        if (callback) callback(parseValue);
    }

    useEffect(() => {
        setValue(props.value ?? props.min);
    }, [props.value]);

    return (
        <div className={s.range}>
            <div className={s.range__text}>
                <span className={s.range__textName}>{props.name}</span>
                <span className={s.rangeValue}>
                    <span className={s.rangeValue__before}>{props.textBeforeVal ?? ''}</span>
                    <span className={s.rangeValue__input}>
                        {value}
                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                        />
                    </span>
                    <span className={s.rangeValue__after}>{props.textAfterVal ?? ''}</span>
                </span>
            </div>
            <div className={s.range__inputTrack}>
                <div className={s.range__progress} style={{ width: `${(value * 100) / props.max}%` }}></div>
                <input
                    type="range"
                    name={props.name}
                    value={value}
                    min={props.min}
                    max={props.max}
                    step={1}
                    onChange={handleChange}
                />
            </div>

        </div>
    );
}

export default Range;