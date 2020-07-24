import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import MenuLink from 'Components/NavBar/Menu/MenuLink';

// on mobile remove icon and increase font-size

const BrandBooking = () => {
    return (
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
    );
};

export default BrandBooking;
