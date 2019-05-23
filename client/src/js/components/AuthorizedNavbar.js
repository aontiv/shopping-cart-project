import React from 'react';

import shoppingCart from '../../img/shopping-cart-solid.svg';

const AuthorizedNavbar = () => (
    <nav className='navbar border-bottom flex-column flex-md-row'>
        <h2 className='navbar-header m-0'>Shopping Cart Project</h2>
        <div className='d-flex justify-content-center align-items-center mt-2'>
            <a className='checkout mr-3' href=''>Checkout</a>
            <a className='d-flex align-items-center' href=''><img className='shopping-cart mr-1' src={shoppingCart} alt='shopping cart' /></a>
            <span className='quantity mr-3'>15</span>
            <span className='total mr-3 text-success'>$135.99</span>
            <a className='logout' href=''>Logout</a>
        </div>
    </nav>
);

export default AuthorizedNavbar;
