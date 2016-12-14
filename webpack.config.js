//Webpack.config.js: Webpack configuration
var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        "app": ["./src/index.js"],
        "vendor": [
            "vue",
            "vue-router",
            "jquery",
            "js-data",
            "js-data-http",
            "bootstrap-cosmo",
            "bootstrap",
            "lodash",
            "simplemde-css",
            "marked"
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
        //Vendor chunk
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
        //Global variables
        new webpack.ProvidePlugin({"$": "jquery", "jQuery": "jquery"}),
        //External modules
        new webpack.ExternalsPlugin("commonjs", [
            "fs"
        ])
    ],
    resolve: {
        alias: {
            "academia": path.resolve(__dirname, "./src"),
            "bootstrap-cosmo": path.resolve(__dirname, "./vendor/bootstrap/css/bootstrap.min.css"),
            "simplemde-css": path.resolve(__dirname, "./vendor/simplemde.min.css"),
            "js-data-http": path.resolve(__dirname, "./vendor/js-data-http.js")
        }
    },
    target: "electron-renderer"
};

//Release
if (process.env.NODE_ENV=="production")
{   //Plugins
    module.exports.plugins = (module.exports.plugins||[]).concat([
        //Production mode
        new webpack.DefinePlugin({
            "process.env": {NODE_ENV: "\"production\""}
        })
    ]);
}
//Test
else if (process.env.NODE_ENV=="test")
{   //Source map
    module.exports.devtool = "source-map";
    //Test bundle
    module.exports.entry["test"] = ["./src/tests/entry.js"];
    //Plugins
    module.exports.plugins = (module.exports.plugins||[]).concat([
        //External modules
        new webpack.ExternalsPlugin("commonjs", [
            "assert"
        ])
    ]);
}
//Debug
else
{   //Source map
    module.exports.devtool = "source-map";
}
