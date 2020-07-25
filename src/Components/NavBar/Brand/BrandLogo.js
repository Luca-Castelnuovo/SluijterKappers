import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BrandLogo = () => {
    const Title = styled.h2`
        font-family: 'BankGothicBT-Medium', 'Didact Gothic', sans-serif;
        font-size: 1.5rem;

        @media (max-width: 1024px) {
            font-size: 1.2rem;
        }
    `;

    return (
        <Link exact to="/" className="navbar-item">
            <Title className="is-uppercase has-text-white has-background-black pl-1 pr-1">
                Sluijter
            </Title>
        </Link>
    );
};

export default BrandLogo;
