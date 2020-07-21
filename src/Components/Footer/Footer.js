import React from 'react';
import { createGlobalStyle } from 'styled-components';

import FooterBrands from './FooterBrands';
import FooterLocation from './FooterLocation';
import FooterHours from './FooterHours';
import FooterBooking from './FooterBooking';

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
                    <FooterBooking />
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
