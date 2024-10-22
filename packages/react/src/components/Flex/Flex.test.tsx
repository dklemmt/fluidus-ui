import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Flex, FlexProps } from "./Flex";

describe("Flex component", () => {
  const defaultProps: FlexProps = {
    children: <div>Test Child</div>,
  };

  it("renders Flex component with default props", () => {
    const { getByTestId } = render(<Flex {...defaultProps} />);
    const flexElement = getByTestId("flex");

    expect(flexElement).toBeInTheDocument();
    expect(flexElement).toHaveClass("fluidus-flex");
    expect(flexElement).toHaveClass("fluidus-flex-gap-medium");
  });

  it("renders Flex component with custom className", () => {
    const { getByTestId } = render(
      <Flex {...defaultProps} className="custom-class" />,
    );
    const flexElement = getByTestId("flex");

    expect(flexElement).toBeInTheDocument();
    expect(flexElement).toHaveClass("fluidus-flex");
    expect(flexElement).toHaveClass("custom-class");
  });

  it("renders Flex component with different alignItems", () => {
    const { getByTestId } = render(
      <Flex {...defaultProps} alignItems="center" />,
    );
    const flexElement = getByTestId("flex");

    expect(flexElement).toBeInTheDocument();
    expect(flexElement).toHaveClass("fluidus-flex");
    expect(flexElement).toHaveClass("fluidus-flex-align-items-center");
  });

  it("renders Flex component with different justifyContent", () => {
    const { getByTestId } = render(
      <Flex {...defaultProps} justifyContent="center" />,
    );
    const flexElement = getByTestId("flex");

    expect(flexElement).toBeInTheDocument();
    expect(flexElement).toHaveClass("fluidus-flex");
    expect(flexElement).toHaveClass("fluidus-flex-justify-content-center");
  });

  it("renders Flex component with different wrap options", () => {
    const { getByTestId } = render(<Flex {...defaultProps} wrap="wrap" />);
    const flexElement = getByTestId("flex");

    expect(flexElement).toBeInTheDocument();
    expect(flexElement).toHaveClass("fluidus-flex");
    expect(flexElement).toHaveClass("fluidus-flex-wrap-wrap");
  });

  it("renders Flex component with different gaps", () => {
    const { getByTestId } = render(<Flex {...defaultProps} gap="large" />);
    const flexElement = getByTestId("flex");

    expect(flexElement).toBeInTheDocument();
    expect(flexElement).toHaveClass("fluidus-flex");
    expect(flexElement).toHaveClass("fluidus-flex-gap-large");
  });

  it("renders Flex component with children", () => {
    const { getByTestId } = render(<Flex {...defaultProps} />);
    const flexElement = getByTestId("flex");
    const childElement = flexElement.querySelector("div");

    expect(flexElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent("Test Child");
  });
});
