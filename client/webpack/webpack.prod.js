const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Polsky Jet Production App"),
      "process.env.api": JSON.stringify("https://polsky-jet.herokuapp.com"),
      "process.env.OPEN_WEATHER_API_KEY:": JSON.stringify(
        "9846a286c520f631c0095b92d0ac8d0e",
      ),
    }),
  ],
};
