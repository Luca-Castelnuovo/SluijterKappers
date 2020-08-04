import React from 'react';
import PropTypes from 'prop-types';

const ServicePrices = ({ title, prices }) => {
    return (
        <div className="column is-narrow is-size-4">
            <h1 className="title is-1">{title}</h1>

            {prices.map((category) => (
                <div key={category.title} className="mb-4">
                    {category.title && (
                        <h2 className="subtitle is-4 mb-0">{category.title}</h2>
                    )}

                    <table className="table">
                        <tbody>
                            {Object.entries(category)
                                .filter(([key, value]) => key !== 'title')
                                .map(([key, value]) => (
                                    <tr key={key}>
                                        <th>{key}</th>
                                        <td>{value},-</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

PropTypes.propTypes = {
    title: PropTypes.string.isRequired,
    prices: PropTypes.array.isRequired,
};

export default ServicePrices;
