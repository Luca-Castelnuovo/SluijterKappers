import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Business1 from 'Assets/images/business/business1.jpg';

const Heren = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-narrow is-size-4">
                        <h1 className="title is-1">Heren</h1>

                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Knippen</th>
                                    <td>35,-</td>
                                </tr>
                                <tr>
                                    <th>Wassen en knippen</th>
                                    <td>39,-</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="subtitle is-4 mb-0">Jeugd</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Knippen (t/m 12 jaar)</th>
                                    <td>27,-</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="subtitle is-4 mb-0">Overig</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Baard knippen</th>
                                    <td>5,-</td>
                                </tr>
                                <tr>
                                    <th>Tondeuse (5 min)</th>
                                    <td>11,-</td>
                                </tr>
                                <tr>
                                    <th>Tondeuse (uitgebreid)</th>
                                    <td>22,-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="column is-hidden-touch">
                        <figure class="image is-5by4">
                            <img src={Business1} alt="TODO" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withBaseRoute(Heren);
