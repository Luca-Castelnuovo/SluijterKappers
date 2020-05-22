import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import MenuLink from './MenuLink';
import MenuBtn from './MenuBtn';

const StyledDiv = styled.div`
    @media screen and (max-width: 1023px) {
        padding-bottom: 5rem !important;
    }
`;

const Menu = ({ hamburgerOpen }) => {
    const classes = classNames('navbar-menu', {
        'is-active': hamburgerOpen,
    });

    return (
        <StyledDiv className={classes}>
            <div className="navbar-start">
                <MenuLink to="/mannen">Mannen</MenuLink>
                <MenuLink to="/vrouwen">Vrouwen</MenuLink>
                <MenuLink to="/producten">Producten</MenuLink>
                <MenuLink to="/team">Team</MenuLink>
            </div>

            <div className="navbar-end">
                <MenuLink
                    to="/redirect/instagram"
                    className="navbar-item is-hidden-touch"
                >
                    <span className="icon" style={{ color: '#333' }}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </span>
                </MenuLink>

                <MenuBtn to="/redirect/booking">
                    <span className="icon">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </span>
                    <span>Maak een afspraak</span>
                </MenuBtn>
            </div>
        </StyledDiv>
    );
};

Menu.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
};

export default Menu;
