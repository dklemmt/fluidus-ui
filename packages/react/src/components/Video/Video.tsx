/*
 * Good to know:
 * - https://allabouthtml.com/video-tag-in-html-a-comprehensive-guide/
 * - https://www.dacast.com/blog/video-aspect-ratio/
 */

import { clsx } from "clsx";
import { ComponentProps } from "react";
import "./Video.scss";

export interface VideoProps extends ComponentProps<"video"> {
  /** The aspect ratio of the video. */
  aspectRatio?: "1 / 1" | "3 / 2" | "16 / 9" | "9 / 16" | "auto";
  /**  */
  autoPlay?: boolean;
  /** Additional CSS classes to be applied to the video component. */
  className?: string;
  /** Whether to display video controls. */
  controls?: boolean;
  /** Whether to disable picture-in-picture mode. */
  disablePictureInPicture?: boolean;
  /** Whether to loop the video playback. */
  loop?: boolean;
  /** Whether to mute the video. */
  muted?: boolean;
  /** The object-fit property for the video element. */
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  /** Whether to play the video inline. */
  playsInline?: boolean;
  /**  */
  poster?: string;
  /** The preload behavior for the video. */
  preload?: "auto" | "metadata" | "none";
  /** An array of objects containing the video source URLs and types. */
  source: [{ src: string; type: "mp4" | "ogg" | "webm" }];
  /** An array of objects containing the track URLs, languages, and labels. */
  track?: [{ src: string; srcLang: string; label: string }];
}

export const Video = ({
  aspectRatio = "16 / 9",
  autoPlay = false,
  className = "",
  controls = true,
  disablePictureInPicture = false,
  loop = false,
  muted = false,
  objectFit = "cover",
  playsInline = false,
  poster,
  preload = "metadata",
  source,
  track,
  ...rest
}: VideoProps) => (
  // eslint-disable-next-line jsx-a11y/media-has-caption
  <video
    autoPlay={autoPlay}
    className={clsx("fluidus-video", className)}
    controls={controls}
    disablePictureInPicture={disablePictureInPicture}
    loop={loop}
    muted={muted}
    playsInline={playsInline}
    poster={poster}
    preload={preload}
    style={{ aspectRatio, objectFit }}
    data-testid="video-video"
    {...rest}
  >
    {source?.map((item) => (
      <source key={item.src} src={item.src} type={`video/${item.type}`} />
    ))}
    {track?.map((item) => (
      <track
        key={item.src}
        kind="captions"
        src={item.src}
        srcLang={item.srcLang}
        label={item.label}
      />
    ))}
  </video>
);

Video.displayName = "Video";
