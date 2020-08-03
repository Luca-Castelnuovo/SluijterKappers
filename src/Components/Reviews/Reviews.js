import React from 'react';
import ReviewsData from './ReviewsData';
import ReviewsItem from './ReviewsItem';

const Reviews = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="title has-text-centered is-size-1 has-text-weight-medium">
                    Vorige ervaringen
                </h2>
                <div className="tile is-ancestor">
                    {ReviewsData.map((review) => (
                        <ReviewsItem key={review.name} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
