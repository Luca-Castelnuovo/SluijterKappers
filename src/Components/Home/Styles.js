import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FemaleModel from 'Assets/images/chimeid.webp';
import MaleModel from 'Assets/images/niffo.webp';

const Styles = () => {
    return (
        <section className="section">
            <h1 className="title is-size-1 has-text-weight-medium has-text-centered">
                Voor wie zoekt u een haarstijl?
            </h1>
            <div className="columns is-centered mt-1">
                <div className="column"></div>
                <div className="column is-2 box">
                    <Link to="/vrouwen">
                        <figure className="image is-2by3">
                            <img src={FemaleModel} alt="TODO" />
                        </figure>
                    </Link>
                </div>
                <div className="column is-1"></div>
                <div className="column is-2 box">
                    <Link to="/mannen">
                        <figure class="image is-2by3">
                            <img src={MaleModel} alt="TODO" />
                        </figure>
                    </Link>
                </div>
                <div className="column"></div>
            </div>
        </section>
    );
};

export default Styles;
