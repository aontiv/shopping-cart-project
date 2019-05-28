import React, { Component, Fragment } from 'react';
import Login from './Login';
import Logo from './Logo';
import UnauthorizedNavbar from './UnauthorizedNavbar';

class LoginContainer extends Component {
    render() {
        return (
            <Fragment>
                <UnauthorizedNavbar />
                <Logo />
                <Login
                    onLoginClick={this.props.onLoginClick}
                />
            </Fragment>
        );
    }
}

export default LoginContainer;
