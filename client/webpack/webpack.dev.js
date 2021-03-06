const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Polsky Jet Development App"),
      "process.env.api": JSON.stringify("http://localhost:5000"),
    }),
    new ReactRefreshWebpackPlugin(),
    new Dotenv({
      path: "./.env",
    }),
  ],
};
