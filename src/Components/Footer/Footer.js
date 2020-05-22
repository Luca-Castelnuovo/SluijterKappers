import React from 'react';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

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
            <div className="content has-text-centered ">
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div class="is-size-5">
                            <p className="title">Contact</p>
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
                    <div className="level-item has-text-centered">
                        <Link
                            to="/redirect/booking"
                            className="button is-large is-primary is-outlined"
                        >
                            Maak een afspraak
                        </Link>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="title">Social media</p>
                            <Link to="/redirect/instagram">
                                <span className="icon is-large has-text-dark">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        size="3x"
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
