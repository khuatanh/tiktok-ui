import classNames from 'classnames/bind';
import { HashtagIcon, MusicIcon } from '~/icons/Icon';
import Button from '../Button';
import Styles from './Discover.module.scss';

const cx = classNames.bind(Styles);
function Discover({ title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            <div className={cx('container')}>
                <Button className={cx('btn-htag')} rounded>
                    <div className={cx('wrapper-content')}>
                        <HashtagIcon width="1.6rem" height="1.6rem" />
                        <span className={cx('htag')}>suthatla</span>
                    </div>
                </Button>
                <Button className={cx('btn-htag')} rounded>
                    <div className={cx('wrapper-content')}>
                        <HashtagIcon width="1.6rem" height="1.6rem" />
                        <span className={cx('htag')}>mackedoi</span>
                    </div>
                </Button>
                <Button className={cx('btn-htag')} rounded>
                    <div className={cx('wrapper-content')}>
                        <HashtagIcon width="1.6rem" height="1.6rem" />
                        <span className={cx('htag')}>sansangthaydoi</span>
                    </div>
                </Button>
                <Button className={cx('btn-htag')} rounded>
                    <div className={cx('wrapper-content')}>
                        <MusicIcon width="1.6rem" height="1.6rem" />
                        <span className={cx('htag')}>Yêu Đơn Phương Là Gì (MEE REMIX) - MEE Remix saak</span>
                    </div>
                </Button>
                <Button className={cx('btn-htag')} rounded>
                    <div className={cx('wrapper-content')}>
                        <MusicIcon width="1.6rem" height="1.6rem" />
                        <span className={cx('htag')}>
                            Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng
                        </span>
                    </div>
                </Button>
                <Button className={cx('btn-htag')} rounded>
                    <div className={cx('wrapper-content')}>
                        <MusicIcon width="1.6rem" height="1.6rem" />
                        <span className={cx('htag')}>Thiên Thần Tình Yêu - RICKY STAR</span>
                    </div>
                </Button>
                <Button className={cx('btn-htag')} rounded>
                    <div className={cx('wrapper-content')}>
                        <HashtagIcon width="1.6rem" height="1.6rem" />
                        <span className={cx('htag')}>7749hieuung</span>
                    </div>
                </Button>
                <Button className={cx('btn-htag')} rounded>
                    <div className={cx('wrapper-content')}>
                        <HashtagIcon width="1.6rem" height="1.6rem" />
                        <span className={cx('htag')}>genzlife</span>
                    </div>
                </Button>
                <Button className={cx('btn-htag')} rounded>
                    <div className={cx('wrapper-content')}>
                        <MusicIcon width="1.6rem" height="1.6rem" />
                        <span className={cx('htag')}>Tình Đã Đầy Một Tim - Huyền Tâm Môn</span>
                    </div>
                </Button>
                <Button className={cx('btn-htag')} rounded>
                    <div className={cx('wrapper-content')}>
                        <MusicIcon width="1.6rem" height="1.6rem" />
                        <span className={cx('htag')}>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</span>
                    </div>
                </Button>
            </div>
        </div>
    );
}

export default Discover;
