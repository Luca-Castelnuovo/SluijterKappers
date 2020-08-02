import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Element as ScrollTarget } from 'react-scroll';
import FemaleModel from 'Assets/images/models/female.jpg';
import MaleModel from 'Assets/images/models/male.jpg';

const Box = styled.figure`
    box-shadow: unset;
    padding: 0.5rem;
`;

const Styles = () => {
    return (
        <section className="section has-text-centered mb-4">
            <ScrollTarget name="intro">
                <h2 className="title is-size-1 has-text-weight-medium">
                    Voor wie zoekt u een haarstijl?
                </h2>
                <div className="columns is-centered mt-1">
                    <div className="column"></div>
                    <div className="column is-2 ">
                        <Link to="/dames">
                            <Box className="image 1by1 box  has-background-primary">
                                <img
                                    src={FemaleModel}
                                    alt="Vrouwelijk Voorbeeld || Sluijter Kappers"
                                />
                            </Box>
                            {/* <p className="is-size-4 mt-1">Dames</p> */}
                        </Link>
                    </div>
                    <div className="column is-1"></div>
                    <div className="column is-2 ">
                        <Link to="/heren">
                            <Box className="image 1by1 box">
                                <img
                                    src={MaleModel}
                                    alt="Mannelijk Voorbeeld || Sluijter Kappers"
                                />
                            </Box>
                            {/* <p className="is-size-4 mt-1">Heren</p> */}
                        </Link>
                    </div>
                    <div className="column"></div>
                </div>
            </ScrollTarget>
        </section>
    );
};

export default Styles;
