export const withColorScheme = (Story, context) => {
  const { backgrounds, scheme } = context.globals;
  const Flex = (props) => {
    return (
      <div
        {...props}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          background: "var(--fluidus-color-white)",
          color: "var(--fluidus-color-black)",
        }}
      />
    );
  };

  if (scheme === "off") {
    return <Story />;
  }

  if (scheme === "light") {
    return (
      <Flex>
        <div>
          <Story />
        </div>
      </Flex>
    );
  }

  if (scheme === "dark") {
    return (
      <Flex className="fluidus-dark">
        <div>
          <Story />
        </div>
      </Flex>
    );
  }

  return (
    <div>
      <Flex>
        <div>
          <Story />
        </div>
      </Flex>
      <Flex className="fluidus-dark">
        <div>
          <Story />
        </div>
      </Flex>
    </div>
  );
};
