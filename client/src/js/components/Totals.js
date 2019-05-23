import React from 'react';

const Totals = () => (
    <div className='totals card p-1 bg-dark rounded-0'>
        <div className='rounded bg-white p-1'>
            <p className='d-flex justify-content-between m-0'><span>subtotal:</span><span>$125.99</span></p>
            <p className='d-flex justify-content-between m-0'><span>sales tax:</span><span>$35.95</span></p>
            <p className='d-flex justify-content-between m-0'><span>shipping + taxes:</span><span>$10.50</span></p>
            <p className='d-flex justify-content-between m-0 border-bottom'><span>total:</span><span className='text-success'>$275.96</span></p>
            <button className='btn btn-block rounded-0 mt-1 text-white' type='button'>Checkout</button>
        </div>
    </div>
);

export default Totals;