import React from 'react';

import CartItem from './CartItem';

const CartList = props => (
    <ul className='list-group overflow-auto p-1 bg-dark'>
        <CartItem
            item={{
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                name: 'Item 1',
                price: '$32.99',
                qCart: 5
            }}
            onDeleteClick={props.onDeleteClick}
            onMinusClick={props.onMinusClick}
            onPlusClick={props.onPlusClick}
        />
        <CartItem
            item={{
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                name: 'Item 2',
                price: '$19.99',
                qCart: 10
            }}
            onDeleteClick={props.onDeleteClick}
            onMinusClick={props.onMinusClick}
            onPlusClick={props.onPlusClick}
        />
        <CartItem
            item={{
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                name: 'Item 3',
                price: '$99.99',
                qCart: 2
            }}
            onDeleteClick={props.onDeleteClick}
            onMinusClick={props.onMinusClick}
            onPlusClick={props.onPlusClick}
        />
        <CartItem
            item={{
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                name: 'Item 4',
                price: '$109.99',
                qCart: 23
            }}
            onDeleteClick={props.onDeleteClick}
            onMinusClick={props.onMinusClick}
            onPlusClick={props.onPlusClick}
        />
        <CartItem
            item={{
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                name: 'Item 5',
                price: '$49.99',
                qCart: 1
            }}
            onDeleteClick={props.onDeleteClick}
            onMinusClick={props.onMinusClick}
            onPlusClick={props.onPlusClick}
        />
    </ul>
);

export default CartList;
