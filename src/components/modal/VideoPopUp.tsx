import React, { useState, useEffect } from "react";

import s from './videoPopUp.module.scss';

interface VideoPopUpProps {
    isOpen: boolean;
    callback: () => void;
    video: JSX.Element;
}

const VideoPopUp = (props: VideoPopUpProps) => {
    const { isOpen, callback, video } = props;

    useEffect(() => {
        document.body.style.overflow = (isOpen) ? 'hidden' : '';
    }, [isOpen])

    return (
        (isOpen) ?
            <div className={s.bg} onClick={callback}>
                <div className={s.videoPopUp}>
                    {video}
                </div>
            </div>
            : <></>
    );
}

export default VideoPopUp;