import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Header({ title, onback }) {
    return (
        <header className={cx('header-popper')}>
            <button className={cx('back-btn')} onClick={onback}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('title-header')}>{title}</h4>
        </header>
    );
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onback: PropTypes.func,
};
export default Header;
