# Fluidus UI Design Tokens

Component specific tokens are organised with the component's name as parent node. It is less flexible but is clearer
and better structured.

Example:

<Source code={`{
  spinner: {
    color: {
      primary: { value: "{color.orange.200.value}" },
      secondary: { value: "{color.orange.800.value}" },
    },
    size: {
      small: { value: "16px" },
      medium: { value: "32px" },
    },
  },
}`} dark />
