import React, { Component } from 'react';
import App from './components/App';
import Client from './Client';

export const Context = React.createContext();

class StateContext extends Component {
    state = {
        cartList: [],
        checkedOut: false,
        loggedIn: false,
        meta: {
            rate: 0.0757,
            shipping: 10.99
        },
        productList: [],
        showCart: false
    };

    componentDidMount() {
        Client.status()
            .then(response => response.json())
            .then(data => {
                if (!data.message) {
                    this.setState({
                        loggedIn: true,
                        productList: data.productList,
                        cartList: data.cartList
                    });
                }
                else {
                    console.log(data.message); // eslint-disable-line
                }
            });
    }

    onLoginClick = () => {
        Client.login()
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loggedIn: true,
                    productList: data.productList,
                    cartList: data.cartList
                });
            });
    };

    onLogoutClick = event => {
        if (event) event.preventDefault();
        this.resetState();

        Client.logout();
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
        const inCart = this.state.cartList.findIndex(item => item._id === newItem._id);

        if (inCart === -1) {
            const cartList = this.state.cartList.concat([newItem]);
            this.setState({ cartList });
            this.decrementQInventory(newItem._id);

            Client.addItem(newItem);
            Client.decrementInventory(newItem._id);
        }
    };

    onPlusClick = id => {
        this.incrementQCart(id);
        this.decrementQInventory(id);

        Client.incrementCart(id);
        Client.decrementInventory(id);
    };

    onMinusClick = id => {
        this.decrementQCart(id);
        this.incrementQInventory(id);

        Client.decrementCart(id);
        Client.incrementInventory(id);
    };

    onDeleteClick = (id, amount) => {
        const cartList = this.state.cartList.filter(item => item._id !== id);
        this.setState({ cartList });
        this.restoreQInventory(id, amount);

        Client.deleteItem(id);
        Client.restoreInventory(id, amount);
    };

    onCheckoutClick = () => {
        if (this.state.cartList.length > 0) {
            this.setState({ checkedOut: true, cartList: [] });
            window.setTimeout(() => {
                this.onLogoutClick();
                this.resetState();

                Client.logout();
            }, 2000);
        }
    };

    restoreQInventory = (id, amount) => {
        const product = this.state.productList.find(product => product._id === id);
        const productIndex = this.state.productList.findIndex(product => product._id === id);

        this.setState({
            productList: [
                ...this.state.productList.slice(0, productIndex),
                { ...product, qInventory: product.qInventory + amount},
                ...this.state.productList.slice(productIndex + 1)
            ]
        });
    };

    incrementQCart = id => {
        const item = this.state.cartList.find(item => item._id === id);
        const itemIndex = this.state.cartList.findIndex(item => item._id === id);
        const product = this.state.productList.find(product => product._id === id);

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
            productList: [],
            showCart: false
        });
    };

    decrementQCart = id => {
        const item = this.state.cartList.find(item => item._id === id);
        const itemIndex = this.state.cartList.findIndex(item => item._id === id);
        const product = this.state.productList.find(product => product._id === id);

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
        const product = this.state.productList.find(product => product._id === id);
        const productIndex = this.state.productList.findIndex(product => product._id === id);

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
        const product = this.state.productList.find(product => product._id === id);
        const productIndex = this.state.productList.findIndex(product => product._id === id);

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
        )
    }
}

export default StateContext;
