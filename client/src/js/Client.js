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

    const getProducts = () => {
        return fetch('/get_products', { credentials: 'same-origin' });
    };

    return {
        getProducts,
        login,
        logout,
        status
    };
};

export default Client();
