import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

import Hero1 from 'Assets/images/hero/hero5.jpg';
import Hero2 from 'Assets/images/hero/hero6.jpg';
import Hero3 from 'Assets/images/hero/hero7.jpg';
import Hero4 from 'Assets/images/hero/hero8.jpg';

const HeroCarousel = () => {
    useEffect(() => {
        const carousel = bulmaCarousel.attach('.hero-carousel', {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToScroll: 1,
            slidesToShow: 1,
            pagination: false,
            navigation: false,
            effect: 'fade',
        });

        const delay = (a) => new Promise((t) => setTimeout(t, a));
        const slideReset = async () => {
            await delay(12000);
            carousel[0].reset();

            slideReset();
        };

        slideReset();
    }, []);

    const Slide = styled.div`
        height: 100%;
    `;

    return (
        <div className="hero-carousel">
            <Slide className="has-background is-active">
                <img className="is-background" src={Hero1} alt="TODO" />
            </Slide>
            <Slide className="has-background">
                <img className="is-background" src={Hero2} alt="TODO" />
            </Slide>
            <Slide className="has-background">
                <img className="is-background" src={Hero3} alt="TODO" />
            </Slide>
            <Slide className="has-background">
                <img className="is-background" src={Hero4} alt="TODO" />
            </Slide>
        </div>
    );
};

export default HeroCarousel;
