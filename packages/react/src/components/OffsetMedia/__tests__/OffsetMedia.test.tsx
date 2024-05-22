import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ImageProps } from "@components/Image";
import type { VideoProps } from "@components/Video";
import { OffsetMedia, OffsetMediaProps } from "../OffsetMedia";

describe("OffsetMedia component", () => {
  const imageProps: ImageProps = {
    alt: "Test Image",
    src: "https://example.com/image.jpg",
  };

  const videoProps: VideoProps = {
    source: [{ src: "https://example.com/video.mp4", type: "mp4" }],
  };

  const defaultProps: OffsetMediaProps = {
    children: <div>Test Content</div>,
    image: imageProps,
    media: { halo: false, position: "left", size: "medium" },
  };

  it("renders OffsetMedia component with image", () => {
    const { getByTestId } = render(<OffsetMedia {...defaultProps} />);
    const offsetMediaImage = getByTestId("offset-media-image");

    expect(getByTestId("offset-media")).toBeInTheDocument();
    expect(offsetMediaImage).toBeInTheDocument();
    expect(offsetMediaImage).toHaveAttribute("src", imageProps.src);
    expect(offsetMediaImage).toHaveAttribute("alt", imageProps.alt);
  });

  it("renders OffsetMedia component with video", () => {
    const { getByTestId } = render(
      <OffsetMedia {...defaultProps} image={undefined} video={videoProps} />,
    );
    const offsetMediaVideo = getByTestId("offset-media-video");

    expect(getByTestId("offset-media")).toBeInTheDocument();
    expect(offsetMediaVideo).toBeInTheDocument();
    // expect(offsetMediaVideo).toHaveAttribute("src", videoProps.source[0].src);
  });

  it("applies custom className", () => {
    const { getByTestId } = render(
      <OffsetMedia {...defaultProps} className="custom-class" />,
    );
    const offsetMediaContainer = getByTestId("offset-media") as HTMLDivElement;

    expect(offsetMediaContainer).toHaveClass("fluidus-offset-media");
    expect(offsetMediaContainer).toHaveClass("custom-class");
  });
});
