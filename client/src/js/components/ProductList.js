import React from 'react';

import Product from './Product';

import { Context } from '../StateContext';

const ProductList = props => (
    <Context.Consumer>
        {
            value => (
                <ul className='list-group list-group-horizontal-md flex-md-wrap align-items-center justify-content-md-center mt-5'>
                    {
                        value.productList.map(product => (
                            <Product
                                key={product.id}
                                id={product.id}
                                description={product.description}
                                name={product.name}
                                image={product.image}
                                onAddClick={props.onAddClick}
                                price={product.price}
                                qCart={product.qCart}
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