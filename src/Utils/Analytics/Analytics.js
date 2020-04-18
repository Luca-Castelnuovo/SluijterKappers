import useAckee from 'use-ackee';
import { useLocation } from 'react-router-dom';
import AnalyticsConfig from './AnalyticsConfig';

const Analytics = () => {
    const { pathname } = useLocation();

    useAckee(pathname, AnalyticsConfig.server, AnalyticsConfig.options);

    return null;
};

export default Analytics;
