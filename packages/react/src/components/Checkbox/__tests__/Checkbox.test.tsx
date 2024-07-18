import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Checkbox, CheckboxProps } from "../Checkbox";

describe("Checkbox component", () => {
  const defaultProps: CheckboxProps = {
    children: "Lorem ipsum dolor sit amet",
  };

  it("renders Checkbox component with default props", () => {
    const { getByTestId } = render(<Checkbox {...defaultProps} />);
    const checkboxElement = getByTestId("checkbox-input");

    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).toHaveClass("fluidus-checkbox");
  });
});
