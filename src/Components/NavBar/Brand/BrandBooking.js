import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import MenuLink from 'Components/NavBar/Menu/MenuLink';

const BrandBooking = () => {
    return (
        <div>
            <div className="navbar-item is-hidden-desktop">
                <MenuLink
                    to="/redirect/booking"
                    className="button is-primary is-outlined is-small"
                >
                    <span className="icon">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </span>
                    <span>Maak een afspraak</span>
                </MenuLink>
            </div>
        </div>
    );
};

export default BrandBooking;
