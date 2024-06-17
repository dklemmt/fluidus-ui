import { clsx } from "clsx";
import { ComponentProps, PropsWithChildren } from "react";
import "./Paragraph.scss";

export interface ParagraphProps extends ComponentProps<"p">, PropsWithChildren {
  className?: string;
  size?: "large" | "medium" | "small" | "xsmall";
}

export const Paragraph = ({
  className,
  size = "medium",
  ...rest
}: ParagraphProps) => (
  <p
    className={clsx(
      "fluidus-paragraph",
      { [`fluidus-paragraph--${size}`]: size !== "medium" },
      className,
    )}
    data-testid="paragraph"
    {...rest}
  />
);

Paragraph.displayName = "Paragraph";
