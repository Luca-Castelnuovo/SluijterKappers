import Home from './Home';
import Redirect from './Redirect';
import Heren from './Heren';
import Producten from './Producten';
import Team from './Team';
import Dames from './Dames';
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
        path: '/dames',
        component: Dames,
    },
    {
        path: '/heren',
        component: Heren,
    },
    {
        path: '/producten',
        component: Producten,
    },
    {
        path: '/team',
        component: Team,
    },
    {
        component: NotFound,
    },
];

export default RoutesConfig;
