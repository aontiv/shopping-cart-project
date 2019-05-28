import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StateContext from './StateContext';

reactDOM.render(
    <Router>
        <StateContext />
    </Router>
    , document.getElementById('root')
);
