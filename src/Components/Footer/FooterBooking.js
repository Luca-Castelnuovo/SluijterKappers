import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Footerbooking = () => {
    return (
        <div className="level-item has-text-centered">
            <Link to="/redirect/booking" className="button is-large is-primary">
                <span className="icon">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
                <span>Maak een afspraak</span>
            </Link>
        </div>
    );
};

export default Footerbooking;
