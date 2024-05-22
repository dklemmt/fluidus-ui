import { addons } from "@storybook/manager-api";
import { fluidusUiTheme } from "./fluidusUiTheme";

addons.setConfig({
  // navSize: 300,
  // bottomPanelHeight: 300,
  // rightPanelWidth: 300,
  // panelPosition: 'bottom',
  // enableShortcuts: true,
  // showToolbar: true,
  theme: fluidusUiTheme,
  // selectedPanel: undefined,
  // initialActive: 'sidebar',
  sidebar: {
    // showRoots: false,
    collapsedRoots: ["other"],
  },
  // toolbar: {
  //   title: { hidden: false },
  //   zoom: { hidden: false },
  //   eject: { hidden: false },
  //   copy: { hidden: false },
  //   fullscreen: { hidden: false },
  // },
});
