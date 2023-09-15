import React from "react";

import s from './inventoryCard.module.scss';

interface InventoryCardProps {
    img: string;
    price: number;
    name: string;
    tegs: Array<string>
}

const InventoryCard = (props: InventoryCardProps) => {
    const { img, price, name, tegs } = props;

    return (
        <div className={s.inventoryCard}>
            <img src={img} alt="car" />
            <div className={s.inventoryCard__data}>
                <div>{name}</div>
                <div className={s.inventoryCard__price}>{`$ ${price}`}</div>
                <div className={s.inventoryCard__tegs}>
                    {Array.from({ length: tegs.length }).map((_, index) => (
                        <span>{tegs[index]}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InventoryCard;