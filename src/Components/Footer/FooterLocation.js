import React from 'react';
import { Link } from 'react-router-dom';

const FooterLocation = () => {
    return (
        <div className="column is-one-third">
            <p className="title">Locatie</p>
            <p className="is-hidden-desktop is-size-3">
                <Link to="/redirect/gmaps">
                    Zuidpromenade 1a, <br />
                    3768 EM SOEST
                </Link>
            </p>
            <p className="is-hidden-touch">
                <iframe
                    title="google maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.333560770844!2d5.3063779156786905!3d52.16462857025696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416551e2a78902e5%3A0xd85ef2bc769d6471!2sSluijterKappers!5e0!3m2!1sen!2snl!4v1595250648059!5m2!1sen!2snl"
                    width="300"
                    height="200"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </p>
        </div>
    );
};

export default FooterLocation;
