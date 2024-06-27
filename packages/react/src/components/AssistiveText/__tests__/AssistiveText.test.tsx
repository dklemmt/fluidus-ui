import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AssistiveText, AssistiveTextProps } from "../AssistiveText";

describe("AssistiveText component", () => {
  const defaultProps: AssistiveTextProps = {
    children: "This is assistive text.",
  };

  it("renders AssistiveText component with default props", () => {
    const { getByTestId } = render(<AssistiveText {...defaultProps} />);
    const assistiveTextElement = getByTestId("assistive-text");

    expect(assistiveTextElement).toBeInTheDocument();
    expect(assistiveTextElement).toHaveClass("fluidus-assistive-text");
    expect(assistiveTextElement).toHaveTextContent("This is assistive text.");
  });

  it("renders AssistiveText component with custom className", () => {
    const { getByTestId } = render(
      <AssistiveText {...defaultProps} className="custom-class" />,
    );
    const assistiveTextElement = getByTestId("assistive-text");

    expect(assistiveTextElement).toBeInTheDocument();
    expect(assistiveTextElement).toHaveClass("fluidus-assistive-text");
    expect(assistiveTextElement).toHaveClass("custom-class");
  });

  it("renders AssistiveText component with additional attributes", () => {
    const { getByTestId } = render(
      <AssistiveText {...defaultProps} id="assistive-text-id" />,
    );
    const assistiveTextElement = getByTestId("assistive-text");

    expect(assistiveTextElement).toBeInTheDocument();
    expect(assistiveTextElement).toHaveAttribute("id", "assistive-text-id");
  });
});
