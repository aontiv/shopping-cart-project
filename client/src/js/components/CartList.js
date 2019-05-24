import React from 'react';

import CartItem from './CartItem';

import { Context } from '../main';

const CartList = () => (
    <Context.Consumer>
        {
            value => (
                <ul className='list-group overflow-auto p-1 bg-dark'>
                    {
                        value.cartList.map(item => (
                            <CartItem
                                key={item.name}
                                description={item.description}
                                name={item.name}
                                price={item.price}
                                qCart={item.qCart}
                            />
                        ))
                    }
                </ul>
            )
        }
    </Context.Consumer>
);

export default CartList;
