import React, { Component } from 'react';

import Helpers from './Helpers';

import App from './components/App';

export const Context = React.createContext();

import Seed from './Seed';

class StateContext extends Component {
    state = {
        cartList: [],
        control: {
            checkedOut: false,
            loggedIn: false,
            showCart: false
        },
        meta: {
            rate: 0.0757,
            shipping: 10.99
        },
        productList: Seed.productList
    };

    onLoginClick = () => {
        this.setState(state => ({
            control: {
                ...state.control,
                loggedIn: true
            }
        }));
    };

    onLogoutClick = event => {
        event.preventDefault();
        this.setState(state => ({
            control: {
                ...state.control,
                loggedIn: false
            }
        }));
    };

    onCartClick = event => {
        event.preventDefault()
        this.setState(state => ({
            control: {
                ...state.control,
                showCart: true
            }
        }));
    };

    onOverlayClick = () => {
        this.setState(state => ({
            control: {
                ...state.control,
                showCart: false
            }
        }));
    };

    onAddClick = (event, id) => {
        event.preventDefault();
        const product = this.state.productList.find(product => product.id === id);
        const inCart = this.state.cartList.findIndex(item => item.id === id);

        if (inCart === -1) {
            this.setState(state => ({
                cartList: [
                    ...state.cartList,
                    {
                        description: product.description,
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        qCart: product.qCart
                    }
                ]
            }));
        }
    };

    onDeleteClick = id => {
        const cartList = this.state.cartList.filter(item => item.id !== id);
        this.setState({ cartList });
    };

    onPlusClick = id => {
        const [ product, pIndex ] = Helpers.objectAndIndex(this.state.productList, id);
        const [ item, iIndex ] = Helpers.objectAndIndex(this.state.cartList, id);

        if (item.qCart < 100) {
            product.qCart++;
            product.qInventory--;
            item.qCart++;

            this.setState(state => ({
                cartList: [
                    ...state.cartList.slice(0, iIndex),
                    item,
                    ...state.cartList.slice(iIndex + 1)
                ],
                productList: [
                    ...state.productList.slice(0, pIndex),
                    product,
                    ...state.productList.slice(pIndex + 1)
                ]
            }));
        }
    };

    onMinusClick = id => {
        const [ product, pIndex ] = Helpers.objectAndIndex(this.state.productList, id);
        const [ item, iIndex ] = Helpers.objectAndIndex(this.state.cartList, id);

        if (item.qCart > 0) {
            product.qCart--;
            product.qInventory++;
            item.qCart--;

            this.setState(state => ({
                cartList: [
                    ...state.cartList.slice(0, iIndex),
                    item,
                    ...state.cartList.slice(iIndex + 1)
                ],
                productList: [
                    ...state.productList.slice(0, pIndex),
                    product,
                    ...state.productList.slice(pIndex + 1)
                ]
            }));
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                <App
                    onAddClick={this.onAddClick}
                    onCartClick={this.onCartClick}
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
