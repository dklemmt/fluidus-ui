const fs = require("fs-extra");
const path = require("path");
const harmonyPalette = require("@evilmartians/harmony/base");

/**
 * build color tokens from Harmony color palette
 */
const buildPalette = () => {
  let colorFile = "module.exports = {\n  colorHarmony: {\n";

  Object.entries(harmonyPalette).forEach(([color, palette]) => {
    colorFile += `    ${color}: {\n`;

    Object.entries(palette).forEach(([colorRange, colorValue]) => {
      colorFile += `      ${colorRange}: { value: "${colorValue}" },\n`;
    });

    colorFile += `    },\n`;
  });

  colorFile += "  },\n};";

  const distDir = path.resolve(__dirname, "../src");
  fs.outputFileSync(`${distDir}/fluidus/color/harmony.js`, colorFile);
};

buildPalette();
