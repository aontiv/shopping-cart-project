import React, { Component, Fragment } from 'react';

import ModalContainer from './ModalContainer';
import ProductList from './ProductList';

class ProductContainer extends Component {
    render() {
        const showCart = true;

        return (
            <Fragment>
                <ProductList />
                {
                    showCart
                        ? <ModalContainer />
                        : null
                }
            </Fragment>
        );
    }
}

export default ProductContainer;
