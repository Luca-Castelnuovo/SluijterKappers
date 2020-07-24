import React from 'react';
import classNames from 'classnames';
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

    const Classes = classNames(
        'is-uppercase',
        'has-text-white',
        'has-background-black',
        'pl-1',
        'pr-0',
        {
            'is-invisible': false,
        }
    );

    return (
        <Link to="/" className="navbar-item">
            <Title className={Classes}>Sluijter</Title>
        </Link>
    );
};

export default BrandLogo;
