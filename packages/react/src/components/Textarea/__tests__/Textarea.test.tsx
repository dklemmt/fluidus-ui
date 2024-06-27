import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Textarea, TextareaProps } from "../Textarea";

describe("Textarea component", () => {
  const defaultProps: TextareaProps = {
    label: "Test Label",
  };

  it("renders Textarea component with default props", () => {
    const { getByLabelText, queryByTestId } = render(
      <Textarea {...defaultProps} />,
    );
    const textareaElement = getByLabelText("Test Label") as HTMLTextAreaElement;

    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveClass("fluidus-textarea");
    expect(textareaElement).not.toHaveClass("fluidus-textarea--error");
    expect(queryByTestId("textarea-error-text")).not.toBeInTheDocument();
  });

  it("renders Textarea component with error state", () => {
    const { getByLabelText, getByTestId } = render(
      <Textarea {...defaultProps} error errorText="Error message" />,
    );
    const textareaElement = getByLabelText("Test Label") as HTMLTextAreaElement;
    const errorTextElement = getByTestId("textarea-error-text");

    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveClass("fluidus-textarea--error");
    expect(errorTextElement).toBeInTheDocument();
    expect(errorTextElement).toHaveTextContent("Error message");
  });

  it("renders Textarea component with assistive text", () => {
    const { getByTestId } = render(
      <Textarea {...defaultProps} assistiveText="Assistive message" />,
    );
    const assistiveTextElement = getByTestId("textarea-assistive-text");

    expect(assistiveTextElement).toBeInTheDocument();
    expect(assistiveTextElement).toHaveClass("fluidus-assistive-text");
    expect(assistiveTextElement).toHaveTextContent("Assistive message");
  });

  it("renders Textarea component with custom className", () => {
    const { getByLabelText } = render(
      <Textarea {...defaultProps} className="custom-class" />,
    );
    const textareaElement = getByLabelText("Test Label") as HTMLTextAreaElement;

    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveClass("fluidus-textarea");
    expect(textareaElement).toHaveClass("custom-class");
  });

  it("handles user input correctly", () => {
    const { getByLabelText } = render(<Textarea {...defaultProps} />);
    const textareaElement = getByLabelText("Test Label") as HTMLTextAreaElement;

    fireEvent.change(textareaElement, { target: { value: "User input" } });
    expect(textareaElement.value).toBe("User input");
  });
});
