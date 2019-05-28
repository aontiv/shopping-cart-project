import React from 'react';

import Product from './Product';

import Helpers from '../Helpers';
import { Context } from '../StateContext';

const ProductList = props => (
    <Context.Consumer>
        {
            value => (
                <ul className='list-group list-group-horizontal-md flex-md-wrap align-items-center justify-content-md-center mt-5'>
                    {
                        value.productList.map(product => (
                            <Product
                                key={product._id}
                                _id={product._id}
                                description={product.description}
                                name={product.name}
                                image={product.image}
                                onAddClick={props.onAddClick}
                                price={product.price}
                                qCart={Helpers.cartItem(value.cartList, product._id) ? Helpers.cartItem(value.cartList, product._id).qCart : 0}
                                qInventory={product.qInventory}
                            />
                        ))
                    }
                </ul>
            )
        }
    </Context.Consumer>
);

export default ProductList;