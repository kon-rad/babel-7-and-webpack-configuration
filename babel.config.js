module.exports = function (api) {
    api.cache.using(() => process.env.NODE_ENV);
    console.log('api.cache.using(() => process.env.NODE_ENV)', api.cache.using(() => process.env.NODE_ENV));
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);

    const presets = [
        ['@babel/preset-env', {
            'useBuiltIns': 'usage',
            'corejs': 3,
            'debug': true
        }]
    ];
    const plugins = [['@babel/plugin-transform-runtime', { corejs: 3 }]];

    return {
        presets,
        plugins
    };
}