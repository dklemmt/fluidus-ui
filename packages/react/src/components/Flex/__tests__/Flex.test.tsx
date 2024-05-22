import { render } from "@testing-library/react";
import { Flex } from "../Flex";

describe("Flex component", () => {
  it("renders horizontal flex container without any props", () => {
    const { container } = render(<Flex />);
    const flexContainer = container.firstChild as HTMLDivElement;

    expect(flexContainer).toBeInTheDocument();
    expect(flexContainer).toHaveClass("fluidus-flex");
    expect(flexContainer).not.toHaveClass("fluidus-flex-align-normal");
    expect(flexContainer).not.toHaveClass("fluidus-flex-direction-vertical");
  });

  it("applies custom className", () => {
    const { container } = render(<Flex className="custom-class" />);
    const flexContainer = container.firstChild as HTMLDivElement;

    expect(flexContainer).toHaveClass("fluidus-flex");
    expect(flexContainer).toHaveClass("custom-class");
  });

  it("renders flex container with vertical direction", () => {
    const { container } = render(<Flex direction="vertical" />);
    const flexContainer = container.firstChild as HTMLDivElement;

    expect(flexContainer).toHaveClass("fluidus-flex-direction-vertical");
  });

  it("renders flex container with specified gap", () => {
    const { container } = render(<Flex gap="medium" />);
    const flexContainer = container.firstChild as HTMLDivElement;

    expect(flexContainer).toHaveClass("fluidus-flex-gap-medium");
  });

  it("renders flex container with specified justify content", () => {
    const { container } = render(<Flex justify="center" />);
    const flexContainer = container.firstChild as HTMLDivElement;

    expect(flexContainer).toHaveClass("fluidus-flex-justify-center");
  });

  it("renders flex container with specified align items", () => {
    const { container } = render(<Flex align="center" />);
    const flexContainer = container.firstChild as HTMLDivElement;

    expect(flexContainer).toHaveClass("fluidus-flex-align-center");
  });

  it("renders flex container with wrap", () => {
    const { container } = render(<Flex wrap="wrap" />);
    const flexContainer = container.firstChild as HTMLDivElement;

    expect(flexContainer).toHaveClass("fluidus-flex-wrap-wrap");
  });
});
