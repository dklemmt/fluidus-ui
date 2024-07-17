module.exports = {
  base: {
    font: {
      family: {
        regular: {
          value:
            "'Lato', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif",
        },
        heading: { value: "{base.font.family.regular.value}" },
        monospace: {
          value: "'Consolas', 'Liberation Mono', 'Courier', monospace",
        },
        base: { value: "{base.font.family.regular.value}" },
      },
    },
    lineHeight: { value: "1.5" },
    color: { value: "{color.grey.900}" },
  },
};
