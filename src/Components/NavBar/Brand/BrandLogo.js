import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h2`
    font-family: 'BankGothic', 'Didact Gothic', sans-serif;
    font-size: 1.5rem;

    @media (max-width: 1024px) {
        font-size: 1.2rem;
    }
`;

const BrandLogo = () => {
    return (
        <Link to="/" className="navbar-item">
            <Title className="is-uppercase has-text-white has-background-black pl-1 pr-1">
                Sluijter
            </Title>
        </Link>
    );
};

export default BrandLogo;
