import classNames from 'classnames/bind';
import Styles from './PreviewInfo.module.scss';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function PreviewInfo({ data }) {
    console.log(data);
    return (
        <div className={cx('wrapper-preview')}>
            <div className={cx('head-info')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/083bdd98191f72128eebdbcca718c29f~c5_100x100.jpeg?x-expires=1670918400&x-signature=IbP3ceYrNM590FZLvXAVnVD3yfc%3D"
                    alt=""
                    className={cx('avatar')}
                />

                <Button className={cx('btn-follow')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body-info')}>
                <h4 className={cx('Nick-name')}>
                    tiin.vn
                    <span className={cx('tick')}>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('tick')} />
                    </span>
                </h4>

                <p className={cx('name')}>Tiin.vn</p>
            </div>
            <div className={cx('footer-info')}>
                <span className={cx('number-follow')}>8M</span>
                <span className={cx('follower')}>Follower</span>
                <span className={cx('number-like')}>466.5M</span>
                <span>Like</span>
            </div>
        </div>
    );
}

export default PreviewInfo;
