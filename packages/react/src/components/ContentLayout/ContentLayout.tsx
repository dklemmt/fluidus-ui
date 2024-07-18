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
        <article
          className={clsx("fluidus-content-layout--padding", className)}
          style={style}
        >
          {children}
        </article>
      </div>
    );
  }

  return (
    <article
      className={clsx(
        "fluidus-content-layout",
        { [`fluidus-content-layout--${size}`]: size !== "content" },
        className,
      )}
      {...rest}
    >
      {children}
    </article>
  );
};

export default ContentLayout;

ContentLayout.displayName = "ContentLayout";
