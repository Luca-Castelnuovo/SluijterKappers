import Home from './Home';
import Redirect from './Redirect';
import Mannen from './Mannen';
import Producten from './Producten';
import Team from './Team';
import Vrouwen from './Vrouwen';
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
        path: '/mannen',
        component: Mannen,
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
        path: '/vrouwen',
        component: Vrouwen,
    },
    {
        component: NotFound,
    },
];

export default RoutesConfig;
