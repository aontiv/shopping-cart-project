import React from 'react';

const Product = props => (
    <li className='list-group-item p-0 border-0 mb-4 mx-md-2'>
        <div className='product-card card position-relative'>
            <span className='inventory-quantity text-success pl-1'>{`x${props.product.qInventory}`}</span>
            <img className='pt-1' src={props.product.image} alt={props.product.name} />
            <div className='card-body'>
                <p className='mb-0 mt-4'>{props.product.description}</p>
                <p className='mb-0 mt-4 text-center'>Price: <span className='text-secondary'><strong>{props.product.price}</strong></span></p>
            </div>
            <a className='text-center' href=''>Add To Cart</a>
            <span className='cart-quantity pl-1'>cart: {props.product.qCart}</span>
        </div>
    </li>
);

export default Product;
