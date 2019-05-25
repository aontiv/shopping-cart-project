import React, { Component, Fragment } from 'react';

import AuthorizedNavbar from './AuthorizedNavbar';
import Checkout from './Checkout';
import Logo from './Logo';
import ProductContainer from './ProductContainer';

import { Context } from '../StateContext';

class MainContainer extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                        <Fragment>
                            <AuthorizedNavbar
                                onCartClick={this.props.onCartClick}
                                onLogoutClick={this.props.onLogoutClick}
                            />
                            <Logo />
                            {
                                value.control.checkedOut
                                    ? <Checkout />
                                    : (
                                        <ProductContainer
                                            onAddClick={this.props.onAddClick}
                                            onDeleteClick={this.props.onDeleteClick}
                                            onMinusClick={this.props.onMinusClick}
                                            onOverlayClick={this.props.onOverlayClick}
                                            onPlusClick={this.props.onPlusClick}
                                        />
                                    )
                            }
                        </Fragment>
                    )
                }
            </Context.Consumer>
        );
    }
}

export default MainContainer;
