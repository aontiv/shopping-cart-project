import React, { Component, Fragment } from 'react';

import ModalContainer from './ModalContainer';
import ProductList from './ProductList';

import { Context } from '../main';

class ProductContainer extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                        <Fragment>
                            <ProductList />
                            {
                                value.control.showCart
                                    ? <ModalContainer />
                                    : null
                            }
                        </Fragment>
                    )
                }
            </Context.Consumer>
        );
    }
}

export default ProductContainer;
