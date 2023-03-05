import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Styles from './Suggested.module.scss';
// import PreviewInfo from './PreviewInfo';
import Button from '~/components/Button';
import Styles1 from './PreviewInfo/PreviewInfo.module.scss';
import Image from '~/components/Image';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);
const cx1 = classNames.bind(Styles1);

function AccountItem({ data }) {
    // const [offsetTippyUser, setOffsetTippyUser] = useState([-20, 0]);
    // const [placeTippyUser, setPlaceTippyUser] = useState('bottom');

    // useEffect(() => {
    //     const test = () => {
    //         if (window.innerWidth <= 1070) {
    //             setPlaceTippyUser('right');
    //             setOffsetTippyUser([-66, 10]);
    //         } else {
    //             setPlaceTippyUser('bottom');
    //             setOffsetTippyUser([-20, 0]);
    //         }
    //     };
    //     test();
    // }, [offsetTippyUser]);
    return (
        <Tippy
            appendTo={document.body}
            interactive
            placement="bottom"
            zIndex="9999"
            offset={[-20, 0]}
            delay={[800, 0]}
            render={() => {
                return (
                    <div className={cx1('wrapper-preview')}>
                        <div className={cx1('head-info')}>
                            {/* <img src={data.avatar} alt="" className={cx1('avatar')} /> */}
                            <Link to={`/@${data.nickname}`}>
                                <Image src={data.avatar} alt="" className={cx1('avatar')} />
                            </Link>

                            <Button className={cx1('btn-follow')} primary>
                                Follow
                            </Button>
                        </div>
                        <Link to={`/@${data.nickname}`}>
                            <div className={cx1('body-info')}>
                                <h4 className={cx1('Nick-name')}>
                                    {data.nickname}
                                    <span className={cx1('tick')}>
                                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx1('tick')} />}
                                    </span>
                                </h4>

                                <p className={cx1('name')}>{data.first_name + ' ' + data.last_name}</p>
                            </div>
                        </Link>
                        <div className={cx1('footer-info')}>
                            <span className={cx1('number-follow')}>{data.followers_count}</span>
                            <span className={cx1('follower')}>Follower</span>
                            <span className={cx1('number-like')}>{data.likes_count}</span>
                            <span>Like</span>
                        </div>
                    </div>
                );
            }}
        >
            <Link to={`/@${data.nickname}`}>
                <div className={cx('AccountItem-wrapper')}>
                    <Image src={data.avatar} alt="" className={cx('avatar')} />
                    <div className={cx('info')}>
                        <h4 className={cx('nick-name')}>
                            {data.nickname}
                            <span className={cx('tick')}>
                                {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('tick')} />}
                            </span>
                        </h4>
                        <h5 className={cx('name')}>{data.first_name + ' ' + data.last_name}</h5>
                    </div>
                </div>
            </Link>
        </Tippy>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
