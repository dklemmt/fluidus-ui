const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // creates 'index.html'
const WebpackBar = require("webpackbar");

module.exports = {
  entry: "./src/index.tsx", // entry point for application
  output: {
    // build result will go into 'dist'
    filename: "js/[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "../../dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        use: ["ts-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext]",
        },
      },
    ],
  },
  resolve: {
    // Webpack should process these file extensions
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      // https://webpack.js.org/configuration/resolve/#resolvealias
      // any alias needs to be added in 'tsconfig.json' and 'jest.config.ts' as well (https://codeandsuch.github.io/webpack-aliases-typescript/)
      "@": path.resolve(__dirname, "../../src"),
      "@assets": path.resolve(__dirname, "../../src/assets"),
      "@components": path.resolve(__dirname, "../../src/components"),
      "@config": path.resolve(__dirname, "../../src/config"),
      "@features": path.resolve(__dirname, "../../src/features"),
      "@pages": path.resolve(__dirname, "../../src/pages"),
      "@scss": path.resolve(__dirname, "../../src/scss"),
      react: path.resolve(__dirname, "../../../../node_modules/react"),
      "react-dom": path.resolve(
        __dirname,
        "../../../../node_modules/react-dom",
      ),
    },
    symlinks: false,
  },
  stats: true,
  devtool: "inline-source-map",
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "templates/index.html"),
      title: "Fluidus UI React Boilerplate",
    }),
  ],
};
