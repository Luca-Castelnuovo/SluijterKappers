import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero/Hero';
import Intro from 'Components/Home/Intro';
import Styles from 'Components/Home/Styles';
import Reviews from 'Components/Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Hero />

            <Intro />

            <Styles />

            <Reviews />
        </>
    );
};

export default withBaseRoute(Home);
