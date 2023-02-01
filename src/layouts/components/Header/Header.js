import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faEllipsisVertical,
    faGears,
    faKeyboard,
    faLanguage,
    faQuestionCircle,
    faSignal,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import config from '~/configs';
import Button from '~/components/Button/Button';
import Menu from '~/layouts/components/Propper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from '~/icons/Icon';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';

const cx = classNames.bind(styles);

const menuItem = [
    {
        title: 'Language',
        icon: <FontAwesomeIcon icon={faLanguage} />,
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        to: '/feedback',
    },
    {
        title: 'shortcut and keyBoard',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];

function Header() {
    const currentUser = true;

    const handleOnchange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            title: 'View profile',
            icon: <FontAwesomeIcon icon={faUser} />,
            to: '/profile',
        },
        {
            title: 'Live Studio',
            icon: <FontAwesomeIcon icon={faSignal} />,
            to: '/live',
        },
        {
            title: 'Setting',
            icon: <FontAwesomeIcon icon={faGears} />,
            to: '/setting',
        },
        ...menuItem,
        {
            title: 'Login',
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            to: '/login',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('contain')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TikTok"></img>
                </Link>
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <div className={cx('wrapper-action-btn')}>
                            <Tippy content="Upload video" placement="bottom" className="actions-btn">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" className="actions-btn">
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" className="actions-btn">
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button text>Upadate</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : menuItem} onChange={handleOnchange}>
                        {currentUser ? (
                            <Image
                                className={cx('avatar-user')}
                                src="data:image/png;base64,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"
                                alt="avatar-image"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
