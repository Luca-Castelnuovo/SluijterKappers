import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero/Hero';
import chimeid from 'Assets/images/chimeid.webp';
import niffo from 'Assets/images/niffo.webp';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="section">
                <div className="container">
                    <h1 className="title">Sluijter Kappers</h1>
                    <h2 className="subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse harum perspiciatis necessitatibus rerum soluta,
                        voluptatem enim! Aperiam officia excepturi, nemo nam
                        quos nihil commodi debitis harum non omnis? Dignissimos,
                        aspernatur!
                    </h2>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h1 className="title">Jan Sluijter</h1>
                    <h2 className="subtitle">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Incidunt laborum natus necessitatibus consequatur
                        minima in, rem perferendis exercitationem omnis error
                        asperiores molestias nulla dolorum atque saepe
                        distinctio! Quis, architecto saepe.
                    </h2>
                </div>
            </section>
            <section className="section">
                <div className="columns">
                    <div className="column is-2"></div>
                    <div className="column is-3">
                        <figure className="image is-2by3">
                            <img src={chimeid} alt="TODO" />
                        </figure>
                    </div>
                    <div className="column is-2"></div>
                    <div className="column is-3">
                        <figure className="image is-2by3">
                            <img src={niffo} alt="TODO" />
                        </figure>
                    </div>
                    <div className="column is-2"></div>
                </div>
            </section>
        </>
    );
};

export default withBaseRoute(Home);
