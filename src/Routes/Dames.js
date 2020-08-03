import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Service from 'Components/Service';
import DamesConfig from 'Config/Dames';
import Business2 from 'Assets/images/business/business2.jpg';

const Dames = () => {
    return <Service title="Dames" image={Business2} prices={DamesConfig} />;
};

export default withBaseRoute(Dames);
