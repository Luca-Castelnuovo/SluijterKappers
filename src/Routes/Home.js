import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero is-fullheight is-primary">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1 has-text-white">200</h1>
                    <h2 className="subtitle is-2 has-text-white">Home</h2>
                    <Link
                        className="button is-large is-outlined is-secundary is-light"
                        to="/redirect/booking"
                    >
                        Ga naar booking
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default withBaseRoute(Home);
