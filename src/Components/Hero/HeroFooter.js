import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const HeroFooter = () => {
    const StyledBounce = keyframes`
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    `;

    const StyledArrow = styled.span`
        animation: ${StyledBounce} 2s infinite;
    `;

    return (
        <ScrollLink
            to="aboutMe"
            smooth={true}
            duration={500}
            offset={-75}
            className="hero-foot"
        >
            <div className="container has-text-centered">
                <StyledArrow className="icon is-large has-text-white">
                    <FontAwesomeIcon icon={faArrowDown} size="2x" />
                </StyledArrow>
            </div>
        </ScrollLink>
    );
};

export default HeroFooter;
