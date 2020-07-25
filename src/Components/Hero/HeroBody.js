import React from 'react';
import styled from 'styled-components';

const HeroTitle = styled.h1`
    font-family: 'BankGothicBT-Medium', 'Didact Gothic', sans-serif;
    font-size: 6rem;

    @media (max-width: 768px) {
        font-size: 4rem;
    }

    @media (max-width: 465px) {
        font-size: 2.8rem;
    }
`;

const HeroBody = () => {
    return (
        <div className="hero-body has-text-centered">
            <HeroTitle className="title has-text-white">
                Sluijter
                <br /> Kappers
            </HeroTitle>
        </div>
    );
};

export default HeroBody;
