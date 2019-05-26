import React from 'react';

const Login = props => (
    <div className='container mt-4 mb-5'>
        <div className='row justify-content-center'>
            <button
                className='login-btn btn btn-block btn-outline-primary btn-lg rounded-0 shadow-sm col-8 col-md-6 col-xl-4'
                onClick={props.onLoginClick}
                type='button'
            >
                Login
            </button>
        </div>
    </div>
);

export default Login;
