import Home from './Home';
import Redirect from './Redirect';
import Booking from './Booking';
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
        path: '/booking',
        component: Booking,
    },
    {
        component: NotFound,
    },
];

export default RoutesConfig;
