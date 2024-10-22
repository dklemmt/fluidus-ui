import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Radio, RadioProps } from "./Radio";

describe("Radio component", () => {
  const defaultProps: RadioProps = {
    children: "Lorem ipsum dolor sit amet",
    value: "test",
  };

  it("renders Radio component with default props", () => {
    const { getByTestId } = render(<Radio {...defaultProps} />);
    const radioElement = getByTestId("radio-input");

    expect(radioElement).toBeInTheDocument();
    expect(radioElement).toHaveClass("fluidus-radio");
  });
});
