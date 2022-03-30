module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config) {
        console.log(config)
        return config;
    },
    // The paths config to use when compiling your react app for development or production.
    paths: function(paths) {
        // ...add your paths config
        return paths;
    },
}