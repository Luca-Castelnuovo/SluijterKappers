import React from 'react';
import PropTypes from 'prop-types';
import ServicePrices from './ServicePrices';
import ServiceImage from './ServiceImage';

const Service = ({ title, image, prices }) => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-narrow is-size-4">
                        <h1 className="title is-1">{title}</h1>
                        <h2 className="subtitle">Tarieven</h2>

                        <ServicePrices prices={prices} />
                    </div>

                    <div className="column is-hidden-touch">
                        <ServiceImage image={image} />
                    </div>
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
