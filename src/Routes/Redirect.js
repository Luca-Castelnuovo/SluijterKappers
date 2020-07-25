import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import useFilter from 'Utils/useFilter';
import Loader from 'Components/Loader';

const Redirect = () => {
    const config = [
        {
            from: 'booking',
            to:
                'https://www.barberbooking.com/bookingwidget/jan-sluyter-kappers-soest?p=3ppr6w',
        },
        {
            from: 'streetview',
            to: 'https://goo.gl/nLHynf',
        },
    ];

    const { src } = useParams();
    const history = useHistory();
    const data = useFilter(config, 'from', src);

    useEffect(() => {
        if (!data) {
            history.goBack();
        }

        window.location.replace(data.to);
    }, [data, history]);

    return <Loader />;
};

export default Redirect;
