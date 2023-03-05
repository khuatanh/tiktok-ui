import { useEffect, useState, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import * as InfoUserService from '~/Services/GetUser';
import Style from './Profile.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { LinkIcon, LockIcon, ShareIconInfo, InfoMoreIcon, UserNoVideoIcon, PrivateIcon } from '~/icons/Icon';
import VideoPreview from '~/components/VideoPreview';

const cx = classNames.bind(Style);
function Profile() {
    const [videos, setVideos] = useState([]);
    const [data, setData] = useState([]);
    const [showVideo, setShowVideo] = useState(false);
    const [typeTab, setTypeTab] = useState('video-btn');

    const location = useLocation();
    useEffect(() => {
        const getApi = async () => {
            const response = await InfoUserService.GetUser(`${location.pathname}`);
            if (response) {
                setData(response);
                setVideos(response.videos);
            }
        };
        getApi();
    }, [location.pathname]);

    useEffect(() => {
        if (videos.length > 0) {
            setShowVideo(true);
        } else {
            setShowVideo(false);
        }
    });

    // handle select tab

    const handleSelectTab = (type) => {
        setTypeTab(type);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile-user-header')}>
                <div className={cx('profile-basic')}>
                    <div className={cx('profile-basic-wrap')}>
                        <Image src={data.avatar} className={cx('avatar-user')} />

                        <div className={cx('info-user')}>
                            <div className={cx('name')}>{data.nickname}</div>
                            <div className={cx('nick-name')}>{`${data.first_name}` + ' ' + `${data.last_name}`}</div>
                            <Button primary className={cx('btn-follow')}>
                                Follow
                            </Button>
                        </div>
                    </div>
                    <div className={cx('share-info')}>
                        <ShareIconInfo />
                        <InfoMoreIcon />
                    </div>
                </div>
                <div className={cx('profile-interact')}>
                    <strong className={cx('number-of-follow')}>{data.followings_count}</strong>
                    <span className={cx('follow-now-text')}>Following</span>
                    <strong className={cx('number-of-follower')}>{data.followers_count}</strong>
                    <span className={cx('follower-text')}>Follower</span>
                    <strong className={cx('number-of-like')}>{data.likes_count}</strong>
                    <span className={cx('like-text')}>like</span>
                </div>
                <p className={cx('profile-description')}>{data.bio ? data.bio : 'No bio yet.'}</p>
                <div className={cx('wrapper-bio-link')}>
                    <LinkIcon />
                    <a href="https://fullstack.edu.vn/" className={cx('link-bio')}>
                        {data.website_url}
                    </a>
                </div>
            </div>
            <div className={cx('profile-user-body')}>
                <div className={cx('body-header')}>
                    <div
                        className={cx('video-btn', { active: typeTab === 'video-btn' })}
                        onClick={() => handleSelectTab('video-btn')}
                    >
                        Video
                    </div>
                    <div
                        className={cx('video-liked-btn', { active: typeTab === 'video-liked-btn' })}
                        onClick={() => handleSelectTab('video-liked-btn')}
                    >
                        <LockIcon />
                        <span className={cx('like-text')}>Liked</span>
                    </div>
                    <div className={cx('tab-line')}></div>
                </div>
                <div className={cx('video-content-wrapper', { showVideo: 'No-content' })}>
                    {showVideo ? (
                        typeTab === 'video-btn' ? (
                            videos.map((video) => <VideoPreview data={video} key={video.id} />)
                        ) : (
                            <div className={cx('video-private')}>
                                <PrivateIcon />
                                <p className={cx('heading')}>Video đã thích của người dùng này ở trạng thái riêng tư</p>
                                <p className={cx('description')}>
                                    Các video được thích bởi {data.nickname} hiện đang ẩn
                                </p>
                            </div>
                        )
                    ) : (
                        <div className={cx('no-content')}>
                            <div>
                                <UserNoVideoIcon />
                            </div>
                            <div className={cx('title')}>
                                <p className={cx('heading')}>No content</p>
                                <p className={cx('description')}>This user has not published any videos.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
