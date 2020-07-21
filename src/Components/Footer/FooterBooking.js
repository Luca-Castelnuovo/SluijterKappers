import React from 'react';
import { Link } from 'react-router-dom';

const Footerbooking = () => {
    return (
        <div className="column is-narrow has-text-centered">
            <div className="is-size-5">
                <p className="title">Afspraak Maken</p>

                <div className="level">
                    <div className="level-left">
                        <Link
                            to="/redirect/booking"
                            className="button is-primary is-medium"
                        >
                            Online
                        </Link>
                    </div>
                    <div className="level-right">
                        <a
                            href="tel:0356018613"
                            className="button is-primary is-medium is-outlined"
                        >
                            035 601 8613
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footerbooking;
