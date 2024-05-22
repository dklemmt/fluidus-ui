import { create } from "@storybook/theming/create";

export const fluidusUiTheme = create({
  base: "light",

  // Base colors
  // colorPrimary: "#3A10E5",
  // colorSecondary: "#585C6D",

  // UI
  // appBg: "#ffffff",
  // appContentBg: "#ffffff",
  // appPreviewBg: "#ffffff",
  // appBorderColor: "#585C6D",
  // appBorderRadius: 4,

  // Typography
  // fontBase:
  //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontBase:
    "'Lato', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif", // var(--fluidus-base-font-family-regular)
  fontCode: "monospace",

  // Text colors
  textColor: "#212121",
  // textInverseColor: '#ffffff',
  // textMutedColor: '#ffffff',

  // Toolbar default and active colors
  // barTextColor: '#9E9E9E',
  // barSelectedColor: '#585C6D',
  // barHoverColor: '#585C6D',
  // barBg: '#ffffff',

  //
  // buttonBg: string;
  // buttonBorder: string;
  // booleanBg: string;
  // booleanSelectedBg: string;

  // Form colors
  // inputBg: '#ffffff',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2,

  // Brand assets
  // brandTitle: "Fluidus UI",
  brandTitle:
    '<svg viewbox="0 0 100 20"><defs><linearGradient id="gradient"><stop color="#2196f3"/></linearGradient><pattern id="wave" x="0" y="-.5" width="100%" height="100%" stroke="#2196f3" patternUnits="userSpaceOnUse"><path id="wavePath" d="M-40 9q10-2 20 0T0 9t20 0 20 0 20 0 20 0 20 0 20 0v11H-40z" mask="url(#mask)" fill="url(#gradient)"><animateTransform attributeName="transform" begin="0s" dur="3s" type="translate" from="0,0" to="40,0" repeatCount="indefinite"/></path></pattern></defs><text text-anchor="middle" x="45" y="15" font-size="20" fill="#2196f3" fill-opacity=".7">Fluidus UI</text><text text-anchor="middle" x="45" y="15" font-size="20" fill="url(#wave)" fill-opacity="1">Fluidus UI</text></svg>',
  brandUrl: "/index.html",
  // brandImage: brandImage,
  // brandTarget: '_self',

  // gridCellSize: number;
});
