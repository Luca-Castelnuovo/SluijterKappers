import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';

// import Chocolat from 'chocolat';
// import '~chocolat/dist/css/chocolat.css';

const Home = () => {
    // Chocolat(document.querySelectorAll('.chocolat-image'), {
    //     // options here
    // });

    return (
        <>
            <section className="hero is-fullheight-with-navbar is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1 has-text-white">
                            Sluijter Kappers
                        </h1>
                    </div>
                </div>
            </section>
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
