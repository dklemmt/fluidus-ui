import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Video, VideoProps } from "./Video";

describe("Video component", () => {
  const defaultProps: VideoProps = {
    poster: "https://example.com/poster.jpg",
    source: [{ src: "https://example.com/video.mp4", type: "mp4" }],
    track: [
      {
        src: "https://example.com/subtitles.vtt",
        srcLang: "en",
        label: "English",
      },
    ],
  };

  it("renders video with default props", async () => {
    const { getByTestId } = render(<Video {...defaultProps} />);
    const videoElement = getByTestId("video-video") as HTMLVideoElement;

    expect(videoElement).toBeInTheDocument();
    // expect(videoElement).toHaveAttribute("src", "https://example.com/video.mp4");
    expect(videoElement).toHaveAttribute(
      "poster",
      "https://example.com/poster.jpg",
    );
    expect(videoElement).toHaveAttribute("preload", "metadata");
    // expect(videoElement).toHaveStyle({
    //   aspectRatio: "16 / 9",
    //   objectFit: "cover",
    // });
    expect(videoElement.controls).toBe(true);
    expect(videoElement.autoplay).toBe(false);
    expect(videoElement.muted).toBe(false);
    expect(videoElement.loop).toBe(false);
    expect(videoElement.playsInline).toBe(false);
  });

  it("applies custom className", () => {
    const { container, getByTestId } = render(
      <Video {...defaultProps} className="custom-class" />,
    );
    const videoElement = getByTestId("video-video") as HTMLVideoElement;

    expect(videoElement).toHaveClass("fluidus-video");
    expect(videoElement).toHaveClass("custom-class");
  });

  it("renders video with controls disabled", () => {
    const { getByTestId } = render(
      <Video {...defaultProps} controls={false} />,
    );
    const videoElement = getByTestId("video-video") as HTMLVideoElement;

    expect(videoElement.controls).toBe(false);
  });

  it("renders video with autoPlay enabled", () => {
    const { getByTestId } = render(<Video {...defaultProps} autoPlay />);
    const videoElement = getByTestId("video-video") as HTMLVideoElement;

    expect(videoElement.autoplay).toBe(true);
  });

  it("renders video with loop enabled", () => {
    const { getByTestId } = render(<Video {...defaultProps} loop />);
    const videoElement = getByTestId("video-video") as HTMLVideoElement;

    expect(videoElement.loop).toBe(true);
  });

  it("renders video with muted enabled", () => {
    const { getByTestId } = render(<Video {...defaultProps} muted />);
    const videoElement = getByTestId("video-video") as HTMLVideoElement;

    expect(videoElement.muted).toBe(true);
  });

  // it("renders video with disablePictureInPicture enabled", () => {
  //   const { getByTestId } = render(
  //     <Video {...defaultProps} disablePictureInPicture />,
  //   );
  //   const videoElement = getByTestId("video-video") as HTMLVideoElement;
  //
  //   expect(videoElement.disablePictureInPicture).toBe(true);
  // });

  it("renders video with playsInline enabled", () => {
    const { getByTestId } = render(<Video {...defaultProps} playsInline />);
    const videoElement = getByTestId("video-video") as HTMLVideoElement;

    expect(videoElement.playsInline).toBe(true);
  });
});
