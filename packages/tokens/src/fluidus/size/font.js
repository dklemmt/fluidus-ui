/* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1240,18,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l|xl-3xl&g=s,l,xl,12 */

module.exports = {
  size: {
    font: {
      body: {
        xsmall: {
          fontSize: {
            value: "clamp(0.6944rem, 0.6856rem + 0.0444vi, 0.72rem)",
          },
          lineHeight: { value: "1.3" },
        },
        small: {
          fontSize: { value: "clamp(0.8333rem, 0.8101rem + 0.1159vi, 0.9rem)" },
          lineHeight: { value: "1.3" },
        },
        medium: {
          fontSize: { value: "clamp(1rem, 0.9565rem + 0.2174vi, 1.125rem)" },
          // lineHeight: { value: "1.3" },
        },
        large: {
          fontSize: { value: "clamp(1.2rem, 1.1283rem + 0.3587vi, 1.4063rem)" },
          lineHeight: { value: "1.4" },
        },
      },
      heading: {
        xsmall: {
          fontSize: { value: "clamp(1.2rem, 1.1283rem + 0.3587vi, 1.4063rem)" },
          lineHeight: { value: "1.4" },
        },
        small: {
          fontSize: {
            value: "clamp(1.44rem, 1.3295rem + 0.5527vi, 1.7578rem)",
          },
          lineHeight: { value: "1.4" },
        },
        medium: {
          fontSize: {
            value: "clamp(1.728rem, 1.5648rem + 0.8161vi, 2.1973rem)",
          },
          letterSpacing: { value: "-.0125em" },
          lineHeight: { value: "1.3" },
        },
        large: {
          fontSize: {
            value: "clamp(2.0736rem, 1.8395rem + 1.1704vi, 2.7466rem)",
          },
          letterSpacing: { value: "-.0125em" },
          lineHeight: { value: "1.15" },
        },
        xlarge: {
          fontSize: {
            value: "clamp(2.4883rem, 2.1597rem + 1.6433vi, 3.4332rem)",
          },
          letterSpacing: { value: "-.0125em" },
          lineHeight: { value: "1.15" },
        },
      },
    },
  },
};
