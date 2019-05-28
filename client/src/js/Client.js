const Client = () => {
    const status = () => {
        return fetch('/status', { credentials: 'same-origin' });
    };

    const login = () => {
        return fetch('/login', { method: 'POST', credentials: 'same-origin' });
    };

    const logout = () => {
        return fetch('/logout', { credentials: 'same-origin' });
    };

    const sessionState = () => {
        return fetch('/session_state', { credentials: 'same-origin' });
    };

    const addItem = item => {
        return fetch('/add_item', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
                body: JSON.stringify(item)
            });
    };

    const decrementInventory = id => {
        return fetch(`/decrement_inventory/${id}`, { method: 'UPDATE', credentials: 'same-origin' });
    };

    const incrementCart = id => {
        return fetch(`/increment_cart/${id}`, { method: 'UPDATE' , credentials: 'same-origin' });
    };

    const incrementInventory = id => {
        return fetch(`/increment_inventory/${id}`, { method: 'UPDATE', credentials: 'same-origin' });
    };

    const decrementCart = id => {
        return fetch(`/decrement_cart/${id}`, { method: 'UPDATE', credentials: 'same-origin' });
    };

    const deleteItem = id => {
        return fetch(`/delete_item/${id}`, { method: 'DELETE', credentials: 'same-origin' });
    };

    const restoreInventory = (id, q) => {
        return fetch(`/restore_inventory/${id}/${q}`, { method: 'UPDATE', credentials: 'same-origin' });
    };

    return {
        addItem,
        decrementCart,
        decrementInventory,
        deleteItem,
        incrementCart,
        incrementInventory,
        login,
        logout,
        restoreInventory,
        sessionState,
        status
    };
};

export default Client();
