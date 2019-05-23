import React from 'react';

import CartHeader from './CartHeader';
import CartList from './CartList';
import Totals from './Totals';

const Cart = () => (
    <div className='cart position-fixed d-flex flex-column justify-content-center'>
        <CartHeader />
        <CartList />
        <Totals />
    </div>
);

export default Cart;
