import classNames from 'classnames/bind';
import Button from '../Button';
import Style from './NotifyLogin.module.scss';

const cx = classNames.bind(Style);
function NotifyLogin({ title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            <Button className={cx('btn-login-slide-bar')} outline>
                Login{' '}
            </Button>
        </div>
    );
}

export default NotifyLogin;
