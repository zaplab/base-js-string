
import path from 'path';
import webpack from 'webpack';

export default {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'tests/spec'),
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel',
            },
        ],
    },

    resolve: {
        root: __dirname,
        alias: {
            'zap-base-js-string': 'src/index.js',
        },
        modulesDirectories: [
            'src',
            'node_modules',
        ],
    },

    resolveLoader: {
        root: __dirname,
        modulesDirectories: [
            'src',
            'node_modules',
        ],
    },
};
