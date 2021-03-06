import React from 'react';
import pIcon from '../../img/plus-square-solid.svg';
import mIcon from '../../img/minus-square-solid.svg';

const CartItem = props => (
    <li className='list-group-item p-0 border-0 mb-1 rounded p-1'>
        <div className='cart-item card border-0'>
            <div className='d-flex justify-content-between border-bottom'>
                <span><strong>{props.name}</strong></span>
                <button
                    className="close"
                    onClick={() => props.onDeleteClick(props._id, props.qCart)}
                    type="button"
                >
                    <span>&times;</span>
                </button>
            </div>
            <div className='d-flex flex-fill mt-2'>
                <p className='m-0'>{props.description}</p>
                <div className='d-flex flex-column justify-content-between'>
                    <div className='d-flex'>
                        <p className='mr-1 p-1 text-center lead'>{props.qCart}</p>
                        <div className='d-flex flex-column'>
                            <img src={pIcon} alt='plus icon' onClick={() => props.onPlusClick(props._id)} />
                            <img src={mIcon} alt='minus icon' onClick={() => props.onMinusClick(props._id)} />
                        </div>
                    </div>
                    <span className='text-success'>${props.price}</span>
                </div>
            </div>
        </div>
    </li>
);

export default CartItem;
