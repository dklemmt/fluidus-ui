import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input, InputProps } from "./Input";

describe("Input component", () => {
  const defaultProps: InputProps = {
    label: "Lorem ipsum",
  };

  it("renders Input component with default props", () => {
    const { getByTestId } = render(<Input {...defaultProps} />);
    const inputElement = getByTestId("input-input");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("fluidus-input");
  });
});
