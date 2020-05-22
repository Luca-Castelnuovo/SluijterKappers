import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero/Hero';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="section">
                <div className="container">
                    <div>
                        <a
                            className="chocolat-image"
                            href="img/a.jpg"
                            title="image caption a"
                        >
                            A <img src="thumb/a.jpg" alt="" />
                        </a>
                        <a
                            className="chocolat-image"
                            href="img/b.jpg"
                            title="image caption b"
                        >
                            B <img src="thumb/b.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default withBaseRoute(Home);
