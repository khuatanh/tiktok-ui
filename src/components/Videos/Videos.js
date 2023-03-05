import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Styles from './Videos.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
    CommentIcon,
    HeartIcon,
    MusicIcon,
    PauseIcon,
    PlayIcon,
    ShareIcon,
    SoundIconMute,
    SoundIconVolume,
} from '~/icons/Icon';

const cx = classNames.bind(Styles);
function Videos({ data, mute, toggleMute, adjustVolume, volume }) {
    const [isPlay, setIsPlay] = useState(false);

    const videoRef = useRef();

    useEffect(() => {
        if (mute) {
            videoRef.current.volume = 0;
        } else {
            videoRef.current.volume = volume;
        }
    });

    const PlayVideo = () => {
        if (isPlay === false) {
            videoRef.current.play();
            setIsPlay(true);
            // setMute(true);
        }
    };

    const PauseVideo = () => {
        if (isPlay === true) {
            videoRef.current.pause();
            setIsPlay(false);
        }
    };
    const toggleVideo = () => {
        if (isPlay === false) {
            PlayVideo();
        } else {
            PauseVideo();
        }
    };

    const handleViewPort = () => {
        var bounding = videoRef.current.getBoundingClientRect();

        if (
            bounding.top <= window.innerHeight - videoRef.current.clientHeight * 0.5 &&
            bounding.top >= 0 - videoRef.current.clientHeight * 0.5
        ) {
            PlayVideo();
        } else {
            PauseVideo();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleViewPort);

        return () => window.removeEventListener('scroll', handleViewPort);
    });

    return (
        <div className={cx('wrapper')}>
            <Link to={`/@${data.user.nickname}`}>
                <Image src={data.user.avatar} className={cx('avatar')} />
            </Link>
            <div className={cx('contain')}>
                <Link to={`/@${data.user.nickname}`}>
                    <div className={cx('info')}>
                        <span className={cx('nick-name')}>{data.user.nickname}</span>
                        {data.user.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                        <span className={cx('name')}>{data.user.first_name + ' ' + data.user.last_name}</span>
                    </div>
                </Link>
                <div className={cx('caption')}>
                    <p className={cx('description')}>{data.description}</p>
                </div>
                <div className={cx('music')}>
                    <MusicIcon />
                    <span className={cx('name-song')}>{data.music}</span>
                </div>
                <div className={cx('video-and-contain')}>
                    <div className={cx('video-card')}>
                        <video
                            loop
                            ref={videoRef}
                            src={data.file_url}
                            className={cx('video')}
                            style={
                                data.meta.video.resolution_x < data.meta.video.resolution_y
                                    ? { width: '273px' }
                                    : { width: '463px' }
                            }
                        ></video>
                        <div className={cx('controls-video-play')} onClick={toggleVideo}>
                            {isPlay ? <PlayIcon /> : <PauseIcon />}
                        </div>
                        <div className={cx('controls-volume')}>
                            <div className={cx('container')}>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    orient="vertical"
                                    onChange={adjustVolume}
                                    value={volume * 100}
                                    className={cx('range-volume')}
                                />
                            </div>
                            <div className={cx('volume-icon')} onClick={toggleMute}>
                                {mute ? <SoundIconMute /> : <SoundIconVolume />}
                            </div>
                        </div>
                    </div>
                    <div className={cx('action')}>
                        <span className={cx('icon')}>
                            <HeartIcon />
                        </span>
                        <span className={cx('heart-count')}>{data.likes_count}</span>
                        <span className={cx('icon')}>
                            <CommentIcon />
                        </span>
                        <span className={cx('comment-count')}>{data.comments_count}</span>
                        <span className={cx('icon')}>
                            <ShareIcon />
                        </span>
                        <span className={cx('share-count')}>{data.shares_count}</span>
                    </div>
                </div>
            </div>
            <Button rounded className={cx('btn-follow')}>
                Follow
            </Button>
        </div>
    );
}

Videos.propTypes = {
    data: PropTypes.object.isRequired,
    toggleMute: PropTypes.func.isRequired,
    mute: PropTypes.bool.isRequired,
    adjustVolume: PropTypes.func.isRequired,
    volume: PropTypes.number.isRequired,
};
export default Videos;
