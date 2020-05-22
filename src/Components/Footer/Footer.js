import React from 'react';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import FooterHours from './FooterHours';

const FooterBottomStyle = createGlobalStyle`
    #root {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
`;

const Footer = () => {
    return (
        <footer className="footer">
            <FooterBottomStyle />
            <div className="content">
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div className="is-size-5">
                            <p className="title">Openingstijden</p>
                            <p>
                                <Link to="/redirect/gmaps">
                                    Zuidpromenade 1a, <br />
                                    3768 EM SOEST
                                </Link>
                            </p>
                            <p>
                                <Link to="/redirect/phone"> 035 601 8613</Link>
                            </p>
                        </div>
                    </div>
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
