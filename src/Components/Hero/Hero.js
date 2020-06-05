import React, { useEffect } from 'react';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

import Hero1 from 'Assets/images/hero1.jpg';
import Hero2 from 'Assets/images/hero2.jpg';
import Hero3 from 'Assets/images/hero3.jpg';
import Hero4 from 'Assets/images/hero4.jpg';

const Hero = () => {
    useEffect(() => {
        const carousel = bulmaCarousel.attach('#demo', {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToScroll: 1,
            slidesToShow: 1,
            navigation: false,
        });

        const delay = (a) => new Promise((t) => setTimeout(t, a));
        const slideReset = async () => {
            await delay(12000);
            carousel[0].reset();

            slideReset();
        };

        slideReset();
    }, []);

    return (
        <section className="hero is-fullheight-with-navbar is-primary has-carousel">
            <div id="demo" className="hero-carousel">
                <div className="has-background is-active">
                    <img className="is-background" src={Hero1} alt="" />
                </div>
                <div className="has-background">
                    <img className="is-background" src={Hero2} alt="" />
                </div>
                <div className="has-background">
                    <img className="is-background" src={Hero3} alt="" />
                </div>
                <div className="has-background">
                    <img className="is-background" src={Hero4} alt="" />
                </div>
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1 has-text-white">
                        Sluijter Kappers
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
