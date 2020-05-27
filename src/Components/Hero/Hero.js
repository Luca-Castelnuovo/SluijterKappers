import React from 'react';
import styled, { keyframes } from 'styled-components';
import './Hero.css';

import Hero1 from 'Assets/images/hero1.jpg';
import Hero2 from 'Assets/images/hero2.jpg';
import Hero3 from 'Assets/images/hero3.jpg';
import Hero4 from 'Assets/images/hero4.jpg';

const changeBg = keyframes`
    0% {
        background-image: url(${Hero1});
    }
    25% {
        background-image: url(${Hero2});
    }
    50% {
        background-image: url(${Hero3});
    }
    75% {
        background-image: url(${Hero4});
    }
    100% {
        background-image: url(${Hero1});
    }
`;

const StyledHero = styled.section`
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    animation: ${changeBg} 10s infinite;
`;

const Hero = () => {
    return (
        <>
            <StyledHero className="hero is-fullheight-with-navbar is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1 has-text-white">
                            Sluijter Kappers
                        </h1>
                    </div>
                </div>
            </StyledHero>
        </>
    );
};

export default Hero;
