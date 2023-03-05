import classNames from 'classnames/bind';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import Style from './StretchLayout.module.scss';

const cx = classNames.bind(Style);

function StretchLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header stretch />
            <div className={cx('container')}>
                <Sidebar shrink className={cx('slide-bar')} />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default StretchLayout;
