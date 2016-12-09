//Webpack.config.js: Webpack configuration
var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        "app": "./src/index.js",
        "vendor": [
            "vue",
            "vue-router",
            "jquery",
            "js-data",
            "js-data-http",
            "bootstrap-cosmo",
            "bootstrap",
            "lodash",
            "simplemde",
            "simplemde-css"
        ],
    },
    output: {
        path: path.resolve(__dirname, "./dist/webpack"),
        publicPath: "./dist/webpack/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    // vue-loader options go here
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]"
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
        new webpack.ProvidePlugin({"$": "jquery", "jQuery": "jquery"})
    ],
    resolve: {
        alias: {
            "academia": path.resolve(__dirname, "./src"),
            "bootstrap-cosmo": path.resolve(__dirname, "./vendor/bootstrap/css/bootstrap.min.css"),
            "simplemde-css": path.resolve(__dirname, "./vendor/simplemde.min.css")
        }
    },
    target: "electron-renderer",
    externals: [
        {
            "mocha": true
        }
    ]
};

//Release
if (process.env.NODE_ENV=="production")
{   module.exports.plugins = (module.exports.plugins||[]).concat([
        //Production mode
        new webpack.DefinePlugin({
            "process.env": {NODE_ENV: "\"production\""}
        })
    ]);
}
//Debug or test
else
{   //Source map
    module.exports.devtool = "source-map";
    //Test bundle
    module.exports.entry["test"] = "./src/tests/entry.js";
}
