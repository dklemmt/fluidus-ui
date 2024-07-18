import type { ImageProps } from "@components/Image";
import type { VideoProps } from "@components/Video";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { OffsetMedia, OffsetMediaProps } from "../OffsetMedia";

jest.mock("@components/Image", () => (props: ImageProps) => (
  <img data-testid="offset-media-image" {...props} />
));
jest.mock("@components/Video", () => (props: VideoProps) => (
  <video data-testid="offset-media-video" {...props} />
));

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

  it("renders OffsetMedia component with image", async () => {
    const { findByTestId } = render(<OffsetMedia {...defaultProps} />);
    const offsetMedia = await findByTestId("offset-media");
    const offsetMediaImage = await findByTestId("offset-media-image");

    expect(offsetMedia).toBeInTheDocument();
    expect(offsetMediaImage).toBeInTheDocument();
    expect(offsetMediaImage).toHaveAttribute("src", imageProps.src);
    expect(offsetMediaImage).toHaveAttribute("alt", imageProps.alt);
  });

  it("renders OffsetMedia component with video", async () => {
    const { findByTestId } = render(
      <OffsetMedia {...defaultProps} image={undefined} video={videoProps} />,
    );
    const offsetMedia = await findByTestId("offset-media");
    const offsetMediaVideo = await findByTestId("offset-media-video");

    expect(offsetMedia).toBeInTheDocument();
    expect(offsetMediaVideo).toBeInTheDocument();
    // expect(offsetMediaVideo).toHaveAttribute("src", videoProps.source[0].src);
  });

  it("applies custom className", async () => {
    const { findByTestId } = render(
      <OffsetMedia {...defaultProps} className="custom-class" />,
    );
    const offsetMedia = await findByTestId("offset-media");

    expect(offsetMedia).toHaveClass("fluidus-offset-media");
    expect(offsetMedia).toHaveClass("custom-class");
  });
});
