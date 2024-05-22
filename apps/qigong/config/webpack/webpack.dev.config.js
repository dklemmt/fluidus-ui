const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.config");

const nodeModulesPath = path.resolve(__dirname, "../../../../node_modules");

const devConfig = {
  mode: "development",
  cache: false,
  // cache: {
  //    type: "filesystem",
  //    buildDependencies: {
  //    config: [__filename],
  // },
  // },
  stats: {
    errorDetails: true,
  },
  devtool: "eval-source-map", // 'eval-source-map' recommended for dev (see https://webpack.js.org/configuration/devtool/)
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    static: [
      {
        watch: true,
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [nodeModulesPath],
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(commonConfig, devConfig);
