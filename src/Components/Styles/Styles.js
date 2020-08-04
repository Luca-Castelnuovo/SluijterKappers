import React from 'react';
import { Element as ScrollTarget } from 'react-scroll';
import StylesItem from './StylesItem';

const Styles = () => {
    return (
        <ScrollTarget name="styles">
            <section className="section">
                <div className="columns is-centered">
                    <div className="column is-5">
                        <div className="box is-size-3 has-text-centered">
                            <p className="has-text-weight-semibold ">
                                Sluijter Kappers is een moderne en gezellige
                                salon in Soest.
                            </p>
                            <p className="has-text-weight-medium mt-5">
                                Jij ontspant hier, terwijl een team van ervaren
                                kappers je voorziet van een geweldige coupe.
                            </p>
                            <p className="has-text-weight-medium mt-5 is-hidden-touch">
                                Hun doel is een kapsel dat perfect bij je past
                                en helemaal volgens jouw wensen is.
                            </p>
                        </div>
                    </div>

                    <div className="column is-6">
                        <div className="box">
                            <h2 className="title is-size-1 has-text-weight-medium has-text-centered">
                                Voor wie zoekt u een haarstijl?
                            </h2>
                            <div className="columns">
                                <StylesItem gender="female" />
                                <StylesItem gender="male" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTarget>
    );
};

export default Styles;
