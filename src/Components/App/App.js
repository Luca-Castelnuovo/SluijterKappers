import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import RoutesConfig from 'Routes/RoutesConfig';
import Analytics from 'Utils/Analytics';
import ScrollToTop from 'Utils/ScrollToTop';
import './App.scss';

const App = () => {
    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    return (
        <Router>
            <Analytics />
            <ScrollToTop />
            <div className="App">{renderRoutes(RoutesConfig)}</div>
        </Router>
    );
};

export default App;
