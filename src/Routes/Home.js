import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero/Hero';

// import Chocolat from 'chocolat';
// import '~chocolat/dist/css/chocolat.css';

const Home = () => {
    // Chocolat(document.querySelectorAll('.chocolat-image'), {
    //     // options here
    // });

    return (
        <>
            <Hero />
            <section className="section">
                <div className="container">
                    <div>
                        <a
                            class="chocolat-image"
                            href="img/a.jpg"
                            title="image caption a"
                        >
                            A <img src="thumb/a.jpg" alt="" />
                        </a>
                        <a
                            class="chocolat-image"
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
