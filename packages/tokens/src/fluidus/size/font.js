// https://utopia.fyi/type/calculator?c=320,18,1.2,1240,20,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12
module.exports = {
  size: {
    font: {
      body: {
        xsmall: {
          fontSize: { value: "clamp(0.7813rem, 0.7747rem + 0.0326vi, 0.8rem)" },
          // lineHeight: { value: "20px" },
        },
        small: {
          fontSize: { value: "clamp(0.9375rem, 0.9158rem + 0.1087vi, 1rem)" },
          lineHeight: { value: "1.3" },
        },
        medium: {
          fontSize: { value: "clamp(1.125rem, 1.0815rem + 0.2174vi, 1.25rem)" },
          // lineHeight: { value: "28px" },
        },
        large: {
          fontSize: {
            value: "clamp(1.35rem, 1.2761rem + 0.3696vi, 1.5625rem)",
          },
          // lineHeight: { value: "28px" },
        },
      },
      heading: {
        xsmall: {
          fontSize: {
            value: "clamp(1.35rem, 1.2761rem + 0.3696vi, 1.5625rem)",
          },
          // lineHeight: { value: "28px" },
        },
        small: {
          fontSize: {
            value: "clamp(1.62rem, 1.5041rem + 0.5793vi, 1.9531rem)",
          },
          // lineHeight: { value: "32px" },
        },
        medium: {
          fontSize: {
            value: "clamp(1.9438rem, 1.7707rem + 0.8652vi, 2.4413rem)",
          },
          // lineHeight: { value: "36px" },
        },
        large: {
          fontSize: {
            value: "clamp(2.3325rem, 2.0823rem + 1.2511vi, 3.0519rem)",
          },
          // lineHeight: { value: "40px" },
        },
        xlarge: {
          fontSize: {
            value: "clamp(2.7994rem, 2.4461rem + 1.7663vi, 3.815rem)",
          },
          // lineHeight: { value: "48px" },
        },
      },
    },
  },
};
