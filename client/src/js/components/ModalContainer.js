import React, { Component, Fragment } from 'react';

import Cart from './Cart';
import Overlay from './Overlay';

class ModalContainer extends Component {
    render() {
        return (
            <Fragment>
                <Overlay />
                <Cart />
            </Fragment>
        );
    }
}

export default ModalContainer;
