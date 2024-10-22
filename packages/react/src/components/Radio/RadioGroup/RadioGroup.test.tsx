import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";

describe("RadioGroup component", () => {
  const defaultProps: RadioGroupProps = {
    name: "test",
  };

  it("renders Radio component with default props", () => {
    const { getByTestId } = render(<RadioGroup {...defaultProps} />);
    const radioGroupElement = getByTestId("radio-group");

    expect(radioGroupElement).toBeInTheDocument();
    expect(radioGroupElement).toHaveClass("fluidus-radio-group");
  });
});
