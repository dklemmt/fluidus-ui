import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Spinner, SpinnerProps } from "./Spinner";

describe("Spinner component", () => {
  const defaultProps: SpinnerProps = {};

  it("renders spinner with default props", () => {
    const { getByTestId } = render(<Spinner {...defaultProps} />);
    const spinnerElement = getByTestId("spinner-spinner") as HTMLDivElement;

    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveAttribute("role", "progressbar");
    expect(spinnerElement).toHaveAttribute("aria-busy", "true");
    expect(spinnerElement).toHaveAttribute("aria-live", "polite");
    expect(spinnerElement).toHaveAttribute("aria-label", "Loading");
    expect(spinnerElement).not.toHaveAttribute("aria-labelledby");
  });

  it("renders spinner with label", () => {
    const { getByTestId } = render(
      <Spinner {...defaultProps} label="Please wait..." />,
    );
    const spinnerElement = getByTestId("spinner-spinner") as HTMLDivElement;
    const labelElement = getByTestId("spinner-label");

    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveAttribute("role", "progressbar");
    expect(spinnerElement).toHaveAttribute("aria-busy", "true");
    expect(spinnerElement).toHaveAttribute("aria-live", "polite");
    expect(spinnerElement).not.toHaveAttribute("aria-label");
    expect(spinnerElement).toHaveAttribute("aria-labelledby");
    expect(labelElement).toHaveTextContent("Please wait...");
  });

  it("applies custom className", () => {
    const { getByTestId } = render(
      <Spinner {...defaultProps} className="custom-class" />,
    );
    const spinnerElement = getByTestId("spinner-spinner") as HTMLDivElement;

    expect(spinnerElement).toHaveClass("fluidus-spinner");
    expect(spinnerElement).toHaveClass("custom-class");
  });

  it("renders small spinner", () => {
    const { getByTestId } = render(<Spinner {...defaultProps} size="small" />);
    const spinnerElement = getByTestId("spinner-spinner") as HTMLDivElement;

    expect(spinnerElement).toHaveClass("fluidus-spinner--small");
  });
});
