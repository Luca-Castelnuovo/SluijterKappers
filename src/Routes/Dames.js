import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Service from 'Components/Service';
import Business2 from 'Assets/images/business/business2.jpg';

const Dames = () => {
    const prices = [
        {
            title: '',
            'Wassen en föhnen': 31,
            'Wassen, knippen en drogen': 53,
            'Wassen, knippen en föhnen': 59,
        },
        {
            title: 'Jeugd',
            'Knippen (t/m 12 jaar)': 27,
            'Knippen (13 t/m 17 jaar)': 38,
            'Knippen (18 t/m 21 jaar)': 40,
        },
        {
            title: 'Kleuren',
            Verven: 'vanaf 49',
            Highlights: 'vanaf 67',
            'Folie kleuring (deel)': 'vanaf 80',
            'Folie kleuring (compleet)': 'vanaf 145',
            'French Balayage': 'vanaf 100',
            'Permananet (compleet)': 'vanaf 120',
        },
    ];

    return <Service title="Dames" image={Business2} prices={prices} />;
};

export default withBaseRoute(Dames);
