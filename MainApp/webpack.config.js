const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(process.cwd(), "./src/Index.html"),
    filename: "./index.html"
});
module.exports = {
    devtool:'source-map',
    entry: path.join(process.cwd(), "./src/index.js"),
    output:{
        path:path.join(process.cwd(),'dist'),
        filename:"mainApp.bundle.js",
        chunkFilename:'[name].bundle.js'
    },
    optimization :{
        splitChunks:{
            chunks:'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin,
         
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3002
    }
};