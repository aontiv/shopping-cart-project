import React from 'react';

const Overlay = props => (
    <div className='overlay position-absolute bg-light' onClick={props.onOverlayClick}></div>
);

export default Overlay;
