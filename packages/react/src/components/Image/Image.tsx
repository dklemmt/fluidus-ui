import { clsx } from "clsx";
import { ImageOff } from "lucide-react";
import { ComponentProps, useEffect, useRef, useState } from "react";
import "./Image.scss";

interface ImagePropsBase extends ComponentProps<"img"> {
  alt?: string;
  aspectRatio?: "3 / 2" | "4 / 3" | "16 / 9" | "auto";
  // aspectRatio?: Extract<CSSStyleDeclaration["aspectRatio"], string>;
  className?: string;
  lazy?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  // objectFit?: Extract<CSSStyleDeclaration["objectFit"], string>;
  onError?: (error: never) => void;
  // placeholder?: string;
  src: string;
}

interface ImagePropsSrcset extends ImagePropsBase {
  srcSet: string;
  sizes: string;
}

export type ImageProps = ImagePropsBase | ImagePropsSrcset;

export const Image = ({
  alt = "",
  aspectRatio = "16 / 9",
  className = "",
  lazy = true,
  objectFit = "cover",
  onError,
  // placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=",
  src,
  ...rest
}: ImageProps) => {
  // const [isShown, setIsShown] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  // const placeholderRef = useRef<HTMLImageElement>(null);

  // console.log({ imageLoaded, errorOccurred });

  useEffect(() => {
    if (!src) {
      return;
    }

    // Reset states when src changes
    setImageLoaded(false);
    setErrorOccurred(false);
  }, [src]);

  useEffect(() => {
    if (!imageRef?.current || errorOccurred) {
      return;
    }

    const image = imageRef.current;

    const handleLoad = () => {
      setImageLoaded(true);
    };

    const handleError = (error: ErrorEvent) => {
      setErrorOccurred(true);

      if (onError) {
        onError(error as never);
      }
    };

    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);

    // eslint-disable-next-line consistent-return
    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [errorOccurred, onError]);

  return (
    <>
      {!errorOccurred && (
        <img
          alt={alt}
          className={clsx(
            "fluidus-image",
            {
              "fluidus-image--fade-in": imageLoaded,
              // "fluidus-image--is-loading-placeholder": !imageLoaded,
            },
            className,
          )}
          loading={lazy ? "lazy" : "eager"}
          ref={imageRef}
          src={src}
          style={{ aspectRatio, objectFit }}
          data-testid="image-image"
          {...rest}
        />
      )}
      {errorOccurred && (
        <div
          className={clsx("fluidus-image fluidus-image-broken", className)}
          style={{ aspectRatio, objectFit }}
          data-testid="image-broken"
        >
          <ImageOff size={48} strokeWidth={1} />
        </div>
      )}
    </>
  );
};

export default Image;

Image.displayName = "Image";
