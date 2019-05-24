import React, { Component, Fragment } from 'react';

import AuthorizedNavbar from './AuthorizedNavbar';
import Checkout from './Checkout';
import Logo from './Logo';
import ProductContainer from './ProductContainer';

import { Context } from '../main';

class MainContainer extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                        <Fragment>
                            <AuthorizedNavbar />
                            <Logo />
                            {
                                value.control.checkedOut
                                    ? <Checkout />
                                    : <ProductContainer />
                            }
                        </Fragment>
                    )
                }
            </Context.Consumer>
        );
    }
}

export default MainContainer;
