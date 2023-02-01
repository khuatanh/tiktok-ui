import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Videos from '~/components/Videos';
import * as VideosService from '~/Services/CallVideosAPI';
import Styles from './Home.module.scss';

const cx = classNames.bind(Styles);

function Home() {
    const [dataVideos, setDataVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [volume, setVolume] = useState(0.4);
    const [preVolume, setPreVolume] = useState(volume);
    const [mute, setMute] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', loadMore);
        return () => {
            window.removeEventListener('scroll', loadMore);
        };
    }, []);
    useEffect(() => {
        const VideosCallApi = async () => {
            setLoading(true);
            const result = await VideosService.CallVideosAPI(page, 'for-you');
            setDataVideos((prev) => [...prev, ...result]);
            setLoading(false);
        };
        VideosCallApi();
    }, [page]);

    const loadMore = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setPage((page) => page + 1);
        }
    };

    const handleAdjustVolume = (e) => {
        setVolume(e.target.value / 100);
        if (e.target.value == 0) {
            setMute(true);
        } else {
            setMute(false);
        }
    };
    const toggleMute = () => {
        if (mute) {
            setVolume(preVolume);
            setMute(false);
        } else {
            setPreVolume(volume);
            setVolume(0);
            setMute(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {loading && <FontAwesomeIcon icon={faSpinner} className={cx('icon-loading')} />}
            {dataVideos.map((video, index) => {
                return (
                    <Videos
                        key={index}
                        data={video}
                        mute={mute}
                        volume={volume}
                        toggleMute={toggleMute}
                        adjustVolume={handleAdjustVolume}
                    />
                );
            })}
        </div>
    );
}

export default Home;
