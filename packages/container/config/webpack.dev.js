const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");


const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "index.html",
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js"
            },
            // shared: ["react", "react-dom"]
            shared: packageJson.dependencies,
        }),

    ]
}

module.exports = merge(commonConfig, devConfig)


// https://dnschecker.org/credit-card-generator.php

// Visa Validate
// 4127 7671 7927 7128
// CVV / CVV2 770 Good thru 8 / 2023
// Alexis Edwards

//     - uses: shinyinc / action - aws - cli@v1.2
//         - run: aws s3 sync dist s3://${{ secrets.AWS_S3_BUCKET_NAME }}/container/latest
// env:
// AWS_ACCESS_KEY_ID: ${ { secrets.AWS_ACCESS_KEY_ID } }
// AWS_SECRET_ACCESS_KEY: ${ { secrets.AWS_SECRET_ACCESS_KEY } }
// AWS_DEFAULT_REGION: ""