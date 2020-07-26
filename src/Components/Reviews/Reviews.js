import React from 'react';
import ReviewsData from './ReviewsData';

const Reviews = () => {
    console.log(ReviewsData);

    return (
        <section className="section">
            <div className="container">
                <h2 className="title">Reviews</h2>
                <p className="is-size-3 has-text-weight-medium">
                    SluijterKappers is een moderne en gezellige salon in Soest.
                    Jij ontspant hier, terwijl een ervaren team van kappers je
                    voorziet van een geweldige coupe.
                </p>
            </div>
        </section>
    );
};

export default Reviews;
