import React from 'react';
import PropTypes from 'prop-types';

const ReviewsItem = ({ review }) => {
    return (
        <div className="tile is-parent">
            <div className="tile box">
                <p className="is-size-3">{review.stars}/5</p>

                <p className="is-size-5 ml-3">
                    {review.review}
                    <br />
                    <span className="has-text-dark has-text-weight-semibold">
                        -{review.name}
                    </span>
                </p>
            </div>
        </div>
    );
};

ReviewsItem.propTypes = {
    review: PropTypes.object.isRequired,
};

export default ReviewsItem;
