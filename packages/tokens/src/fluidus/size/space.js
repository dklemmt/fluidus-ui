/* @link https://utopia.fyi/space/calculator?c=320,18,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

module.exports = {
  size: {
    space: {
      xxxsmall: { value: "clamp(0.3125rem, 0.3125rem + 0vw, 0.3125rem)" },
      xxsmall: { value: "clamp(0.5625rem, 0.5408rem + 0.1087vw, 0.625rem)" },
      xsmall: { value: "clamp(0.875rem, 0.8533rem + 0.1087vw, 0.9375rem)" },
      small: { value: "clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)" },
      medium: { value: "clamp(1.6875rem, 1.6223rem + 0.3261vw, 1.875rem)" },
      large: { value: "clamp(2.25rem, 2.163rem + 0.4348vw, 2.5rem)" },
      xlarge: { value: "clamp(3.375rem, 3.2446rem + 0.6522vw, 3.75rem)" },
      xxlarge: { value: "clamp(4.5rem, 4.3261rem + 0.8696vw, 5rem)" },
      xxxlarge: { value: "clamp(6.75rem, 6.4891rem + 1.3043vw, 7.5rem)" },
      // one-up pairs
      "xxxsmall-xxsmall": {
        value: "clamp(0.3125rem, 0.2038rem + 0.5435vi, 0.625rem)",
      },
      "xxsmall-xsmall": {
        value: "clamp(0.5625rem, 0.4321rem + 0.6522vi, 0.9375rem)",
      },
      "xsmall-small": {
        value: "clamp(0.875rem, 0.7446rem + 0.6522vi, 1.25rem)",
      },
      "small-medium": {
        value: "clamp(1.125rem, 0.8641rem + 1.3043vi, 1.875rem)",
      },
      "medium-large": {
        value: "clamp(1.6875rem, 1.4049rem + 1.413vi, 2.5rem)",
      },
      "large-xlarge": {
        value: "clamp(2.25rem, 1.7283rem + 2.6087vi, 3.75rem)",
      },
      "xlarge-xxlarge": {
        value: "clamp(3.375rem, 2.8098rem + 2.8261vi, 5rem)",
      },
      "xxlarge-xxxlarge": {
        value: "clamp(4.5rem, 3.4565rem + 5.2174vi, 7.5rem)",
      },
      "xlarge-xxxlarge": {
        value: "clamp(3.375rem, 1.9402rem + 7.1739vi, 7.5rem)",
      },
      "small-large": {
        value: "clamp(1.125rem, 0.6467rem + 2.3913vi, 2.5rem)",
      },
    },
  },
};
