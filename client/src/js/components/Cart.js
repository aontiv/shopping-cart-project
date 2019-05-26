import React from 'react';

import CartHeader from './CartHeader';
import CartList from './CartList';
import Totals from './Totals';

const Cart = props => (
    <div className='cart position-fixed d-flex flex-column justify-content-center'>
        <CartHeader />
        <CartList
            onDeleteClick={props.onDeleteClick}
            onMinusClick={props.onMinusClick}
            onPlusClick={props.onPlusClick}
        />
        <Totals
            onCheckoutClick={props.onCheckoutClick}
        />
    </div>
);

export default Cart;
