import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import 'bootstrap';
import '../../scss/custom.scss';

import LoginContainer from './LoginContainer';
import MainContainer from './MainContainer';

import { Context } from '../StateContext';

class App extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                  value => (
                    <div className='app position-relative'>
                        <Route path='/' exact render={() => {
                            return value.loggedIn
                                ? (
                                    <MainContainer
                                        onAddClick={this.props.onAddClick}
                                        onCartClick={this.props.onCartClick}
                                        onCheckoutClick={this.props.onCheckoutClick}
                                        onDeleteClick={this.props.onDeleteClick}
                                        onLogoutClick={this.props.onLogoutClick}
                                        onMinusClick={this.props.onMinusClick}
                                        onOverlayClick={this.props.onOverlayClick}
                                        onPlusClick={this.props.onPlusClick}
                                    />
                                )
                                : <Redirect to='/login' />
                        }} />
                        <Route path='/login' render={() => {
                            return !value.loggedIn
                                ? (
                                    <LoginContainer
                                        onLoginClick={this.props.onLoginClick}
                                    />
                                )
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
