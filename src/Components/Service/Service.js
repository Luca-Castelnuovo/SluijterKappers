import React from 'react';
import PropTypes from 'prop-types';
import ServicePrices from './ServicePrices';
import ServiceImage from './ServiceImage';

const Service = ({ title, image, prices }) => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <ServicePrices title={title} prices={prices} />

                    <ServiceImage image={image} />
                </div>
            </div>
        </section>
    );
};

Service.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    prices: PropTypes.array.isRequired,
};

export default Service;
