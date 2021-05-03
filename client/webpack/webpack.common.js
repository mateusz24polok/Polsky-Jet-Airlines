const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@appTypes": path.resolve(__dirname, "./../src/types"),
      "@components": path.resolve(__dirname, "./../src/components"),
      "@containers": path.resolve(__dirname, "./../src/containers"),
      "@data": path.resolve(__dirname, "./../res/data"),
      "@images": path.resolve(__dirname, "./../res/images"),
      "@layouts": path.resolve(__dirname, "./../src/layouts"),
      "@pages": path.resolve(__dirname, "./../src/pages"),
      "@resources": path.resolve(__dirname, "./../res"),
      "@services": path.resolve(__dirname, "./../src/services"),
      "@store": path.resolve(__dirname, "./../src/store"),
      "@utils": path.resolve(__dirname, "./../src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
  stats: "errors-only",
};
