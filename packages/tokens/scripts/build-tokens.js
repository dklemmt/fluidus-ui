const StyleDictionaryPackage = require("style-dictionary");
const fs = require("fs");
const path = require("path");

// Custom Transform Groups
// -----------------------

// Size should not be transformed into rem. It should use the original values.
// size/rem will just replace given size with the same value as rem overwriting % e.g.
// original transformations: attribute/cti name/cti/kebab time/seconds content/icon size/rem color/css
StyleDictionaryPackage.registerTransformGroup({
  name: "fluidus-css",
  transforms: [
    // "elevation/css",
    "attribute/cti",
    "name/cti/kebab",
    "time/seconds",
    //  "color/hex8",
  ],
});
StyleDictionaryPackage.registerTransformGroup({
  name: "fluidus-scss",
  transforms: [
    // "elevation/css",
    "attribute/cti",
    "name/cti/kebab",
    "time/seconds",
    "color/hex8",
  ],
});
StyleDictionaryPackage.registerTransformGroup({
  name: "fluidus-js",
  transforms: [
    // "elevation/css",
    "attribute/cti",
    "name/cti/kebab",
    "time/seconds",
    "color/hex8",
  ],
});

const getCssSelector = (brand) => {
  let selector;

  switch (brand) {
    case "fluidus-dark":
      selector = ".fluidus-dark";
      break;
    case "fluidus-dense":
      selector = ".fluidus-dense";
      break;
    default:
      selector = ":root";
  }

  return selector;
};

const getStyleDictionaryConfig = (brand, tokens) => {
  const config = {
    source: [`src/${brand}/**/*.js`],
    platforms: {
      // CSS Variables
      css: {
        buildPath: "dist/",
        transformGroup: "fluidus-css",
        prefix: brand.split("-")[0],
        files: [
          // {
          //   destination: `${brand}/css/base.css`,
          //   format: "css/variables",
          //   filter: { attributes: { category: "base" } },
          //   options: {
          //     outputReferences: true,
          //     // selector: getCssSelector(tokens),
          //     showFileHeader: false,
          //   },
          // },
          {
            destination: `${brand}/css/${brand}.css`,
            format: "css/variables",
            filter: (token) => {
              // return (
              //   token.attributes.category === "color" &&
              //   !token.filePath.includes("components")
              // );
              return !token.filePath.includes("/components/");
            },
            options: {
              outputReferences: true,
              selector: getCssSelector(brand),
              showFileHeader: false,
            },
          },
        ],
      },
      scss: {
        buildPath: "dist/",
        transformGroup: "fluidus-scss",
        prefix: brand.split("-")[0],
        files: [
          {
            // Sass Variables and Map
            destination: `${brand}/scss/_${brand}.scss`,
            format: "scss/map-deep",
            options: {
              showFileHeader: false,
            },
          },
        ],
      },
      js: {
        transformGroup: "fluidus-js",
        buildPath: "dist/",
        prefix: brand.split("-")[0],
        files: [
          {
            // JS Variables
            destination: `${brand}/js/${brand}.js`,
            format: "javascript/module",
            options: {
              showFileHeader: false,
            },
          },
        ],
      },
    },
  };

  // lookup if there are any component specific tokens available ...
  const componentsPath = path.resolve(__dirname, `../src/${brand}/components`);
  if (fs.existsSync(componentsPath)) {
    fs.readdirSync(componentsPath).forEach((file) => {
      const component = path.parse(file).name;

      // ... and create an individual config for each
      config.platforms.css.files.push({
        destination: `${brand}/css/components/${component}.css`,
        format: "css/variables",
        filter: (token) => token.filePath.includes(`/components/${component}`), // only use tokens in the components directory
        options: {
          outputReferences: true,
          selector: ":scope",
          showFileHeader: false,
        },
      });
    });
  }

  return config;
};

const brands = path.resolve(__dirname, `../src`);
if (fs.existsSync(brands)) {
  fs.readdirSync(brands).forEach((brand) => {
    // eslint-disable-next-line array-callback-return
    ["css", "scss", "js"].map((platform) => {
      const StyleDictionary = StyleDictionaryPackage.extend(
        getStyleDictionaryConfig(brand),
      );
      StyleDictionary.buildPlatform(platform);
    });
  });
}
