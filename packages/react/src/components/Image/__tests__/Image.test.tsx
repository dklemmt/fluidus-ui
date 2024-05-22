import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Image, ImageProps } from "@components/Image";

describe("Image component", () => {
  const defaultProps: ImageProps = {
    alt: "Test Image",
    src: "https://example.com/image.jpg",
    // placeholder:
    //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=",
  };

  it("renders image with default props", async () => {
    const { getByTestId } = render(<Image {...defaultProps} />);
    const imageElement = getByTestId("image-image") as HTMLImageElement;

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toBe("Test Image");
    expect(imageElement.src).toBe("https://example.com/image.jpg");
  });

  it("applies custom className", async () => {
    const { container } = render(
      <Image {...defaultProps} className="custom-class" />,
    );
    const imageElement = container.querySelector(
      ".fluidus-image",
    ) as HTMLImageElement;

    expect(imageElement).toHaveClass("fluidus-image");
    expect(imageElement).toHaveClass("custom-class");
  });

  it("renders image with aspect ratio", async () => {
    const { container } = render(
      <Image {...defaultProps} aspectRatio="4 / 3" />,
    );
    const imageElement = container.querySelector(
      ".fluidus-image",
    ) as HTMLImageElement;

    expect(imageElement.style.aspectRatio).toBe("4 / 3");
  });

  it("renders image with object fit", async () => {
    const { container } = render(
      <Image {...defaultProps} objectFit="contain" />,
    );
    const imageElement = container.querySelector(
      ".fluidus-image",
    ) as HTMLImageElement;

    expect(imageElement.style.objectFit).toBe("contain");
  });

  // it("renders placeholder while loading", async () => {
  //   const { container } = render(<Image {...defaultProps} />);
  //   const placeholderElement = container.querySelector(
  //     ".fluidus-image--is-loading-placeholder",
  //   );
  //
  //   expect(placeholderElement).toBeInTheDocument();
  // });

  // it("renders broken image if src is not found", async () => {
  //   const { container } = render(<Image {...defaultProps} src="" />);
  //   const brokenImageElement = container.querySelector(".fluidus-image-broken");
  //
  //   await waitFor(() => expect(brokenImageElement).toBeInTheDocument());
  // });

  // it("calls onError callback when image loading fails", async () => {
  //   const onErrorMock = jest.fn();
  //   render(<Image {...defaultProps} src="" onError={onErrorMock} />);
  //   await waitFor(() => expect(onErrorMock).toHaveBeenCalled());
  // });
});
