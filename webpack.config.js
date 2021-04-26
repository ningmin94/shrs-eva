const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        mode: 'development',
        entry: {
            index: './src/index.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            }),
        ],
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
        },
        output: {
            filename: '[name].[contenthash].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                }
            ]
        },
        resolve: {
            // https://github.com/babel/babel/issues/8462
            // https://blog.csdn.net/qq_39807732/article/details/110089893
            // 如果确认需要node polyfill，设置resolve.fallback安装对应的依赖
            fallback: {
            //   crypto: require.resolve('crypto-browserify'),
              path: require.resolve('path-browserify'),
            //   url: require.resolve('url'),
            //   buffer: require.resolve('buffer/'),
            //   util: require.resolve('util/'),
            //   stream: require.resolve('stream-browserify/'),
            //   vm: require.resolve('vm-browserify')
            },
            // 如果确认不需要node polyfill，设置resolve.alias设置为false
            // alias: {
            //   crypto: false
            // }
          }
    }
};