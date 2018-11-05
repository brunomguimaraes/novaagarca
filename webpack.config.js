const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const DEV_MODE = process.env.NODE_ENV !== "production";

/**
 * @type webpack.Configuration
 */
const config = {
    entry: "./src/index",
    target: "web",
    mode: DEV_MODE ? "development" : "production",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.[hash].js",
        publicPath: "/",
        sourceMapFilename: "bundle.[hash].js.map",
    },
    devtool: DEV_MODE ? "cheap-eval-source-map" : "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".json"],
    },
    optimization: {
        minimize: !DEV_MODE,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    "babel-loader",
                    {
                        loader: "awesome-typescript-loader",
                        options: { transpileOnly: true },
                    },
                ],
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        query: {
                            modules: false,
                            importLoaders: 1,
                            localIdentName: "[local]",
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        query: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]__[local]___[hash:base64:5]",
                        },
                    },
                    {
                        loader: "sass-loader",
                        query: {
                            includePaths: ["./src"],
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        query: {
                            modules: false,
                        },
                    },
                    {
                        loader: "less-loader",
                        query: {
                            includePaths: ["./src"],
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: { mimetype: "application/font-woff" },
                    },
                ],
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9].[0-9].[0-9])?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: { name: "[name].[ext]" },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: { hash: "sha512", digest: "hex", name: "[hash].[ext]" },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "Rurali",
            filename: "index.html",
        }),
        new FaviconsWebpackPlugin({
            logo: "./src/assets/favicon/favicon.png",
            inject: true,
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
            "process.env.ENV": JSON.stringify(process.env.ENV || "development"),
        }),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: path.join(__dirname, "./tsconfig.json"),
        }),
    ],
    watchOptions: {
        poll: true,
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        publicPath: "/",
        historyApiFallback: true,
    },
};

module.exports = config;
