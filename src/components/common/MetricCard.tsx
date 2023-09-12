import React from "react";

import s from './metricCard.module.scss';

interface MetricCardProps {
    num: string;
    text: string;
}

const MetricCard = (props: MetricCardProps) => {
    const { num, text } = props;

    return (
        <div className={s.metricCard}>
            <h2>{num}</h2>
            <p>{text}</p>
        </div>
    );
}

export default MetricCard;