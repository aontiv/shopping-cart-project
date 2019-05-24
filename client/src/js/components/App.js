import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import 'bootstrap';
import '../../scss/custom.scss';

import LoginContainer from './LoginContainer';
import MainContainer from './MainContainer';

import { Context } from '../main';

class App extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                  value => (
                    <div className='app position-relative'>
                        <Route path='/' exact render={() => {
                            return value.control.loggedIn
                                ? <MainContainer />
                                : <Redirect to='/login' />
                        }} />
                        <Route path='/login' render={() => {
                            return !value.control.loggedIn
                                ? <LoginContainer />
                                : <Redirect to='/' />
                        }} />
                    </div>
                  )  
                }
            </Context.Consumer>
        );
    }
}

export default App;
