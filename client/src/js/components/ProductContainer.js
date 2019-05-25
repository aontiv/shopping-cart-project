import React, { Component, Fragment } from 'react';

import ModalContainer from './ModalContainer';
import ProductList from './ProductList';

import { Context } from '../StateContext';

class ProductContainer extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                        <Fragment>
                            <ProductList
                                onAddClick={this.props.onAddClick}
                            />
                            {
                                value.control.showCart
                                    ? (
                                        <ModalContainer
                                            onDeleteClick={this.props.onDeleteClick}
                                            onMinusClick={this.props.onMinusClick}
                                            onOverlayClick={this.props.onOverlayClick}
                                            onPlusClick={this.props.onPlusClick}
                                        />
                                    )
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
