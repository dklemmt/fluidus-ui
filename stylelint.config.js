module.exports = {
  customSyntax: "postcss-scss",
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-property-sort-order-smacss",
  ],
  rules: {
    "selector-class-pattern": null, // if BEM is used, it is necessary to turn it off (https://github.com/stylelint/stylelint/issues/5738)
  },
  ignoreFiles: ["packages/react/dist/**", "packages/tokens/dist/**"],
};
