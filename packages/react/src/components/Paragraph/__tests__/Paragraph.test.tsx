import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Paragraph, ParagraphProps } from "../Paragraph";

describe("Paragraph component", () => {
  const defaultProps: ParagraphProps = {
    children:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  };

  it("renders default (medium) paragraph", () => {
    const { getByTestId } = render(<Paragraph {...defaultProps} />);
    const paragraphElement = getByTestId("paragraph");

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.tagName.toLowerCase()).toBe("p");
    expect(paragraphElement).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    );
    expect(paragraphElement).not.toHaveClass("fluidus-paragraph--medium");
  });

  it("renders small paragraph", () => {
    const { getByTestId } = render(
      <Paragraph {...defaultProps} size="small" />,
    );
    const paragraphElement = getByTestId("paragraph");

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.tagName.toLowerCase()).toBe("p");
    expect(paragraphElement).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    );
    expect(paragraphElement).toHaveClass("fluidus-paragraph--small");
  });

  it("renders extra-small paragraph", () => {
    const { getByTestId } = render(
      <Paragraph {...defaultProps} size="xsmall" />,
    );
    const paragraphElement = getByTestId("paragraph");

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.tagName.toLowerCase()).toBe("p");
    expect(paragraphElement).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    );
    expect(paragraphElement).toHaveClass("fluidus-paragraph--xsmall");
  });

  it("applies custom className", () => {
    const { getByTestId } = render(
      <Paragraph {...defaultProps} className="custom-class" />,
    );
    const paragraphElement = getByTestId("paragraph");

    expect(paragraphElement).toHaveClass("custom-class");
  });

  it("renders with children", () => {
    const { getByTestId } = render(<Paragraph>Test Paragraph</Paragraph>);
    const paragraphElement = getByTestId("paragraph");

    expect(paragraphElement).toHaveTextContent("Test Paragraph");
  });

  it("renders with additional props", () => {
    const { getByTestId } = render(<Paragraph id="test-id" />);
    const paragraphElement = getByTestId("paragraph");

    expect(paragraphElement).toHaveAttribute("id", "test-id");
  });
});
