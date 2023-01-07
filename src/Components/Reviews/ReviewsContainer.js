import React from 'react';
import ReviewsConfig from 'Config/Reviews';
import ReviewsItem from './ReviewsItem';

const ReviewsContainer = () => {
    return ReviewsConfig.map((review) => (
        <ReviewsItem key={review.name} review={review} />
    ));
};

export default ReviewsContainer;
