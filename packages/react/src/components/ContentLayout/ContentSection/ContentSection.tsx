import { clsx } from "clsx";
import { ComponentProps, PropsWithChildren } from "react";
import "./ContentSection.scss";

export interface ContentSectionProps
  extends ComponentProps<"section">,
    PropsWithChildren {
  className?: string;
  size?: "content" | "full" | "narrow" | "wide";
}

export const ContentSection = ({
  className,
  size = "content",
  ...rest
}: ContentSectionProps) => (
  <section
    className={clsx(
      "fluidus-content-section",
      { [`fluidus-content-section--${size}`]: size !== "content" },
      className,
    )}
    {...rest}
  />
);
