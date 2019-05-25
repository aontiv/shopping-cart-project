import React from 'react';
import Helpers from '../Helpers';

import { Context } from '../StateContext';

const Totals = () => (
    <Context.Consumer>
        {
            value => (
                <div className='totals card p-1 bg-dark rounded-0'>
                    <div className='rounded bg-white p-1'>
                        <p className='d-flex justify-content-between m-0'>
                            <span>subtotal:</span>
                            <span>
                                ${Helpers.subtotal(value.cartList).toFixed(2)}
                            </span>
                        </p>
                        <p className='d-flex justify-content-between m-0'>
                            <span>sales tax:</span>
                            <span>
                                ${Helpers.salesTax(value.cartList, value.meta.rate).toFixed(2)}
                            </span>
                        </p>
                        <p className='d-flex justify-content-between m-0'>
                            <span>shipping + taxes:</span>
                            <span>
                                ${value.meta.shipping}
                            </span>
                        </p>
                        <p className='d-flex justify-content-between m-0 border-bottom'>
                            <span>total:</span>
                            <span className='text-success'>
                                ${Helpers.total(value.cartList, value.meta.rate, value.meta.shipping).toFixed(2)}
                            </span>
                        </p>
                        <button className='btn btn-block rounded-0 mt-1 text-white' type='button'>Checkout</button>
                    </div>
                </div>
            )
        }
    </Context.Consumer>
);

export default Totals;