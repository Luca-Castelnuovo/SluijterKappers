import React from 'react';
import { Link } from 'react-router-dom';

// TODO: add google maps

const FooterLocation = () => {
    return (
        <div className="level-item has-text-centered">
            <div className="is-size-5">
                <p className="title">Locatie</p>
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
    );
};

export default FooterLocation;
