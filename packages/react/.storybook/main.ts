import path, { dirname, join } from "path";
import { StorybookConfig } from "@storybook/react-webpack5";
import type { Options } from "@swc/core";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const nodeModulesPath = path.resolve(__dirname, "../../../node_modules");

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  framework: getAbsolutePath("@storybook/react-webpack5"),
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-interactions"),
    // getAbsolutePath("@storybook/addon-designs"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    "@chromatic-com/storybook",
  ],
  staticDirs: ["./assets"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  swc: (config: Options) => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic", // https://storybook.js.org/docs/configure/compilers#the-swc-compiler-doesnt-work-with-react
        },
      },
    },
  }),
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // resolve TS aliases
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }

    // Make whatever fine-grained changes you need
    if (config.module?.rules) {
      config.module.rules.push({
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
        include: path.resolve(__dirname, "../"),
      });
    }

    // Return the altered config
    return config;
  },
  docs: {},
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
