module.exports = {
  color: {
    "block-quote": {
      background: { value: "{color.orange.100.value}" },
      quote: { value: "{color.orange.900.value}" },
      source: { value: "{color.red.900.value}" },
    },
  },
  font: {
    "block-quote": {
      family: {
        quote: { value: "Georgia" },
        source: { value: "{font.block-quote.family.quote}" },
      },
    },
  },
  size: {
    "block-quote": {
      padding: { value: "{size.space.small} {size.space.large}" },
      radius: { value: "{size.radius.large}" },
      width: { value: "80%" },
    },
  },
};
