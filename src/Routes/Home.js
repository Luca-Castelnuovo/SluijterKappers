import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero/Hero';
import chimeid from 'Assets/images/chimeid.webp';
import niffo from 'Assets/images/niffo.webp';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="section">
                <div className="container">
                    {/* <h1 className="title">Sluijter Kappers</h1> */}
                    <p className="is-size-3 has-text-weight-medium">
                        SluijterKappers is een moderne en gezellige salon in
                        Soest. Jij ontspant hier, terwijl een ervaren team van
                        kappers je voorziet van een geweldige coupe.
                    </p>
                    <br />
                    <p className="is-size-4">
                        Hun doel is een kapsel dat perfect bij je past en
                        helemaal volgens jouw wensen is. Kort of lang, een mooie
                        zomerse blondtint, een zachte bruine kleur of een
                        knalkleur. Deze kappers halen het mooiste in jou naar
                        boven.
                    </p>
                    <br />
                    <p className="is-size-4">
                        Bovendien wordt het kapsel zo gecreëerd dat je het,
                        eenmaal thuis, gemakkelijk zelf kunt stylen. Zo blijf je
                        er tiptop uitzien. Weken lang.
                    </p>
                </div>
            </section>

            <section className="section">
                <h1 className="title is-size-1 has-text-weight-medium has-text-centered">
                    Voor wie zoekt u een haarstijl?
                </h1>
                <div className="columns is-centered mt-1">
                    <div className="column"></div>
                    <div className="column is-2 box">
                        <Link to="/vrouwen">
                            <figure className="image is-2by3">
                                <img src={chimeid} alt="TODO" />
                            </figure>
                        </Link>
                    </div>
                    <div className="column is-1"></div>
                    <div className="column is-2 box">
                        <Link to="/mannen">
                            <figure class="image is-2by3">
                                <img src={niffo} alt="TODO" />
                            </figure>
                        </Link>
                    </div>
                    <div className="column"></div>
                </div>
            </section>
        </>
    );
};

export default withBaseRoute(Home);
