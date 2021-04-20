const path = require("path");
const webpack = require("webpack");

const ErrorOverlayPlugin = require("@webhotelier/webpack-fast-refresh/error-overlay");
const ReactRefreshPlugin = require("@webhotelier/webpack-fast-refresh");

module.exports = {
  mode: "development",
  entry: ["./src/index.tsx"],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new ReactRefreshPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      react: require.resolve("react"),
    },
  },
  output: {
    globalObject: "this",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve("esbuild-loader"),
            options: {
              loader: "tsx",
              target: "chrome85",
            },
          },
          {
            loader: require.resolve(
              "@webhotelier/webpack-fast-refresh/loader.js"
            ),
          },
        ],
      },
    ],
  },
};
