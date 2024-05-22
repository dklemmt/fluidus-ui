import { render } from "@testing-library/react";
import Divider from "../Divider";

describe("Divider component", () => {
  it("renders divider without children", () => {
    const { container } = render(<Divider />);
    const dividerElement = container.firstChild as HTMLElement;

    expect(dividerElement).toBeInTheDocument();
    expect(dividerElement).toHaveClass("fluidus-divider");

    const dividerLine = dividerElement.querySelector(".fluidus-divider--line");
    expect(dividerLine).toBeInTheDocument();
  });

  it("renders divider with children", () => {
    const { container, getByText } = render(<Divider>Test Content</Divider>);
    const dividerElement = container.firstChild as HTMLElement;

    expect(dividerElement).toBeInTheDocument();
    expect(dividerElement).toHaveClass("fluidus-divider");

    const dividerLineLeft = dividerElement.querySelector(
      ".fluidus-divider--line-left",
    );
    const dividerLineRight = dividerElement.querySelector(
      ".fluidus-divider--line-right",
    );
    const dividerContent = getByText("Test Content");

    expect(dividerLineLeft).toBeInTheDocument();
    expect(dividerLineRight).toBeInTheDocument();
    expect(dividerContent).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Divider className="custom-class" />);
    const headingElement = container.firstChild as HTMLElement;

    expect(headingElement).toHaveClass("custom-class");
  });
});
