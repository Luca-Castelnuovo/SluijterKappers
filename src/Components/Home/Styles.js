import React from 'react';
import { Link } from 'react-router-dom';
import { Element as ScrollTarget } from 'react-scroll';
import FemaleModel from 'Assets/images/models/female.jpg';
import MaleModel from 'Assets/images/models/male.jpg';

const Styles = () => {
    return (
        <section className="section has-text-centered mb-4">
            <ScrollTarget name="intro">
                <h1 className="title is-size-1 has-text-weight-medium">
                    Voor wie zoekt u een haarstijl?
                </h1>
                <div className="columns is-centered mt-1">
                    <div className="column"></div>
                    <div className="column is-2 box">
                        <Link to="/dames">
                            <figure className="image is-2by3">
                                <img src={FemaleModel} alt="TODO" />
                            </figure>
                            <p className="is-size-4 mt-1">Dames</p>
                        </Link>
                    </div>
                    <div className="column is-1"></div>
                    <div className="column is-2 box">
                        <Link to="/heren">
                            <figure className="image is-2by3">
                                <img src={MaleModel} alt="TODO" />
                            </figure>
                            <p className="is-size-4 mt-1">Heren</p>
                        </Link>
                    </div>
                    <div className="column"></div>
                </div>
            </ScrollTarget>
        </section>
    );
};

export default Styles;
