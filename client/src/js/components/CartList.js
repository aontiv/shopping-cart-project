import React from 'react';

import CartItem from './CartItem';

import { Context } from '../StateContext';

const CartList = props => (
    <Context.Consumer>
        {
            value => (
                <ul className='list-group overflow-auto p-1 bg-dark'>
                    {
                        value.cartList.map(item => (
                            <CartItem
                                key={item._id}
                                _id={item._id}
                                description={item.description}
                                name={item.name}
                                onDeleteClick={props.onDeleteClick}
                                onMinusClick={props.onMinusClick}
                                onPlusClick={props.onPlusClick}
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
