import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import MenuLink from './MenuLink';
import MenuBtn from './MenuBtn';

const Menu = ({ hamburgerOpen }) => {
    const classes = classNames('navbar-menu', {
        'is-active': hamburgerOpen,
    });

    return (
        <div className={classes}>
            <div className="navbar-start">
                <MenuLink to="/mannen">Mannen</MenuLink>
                <MenuLink to="/vrouwen">Vrouwen</MenuLink>
                <MenuLink to="/producten">Producten</MenuLink>
                <MenuLink to="/team">Team</MenuLink>
            </div>

            <div className="navbar-end is-hidden-touch">
                <MenuBtn to="/redirect/booking">
                    <span className="icon">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </span>
                    <span>Maak een afspraak</span>
                </MenuBtn>
            </div>
        </div>
    );
};

Menu.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
};

export default Menu;
