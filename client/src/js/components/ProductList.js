import React, { Component } from 'react';

import Product from './Product';

import { Context } from '../main';

class ProductList extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                        <ul className='list-group list-group-horizontal-md flex-md-wrap align-items-center justify-content-md-center mt-5'>
                            {
                                value.productList.map(product => (
                                    <Product
                                        key={product.id}
                                        description={product.description}
                                        name={product.name}
                                        image={product.image}
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
    }
}

export default ProductList;