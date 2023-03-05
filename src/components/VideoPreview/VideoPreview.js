import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { PauseIcon, PauseIconTrans } from '~/icons/Icon';

import Styles from './VideoPreview.module.scss';

const cx = classNames.bind(Styles);
function VideoPreview({ data }) {
    const videoRef = useRef();

    const handlePreview = () => {
        videoRef.current.play();
    };
    const handlePreviewLeave = () => {
        videoRef.current.pause();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div style={{ paddingTop: '132.653%' }}>
                    <div className={cx('video-container')}>
                        <div className={cx('video-inner')}>
                            <div className={cx('image')}>
                                <img src={data.thumb_url} alt="" />
                            </div>
                            <div className={cx('video-wrapper')}>
                                <div className={cx('video')}>
                                    <video
                                        src={data.file_url}
                                        onMouseOver={handlePreview}
                                        ref={videoRef}
                                        onMouseLeave={handlePreviewLeave}
                                        muted
                                    />
                                </div>
                                <div className={cx('views')}>
                                    <PauseIcon />
                                    <strong className={cx('count')}>{data.views_count}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('tag')}>{data.description}</div>
        </div>
    );
}

export default VideoPreview;
