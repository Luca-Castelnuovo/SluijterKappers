import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none !important;
`;

const FooterHours = () => {
    const day = new Date().getDay();

    return (
        <div className="column is-narrow">
            <p className="title">Openingstijden</p>

            <List className="has-text-left is-size-4">
                <li className={day === 1 ? 'has-text-weight-semibold' : ''}>
                    Maandag - gesloten
                </li>
                <li className={day === 2 ? 'has-text-weight-semibold' : ''}>
                    Dinsdag - 9.00 - 17.30
                </li>
                <li className={day === 3 ? 'has-text-weight-semibold' : ''}>
                    Woensdag - 9.00 - 17.30
                </li>
                <li className={day === 4 ? 'has-text-weight-semibold' : ''}>
                    Donderdag - 9.00 - 17.30
                </li>
                <li className={day === 5 ? 'has-text-weight-semibold' : ''}>
                    Vrijdag - 9.00 - 17.30
                </li>
                <li className={day === 6 ? 'has-text-weight-semibold' : ''}>
                    Zaterdag - 9.00 - 16.00
                </li>
                <li className={day === 0 ? 'has-text-weight-semibold' : ''}>
                    Zondag - gesloten
                </li>
            </List>
        </div>
    );
};

export default FooterHours;
