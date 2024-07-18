module.exports = {
  root: true, // don't use monorepos configuration
  env: {
    browser: true,
    es2021: true, // includes setting of 'parserOptions.ecmaVersion' to 12
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["react", "import", "jest"],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off", // see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    "react/jsx-props-no-spreading": "off", // see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    "react/style-prop-object": [
      "error",
      {
        allow: ["FormattedNumber"], // allow 'style' property for react-intl component as it isn't CSS 'styles' property
      },
    ],
  },
  overrides: [
    {
      // typescript settings
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended-type-checked",
        // "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        // project: true,
        project: ["./tsconfig.eslint.json", "./tsconfig.json"],
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ["@typescript-eslint", "react", "react-hooks", "import"],
      rules: {
        "import/no-unresolved": "error",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "react/function-component-definition": "off", // see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
        "react/jsx-props-no-spreading": "off", // see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
        "react/require-default-props": "off", // Typescript will set undefined for the default value (see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md)
      },
      settings: {
        // see https://github.com/import-js/eslint-import-resolver-typescript#configuration
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: { alwaysTryTypes: true }, // this loads <rootdir>/tsconfig.json to eslint
        },
      },
    },
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["./**/*.stories.ts"],
    },
    {
      // turn off nasty warnings/errors for non app files
      files: [
        "**/*.stories.{js,jsx,ts,tsx}",
        "**/*.config.{js,jsx,ts,tsx}",
        "**/*.test.{js,jsx,ts,tsx}",
      ],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "no-console": "off",
      },
    },
  ],
};
