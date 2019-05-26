import React, { Component } from 'react';

import App from './components/App';

export const Context = React.createContext();

import Seed from './Seed';

class StateContext extends Component {
    state = {
        cartList: [],
        checkedOut: false,
        loggedIn: false,
        meta: {
            rate: 0.0757,
            shipping: 10.99
        },
        productList: Seed.productList,
        showCart: false
    };

    onLoginClick = () => {
        this.setState({ loggedIn: true });
    };

    onLogoutClick = event => {
        if (event) event.preventDefault();
        this.resetState();
    };

    onCartClick = event => {
        event.preventDefault();
        this.setState({ showCart: true });
    };

    onOverlayClick = () => {
        this.setState({ showCart: false });
    };

    onAddClick = (event, newItem) => {
        event.preventDefault();
        const inCart = this.state.cartList.findIndex(item => item.id === newItem.id);

        if (inCart === -1) {
            const cartList = this.state.cartList.concat([newItem]);
            this.setState({ cartList });
            this.decrementQInventory(newItem.id);
        }
    };

    onPlusClick = id => {
        this.incrementQCart(id);
        this.decrementQInventory(id);
    };

    onMinusClick = id => {
        this.decrementQCart(id);
        this.incrementQInventory(id);
    };

    onDeleteClick = (id, amount) => {
        const cartList = this.state.cartList.filter(item => item.id !== id);
        this.setState({ cartList });
        this.restoreQInventory(id, amount);
    };

    onCheckoutClick = () => {
        if (this.state.cartList.length > 0) {
            this.setState({ checkedOut: true, cartList: [] });
            window.setTimeout(() => {
                this.onLogoutClick();
                this.resetState();
            }, 2000);
        }
    };

    restoreQInventory = (id, amount) => {
        const product = this.state.productList.find(product => product.id === id);
        const productIndex = this.state.productList.findIndex(product => product.id === id);

        this.setState({
            productList: [
                ...this.state.productList.slice(0, productIndex),
                { ...product, qInventory: product.qInventory + amount},
                ...this.state.productList.slice(productIndex + 1)
            ]
        });
    };

    incrementQCart = id => {
        const item = this.state.cartList.find(item => item.id === id);
        const itemIndex = this.state.cartList.findIndex(item => item.id === id);
        const product = this.state.productList.find(product => product.id === id);

        if (product.qInventory > 0) {
            this.setState({
                cartList: [
                    ...this.state.cartList.slice(0, itemIndex),
                    { ...item, qCart: item.qCart + 1 },
                    ...this.state.cartList.slice(itemIndex + 1)
                ]
            });
        }
    };

    resetState = () => {
        this.setState({
            cartList: [],
            checkedOut: false,
            loggedIn: false,
            meta: {
                rate: 0.0757,
                shipping: 10.99
            },
            productList: Seed.productList,
            showCart: false
        });
    };

    decrementQCart = id => {
        const item = this.state.cartList.find(item => item.id === id);
        const itemIndex = this.state.cartList.findIndex(item => item.id === id);
        const product = this.state.productList.find(product => product.id === id);

        if (product.qInventory < 99) {
            this.setState({
                cartList: [
                    ...this.state.cartList.slice(0, itemIndex),
                    { ...item, qCart: item.qCart - 1 },
                    ...this.state.cartList.slice(itemIndex + 1)
                ]
            });
        }
    };

    incrementQInventory = id => {
        const product = this.state.productList.find(product => product.id === id);
        const productIndex = this.state.productList.findIndex(product => product.id === id);

        if (product.qInventory < 99) {
            this.setState({
                productList: [
                    ...this.state.productList.slice(0, productIndex),
                    { ...product, qInventory: product.qInventory + 1 },
                    ...this.state.productList.slice(productIndex + 1)
                ]
            });
        }
    };

    decrementQInventory = id => {
        const product = this.state.productList.find(product => product.id === id);
        const productIndex = this.state.productList.findIndex(product => product.id === id);

        if (product.qInventory > 0) {
            this.setState({
                productList: [
                    ...this.state.productList.slice(0, productIndex),
                    { ...product, qInventory: product.qInventory - 1 },
                    ...this.state.productList.slice(productIndex + 1)
                ]
            });
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                <App
                    onAddClick={this.onAddClick}
                    onCartClick={this.onCartClick}
                    onCheckoutClick={this.onCheckoutClick}
                    onDeleteClick={this.onDeleteClick}
                    onLoginClick={this.onLoginClick}
                    onLogoutClick={this.onLogoutClick}
                    onMinusClick={this.onMinusClick}
                    onOverlayClick={this.onOverlayClick}
                    onPlusClick={this.onPlusClick}
                />
            </Context.Provider>
        );
    }
}

export default StateContext;
