import React, { Component, Fragment } from 'react';

import Cart from './Cart';
import Overlay from './Overlay';

class ModalContainer extends Component {
    render() {
        return (
            <Fragment>
                <Overlay
                    onOverlayClick={this.props.onOverlayClick}
                />
                <Cart
                    onDeleteClick={this.props.onDeleteClick}
                    onMinusClick={this.props.onMinusClick}
                    onPlusClick={this.props.onPlusClick}
                />
            </Fragment>
        );
    }
}

export default ModalContainer;
