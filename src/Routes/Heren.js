import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Service from 'Components/Service';
import HerenConfig from 'Config/Heren';
import Business1 from 'Assets/images/business/business1.jpg';

const Heren = () => {
    return <Service title="Heren" image={Business1} prices={HerenConfig} />;
};

export default withBaseRoute(Heren);
