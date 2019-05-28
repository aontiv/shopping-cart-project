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
                                value.showCart
                                    ? (
                                        <ModalContainer
                                            onCheckoutClick={this.props.onCheckoutClick}
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
