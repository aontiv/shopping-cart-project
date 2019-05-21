module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV === 'development');

    const presets = ['@babel/env', '@babel/react', '@babel/flow'];
    const plugins = ['@babel/proposal-class-properties'];

    return {presets, plugins};
};
