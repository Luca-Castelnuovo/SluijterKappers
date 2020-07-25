import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Service from 'Components/Service';
import Business1 from 'Assets/images/business/business1.jpg';

const Heren = () => {
    const prices = [
        {
            title: '',
            Knippen: 35,
            'Wassen en knippen': 39,
        },
        {
            title: 'Jeugd',
            'Knippen (t/m 12 jaar)': 27,
        },
        {
            title: 'Overig',
            'Baard knippen': 5,
            'Tondeuse (5 min)': 11,
            'Tondeuse (uitgebreid)': 22,
        },
    ];

    return <Service title="Heren" image={Business1} prices={prices} />;
};

export default withBaseRoute(Heren);
