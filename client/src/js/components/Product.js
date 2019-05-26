import React from 'react';

const Product = props => (
    <li className='list-group-item p-0 border-0 mb-4 mx-md-2'>
        <div className='product-card card position-relative'>
            <span className='inventory-quantity text-success pl-1'>{`x${props.qInventory}`}</span>
            <img className='pt-1' src={props.image} alt={props.name} />
            <div className='card-body'>
                <h5 className='m-0'>{props.name}</h5>
                <p className='mb-0 mt-1'>{props.description}</p>
                <p className='mb-0 mt-2 text-center'>Price: <span className='text-secondary'><strong>${props.price}</strong></span></p>
            </div>
            <a
                className='text-center'
                href=''
                onClick={event => props.onAddClick(event, {
                    id: props.id,
                    description: props.description,
                    name: props.name,
                    price: props.price,
                    qCart: 1
                })}
            >
                Add
            </a>
            <span className='cart-quantity pl-1'>cart: {props.qCart}</span>
        </div>
    </li>
);

export default Product;
