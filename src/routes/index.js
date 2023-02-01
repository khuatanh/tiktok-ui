// layout
import { HeaderOnly } from '~/layouts';

import configs from '~/configs';
import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';
import Live from '~/page/Live';

const publicRoute = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.following, component: Following },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.live, component: Live },
    { path: configs.routes.search, component: Search, layout: null },
    { path: configs.routes.upload, component: Upload, layout: HeaderOnly },
];
const privateRoute = [];

export { publicRoute, privateRoute };
