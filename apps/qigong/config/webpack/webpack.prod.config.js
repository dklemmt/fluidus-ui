const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require("./webpack.common.config");

const prodConfig = {
  mode: "production",
  devtool: "source-map", // 'source-map' recommended for prod (see https://webpack.js.org/configuration/devtool/)
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
  ],
  performance: {
    hints: "warning", // enum
    assetFilter: (assetFilter) =>
      assetFilter.endsWith(".css") || assetFilter.endsWith("js"),
  },
  optimization: {
    sideEffects: true,
    splitChunks: {
      cacheGroups: {
        vendorHighcharts: {
          test: /[\\/]node_modules[\\/](highcharts|highcharts-react-official)[\\/]/,
          name: "vendor_highcharts",
          chunks: "all",
        },
      },
      chunks: "all",
    },
  },
};

const bundleAnalyzer = {
  plugins: [new BundleAnalyzerPlugin()],
};

module.exports = (env) =>
  merge(
    commonConfig,
    prodConfig,
    typeof env.analyzer !== "undefined" ? bundleAnalyzer : {},
  );
