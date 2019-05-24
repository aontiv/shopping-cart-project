import React from 'react';

const Checkout = () => (
    <div className='container d-flex justify-content-center mt-4 mb-5'>
        <div className='checkout-success card col-12 col-md-8 col-lg-6 p-1'>
            <div className='card-body p-1'>
                <header className='d-flex justify-content-center align-items-center bg-success p-2 rounded'>
                    <h2 className='text-white m-0'>Success!</h2>
                </header>
                <p className='mt-3 d-flex justify-content-center'>Thank you for your purchase!</p>
                <hr className='col-6 col-md-4' />
            </div>
        </div>
    </div>
);

export default Checkout;
