// This Babel configuration file is only used by Jest and Storybook.
//
// Storybook expects that a Babel configuration is provided (https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#babel-mode-v7),
// so we need to add '@babel/preset-typescript' and '@babel/preset-react' on top.

module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  compact: true,
};
