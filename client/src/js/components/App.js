import { Route } from 'react-router-dom';
import React, { Component } from 'react';

import 'bootstrap';
import '../../scss/custom.scss';

import LoginContainer from './LoginContainer';
import MainContainer from './MainContainer';

class App extends Component {
    render() {
        return (
            <div className='app position-relative'>
                <Route path='/' exact component={MainContainer} />
                <Route path='/login' component={LoginContainer} />
            </div>
        );
    }
}

export default App;
