import Home from './Home';
import Redirect from './Redirect';
import NotFound from './NotFound';

const RoutesConfig = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/redirect/:src',
        component: Redirect,
    },
    {
        component: NotFound,
    },
];

export default RoutesConfig;
