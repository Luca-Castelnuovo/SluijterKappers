import React from 'react';
import ReviewsItem from './ReviewsItem';
import useReviews from 'Utils/useProducts';

const Reviews = () => {
    const ReviewsData = useReviews();

    if (!ReviewsData) {
        return (
            <section className="section">
                <div className="container">
                    <h2 className="title has-text-centered is-size-1 has-text-weight-medium">
                        Reviews
                    </h2>
                    <div className="tile is-ancestor">
                        <progress class="progress is-large is-primary"></progress>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section">
            <div className="container">
                <h2 className="title has-text-centered is-size-1 has-text-weight-medium">
                    Reviews
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
