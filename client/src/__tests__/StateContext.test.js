import React from 'react';
import { MemoryRouter } from 'react-router';
import TestRenderer from 'react-test-renderer';

import StateContext from '../js/StateContext';

describe("'StateContext' Component Tests", () => {
    let stateContextInstance; // eslint-disable-line
    const memoryRouterInstance = TestRenderer.create(<MemoryRouter><StateContext /></MemoryRouter>).root;
    stateContextInstance = memoryRouterInstance.findByType(StateContext).instance;

    test("'onLoginClick': sets 'loggedIn' to true", () => {
        stateContextInstance.onLoginClick();
        expect(stateContextInstance.state.loggedIn).toBe(true);
    });

    test("'onCartClick': sets 'showCart' to true", () => {
        const event = { preventDefault: () => {} };
        
        stateContextInstance.onCartClick(event);
        expect(stateContextInstance.state.showCart).toBe(true);
    });

    test("'onOvelayClick': sets 'showCart' to false", () => {
        stateContextInstance.onOverlayClick();
        expect(stateContextInstance.state.showCart).toBe(false);
    });

    test("'onAddClick': add an item to the cart", () => {
        const event = { preventDefault: () => {} };
        const newItem = { id: 1, qCart: 1 };
        stateContextInstance.onAddClick(event, newItem);

        const result = stateContextInstance.state.cartList.findIndex(item => item.id === newItem.id);
        expect(result).not.toBe(-1);
    });

    test("'incrementQCart': increase 'qCart' by 1", () => {
        const id = 1;
        stateContextInstance.incrementQCart(id);

        const item = stateContextInstance.state.cartList[0];
        expect(item.qCart).toEqual(2);
    });

    test("'decrementQInventory': decrease 'qInventory' by 1", () => {
        const id = 1;
        stateContextInstance.decrementQInventory(id);

        const product = stateContextInstance.state.productList[0];
        expect(product.qInventory).toEqual(98);
    });

    test("'decrementQCart': decrease 'qCart' by 1", () => {
        const id = 1;
        stateContextInstance.decrementQCart(id);

        const item = stateContextInstance.state.cartList[0];
        expect(item.qCart).toEqual(1);
    });

    test("'incrementQInventory': increase 'qInventory' by 1", () => {
        const id = 1;
        stateContextInstance.incrementQInventory(id);

        const product = stateContextInstance.state.productList[0];
        expect(product.qInventory).toEqual(99);
    });

    test("'restoreQInventory': recalibrates 'qInventory'", () => {
        const id = 1;
        const qCart = 1;
        stateContextInstance.restoreQInventory(id, qCart);

        const product = stateContextInstance.state.productList.find(product => product.id === id);
        expect(product.qInventory).toEqual(100);
    });

    test("'onDeleteClick': deletes an item from the cart", () => {
        const id = 1;
        stateContextInstance.onDeleteClick(id);

        expect(stateContextInstance.state.cartList.length).toEqual(0);
    });

    test("'onLogoutClick': sets 'loggedIn' to false", () => {
        const event = { preventDefault: () => {} };

        stateContextInstance.onLogoutClick(event);
        expect(stateContextInstance.state.loggedIn).toBe(false);
    });

    test("'onCheckoutClick': sets 'checkoutOut' to true", () => {
        stateContextInstance.onCheckoutClick();
        expect(stateContextInstance.state.loggedIn).toBe(false);
    });
});