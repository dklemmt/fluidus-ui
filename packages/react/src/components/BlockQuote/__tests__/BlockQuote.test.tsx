import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BlockQuote, BlockQuoteProps } from "../BlockQuote";

describe("BlockQuote component", () => {
  const defaultProps: BlockQuoteProps = {
    children: "This is a quote.",
  };

  it("renders BlockQuote component with default props", () => {
    const { getByTestId } = render(<BlockQuote {...defaultProps} />);
    const blockQuoteElement = getByTestId("block-quote");
    const quoteElement = getByTestId("block-quote-quote");

    expect(blockQuoteElement).toBeInTheDocument();
    expect(blockQuoteElement).toHaveClass("fluidus-block-quote");
    expect(quoteElement).toBeInTheDocument();
    expect(quoteElement).toHaveTextContent("This is a quote.");
  });

  it("renders BlockQuote component with custom className", () => {
    const { getByTestId } = render(
      <BlockQuote {...defaultProps} className="custom-class" />,
    );
    const blockQuoteElement = getByTestId("block-quote");

    expect(blockQuoteElement).toBeInTheDocument();
    expect(blockQuoteElement).toHaveClass("fluidus-block-quote");
    expect(blockQuoteElement).toHaveClass("custom-class");
  });

  it("renders BlockQuote component with source", () => {
    const { getByTestId } = render(
      <BlockQuote {...defaultProps} source="Source Name" />,
    );
    const blockQuoteElement = getByTestId("block-quote");
    const sourceElement = getByTestId("block-quote-source");

    expect(blockQuoteElement).toBeInTheDocument();
    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveTextContent("Source Name");
  });

  it("renders BlockQuote component without source", () => {
    const { queryByTestId } = render(<BlockQuote {...defaultProps} />);
    const sourceElement = queryByTestId("block-quote-source");

    expect(sourceElement).not.toBeInTheDocument();
  });
});
