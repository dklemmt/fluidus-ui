module.exports = {
  color: {
    divider: {
      "text-color": { value: "{color.orange.600}" },
      line: {
        value:
          "linear-gradient(90deg, {color.orange.100} 0%, {color.orange.600} 50%, {color.orange.100} 100%)",
      },
      "line-left": {
        value:
          "linear-gradient(to right, {color.orange.100}, {color.orange.600})",
      },
      "line-right": {
        value:
          "linear-gradient(to left, {color.orange.100}, {color.orange.600})",
      },
    },
  },
  size: {
    divider: {
      gap: { value: "10px" },
      "line-radius": { value: "{size.radius.xsmall}" },
      "line-width": { value: "2px" },
      "max-width": { value: "80%" },
    },
  },
};
