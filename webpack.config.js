const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NODE_ENV = process.env.NODE_ENV;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const setPath = function (folderName) {
    return path.join(__dirname, folderName);
}

const buildingForLocal = () => {
    return (NODE_ENV === 'development');
};

const extractHTML = new HtmlWebpackPlugin({
    title: 'History Search',
    inject: true,
    template: './src/index.html',
    minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
    },
    environment: process.env.NODE_ENV,
    isLocalBuild: buildingForLocal(),
    imgPath: (!buildingForLocal()) ? 'assets' : 'src/assets'
});

const config = {
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks: "all", //Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
        }
    },
    resolveLoader: {
        modules: [setPath('node_modules')]
    },
    mode: buildingForLocal() ? 'development' : 'production',
    devServer: {
        historyApiFallback: true,
        noInfo: false
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        extractHTML,
        new MiniCssExtractPlugin({
            filename: "css/styles.cumm.css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                isStaging: (NODE_ENV === 'development' || NODE_ENV === 'staging'),
                NODE_ENV: '"' + NODE_ENV + '"'
            }
        }),
        new CopyWebpackPlugin(
            [
                {
                    from: './src/icons',
                    to: 'assets/icons'
                },
                {
                    from: './src/images',
                    to: 'assets/images'
                }
            ]
        ),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // postcss: [require('postcss-cssnext')()],
                    // options: {
                    //     extractCSS: true
                    // },
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }

            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: "babel-loader",
                    options: {presets: ['es2015']}
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: !buildingForLocal() ?
                    [
                        MiniCssExtractPlugin.loader,
                        "css-loader", 'sass-loader'
                    ] :
                    [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|webp)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]',
                    useRelativePath: buildingForLocal()
                }
            }
        ]
    },
};

module.exports = config;