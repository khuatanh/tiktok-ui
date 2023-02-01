import classNames from 'classnames/bind';
import { Wrapper as ProperWrapper } from '~/layouts/components/Propper';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';
import style from './Menu.module.scss';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentHistory = history[history.length - 1];

    const renderItem = () => {
        return currentHistory.data.map((item, index) => {
            const isParents = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParents) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory(history.slice(0, history.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <ProperWrapper className={cx('menu-proper')}>
                {history.length > 1 && <Header title={currentHistory.title} onback={handleBack} />}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </ProperWrapper>
        </div>
    );
    const handleHide = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <div>
            <Tippy
                offset={[12, 6]}
                hideOnClick={hideOnClick}
                interactive
                delay={[0, 700]}
                placement="bottom-end"
                render={renderResult}
                onHide={handleHide}
            >
                {children}
            </Tippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
