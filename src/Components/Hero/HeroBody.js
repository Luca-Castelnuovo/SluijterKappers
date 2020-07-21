import React from 'react';
import styled from 'styled-components';

const HeroBody = () => {
    const HeroTitle = styled.h1`
        font-family: 'BankGothicBT-Medium', 'Didact Gothic', sans-serif;
        font-size: 6rem;
    `;

    return (
        <div className="hero-body has-text-centered">
            <HeroTitle className="title has-text-white">
                Sluijter Kappers
            </HeroTitle>
        </div>
    );
};

export default HeroBody;
