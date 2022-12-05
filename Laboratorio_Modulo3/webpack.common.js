const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");



module.exports = {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    entry:{ aplicacion: "./index.tsx"},

    output: {
        filename: "[name].[chunkhash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },

        
            
            {
                test:/\.(png|jpg|gif)$/,
                type: "asset/resource",
            },

            {
                test: /\.html$/,
                loader: "html-loader",
            },

        ],
    },
    plugins: [new HtmlWebpackPlugin({
        filename:"index.html",
        template: "./index.html",
        scriptLoading: "blocking",
        hash: true,
    }),],
    
};