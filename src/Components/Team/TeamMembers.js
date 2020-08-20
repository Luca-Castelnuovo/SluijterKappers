import React from 'react';
import Jan from 'Assets/images/team/jan.jpg';
import Sharon from 'Assets/images/team/sharon.jpg';

const TeamMembers = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-size-1">Team</h1>
                <p className="is-size-4 mb-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    voluptatem architecto dolores quibusdam natus? Molestias
                    distinctio quisquam cumque maxime blanditiis rem incidunt
                    consequatur quis consectetur omnis. Magni consequuntur
                    repellendus inventore!
                </p>
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-primary">
                                    <p className="title">Jan</p>
                                    <figure className="image is-1by1">
                                        <img src={Jan} alt="Jan" />
                                    </figure>
                                    <p className="is-size-4 mt-2">
                                        Jan is een kapper bij SluijterKappers
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-primary">
                                    <p className="title">Sharon</p>
                                    <figure className="image is-1by1">
                                        <img src={Sharon} alt="Sharon" />
                                    </figure>
                                    <p className="is-size-4 mt-2">
                                        Sharon is een kapper bij SluijterKappers
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// TeamMembers.propTypes = {};

export default TeamMembers;
