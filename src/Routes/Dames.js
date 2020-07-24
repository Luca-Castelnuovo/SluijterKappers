import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Business2 from 'Assets/images/business/business2.jpg';

const Dames = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-narrow is-size-4">
                        <h1 className="title is-1">Dames</h1>

                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Wassen en föhnen</th>
                                    <td>31,-</td>
                                </tr>
                                <tr>
                                    <th>Wassen, knippen en drogen</th>
                                    <td>53,-</td>
                                </tr>
                                <tr>
                                    <th>Wassen, knippen en föhnen</th>
                                    <td>59,-</td>
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
                                <tr>
                                    <th>Knippen (13 t/m 17)</th>
                                    <td>38,-</td>
                                </tr>
                                <tr>
                                    <th>Knippen (18 t/m 21)</th>
                                    <td>40,-</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="subtitle is-4 mb-0">Kleuren</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Verven</th>
                                    <td>vanaf 49,-</td>
                                </tr>
                                <tr>
                                    <th>Highlights</th>
                                    <td>vanaf 67,-</td>
                                </tr>
                                <tr>
                                    <th>Folie kleuring (deel)</th>
                                    <td>vanaf 80,-</td>
                                </tr>
                                <tr>
                                    <th>Folie kleuring (compleet)</th>
                                    <td>vanaf 145,-</td>
                                </tr>
                                <tr>
                                    <th>French Balayage</th>
                                    <td>vanaf 100,-</td>
                                </tr>
                                <tr>
                                    <th>Permananet (compleet)</th>
                                    <td>vanaf 120,-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="column is-hidden-touch">
                        <div className="column is-hidden-touch">
                            <figure class="image is-5by4">
                                <img src={Business2} alt="TODO" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withBaseRoute(Dames);
