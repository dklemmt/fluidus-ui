/* @link https://utopia.fyi/space/calculator?c=320,16,1.2,1240,18,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l|xl-3xl&g=s,l,xl,12 */

module.exports = {
  size: {
    space: {
      xxxsmall: { value: "clamp(0.25rem, 0.2283rem + 0.1087vi, 0.3125rem)" },
      xxsmall: { value: "clamp(0.5rem, 0.4783rem + 0.1087vi, 0.5625rem)" },
      xsmall: { value: "clamp(0.75rem, 0.7065rem + 0.2174vi, 0.875rem)" },
      small: { value: "clamp(1rem, 0.9565rem + 0.2174vi, 1.125rem)" },
      medium: { value: "clamp(1.5rem, 1.4348rem + 0.3261vi, 1.6875rem)" },
      large: { value: "clamp(2rem, 1.913rem + 0.4348vi, 2.25rem)" },
      xlarge: { value: "clamp(3rem, 2.8696rem + 0.6522vi, 3.375rem)" },
      xxlarge: { value: "clamp(4rem, 3.8261rem + 0.8696vi, 4.5rem)" },
      xxxlarge: { value: "clamp(6rem, 5.7391rem + 1.3043vi, 6.75rem)" },
      // Space value pair - single steps
      "xxxsmall-xxsmall": {
        value: "clamp(0.25rem, 0.1413rem + 0.5435vi, 0.5625rem)",
      },
      "xxsmall-xsmall": {
        value: "clamp(0.5rem, 0.3696rem + 0.6522vi, 0.875rem)",
      },
      "xsmall-small": {
        value: "clamp(0.75rem, 0.6196rem + 0.6522vi, 1.125rem)",
      },
      "small-medium": {
        value: "clamp(1rem, 0.7609rem + 1.1957vi, 1.6875rem)",
      },
      "medium-large": {
        value: "clamp(1.5rem, 1.2391rem + 1.3043vi, 2.25rem)",
      },
      "large-xlarge": {
        value: "clamp(2rem, 1.5217rem + 2.3913vi, 3.375rem)",
      },
      "xlarge-xxlarge": {
        value: "clamp(3rem, 2.4783rem + 2.6087vi, 4.5rem)",
      },
      "xxlarge-xxxlarge": {
        value: "clamp(4rem, 3.0435rem + 4.7826vi, 6.75rem)",
      },
      // Space value pair - custom steps
      "small-large": {
        value: "clamp(1rem, 0.5652rem + 2.1739vi, 2.25rem)",
      },
      "xlarge-xxxlarge": {
        value: "clamp(3rem, 1.6957rem + 6.5217vi, 6.75rem)",
      },
    },
  },
};
