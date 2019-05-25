import React from 'react';

import shoppingCart from '../../img/shopping-cart-solid.svg';

import Helpers from '../Helpers';

import { Context } from '../StateContext';

const AuthorizedNavbar = props => (
    <Context.Consumer>
        {
            value => (
                <nav className='navbar border-bottom flex-column flex-md-row'>
                    <h2 className='navbar-header m-0'>Shopping Cart Project</h2>
                    <div className='d-flex justify-content-center align-items-center mt-2'>
                        <a className='checkout mr-3' href=''>Checkout</a>
                        <a className='d-flex align-items-center' href='' onClick={props.onCartClick}><img className='shopping-cart mr-1' src={shoppingCart} alt='shopping cart' /></a>
                        <span className='quantity mr-3'>{value.cartList.length}</span>
                        <span className='total mr-3 text-success'>${Helpers.total(value.cartList, value.meta.rate, value.meta.shipping).toFixed(2)}</span>
                        <a className='logout' href='' onClick={props.onLogoutClick}>Logout</a>
                    </div>
                </nav>
            )
        }
    </Context.Consumer>
);

export default AuthorizedNavbar;
