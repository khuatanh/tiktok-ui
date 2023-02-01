import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ title, to, icon, activeIcon }) {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to} onClick={goToTop} end>
            <span className={cx('menu-icon')}>{icon}</span>
            <span className={cx('menu-active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title} </span>
        </NavLink>
    );
}

export default MenuItem;

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
