import React from 'react';
import ReviewsData from './ReviewsData';

const Reviews = () => {
    console.log(ReviewsData);

    return (
        <section className="section">
            <div className="container">
                <h2 className="title has-text-centered is-size-1 has-text-weight-medium">
                    Vorige ervaringen
                </h2>
                <div className="tile is-ancestor">
                    {ReviewsData.map((review) => (
                        <div key={review.name} className="tile is-parent">
                            <div className="tile box">
                                <p className="is-size-3">{review.stars}/5</p>

                                <p className="is-size-5 ml-3">
                                    {review.review}'{' '}
                                    <span className="has-text-dark has-text-weight-semibold">
                                        - {review.name}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
