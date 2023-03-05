import classNames from 'classnames/bind';

import config from '~/configs';
import Menu, { MenuItem } from './Menu';
import Styles from './Sidebar.module.scss';
import { HomeIcon, HomeActiveIcon, UserGroup, UserActiveGroup, LiveIcon, LiveActiveIcon } from '~/icons/Icon';
import Suggested from '~/components/Suggested';

import Discover from '~/components/Discover/Discover';
import FooterSidebar from '~/components/FooterSidebar';
import NotifyLogin from '~/components/NotifyLogin';

const cx = classNames.bind(Styles);

function Sidebar({ shrink }) {
    return (
        <aside className={cx('wrapper', { shrink: shrink })}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroup />}
                    activeIcon={<UserActiveGroup />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <NotifyLogin title="Log in to follow creators, like videos, and view comments." />
            <Suggested title="Suggested accounts" />

            <Discover title="Discover" />
            <FooterSidebar />
        </aside>
    );
}

export default Sidebar;
