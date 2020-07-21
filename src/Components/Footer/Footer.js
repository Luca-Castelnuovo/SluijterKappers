import React from 'react';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import FooterBrands from './FooterBrands';
import FooterLocation from './FooterLocation';
import FooterHours from './FooterHours';

const FooterStyle = createGlobalStyle`
    #root {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
`;

const Footer = () => {
    return (
        <footer className="footer">
            <FooterStyle />

            <FooterBrands />

            <div className="content">
                <nav className="level">
                    <FooterLocation />
                    <FooterHours />
                    <div className="level-item has-text-centered">
                        <Link
                            to="/booking"
                            className="button is-large is-primary is-outlined"
                        >
                            Maak een afspraak
                        </Link>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
