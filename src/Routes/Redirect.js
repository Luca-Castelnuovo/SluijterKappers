import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import useFilter from 'Utils/useFilter';
import Loader from 'Components/Loader';
import RedirectConfig from 'Config/Redirects';

const Redirect = () => {
    const { src } = useParams();
    const navigate = useNavigate();
    const data = useFilter(RedirectConfig, 'from', src);

    useEffect(() => {
        if (!data) {
            navigate.goBack();
        }

        window.location.replace(data.to);
    }, [data, navigate]);

    return <Loader />;
};

export default Redirect;
