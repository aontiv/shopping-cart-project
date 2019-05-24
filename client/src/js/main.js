import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

import Seed from './Seed';

export const Context = React.createContext();

reactDOM.render(
    <Context.Provider value={Seed}>
        <Router>
            <App />
        </Router>
    </Context.Provider>
    , document.getElementById('root')
);
