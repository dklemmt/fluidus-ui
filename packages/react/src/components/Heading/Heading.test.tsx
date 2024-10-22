import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Heading, HeadingProps } from "./Heading";

describe("Heading component", () => {
  const defaultProps: HeadingProps = {
    children: "Test Heading",
  };

  it("renders Heading component with default props", () => {
    const { getByTestId } = render(<Heading {...defaultProps} />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h1");
    expect(headingElement).toHaveClass("fluidus-heading");
    expect(headingElement).toHaveClass("fluidus-heading--xlarge");
  });

  it("renders Heading component with custom className", () => {
    const { getByTestId } = render(
      <Heading {...defaultProps} className="custom-class" />,
    );
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass("fluidus-heading");
    expect(headingElement).toHaveClass("custom-class");
  });

  it("renders Heading component with size default (xlarge)", () => {
    const { getByTestId } = render(<Heading {...defaultProps} />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h1");
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).toHaveClass("fluidus-heading--xlarge");
  });

  it("renders Heading component with size (large)", () => {
    const { getByTestId } = render(<Heading {...defaultProps} size="large" />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h2");
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).toHaveClass("fluidus-heading--large");
  });

  it("renders Heading component with medium", () => {
    const { getByTestId } = render(<Heading {...defaultProps} size="medium" />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h3");
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).not.toHaveClass("fluidus-heading--medium");
  });

  it("renders Heading component with size small", () => {
    const { getByTestId } = render(<Heading {...defaultProps} size="small" />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h4");
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).toHaveClass("fluidus-heading--small");
  });

  it("renders Heading component with size xsmall", () => {
    const { getByTestId } = render(<Heading {...defaultProps} size="xsmall" />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h5");
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).toHaveClass("fluidus-heading--xsmall");
  });

  it("renders Heading component with children", () => {
    const { getByTestId } = render(<Heading>Test Heading</Heading>);
    const headingElement = getByTestId("heading");

    expect(headingElement).toHaveTextContent("Test Heading");
  });
});
