import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ErrorText, ErrorTextProps } from "../ErrorText";

describe("ErrorText component", () => {
  const defaultProps: ErrorTextProps = {
    children: "This is an error message.",
  };

  it("renders ErrorText component with default props", () => {
    const { getByTestId } = render(<ErrorText {...defaultProps} />);
    const errorTextElement = getByTestId("error-text");

    expect(errorTextElement).toBeInTheDocument();
    expect(errorTextElement).toHaveClass("fluidus-error-text");
    expect(errorTextElement).toHaveTextContent("This is an error message.");
    expect(errorTextElement).toHaveAttribute("aria-invalid", "true");
  });

  it("renders ErrorText component with custom className", () => {
    const { getByTestId } = render(
      <ErrorText {...defaultProps} className="custom-class" />,
    );
    const errorTextElement = getByTestId("error-text");

    expect(errorTextElement).toBeInTheDocument();
    expect(errorTextElement).toHaveClass("fluidus-error-text");
    expect(errorTextElement).toHaveClass("custom-class");
  });

  it("renders ErrorText component with additional attributes", () => {
    const { getByTestId } = render(
      <ErrorText {...defaultProps} id="error-text-id" />,
    );
    const errorTextElement = getByTestId("error-text");

    expect(errorTextElement).toBeInTheDocument();
    expect(errorTextElement).toHaveAttribute("id", "error-text-id");
  });
});
