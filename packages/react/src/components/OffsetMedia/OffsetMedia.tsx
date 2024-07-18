import { clsx } from "clsx";
import { ComponentProps, PropsWithChildren, Suspense, lazy } from "react";
import { Spinner } from "@components/Spinner";
import "./OffsetMedia.scss";

const Image = lazy(() => import("@components/Image") as never);
const Video = lazy(() => import("@components/Video") as never);

interface OffsetMediaBaseProps
  extends ComponentProps<"div">,
    PropsWithChildren {
  className?: string;
  media?: {
    halo?: boolean;
    position?: "left" | "right";
    size?: "large" | "medium" | "small";
  };
}

interface OffsetMediaImageProps extends OffsetMediaBaseProps {
  image: {
    alt?: string;
    src: string;
  };
  video?: never;
}

interface OffsetMediaVideoProps extends OffsetMediaBaseProps {
  image?: never;
  video: {
    source: [{ src: string; type: "mp4" | "ogg" | "webm" }];
    // source: Pick<VideoProps, "source">;
  };
}

export type OffsetMediaProps = OffsetMediaImageProps | OffsetMediaVideoProps;
// type MyCustomCSS = CSSProperties & Record<`--${string}`, number | string>;

export const OffsetMedia = ({
  children,
  className = "",
  image,
  media = { halo: false, position: "left", size: "medium" },
  video,
  ...rest
}: OffsetMediaProps) => {
  const { halo = false, position = "left", size = "medium" } = media;

  const classNameMedia = clsx({
    "fluidus-offset-media--media-halo": halo,
    [`fluidus-offset-media--media-${position}`]: position !== "left",
    [`fluidus-offset-media--media-${size}`]: size !== "medium",
  });

  return (
    <div
      className={clsx("fluidus-offset-media", className)}
      data-testid="offset-media"
      {...rest}
    >
      {image && (
        <Suspense fallback={<Spinner />}>
          <Image
            alt={image.alt}
            className={clsx("fluidus-offset-media--image", classNameMedia)}
            src={image.src}
            data-testid="offset-media-image"
            // style={{ "--image-size": `var(--image-size-${size})` } as MyCustomCSS}
          />
        </Suspense>
      )}
      {video && (
        <Suspense fallback={<Spinner />}>
          <Video
            autoPlay
            className={clsx("fluidus-offset-media--video", classNameMedia)}
            controls={false}
            loop
            muted
            source={video.source}
            data-testid="offset-media-video"
          />{" "}
        </Suspense>
      )}
      <div
        className="fluidus-offset-media--content"
        data-testid="offset-media-content"
      >
        {children}
      </div>
    </div>
  );
};

export default OffsetMedia;

OffsetMedia.displayName = "OffsetMedia";
