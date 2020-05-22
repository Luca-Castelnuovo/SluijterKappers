import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroBackground1 from 'Assets/images/zaak1.jpg';
import HeroBackground2 from 'Assets/images/zaak2.jpg';

const Hero = () => {
    const [activeBackground, setActiveBackground] = useState(HeroBackground1);
    const [activeCount, setActiveCount] = useState(0);
    const backgrounds = [HeroBackground1, HeroBackground2];

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeCount === backgrounds.length) {
                setActiveCount(0);
            } else {
                setActiveCount(activeCount + 1);
            }

            console.log(activeCount);

            setActiveBackground(backgrounds[activeCount + 1]);
            // setActiveCount(activeCount + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [activeCount, backgrounds]);

    const StyledHero = styled.section`
        background-image: url(${activeBackground});
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-color: #999;
    `;

    return (
        <StyledHero className="hero is-fullheight-with-navbar is-primary">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1 has-text-white">
                        Sluijter Kappers
                    </h1>
                </div>
            </div>
        </StyledHero>
    );
};

export default Hero;
