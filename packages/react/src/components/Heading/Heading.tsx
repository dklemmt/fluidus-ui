import { clsx } from "clsx";
import {
  ComponentProps,
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import "./Heading.scss";

export interface HeadingProps extends ComponentProps<"h1">, PropsWithChildren {
  className?: string;
  size?: "xlarge" | "large" | "medium" | "small" | "xsmall";
}

interface HeadingTagProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLElement> {
  className?: string;
  heading?: string | FunctionComponent;
}

const HeadingTag = ({
  children,
  heading: Heading = "h1",
  ...rest
}: HeadingTagProps) => <Heading {...rest}>{children}</Heading>;

const headingTags = {
  xlarge: "h1",
  large: "h2",
  medium: "h3",
  small: "h4",
  xsmall: "h5",
};

export const Heading = ({
  children,
  className,
  size = "xlarge",
  ...rest
}: HeadingProps) => {
  const headingClassName = clsx(
    "fluidus-heading",
    { [`fluidus-heading--${size}`]: size !== "medium" },
    className,
  );

  return (
    <HeadingTag
      className={headingClassName}
      heading={headingTags[size]}
      data-testid="heading"
      {...rest}
    >
      {children}
    </HeadingTag>
  );
};

Heading.displayName = "Heading";
