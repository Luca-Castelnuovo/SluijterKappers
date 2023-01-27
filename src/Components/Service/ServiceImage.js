import React from 'react';
import PropTypes from 'prop-types';

const ServiceImage = ({ image }) => {
    return (
        <figure className="image is-5by4">
            <img src={image} alt="De Zaak || Sluijter Kappers" />
        </figure>
    );
};

ServiceImage.propTypes = {
    image: PropTypes.string.isRequired,
};

export default ServiceImage;
