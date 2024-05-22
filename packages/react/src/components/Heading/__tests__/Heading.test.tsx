import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Heading, HeadingProps } from "../Heading";
import { Paragraph } from "@components/Paragraph";

describe("Heading component", () => {
  const defaultProps: HeadingProps = {
    children: "Test Heading",
  };

  it("renders default (xlarge) heading (h1)", () => {
    const { getByTestId } = render(<Heading {...defaultProps} />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h1");
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).toHaveClass("fluidus-heading--xlarge");
  });

  it("renders large heading (h2)", () => {
    const { getByTestId } = render(<Heading {...defaultProps} size="large" />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h2");
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).toHaveClass("fluidus-heading--large");
  });

  it("renders medium heading (h3)", () => {
    const { getByTestId } = render(<Heading {...defaultProps} size="medium" />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h3");
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).toHaveClass("fluidus-heading--medium");
  });

  it("renders small heading (h4)", () => {
    const { getByTestId } = render(<Heading {...defaultProps} size="small" />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h4");
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).toHaveClass("fluidus-heading--small");
  });

  it("renders extra-small heading (h5)", () => {
    const { getByTestId } = render(<Heading {...defaultProps} size="xsmall" />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName.toLowerCase()).toBe("h5");
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).toHaveClass("fluidus-heading--xsmall");
  });

  it("applies custom className", () => {
    const { getByTestId } = render(
      <Heading {...defaultProps} className="custom-class" />,
    );
    const headingElement = getByTestId("heading");

    expect(headingElement).toHaveClass("fluidus-heading--xlarge");
    expect(headingElement).toHaveClass("custom-class");
  });

  it("renders with children", () => {
    const { getByTestId } = render(<Heading>Test Heading</Heading>);
    const headingElement = getByTestId("heading");

    expect(headingElement).toHaveTextContent("Test Heading");
  });

  it("renders with additional props", () => {
    const { getByTestId } = render(<Heading id="test-id" />);
    const headingElement = getByTestId("heading");

    expect(headingElement).toHaveAttribute("id", "test-id");
  });
});
