import React, { Suspense, useState } from "react";

import s from './videoCard.module.scss';

const VideoPopUp = React.lazy(() => import('../../modal/VideoPopUp'));

import play from '../../../images/svg/play.svg';

interface VideoCardProps {
    img: string;
    name: string;
    iframe: JSX.Element;
}

const VideoCard = (props: VideoCardProps) => {
    const { img, name, iframe } = props;

    const [showVideo, setShowVideo] = useState(false);

    const openVideo = () => {
        setShowVideo(true);
        document.body.style.overflow = 'hidden';
    }
    const closeVideo = () => {
        setShowVideo(false);
        document.body.style.overflow = '';
    }

    return (
        <>
            <div className={s.videoCard}>
                <div className={s.videoCard__image}>
                    <img src={img} alt="car" />
                    <button className={s.button} onClick={openVideo}>
                        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.8" cx="26.5" cy="26.5" r="26.5" fill="white" />
                            <path d="M36.4268 24.768C37.7601 25.5378 37.7601 27.4623 36.4268 28.2321L23.0365 35.963C21.7032 36.7328 20.0365 35.7705 20.0365 34.2309L20.0365 18.7692C20.0365 17.2296 21.7032 16.2674 23.0365 17.0372L36.4268 24.768Z" fill="#7481FF" />
                        </svg>
                    </button>
                </div>
                <div>{name}</div>
            </div>
            <Suspense>
                {
                    showVideo
                    &&
                    <VideoPopUp
                        isOpen={showVideo}
                        video={iframe}
                        callback={closeVideo}
                    />
                }
            </Suspense>
        </>
    );
}

export default VideoCard;