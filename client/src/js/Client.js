const Client = () => {
    const status = () => {
        return fetch('/status');
    };

    const login = () => {
        return fetch('/login', { method: 'POST', credentials: 'same-origin' });
    };

    return {
        login,
        status
    };
};

export default Client();
