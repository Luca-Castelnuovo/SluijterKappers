import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuLink = ({ to, children, className, hasActiveState }) => {
    return (
        <NavLink
            end
            to={to}
            className={({ isActive }) =>
                className + (isActive ? ' is-active' : '')
            }
        >
            {children}
        </NavLink>
    );
};

MenuLink.defaultProps = {
    className: 'navbar-item is-size-4',
    hasActiveState: true,
};

MenuLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    hasActiveState: PropTypes.bool.isRequired,
};

export default MenuLink;
