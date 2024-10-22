import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Link } from "./Link";

describe("Link component", () => {
  it("renders link with children", () => {
    const { container } = render(
      <Link href="https://example.com">Click me</Link>,
    );
    const linkElement = container.firstChild as HTMLAnchorElement;

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass("fluidus-link");
    expect(linkElement).toHaveAttribute("href", "https://example.com");
    expect(linkElement.textContent).toBe("Click me");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Link href="https://example.com" className="custom-class">
        Click me
      </Link>,
    );
    const linkElement = container.firstChild as HTMLAnchorElement;

    expect(linkElement).toHaveClass("fluidus-link");
    expect(linkElement).toHaveClass("custom-class");
  });

  it("renders link with additional props", () => {
    const { container } = render(
      <Link
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click me
      </Link>,
    );
    const linkElement = container.firstChild as HTMLAnchorElement;

    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
  });
});
