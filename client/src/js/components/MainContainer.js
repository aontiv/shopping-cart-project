import React, { Component, Fragment } from 'react';

import AuthorizedNavbar from './AuthorizedNavbar';
import CheckoutContainer from './CheckoutContainer';
import Logo from './Logo';
import ProductContainer from './ProductContainer';

class MainContainer extends Component {
    render() {
        const checkedOut = false;

        return (
            <Fragment>
                <AuthorizedNavbar />
                <Logo />
                {
                    checkedOut
                        ? <CheckoutContainer />
                        : <ProductContainer />
                }
            </Fragment>
        );
    }
}

export default MainContainer;
