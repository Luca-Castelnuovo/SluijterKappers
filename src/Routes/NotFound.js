import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="hero is-fullheight is-primary">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1 has-text-white">404</h1>
                    <h2 className="subtitle is-2 has-text-white">
                        Pagina niet gevonden!
                    </h2>
                    <Link
                        className="button is-large is-outlined is-secundary is-light"
                        to="/"
                    >
                        Ga naar Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
