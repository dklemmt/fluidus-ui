// https://utopia.fyi/type/calculator?c=320,18,1.2,1240,20,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12
module.exports = {
  size: {
    font: {
      body: {
        xsmall: {
          "font-size": {
            value: "clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem)",
          },
          // "line-height": { value: "20px" },
        },
        small: {
          "font-size": {
            value: "clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem)",
          },
          // "line-height": { value: "24px" },
        },
        medium: {
          "font-size": {
            value: "clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)",
          },
          // "line-height": { value: "28px" },
        },
      },
      heading: {
        xsmall: {
          "font-size": {
            value: "clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem)",
          },
          // "line-height": { value: "28px" },
        },
        small: {
          "font-size": {
            value: "clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem)",
          },
          // "line-height": { value: "32px" },
        },
        medium: {
          "font-size": {
            value: "clamp(1.9438rem, 1.7707rem + 0.8652vw, 2.4413rem)",
          },
          // "line-height": { value: "36px" },
        },
        large: {
          "font-size": {
            value: "clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem)",
          },
          // "line-height": { value: "40px" },
        },
        xlarge: {
          "font-size": {
            value: "clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem)",
          },
          // "line-height": { value: "48px" },
        },
      },
    },
  },
};
