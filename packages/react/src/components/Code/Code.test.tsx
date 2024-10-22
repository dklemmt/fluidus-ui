import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Code, CodeProps } from "./Code";

describe("Code component", () => {
  const defaultProps: CodeProps = {
    children: "This is code.",
  };

  it("renders Code component with default props", () => {
    const { getByTestId } = render(<Code {...defaultProps} />);
    const codeElement = getByTestId("code");

    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveClass("fluidus-code");
    expect(codeElement).toHaveTextContent("This is code.");
  });
});
