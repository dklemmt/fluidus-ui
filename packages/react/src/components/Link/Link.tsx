import classNames from "classnames";
import { ComponentProps, PropsWithChildren } from "react";
import "./Link.scss";

export interface LinkProps extends PropsWithChildren {
  className?: string;
  href: string;
}

export const Link = ({
  children,
  className,
  href,
  ...rest
}: ComponentProps<"a"> & LinkProps) => (
  <a className={classNames("fluidus-link", className)} href={href} {...rest}>
    {children}
  </a>
);

export default Link;
