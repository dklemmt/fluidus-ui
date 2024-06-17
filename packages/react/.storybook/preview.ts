import type { Preview } from "@storybook/react";
// import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { fluidusUiTheme } from "./fluidusUiTheme";
import { withColorScheme } from "./utils";

import "!style-loader!css-loader!sass-loader!./index.scss";

// const customViewports = {
//   small: {
//     name: "Fluidus - small",
//     styles: {
//       width: "320px",
//       height: "1080px",
//     },
//   },
// };

export const globalTypes = {
  scheme: {
    name: "scheme",
    description: "Select light or dark theme",
    defaultValue: "off",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "off", icon: "", title: "Select theme" },
        { value: "light", icon: "sun", title: "Light (Default)" },
        { value: "dark", icon: "moon", title: "Dark" },
        // { value: 'side-by-side', icon: 'stacked', title: 'Side by side' },
        { value: "stacked", icon: "stacked", title: "Stacked" },
      ],
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  decorators: [(Story, context) => withColorScheme(Story, context)],
  argTypes: {
    // className: { description: "test" },
  },
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      sort: "requiredFirst",
    },
    docs: { theme: fluidusUiTheme, toc: true },
    options: {
      storySort: {
        method: "alphabetical",
        // includeNames: true,
        order: [
          "Introduction",
          "Getting Started",
          "typography",
          "layout",
          "forms",
          "Components",
          "*",
          "examples",
        ],
      },
    },
    // viewport: {
    //   viewports: { ...MINIMAL_VIEWPORTS, ...customViewports },
    // },
  },
};

export default preview;
