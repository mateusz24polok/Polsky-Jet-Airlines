const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Polsky Jet Production App"),
      "process.env.api": JSON.stringify("https://polsky-jet.herokuapp.com"),
    }),
    new Dotenv({
      path: "./.env",
    }),
  ],
};
