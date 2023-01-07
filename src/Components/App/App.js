import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'Utils/ScrollToTop';
import './App.scss';

import NavBar from 'Components/NavBar';

import Home from 'Routes/Home';
import Dames from 'Routes/Dames';
import Heren from 'Routes/Heren';
import Producten from 'Routes/Producten';
import Team from 'Routes/Team';
import Redirect from 'Routes/Redirect';
import NotFound from 'Routes/NotFound';

import Footer from 'Components/Footer';

const App = () => {
    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <NavBar />

            <Routes>
                <Route index element={<Home />} />
                <Route path="dames" element={<Dames />} />
                <Route path="heren" element={<Heren />} />
                <Route path="producten" element={<Producten />} />
                <Route path="team" element={<Team />} />
                <Route path="redirect/:src" element={<Redirect />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </Router>
    );
};

export default App;
