const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
    mode: "development",
    output: {
        /**
         publicPath: "/" 
         problem is : our auth app url http://localhost:8082/auth/signin 
         now by default main.js loads at http://localhost:8082/auth/main.js
         which is not right cuz main.js should load at http://localhost:8082/main.js for this path 
         to work, hence solution is set a public path of "/".this only work for non MFE app.
         better solution is below for MFE
           * 
         */
        publicPath: "http://localhost:8082/"
    },
    devServer: {
        port: 8082,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: {
                "./AuthIndex": "./src/bootstrap"
            },
            // shared: ["react", "react-dom"]
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}

module.exports = merge(commonConfig, devConfig)