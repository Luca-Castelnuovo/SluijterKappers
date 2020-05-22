import React from 'react';
import styled from 'styled-components';

const FooterHoursDay = styled.span`
    font-weight: bolder;
`;

const FooterHours = () => {
    return (
        <div className="level-item ">
            <div className="is-size-5">
                <p className="title">Openingstijden</p>

                <ul>
                    <li>
                        <FooterHoursDay>Maandag</FooterHoursDay> - gesloten
                    </li>
                    <li>
                        <FooterHoursDay>Dinsdag</FooterHoursDay> - 9.00 - 18.00
                    </li>
                    <li>
                        <FooterHoursDay>Woensdag</FooterHoursDay> - 9.00 - 18.00
                    </li>
                    <li>
                        <FooterHoursDay>Donderdag</FooterHoursDay> - 9.00 -
                        18.00
                    </li>
                    <li>
                        <FooterHoursDay>Vrijdag</FooterHoursDay> - 9.00 - 21.00
                    </li>
                    <li>
                        <FooterHoursDay>Zaterdag</FooterHoursDay> - 9.00 - 16.00
                    </li>
                    <li>
                        <FooterHoursDay>Zondag</FooterHoursDay> - gesloten
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterHours;
