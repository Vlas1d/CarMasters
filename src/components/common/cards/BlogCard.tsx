import React from "react";

import s from './blogCard.module.scss';

interface BlogCardProps {
    img: string;
    date: string;
    name: string;
}

const BlogCard = (props: BlogCardProps) => {
    const { img, date, name } = props;

    return (
        <div className={s.blogCard}>
            <img src={img} alt="blog" />
            <div className={s.blogCard__text}>
                <span>{date}</span>
                <div>{name}</div>
            </div>
        </div>
    );
}

export default BlogCard;