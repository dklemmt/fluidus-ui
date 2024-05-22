import { clsx } from "clsx";
import { ComponentProps, PropsWithChildren } from "react";
import "./ContentLayout.scss";

export interface ContentLayoutProps
  extends ComponentProps<"div">,
    PropsWithChildren {
  className?: string;
  size?:
    | "content"
    | "full"
    | "narrow"
    | "narrow-padding"
    | "wide"
    | "wide-padding";
}

export const ContentLayout = ({
  children,
  className = "",
  size = "content",
  style,
  ...rest
}: ContentLayoutProps) => {
  if (["narrow-padding", "wide-padding"].includes(size)) {
    return (
      <div
        className={clsx(
          "fluidus-content-layout",
          `fluidus-content-layout--${size}`,
        )}
        {...rest}
      >
        <div
          className={clsx("fluidus-content-layout--padding", className)}
          style={style}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "fluidus-content-layout",
        { [`fluidus-content-layout--${size}`]: size !== "content" },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
