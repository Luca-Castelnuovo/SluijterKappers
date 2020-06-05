import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero/Hero';
import chimeid from 'Assets/images/1.webp';

const Home = () => {
    return (
        <>
            <Hero />
            <section class="section">
                <div class="container">
                    <h1 class="title">Sluijter Kappers</h1>
                    <h2 class="subtitle">
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
                <div className="">
                    <div className="columns">
                        <div className="column">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-1by1">
                                        <img
                                            src="https://salon-marketing.nl/images/loreal/product/thumbnail/2620/large_file.png"
                                            alt="Placeholder"
                                        />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-1by1">
                                        <img src={chimeid} alt="Placeholder" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default withBaseRoute(Home);
